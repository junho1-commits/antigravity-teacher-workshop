"""intro.html 을 프레임 단위로 렌더링해 효과음/비트를 섞은 내레이션과 합쳐 intro.mp4 로 만든다.

    python render.py                 # 전체 렌더 → intro.mp4
    python render.py --frames 5 12   # 지정한 시각(초)의 프레임만 JPG로 저장 (확인용)

순서: audio_trim.py 로 narration.wav / timeline.js 를 먼저 만들어 둘 것
"""
import argparse
import base64
import os
import subprocess
import sys
import wave

import imageio_ffmpeg
import numpy as np
from playwright.sync_api import sync_playwright

import sfx

HERE = os.path.dirname(os.path.abspath(__file__))
AUDIO = os.path.join(HERE, "audio")
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
SR, FPS, OFF = sfx.SR, 30, 1.0          # OFF 는 intro.html 의 OFF 와 같아야 함


def build_audio(total, events, out_path, music="beat", chords=None):
    n = int(total * SR)
    with wave.open(os.path.join(AUDIO, "narration.wav")) as w:
        nar = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float64) / 32768
    voice = np.zeros(n)
    s = int(OFF * SR)
    voice[s:s + len(nar)] = nar[: n - s]

    fx = np.zeros(n)
    for t0, kind in events:
        x = sfx.SOUNDS[kind]() * sfx.GAIN[kind]
        s = int(max(0, t0) * SR)
        m = min(len(x), n - s)
        fx[s:s + m] += x[:m]

    # 배경음: 내레이션이 나올 때는 낮춤(덕킹), 끝에서 페이드아웃
    level = np.convolve(np.abs(voice), np.ones(2400) / 2400, mode="same")
    duck = 1 - 0.45 * np.clip(level * 25, 0, 1)
    fade = np.clip((total - np.arange(n) / SR) / 1.2, 0, 1)
    bed = sfx.classical(total, chords) * 0.2 if music == "classic" else sfx.beat(total) * 0.16
    mix = voice + fx + bed * duck * fade
    mix /= max(1.0, np.abs(mix).max() / 0.95)

    with wave.open(out_path, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((mix * 32767).astype(np.int16).tobytes())


def grab(page, t):
    data = page.evaluate("t => window.renderAt(t)", t)
    return base64.b64decode(data.split(",", 1)[1])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--frames", nargs="*", type=float)
    ap.add_argument("--html", default="intro.html", help="렌더할 페이지 (예: intro_classic.html)")
    args = ap.parse_args()
    stem = os.path.splitext(args.html)[0]

    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge", headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto("file:///" + os.path.join(HERE, args.html).replace("\\", "/") + "?render")
        page.wait_for_function("window.READY !== undefined")
        page.evaluate("window.READY")
        total = page.evaluate("window.TOTAL")

        if args.frames:
            prev_dir = os.path.join(HERE, "preview", stem)
            os.makedirs(prev_dir, exist_ok=True)
            for t in args.frames:
                path = os.path.join(prev_dir, f"t{t:05.2f}.jpg")
                with open(path, "wb") as f:
                    f.write(grab(page, t))
                print(path)
            browser.close()
            return

        mix_path = os.path.join(AUDIO, f"{stem}_mix.wav")
        build_audio(total, page.evaluate("window.SFX"), mix_path,
                    page.evaluate("window.MUSIC || 'beat'"), page.evaluate("window.CHORDS || []"))
        print(f"오디오 믹스 완료 ({total:.2f}s)", flush=True)

        out = os.path.join(HERE, f"{stem}.mp4")
        ff = subprocess.Popen([FFMPEG, "-y", "-v", "error", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg", "-i", "-",
                               "-i", mix_path, "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
                               "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", out], stdin=subprocess.PIPE)
        frames = int(total * FPS)
        for i in range(frames):
            ff.stdin.write(grab(page, i / FPS))
            if i % 150 == 0:
                print(f"프레임 {i}/{frames}", flush=True)
        ff.stdin.close()
        ff.wait()
        browser.close()
        if ff.returncode:
            sys.exit("ffmpeg 인코딩 실패")
        print(f"완료: {out}")


if __name__ == "__main__":
    main()
