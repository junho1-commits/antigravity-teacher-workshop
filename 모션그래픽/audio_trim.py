"""장면별 mp3의 무음 구간을 잘라 하나의 내레이션 파일로 합치고 타이밍 정보를 만든다.

결과:
    audio/narration.wav   무음이 제거된 전체 내레이션
    timeline.json         장면/구간(phrase)별 시작·끝 시간 (영상 동기화용)
"""
import json
import os
import subprocess
import wave

import imageio_ffmpeg
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
AUDIO = os.path.join(HERE, "audio")
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
SR = 48000

SCENES = ["01_scene1", "02_scene2", "03_scene3", "04_scene4", "05_scene5", "06_scene6"]
FRAME = 0.01            # 10ms 단위로 음량 측정
THRESH_DB = -42         # 이보다 작으면 무음
MIN_SILENCE = 0.12      # 이 이상 이어지는 무음만 자름
KEEP_GAP = 0.06         # 문장 사이에 남길 호흡
SCENE_GAP = 0.12        # 장면 사이에 남길 호흡


def decode(path):
    raw = subprocess.run(
        [FFMPEG, "-v", "error", "-i", path, "-f", "s16le", "-ac", "1", "-ar", str(SR), "-"],
        check=True, capture_output=True,
    ).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def speech_segments(x):
    """음성이 있는 구간 [(start_sample, end_sample), ...]"""
    n = int(SR * FRAME)
    frames = len(x) // n
    rms = np.sqrt(np.mean(x[: frames * n].reshape(frames, n) ** 2, axis=1) + 1e-12)
    loud = 20 * np.log10(rms) > THRESH_DB

    segs, start = [], None
    for i, v in enumerate(loud):
        if v and start is None:
            start = i
        elif not v and start is not None:
            segs.append([start, i])
            start = None
    if start is not None:
        segs.append([start, frames])

    # 짧은 무음(자음 사이 등)은 이어 붙임
    merged = []
    for s, e in segs:
        if merged and (s - merged[-1][1]) * FRAME < MIN_SILENCE:
            merged[-1][1] = e
        else:
            merged.append([s, e])
    # 너무 짧은 잡음 제거, 앞뒤로 20ms 여유
    pad = 2
    return [(max(0, s - pad) * n, min(frames, e + pad) * n) for s, e in merged if (e - s) * FRAME > 0.05]


def main():
    out, timeline, t = [], [], 0.0
    report = []
    for i, name in enumerate(SCENES):
        x = decode(os.path.join(AUDIO, name + ".mp3"))
        segs = speech_segments(x)
        scene = {"id": name, "start": round(t, 3), "phrases": []}
        for j, (s, e) in enumerate(segs):
            if j:
                out.append(np.zeros(int(SR * KEEP_GAP), np.float32))
                t += KEEP_GAP
            chunk = x[s:e]
            # 이음새 클릭 방지 5ms 페이드
            f = min(len(chunk) // 2, int(SR * 0.005))
            chunk = chunk.copy()
            chunk[:f] *= np.linspace(0, 1, f)
            chunk[-f:] *= np.linspace(1, 0, f)
            out.append(chunk)
            scene["phrases"].append([round(t, 3), round(t + len(chunk) / SR, 3)])
            t += len(chunk) / SR
        scene["end"] = round(t, 3)
        timeline.append(scene)
        report.append(f"{name}: 원본 {len(x)/SR:.2f}s → {scene['end']-scene['start']:.2f}s, 구간 {len(segs)}개")
        if i < len(SCENES) - 1:
            out.append(np.zeros(int(SR * SCENE_GAP), np.float32))
            t += SCENE_GAP

    audio = np.concatenate(out)
    with wave.open(os.path.join(AUDIO, "narration.wav"), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((np.clip(audio, -1, 1) * 32767).astype(np.int16).tobytes())

    data = {"duration": round(t, 3), "scenes": timeline}
    with open(os.path.join(HERE, "timeline.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    # file:// 로 연 HTML에서도 읽을 수 있게 JS로도 저장
    with open(os.path.join(HERE, "timeline.js"), "w", encoding="utf-8") as f:
        f.write("window.TIMELINE = " + json.dumps(data) + ";\n")

    print("\n".join(report))
    print(f"전체 길이: {t:.2f}s")


if __name__ == "__main__":
    main()
