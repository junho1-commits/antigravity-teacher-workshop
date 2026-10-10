"""대본 대사를 Typecast API로 음성(mp3) 파일로 만든다.

준비: 같은 폴더의 typecast_config.json 에 api_key 입력

사용법:
    python typecast_tts.py --list-voices   # 목소리 ID 확인 → config의 voice_id에 입력
    python typecast_tts.py                 # 전체 대사 생성 (장면별 mp3)
    python typecast_tts.py --short         # 15초 숏폼 버전만 생성

결과: ./audio/01_scene1.mp3 ... 순서대로 저장
"""
import argparse
import json
import os
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(HERE, "typecast_config.json")
API_BASE = "https://api.typecast.ai/v1"
MODEL = "ssfm-v21"

# (파일 이름, 감정, 대사) — 장면 단위로 끊어서 편집 시 타이밍을 맞추기 쉽게 함
SCRIPT = [
    ("01_scene1", "normal", "수업에 쓸 퀴즈 앱이 필요했어요. 그래서 재미나이에게 물었죠."),
    ("02_scene2", "sad", "돌아온 건 긴 코드 한 뭉치. 어디에 붙여야 하지? 왜 안 되지? 대답은 해주지만, 만들어주지는 않았어요."),
    ("03_scene3", "happy", "안티그래비티는 달라요. 말로 부탁하면, 에이전트가 직접 파일을 만들고, 실행해 보고, 오류까지 스스로 고칩니다."),
    ("04_scene4", "normal", "그러니 선생님이 코딩을 배울 필요는 없어요. 코드는 AI가 씁니다."),
    ("05_scene5", "normal", "대신 AI가 절대 대신할 수 없는 게 있죠. 이 개념을 아이들이 어디서 헷갈리는지, 어떤 순서로, 어떤 활동으로 가르쳐야 하는지. 바로 선생님의 피씨케이, 교수내용지식입니다."),
    ("06_scene6", "happy", "무엇을 만들지는 선생님이, 어떻게 만들지는 안티그래비티가. 코딩보다 수업을 아는 선생님이, 가장 좋은 앱을 만듭니다."),
]

SHORT_SCRIPT = [
    ("short_01", "happy", "재미나이는 대답하고, 안티그래비티는 만듭니다. 코드는 AI가 쓰니, 선생님은 코딩을 배울 필요 없어요. 필요한 건 단 하나, 수업을 아는 힘, 피씨케이."),
]


def load_config():
    try:
        with open(CONFIG_PATH, encoding="utf-8") as f:
            config = json.load(f)
    except FileNotFoundError:
        sys.exit(f"설정 파일이 없습니다: {CONFIG_PATH}")
    key = config.get("api_key", "")
    if not key or key.startswith("여기에"):
        sys.exit("typecast_config.json 의 api_key 에 Typecast API 키를 입력하세요.")
    return config


def request(method, path, api_key, body=None):
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(
        API_BASE + path,
        data=data,
        method=method,
        headers={"X-API-KEY": api_key, "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            return res.read()
    except urllib.error.HTTPError as e:
        sys.exit(f"API 오류 {e.code}: {e.read().decode('utf-8', 'replace')}")


def list_voices(api_key):
    voices = json.loads(request("GET", f"/voices?model={MODEL}", api_key))
    for v in voices:
        emotions = ",".join(v.get("emotions", []))
        print(f"{v.get('voice_id')}\t{v.get('voice_name')}\t[{emotions}]")


def synthesize(api_key, voice_id, lines, tempo):
    out_dir = os.path.join(HERE, "audio")
    os.makedirs(out_dir, exist_ok=True)
    for name, emotion, text in lines:
        body = {
            "voice_id": voice_id,
            "text": text,
            "model": MODEL,
            "language": "kor",
            "prompt": {"emotion_preset": emotion, "emotion_intensity": 1.0},
            "output": {"audio_format": "mp3", "audio_tempo": tempo},
        }
        audio = request("POST", "/text-to-speech", api_key, body)
        path = os.path.join(out_dir, f"{name}.mp3")
        with open(path, "wb") as f:
            f.write(audio)
        print(f"저장: {path}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--list-voices", action="store_true")
    parser.add_argument("--short", action="store_true", help="15초 숏폼 버전만 생성")
    args = parser.parse_args()

    config = load_config()
    if args.list_voices:
        list_voices(config["api_key"])
        return
    if not config.get("voice_id"):
        sys.exit("typecast_config.json 의 voice_id 를 입력하세요. (--list-voices 로 확인)")

    synthesize(
        config["api_key"],
        config["voice_id"],
        SHORT_SCRIPT if args.short else SCRIPT,
        float(config.get("tempo", 1.0)),
    )


if __name__ == "__main__":
    main()
