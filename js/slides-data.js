/**
 * Antigravity Interactive Slides Data (24인치 대화면 & Skills / MCP 확장 최적화 버전)
 * - 18개 핵심 슬라이드 완비 (스마트 프레젠테이션 기능 장표 및 Skills & MCP 장표 포함)
 * - 24인치 대화면 너비(max-w-6xl) 및 break-keep 적용으로 줄바꿈 최적화
 * - AI 티 없는 직관적인 교육 현장 언어 및 실전 비유
 */

const SLIDES_DATA = [
  // -------------------------------------------------------------
  // SLIDE 1: INTRO
  // -------------------------------------------------------------
  {
    id: 1,
    title: "오프닝",
    badge: "🏫 2026 대저중앙초 전학공",
    content: `
      <div class="h-full flex flex-col justify-center items-center text-center px-4 w-full max-w-6xl mx-auto">
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-base md:text-lg font-bold mb-6">
          <i data-lucide="sparkles" class="w-5 h-5 text-indigo-400"></i>
          <span>2026학년도 대저중앙초 전문적학습공동체 AI·디지털 역량강화 연수</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight break-keep">
          AI·디지털 기술을 활용한 <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">수업자료 만들기</span>
        </h1>
        
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mb-10 font-semibold leading-relaxed break-keep">
          구글 <span class="text-sky-400 font-bold underline decoration-sky-500 underline-offset-8">안티그래비티</span>와 함께 코딩 한 줄 없이 우리 반 맞춤형 수업도구를 뚝딱 만들고 배포하기
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-10">
          <div class="glass-card p-6 rounded-2xl border border-slate-700">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-blue-500/20 text-blue-400"><i data-lucide="bot" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">1. 에이전틱 수업도구</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">말만 하는 챗봇을 넘어, 직접 코딩하고 실행해 주는 똑똑한 조교</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-slate-700">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-purple-500/20 text-purple-400"><i data-lucide="heart" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">2. 교실 도메인 지식</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">기술 지식보다 대저중앙초 선생님들의 수업 문제의식과 아이디어가 100배 중요</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-emerald-500/20 text-emerald-400">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400"><i data-lucide="globe" class="w-6 h-6"></i></div>
              <h3 class="text-xl font-bold text-white">3. 원클릭 웹 배포</h3>
            </div>
            <p class="text-base text-slate-300 font-medium break-keep">GitHub과 Netlify로 스마트폰 링크 하나 띄워 학생들과 공유</p>
          </div>
        </div>

        <button onclick="window.nextSlide()" class="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold shadow-xl shadow-indigo-500/30 transition-all transform hover:scale-105">
          <span>연수 시작하기</span>
          <i data-lucide="arrow-right" class="w-6 h-6"></i>
        </button>
      </div>
    `,
    agentInsights: {
      pm: "2026학년도 대저중앙초 전문적학습공동체 공식 연수명과 목표를 전면에 배치했습니다.",
      content: "AI·디지털 기술을 활용한 수업자료 제작이라는 핵심 실습 주제를 명확히 제시했습니다.",
      design: "글래스 카드와 대화면 타이포그래피로 웅장한 오프닝을 완성했습니다.",
      qa: "오프닝에서 문장 꺾임이나 글자 잘림이 전혀 발생하지 않습니다.",
      consultant: "대저중앙초 선생님들의 수업 혁신 동기를 확실하게 부여합니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "대저중앙초 선생님들, 안녕하세요! 오늘 연수는 코딩 문법을 배우는 시간이 아닙니다! 실력 좋은 AI 조교에게 제대로 일 시켜서 내일 당장 수업에 쓸 맞춤형 웹앱을 만드는 시간입니다. 편안한 마음으로 시작해보겠습니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 2: SMART SLIDE FEATURES (NEW)
  // -------------------------------------------------------------
  {
    id: 2,
    title: "슬라이드 스마트 활용법",
    badge: "🛠️ 슬라이드 기능",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-indigo-400 font-bold text-base md:text-lg uppercase tracking-wider">스마트 발표 & 수업 기능</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "수업과 발표를 200% 살리는 3가지 스마트 기능"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">선생님의 수업 편의와 자유로운 수정을 위한 맞춤형 도구를 활용해 보세요</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <!-- Feature 1: Edit Mode -->
          <div class="glass-card p-6 rounded-3xl border border-indigo-500/40 bg-indigo-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3.5 py-1 rounded-full bg-indigo-500/30 text-indigo-300 font-bold text-sm">기능 1</span>
                <div class="p-2 rounded-xl bg-indigo-500 text-white"><i data-lucide="edit-3" class="w-5 h-5"></i></div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-2">✎ 고치기 모드</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                우측 하단 <strong>[✎ 고치기]</strong>를 누르면 점선이 표시되며 화면 속 모든 글자를 즉시 수정할 수 있습니다. 상단 도구바로 서식 변경 및 지우기가 가능하며 브라우저에 자동 저장됩니다.
              </p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 text-xs font-mono text-indigo-300">
              ✨ 점선 클릭 ➔ 글자 즉시 수정 ➔ 자동 저장
            </div>
          </div>

          <!-- Feature 2: Fullscreen -->
          <div class="glass-card p-6 rounded-3xl border border-sky-500/40 bg-sky-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3.5 py-1 rounded-full bg-sky-500/30 text-sky-300 font-bold text-sm">기능 2</span>
                <div class="p-2 rounded-xl bg-sky-500 text-white"><i data-lucide="maximize" class="w-5 h-5"></i></div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-2">⛶ 전체화면 극대화</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                우측 하단 <strong>[⛶ 전체]</strong> 버튼이나 단축키 <strong>F (한글 자판 ㄹ)</strong>를 누르면 바깥 여백 0으로 24인치 모니터와 빔프로젝터에 글자가 시원하게 꽉 찹니다.
              </p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-sky-500/30 text-xs font-mono text-sky-300">
              ⌨️ 단축키: <kbd class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">F</kbd> 또는 <kbd class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">ㄹ</kbd>
            </div>
          </div>

          <!-- Feature 3: Teacher Drawer -->
          <div class="glass-card p-6 rounded-3xl border border-amber-500/40 bg-amber-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3.5 py-1 rounded-full bg-amber-500/30 text-amber-300 font-bold text-sm">기능 3</span>
                <div class="p-2 rounded-xl bg-amber-500 text-white"><i data-lucide="graduation-cap" class="w-5 h-5"></i></div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-2">🧑‍🏫 교사용 비밀 서랍</h3>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                우측 하단 <strong>[교사용]</strong> 버튼이나 단축키 <strong>T (한글 자판 ㅅ)</strong>를 누르면 하단에서 슬라이딩 서랍이 열리며 예상 답변, 시간 배분, 핵심 팁을 확인할 수 있습니다.
              </p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-xs font-mono text-amber-300">
              ⌨️ 단축키: <kbd class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">T</kbd> / <kbd class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">ㅅ</kbd> (닫기: ESC)
            </div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center text-sm md:text-base text-slate-200 font-semibold break-keep">
          💡 <strong>수업 꿀팁:</strong> 연수 진행 중 언제든 화면 오른쪽 아래의 3개 버튼을 눌러 자유롭게 테스트해 보세요!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "새로 탑재된 [고치기], [전체화면], [교사용 서랍] 3대 기능을 사용자 친화적인 카드로 직관화했습니다.",
      content: "단축키와 실제 활용 시나리오를 명확하게 설명합니다.",
      design: "인디고, 스카이, 앰버 3색 카드로 시각적 명확성을 부여했습니다.",
      qa: "오른쪽 하단 플로팅 버튼과 연동되어 즉시 시연 가능합니다.",
      consultant: "수업 현장에서 교사가 직접 자료를 손쉽게 수정하고 교사용 팁을 볼 수 있어 효용성이 매우 높습니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 슬라이드 발표 중에 글자를 직접 바꾸고 싶으실 때가 있죠? 오른쪽 아래 [✎ 고치기]를 누르면 이 화면의 어떤 글자든 마음대로 바꿀 수 있습니다. [T]를 누르면 강사용 꿀팁 서랍도 열립니다!"
    `
  },

  // -------------------------------------------------------------
  // SLIDE 3: MINDSET SHIFT
  // -------------------------------------------------------------
  {
    id: 3,
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
      pm: "벽돌공 vs 건축가 대비로 선생님의 정체성을 재정의했습니다.",
      content: "코딩 문법에 얽매이지 않고 기획에 집중해야 한다는 논리가 명확합니다.",
      design: "빨강과 초록 카드 대비로 한눈에 차이가 느껴집니다.",
      qa: "텍스트 겹침이나 불필요한 줄바꿈이 전혀 없습니다.",
      consultant: "연수 초반에 이 장표를 보면 선생님들의 표정이 눈에 띄게 편안해집니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "집 지을 때 벽돌 굽는 법부터 배우지 않죠? 설계도만 가지고 전문가에게 '방 3개 만들어주세요' 하듯이, 이제 개발도 선생님의 아이디어를 AI에게 말로 전달하면 됩니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 4: DOMAIN KNOWLEDGE
  // -------------------------------------------------------------
  {
    id: 4,
    title: "도메인 지식의 힘",
    badge: "🧠 핵심 가치",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">도메인 지식이란?</span>
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
      pm: "제목이 완벽하게 1줄로 출력되어 시각적 안정감이 극대화되었습니다.",
      content: "도메인 지식의 핵심 메시지가 시원하게 전달됩니다.",
      design: "글자 크기와 컨테이너 너비(max-w-6xl)를 완벽히 조율했습니다.",
      qa: "24인치 화면에서 제목이 1줄로 완벽히 출력됨을 검증했습니다.",
      consultant: "개발자보다 교사의 아이디어가 더 소중하다는 점을 명확히 각인시킵니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "개발자는 코드는 잘 짤지 몰라도, 교실에서 아이들이 언제 떠들고 언제 집중하는지는 모릅니다. 무엇을 만들어야 할지 결정하는 힘은 오직 선생님에게만 있습니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 5: WHAT IS ENGINEERING?
  // -------------------------------------------------------------
  {
    id: 5,
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
      consultant: "선생님들이 일상에서 느끼는 불편함이 곧 훌륭한 앱 개발 주제임을 깨닫게 됩니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, '엔지니어링'은 어려운 수학이 아닙니다. '이 불편한 걸 어떻게 하면 다음엔 안 불편하게 시스템으로 만들까?' 생각하는 것이 바로 엔지니어링입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 6: CHATBOT VS AGENT
  // -------------------------------------------------------------
  {
    id: 6,
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
      pm: "챗봇과 안티그래비티의 차이가 시뮬레이터를 통해 직관적으로 비교됩니다.",
      content: "코드를 던져주는 챗봇 vs 실제로 파일을 만들고 실행해 주는 에이전트를 대비했습니다.",
      design: "터미널 텍스트 박스의 글자 크기와 줄간격을 24인치에 맞췄습니다.",
      qa: "두 버튼 클릭 시 실제 동작 시뮬레이션이 매끄럽게 재생됩니다.",
      consultant: "선생님들이 챗봇 쓸 때 느꼈던 답답함을 한 방에 날려주는 명쾌한 슬라이드입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "챗봇에게 코딩 시키면 500줄짜리 영어를 던져주고 '알아서 쓰세요' 하죠? 하지만 안티그래비티는 자기가 알아서 폴더 만들고 브라우저까지 띄워줍니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 7: MULTI-AGENT COLLABORATION
  // -------------------------------------------------------------
  {
    id: 7,
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
      pm: "사용자가 제시한 5인 팀 모델을 5개 카드로 깔끔하게 정리했습니다.",
      content: "학교의 부서 협업(교무부, 연구부, 학년부)과 동일한 원리임을 강조했습니다.",
      design: "아이콘 크기와 폰트 크기를 키워 멀리서도 5개 팀의 역할이 잘 보입니다.",
      qa: "각 팀의 역할 분담 논리가 군더더기 없이 깔끔합니다.",
      consultant: "상단의 '에이전트 인사이트' 버튼을 누르면 이 회의록을 직접 볼 수 있다고 안내하세요."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 학교 축제 준비할 때도 한 명이 다 안 하죠? 무대, 기획, 홍보 나누듯이 AI도 역할을 나눠주면 혼자 할 때보다 10배 더 똑똑해집니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 8: ANTIGRAVITY TOUR
  // -------------------------------------------------------------
  {
    id: 8,
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
      pm: "에디터 환경을 3개 직관 구역으로 나누어 심리적 안정감을 제공합니다.",
      content: "대화창, 계획창, 미리보기라는 3단 기능으로 명쾌하게 안내합니다.",
      design: "글자 크기와 여백을 넓혀 시선 이동을 편안하게 유도했습니다.",
      qa: "초보 교사가 집중해야 할 영역(1번 대화창)을 정확히 짚어줍니다.",
      consultant: "'채팅창 하나만 쓰시면 됩니다'라는 말이 선생님들에게 최고의 안도감을 줍니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "화면에 글씨가 많다고 겁먹지 마세요! 선생님이 만질 곳은 카카오톡처럼 생긴 '채팅창' 하나뿐입니다. 나머지는 AI 혼자 일하는 곳입니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 9: SKILLS & MCP
  // -------------------------------------------------------------
  {
    id: 9,
    title: "Skills와 MCP",
    badge: "🧩 비밀 무기",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-amber-400 font-bold text-base md:text-lg uppercase tracking-wider">안티그래비티의 슈퍼 파워</span>
          <h2 class="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mt-1 leading-tight break-keep">
            "Skills와 MCP : AI에게 날개를 달아주는 2가지 핵심 무기"
          </h2>
          <p class="text-lg md:text-2xl text-slate-300 mt-2 font-medium break-keep">대화만 하던 AI를 우리 학교 시스템과 연결하고 전문가로 만드는 기술</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Skills Box -->
          <div class="glass-card p-6 rounded-3xl border border-sky-500/40 bg-sky-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2.5 rounded-2xl bg-sky-500/20 text-sky-400"><i data-lucide="book-marked" class="w-6 h-6"></i></div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Skills (전문 작업 매뉴얼)</h3>
                  <span class="text-xs text-sky-300 font-bold">"업무 비법 바인더를 AI 두뇌에 장착!"</span>
                </div>
              </div>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                매번 길게 설명할 필요 없이, AI에게 <strong>규칙·절차·서식(SKILL.md)</strong>을 미리 넣어두면 필요할 때 자동으로 전문가처럼 일합니다.
              </p>
              <div class="bg-slate-950 p-3.5 rounded-xl border border-sky-500/30 text-xs md:text-sm text-slate-300 space-y-1.5 font-mono">
                <p class="text-sky-300 font-bold">🏫 교실 활용 예시:</p>
                <p>• 학생 생기부 행동특성 서술어 자동 검토 스킬</p>
                <p>• 교육청 공문 양식 맞춤 알림장 생성 스킬</p>
                <p>• 초등 수학/사회 인터랙티브 퀴즈 출제 스킬</p>
              </div>
            </div>
            <div class="mt-4 text-xs md:text-sm font-bold text-sky-300 text-center">
              👉 AI의 전문 지식 & 노하우 (Know-How)
            </div>
          </div>

          <!-- MCP Box -->
          <div class="glass-card p-6 rounded-3xl border border-purple-500/40 bg-purple-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2.5 rounded-2xl bg-purple-500/20 text-purple-400"><i data-lucide="plug" class="w-6 h-6"></i></div>
                <div>
                  <h3 class="text-2xl font-bold text-white">MCP (만능 도구 USB 연결잭)</h3>
                  <span class="text-xs text-purple-300 font-bold">"AI에게 진짜 손발과 도구를 연결!"</span>
                </div>
              </div>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-4 break-keep">
                화면 안에 갇힌 AI를 <strong>구글 드라이브, 학교 DB, 깃허브, 카카오톡</strong>과 안전하게 연결해 실제 데이터를 직접 조작하게 합니다.
              </p>
              <div class="bg-slate-950 p-3.5 rounded-xl border border-purple-500/30 text-xs md:text-sm text-slate-300 space-y-1.5 font-mono">
                <p class="text-purple-300 font-bold">🔌 교실 활용 예시:</p>
                <p>• Google Sheets MCP: 시트 명단을 AI가 직접 읽기</p>
                <p>• Firebase MCP: 학생 퀴즈 점수 실시간 랭킹 저장</p>
                <p>• GitHub MCP: 버튼 하나로 웹앱 자동 배포</p>
              </div>
            </div>
            <div class="mt-4 text-xs md:text-sm font-bold text-purple-300 text-center">
              👉 AI의 외부 연결 도구 & 손발 (Tool & DB)
            </div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 text-center text-sm md:text-base text-indigo-200 font-semibold break-keep">
          ✨ <strong>Skills(노하우) + MCP(도구)</strong>가 결합되면, 안티그래비티가 학교의 모든 복잡한 작업을 스스로 끝내는 '진짜 전속 비서'가 됩니다!
        </div>
      </div>
    `,
    agentInsights: {
      pm: "사용자가 요청한 Skills와 MCP의 핵심 개념과 교실 활용 사례를 한눈에 들어오는 2단 카드로 구현했습니다.",
      content: "Skills는 '업무 바인더(Know-How)', MCP는 '만능 USB 연결잭(Tool)'으로 직관적인 비유를 적용했습니다.",
      design: "스카이블루(스킬)와 퍼플(MCP)의 테마 컬러를 적용하고 교실 활용 예시 박스를 돋보이게 배치했습니다.",
      qa: "용어 설명과 교실 적용 사례가 완벽히 균형을 이루며, 한 줄 타이틀로 꺾임 없이 출력됩니다.",
      consultant: "선생님들이 'AI가 구글 시트 명단도 직접 읽을 수 있구나!' 하고 가장 놀라워하는 파트입니다."
    },
    presenterNote: `
      🎤 [강사용 추천 멘트]:
      - "선생님들, 'Skills'는 신규 교사에게 주는 '학급경영 꿀팁 바인더'이고, 'MCP'는 AI 두뇌에 구글 드라이브와 데이터베이스를 꽂아주는 'USB 연결잭'입니다. 이 두 개가 있으면 AI가 단순 대화를 넘어 진짜 학교 업무를 대신 처리합니다."
    `
  },

  // -------------------------------------------------------------
  // SLIDE 10: REALITY CHECK
  // -------------------------------------------------------------
  {
    id: 10,
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
  // SLIDE 11: ERROR FIX SIMULATOR
  // -------------------------------------------------------------
  {
    id: 11,
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
  // SLIDE 12: GOLDEN PROMPT BUILDER
  // -------------------------------------------------------------
  {
    id: 12,
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
  // SLIDE 13: HANDS-ON APP BUILDING
  // -------------------------------------------------------------
  {
    id: 13,
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
  // SLIDE 14: WHAT IS GITHUB?
  // -------------------------------------------------------------
  {
    id: 14,
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
  // SLIDE 15: PUSH TO GITHUB WITH ANTIGRAVITY
  // -------------------------------------------------------------
  {
    id: 15,
    title: "안티그래비티로 GitHub 올리기",
    badge: "🚀 자동 업로드",
    content: `
      <div class="h-full flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
        <div class="text-center mb-6">
          <span class="text-sky-400 font-bold text-base md:text-lg uppercase tracking-wider">GitHub 자동 업로드</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1 break-keep">
            "검은 화면 명령어 몰라도 됩니다. AI에게 시키세요!"
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mt-2 font-medium break-keep">git init, git commit 외우지 마세요. 안티그래비티 대화 한마디면 끝납니다.</p>
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
  // SLIDE 16: WHAT IS NETLIFY?
  // -------------------------------------------------------------
  {
    id: 16,
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
  // SLIDE 17: DEPLOYMENT & QR CODE GENERATOR
  // -------------------------------------------------------------
  {
    id: 17,
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
  // SLIDE 18: CONCLUSION & WRAP-UP
  // -------------------------------------------------------------
  {
    id: 18,
    title: "마무리 & Q&A",
    badge: "🎓 수료 & 응원",
    content: `
      <div class="h-full flex flex-col justify-center items-center text-center w-full max-w-5xl mx-auto px-4">
        <div class="w-18 h-18 p-4 rounded-3xl bg-gradient-to-tr from-amber-400 to-indigo-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/30">
          <i data-lucide="award" class="w-10 h-10"></i>
        </div>

        <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight break-keep">
          "기술은 AI에게, 교육적 가치는 대저중앙초 선생님에게!"
        </h2>
        
        <p class="text-lg md:text-2xl text-slate-300 max-w-4xl mb-8 leading-relaxed font-semibold break-keep">
          2026 대저중앙초 전학공 연수를 함께하신 선생님들의 에이전틱 수업 혁신을 힘차게 응원합니다!
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

// -------------------------------------------------------------
// TEACHER NOTES DATA ARRAY (교사용 지도 가이드 및 팁 모음)
// -------------------------------------------------------------
const TEACHER_NOTES = [
  {
    slideId: 1,
    time: "3분",
    expectedAnswers: "AI로 코딩 없이 진짜 웹앱을 만들 수 있는지에 대한 놀라움과 실습에 대한 기대감 표현.",
    confusingPoints: "'코딩을 아예 모르는 초보인데 따라갈 수 있나요?' ➔ '네, 선생님의 교실 고민과 아이디어가 가장 핵심이며 코딩은 AI가 전담합니다.'",
    keyTerms: "안티그래비티, AI 에이전트, 교실 도메인 지식, 웹 배포"
  },
  {
    slideId: 2,
    time: "3분",
    expectedAnswers: "슬라이드의 글자를 즉시 고칠 수 있고 교사용 메모가 나오는 기능에 큰 호응.",
    confusingPoints: "'고친 내용이 다른 사람에게도 보이나요?' ➔ '선생님의 컴퓨터 브라우저(localStorage)에만 저장되므로 안심하고 마음껏 수정하세요.'",
    keyTerms: "고치기 모드, 전체화면(F/ㄹ), 교사용 서랍(T/ㅅ), 로컬 저장"
  },
  {
    slideId: 3,
    time: "5분",
    expectedAnswers: "과거 코딩 문법(C언어, 파이썬 등)을 배우다 좌절했던 경험에 깊이 공감함.",
    confusingPoints: "'개발자가 아니어도 총괄 지휘가 가능한가요?' ➔ '집 지을 때 설계만 하고 시공팀을 부리듯, 한국어로 지시하는 총괄 디렉터 역할을 하시면 됩니다.'",
    keyTerms: "벽돌공 vs 총괄 건축가, 패러다임 전환, 자연어 코딩"
  },
  {
    slideId: 4,
    time: "5분",
    expectedAnswers: "퀴즈에서 '10년 차 초등 교사'를 정답으로 선택하며 교육적 맥락의 중요성을 체감함.",
    confusingPoints: "'도메인 지식이 왜 코딩 지식보다 중요한가요?' ➔ '무엇을 만들지 모르면 아무리 코딩을 잘해도 쓸모없는 앱이 나오기 때문입니다.'",
    keyTerms: "도메인 지식, 학생 눈높이, 수업 규칙, 현장 기획력"
  },
  {
    slideId: 5,
    time: "5분",
    expectedAnswers: "엔지니어링이 거창한 기술이 아니라 '불편함을 시스템으로 해결하는 것'이라는 정의에 무릎을 침.",
    confusingPoints: "'시스템을 만드는 게 어렵지 않나요?' ➔ '선생님은 문제 발견과 해결 규칙만 세우시면, 구현은 안티그래비티가 처리합니다.'",
    keyTerms: "엔지니어링, 문제 발견, 해결 규칙(로직), 자동화 시스템"
  },
  {
    slideId: 6,
    time: "6분",
    expectedAnswers: "일반 챗봇이 500줄 코드를 던져줄 때의 막막함과 안티그래비티의 자동 실행에 큰 차이를 느낌.",
    confusingPoints: "'챗봇(ChatGPT, Gemini)과 에이전트는 어떻게 다른가요?' ➔ '챗봇은 말만 하는 상담사, 에이전트는 파일 생성과 실행까지 하는 실무 조교입니다.'",
    keyTerms: "챗봇 vs 에이전트, 자율 실행, 도구 활용, 작업 자동화"
  },
  {
    slideId: 7,
    time: "5분",
    expectedAnswers: "학교의 교무부, 연구부 협업처럼 AI도 팀으로 역할을 나누어 일한다는 점을 흥미로워함.",
    confusingPoints: "'혼자 쓰는 AI보다 멀티 에이전트가 왜 좋은가요?' ➔ '작성자, 디자이너, 검수자(QA)가 서로 비판하고 보완하여 완성도가 10배 높아집니다.'",
    keyTerms: "멀티 에이전트, 역할 분담, 자체 피드백 루프, 검수(QA)"
  },
  {
    slideId: 8,
    time: "5분",
    expectedAnswers: "복잡해 보이는 IDE 환경에서 '대화창 하나만 쓰면 된다'는 설명에 안도함.",
    confusingPoints: "'화면에 영어가 너무 많아서 무서워요.' ➔ '왼쪽 대화창에 카톡하듯 한국어로 쓰시면 오른쪽 화면은 AI 혼자 일하는 곳입니다.'",
    keyTerms: "대화창(Chat), 계획창(Plan), 실시간 미리보기(Preview)"
  },
  {
    slideId: 9,
    time: "7분",
    expectedAnswers: "Skills(업무 바인더)와 MCP(USB 연결 도구)의 비유로 난해한 AI 개념을 쉽게 이해함.",
    confusingPoints: "'MCP를 쓰면 구글 드라이브나 시트 명단도 AI가 읽나요?' ➔ '네, MCP 도구를 꽂아주면 학교 DB나 시트 데이터를 AI가 직접 조회하고 수정합니다.'",
    keyTerms: "Skills(지식/매뉴얼), MCP(도구/연결잭), 외부 연동, 전속 비서"
  },
  {
    slideId: 10,
    time: "5분",
    expectedAnswers: "에러 메시지가 실패가 아니라 자연스러운 대화의 시작이라는 설명에 두려움 극복.",
    confusingPoints: "'에러가 났을 때 제가 코드를 고쳐야 하나요?' ➔ '절대 아닙니다. 빨간 에러 메시지를 복사해서 AI에게 '고쳐줘'라고 던지면 됩니다.'",
    keyTerms: "에러 마인드셋, 티키타카 대화, 지속적 개선, 피드백"
  },
  {
    slideId: 11,
    time: "6분",
    expectedAnswers: "시뮬레이터에서 에러 복사 ➔ AI 질문 ➔ 원클릭 해결 과정을 직접 보며 자신감 획득.",
    confusingPoints: "'F12 개발자 도구의 빨간 글씨는 어떻게 복사하나요?' ➔ '오른쪽 클릭 복사 또는 안티그래비티 터미널 화면을 그대로 복사하면 됩니다.'",
    keyTerms: "에러 로그 복사, AI 원클릭 디버깅, 실전 대처력"
  },
  {
    slideId: 12,
    time: "7분",
    expectedAnswers: "역할, 목적, 기능, 디자인의 4요소 프롬프트 조립기로 직접 수업도구 프롬프트를 완성함.",
    confusingPoints: "'프롬프트를 왜 이렇게 자세히 써야 하나요?' ➔ 'AI에게 명확한 가이드라인을 주어야 엉뚱한 결과 없이 한 번에 고품질 앱이 나옵니다.'",
    keyTerms: "골든 프롬프트, 역할(Role), 목적(Purpose), 기능(Feature), 디자인(Design)"
  },
  {
    slideId: 13,
    time: "8분",
    expectedAnswers: "기본 앱에 교실 규칙을 더하고 아이들 감성을 입히는 3단계 고도화 실습에 적극 참여.",
    confusingPoints: "'처음 만든 앱이 맘에 안 들면 처음부터 다시 만들어야 하나요?' ➔ '아닙니다! '버튼 색 바꿔줘', '효과음 넣어줘'라고 이어서 요청하시면 됩니다.'",
    keyTerms: "티키타카 질문법, 점진적 개선, 교실 규칙 커스텀, 인터랙션"
  },
  {
    slideId: 14,
    time: "5분",
    expectedAnswers: "깃허브가 단순 개발자 도구가 아닌 교사용 '클라우드 금고 & 타임머신'임을 이해함.",
    confusingPoints: "'깃허브를 꼭 써야 하나요?' ➔ '코드를 안전하게 영구 보관하고, 뒤에서 배울 Netlify 웹 배포의 필수 기반이 됩니다.'",
    keyTerms: "GitHub(깃허브), 클라우드 백업, 버전 관리(타임머신), 포트폴리오"
  },
  {
    slideId: 15,
    time: "6분",
    expectedAnswers: "검은색 터미널 명령어(git add, commit 등) 없이 자연어로 깃허브에 올리는 편의성에 감탄.",
    confusingPoints: "'깃허브 인증이나 로그인은 어떻게 하나요?' ➔ '안티그래비티가 백그라운드에서 GitHub CLI 또는 토큰으로 자동 처리합니다.'",
    keyTerms: "자연어 Git 연동, 자동 커밋/푸시, 터미널 자동화"
  },
  {
    slideId: 16,
    time: "5분",
    expectedAnswers: "평생 무료로 나만의 웹사이트 주소(.netlify.app)가 생긴다는 사실에 큰 성취감 느낌.",
    confusingPoints: "'서버 비용이나 월 사용료가 나오지 않나요?' ➔ '초등 학급 수준의 트래픽은 Netlify 무료 플랜으로 평생 비용 없이 사용 가능합니다.'",
    keyTerms: "Netlify(넷리파이), 웹 호스팅, 1초 배포, 자동 실시간 갱신"
  },
  {
    slideId: 17,
    time: "7분",
    expectedAnswers: "스마트폰 카메라로 생성된 QR코드를 비춰 자신의 앱이 폰에서 열릴 때 환호함.",
    confusingPoints: "'학생들에게 앱을 공유할 때 어떻게 하나요?' ➔ '이 QR코드를 빔프로젝터에 띄우거나 URL 링크를 알림장/클래스팅에 올려주시면 됩니다.'",
    keyTerms: "QR 코드 생성기, 모바일 접속, 교실 공유, 실시간 축하"
  },
  {
    slideId: 18,
    time: "5분",
    expectedAnswers: "오늘 연수를 통해 '나도 수업용 디지털 도구를 만들 수 있다'는 자신감을 얻고 박수침.",
    confusingPoints: "'학교로 돌아가서 막힐 때는 어떻게 하나요?' ➔ '안티그래비티와 매일 10분씩 대화하며 작은 타이머부터 차근차근 만들어보세요.'",
    keyTerms: "에이전틱 교실 혁신, 교사 전문성, 디지털 포용, 질의응답(Q&A)"
  }
];

if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
  window.TEACHER_NOTES = TEACHER_NOTES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SLIDES_DATA, TEACHER_NOTES };
}
