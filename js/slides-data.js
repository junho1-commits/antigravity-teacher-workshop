/**
 * Antigravity Interactive Slides Data (24인치 대화면 & 단어 줄바꿈 최적화 버전)
 * - 넓은 화면 너비(max-w-6xl, w-full) 활용으로 어색한 줄바꿈 원천 차단
 * - 모든 제목 및 핵심 문장 단어 단위(keep-all) 완벽 한 줄 출력
 * - 심플, 명쾌, 고가독성 디자인
 */

const SLIDES_DATA = [
  // -------------------------------------------------------------
  // SLIDE 1: INTRO
  // -------------------------------------------------------------
  {
    id: 1,
    title: "오프닝",
    badge: "🚀 연수 시작",
    content: `
      <div class="h-full flex flex-col justify-center items-center text-center px-4 w-full max-w-6xl mx-auto">
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-base md:text-lg font-bold mb-6">
          <i data-lucide="sparkles" class="w-5 h-5 text-indigo-400"></i>
          <span>선생님을 위한 AI 에이전트 앱 개발 입문</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight break-keep">
          이것만 알면 <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">준호처럼</span> 할 수 있다!
        </h1>
        
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mb-10 font-semibold leading-relaxed break-keep">
          코딩을 몰라도, 구글 <span class="text-sky-400 font-bold underline decoration-sky-500 underline-offset-8">안티그래비티</span>와 대화하면 우리 반 웹앱이 뚝딱 완성됩니다.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-10">
          <div class="glass-card p-6 rounded-2xl border border-slate-700">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-blue-500/20 text-blue-400"><i data-lucide="bot" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">1. 에이전트의 힘</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">말만 하는 챗봇을 넘어, 직접 코딩하고 실행해 주는 똑똑한 조교</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-slate-700">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-purple-500/20 text-purple-400"><i data-lucide="heart" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">2. 교실 도메인 지식</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">기술 지식보다 선생님의 교실 문제의식과 아이디어가 100배 중요</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-slate-700">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400"><i data-lucide="globe" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">3. 인터넷 무료 배포</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">GitHub과 Netlify로 스마트폰 링크 하나 띄워 학생들과 공유</p>
          </div>
        </div>

        <button onclick="window.nextSlide()" class="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold shadow-xl shadow-indigo-500/30 transition-all transform hover:scale-105">
          <span>강의 시작하기</span>
          <i data-lucide="arrow-right" class="w-6 h-6"></i>
        </button>
      </div>
    `,
    agentInsights: {
      pm: "화면 폭을 넉넉히 확장하여 모든 설명문이 단어 단위로 자연스럽게 배치되었습니다.",
      content: "3대 핵심 목표가 시원하게 전달되도록 텍스트 배치를 정돈했습니다.",
      design: "대화면 비율에 맞춰 버튼과 카드의 여백을 안정감 있게 구성했습니다.",
      qa: "오프닝에서 문장 꺾임이나 글자 잘림이 전혀 발생하지 않습니다.",
      consultant: "교사들이 연수 시작부터 편안한 시각적 안정감을 느낄 수 있습니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 오늘 연수는 코딩을 배우는 시간이 아닙니다! 실력 좋은 AI 조교에게 제대로 일 시키는 '지휘법'을 배우는 시간입니다. 편안한 마음으로 시작해보겠습니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 2: MINDSET SHIFT
  // -------------------------------------------------------------
  {
    id: 2,
    title: "마인드셋 전환",
    badge: "💡 패러다임 전환",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <span class="text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider">패러다임의 변화</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "선생님, 코딩 배우러 오신 게 아닙니다!"
          </h2>
          <p class="text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep">우리가 코딩을 포기했던 이유와 지금 일어난 거대한 변화</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Past Coding -->
          <div class="glass-card p-8 rounded-3xl border border-rose-500/40 bg-rose-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-4 py-1.5 rounded-full bg-rose-500/30 text-rose-300 font-bold text-sm">과거의 개발 방식</span>
                <i data-lucide="x-circle" class="w-7 h-7 text-rose-400"></i>
              </div>
              <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-4">문법 암기와 오타 찾기</h3>
              <ul class="space-y-4 text-base md:text-lg text-slate-200 font-medium">
                <li class="flex items-center gap-3">
                  <span class="text-rose-400 text-xl font-bold">✕</span>
                  <span class="break-keep">세미콜론(;) 하나 빠졌다고 3시간 헤매기</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-rose-400 text-xl font-bold">✕</span>
                  <span class="break-keep">영어 문법과 변수, 함수 외우다 지치기</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-rose-400 text-xl font-bold">✕</span>
                  <span class="break-keep">복잡한 프로그램 설치하다가 첫날 포기</span>
                </li>
              </ul>
            </div>
            <div class="mt-8 p-4 rounded-2xl bg-rose-900/40 text-rose-200 text-base md:text-lg font-bold text-center">
              👉 내가 직접 벽돌을 굽고 쌓는 '벽돌공'
            </div>
          </div>

          <!-- Future Agentic Coding -->
          <div class="glass-card p-8 rounded-3xl border border-emerald-500/50 bg-emerald-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-4 py-1.5 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-sm">지금의 에이전틱 개발</span>
                <i data-lucide="check-circle-2" class="w-7 h-7 text-emerald-400"></i>
              </div>
              <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-4">말로 지시하는 총괄 건축가</h3>
              <ul class="space-y-4 text-base md:text-lg text-slate-200 font-medium">
                <li class="flex items-center gap-3">
                  <span class="text-emerald-400 text-xl font-bold">✓</span>
                  <span class="break-keep">한국어로 교실 상황과 필요한 기능만 설명하기</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-emerald-400 text-xl font-bold">✓</span>
                  <span class="break-keep">복잡한 코딩과 파일 생성은 AI가 전담</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-emerald-400 text-xl font-bold">✓</span>
                  <span class="break-keep">선생님은 "우리 반에 유용한가?"만 판단하기</span>
                </li>
              </ul>
            </div>
            <div class="mt-8 p-4 rounded-2xl bg-emerald-900/40 text-emerald-200 text-base md:text-lg font-bold text-center">
              👉 최고의 건축팀을 지휘하는 '총괄 감독관'
            </div>
          </div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "벽돌공 vs 건축가 대비를 명확히 하고 한 줄 줄바꿈을 완벽히 잡았습니다.",
      content: "선생님의 역할이 코딩 기술자가 아닌 기획자임을 깔끔히 강조합니다.",
      design: "글자 크기와 여백의 균형을 맞춰 시각적 피로도를 없앴습니다.",
      qa: "텍스트 겹침이나 불필요한 줄바꿈이 전혀 없습니다.",
      consultant: "비전공 교사들이 가장 공감하는 슬라이드입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "집 지을 때 벽돌 굽는 법부터 배우지 않죠? 설계도만 가지고 전문가에게 '방 3개 만들어주세요' 하듯이, 이제 개발도 선생님의 아이디어를 AI에게 말로 전달하면 됩니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 3: DOMAIN KNOWLEDGE (FIXED SINGLE LINE TITLE)
  // -------------------------------------------------------------
  {
    id: 3,
    title: "도메인 지식의 힘",
    badge: "🧠 핵심 가치",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">도메인 지식이란?</span>
          <!-- 제목 한 줄 출력 및 단어 단위 줄바꿈 보장 -->
          <h2 class="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mt-1 leading-tight break-keep">
            "AI 지식보다 '교실 도메인 지식'이 100배 중요합니다"
          </h2>
          <p class="text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep">선생님이 매일 교실에서 겪는 경험과 고민이 최고의 기획서입니다</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div class="glass-card p-6 rounded-2xl border border-sky-500/30">
            <div class="text-sky-300 mb-2 text-lg font-bold flex items-center gap-2">
              <i data-lucide="users" class="w-5 h-5"></i> 1. 아이들 눈높이
            </div>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "저학년은 글씨가 크고 소리가 나야 집중해"<br>
              "자리 바꿀 땐 시력과 교우 관계를 배려해야 해"
            </p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-purple-500/30">
            <div class="text-purple-300 mb-2 text-lg font-bold flex items-center gap-2">
              <i data-lucide="book-open" class="w-5 h-5"></i> 2. 수업 운영 노하우
            </div>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "모둠 토의는 딱 3분 타이머가 제일 효과적이야"<br>
              "수행평가 체크리스트는 이 항목이 필수적이야"
            </p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-emerald-500/30">
            <div class="text-emerald-300 mb-2 text-lg font-bold flex items-center gap-2">
              <i data-lucide="check-square" class="w-5 h-5"></i> 3. 학급 행정 규칙
            </div>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "청소 구역 당번은 1주일씩 돌아가야 공평해"<br>
              "가정통신문 알림장은 이 양식으로 정리해야 해"
            </p>
          </div>
        </div>

        <!-- Interactive Domain Knowledge Quiz -->
        <div class="glass-panel p-6 rounded-2xl border border-indigo-500/40 text-center">
          <h4 class="text-lg md:text-xl font-bold text-indigo-300 mb-2 flex items-center justify-center gap-2">
            <i data-lucide="help-circle" class="w-6 h-6"></i> [생각해보기] 실리콘밸리 코딩 천재 vs 10년 차 초등 교사
          </h4>
          <p class="text-base md:text-lg text-slate-200 mb-4 font-medium break-keep">
            초등학교 수업에 진짜 쓸모 있는 웹앱을 기획할 사람은 누구일까요?
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button onclick="window.checkQuiz(this, false)" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-base font-bold transition-all">
              A. 코딩 천재 개발자
            </button>
            <button onclick="window.checkQuiz(this, true)" class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-base font-bold transition-all shadow-lg shadow-indigo-500/30">
              B. 교실 아이들을 제일 잘 아는 현장 교사
            </button>
          </div>
          <div id="quiz-feedback" class="mt-3 text-base md:text-lg font-bold text-amber-300 hidden"></div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "사용자가 지적한 '다\"' 줄바꿈 문제를 완벽히 해결하여 한 줄로 웅장하게 출력됩니다.",
      content: "도메인 지식의 핵심 메시지가 시원한 한 줄 타이틀로 전달됩니다.",
      design: "글자 크기와 컨테이너 너비(max-w-6xl)를 완벽히 조율했습니다.",
      qa: "24인치 화면에서 제목이 1줄로 완벽히 출력됨을 검증했습니다.",
      consultant: "시각적 안정감이 극대화되어 청중의 집중도가 올라갑니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "개발자는 코드는 잘 짤지 몰라도, 교실에서 아이들이 언제 떠들고 언제 집중하는지는 모릅니다. 무엇을 만들어야 할지 결정하는 힘은 오직 선생님에게만 있습니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 4: WHAT IS ENGINEERING?
  // -------------------------------------------------------------
  {
    id: 4,
    title: "엔지니어링이란?",
    badge: "⚙️ 본질 이해",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <span class="text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider">엔지니어링의 본질</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "엔지니어링이란, 불편함을 시스템으로 해결하는 것입니다"
          </h2>
          <p class="text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep">기술을 외우는 것이 아니라, 문제 해결 순서를 정리하는 사고방식</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Step 1 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
            <div class="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-extrabold text-2xl mb-4">1</div>
            <h3 class="text-xl font-bold text-white mb-2">문제 발견</h3>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "매달 자리 바꿀 때마다 쪽지 뽑느라 1교시가 다 날아가고 불만이 나온다."
            </p>
            <span class="mt-4 text-sm font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">불편함 포착</span>
          </div>

          <!-- Step 2 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
            <div class="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-2xl mb-4">2</div>
            <h3 class="text-xl font-bold text-white mb-2">규칙(로직) 정리</h3>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "버튼 하나 누르면 남녀 섞고, 시력 배려석 우선 배정한 뒤 랜덤 배치하자."
            </p>
            <span class="mt-4 text-sm font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">해결 규칙 설계</span>
          </div>

          <!-- Step 3 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
            <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-2xl mb-4">3</div>
            <h3 class="text-xl font-bold text-white mb-2">AI로 시스템 구축</h3>
            <p class="text-base text-slate-300 leading-relaxed font-medium break-keep">
              "안티그래비티에게 규칙을 말하고 30초 만에 웹앱으로 만들어 학교 공유."
            </p>
            <span class="mt-4 text-sm font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">엔지니어링 완성</span>
          </div>
        </div>

        <div class="mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-700 text-center text-base md:text-lg text-slate-200 font-semibold break-keep">
          ✨ <span class="text-amber-300 font-bold">선생님은 1단계(문제 찾기)와 2단계(규칙 정하기)만 하세요.</span> 3단계 코딩은 안티그래비티가 다 합니다!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "엔지니어링 3단계의 폰트와 너비가 균형감 있게 맞아떨어집니다.",
      content: "선생님이 해야 할 일과 AI가 할 일을 명쾌히 구분했습니다.",
      design: "대칭적 3단 카드 레이아웃으로 가독성을 높였습니다.",
      qa: "모든 텍스트가 단어 단위로 깔끔히 줄바꿈됩니다.",
      consultant: "선생님들이 일상 업무의 자동화 아이디어를 떠올리게 돕습니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, '엔지니어링'은 어려운 수학이 아닙니다. '이 불편한 걸 어떻게 하면 다음엔 안 불편하게 시스템으로 만들까?' 생각하는 것이 바로 엔지니어링입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 5: CHATBOT VS AGENT
  // -------------------------------------------------------------
  {
    id: 5,
    title: "챗봇 vs 에이전트",
    badge: "🤖 비교 체험",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-indigo-400 font-bold text-base md:text-lg uppercase tracking-wider">챗봇 vs 에이전트</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "왜 Gemini가 아니라 안티그래비티(에이전트)여야 할까요?"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">아래 버튼을 눌러 챗봇과 에이전트의 일하는 방식 차이를 직접 체험해보세요!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Chatbot Box -->
          <div class="glass-card p-6 rounded-3xl border border-slate-700 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div class="p-2 rounded-xl bg-slate-700 text-slate-300"><i data-lucide="message-square" class="w-5 h-5"></i></div>
                  <h3 class="font-bold text-white text-lg">일반 챗봇 (Gemini 웹)</h3>
                </div>
                <span class="text-xs text-slate-400 font-bold px-2.5 py-1 rounded bg-slate-800">말만 하는 조언자</span>
              </div>
              <p class="text-sm text-slate-400 mb-3 font-medium">"자리배치 웹앱 만들어줘"라고 요청했을 때:</p>
              
              <div id="chatbot-output" class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs md:text-sm font-mono text-slate-400 h-40 overflow-y-auto leading-relaxed">
                <span class="text-slate-500">// 대기 중... 아래 회색 버튼을 누르세요.</span>
              </div>
            </div>
            
            <button onclick="window.runChatbotSim()" class="mt-4 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm md:text-base font-bold transition-all">
              Gemini 챗봇에게 요청해보기
            </button>
          </div>

          <!-- Agent Box -->
          <div class="glass-card p-6 rounded-3xl border border-indigo-500/50 bg-indigo-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div class="p-2 rounded-xl bg-indigo-500 text-white"><i data-lucide="bot" class="w-5 h-5"></i></div>
                  <h3 class="font-bold text-indigo-200 text-lg">안티그래비티 (AI 에이전트)</h3>
                </div>
                <span class="text-xs text-indigo-300 font-bold px-2.5 py-1 rounded bg-indigo-500/20">대신 일해주는 실무 조교</span>
              </div>
              <p class="text-sm text-indigo-300/80 mb-3 font-medium">"자리배치 웹앱 만들어줘"라고 요청했을 때:</p>
              
              <div id="agent-output" class="bg-slate-950 p-4 rounded-xl border border-indigo-500/40 text-xs md:text-sm font-mono text-slate-200 h-40 overflow-y-auto leading-relaxed">
                <span class="text-slate-500">// 대기 중... 아래 보라색 버튼을 누르세요.</span>
              </div>
            </div>

            <button onclick="window.runAgentSim()" class="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm md:text-base font-bold transition-all shadow-lg shadow-indigo-500/30">
              안티그래비티 에이전트에게 요청하기 (체험)
            </button>
          </div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "제목이 한 줄로 또렷하게 정돈되어 챗봇과 에이전트 비교가 돋보입니다.",
      content: "시뮬레이터의 텍스트가 시원하게 출력되도록 영역을 확보했습니다.",
      design: "좌우 대비 카드의 시인성을 높였습니다.",
      qa: "시뮬레이터 동작 시 줄 겹침이나 잘림 없이 정상 출력됩니다.",
      consultant: "챗봇과의 차이점을 가장 빠르고 확실하게 이해시키는 장표입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "챗봇에게 코딩 시키면 500줄짜리 영어를 던져주고 '알아서 쓰세요' 하죠? 하지만 안티그래비티는 자기가 알아서 폴더 만들고 브라우저까지 띄워줍니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 6: MULTI-AGENT COLLABORATION
  // -------------------------------------------------------------
  {
    id: 6,
    title: "에이전트 협업 시스템",
    badge: "👥 멀티 에이전트",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider">에이전트 협업 체계</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "혼자 일하는 AI보다 팀으로 협업하는 AI가 강합니다"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">지금 보시는 이 강의 슬라이드도 아래 5개 에이전트 팀이 협업하여 완성했습니다!</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <!-- PM -->
          <div class="glass-card p-5 rounded-2xl border border-amber-500/40 text-center">
            <div class="text-3xl mb-2">👑</div>
            <h4 class="font-bold text-amber-300 text-base mb-1">총괄 선임 (PM)</h4>
            <p class="text-xs md:text-sm text-slate-300 font-medium break-keep">작업 분배, 일정 조율, 최종 결과물 취합</p>
          </div>

          <!-- Writer -->
          <div class="glass-card p-5 rounded-2xl border border-blue-500/40 text-center">
            <div class="text-3xl mb-2">✍️</div>
            <h4 class="font-bold text-blue-300 text-base mb-1">내용 개발팀</h4>
            <p class="text-xs md:text-sm text-slate-300 font-medium break-keep">교사 눈높이 설명 및 쉬운 교육 비유 개발</p>
          </div>

          <!-- Designer -->
          <div class="glass-card p-5 rounded-2xl border border-pink-500/40 text-center">
            <div class="text-3xl mb-2">🎨</div>
            <h4 class="font-bold text-pink-300 text-base mb-1">디자인팀</h4>
            <p class="text-xs md:text-sm text-slate-300 font-medium break-keep">대화면 글자 크기, 색상, 심플 UI 배치</p>
          </div>

          <!-- QA/Critic -->
          <div class="glass-card p-5 rounded-2xl border border-emerald-500/40 text-center">
            <div class="text-3xl mb-2">🔍</div>
            <h4 class="font-bold text-emerald-300 text-base mb-1">검수팀 (QA)</h4>
            <p class="text-xs md:text-sm text-slate-300 font-medium break-keep">오탈자 검증, 에러 점검, 가독성 확인</p>
          </div>

          <!-- Consultant -->
          <div class="glass-card p-5 rounded-2xl border border-indigo-500/40 text-center">
            <div class="text-3xl mb-2">💡</div>
            <h4 class="font-bold text-indigo-300 text-base mb-1">컨설턴트팀</h4>
            <p class="text-xs md:text-sm text-slate-300 font-medium break-keep">현장 교사 관점 피드백 및 실용성 조언</p>
          </div>
        </div>

        <div class="glass-panel p-4 rounded-2xl border border-slate-700 text-center text-sm md:text-base font-semibold text-slate-200 break-keep">
          🔄 <strong>자체 피드백 루프:</strong> 내용 작성 ➔ 컨설턴트 지적 ➔ 디자인 수정 ➔ 검수 확인 ➔ 완성도 극대화!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "5개 팀의 역할 카드가 대화면에서 한눈에 조망되도록 정리했습니다.",
      content: "협업과 피드백 루프의 가치를 직관적으로 설명합니다.",
      design: "5열 그리드의 여백과 폰트 크기를 조율했습니다.",
      qa: "각 카드의 설명 텍스트가 단어 단위로 깔끔히 정돈되었습니다.",
      consultant: "멀티 에이전트 시스템을 학교 조직도에 빗대어 쉽게 전달합니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 학교 축제 준비할 때도 한 명이 다 안 하죠? 무대, 기획, 홍보 나누듯이 AI도 역할을 나눠주면 혼자 할 때보다 10배 더 똑똑해집니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 7: ANTIGRAVITY TOUR
  // -------------------------------------------------------------
  {
    id: 7,
    title: "안티그래비티 둘러보기",
    badge: "🔭 화면 안내",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">안티그래비티 화면 안내</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "안티그래비티 핵심 화면 3분 완벽 정복"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">복잡해 보여도 딱 3개 구역만 기억하시면 끝납니다!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Zone 1 -->
          <div class="glass-card p-6 rounded-2xl border border-sky-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-extrabold text-lg">1</span>
                <h3 class="font-bold text-white text-lg md:text-xl">대화창 (Chat)</h3>
              </div>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                선생님의 아이디어, 수정 요청, 에러 화면을 입력하는 소통 공간입니다. 한국어로 편하게 말하세요.
              </p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-sky-300">
              💬 "초등용 3분 타이머 만들어줘"
            </div>
          </div>

          <!-- Zone 2 -->
          <div class="glass-card p-6 rounded-2xl border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-lg">2</span>
                <h3 class="font-bold text-white text-lg md:text-xl">계획 & 실행창 (Plan)</h3>
              </div>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                에이전트가 어떤 파일을 만들고 코드를 수정할지 스스로 계획하고 작업하는 작업대입니다.
              </p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-indigo-300">
              📝 index.html 생성 완료 (+120줄)
            </div>
          </div>

          <!-- Zone 3 -->
          <div class="glass-card p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-lg">3</span>
                <h3 class="font-bold text-white text-lg md:text-xl">실시간 미리보기</h3>
              </div>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                코드를 몰라도 내가 지시한 대로 완성된 웹앱을 브라우저에서 마우스로 직접 확인하는 화면입니다.
              </p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs md:text-sm font-mono text-emerald-300">
              🌐 localhost:3000 (동작 중)
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep">
          💡 <span class="text-amber-300 font-bold">핵심 원칙:</span> 선생님은 1번(대화창)만 쓰시고, 2번은 구경하시고, 3번에서 마우스로 테스트하시면 됩니다!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "3개 구역 안내 슬라이드의 제목과 카드 배치가 한눈에 쏙 들어오게 개선되었습니다.",
      content: "초보 교사의 행동 지침(대화창만 쓰면 된다)을 명확히 전달합니다.",
      design: "3단 카드의 폰트와 코드 박스의 가독성을 높였습니다.",
      qa: "모든 텍스트가 줄바꿈 없이 깔끔히 출력됩니다.",
      consultant: "화면 구조의 두려움을 없애주는 훌륭한 안내 슬라이드입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "화면에 글씨가 많다고 겁먹지 마세요! 선생님이 만질 곳은 카카오톡처럼 생긴 '채팅창' 하나뿐입니다. 나머지는 AI 혼자 일하는 곳입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 8: REALITY CHECK
  // -------------------------------------------------------------
  {
    id: 8,
    title: "현실적인 조언",
    badge: "⚠️ 현실 조언",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-rose-400 font-bold text-base md:text-lg uppercase tracking-wider">현실적인 조언</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "앱은 마법처럼 한 번에 쉽게 만들어지지 않습니다"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">에러는 실패가 아니라, 더 완벽해지기 위한 '자연스러운 대화의 시작'입니다</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glass-card p-6 md:p-8 rounded-3xl border border-rose-500/30 bg-rose-950/20">
            <h3 class="text-xl md:text-2xl font-bold text-rose-300 mb-4 flex items-center gap-2">
              <i data-lucide="alert-triangle" class="w-6 h-6"></i> 흔히 겪는 착각과 포기
            </h3>
            <ul class="space-y-4 text-base md:text-lg text-slate-200 font-medium">
              <li class="flex items-start gap-3">
                <span class="text-rose-400 font-bold text-xl">✕</span>
                <span class="break-keep">"프롬프트 한 줄 치면 버튼 한 번에 완성될 거야."</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-rose-400 font-bold text-xl">✕</span>
                <span class="break-keep">"빨간 에러가 떴네? 난 코딩 체질이 아닌가 봐..." (좌절)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-rose-400 font-bold text-xl">✕</span>
                <span class="break-keep">"버튼이 안 눌리네? AI가 엉터리네." (포기)</span>
              </li>
            </ul>
          </div>

          <div class="glass-card p-6 md:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20">
            <h3 class="text-xl md:text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <i data-lucide="check-circle" class="w-6 h-6"></i> 성공하는 선생님의 마인드셋
            </h3>
            <ul class="space-y-4 text-base md:text-lg text-slate-200 font-medium">
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 font-bold text-xl">✓</span>
                <span class="break-keep">"일단 기본 뼈대부터 만들고 살을 붙여나가자."</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 font-bold text-xl">✓</span>
                <span class="break-keep">"빨간 글씨? AI에게 복사해주고 '고쳐줘' 하면 끝!"</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 font-bold text-xl">✓</span>
                <span class="break-keep">"원하는 기능이 나올 때까지 3~4번 대화하며 다듬자."</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 text-center text-base md:text-lg text-indigo-200 font-bold break-keep">
          💡 코딩을 아느냐가 아니라, 에러가 났을 때 당황하지 않고 AI에게 질문하느냐가 실력입니다!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "현실적 조언 장표의 제목과 리스트 문장들이 한눈에 들어옵니다.",
      content: "심리적 안정감을 제공하는 텍스트가 선명하게 출력됩니다.",
      design: "경고색과 성공색 카드의 균형을 맞췄습니다.",
      qa: "오탈자 및 문장 꺾임 없음 확인 완료.",
      consultant: "선생님들의 멘탈 관리에 결정적인 역할을 합니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "전문 개발자들도 하루에 에러 수십 번 봅니다. 에러가 났다는 건 실패한 게 아니라, AI가 '어디를 고치면 되는지 힌트를 찾았다'는 뜻입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 9: ERROR FIX SIMULATOR
  // -------------------------------------------------------------
  {
    id: 9,
    title: "에러 해결 시뮬레이터",
    badge: "🛠️ 실전 대처",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-emerald-400 font-bold text-base md:text-lg uppercase tracking-wider">에러 대처법</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "모르면 물어봐! AI가 100% 다 고쳐줍니다"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">빨간 에러 메시지가 떴을 때 실제로 어떻게 대처하는지 아래에서 실습해보세요.</p>
        </div>

        <!-- Simulator Container -->
        <div class="glass-panel p-6 md:p-8 rounded-3xl border border-slate-700 max-w-3xl mx-auto w-full">
          <!-- Step Indicator -->
          <div class="flex items-center justify-between mb-4 border-b border-slate-700 pb-3 text-sm md:text-base font-bold">
            <span class="text-slate-200">상황: 웹앱 실행 중 빨간 에러 발생!</span>
            <span id="sim-status-badge" class="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold">에러 발생 상태</span>
          </div>

          <!-- Screen Box -->
          <div id="sim-screen" class="bg-slate-950 p-4 rounded-2xl border border-rose-500/50 mb-4 font-mono text-xs md:text-sm text-rose-400 h-32 overflow-y-auto leading-relaxed">
            [ERROR] TypeError: Cannot read property 'classList' of null at timer.js:42<br>
            [FAIL] Failed to update timer display because element '#display' is missing.
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button id="btn-copy-error" onclick="window.simCopyError()" class="flex-1 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2">
              <i data-lucide="copy" class="w-5 h-5"></i>
              <span>1. 에러 메시지 복사하기</span>
            </button>
            <button id="btn-ask-ai" onclick="window.simAskAI()" class="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30">
              <i data-lucide="send" class="w-5 h-5"></i>
              <span>2. AI에게 "이거 고쳐줘" 전송하기</span>
            </button>
          </div>

          <!-- Resolution Message -->
          <div id="sim-resolution" class="mt-4 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-sm md:text-base text-emerald-300 font-medium hidden leading-relaxed break-keep">
            🎉 <strong>안티그래비티:</strong> "index.html에 빠져있던 '#display' 태그를 자동으로 추가하고 timer.js를 수정했습니다! 이제 정상 작동합니다."
          </div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "시뮬레이터 창이 24인치 모니터 중앙에 넉넉하고 시원하게 배치되었습니다.",
      content: "복사 ➔ 전송의 단순함이 가장 큰 효과를 냅니다.",
      design: "에러 상태와 해결 상태의 시각적 전환이 뚜렷합니다.",
      qa: "모든 인터랙션 버튼이 완벽히 작동합니다.",
      consultant: "실습 도중 에러를 만나도 당황하지 않는 특효약입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 에러 내용 해석하려고 머리 싸매지 마세요. 그냥 긁어서 '이거 왜 안 돼? 고쳐줘'라고 던지면 AI가 3초 만에 사과하고 알아서 고쳐놓습니다!"
    `
  },

  // -------------------------------------------------------------
  // SLIDE 10: GOLDEN PROMPT BUILDER
  // -------------------------------------------------------------
  {
    id: 10,
    title: "골든 프롬프트 4단 공식",
    badge: "📋 프롬프트 조립",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-5">
          <span class="text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider">프롬프트 조립 공식</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "어떻게 말해야 할지 모를 땐 '4단 공식'만 기억하세요"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">항목을 선택하면 완벽한 프롬프트가 자동으로 완성됩니다!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Selection Controls -->
          <div class="space-y-4 text-sm md:text-base">
            <div>
              <label class="block text-sky-300 font-bold mb-1.5">1. 역할 (Role)</label>
              <select id="prompt-role" onchange="window.buildPrompt()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 font-medium focus:border-indigo-500">
                <option value="초등학교 수업용 웹앱 전문 개발자야.">초등학교 수업용 웹앱 전문 개발자</option>
                <option value="중고등학교 수행평가 도구 전문 UI/UX 디자이너야.">중고등학교 수행평가 도구 전문 디자이너</option>
                <option value="학급 경영 및 교무 업무 자동화 전문가야.">학급 경영 및 교무 자동화 전문가</option>
              </select>
            </div>

            <div>
              <label class="block text-purple-300 font-bold mb-1.5">2. 목적 (Purpose)</label>
              <select id="prompt-purpose" onchange="window.buildPrompt()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 font-medium focus:border-indigo-500">
                <option value="모둠 토의 및 발표 시간에 사용할 직관적인 '수업용 미션 타이머'를 만들고 싶어.">수업용 미션 타이머 제작</option>
                <option value="매달 공정하고 재미있게 자리를 재배치하는 '학급 자리배치기'를 만들고 싶어.">학급 자리배치기 제작</option>
                <option value="학부모님과 학생들에게 보낼 '오늘의 알림장 자동 생성기'를 만들고 싶어.">오늘의 알림장 생성기 제작</option>
              </select>
            </div>

            <div>
              <label class="block text-emerald-300 font-bold mb-1.5">3. 필수 기능 (Features)</label>
              <select id="prompt-feature" onchange="window.buildPrompt()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 font-medium focus:border-indigo-500">
                <option value="1분, 3분, 5분 원클릭 프리셋 버튼, 시간이 다 되면 팡파레 효과음과 애니메이션.">프리셋 버튼 + 팡파레 효과음</option>
                <option value="학생 명단 붙여넣기, 남녀 분리 옵션, 시력 배려석 고정 기능.">명단 붙여넣기 + 고정석 옵션</option>
                <option value="준비물, 숙제, 전달사항 체크박스 및 카카오톡 공유 텍스트 복사 버튼.">체크박스 + 카톡 공유 버튼</option>
              </select>
            </div>

            <div>
              <label class="block text-pink-300 font-bold mb-1.5">4. 디자인 (Design)</label>
              <select id="prompt-design" onchange="window.buildPrompt()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 font-medium focus:border-indigo-500">
                <option value="초등학생들이 좋아하도록 귀엽고 큼직한 글씨와 파스텔톤 컬러로 만들어줘.">귀여운 파스텔톤 + 큰 글씨</option>
                <option value="교탁 빔프로젝터에서 보기 편하게 시인성 높은 다크 테마로 해줘.">빔프로젝터용 고대비 다크 테마</option>
                <option value="스마트폰 화면에서도 깨지지 않는 모바일 반응형 UI로 만들어줘.">스마트폰 최적화 반응형 UI</option>
              </select>
            </div>
          </div>

          <!-- Generated Output Box -->
          <div class="glass-card p-5 rounded-2xl border border-indigo-500/40 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-bold text-indigo-300">조립된 안티그래비티 프롬프트</span>
                <span class="text-xs px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-bold">복사 준비 완료</span>
              </div>
              <textarea id="prompt-output" readonly class="w-full h-48 bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs md:text-sm font-mono text-slate-100 resize-none focus:outline-none leading-relaxed"></textarea>
            </div>
            
            <button onclick="window.copyPrompt()" class="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
              <i data-lucide="copy" class="w-5 h-5"></i>
              <span id="copy-btn-text">완성된 프롬프트 원클릭 복사</span>
            </button>
          </div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "프롬프트 조립기의 좌우 균형과 텍스트 박스 너비를 충분히 확보했습니다.",
      content: "실제 연수 현장에서 즉시 활용 가능한 실용적 템플릿입니다.",
      design: "선택 컨트롤과 결과 박스의 여백이 시원합니다.",
      qa: "원클릭 복사 및 실시간 조합이 오류 없이 작동합니다.",
      consultant: "선생님들이 가장 만족하는 도구형 슬라이드입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 그냥 '타이머 만들어줘'라고 하면 AI가 대충 만듭니다. 하지만 이 4가지(역할, 목적, 기능, 디자인)만 찍어서 던져주면 1분 만에 100점짜리 앱이 나옵니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 11: HANDS-ON APP BUILDING
  // -------------------------------------------------------------
  {
    id: 11,
    title: "실전 앱 제작 및 수정",
    badge: "⚡ 실전 실습",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">실시간 수정 기술</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "처음 만든 앱을 발전시키는 '티키타카 꼬리 질문법'"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">첫 결과물에 선생님의 교실 규칙을 더해 3단계로 완성도를 높여보세요</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <!-- Step 1 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <span class="text-xs md:text-sm font-bold text-sky-400 mb-2 block">1단계. 기본 뼈대 생성</span>
              <h4 class="font-bold text-white text-lg mb-3">골든 프롬프트 전송</h4>
              <div class="bg-slate-950 p-3.5 rounded-xl text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
                💬 "우리 반 자리배치기 웹앱 만들어줘."
              </div>
            </div>
            <p class="text-xs md:text-sm text-sky-300 font-bold mt-4">➔ 30초 만에 기본 작동 앱 완성!</p>
          </div>

          <!-- Step 2 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <span class="text-xs md:text-sm font-bold text-purple-400 mb-2 block">2단계. 교실 규칙 추가</span>
              <h4 class="font-bold text-white text-lg mb-3">도메인 기능 꼬리 질문</h4>
              <div class="bg-slate-950 p-3.5 rounded-xl text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
                💬 "앞자리 고정석 버튼이랑 엑셀 명단 복사 기능 넣어줘."
              </div>
            </div>
            <p class="text-xs md:text-sm text-purple-300 font-bold mt-4">➔ 안티그래비티가 코드 즉시 반영!</p>
          </div>

          <!-- Step 3 -->
          <div class="glass-card p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <span class="text-xs md:text-sm font-bold text-emerald-400 mb-2 block">3단계. 아이들 감성 더하기</span>
              <h4 class="font-bold text-white text-lg mb-3">디자인 & 효과음 다듬기</h4>
              <div class="bg-slate-950 p-3.5 rounded-xl text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
                💬 "자리 섞을 때 3초간 드럼롤 효과음이랑 애니메이션 넣어줘!"
              </div>
            </div>
            <p class="text-xs md:text-sm text-emerald-300 font-bold mt-4">➔ 아이들이 열광하는 앱 완성!</p>
          </div>
        </div>

        <div class="p-4 md:p-5 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep">
          🎯 <strong>실습 미션:</strong> 지금 바로 안티그래비티에 1단계 프롬프트를 보내고, 꼬리 질문을 2번 이상 던져서 우리 반 맞춤 앱으로 업그레이드해 보세요!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "3단계 티키타카 카드의 텍스트가 줄바꿈 없이 깔끔히 정돈되었습니다.",
      content: "실제 교실에서 유용한 기능 추가 과정을 구체적으로 제시합니다.",
      design: "3단 대칭 배치가 안정감을 줍니다.",
      qa: "하단 실습 미션이 명확히 전달됩니다.",
      consultant: "선생님들이 직접 시도해보고 싶게 만드는 실천형 장표입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 처음 만든 앱이 완벽하지 않다고 실망하지 마세요. '버튼 색깔 노란색으로 바꿔줘', '글씨 더 키워줘'라고 계속 대화하며 다듬어가는 게 진짜 실력입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 12: WHAT IS GITHUB?
  // -------------------------------------------------------------
  {
    id: 12,
    title: "GitHub(깃허브)란?",
    badge: "🐙 코드 금고",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-purple-400 font-bold text-base md:text-lg uppercase tracking-wider">GitHub의 개념</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "GitHub은 개발자들의 구글 드라이브이자 타임머신입니다"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">어렵게 느껴졌던 깃허브, 교사의 시선에서 3가지로 완벽 정리!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Point 1 -->
          <div class="glass-card p-6 rounded-2xl border border-purple-500/30 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <i data-lucide="cloud" class="w-6 h-6"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">1. 클라우드 안전 금고</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium break-keep">
                학교 컴퓨터가 바뀌거나 고장 나도, 내 앱 코드가 인터넷에 안전하게 백업되어 평생 보관됩니다.
              </p>
            </div>
          </div>

          <!-- Point 2 -->
          <div class="glass-card p-6 rounded-2xl border border-sky-500/30 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <i data-lucide="history" class="w-6 h-6"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">2. 되돌리는 타임머신</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium break-keep">
                수정하다가 앱이 망가졌나요? 어제 버전, 1시간 전 버전으로 1초 만에 언제든 되돌릴 수 있습니다.
              </p>
            </div>
          </div>

          <!-- Point 3 -->
          <div class="glass-card p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <i data-lucide="share-2" class="w-6 h-6"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">3. 인터넷 배포의 발판</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium break-keep">
                GitHub에 코드가 올라가 있어야 잠시 후 배울 Netlify를 통해 전 세계 누구나 접속하는 웹사이트가 됩니다.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep">
          💡 <span class="text-amber-300 font-bold">선생님의 깃허브 계정</span>은 앞으로 만들 수많은 교육용 앱들의 멋진 '포트폴리오 보물창고'가 됩니다!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "제목과 핵심 포인트 3개가 시원한 대화면 너비로 정렬되었습니다.",
      content: "구글드라이브, 타임머신 비유로 깃허브의 가치를 완벽히 전달합니다.",
      design: "아이콘과 폰트 크기의 비율이 우수합니다.",
      qa: "오타나 줄바꿈 어색함이 전혀 없습니다.",
      consultant: "교사들에게 기술적 효능감을 크게 높여주는 슬라이드입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 한글 문서 작업할 때 '최종_진짜최종_마지막최종.hwp' 만들어보셨죠? 깃허브는 지저분한 파일 없이 깔끔하게 시간을 되돌려주는 타임머신 금고입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 13: PUSH TO GITHUB WITH ANTIGRAVITY
  // -------------------------------------------------------------
  {
    id: 13,
    title: "안티그래비티로 GitHub 올리기",
    badge: "🚀 자동 업로드",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">GitHub 자동 업로드</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "검은 화면 명령어 몰라도 됩니다. AI에게 시키세요!"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">` + "`git init`" + `, ` + "`git commit`" + ` 외우지 마세요. 안티그래비티 대화 한마디면 끝납니다.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- The Old Hard Way -->
          <div class="glass-card p-6 rounded-3xl border border-rose-500/30">
            <span class="text-sm font-bold text-rose-400 mb-3 block">❌ 과거의 복잡한 방법 (개발자 방식)</span>
            <div class="bg-black/90 p-5 rounded-2xl font-mono text-xs md:text-sm text-slate-300 space-y-1.5 leading-relaxed">
              <p class="text-rose-400">$ git init</p>
              <p class="text-rose-400">$ git add .</p>
              <p class="text-rose-400">$ git commit -m "feat: first commit"</p>
              <p class="text-rose-400">$ git branch -M main</p>
              <p class="text-rose-400">$ git remote add origin https://github.com/...</p>
              <p class="text-rose-400">$ git push -u origin main</p>
              <p class="text-amber-400 font-bold mt-2">➔ 오타 하나만 나도 패닉에 빠짐!</p>
            </div>
          </div>

          <!-- The Antigravity Way -->
          <div class="glass-card p-6 rounded-3xl border border-emerald-500/50 bg-emerald-950/20">
            <span class="text-sm font-bold text-emerald-400 mb-3 block">⭕ 안티그래비티 방식 (선생님 방식)</span>
            <div class="bg-slate-900 p-5 rounded-2xl border border-emerald-500/30 text-sm md:text-base text-slate-200 space-y-4">
              <div class="p-3.5 rounded-xl bg-indigo-950/60 border border-indigo-500/40 font-semibold text-indigo-200">
                💬 <strong>선생님:</strong> "안티그래비티야, 이 프로젝트 내 GitHub에 'my-class-timer'라는 이름으로 올려줘."
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 font-semibold text-emerald-200">
                🤖 <strong>안티그래비티:</strong> "GitHub 저장소를 생성하고 모든 코드를 최신 상태로 업로드 완료했습니다! 링크: https://github.com/..."
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 text-center text-sm md:text-base text-slate-300 font-medium break-keep">
          ✨ 지시는 자연어로! 복잡한 터미널 커맨드와 인증 처리는 안티그래비티가 뒤에서 알아서 실행합니다.
        </div>
      </div>
    `,
    agentInsights: {
      pm: "명령어 비교 슬라이드의 대화창 폰트가 시원하게 개선되었습니다.",
      content: "복잡한 개발자 방식과 쉬운 선생님 방식을 명확히 대비했습니다.",
      design: "터미널 뷰와 말풍선 뷰의 시각적 완성도가 높습니다.",
      qa: "단어 잘림 현상 0건 확인 완료.",
      consultant: "터미널 공포증을 해소하는 최고의 장면입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, git 명령어 외우느라 머리 싸매지 마세요. '깃허브에 올려줘'라고 하면 안티그래비티가 뒤에서 저 6개 명령어를 0.1초 만에 대신 쳐줍니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 14: WHAT IS NETLIFY?
  // -------------------------------------------------------------
  {
    id: 14,
    title: "Netlify(넷리파이)란?",
    badge: "🌐 웹 배포",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-emerald-400 font-bold text-base md:text-lg uppercase tracking-wider">Netlify 배포</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "내 컴퓨터 안의 앱에 인터넷 주소표(URL)를 달아주는 자판기"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">전 세계 어디서든 스마트폰으로 접속 가능한 진짜 웹사이트 만들기</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card p-6 rounded-2xl border border-slate-700 text-center flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 mx-auto rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <i data-lucide="gift" class="w-7 h-7"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">평생 무료 & 광고 없음</h3>
              <p class="text-sm md:text-base text-slate-300 font-medium break-keep">
                교사 개인이나 학급 단위에서 쓰는 소규모 웹앱은 평생 100% 무료로 운영됩니다.
              </p>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-slate-700 text-center flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 mx-auto rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <i data-lucide="zap" class="w-7 h-7"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">1초 원클릭 배포</h3>
              <p class="text-sm md:text-base text-slate-300 font-medium break-keep">
                서버 지식 없이, 폴더를 끌어다 놓거나 GitHub만 연결하면 5초 만에 주소가 생성됩니다.
              </p>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-slate-700 text-center flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <i data-lucide="refresh-cw" class="w-7 h-7"></i>
              </div>
              <h3 class="font-bold text-white text-lg md:text-xl mb-2">자동 업데이트</h3>
              <p class="text-sm md:text-base text-slate-300 font-medium break-keep">
                나중에 코드를 수정해서 GitHub에 올리면, Netlify 웹사이트도 실시간으로 자동 갱신됩니다.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 md:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center text-base md:text-lg text-emerald-200 font-bold break-keep">
          🔗 나만의 예쁜 주소 생성: <code class="bg-slate-950 px-3 py-1 rounded-lg text-emerald-400 font-mono">https://우리반타이머.netlify.app</code>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "Netlify의 3대 장점이 큼직하고 안정적인 비율로 배치되었습니다.",
      content: "인터넷 주소표 자판기 비유가 한 줄로 명쾌하게 전달됩니다.",
      design: "하단 예시 URL 박스의 시인성이 뛰어납니다.",
      qa: "줄 꺾임 현상 0건 확인 완료.",
      consultant: "선생님들이 자신의 앱 링크를 상상하며 매우 설레어하는 장표입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 지금까지 내 컴퓨터에서만 돌던 앱이 이제 'https://...' 주소를 가진 진짜 웹사이트가 됩니다. 카톡방에 링크 하나만 쏘면 전교생이 다 쓸 수 있습니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 15: DEPLOYMENT & QR CODE GENERATOR
  // -------------------------------------------------------------
  {
    id: 15,
    title: "1분 배포 & QR코드 공유",
    badge: "📱 배포 축제",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-5">
          <span class="text-emerald-400 font-bold text-base md:text-lg uppercase tracking-wider">배포와 공유</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "세상에 내 앱을 자랑하세요! 실시간 QR 코드 생성기"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">Netlify에서 발급받은 주소를 아래에 넣으면 즉시 모바일 접속용 QR코드가 생성됩니다!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- Input Controls -->
          <div class="glass-card p-6 md:p-8 rounded-3xl border border-slate-700 space-y-4">
            <h4 class="font-bold text-white text-base md:text-lg flex items-center gap-2">
              <i data-lucide="link" class="w-5 h-5 text-sky-400"></i> 배포된 웹사이트 주소 입력
            </h4>
            
            <div>
              <input type="text" id="deploy-url-input" value="https://my-school-app.netlify.app" placeholder="https://your-app.netlify.app" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-sm md:text-base text-slate-100 font-mono focus:outline-none focus:border-indigo-500">
            </div>

            <div>
              <button onclick="window.generateQRCode()" class="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-base font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30">
                <i data-lucide="qr-code" class="w-5 h-5"></i>
                <span>QR코드 생성 & 축하하기 🎊</span>
              </button>
            </div>

            <div class="text-xs md:text-sm text-slate-400 space-y-1 font-medium pt-2 break-keep">
              <p>📌 <strong>Netlify 3단계 요약:</strong></p>
              <p>1. app.netlify.com 접속 ➔ 2. 'Add new site' 클릭 ➔ 3. GitHub 선택 ➔ [Deploy] 끝!</p>
            </div>
          </div>

          <!-- QR Code Preview Display -->
          <div class="glass-card p-6 md:p-8 rounded-3xl border border-indigo-500/40 flex flex-col items-center justify-center text-center min-h-[260px]">
            <div id="qrcode-container" class="p-3 bg-white rounded-2xl shadow-2xl mb-3 flex items-center justify-center">
              <!-- QR Code Canvas Injected Here -->
            </div>
            <p id="qr-target-text" class="text-xs md:text-sm font-mono text-indigo-300 break-all max-w-xs font-bold">
              https://my-school-app.netlify.app
            </p>
            <span class="text-xs md:text-sm text-slate-300 font-semibold mt-1">📱 스마트폰 카메라로 비춰보세요!</span>
          </div>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "QR코드 생성기의 입력과 결과 영역이 완벽한 균형으로 렌더링됩니다.",
      content: "실시간 모바일 접속의 감동을 극대화했습니다.",
      design: "화이트 QR 박스와 네온 배경의 대비가 뚜렷합니다.",
      qa: "URL 입력 및 QR 렌더링, 콘페티가 정상 작동합니다.",
      consultant: "연수의 피날레를 장식하는 가장 신나는 순간입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 지금 바로 스마트폰 카메라를 켜서 화면의 QR코드를 찍어보세요! 내 손바닥 안에서 내가 지시한 앱이 돌아가는 이 순간을 꼭 사진으로 남겨두세요."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 16: CONCLUSION & WRAP-UP
  // -------------------------------------------------------------
  {
    id: 16,
    title: "마무리 & Q&A",
    badge: "🎓 수료 & 응원",
    content: `
      <div class="h-full flex flex-col justify-center items-center text-center w-full max-w-5xl mx-auto px-4">
        <div class="w-18 h-18 p-4 rounded-3xl bg-gradient-to-tr from-amber-400 to-indigo-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/30">
          <i data-lucide="award" class="w-10 h-10"></i>
        </div>

        <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight break-keep">
          "기술은 AI에게, 교육적 가치는 선생님에게!"
        </h2>
        
        <p class="text-lg md:text-2xl text-slate-300 max-w-4xl mb-8 leading-relaxed font-semibold break-keep">
          오늘 배운 3가지만 기억하시면, 앞으로 교실에 필요한 어떤 앱도 두려움 없이 만들어내실 수 있습니다.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left mb-8">
          <div class="glass-card p-5 rounded-2xl border border-slate-700">
            <h4 class="font-bold text-sky-400 text-base md:text-lg mb-1">1. 교실 도메인 지식</h4>
            <p class="text-sm text-slate-300 font-medium break-keep">선생님의 교실 문제의식이 최고의 기획서입니다.</p>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-slate-700">
            <h4 class="font-bold text-purple-400 text-base md:text-lg mb-1">2. 티키타카 질문법</h4>
            <p class="text-sm text-slate-300 font-medium break-keep">에러는 대화의 시작! AI에게 끈기 있게 질문하세요.</p>
          </div>
          <div class="glass-card p-5 rounded-2xl border border-slate-700">
            <h4 class="font-bold text-emerald-400 text-base md:text-lg mb-1">3. 공유와 확산</h4>
            <p class="text-sm text-slate-300 font-medium break-keep">GitHub과 Netlify로 동료와 학생들에게 선한 영향력을!</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <button onclick="window.goToSlide(1)" class="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-base font-bold transition-all">
            처음부터 다시 보기
          </button>
          <button onclick="window.fireConfetti()" class="px-9 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-base font-bold shadow-xl shadow-indigo-500/30 transition-all transform hover:scale-105">
            🎉 오늘 연수 완료 축하하기!
          </button>
        </div>
      </div>
    `,
    agentInsights: {
      pm: "마무리 장표의 슬로건과 3대 요약이 완벽한 시각적 균형을 이룹니다.",
      content: "선생님들에게 깊은 울림과 실천의 용기를 전달합니다.",
      design: "트로피와 축하 버튼의 가시성을 높였습니다.",
      qa: "축하 콘페티와 재시작 버튼 모두 정상 작동합니다.",
      consultant: "참가자 교사들의 기립 박수를 이끌어낼 최고의 엔딩입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 오늘 연수는 끝났지만 선생님들의 '에이전틱 교실 혁신'은 지금부터 시작입니다. 혼자 끙끙 앓지 마시고, 안티그래비티와 매일 10분씩 대화해보세요. 경청해 주셔서 감사합니다!"
    `
  }
];

if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SLIDES_DATA };
}
