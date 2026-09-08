/**
 * Antigravity Interactive Slides Data
 */

var SLIDES_DATA = [
  {
    "id": 1,
    "title": "오프닝",
    "badge": "🚀 연수 시작",
    "content": "\n      <div class=\"h-full flex flex-col justify-center items-center text-center px-4 w-full max-w-6xl mx-auto\">\n        <div class=\"inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-base md:text-lg font-bold mb-6\">\n          <i data-lucide=\"sparkles\" class=\"w-5 h-5 text-indigo-400\"></i>\n          <span>선생님을 위한 AI 에이전트 앱 개발 입문</span>\n        </div>\n        \n        <h1 class=\"text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight break-keep\">\n          이것만 알면 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400\">준호처럼</span> 할 수 있다!\n        </h1>\n        \n        <p class=\"text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mb-10 font-semibold leading-relaxed break-keep\">\n          코딩을 몰라도, 구글 <span class=\"text-sky-400 font-bold underline decoration-sky-500 underline-offset-8\">안티그래비티</span>와 대화하면 우리 반 웹앱이 뚝딱 완성됩니다.\n        </p>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-10\">\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700\">\n            <div class=\"flex items-center gap-3 mb-3\">\n              <div class=\"p-2.5 rounded-xl bg-blue-500/20 text-blue-400\"><i data-lucide=\"bot\" class=\"w-6 h-6\"></i></div>\n              <h3 class=\"text-xl font-bold text-white\">1. 에이전트 혁명</h3>\n            </div>\n            <p class=\"text-base text-slate-300 font-medium break-keep\">말만 하는 챗봇을 넘어, 직접 코딩하고 실행해 주는 똑똑한 조교</p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700\">\n            <div class=\"flex items-center gap-3 mb-3\">\n              <div class=\"p-2.5 rounded-xl bg-purple-500/20 text-purple-400\"><i data-lucide=\"heart\" class=\"w-6 h-6\"></i></div>\n              <h3 class=\"text-xl font-bold text-white\">2. 교실 도메인 지식</h3>\n            </div>\n            <p class=\"text-base text-slate-300 font-medium break-keep\">기술 지식보다 선생님의 교실 문제의식과 아이디어가 100배 중요</p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700\">\n            <div class=\"flex items-center gap-3 mb-3\">\n              <div class=\"p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400\"><i data-lucide=\"globe\" class=\"w-6 h-6\"></i></div>\n              <h3 class=\"text-xl font-bold text-white\">3. 인터넷 무료 배포</h3>\n            </div>\n            <p class=\"text-base text-slate-300 font-medium break-keep\">GitHub과 Netlify로 스마트폰 링크 하나 띄워 학생들과 공유</p>\n          </div>\n        </div>\n\n        <button onclick=\"window.nextSlide()\" class=\"inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold shadow-xl shadow-indigo-500/30 transition-all transform hover:scale-105\">\n          <span>강의 시작하기</span>\n          <i data-lucide=\"arrow-right\" class=\"w-6 h-6\"></i>\n        </button>\n      </div>\n    ",
    "agentInsights": {
      "pm": "오프닝 슬라이드가 24인치 화면에서 시원하고 직관적으로 읽히도록 정돈했습니다.",
      "content": "에이전트, 도메인 지식, 무료 배포라는 3대 축을 명쾌하게 요약했습니다.",
      "design": "글래스 카드와 고급형 타이포그래피로 몰입감을 극대화합니다.",
      "qa": "오프닝에서 문장 꺾임이나 글자 잘림이 전혀 발생하지 않습니다.",
      "consultant": "선생님들이 '나도 바로 써먹을 수 있겠구나' 자신감을 갖게 합니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 오늘 연수는 코딩 문법을 배우는 시간이 아닙니다! 실력 좋은 AI 조교에게 제대로 일 시키는 '지시법'을 배우는 시간입니다. 편안한 마음으로 시작해보겠습니다.\"\n    "
  },
  {
    "id": 2,
    "title": "마인드셋 전환",
    "badge": "💡 패러다임 전환",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-8\">\n          <span class=\"text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider\">패러다임의 변화</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"선생님, 코딩 배우러 오신 게 아닙니다!\"\n          </h2>\n          <p class=\"text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep\">우리가 코딩을 포기했던 이유와 지금 일어난 거대한 변화</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-8\">\n          <!-- Past Coding -->\n          <div class=\"glass-card p-8 rounded-3xl border border-rose-500/40 bg-rose-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-4\">\n                <span class=\"px-4 py-1.5 rounded-full bg-rose-500/30 text-rose-300 font-bold text-sm\">과거의 개발 방식</span>\n                <i data-lucide=\"x-circle\" class=\"w-7 h-7 text-rose-400\"></i>\n              </div>\n              <h3 class=\"text-2xl md:text-3xl font-extrabold text-white mb-4\">문법 암기와 오타 찾기</h3>\n              <ul class=\"space-y-4 text-base md:text-lg text-slate-200 font-medium\">\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-rose-400 text-xl font-bold\">✕</span>\n                  <span class=\"break-keep\">세미콜론(;) 하나 빠졌다고 3시간 헤매기</span>\n                </li>\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-rose-400 text-xl font-bold\">✕</span>\n                  <span class=\"break-keep\">영어 문법과 변수, 함수 외우다 지치기</span>\n                </li>\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-rose-400 text-xl font-bold\">✕</span>\n                  <span class=\"break-keep\">복잡한 프로그램 설치하다가 첫날 포기</span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"mt-8 p-4 rounded-2xl bg-rose-900/40 text-rose-200 text-base md:text-lg font-bold text-center\">\n              👉 내가 직접 벽돌을 굽고 쌓는 '벽돌공'\n            </div>\n          </div>\n\n          <!-- Future Agentic Coding -->\n          <div class=\"glass-card p-8 rounded-3xl border border-emerald-500/50 bg-emerald-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-4\">\n                <span class=\"px-4 py-1.5 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-sm\">지금의 에이전틱 개발</span>\n                <i data-lucide=\"check-circle-2\" class=\"w-7 h-7 text-emerald-400\"></i>\n              </div>\n              <h3 class=\"text-2xl md:text-3xl font-extrabold text-white mb-4\">말로 지시하는 총괄 건축가</h3>\n              <ul class=\"space-y-4 text-base md:text-lg text-slate-200 font-medium\">\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-emerald-400 text-xl font-bold\">✓</span>\n                  <span class=\"break-keep\">한국어로 교실 상황과 필요한 기능만 설명하기</span>\n                </li>\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-emerald-400 text-xl font-bold\">✓</span>\n                  <span class=\"break-keep\">복잡한 코딩과 파일 생성은 AI가 전담</span>\n                </li>\n                <li class=\"flex items-center gap-3\">\n                  <span class=\"text-emerald-400 text-xl font-bold\">✓</span>\n                  <span class=\"break-keep\">선생님은 \"우리 반에 유용한가?\"만 판단하기</span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"mt-8 p-4 rounded-2xl bg-emerald-900/40 text-emerald-200 text-base md:text-lg font-bold text-center\">\n              👉 최고의 건축팀을 지휘하는 '총괄 감독관'\n            </div>\n          </div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "벽돌공 vs 건축가 대비로 선생님의 정체성을 재정의했습니다.",
      "content": "코딩 문법에 얽매이지 않고 기획에 집중해야 한다는 논리가 명확합니다.",
      "design": "빨강과 초록 카드 대비로 한눈에 차이가 느껴집니다.",
      "qa": "텍스트 겹침이나 불필요한 줄바꿈이 전혀 없습니다.",
      "consultant": "연수 초반에 이 장표를 보면 선생님들의 표정이 눈에 띄게 편안해집니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"집 지을 때 벽돌 굽는 법부터 배우지 않죠? 설계도만 가지고 전문가에게 '방 3개 만들어주세요' 하듯이, 이제 개발도 선생님의 아이디어를 AI에게 말로 전달하면 됩니다.\"\n    "
  },
  {
    "id": 3,
    "title": "도메인 지식의 힘",
    "badge": "🧠 핵심 가치",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider\">도메인 지식이란?</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mt-1 leading-tight break-keep\">\n            \"AI 지식보다 '교실 도메인 지식'이 100배 중요합니다\"\n          </h2>\n          <p class=\"text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep\">선생님이 매일 교실에서 겪는 경험과 고민이 최고의 기획서입니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6\">\n          <div class=\"glass-card p-6 rounded-2xl border border-sky-500/30\">\n            <div class=\"text-sky-300 mb-2 text-lg font-bold flex items-center gap-2\">\n              <i data-lucide=\"users\" class=\"w-5 h-5\"></i> 1. 아이들 눈높이\n            </div>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"저학년은 글씨가 크고 소리가 나야 집중해\"<br>\n              \"자리 바꿀 땐 시력과 교우 관계를 배려해야 해\"\n            </p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-purple-500/30\">\n            <div class=\"text-purple-300 mb-2 text-lg font-bold flex items-center gap-2\">\n              <i data-lucide=\"book-open\" class=\"w-5 h-5\"></i> 2. 수업 운영 노하우\n            </div>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"모둠 토의는 딱 3분 타이머가 제일 효과적이야\"<br>\n              \"수행평가 체크리스트는 이 항목이 필수적이야\"\n            </p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-emerald-500/30\">\n            <div class=\"text-emerald-300 mb-2 text-lg font-bold flex items-center gap-2\">\n              <i data-lucide=\"check-square\" class=\"w-5 h-5\"></i> 3. 학급 행정 규칙\n            </div>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"청소 구역 당번은 1주일씩 돌아가야 공평해\"<br>\n              \"가정통신문 알림장은 이 양식으로 정리해야 해\"\n            </p>\n          </div>\n        </div>\n\n        <!-- Interactive Domain Knowledge Quiz -->\n        <div class=\"glass-panel p-6 rounded-2xl border border-indigo-500/40 text-center\">\n          <h4 class=\"text-lg md:text-xl font-bold text-indigo-300 mb-2 flex items-center justify-center gap-2\">\n            <i data-lucide=\"help-circle\" class=\"w-6 h-6\"></i> [생각해보기] 실리콘밸리 코딩 천재 vs 10년 차 초등 교사\n          </h4>\n          <p class=\"text-base md:text-lg text-slate-200 mb-4 font-medium break-keep\">\n            초등학교 수업에 진짜 쓸모 있는 웹앱을 기획할 사람은 누구일까요?\n          </p>\n          <div class=\"flex flex-wrap justify-center gap-4\">\n            <button onclick=\"window.checkQuiz(this, false)\" class=\"px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-base font-bold transition-all\">\n              A. 코딩 천재 개발자\n            </button>\n            <button onclick=\"window.checkQuiz(this, true)\" class=\"px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-base font-bold transition-all shadow-lg shadow-indigo-500/30\">\n              B. 교실 아이들을 제일 잘 아는 현장 교사\n            </button>\n          </div>\n          <div id=\"quiz-feedback\" class=\"mt-3 text-base md:text-lg font-bold text-amber-300 hidden\"></div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "제목이 완벽하게 1줄로 출력되어 시각적 안정감이 극대화되었습니다.",
      "content": "도메인 지식의 핵심 메시지가 시원하게 전달됩니다.",
      "design": "글자 크기와 컨테이너 너비(max-w-6xl)를 완벽히 조율했습니다.",
      "qa": "24인치 화면에서 제목이 1줄로 완벽히 출력됨을 검증했습니다.",
      "consultant": "개발자보다 교사의 아이디어가 더 소중하다는 점을 명확히 각인시킵니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"개발자는 코드는 잘 짤지 몰라도, 교실에서 아이들이 언제 떠들고 언제 집중하는지는 모릅니다. 무엇을 만들어야 할지 결정하는 힘은 오직 선생님에게만 있습니다.\"\n    "
  },
  {
    "id": 4,
    "title": "엔지니어링이란?",
    "badge": "⚙️ 본질 이해",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-8\">\n          <span class=\"text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider\">엔지니어링의 본질</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"엔지니어링이란, 불편함을 시스템으로 해결하는 것입니다\"\n          </h2>\n          <p class=\"text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep\">기술을 외우는 것이 아니라, 문제 해결 순서를 정리하는 사고방식</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n          <!-- Step 1 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center\">\n            <div class=\"w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-extrabold text-2xl mb-4\">1</div>\n            <h3 class=\"text-xl font-bold text-white mb-2\">문제 발견</h3>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"매달 자리 바꿀 때마다 쪽지 뽑느라 1교시가 다 날아가고 불만이 나온다.\"\n            </p>\n            <span class=\"mt-4 text-sm font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300\">불편함 포착</span>\n          </div>\n\n          <!-- Step 2 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center\">\n            <div class=\"w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-2xl mb-4\">2</div>\n            <h3 class=\"text-xl font-bold text-white mb-2\">규칙(로직) 정리</h3>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"버튼 하나 누르면 남녀 섞고, 시력 배려석 우선 배정한 뒤 랜덤 배치하자.\"\n            </p>\n            <span class=\"mt-4 text-sm font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300\">해결 규칙 설계</span>\n          </div>\n\n          <!-- Step 3 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center\">\n            <div class=\"w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-2xl mb-4\">3</div>\n            <h3 class=\"text-xl font-bold text-white mb-2\">AI로 시스템 구축</h3>\n            <p class=\"text-base text-slate-300 leading-relaxed font-medium break-keep\">\n              \"안티그래비티에게 규칙을 말하고 30초 만에 웹앱으로 만들어 학교 공유.\"\n            </p>\n            <span class=\"mt-4 text-sm font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300\">엔지니어링 완성</span>\n          </div>\n        </div>\n\n        <div class=\"mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-700 text-center text-base md:text-lg text-slate-200 font-semibold break-keep\">\n          ✨ <span class=\"text-amber-300 font-bold\">선생님은 1단계(문제 찾기)와 2단계(규칙 정하기)만 하세요.</span> 3단계 코딩은 안티그래비티가 다 합니다!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "엔지니어링 3단계의 폰트와 너비가 균형감 있게 맞아떨어집니다.",
      "content": "선생님이 해야 할 일과 AI가 할 일을 명쾌히 구분했습니다.",
      "design": "대칭적 3단 카드 레이아웃으로 가독성을 높였습니다.",
      "qa": "모든 텍스트가 단어 단위로 깔끔히 줄바꿈됩니다.",
      "consultant": "선생님들이 일상에서 느끼는 불편함이 곧 훌륭한 앱 개발 주제임을 깨닫게 됩니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, '엔지니어링'은 어려운 수학이 아닙니다. '이 불편한 걸 어떻게 하면 다음엔 안 불편하게 시스템으로 만들까?' 생각하는 것이 바로 엔지니어링입니다.\"\n    "
  },
  {
    "id": 5,
    "title": "챗봇 vs 에이전트",
    "badge": "🤖 비교 체험",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-indigo-400 font-bold text-base md:text-lg uppercase tracking-wider\">챗봇 vs 에이전트</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"왜 Gemini가 아니라 안티그래비티(에이전트)여야 할까요?\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">아래 버튼을 눌러 챗봇과 에이전트의 일하는 방식 차이를 직접 체험해보세요!</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n          <!-- Chatbot Box -->\n          <div class=\"glass-card p-6 rounded-3xl border border-slate-700 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-3\">\n                <div class=\"flex items-center gap-2\">\n                  <div class=\"p-2 rounded-xl bg-slate-700 text-slate-300\"><i data-lucide=\"message-square\" class=\"w-5 h-5\"></i></div>\n                  <h3 class=\"font-bold text-white text-lg\">일반 챗봇 (Gemini 웹)</h3>\n                </div>\n                <span class=\"text-xs text-slate-400 font-bold px-2.5 py-1 rounded bg-slate-800\">말만 하는 조언자</span>\n              </div>\n              <p class=\"text-sm text-slate-400 mb-3 font-medium\">\"자리배치 웹앱 만들어줘\"라고 요청했을 때:</p>\n              \n              <div id=\"chatbot-output\" class=\"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs md:text-sm font-mono text-slate-400 h-40 overflow-y-auto leading-relaxed\">\n                <span class=\"text-slate-500\">// 대기 중... 아래 회색 버튼을 누르세요.</span>\n              </div>\n            </div>\n            \n            <button onclick=\"window.runChatbotSim()\" class=\"mt-4 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm md:text-base font-bold transition-all\">\n              Gemini 챗봇에게 요청해보기\n            </button>\n          </div>\n\n          <!-- Agent Box -->\n          <div class=\"glass-card p-6 rounded-3xl border border-indigo-500/50 bg-indigo-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-3\">\n                <div class=\"flex items-center gap-2\">\n                  <div class=\"p-2 rounded-xl bg-indigo-500 text-white\"><i data-lucide=\"bot\" class=\"w-5 h-5\"></i></div>\n                  <h3 class=\"font-bold text-indigo-200 text-lg\">안티그래비티 (AI 에이전트)</h3>\n                </div>\n                <span class=\"text-xs text-indigo-300 font-bold px-2.5 py-1 rounded bg-indigo-500/20\">대신 일해주는 실무 조교</span>\n              </div>\n              <p class=\"text-sm text-indigo-300/80 mb-3 font-medium\">\"자리배치 웹앱 만들어줘\"라고 요청했을 때:</p>\n              \n              <div id=\"agent-output\" class=\"bg-slate-950 p-4 rounded-xl border border-indigo-500/40 text-xs md:text-sm font-mono text-slate-200 h-40 overflow-y-auto leading-relaxed\">\n                <span class=\"text-slate-500\">// 대기 중... 아래 보라색 버튼을 누르세요.</span>\n              </div>\n            </div>\n\n            <button onclick=\"window.runAgentSim()\" class=\"mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm md:text-base font-bold transition-all shadow-lg shadow-indigo-500/30\">\n              안티그래비티 에이전트에게 요청하기 (체험)\n            </button>\n          </div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "챗봇과 안티그래비티의 차이가 시뮬레이터를 통해 직관적으로 비교됩니다.",
      "content": "코드를 던져주는 챗봇 vs 실제로 파일을 만들고 실행해 주는 에이전트를 대비했습니다.",
      "design": "터미널 텍스트 박스의 글자 크기와 줄간격을 24인치에 맞췄습니다.",
      "qa": "두 버튼 클릭 시 실제 동작 시뮬레이션이 매끄럽게 재생됩니다.",
      "consultant": "선생님들이 챗봇 쓸 때 느꼈던 답답함을 한 방에 날려주는 명쾌한 슬라이드입니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"챗봇에게 코딩 시키면 500줄짜리 영어를 던져주고 '알아서 쓰세요' 하죠? 하지만 안티그래비티는 자기가 알아서 폴더 만들고 브라우저까지 띄워줍니다.\"\n    "
  },
  {
    "id": 6,
    "title": "에이전트 협업 시스템",
    "badge": "👥 멀티 에이전트",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider\">에이전트 협업 체계</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"혼자 일하는 AI보다 팀으로 협업하는 AI가 강합니다\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">지금 보시는 이 강의 슬라이드도 아래 5개 에이전트 팀이 협업하여 완성했습니다!</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6\">\n          <!-- PM -->\n          <div class=\"glass-card p-5 rounded-2xl border border-amber-500/40 text-center\">\n            <div class=\"text-3xl mb-2\">👑</div>\n            <h4 class=\"font-bold text-amber-300 text-base mb-1\">총괄 선임 (PM)</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">작업 분배, 일정 조율, 최종 결과물 취합</p>\n          </div>\n\n          <!-- Writer -->\n          <div class=\"glass-card p-5 rounded-2xl border border-blue-500/40 text-center\">\n            <div class=\"text-3xl mb-2\">✍️</div>\n            <h4 class=\"font-bold text-blue-300 text-base mb-1\">내용 개발팀</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">교사 눈높이 설명 및 쉬운 교육 비유 개발</p>\n          </div>\n\n          <!-- Designer -->\n          <div class=\"glass-card p-5 rounded-2xl border border-pink-500/40 text-center\">\n            <div class=\"text-3xl mb-2\">🎨</div>\n            <h4 class=\"font-bold text-pink-300 text-base mb-1\">디자인팀</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">대화면 글자 크기, 색상, 심플 UI 배치</p>\n          </div>\n\n          <!-- QA/Critic -->\n          <div class=\"glass-card p-5 rounded-2xl border border-emerald-500/40 text-center\">\n            <div class=\"text-3xl mb-2\">🔍</div>\n            <h4 class=\"font-bold text-emerald-300 text-base mb-1\">검수팀 (QA)</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">오탈자 검증, 에러 점검, 가독성 확인</p>\n          </div>\n\n          <!-- Consultant -->\n          <div class=\"glass-card p-5 rounded-2xl border border-indigo-500/40 text-center\">\n            <div class=\"text-3xl mb-2\">💡</div>\n            <h4 class=\"font-bold text-indigo-300 text-base mb-1\">컨설턴트팀</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">현장 교사 관점 피드백 및 실용성 조언</p>\n          </div>\n        </div>\n\n        <div class=\"glass-panel p-4 rounded-2xl border border-slate-700 text-center text-sm md:text-base font-semibold text-slate-200 break-keep\">\n          🔄 <strong>자체 피드백 루프:</strong> 내용 작성 ➔ 컨설턴트 지적 ➔ 디자인 수정 ➔ 검수 확인 ➔ 완성도 극대화!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "사용자가 제시한 5인 팀 모델을 5개 카드로 깔끔하게 정리했습니다.",
      "content": "학교의 부서 협업(교무부, 연구부, 학년부)과 동일한 원리임을 강조했습니다.",
      "design": "아이콘 크기와 폰트 크기를 키워 멀리서도 5개 팀의 역할이 잘 보입니다.",
      "qa": "각 팀의 역할 분담 논리가 군더더기 없이 깔끔합니다.",
      "consultant": "상단의 '에이전트 인사이트' 버튼을 누르면 이 회의록을 직접 볼 수 있다고 안내하세요."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 학교 축제 준비할 때도 한 명이 다 안 하죠? 무대, 기획, 홍보 나누듯이 AI도 역할을 나눠주면 혼자 할 때보다 10배 더 똑똑해집니다.\"\n    "
  },
  {
    "id": 7,
    "title": "안티그래비티 둘러보기",
    "badge": "🔭 화면 안내",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider\">안티그래비티 화면 안내</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"안티그래비티 핵심 화면 3분 완벽 정복\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">복잡해 보여도 딱 3개 구역만 기억하시면 끝납니다!</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n          <!-- Zone 1 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-sky-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center gap-3 mb-3\">\n                <span class=\"w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-extrabold text-lg\">1</span>\n                <h3 class=\"font-bold text-white text-lg md:text-xl\">대화창 (Chat)</h3>\n              </div>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                선생님의 아이디어, 수정 요청, 에러 화면을 입력하는 소통 공간입니다. 한국어로 편하게 말하세요.\n              </p>\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-sky-300\">\n              💬 \"초등용 3분 타이머 만들어줘\"\n            </div>\n          </div>\n\n          <!-- Zone 2 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-indigo-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center gap-3 mb-3\">\n                <span class=\"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-lg\">2</span>\n                <h3 class=\"font-bold text-white text-lg md:text-xl\">계획 & 실행창 (Plan)</h3>\n              </div>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                에이전트가 어떤 파일을 만들고 코드를 수정할지 스스로 계획하고 작업하는 작업대입니다.\n              </p>\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-indigo-300\">\n              📝 index.html 생성 완료 (+120줄)\n            </div>\n          </div>\n\n          <!-- Zone 3 -->\n          <div class=\"glass-card p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center gap-3 mb-3\">\n                <span class=\"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-lg\">3</span>\n                <h3 class=\"font-bold text-white text-lg md:text-xl\">실시간 미리보기</h3>\n              </div>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                코드를 몰라도 내가 지시한 대로 완성된 웹앱을 브라우저에서 마우스로 직접 확인하는 화면입니다.\n              </p>\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-emerald-300\">\n              🌐 localhost:3000 (동작 중)\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep\">\n          💡 <span class=\"text-amber-300 font-bold\">핵심 원칙:</span> 선생님은 1번(대화창)만 쓰시고, 2번은 구경하시고, 3번에서 마우스로 테스트하시면 됩니다!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "에디터 환경을 3개 직관 구역으로 나누어 심리적 안정감을 제공합니다.",
      "content": "대화창, 계획창, 미리보기라는 3단 기능으로 명쾌하게 안내합니다.",
      "design": "글자 크기와 여백을 넓혀 시선 이동을 편안하게 유도했습니다.",
      "qa": "초보 교사가 집중해야 할 영역(1번 대화창)을 정확히 짚어줍니다.",
      "consultant": "'채팅창 하나만 쓰시면 됩니다'라는 말이 선생님들에게 최고의 안도감을 줍니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"화면에 글씨가 많다고 겁먹지 마세요! 선생님이 만질 곳은 카카오톡처럼 생긴 '채팅창' 하나뿐입니다. 나머지는 AI 혼자 일하는 곳입니다.\"\n    "
  },
  {
    "id": 8,
    "title": "Skills와 MCP",
    "badge": "🧩 비밀 무기",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider\">안티그래비티의 슈퍼 파워</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mt-1 leading-tight break-keep\">\n            \"Skills와 MCP : AI에게 날개를 달아주는 2가지 핵심 무기\"\n          </h2>\n          <p class=\"text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep\">대화만 하던 AI를 우리 학교 시스템과 연결하고 전문가로 만드는 기술</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n          <!-- Skills Box -->\n          <div class=\"glass-card p-6 rounded-3xl border border-sky-500/40 bg-sky-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center gap-3 mb-3\">\n                <div class=\"p-2.5 rounded-2xl bg-sky-500/20 text-sky-400\"><i data-lucide=\"book-marked\" class=\"w-6 h-6\"></i></div>\n                <div>\n                  <h3 class=\"text-2xl font-bold text-white\">Skills (전문 작업 매뉴얼)</h3>\n                  <span class=\"text-xs text-sky-300 font-bold\">\"업무 비법 바인더를 AI 두뇌에 장착!\"</span>\n                </div>\n              </div>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                매번 길게 설명할 필요 없이, AI에게 <strong>규칙·절차·서식(SKILL.md)</strong>을 미리 넣어두면 필요할 때 자동으로 전문가처럼 일합니다.\n              </p>\n              <div class=\"bg-slate-950 p-3.5 rounded-xl border border-sky-500/30 text-xs md:text-sm text-slate-300 space-y-1.5 font-mono\">\n                <p class=\"text-sky-300 font-bold\">🏫 교실 활용 예시:</p>\n                <p>• 학생 생기부 행동특성 서술어 자동 검토 스킬</p>\n                <p>• 교육청 공문 양식 맞춤 알림장 생성 스킬</p>\n                <p>• 초등 수학/사회 인터랙티브 퀴즈 출제 스킬</p>\n              </div>\n            </div>\n            <div class=\"mt-4 text-xs md:text-sm font-bold text-sky-300 text-center\">\n              👉 AI의 전문 지식 & 노하우 (Know-How)\n            </div>\n          </div>\n\n          <!-- MCP Box -->\n          <div class=\"glass-card p-6 rounded-3xl border border-purple-500/40 bg-purple-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center gap-3 mb-3\">\n                <div class=\"p-2.5 rounded-2xl bg-purple-500/20 text-purple-400\"><i data-lucide=\"plug\" class=\"w-6 h-6\"></i></div>\n                <div>\n                  <h3 class=\"text-2xl font-bold text-white\">MCP (만능 도구 USB 연결잭)</h3>\n                  <span class=\"text-xs text-purple-300 font-bold\">\"AI에게 진짜 손발과 도구를 연결!\"</span>\n                </div>\n              </div>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                화면 안에 갇힌 AI를 <strong>구글 드라이브, 학교 DB, 깃허브, 카카오톡</strong>과 안전하게 연결해 실제 데이터를 직접 조작하게 합니다.\n              </p>\n              <div class=\"bg-slate-950 p-3.5 rounded-xl border border-purple-500/30 text-xs md:text-sm text-slate-300 space-y-1.5 font-mono\">\n                <p class=\"text-purple-300 font-bold\">🔌 교실 활용 예시:</p>\n                <p>• Google Sheets MCP: 시트 명단을 AI가 직접 읽기</p>\n                <p>• Firebase MCP: 학생 퀴즈 점수 실시간 랭킹 저장</p>\n                <p>• GitHub MCP: 버튼 하나로 웹앱 자동 배포</p>\n              </div>\n            </div>\n            <div class=\"mt-4 text-xs md:text-sm font-bold text-purple-300 text-center\">\n              👉 AI의 외부 연결 도구 & 손발 (Tool & DB)\n            </div>\n          </div>\n        </div>\n\n        <div class=\"p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 text-center text-sm md:text-base text-indigo-200 font-semibold break-keep\">\n          ✨ <strong>Skills(노하우) + MCP(도구)</strong>가 결합되면, 안티그래비티가 학교의 모든 복잡한 작업을 스스로 끝내는 '진짜 전속 비서'가 됩니다!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "Skills와 MCP를 비유(비법 바인더 vs USB 연결잭)를 통해 직관적으로 설명했습니다.",
      "content": "선생님들이 매번 겪는 반복 업무(생기부, 공문, 구글시트)와 연결해 실용성을 극대화했습니다.",
      "design": "스카이 vs 퍼플 2단 카드로 시각적 대비감을 살렸습니다.",
      "qa": "Skills와 MCP의 개념 혼동 없이 명확히 구분됩니다.",
      "consultant": "기술 용어에 겁먹지 않고 '내 일을 덜어줄 도구'로 인식하게 됩니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"Skills는 AI에게 '일하는 매뉴얼'을 쥐어주는 것이고, MCP는 AI 손에 '진짜 도구(USB)'를 쥐어주는 것입니다. 이 둘만 있으면 안티그래비티가 못 하는 일이 없습니다!\"\n    "
  },
  {
    "id": 9,
    "title": "1단계: 프롬프트 엔지니어링",
    "badge": "✍️ 지시의 기술",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-blue-400 font-bold text-base md:text-lg uppercase tracking-wider\">실무 엔지니어링 STEP 1</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"AI에게 제대로 일 시키는 4가지 황금 규칙\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">신규 실무사님에게 인수인계하듯 구체적으로 말하면 실패가 없습니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6\">\n          <!-- Rule 1: Role -->\n          <div class=\"glass-card p-6 rounded-2xl border border-blue-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-extrabold text-lg mb-3\">1</div>\n              <h4 class=\"font-bold text-white text-lg mb-2\">역할 부여 (Role)</h4>\n              <p class=\"text-sm text-slate-300 leading-relaxed font-medium mb-3 break-keep\">AI에게 구체적인 직책과 전문성을 지정하세요.</p>\n            </div>\n            <div class=\"p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-blue-300\">\n              \"너는 10년 차 초등 교육용 웹앱 전문 개발자야\"\n            </div>\n          </div>\n\n          <!-- Rule 2: Purpose -->\n          <div class=\"glass-card p-6 rounded-2xl border border-purple-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-lg mb-3\">2</div>\n              <h4 class=\"font-bold text-white text-lg mb-2\">교실 맥락 (Target)</h4>\n              <p class=\"text-sm text-slate-300 leading-relaxed font-medium mb-3 break-keep\">누가, 언제, 어디서 쓸 것인지 상황을 말하세요.</p>\n            </div>\n            <div class=\"p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-purple-300\">\n              \"초등 3학년 국어 모둠 수업에서 쓸 3분 타이머야\"\n            </div>\n          </div>\n\n          <!-- Rule 3: Requirements -->\n          <div class=\"glass-card p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-lg mb-3\">3</div>\n              <h4 class=\"font-bold text-white text-lg mb-2\">필수 기능 (Features)</h4>\n              <p class=\"text-sm text-slate-300 leading-relaxed font-medium mb-3 break-keep\">꼭 들어가야 할 핵심 버튼과 동작을 나열하세요.</p>\n            </div>\n            <div class=\"p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300\">\n              \"시작/일시정지, 10초 전 경고음, 종료 시 폭죽\"\n            </div>\n          </div>\n\n          <!-- Rule 4: Design/Format -->\n          <div class=\"glass-card p-6 rounded-2xl border border-amber-500/30 flex flex-col justify-between\">\n            <div>\n              <div class=\"w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-lg mb-3\">4</div>\n              <h4 class=\"font-bold text-white text-lg mb-2\">디자인 & UI (Style)</h4>\n              <p class=\"text-sm text-slate-300 leading-relaxed font-medium mb-3 break-keep\">글자 크기, 색감, 화면 배치 조건을 명시하세요.</p>\n            </div>\n            <div class=\"p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300\">\n              \"칠판 뒤에서도 잘 보이게 숫자를 아주 크게 해줘\"\n            </div>\n          </div>\n        </div>\n\n        <div class=\"p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 text-center text-sm md:text-base font-semibold text-indigo-200 break-keep\">\n          📌 <strong>마법의 공식:</strong> [역할] + [교실 상황] + [필수 기능 번호 매기기] + [디자인 요구]\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "프롬프트 작성법을 4개 모듈로 일목요연하게 분할했습니다.",
      "content": "초보 교사도 바로 빈칸 채우기 하듯 따라 할 수 있는 구조입니다.",
      "design": "카드마다 고유 컬러 테두리로 인지적 구분을 도왔습니다.",
      "qa": "예시 문장들이 초등학교 교실 상황에 100% 밀착되어 있습니다.",
      "consultant": "선생님들이 사진 찍어두고 두고두고 쓸 장표입니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"AI에게 '좋은 거 만들어줘' 하면 엉뚱한 게 나옵니다. 4가지만 딱 짚어주세요: '누구야(역할)', '누가 써(대상)', '이 버튼 넣어줘(기능)', '글자 크게 해줘(디자인)'!\"\n    "
  },
  {
    "id": 10,
    "title": "2단계: 에러 해결 엔지니어링",
    "badge": "🛠️ 디버깅 실전",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-rose-400 font-bold text-base md:text-lg uppercase tracking-wider\">실무 엔지니어링 STEP 2</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"빨간 에러창이 떠도 절대 당황하지 마세요!\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">에러 메시지를 복사해서 대화창에 그대로 붙여넣으면 AI가 즉시 고칩니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6\">\n          <!-- Error Simulation Box -->\n          <div class=\"glass-card p-6 rounded-3xl border border-rose-500/40 bg-slate-950\">\n            <div class=\"flex items-center justify-between mb-3\">\n              <span class=\"text-xs text-rose-400 font-mono flex items-center gap-1.5\">\n                <span class=\"w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse\"></span>\n                웹앱 실행 중 에러 발생 시나리오\n              </span>\n              <span id=\"sim-status-badge\" class=\"text-xs text-rose-300 px-2 py-0.5 rounded bg-rose-500/20 font-bold\">오류 발생</span>\n            </div>\n\n            <div id=\"sim-screen\" class=\"bg-black/80 p-4 rounded-xl border border-rose-500/30 mb-4 font-mono text-xs text-rose-400 h-28 overflow-y-auto\">\n              Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')<br>\n              &nbsp;&nbsp;at startTimer (timer.js:42)<br>\n              &nbsp;&nbsp;at HTMLButtonElement.onclick (index.html:15)\n            </div>\n\n            <div class=\"flex gap-2\">\n              <button id=\"btn-copy-error\" onclick=\"window.simCopyError()\" class=\"flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2\">\n                <i data-lucide=\"copy\" class=\"w-4 h-4\"></i> 1. 에러 글자 복사하기\n              </button>\n              <button onclick=\"window.simAskAI()\" class=\"flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2\">\n                <i data-lucide=\"send\" class=\"w-4 h-4\"></i> 2. 안티그래비티에 붙여넣기\n              </button>\n            </div>\n          </div>\n\n          <!-- 3 Golden Rules on Error -->\n          <div class=\"space-y-3\">\n            <div class=\"glass-card p-4 rounded-2xl border border-slate-700 flex items-start gap-3\">\n              <div class=\"p-2 rounded-xl bg-rose-500/20 text-rose-400 font-bold text-sm shrink-0\">팁 1</div>\n              <div>\n                <h4 class=\"font-bold text-white text-base\">에러 영어를 직접 읽으려 하지 마세요</h4>\n                <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">빨간 글씨는 선생님이 읽는 게 아닙니다. AI에게 줄 먹이일 뿐입니다.</p>\n              </div>\n            </div>\n\n            <div class=\"glass-card p-4 rounded-2xl border border-slate-700 flex items-start gap-3\">\n              <div class=\"p-2 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm shrink-0\">팁 2</div>\n              <div>\n                <h4 class=\"font-bold text-white text-base\">화면을 캡처해서 붙여넣어도 됩니다</h4>\n                <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">안티그래비티는 이미지 인식(멀티모달)이 되므로 스크린샷만 줘도 고칩니다.</p>\n              </div>\n            </div>\n\n            <div class=\"glass-card p-4 rounded-2xl border border-slate-700 flex items-start gap-3\">\n              <div class=\"p-2 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm shrink-0\">팁 3</div>\n              <div>\n                <h4 class=\"font-bold text-white text-base\">\"이거 고쳐줘\" 한 마디면 끝납니다</h4>\n                <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">복사한 에러 글 뒤에 \"고쳐줘\"라고만 붙여서 엔터를 치세요.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"sim-resolution\" class=\"p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center text-xs md:text-sm font-semibold text-emerald-300 hidden break-keep\">\n          🎉 <strong>안티그래비티 자동 해결 완료:</strong> 에러 원인을 분석하여 <code>index.html</code> 15번째 줄 코드를 자동 수정했습니다!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "교사들이 가장 큰 공포를 느끼는 '에러'에 대한 심리적 장벽을 허물었습니다.",
      "content": "에러 메시지를 복사해서 던지기만 하면 된다는 해결 공식을 체험시킵니다.",
      "design": "시뮬레이터와 3대 꿀팁을 좌우 균형 있게 배치했습니다.",
      "qa": "복사 ➔ 전송 시뮬레이션 인터랙션이 원활합니다.",
      "consultant": "'에러는 AI 먹이다'라는 비유가 교사들에게 엄청난 위안이 됩니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 에러창 뜨면 '내가 뭘 잘못 눌렀나?' 자책하지 마세요! 원래 개발은 에러와의 대화입니다. 그 영어를 그대로 복사해서 AI에게 '고쳐줘' 하시면 3초 만에 고칩니다.\"\n    "
  },
  {
    "id": 11,
    "title": "골든 프롬프트 제작소",
    "badge": "🏗️ 프롬프트 빌더",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-5\">\n          <span class=\"text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider\">실전 인터랙티브 도구</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"클릭 몇 번으로 완성하는 마법의 골든 프롬프트\"\n          </h2>\n          <p class=\"text-base md:text-xl text-slate-300 mt-1 font-medium break-keep\">옵션을 고르고 [복사하기]를 눌러 안티그래비티에 바로 붙여넣어 보세요!</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n          <!-- Left: Builder Controls -->\n          <div class=\"glass-card p-5 rounded-3xl border border-indigo-500/40 space-y-3.5\">\n            <div>\n              <label class=\"block text-xs font-bold text-indigo-300 mb-1\">1. AI 역할 부여</label>\n              <select id=\"prompt-role\" onchange=\"window.buildPrompt()\" class=\"w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:border-indigo-500 outline-none\">\n                <option value=\"초등학교 수업용 인터랙티브 웹앱 전문 개발자야.\">초등학교 수업용 인터랙티브 웹앱 전문 개발자</option>\n                <option value=\"초등 교실 수업과 학급경영을 돕는 웹도구 전문 엔지니어야.\">초등 학급경영 도구 전문 엔지니어</option>\n                <option value=\"초등학생의 흥미와 몰입을 이끄는 게이미피케이션 교육앱 전문가야.\">게이미피케이션 교육앱 전문가</option>\n              </select>\n            </div>\n\n            <div>\n              <label class=\"block text-xs font-bold text-purple-300 mb-1\">2. 만들고 싶은 웹앱 종류 & 대상</label>\n              <select id=\"prompt-purpose\" onchange=\"window.buildPrompt()\" class=\"w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:border-purple-500 outline-none\">\n                <option value=\"초등 3~6학년 수업에서 모둠 활동 시 집중력을 높여줄 '3분 타이머 웹앱'을 제작해줘.\">⏱️ 3분 모둠활동 집중 타이머 웹앱</option>\n                <option value=\"초등 5학년 2학기 사회 '조선 후기 사회 변혁' 단원의 한국사 퀴즈 배틀 웹앱을 제작해줘.\">⚔️ 초등 한국사 퀴즈 배틀 웹앱</option>\n                <option value=\"초등 우리 반 학생들의 시력과 교우 관계를 고려한 스마트 자리배치기 웹앱을 제작해줘.\">🪑 스마트 학급 자리배치기 웹앱</option>\n                <option value=\"수업 중 발표자를 공정하고 재미있게 뽑는 원클릭 랜덤 발표자 추첨기 웹앱을 제작해줘.\">🎯 원클릭 랜덤 발표자 추첨기 웹앱</option>\n              </select>\n            </div>\n\n            <div>\n              <label class=\"block text-xs font-bold text-emerald-300 mb-1\">3. 필수 탑재 기능</label>\n              <input type=\"text\" id=\"prompt-feature\" oninput=\"window.buildPrompt()\" value=\"시작/일시정지/리셋 버튼, 10초 전 긴장감 효과음 및 깜빡임, 종료 시 폭죽 애니메이션\" class=\"w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 outline-none font-medium\" />\n            </div>\n\n            <div>\n              <label class=\"block text-xs font-bold text-amber-300 mb-1\">4. 디자인 및 UI 스타일</label>\n              <input type=\"text\" id=\"prompt-design\" oninput=\"window.buildPrompt()\" value=\"초등학생 눈높이에 맞춘 밝고 경쾌한 파스텔톤, 교실 칠판 뒤에서도 잘 보이도록 아주 큰 숫자 폰트\" class=\"w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:border-amber-500 outline-none font-medium\" />\n            </div>\n          </div>\n\n          <!-- Right: Generated Output Box -->\n          <div class=\"glass-card p-5 rounded-3xl border border-indigo-500/50 bg-slate-950 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-2\">\n                <span class=\"text-xs font-bold text-indigo-400 font-mono\">✨ 완성된 지시 프롬프트 (자동 조립됨)</span>\n                <span class=\"text-[11px] text-slate-400\">Ctrl+A & 복사 가능</span>\n              </div>\n              <textarea id=\"prompt-output\" readonly class=\"w-full h-48 bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 text-xs md:text-sm font-mono text-slate-200 resize-none outline-none leading-relaxed\"></textarea>\n            </div>\n\n            <button onclick=\"window.copyPrompt()\" class=\"mt-3 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm md:text-base font-bold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2\">\n              <i data-lucide=\"copy\" class=\"w-5 h-5\"></i>\n              <span id=\"copy-btn-text\">완성된 프롬프트 원클릭 복사</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "인터랙티브 프롬프트 조립기로 즉시 실습에 활용 가능한 무기를 제공합니다.",
      "content": "드롭다운 선택만으로 최적의 프롬프트가 실시간 생성됩니다.",
      "design": "입력창과 결과창의 시각적 대조가 뚜렷합니다.",
      "qa": "복사 버튼 동작 시 클립보드 저장 피드백이 정확합니다.",
      "consultant": "연수 후 교실에 돌아가서도 이 슬라이드를 켜두고 프롬프트를 만들 수 있습니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 프롬프트 어떻게 써야 할지 막막하시죠? 이 화면에서 원하는 앱을 고르고 [복사하기]만 누르신 뒤 안티그래비티에 붙여넣으시면 바로 앱이 만들어집니다!\"\n    "
  },
  {
    "id": 12,
    "title": "맞춤형 웹앱 아이디어 5선",
    "badge": "💡 아이디어 뱅크",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-emerald-400 font-bold text-base md:text-lg uppercase tracking-wider\">우리 반 맞춤형 수업도구</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"선생님들이 가장 많이 만들고 감탄한 웹앱 5선\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">선생님의 교실 아이디어가 AI를 만나면 5분 만에 현실이 됩니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5\">\n          <!-- Card 1 -->\n          <div class=\"glass-card p-5 rounded-2xl border border-sky-500/30 hover:border-sky-400 transition-all\">\n            <div class=\"text-3xl mb-2\">⏱️</div>\n            <h4 class=\"text-lg font-bold text-sky-300 mb-1\">1. 모둠 집중 타이머</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">활동 시간 카운트다운, 10초 전 시각/청각 알림, 배경음악 자동 재생</p>\n          </div>\n\n          <!-- Card 2 -->\n          <div class=\"glass-card p-5 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all\">\n            <div class=\"text-3xl mb-2\">⚔️</div>\n            <h4 class=\"text-lg font-bold text-purple-300 mb-1\">2. 교과 퀴즈 배틀 게임</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">사회/과학 단원 복습용 O/X 및 4지선다, 점수판 및 폭죽 랭킹</p>\n          </div>\n\n          <!-- Card 3 -->\n          <div class=\"glass-card p-5 rounded-2xl border border-pink-500/30 hover:border-pink-400 transition-all\">\n            <div class=\"text-3xl mb-2\">🪑</div>\n            <h4 class=\"text-lg font-bold text-pink-300 mb-1\">3. 스마트 학급 자리배치</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">남녀 짝 분리, 시력 배려석 고정, 원클릭 랜덤 애니메이션</p>\n          </div>\n\n          <!-- Card 4 -->\n          <div class=\"glass-card p-5 rounded-2xl border border-amber-500/30 hover:border-amber-400 transition-all\">\n            <div class=\"text-3xl mb-2\">🎯</div>\n            <h4 class=\"text-lg font-bold text-amber-300 mb-1\">4. 두근두근 발표자 뽑기</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">돌림판 룰렛 및 사다리 타기, 중복 발표 방지 스마트 체크</p>\n          </div>\n\n          <!-- Card 5 -->\n          <div class=\"glass-card p-5 rounded-2xl border border-emerald-500/30 hover:border-emerald-400 transition-all\">\n            <div class=\"text-3xl mb-2\">🧹</div>\n            <h4 class=\"text-lg font-bold text-emerald-300 mb-1\">5. 1인 1역 & 청소 당번표</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">매주 자동 순환 로테이션, 학생별 역할 완수 스티커 체크</p>\n          </div>\n\n          <!-- More ideas -->\n          <div class=\"glass-card p-5 rounded-2xl border border-indigo-500/40 bg-indigo-950/30 flex flex-col justify-center text-center\">\n            <div class=\"text-3xl mb-2\">✨</div>\n            <h4 class=\"text-lg font-bold text-indigo-300 mb-1\">선생님의 상상 그대로!</h4>\n            <p class=\"text-xs md:text-sm text-slate-300 font-medium break-keep\">\"이런 거 있으면 좋겠는데...\" 하는 모든 것이 가능합니다.</p>\n          </div>\n        </div>\n\n        <div class=\"p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xs md:text-sm text-slate-200 font-semibold break-keep\">\n          👉 지금부터 이 중 <strong>3가지 대표 앱</strong>을 직접 안티그래비티와 함께 만들어보겠습니다!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "선생님들이 일상에서 바로 공감할 수 있는 5개 킬러 앱 아이템을 선별했습니다.",
      "content": "아이디어 카드마다 핵심 기능과 수업 활용도를 명쾌히 정리했습니다.",
      "design": "그리드 카드 레이아웃으로 시각적 풍성함을 주었습니다.",
      "qa": "각 카드의 아이콘과 텍스트가 조화롭습니다.",
      "consultant": "'나도 저거 필요했는데!' 하는 반응을 유도하는 슬라이드입니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 이 5개 중에 '우리 반에 당장 있으면 좋겠다' 싶은 게 몇 개나 되시나요? 오늘 연수 끝나기 전에 하나씩 다 만드실 수 있습니다.\"\n    "
  },
  {
    "id": 13,
    "title": "실습 1: 3분 집중 타이머",
    "badge": "⏱️ 실습 1단계",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-5\">\n          <span class=\"text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider\">실습 1 : 가장 쉬운 입문 프로젝트</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"모둠 활동용 3분 집중 타이머 만들기\"\n          </h2>\n          <p class=\"text-base md:text-xl text-slate-300 mt-1 font-medium break-keep\">단 하나의 프롬프트로 소리와 애니메이션이 있는 멋진 타이머를 완성합니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch mb-4\">\n          <!-- Left: Prompt Box -->\n          <div class=\"glass-card p-5 rounded-3xl border border-sky-500/40 flex flex-col justify-between\">\n            <div>\n              <h4 class=\"font-bold text-sky-300 text-base md:text-lg flex items-center gap-2 mb-3\">\n                <i data-lucide=\"terminal\" class=\"w-5 h-5\"></i> 안티그래비티 대화창에 넣을 프롬프트\n              </h4>\n              <div class=\"bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs md:text-sm font-mono text-slate-200 leading-relaxed break-keep\">\n                \"초등 수업용 3분 타이머 웹앱을 단일 index.html로 만들어줘.<br><br>\n                1. 1분, 3분, 5분 프리셋 버튼과 직접 시간 설정 기능<br>\n                2. 화면 중앙에 시원하게 큰 숫자 카운트다운<br>\n                3. 시작, 일시정지, 리셋 버튼<br>\n                4. 10초 전 주황색 경고 깜빡임과 알림음<br>\n                5. 종료 시 폭죽 애니메이션(Canvas Confetti)과 축하 소리<br>\n                6. 교실 빔프로젝터에 어울리는 다크 모드 글래스 UI\"\n              </div>\n            </div>\n\n            <button onclick=\"window.fireConfetti()\" class=\"mt-4 w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30\">\n              <i data-lucide=\"sparkles\" class=\"w-4 h-4\"></i>\n              타이머 완성 축하 폭죽 효과 미리보기\n            </button>\n          </div>\n\n          <!-- Right: Supplementary Guide (단일 파일 vs 파일 분리) -->\n          <div class=\"glass-card p-5 rounded-3xl border border-indigo-500/40 bg-indigo-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-3\">\n                <h4 class=\"font-bold text-white text-base md:text-lg flex items-center gap-2\">\n                  <i data-lucide=\"help-circle\" class=\"w-5 h-5 text-amber-400\"></i>\n                  <span>[보완 설명] 왜 '단일 파일(Single HTML)'인가요?</span>\n                </h4>\n                <span class=\"text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 font-bold\">핵심 팁</span>\n              </div>\n\n              <div class=\"space-y-2.5 text-xs md:text-sm text-slate-200\">\n                <div class=\"p-3 rounded-xl bg-slate-900/90 border border-slate-700\">\n                  <p class=\"font-bold text-sky-300 mb-1 flex items-center gap-1.5\">\n                    <span>🟢</span> 교실 웹앱/입문자: 단일 파일(index.html)이 최고!\n                  </p>\n                  <ul class=\"text-slate-300 space-y-1 font-medium text-xs break-keep\">\n                    <li>• <strong>경로 에러 0%:</strong> CSS/JS 파일 연결 깨짐 원천 차단</li>\n                    <li>• <strong>메신저 전송 간편:</strong> 파일 1개만 카톡/쿨메신저로 동료 교사에게 공유</li>\n                    <li>• <strong>원클릭 실행:</strong> 다운로드 후 더블클릭하면 브라우저에서 즉시 작동</li>\n                  </ul>\n                </div>\n\n                <div class=\"p-3 rounded-xl bg-slate-900/90 border border-slate-700\">\n                  <p class=\"font-bold text-purple-300 mb-1 flex items-center gap-1.5\">\n                    <span>🟣</span> 파일 분리(HTML/CSS/JS): 언제 하나요?\n                  </p>\n                  <p class=\"text-slate-300 font-medium text-xs break-keep\">\n                    코드가 1,000줄 이상으로 길어지거나, 디자이너와 협업하는 <strong>대규모 복합 프로젝트</strong>로 확장될 때 분리하는 것이 유지보수에 유리합니다.\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mt-3 p-2.5 rounded-xl bg-indigo-900/40 border border-indigo-500/30 text-center text-xs font-bold text-indigo-200 break-keep\">\n              👉 <strong>교실 실습 원칙:</strong> \"가벼운 수업 도구는 단일 파일로 시작하고, 프로젝트가 커지면 분리!\"\n            </div>\n          </div>\n        </div>\n      </div>\n",
    "agentInsights": {
      "pm": "단일 파일의 실전 이점과 대형 프로젝트 분리 기준을 명확한 보완 자료로 제시했습니다.",
      "content": "경로 에러 방지, 메신저 즉시 공유 등 교실 실무에서 단일 파일이 필요한 이유를 설득력 있게 설명합니다.",
      "design": "프롬프트 입력창과 보완 설명 카드의 좌우 대칭 균형을 맞췄습니다.",
      "qa": "단일 파일 vs 분리 파일의 비교 설명이 직관적입니다.",
      "consultant": "선생님들이 '왜 파일 하나로 하라고 했는지' 깊이 납득하게 됩니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, '왜 CSS나 JS로 파일을 안 나누고 하나로 합치지?' 궁금하시죠? 파일이 여러 개면 경로가 틀어져서 안 열리는 에러가 자주 납니다. 파일 하나로 만드시면 카톡이나 메신저로 다른 선생님께 보내서 바로 더블클릭해 쓰실 수 있습니다!\"\n"
  },
  {
    "id": 14,
    "title": "실습 2: 한국사 퀴즈 배틀",
    "badge": "⚔️ 실습 2단계",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider\">실습 2 : 인터랙티브 교과 수업도구</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"단원 복습용 한국사 퀴즈 배틀 웹앱\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">교과서 핵심 개념을 게임처럼 즐기는 4지선다 퀴즈 게임 제작</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 items-center\">\n          <div class=\"glass-card p-6 rounded-3xl border border-purple-500/40 space-y-4\">\n            <h4 class=\"font-bold text-purple-300 text-lg flex items-center gap-2\">\n              <i data-lucide=\"terminal\" class=\"w-5 h-5\"></i> 안티그래비티 대화창에 넣을 프롬프트\n            </h4>\n            <div class=\"bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs md:text-sm font-mono text-slate-200 leading-relaxed break-keep\">\n              \"초등 5학년 사회 '조선 후기' 퀴즈 배틀 웹앱을 만들어줘.<br><br>\n              1. 5문제 4지선다 퀴즈 (정조, 실학, 김홍도 등)<br>\n              2. 문제당 15초 제한시간 타이머 바<br>\n              3. 정답 시 초록색 + 효과음, 오답 시 해설 팝업<br>\n              4. 최종 결과 화면에 총점과 성취 칭호(예: '역사 마스터!') 표시<br>\n              5. 다시 풀기 및 문제 섞기(셔플) 기능 포함\"\n            </div>\n          </div>\n\n          <div class=\"space-y-4\">\n            <div class=\"glass-card p-5 rounded-2xl border border-slate-700\">\n              <span class=\"text-xs font-bold text-purple-400 uppercase tracking-wider\">발전 팁 1</span>\n              <h5 class=\"text-base md:text-lg font-bold text-white mt-1\">문제 데이터만 바꾸면 모든 과목 적용 가능</h5>\n              <p class=\"text-xs md:text-sm text-slate-300 mt-1 break-keep\">\"문제 10개만 다른 걸로 바꿔줘\"라고 지시하면 과학, 영어 퀴즈로 1초 만에 변신!</p>\n            </div>\n\n            <div class=\"glass-card p-5 rounded-2xl border border-slate-700\">\n              <span class=\"text-xs font-bold text-emerald-400 uppercase tracking-wider\">발전 팁 2</span>\n              <h5 class=\"text-base md:text-lg font-bold text-white mt-1\">사운드 효과음 추가 요청</h5>\n              <p class=\"text-xs md:text-sm text-slate-300 mt-1 break-keep\">Web Audio API를 이용해 외부 파일 없이 삐-빅 뿅- 소리를 자동 합성하게 합니다.</p>\n            </div>\n\n            <div class=\"p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-center text-xs md:text-sm font-bold text-purple-200\">\n              ✨ 퀴즈 앱 하나 만들어두면 1년 내내 수업 평가 도구로 활용 가능!\n            </div>\n          </div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "교과 지식과 게이미피케이션을 접목한 대표 사례를 다룹니다.",
      "content": "질문/답 데이터 구조의 확장성을 제시해 응용력을 키웁니다.",
      "design": "보라색 톤으로 지적 호기심과 게임 분위기를 연출했습니다.",
      "qa": "오답 해설, 셔플 등 교육적 필수 기능이 빠짐없이 들어있습니다.",
      "consultant": "선생님들이 단원 마무리 차시에 즉시 활용할 수 있는 알짜 아이템입니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 한 번 퀴즈 앱 뼈대를 만들어두면 '이번엔 6학년 1학기 과학 3단원으로 문제만 바꿔줘' 하시면 다음 학기에도 평생 쓰실 수 있습니다.\"\n    "
  },
  {
    "id": 15,
    "title": "실습 3: 스마트 학급 자리배치기",
    "badge": "🪑 실습 3단계",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-pink-400 font-bold text-base md:text-lg uppercase tracking-wider\">실습 3 : 학급 경영의 꽃</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"스마트 학급 자리배치기 웹앱 만들기\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">선생님의 교실 규칙(로직)을 AI가 어떻게 똑똑한 시스템으로 만드는지 체감합니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 items-center\">\n          <div class=\"glass-card p-6 rounded-3xl border border-pink-500/40 space-y-4\">\n            <h4 class=\"font-bold text-pink-300 text-lg flex items-center gap-2\">\n              <i data-lucide=\"terminal\" class=\"w-5 h-5\"></i> 안티그래비티 대화창에 넣을 프롬프트\n            </h4>\n            <div class=\"bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs md:text-sm font-mono text-slate-200 leading-relaxed break-keep\">\n              \"초등 학급용 스마트 자리배치 웹앱을 단일 index.html로 제작해줘.<br><br>\n              1. 6분단 x 4줄 (24명) 책상 배치 UI<br>\n              2. 학생 명단(남/여) 텍스트 입력 및 자동 저장(localStorage)<br>\n              3. [앞자리 고정석] 지정 체크박스 (시력/건강 배려)<br>\n              4. [자리 섞기] 클릭 시 3초간 이름이 회전하며 긴장감 연출<br>\n              5. 완성된 자리표 인쇄(Print) 및 이미지 저장 기능\"\n            </div>\n          </div>\n\n          <div class=\"space-y-4\">\n            <div class=\"glass-card p-5 rounded-2xl border border-slate-700\">\n              <span class=\"text-xs font-bold text-pink-400 uppercase tracking-wider\">엔지니어링 핵심</span>\n              <h5 class=\"text-base md:text-lg font-bold text-white mt-1\">선생님의 '교실 로직'이 반영된 결과물</h5>\n              <p class=\"text-xs md:text-sm text-slate-300 mt-1 break-keep\">\"시력 배려석 우선 배치 후 나머지 랜덤\"이라는 선생님만의 로직이 그대로 소프트웨어가 됩니다.</p>\n            </div>\n\n            <div class=\"glass-card p-5 rounded-2xl border border-slate-700\">\n              <span class=\"text-xs font-bold text-indigo-400 uppercase tracking-wider\">브라우저 저장 기술</span>\n              <h5 class=\"text-base md:text-lg font-bold text-white mt-1\">학생 명단 자동 저장 (localStorage)</h5>\n              <p class=\"text-xs md:text-sm text-slate-300 mt-1 break-keep\">컴퓨터를 껐다 켜도 우리 반 학생 이름이 그대로 남아있게 만듭니다.</p>\n            </div>\n\n            <div class=\"p-4 rounded-2xl bg-pink-950/60 border border-pink-500/30 text-center text-xs md:text-sm font-bold text-pink-200\">\n              ✨ 아이들이 자리 바꿀 때 교실 TV에 띄워두면 환호성이 터집니다!\n            </div>\n          </div>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "학급 경영에서 교사들이 가장 민감하게 다루는 자리배치 문제를 해결합니다.",
      "content": "로직 설계(조건부 배치)와 브라우저 저장소(localStorage)의 위력을 체감합니다.",
      "design": "따뜻하고 활기찬 핑크/인디고 글래스모피즘을 적용했습니다.",
      "qa": "자리 섞기 애니메이션과 인쇄 기능이 강조되어 있습니다.",
      "consultant": "매월 자리 바꿀 때마다 겪던 교사의 수고를 완전히 없애주는 효자 앱입니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"자리 바꿀 때마다 아이들이 '선생님 저 안 보여요', '남녀 짝 섞어주세요' 하죠? 그 규칙을 AI에게 말만 하면 공정하고 재미있는 자리배치기가 완성됩니다.\"\n    "
  },
  {
    "id": 16,
    "title": "GitHub & Netlify 무료 배포",
    "badge": "🌐 인터넷 배포",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-5\">\n          <span class=\"text-emerald-400 font-bold text-base md:text-lg uppercase tracking-wider\">3단계 : 전 세계 어디서나 접속</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"GitHub과 Netlify로 스마트폰 링크 띄우기\"\n          </h2>\n          <p class=\"text-base md:text-xl text-slate-300 mt-1 font-medium break-keep\">서버 비용 0원! 학생과 학부모 스마트폰으로 1초 만에 웹앱을 공유합니다</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4\">\n          <!-- Step Process -->\n          <div class=\"space-y-3\">\n            <div class=\"glass-card p-4 rounded-2xl border border-slate-700 flex items-center gap-4\">\n              <div class=\"w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-lg\">1</div>\n              <div>\n                <h4 class=\"font-bold text-white text-sm md:text-base\">GitHub에 파일 올리기</h4>\n                <p class=\"text-xs text-slate-300 break-keep\">안티그래비티에게 \"깃허브에 올려줘\"라고 말하면 저장소 자동 생성 및 푸시</p>\n              </div>\n            </div>\n\n            <div class=\"glass-card p-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 flex items-center gap-4\">\n              <div class=\"w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg\">2</div>\n              <div>\n                <h4 class=\"font-bold text-white text-sm md:text-base\">Netlify 자동 연결 & 무료 도메인 발급</h4>\n                <p class=\"text-xs text-slate-300 break-keep\">깃허브 저장소를 클릭 한 번으로 연결하면 10초 만에 <code>https://...netlify.app</code> 주소 생성</p>\n              </div>\n            </div>\n\n            <div class=\"glass-card p-4 rounded-2xl border border-sky-500/40 bg-sky-950/20 flex items-center gap-4\">\n              <div class=\"w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg\">3</div>\n              <div>\n                <h4 class=\"font-bold text-white text-sm md:text-base\">QR코드로 교실 TV & 스마트폰 공유</h4>\n                <p class=\"text-xs text-slate-300 break-keep\">발급된 주소의 QR코드를 교실 TV에 띄우면 아이들이 태블릿으로 즉시 접속</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Live QR Generator Box -->\n          <div class=\"glass-card p-5 rounded-3xl border border-emerald-500/50 text-center flex flex-col items-center justify-between\">\n            <div class=\"w-full\">\n              <span class=\"text-xs font-bold text-emerald-300 uppercase tracking-wider\">실시간 QR코드 배포 시뮬레이터</span>\n              <div class=\"mt-3 p-3 bg-white rounded-2xl inline-block shadow-xl\">\n                <div id=\"qrcode-container\" class=\"w-36 h-36 flex items-center justify-center\"></div>\n              </div>\n              <p id=\"qr-target-text\" class=\"text-xs font-mono text-slate-300 mt-2 truncate max-w-xs mx-auto\">https://my-school-app.netlify.app</p>\n            </div>\n\n            <div class=\"mt-3 w-full flex gap-2\">\n              <input type=\"text\" id=\"deploy-url-input\" value=\"https://my-classroom.netlify.app\" class=\"flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 outline-none\" />\n              <button onclick=\"window.generateQRCode(true)\" class=\"px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shrink-0\">\n                QR 생성\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xs md:text-sm text-slate-200 font-semibold break-keep\">\n          ✨ 복잡한 서버 호스팅 비용 없이, 평생 무료로 안전하게 웹앱을 학생들과 나눌 수 있습니다.\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "완성된 앱을 실제 학생들과 연결하는 배포 파이프라인을 시각화했습니다.",
      "content": "GitHub + Netlify의 무료 호스팅 시너지와 QR 배포를 명확히 제시합니다.",
      "design": "실시간 QR 생성기를 탑재하여 즉각적인 인터랙션을 제공합니다.",
      "qa": "QR 코드 렌더링 라이브러리가 정상 작동합니다.",
      "consultant": "수업 시간에 학생들 태블릿으로 직접 접속시키는 감동을 선사합니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"내 컴퓨터에서만 돌아가면 아깝죠? 깃허브와 넷리파이를 쓰면 돈 1원도 안 들이고 링크 하나로 전교생에게 내가 만든 웹앱을 보급할 수 있습니다.\"\n    "
  },
  {
    "id": 17,
    "title": "결론 & 교사의 역할",
    "badge": "🎓 마무리",
    "content": "\n      <div class=\"h-full flex flex-col justify-center items-center text-center px-4 w-full max-w-6xl mx-auto\">\n        <div class=\"inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm md:text-base font-bold mb-4\">\n          <i data-lucide=\"award\" class=\"w-5 h-5 text-emerald-400\"></i>\n          <span>에이전틱 교사 연수 마무리</span>\n        </div>\n\n        <h2 class=\"text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight break-keep\">\n          \"기술은 AI에게, 교육적 가치는 선생님에게!\"\n        </h2>\n        \n        <p class=\"text-lg md:text-2xl text-slate-300 max-w-4xl mb-8 leading-relaxed font-semibold break-keep\">\n          오늘 배운 3가지만 기억하시면, 앞으로 교실에 필요한 어떤 앱도 두려움 없이 만들어내실 수 있습니다.\n        </p>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left mb-8\">\n          <div class=\"glass-card p-6 rounded-2xl border border-sky-500/30\">\n            <h4 class=\"font-bold text-sky-300 text-lg mb-2\">1. 두려움 버리기</h4>\n            <p class=\"text-sm text-slate-300 font-medium break-keep\">코딩 문법은 몰라도 됩니다. 선생님은 한국어로 지시만 하세요.</p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-purple-500/30\">\n            <h4 class=\"font-bold text-purple-300 text-lg mb-2\">2. 교실 고민 기록하기</h4>\n            <p class=\"text-sm text-slate-300 font-medium break-keep\">선생님의 사소한 불편함과 수업 아이디어가 최고의 웹앱이 됩니다.</p>\n          </div>\n\n          <div class=\"glass-card p-6 rounded-2xl border border-emerald-500/30\">\n            <h4 class=\"font-bold text-emerald-300 text-lg mb-2\">3. 에이전트와 동행하기</h4>\n            <p class=\"text-sm text-slate-300 font-medium break-keep\">안티그래비티는 선생님의 가장 든든한 24시간 개발 전속 비서입니다.</p>\n          </div>\n        </div>\n\n        <div class=\"flex flex-wrap gap-4 justify-center\">\n          <button onclick=\"window.fireConfetti()\" class=\"px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-lg shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-105\">\n            🎉 축하 폭죽 터뜨리기\n          </button>\n          <button onclick=\"window.goToSlide(1)\" class=\"px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-lg border border-slate-700 transition-all\">\n            처음으로 돌아가기\n          </button>\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "강의의 감동적인 피날레와 실천 의지를 고취했습니다.",
      "content": "핵심 요약 3가지와 축하 폭죽으로 긍정적 연수 피날레를 완성했습니다.",
      "design": "웅장한 타이포그래피와 대화면 카드 레이아웃을 구성했습니다.",
      "qa": "축하 인터랙션과 처음으로 점프 기능이 완벽히 동작합니다.",
      "consultant": "선생님들이 연수장을 나서며 바로 안티그래비티를 켜고 싶어집니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 오늘 정말 수고 많으셨습니다! 기술은 AI가 다 해줍니다. 선생님들께서는 아이들을 향한 사랑과 창의적인 수업 아이디어만 가져오시면 됩니다. 감사합니다!\"\n    "
  },
  {
    "id": 18,
    "title": "슬라이드 스마트 활용법",
    "badge": "🛠️ 부록: 스마트 도구",
    "content": "\n      <div class=\"h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4\">\n        <div class=\"text-center mb-6\">\n          <span class=\"text-indigo-400 font-bold text-base md:text-lg uppercase tracking-wider\">스마트 발표 & 수업 기능</span>\n          <h2 class=\"text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep\">\n            \"수업과 발표를 200% 살리는 3가지 스마트 기능\"\n          </h2>\n          <p class=\"text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep\">선생님의 수업 편의와 자유로운 수정을 위한 맞춤형 도구를 활용해 보세요</p>\n        </div>\n\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6\">\n          <!-- Feature 1: Edit Mode -->\n          <div class=\"glass-card p-6 rounded-3xl border border-indigo-500/40 bg-indigo-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-4\">\n                <span class=\"px-3.5 py-1 rounded-full bg-indigo-500/30 text-indigo-300 font-bold text-sm\">기능 1</span>\n                <div class=\"p-2 rounded-xl bg-indigo-500 text-white\"><i data-lucide=\"edit-3\" class=\"w-5 h-5\"></i></div>\n              </div>\n              <h3 class=\"text-2xl font-extrabold text-white mb-2\">✎ 고치기 모드</h3>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                하단 <strong>[✎ 고치기]</strong>를 누르면 점선이 표시되며 화면 속 모든 글자를 즉시 수정할 수 있습니다. 상단 도구바로 서식 변경 및 지우기가 가능하며 브라우저에 자동 저장됩니다.\n              </p>\n            </div>\n            <div class=\"p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 text-xs font-mono text-indigo-300\">\n              ✨ 점선 클릭 ➔ 글자 즉시 수정 ➔ 자동 저장\n            </div>\n          </div>\n\n          <!-- Feature 2: Fullscreen -->\n          <div class=\"glass-card p-6 rounded-3xl border border-sky-500/40 bg-sky-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-4\">\n                <span class=\"px-3.5 py-1 rounded-full bg-sky-500/30 text-sky-300 font-bold text-sm\">기능 2</span>\n                <div class=\"p-2 rounded-xl bg-sky-500 text-white\"><i data-lucide=\"maximize\" class=\"w-5 h-5\"></i></div>\n              </div>\n              <h3 class=\"text-2xl font-extrabold text-white mb-2\">⛶ 전체화면 극대화</h3>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                하단 <strong>[⛶ 전체]</strong> 버튼이나 단축키 <strong>F (한글 자판 ㄹ)</strong>를 누르면 바깥 여백 0으로 24인치 모니터와 빔프로젝터에 글자가 시원하게 꽉 찹니다.\n              </p>\n            </div>\n            <div class=\"p-3.5 rounded-2xl bg-slate-950/80 border border-sky-500/30 text-xs font-mono text-sky-300\">\n              ⌨️ 단축키: <kbd class=\"px-2 py-0.5 rounded bg-slate-800 text-white font-bold\">F</kbd> 또는 <kbd class=\"px-2 py-0.5 rounded bg-slate-800 text-white font-bold\">ㄹ</kbd>\n            </div>\n          </div>\n\n          <!-- Feature 3: Teacher Drawer -->\n          <div class=\"glass-card p-6 rounded-3xl border border-amber-500/40 bg-amber-950/20 flex flex-col justify-between\">\n            <div>\n              <div class=\"flex items-center justify-between mb-4\">\n                <span class=\"px-3.5 py-1 rounded-full bg-amber-500/30 text-amber-300 font-bold text-sm\">기능 3</span>\n                <div class=\"p-2 rounded-xl bg-amber-500 text-white\"><i data-lucide=\"graduation-cap\" class=\"w-5 h-5\"></i></div>\n              </div>\n              <h3 class=\"text-2xl font-extrabold text-white mb-2\">🧑‍🏫 교사용 비밀 서랍</h3>\n              <p class=\"text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep\">\n                하단 <strong>[교사용]</strong> 버튼이나 단축키 <strong>T (한글 자판 ㅅ)</strong>를 누르면 하단에서 슬라이딩 서랍이 열리며 예상 답변, 시간 배분, 핵심 팁을 확인할 수 있습니다.\n              </p>\n            </div>\n            <div class=\"p-3.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-xs font-mono text-amber-300\">\n              ⌨️ 단축키: <kbd class=\"px-2 py-0.5 rounded bg-slate-800 text-white font-bold\">T</kbd> / <kbd class=\"px-2 py-0.5 rounded bg-slate-800 text-white font-bold\">ㅅ</kbd> (닫기: ESC)\n            </div>\n          </div>\n        </div>\n\n        <div class=\"p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep\">\n          💡 <strong>수업 꿀팁:</strong> 언제든 화면 하단의 [고치기], [전체], [교사용] 버튼을 눌러 자유롭게 연수 자료를 활용해 보세요!\n        </div>\n      </div>\n    ",
    "agentInsights": {
      "pm": "부록 장표로서 [고치기], [전체화면], [교사용 서랍] 3대 기능을 정리했습니다.",
      "content": "단축키와 실제 활용 시나리오를 명확하게 설명합니다.",
      "design": "인디고, 스카이, 앰버 3색 카드로 시각적 명확성을 부여했습니다.",
      "qa": "하단 버튼들과 연동되어 즉시 시연 가능합니다.",
      "consultant": "수업 현장에서 교사가 직접 자료를 손쉽게 수정하고 교사용 팁을 볼 수 있어 효용성이 매우 높습니다."
    },
    "presenterNote": "\n      🎤 [강사용 추천 멘트]:\n      - \"선생님들, 슬라이드 발표 중에 글자를 직접 바꾸고 싶으실 때가 있죠? 하단 [✎ 고치기]를 누르면 이 화면의 어떤 글자든 마음대로 바꿀 수 있습니다. [T]를 누르면 강사용 꿀팁 서랍도 열립니다!\"\n    "
  }
];
var TEACHER_NOTES = [
  {
    "slideId": 1,
    "time": "3분",
    "expectedAnswers": "연수에 대한 기대감 표출, 코딩에 대한 막연한 두려움 완화.",
    "confusingPoints": "'코딩 전혀 몰라도 정말 되나요?' ➔ '네, 한글로 카톡 하듯이 대화만 하시면 됩니다!'",
    "keyTerms": "안티그래비티, AI 에이전트, 교실 도메인 지식, 웹앱 배포"
  },
  {
    "slideId": 2,
    "time": "4분",
    "expectedAnswers": "'맞아요, 파이썬이나 C언어 배우려다 세미콜론 때문에 포기했어요.'",
    "confusingPoints": "'문법을 몰라도 오류가 안 나나요?' ➔ '오류 수정도 AI가 알아서 고칩니다.'",
    "keyTerms": "패러다임 전환, 벽돌공(코더) vs 건축가(기획자), 에이전틱 개발"
  },
  {
    "slideId": 3,
    "time": "4분",
    "expectedAnswers": "'개발자보다 교사가 교실 문제를 제일 잘 안다는 점에 공감합니다.'",
    "confusingPoints": "'도메인 지식이 왜 기술보다 중요한가요?' ➔ '무엇을 만들지 결정하는 힘이기 때문입니다.'",
    "keyTerms": "도메인 지식 (Domain Knowledge), 교실 눈높이, 현장 전문성"
  },
  {
    "slideId": 4,
    "time": "5분",
    "expectedAnswers": "'불편한 점을 시스템으로 만든다는 말이 명쾌하네요.'",
    "confusingPoints": "'엔지니어링이 거창한 기술인 줄 알았어요.' ➔ '문제 해결 절차를 세우는 사고방식입니다.'",
    "keyTerms": "엔지니어링 사고, 문제 포착, 로직(규칙) 설계, 시스템 구축"
  },
  {
    "slideId": 5,
    "time": "5분",
    "expectedAnswers": "'챗봇은 복사하기 귀찮았는데 에이전트는 알아서 실행해주니 신기해요.'",
    "confusingPoints": "'챗봇과 에이전트의 결정적 차이는?' ➔ '말만 하는가 vs 실제 파일을 만들고 실행하는가'",
    "keyTerms": "챗봇 vs 에이전트, 자율 실행, 멀티모달, 실시간 프리뷰"
  },
  {
    "slideId": 6,
    "time": "5분",
    "expectedAnswers": "'학교 부서 협업처럼 AI도 팀으로 일한다는 개념이 재미있어요.'",
    "confusingPoints": "'AI 혼자 다 하는 게 아니었나요?' ➔ '역할을 나눠 검수와 설계를 분리할 때 환각(오류)이 사라집니다.'",
    "keyTerms": "멀티 에이전트, PM 오케스트레이터, 내용개발, 디자인, 검수(QA)"
  },
  {
    "slideId": 7,
    "time": "4분",
    "expectedAnswers": "'화면이 생각보다 심플하고 채팅창 하나만 쓰면 되네요.'",
    "confusingPoints": "'코딩 창을 만져야 하나요?' ➔ '아닙니다! 오직 왼쪽 대화창 하나만 쓰시면 됩니다.'",
    "keyTerms": "대화창 (Chat), 계획/실행창 (Plan), 실시간 미리보기 (Preview)"
  },
  {
    "slideId": 8,
    "time": "5분",
    "expectedAnswers": "'Skills는 업무 비법, MCP는 외부 도구 연결잭이라는 비유가 와닿아요.'",
    "confusingPoints": "'MCP를 쓰면 학생 개인정보 위험은 없나요?' ➔ '선생님 컴퓨터 로컬에서 안전하게 연동됩니다.'",
    "keyTerms": "Skills (업무 비법 매뉴얼), MCP (만능 연결잭), Google Sheets 연동"
  },
  {
    "slideId": 9,
    "time": "5분",
    "expectedAnswers": "'역할, 상황, 기능, 디자인 4가지만 기억하면 되겠네요.'",
    "confusingPoints": "'프롬프트를 길게 써야 하나요?' ➔ '길이보다 번호를 매겨 명확히 요구하는 것이 핵심입니다.'",
    "keyTerms": "프롬프트 엔지니어링, 역할 부여, 맥락 정의, 제약 조건"
  },
  {
    "slideId": 10,
    "time": "5분",
    "expectedAnswers": "'에러창 뜨면 무조건 복사해서 던지면 된다니 마음이 놓여요.'",
    "confusingPoints": "'에러 영어를 몰라도 되나요?' ➔ '네! 에러 텍스트는 AI가 읽는 데이터입니다.'",
    "keyTerms": "에러 해결 엔지니어링, 복사&붙여넣기 디버깅, 스크린샷 캡처 피드백"
  },
  {
    "slideId": 11,
    "time": "6분",
    "expectedAnswers": "'클릭만으로 프롬프트가 뚝딱 만들어져서 바로 쓸 수 있겠어요.'",
    "confusingPoints": "'옵션에 없는 앱은 어떻게 만드나요?' ➔ '텍스트창에 우리 반 상황을 직접 수정하시면 됩니다.'",
    "keyTerms": "골든 프롬프트, 템플릿 조립, 원클릭 복사"
  },
  {
    "slideId": 12,
    "time": "4분",
    "expectedAnswers": "'타이머, 퀴즈, 자리배치기 다 우리 반에 꼭 필요한 것들이에요.'",
    "confusingPoints": "'만든 앱을 스마트폰에서도 쓸 수 있나요?' ➔ '네, 다음 배포 단계에서 링크로 만듭니다.'",
    "keyTerms": "교실 맞춤형 웹앱 5선, 모둠 활동, 교과 퀴즈, 자리배치"
  },
  {
    "slideId": 13,
    "time": "10분",
    "expectedAnswers": "'진짜 15초 만에 타이머가 만들어지고 소리도 나요!', '단일 파일이 왜 편한지 알겠어요.'",
    "confusingPoints": "'전문 개발처럼 파일을 나눠야 하나요?' ➔ '교실용 간이 도구는 경로 에러가 없는 단일 파일이 훨씬 안전하며, 프로젝트가 커지면 분리합니다.'",
    "keyTerms": "실습 1, 3분 집중 타이머, 단일 파일(index.html), 경로 에러 방지, Confetti 폭죽"
  },
  {
    "slideId": 14,
    "time": "10분",
    "expectedAnswers": "'문제를 바꾸니까 과학 퀴즈, 영어 퀴즈로 바로 바뀌네요.'",
    "confusingPoints": "'문제 수를 늘리고 싶어요.' ➔ 'AI에게 문제 10개로 늘려줘라고 말씀하세요.'",
    "keyTerms": "실습 2, 교과 퀴즈 배틀, 4지선다, 성취 칭호, 셔플"
  },
  {
    "slideId": 15,
    "time": "12분",
    "expectedAnswers": "'학생 이름 저장되고 앞자리 고정석 기능까지 완벽해요.'",
    "confusingPoints": "'학생 명단이 지워지면 어쩌죠?' ➔ '브라우저 localStorage에 안전하게 영구 저장됩니다.'",
    "keyTerms": "실습 3, 스마트 자리배치기, 교실 규칙(로직), localStorage 저장"
  },
  {
    "slideId": 16,
    "time": "8분",
    "expectedAnswers": "'스마트폰으로 QR 찍으니까 진짜 내가 만든 앱이 열려요!'",
    "confusingPoints": "'배포 비용이 드나요?' ➔ 'GitHub과 Netlify는 완전 무료(0원)입니다.'",
    "keyTerms": "GitHub, Netlify 무료 배포, QR 코드 공유, 모바일 웹앱"
  },
  {
    "slideId": 17,
    "time": "5분",
    "expectedAnswers": "'교실 수업에 당장 활용해봐야겠어요. 자신감이 생겼습니다!'",
    "confusingPoints": "'연수 끝나고 잊어버리면 어쩌죠?' ➔ '상단 PDF 저장 버튼으로 오늘 교재를 언제든 출력하세요.'",
    "keyTerms": "기술은 AI에게, 교육적 가치는 교사에게, 에이전틱 수업 혁신"
  },
  {
    "slideId": 18,
    "time": "3분",
    "expectedAnswers": "'슬라이드에서 글자도 바로 고칠 수 있고 교사용 팁도 볼 수 있어 편리해요.'",
    "confusingPoints": "'고친 내용이 어디 저장되나요?' ➔ '선생님 컴퓨터 웹 브라우저(localStorage)에 안전하게 자동 저장됩니다.'",
    "keyTerms": "고치기 모드 (contenteditable), 전체화면 (단축키 F), 교사용 서랍 (단축키 T)"
  }
];

if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
  window.TEACHER_NOTES = TEACHER_NOTES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SLIDES_DATA, TEACHER_NOTES };
}
