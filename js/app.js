class PresentationApp {
  constructor() {
    this.slides = window.SLIDES_DATA || [];
    this.currentIndex = 0;
    this.isAgentDrawerOpen = false;
    this.isPresenterModalOpen = false;
    this.isOverviewModalOpen = false;

    this.initElements();
    this.initEvents();
    this.renderSlide();
    this.renderOverviewGrid();
  }

  initElements() {
    this.slideViewport = document.getElementById('slide-viewport');
    this.slideBadge = document.getElementById('slide-badge');
    this.slideCounter = document.getElementById('slide-counter');
    this.progressBar = document.getElementById('progress-bar');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');

    // Modals and Drawers
    this.agentDrawer = document.getElementById('agent-drawer');
    this.presenterModal = document.getElementById('presenter-modal');
    this.overviewModal = document.getElementById('overview-modal');
    this.overviewGrid = document.getElementById('overview-grid');
  }

  initEvents() {
    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // Don't intercept typing in inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.slides.length);
          break;
        case 'f':
        case 'F':
          this.toggleFullScreen();
          break;
        case 'a':
        case 'A':
          this.toggleAgentDrawer();
          break;
        case 'p':
        case 'P':
          this.togglePresenterModal();
          break;
        case 'm':
        case 'M':
        case 'Escape':
          if (this.isOverviewModalOpen || this.isPresenterModalOpen || this.isAgentDrawerOpen) {
            this.closeAllModals();
          } else if (e.key === 'm' || e.key === 'M') {
            this.toggleOverviewModal();
          }
          break;
      }
    });

    // Touch swipe support for mobile/tablets
    let touchStartX = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, false);

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) this.nextSlide();
        else this.prevSlide();
      }
    }, false);
  }

  renderSlide() {
    const currentSlide = this.slides[this.currentIndex];
    if (!currentSlide) return;

    // Update Counter & Progress
    const total = this.slides.length;
    const current = this.currentIndex + 1;
    this.slideCounter.textContent = `${current} / ${total}`;
    this.progressBar.style.width = `${(current / total) * 100}%`;

    // Update Badge & Title
    this.slideBadge.innerHTML = currentSlide.badge;

    // Render Slide Main Content
    this.slideViewport.innerHTML = `
      <div class="slide-content w-full h-full flex flex-col justify-center">
        ${currentSlide.content}
      </div>
    `;

    // Update Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Post-render handlers for specific slides
    this.handleSlideSpecificInit(currentSlide.id);

    // Update Agent Insights & Presenter content
    this.updateAgentDrawerContent(currentSlide);
    this.updatePresenterContent(currentSlide);
    this.updateOverviewActiveState();
  }

  handleSlideSpecificInit(slideId) {
    if (slideId === 10) {
      // Slide 10: Prompt builder
      setTimeout(() => {
        window.buildPrompt();
      }, 50);
    } else if (slideId === 15) {
      // Slide 15: QR Code
      setTimeout(() => {
        window.generateQRCode(false);
      }, 50);
    }
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.renderSlide();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderSlide();
    }
  }

  goToSlide(slideNumber) {
    const index = slideNumber - 1;
    if (index >= 0 && index < this.slides.length) {
      this.currentIndex = index;
      this.renderSlide();
      this.closeAllModals();
    }
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // -------------------------------------------------------------
  // Modals & Drawers
  // -------------------------------------------------------------
  toggleAgentDrawer() {
    this.isAgentDrawerOpen = !this.isAgentDrawerOpen;
    if (this.isAgentDrawerOpen) {
      this.agentDrawer.classList.remove('translate-x-full');
      if (window.lucide) window.lucide.createIcons();
    } else {
      this.agentDrawer.classList.add('translate-x-full');
    }
  }

  togglePresenterModal() {
    this.isPresenterModalOpen = !this.isPresenterModalOpen;
    if (this.isPresenterModalOpen) {
      this.presenterModal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    } else {
      this.presenterModal.classList.add('hidden');
    }
  }

  toggleOverviewModal() {
    this.isOverviewModalOpen = !this.isOverviewModalOpen;
    if (this.isOverviewModalOpen) {
      this.overviewModal.classList.remove('hidden');
      this.updateOverviewActiveState();
      if (window.lucide) window.lucide.createIcons();
    } else {
      this.overviewModal.classList.add('hidden');
    }
  }

  closeAllModals() {
    this.isAgentDrawerOpen = false;
    this.agentDrawer.classList.add('translate-x-full');

    this.isPresenterModalOpen = false;
    this.presenterModal.classList.add('hidden');

    this.isOverviewModalOpen = false;
    this.overviewModal.classList.add('hidden');
  }

  updateAgentDrawerContent(slide) {
    const insights = slide.agentInsights || {};
    const container = document.getElementById('agent-drawer-content');
    if (!container) return;

    container.innerHTML = `
      <div class="mb-4 pb-3 border-b border-slate-700">
        <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Current Slide #${slide.id}</span>
        <h4 class="font-bold text-slate-100 text-sm">${slide.title} 제작 회의록</h4>
      </div>

      <div class="space-y-4 text-xs">
        <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30">
          <div class="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
            <span>👑 총괄 PM (오케스트레이터)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">${insights.pm || '전체 방향성을 검토했습니다.'}</p>
        </div>

        <div class="p-3 rounded-xl bg-blue-950/20 border border-blue-500/30">
          <div class="flex items-center gap-1.5 font-bold text-blue-300 mb-1">
            <span>✍️ 내용 개발팀 (Writer)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">${insights.content || '교육학적 설명과 메시지를 다듬었습니다.'}</p>
        </div>

        <div class="p-3 rounded-xl bg-pink-950/20 border border-pink-500/30">
          <div class="flex items-center gap-1.5 font-bold text-pink-300 mb-1">
            <span>🎨 디자인팀 (Designer)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">${insights.design || '시각적 구조와 글래스 UI를 적용했습니다.'}</p>
        </div>

        <div class="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <div class="flex items-center gap-1.5 font-bold text-emerald-300 mb-1">
            <span>🔍 검수팀 (Critic / QA)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">${insights.qa || '논리 정합성과 가독성을 검증했습니다.'}</p>
        </div>

        <div class="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
          <div class="flex items-center gap-1.5 font-bold text-indigo-300 mb-1">
            <span>💡 컨설턴트팀 (현장 교사 관점)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">${insights.consultant || '실제 교실 적용 가능성을 보완했습니다.'}</p>
        </div>
      </div>
    `;
  }

  updatePresenterContent(slide) {
    const container = document.getElementById('presenter-note-content');
    if (!container) return;

    container.innerHTML = `
      <div class="mb-4 pb-3 border-b border-slate-700">
        <span class="text-xs font-bold text-amber-400">Slide ${slide.id} : ${slide.title}</span>
        <h3 class="text-lg font-bold text-slate-100 mt-1">강사용 티칭 가이드 & 추천 스크립트</h3>
      </div>
      <div class="text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-900/90 p-4 rounded-xl border border-slate-700">
        ${slide.presenterNote || '자유롭게 청중과 소통하며 진행하세요.'}
      </div>
    `;
  }

  renderOverviewGrid() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = this.slides.map((s, idx) => `
      <button onclick="window.goToSlide(${idx + 1})" class="overview-item glass-card p-3 rounded-xl border border-slate-700 text-left hover:border-indigo-500 transition-all flex flex-col justify-between h-28 ${idx === this.currentIndex ? 'ring-2 ring-indigo-500 bg-indigo-950/40' : ''}">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">#${s.id}</span>
          <span class="text-[10px] text-indigo-300 truncate max-w-[100px]">${s.badge}</span>
        </div>
        <h5 class="text-xs font-bold text-slate-200 line-clamp-2 mt-1">${s.title}</h5>
        <span class="text-[10px] text-slate-500">클릭하여 이동</span>
      </button>
    `).join('');
  }

  updateOverviewActiveState() {
    const items = document.querySelectorAll('.overview-item');
    items.forEach((item, idx) => {
      if (idx === this.currentIndex) {
        item.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-950/40');
      } else {
        item.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-950/40');
      }
    });
  }
}

// Global Application Instance
window.app = new PresentationApp();

// Global Window Helpers
window.nextSlide = () => window.app.nextSlide();
window.prevSlide = () => window.app.prevSlide();
window.goToSlide = (num) => window.app.goToSlide(num);
window.toggleAgentDrawer = () => window.app.toggleAgentDrawer();
window.togglePresenterModal = () => window.app.togglePresenterModal();
window.toggleOverviewModal = () => window.app.toggleOverviewModal();
window.toggleFullScreen = () => window.app.toggleFullScreen();
window.closeAllModals = () => window.app.closeAllModals();

// -------------------------------------------------------------
// Interactive Widgets Handlers
// -------------------------------------------------------------

// Slide 3: Quiz Checker
window.checkQuiz = (btn, isCorrect) => {
  const feedback = document.getElementById('quiz-feedback');
  if (!feedback) return;

  feedback.classList.remove('hidden');
  if (isCorrect) {
    feedback.innerHTML = `🎉 <strong>정답입니다!</strong> 코딩 기술은 AI가 대신해 주지만, '우리 반 아이들에게 무엇이 필요한가?'라는 도메인 지식은 오직 선생님에게만 있습니다!`;
    feedback.className = 'mt-3 text-xs md:text-sm font-bold text-emerald-300';
    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }
  } else {
    feedback.innerHTML = `🤔 실리콘밸리 개발자는 코드는 잘 짜지만, 교실에서 1학년 아이들이 언제 싸우고 언제 집중하는지는 전혀 모릅니다! 정답은 현장 교사입니다.`;
    feedback.className = 'mt-3 text-xs md:text-sm font-bold text-amber-300';
  }
};

// Slide 5: Chatbot Sim
window.runChatbotSim = () => {
  const out = document.getElementById('chatbot-output');
  if (!out) return;
  out.innerHTML = `
    <span class="text-sky-400">🤖 Gemini 챗봇:</span><br>
    "네! 자리배치기 코드입니다. 아래 HTML 코드를 복사해서 메모장에 넣고 index.html로 저장하세요."<br><br>
    <span class="text-slate-400 text-[10px]">
    &lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;... (500줄의 복잡한 코드 출력) ...&lt;/html&gt;
    </span><br><br>
    <span class="text-rose-400 font-bold">👉 문제: 선생님이 복사해서 어디에 저장하고 어떻게 실행해야 할지 모름!</span>
  `;
};

// Slide 5: Agent Sim
window.runAgentSim = () => {
  const out = document.getElementById('agent-output');
  if (!out) return;
  out.innerHTML = `
    <span class="text-indigo-400 font-bold">🤖 안티그래비티 에이전트:</span><br>
    <span class="text-emerald-400">1. [계획 수립]</span> 자리배치기 웹앱 프로젝트 구조 설계 중...<br>
    <span class="text-emerald-400">2. [파일 생성]</span> index.html, style.css, app.js 자동 생성 완료!<br>
    <span class="text-emerald-400">3. [라이브러리]</span> Tailwind CSS & Lucide Icons 연동 완료<br>
    <span class="text-emerald-400">4. [서버 실행]</span> 브라우저 미리보기 창 자동 오픈 (localhost:3000)<br>
    <span class="text-amber-300 font-bold">✨ [완성] 우측 미리보기 화면에서 지금 바로 학생 이름을 넣고 자리를 섞어보세요!</span>
  `;
  if (window.confetti) {
    window.confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
  }
};

// Slide 9: Error Fix Sim
window.simCopyError = () => {
  const badge = document.getElementById('sim-status-badge');
  const btnCopy = document.getElementById('btn-copy-error');
  if (badge) {
    badge.textContent = '에러 메시지 복사됨 ✓';
    badge.className = 'px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold';
  }
  if (btnCopy) {
    btnCopy.classList.add('ring-2', 'ring-sky-400');
  }
};

window.simAskAI = () => {
  const screen = document.getElementById('sim-screen');
  const resolution = document.getElementById('sim-resolution');
  const badge = document.getElementById('sim-status-badge');

  if (screen) {
    screen.className = 'bg-slate-950 p-4 rounded-xl border border-emerald-500 mb-4 font-mono text-xs text-emerald-400 h-28 overflow-y-auto';
    screen.innerHTML = `
      [FIXING] 안티그래비티가 코드 분석 중...<br>
      [RESOLVED] #display 엘리먼트 DOM 누락 버그 수정 완료 (index.html:15)<br>
      [SUCCESS] 앱이 정상 실행되었습니다! (Status: 200 OK)
    `;
  }
  if (badge) {
    badge.textContent = '수정 완료 (정상 작동) 🎉';
    badge.className = 'px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold';
  }
  if (resolution) {
    resolution.classList.remove('hidden');
  }
  if (window.confetti) {
    window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
  }
};

// Slide 10: Golden Prompt Builder
window.buildPrompt = () => {
  const role = document.getElementById('prompt-role')?.value || '';
  const purpose = document.getElementById('prompt-purpose')?.value || '';
  const feature = document.getElementById('prompt-feature')?.value || '';
  const design = document.getElementById('prompt-design')?.value || '';
  const output = document.getElementById('prompt-output');

  if (!output) return;

  const fullPrompt = `너는 ${role}
${purpose}

[필수 요구 기능]
- ${feature}

[UI/UX 디자인 가이드]
- ${design}
- 단일 HTML 파일로 브라우저에서 바로 실행되도록 만들어줘.`;

  output.value = fullPrompt;
};

window.copyPrompt = () => {
  const output = document.getElementById('prompt-output');
  const btnText = document.getElementById('copy-btn-text');
  if (!output) return;

  navigator.clipboard.writeText(output.value).then(() => {
    if (btnText) {
      btnText.textContent = '복사 완료! 안티그래비티에 붙여넣으세요 ✓';
      setTimeout(() => {
        btnText.textContent = '완성된 프롬프트 원클릭 복사';
      }, 2500);
    }
  }).catch(() => {
    output.select();
    document.execCommand('copy');
    if (btnText) btnText.textContent = '복사 완료! ✓';
  });
};

// Slide 15: QR Code Generator
window.generateQRCode = (triggerConfetti = true) => {
  const urlInput = document.getElementById('deploy-url-input');
  const qrContainer = document.getElementById('qrcode-container');
  const qrTargetText = document.getElementById('qr-target-text');

  if (!urlInput || !qrContainer) return;

  const url = urlInput.value.trim() || 'https://my-school-app.netlify.app';
  qrContainer.innerHTML = '';

  if (window.QRCode) {
    new window.QRCode(qrContainer, {
      text: url,
      width: 140,
      height: 140,
      colorDark: '#0f172a',
      colorLight: '#ffffff',
      correctLevel: window.QRCode.CorrectLevel.H
    });
  }

  if (qrTargetText) {
    qrTargetText.textContent = url;
  }

  if (triggerConfetti && window.confetti) {
    window.confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
  }
};

// Slide 16: Fire Confetti
window.fireConfetti = () => {
  if (window.confetti) {
    window.confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 }
    });
  }
};
