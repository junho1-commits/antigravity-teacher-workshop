"""인트로용 효과음/비트 합성 (외부 음원 없이 numpy로 생성)"""
import numpy as np

SR = 48000
rng = np.random.default_rng(3)


def lowpass(x, cutoff):
    """cutoff(Hz) 는 스칼라나 샘플별 배열"""
    cutoff = np.broadcast_to(cutoff, x.shape)
    a = 1 - np.exp(-2 * np.pi * cutoff / SR)
    y, out = 0.0, np.empty_like(x)
    for i in range(len(x)):
        y += a[i] * (x[i] - y)
        out[i] = y
    return out


def sweep(f, n):
    return np.sin(2 * np.pi * np.cumsum(f) / SR)


def whoosh():
    n = int(0.6 * SR)
    t = np.linspace(0, 1, n)
    return lowpass(rng.standard_normal(n), 300 + 5000 * np.sin(np.pi * t) ** 2) * np.sin(np.pi * t) ** 1.5 * 0.9


def boom():
    n = int(1.4 * SR)
    t = np.arange(n) / SR
    x = sweep(38 + 70 * np.exp(-t * 9), n) * np.exp(-t * 3.2)
    return (x + lowpass(rng.standard_normal(n), 2500) * np.exp(-t * 40) * 0.8) * 0.95


def stamp():
    n = int(0.5 * SR)
    t = np.arange(n) / SR
    x = sweep(90 + 120 * np.exp(-t * 25), n) * np.exp(-t * 9)
    return (x + lowpass(rng.standard_normal(n), 4000) * np.exp(-t * 30)) * 0.8


def pop():
    n = int(0.18 * SR)
    t = np.arange(n) / SR
    return sweep(600 + 900 * t / 0.18, n) * np.exp(-t * 28) * 0.45


def glitch():
    n = int(0.7 * SR)
    t = np.arange(n) / SR
    sq = np.sign(np.sin(2 * np.pi * 180 * t)) * (np.floor(t * 28) % 2)
    noise = rng.standard_normal(n) * (np.floor(t * 17) % 3 == 0)
    return (sq + noise) * 0.25 * np.exp(-t * 3)


def rise():
    n = int(1.2 * SR)
    t = np.arange(n) / SR
    x = sum(sweep(f * (1 + 1.5 * t / 1.2), n) for f in (220, 330, 440)) / 3
    e = np.minimum(t / 0.05, 1) * np.exp(-np.maximum(t - 0.4, 0) * 5)
    return x * e * 0.35


def sparkle():
    n = int(1.2 * SR)
    out = np.zeros(n)
    m = int(0.25 * SR)
    tt = np.arange(m) / SR
    for k in range(10):
        s = int(k * 0.08 * SR)
        out[s:s + m] += np.sin(2 * np.pi * (1500 + rng.random() * 2500) * tt) * np.exp(-tt * 18) * 0.18
    return out


# ─── 클래식 버전용 ───
def bell_tone(f0, dur, decay):
    n = int(dur * SR)
    t = np.arange(n) / SR
    parts = [(1, 1), (2.76, 0.5), (5.4, 0.25), (8.93, 0.12)]
    return sum(a * np.sin(2 * np.pi * f0 * r * t) * np.exp(-t * decay * r ** 0.5) for r, a in parts)


def chime():
    return bell_tone(1318.5, 2.5, 2.2) * 0.5


def bell():
    return bell_tone(1975.5, 1.2, 4) * 0.35


def timpani():
    n = int(1.8 * SR)
    t = np.arange(n) / SR
    x = sweep(98 - 20 * (1 - np.exp(-t * 4)), n) * np.exp(-t * 2.5)
    return (x + lowpass(rng.standard_normal(n), 800) * np.exp(-t * 20) * 0.6) * 0.8


def swell():
    """전환 직전 부드럽게 차오르는 소리 (1.1초 뒤가 정점)"""
    n = int(1.4 * SR)
    t = np.arange(n) / SR
    e = np.where(t < 1.1, (t / 1.1) ** 2.5, np.exp(-(t - 1.1) * 14))
    return lowpass(rng.standard_normal(n), 400 + 2500 * np.minimum(t / 1.1, 1)) * e * 0.8


def pen():
    n = int(0.4 * SR)
    t = np.arange(n) / SR
    x = np.diff(lowpass(rng.standard_normal(n + 1), 6000))
    return x * (0.6 + 0.4 * np.sin(2 * np.pi * 22 * t)) * np.sin(np.pi * t / 0.4) * 3


def typekey():
    n = int(0.04 * SR)
    t = np.arange(n) / SR
    return (np.diff(rng.standard_normal(n + 1)) * 0.5 + np.sin(2 * np.pi * 1800 * t) * 0.3) * np.exp(-t * 160)


SOUNDS = {"whoosh": whoosh, "boom": boom, "stamp": stamp, "pop": pop, "glitch": glitch, "rise": rise, "sparkle": sparkle,
          "chime": chime, "bell": bell, "timpani": timpani, "swell": swell, "pen": pen, "type": typekey}
GAIN = {"whoosh": 0.35, "boom": 0.55, "stamp": 0.45, "pop": 0.35, "glitch": 0.3, "rise": 0.3, "sparkle": 0.4,
        "chime": 0.3, "bell": 0.25, "timpani": 0.45, "swell": 0.25, "pen": 0.3, "type": 0.25}

# 화음: C4 기준 반음 수
CHORDS = {"C": [0, 4, 7], "Dm": [2, 5, 9], "Em": [4, 7, 11], "E": [4, 8, 11], "F": [5, 9, 12], "G": [7, 11, 14], "Am": [9, 12, 16]}


def freq(semi):
    return 261.63 * 2 ** (semi / 12)


def string_note(f, dur, attack=0.9, release=1.2):
    n = int((dur + release) * SR)
    t = np.arange(n) / SR
    x = sum(np.sin(2 * np.pi * f * k * t * d) / k ** 1.4 for k in range(1, 7) for d in (0.998, 1.002)) / 2
    e = np.minimum(t / attack, 1) * np.where(t < dur, 1, np.exp(-(t - dur) * 4))
    return x * e * (1 + 0.03 * np.sin(2 * np.pi * 5 * t))  # 약한 비브라토


def piano_note(f, dur=1.8):
    n = int(dur * SR)
    t = np.arange(n) / SR
    return sum(np.sin(2 * np.pi * f * k * t) / k ** 2 * np.exp(-t * 2.5 * k ** 0.6) for k in range(1, 5)) * np.minimum(t / 0.004, 1)


def classical(total, cues):
    """cues: [[시각, 화음], ...] → 현악 패드 + 피아노 아르페지오"""
    n = int(total * SR)
    out = np.zeros(n + 5 * SR)
    for i, (t0, name) in enumerate(cues):
        t1 = cues[i + 1][0] if i + 1 < len(cues) else total
        dur, s = max(0.3, t1 - t0), int(t0 * SR)
        tones = CHORDS[name]
        for semi, amp in [(tones[0] - 24, 0.5)] + [(x - 12, 0.28) for x in tones]:
            x = string_note(freq(semi), dur) * amp
            out[s:s + len(x)] += x
        arp = [tones[0], tones[1], tones[2], tones[0] + 12, tones[2], tones[1]]
        k = 0
        while k * 0.42 < dur - 0.1:
            x = piano_note(freq(arp[k % len(arp)])) * 0.3
            p = s + int(k * 0.42 * SR)
            out[p:p + len(x)] += x
            k += 1
    out = out[:n]
    return out / max(1e-9, np.abs(out).max())


def beat(total):
    """120BPM 킥 + 하이햇 (배경 리듬)"""
    n = int(total * SR)
    out = np.zeros(n)
    kn = int(0.3 * SR)
    kt = np.arange(kn) / SR
    kick = sweep(45 + 110 * np.exp(-kt * 30), kn) * np.exp(-kt * 9) * 0.9
    hn = int(0.05 * SR)
    hat = np.diff(rng.standard_normal(hn + 1)) * np.exp(-np.arange(hn) / SR * 90) * 0.25
    for i in range(int(total / 0.25)):
        s = int(i * 0.25 * SR)
        x = kick if i % 2 == 0 else hat
        m = min(len(x), n - s)
        out[s:s + m] += x[:m]
    return out
