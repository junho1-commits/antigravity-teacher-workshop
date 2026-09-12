class PresentationApp {
  constructor() {
    this.slides = (typeof window !== 'undefined' && window.SLIDES_DATA) || (typeof SLIDES_DATA !== 'undefined' ? SLIDES_DATA : []);
    this.teacherNotes = (typeof window !== 'undefined' && window.TEACHER_NOTES) || (typeof TEACHER_NOTES !== 'undefined' ? TEACHER_NOTES : []);
    this.currentIndex = 0;
    
    // UI state
    this.isEditModeActive = false;
    this.isTeacherDrawerOpen = false;
    this.isAgentDrawerOpen = false;
    this.isPresenterModalOpen = false;
    this.isOverviewModalOpen = false;
    this.isFullScreen = false;

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

    // 3 New Feature Elements
    this.editorToolbar = document.getElementById('editor-toolbar');
    this.teacherDrawer = document.getElementById('teacher-drawer');
    this.teacherDrawerTitle = document.getElementById('teacher-drawer-title');
    this.teacherDrawerContent = document.getElementById('teacher-drawer-content');
    
    // Floating Action Buttons
    this.btnToggleEdit = document.getElementById('btn-toggle-edit');
    this.btnToggleFullscreen = document.getElementById('btn-toggle-fullscreen');
    this.btnToggleTeacher = document.getElementById('btn-toggle-teacher');
  }

  getStorageKey(slideIndex) {
    const pageName = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
    const idx = slideIndex !== undefined ? slideIndex + 1 : this.currentIndex + 1;
    return `slide_custom_${pageName}_slide_${idx}`;
  }

  initEvents() {
    // Keyboard navigation and shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept typing if focus is in an editable element or input
      const target = e.target;
      const isEditing = target && (target.isContentEditable || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT');

      // Ctrl+P or Cmd+P: Trigger PDF export (always allowed)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        window.exportToPDF();
        return;
      }

      // If user is actively typing inside an editable field, allow typing
      if (isEditing) {
        if (e.key === 'Escape') {
          target.blur();
        }
        return;
      }

      // Global Navigation & Shortcuts
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
        // Fullscreen shortcuts: F, f, or Korean ㄹ
        case 'f':
        case 'F':
        case 'ㄹ':
          e.preventDefault();
          this.toggleFullScreen();
          break;
        // Teacher note drawer shortcuts: T, t, or Korean ㅅ
        case 't':
        case 'T':
        case 'ㅅ':
          e.preventDefault();
          this.toggleTeacherDrawer();
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
          this.toggleOverviewModal();
          break;
        case 'Escape':
          this.closeAllModals();
          break;
      }
    });

    // Sync fullscreen state if user presses Esc or browser UI changes fullscreen
    document.addEventListener('fullscreenchange', () => {
      this.syncFullscreenState();
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

  // -------------------------------------------------------------
  // SLIDE RENDERING & LOCAL STORAGE SYNC
  // -------------------------------------------------------------
  renderSlide() {
    const currentSlide = this.slides[this.currentIndex];
    if (!currentSlide) return;

    // Update Counter & Progress
    const total = this.slides.length;
    const current = this.currentIndex + 1;
    if (this.slideCounter) this.slideCounter.textContent = `${current} / ${total}`;
    if (this.progressBar) this.progressBar.style.width = `${(current / total) * 100}%`;

    // Update Badge & Title
    if (this.slideBadge) this.slideBadge.innerHTML = currentSlide.badge;

    // Check if there is saved customized content in localStorage
    const savedContent = localStorage.getItem(this.getStorageKey());
    const contentToRender = savedContent ? savedContent : currentSlide.content;

    // Render Slide Main Content
    this.slideViewport.innerHTML = `
      <div class="slide-content w-full h-full flex flex-col justify-center">
        ${contentToRender}
      </div>
    `;

    // If Edit Mode is currently active, apply contenteditable and event listeners
    if (this.isEditModeActive) {
      this.applyContentEditable(true);
    }

    // Update Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Post-render handlers for specific interactive widgets
    this.handleSlideSpecificInit(currentSlide.id);
  }

  handleSlideSpecificInit(slideId) {
    if (document.getElementById('demo-seat-grid')) {
      setTimeout(() => {
        if (window.demoRenderSeatGrid) {
          window.demoRenderSeatGrid(window.demoCurrentSeats || window.demoStudentRoster);
        }
      }, 50);
    }
    if (document.getElementById('prompt-role')) {
      setTimeout(() => {
        if (window.buildPrompt) window.buildPrompt();
      }, 50);
    }
    if (document.getElementById('deploy-url-input')) {
      setTimeout(() => {
        if (window.generateQRCode) window.generateQRCode(false);
      }, 50);
    }
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      if (this.isEditModeActive) this.saveSlideContent();
      this.currentIndex++;
      this.renderSlide();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      if (this.isEditModeActive) this.saveSlideContent();
      this.currentIndex--;
      this.renderSlide();
    }
  }

  goToSlide(slideNumber) {
    const index = slideNumber - 1;
    if (index >= 0 && index < this.slides.length) {
      if (this.isEditModeActive) this.saveSlideContent();
      this.currentIndex = index;
      this.renderSlide();
      this.closeAllModals();
    }
  }

  // -------------------------------------------------------------
  // [1] 고치기 모드 (LIVE IN-PLACE EDIT ENGINE)
  // -------------------------------------------------------------
  toggleEditMode() {
    this.isEditModeActive = !this.isEditModeActive;

    if (this.isEditModeActive) {
      document.body.classList.add('edit-mode-active');
      if (this.editorToolbar) this.editorToolbar.classList.remove('hidden');
      if (this.btnToggleEdit) {
        this.btnToggleEdit.classList.add('active');
        this.btnToggleEdit.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>완료</span>`;
      }
      this.applyContentEditable(true);
    } else {
      this.saveSlideContent();
      document.body.classList.remove('edit-mode-active');
      if (this.editorToolbar) this.editorToolbar.classList.add('hidden');
      if (this.btnToggleEdit) {
        this.btnToggleEdit.classList.remove('active');
        this.btnToggleEdit.innerHTML = `<i data-lucide="edit-3" class="w-4 h-4"></i><span>✎ 고치기</span>`;
      }
      this.applyContentEditable(false);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  applyContentEditable(enable) {
    const slideContent = this.slideViewport.querySelector('.slide-content');
    if (!slideContent) return;

    // Target elements: headings, paragraphs, spans, list items, badges, blockquotes, code
    const editableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span', 'strong', 'em', 'code', 'blockquote'];
    const elements = slideContent.querySelectorAll(editableTags.join(','));

    elements.forEach((el) => {
      if (enable) {
        el.setAttribute('contenteditable', 'true');
        el.setAttribute('spellcheck', 'false');
        // Auto-save on input or blur
        el.oninput = () => this.saveSlideContent();
        el.onblur = () => this.saveSlideContent();
      } else {
        el.removeAttribute('contenteditable');
        el.removeAttribute('spellcheck');
        el.oninput = null;
        el.onblur = null;
      }
    });
  }

  saveSlideContent() {
    const slideContent = this.slideViewport.querySelector('.slide-content');
    if (!slideContent) return;
    
    const htmlToSave = slideContent.innerHTML;
    try {
      localStorage.setItem(this.getStorageKey(), htmlToSave);
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  editorExec(command, value = null) {
    document.execCommand(command, false, value);
    this.saveSlideContent();
  }

  editorChangeFontSize(delta) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    
    const node = selection.anchorNode;
    const targetElement = node && node.nodeType === 3 ? node.parentElement : node;
    if (targetElement && this.slideViewport.contains(targetElement)) {
      const currentSize = parseFloat(window.getComputedStyle(targetElement).fontSize) || 16;
      const newSize = Math.max(12, Math.min(80, currentSize + delta));
      targetElement.style.fontSize = `${newSize}px`;
      this.saveSlideContent();
    }
  }

  editorInsertImage() {
    const choice = confirm("이미지 파일을 직접 올리시겠습니까?\n[확인]: 파일 선택 / [취소]: 이미지 웹 URL 입력");
    if (choice) {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const imgHtml = `<img src="${event.target.result}" alt="수업 이미지" class="max-h-72 rounded-2xl mx-auto my-3 shadow-lg object-contain border border-slate-700" />`;
            document.execCommand('insertHTML', false, imgHtml);
            this.saveSlideContent();
          };
          reader.readAsDataURL(file);
        }
      };
      fileInput.click();
    } else {
      const url = prompt("삽입할 이미지의 웹 주소(URL)를 입력하세요:", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800");
      if (url && url.trim()) {
        const imgHtml = `<img src="${url.trim()}" alt="수업 이미지" class="max-h-72 rounded-2xl mx-auto my-3 shadow-lg object-contain border border-slate-700" />`;
        document.execCommand('insertHTML', false, imgHtml);
        this.saveSlideContent();
      }
    }
  }

  editorHideElement() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    let node = selection.anchorNode;
    let target = node && node.nodeType === 3 ? node.parentElement : node;

    while (target && target !== this.slideViewport && target.parentElement && target.parentElement !== this.slideViewport) {
      if (target.classList.contains('glass-card') || target.tagName === 'P' || target.tagName === 'LI' || target.tagName.startsWith('H') || target.tagName === 'DIV') {
        break;
      }
      target = target.parentElement;
    }

    if (target && target !== this.slideViewport && this.slideViewport.contains(target)) {
      target.style.display = 'none';
      this.saveSlideContent();
    }
  }

  editorHideSlide() {
    if (confirm("현재 슬라이드 전체를 감추시겠습니까?\n(언제든 [전체 되돌리기] 버튼으로 원상복구할 수 있습니다)")) {
      const slideContent = this.slideViewport.querySelector('.slide-content');
      if (slideContent) {
        slideContent.innerHTML = `
          <div class="p-12 text-center glass-panel rounded-3xl border border-dashed border-slate-700 my-auto">
            <i data-lucide="eye-off" class="w-12 h-12 text-slate-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-slate-400 mb-2">이 슬라이드는 현재 감춰져 있습니다.</h3>
            <p class="text-sm text-slate-500 mb-6">수업 시 지나치거나 건너뛸 때 유용합니다.</p>
            <button onclick="window.editorResetSlide()" class="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">
              슬라이드 원본으로 되살리기
            </button>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        this.saveSlideContent();
      }
    }
  }

  editorResetSlide() {
    if (confirm("이 슬라이드의 모든 수정 내용을 취소하고 최초 원본으로 되돌리시겠습니까?")) {
      localStorage.removeItem(this.getStorageKey());
      this.renderSlide();
    }
  }

  // -------------------------------------------------------------
  // [2] 전체화면 모드 (FULLSCREEN TOGGLE & MARGIN 0)
  // -------------------------------------------------------------
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.syncFullscreenState();
      }).catch(() => {
        this.syncFullscreenState();
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          this.syncFullscreenState();
        }).catch(() => {
          this.syncFullscreenState();
        });
      }
    }
  }

  syncFullscreenState() {
    const isFull = !!document.fullscreenElement;
    this.isFullScreen = isFull;

    if (isFull) {
      document.body.classList.add('is-fullscreen');
      if (this.btnToggleFullscreen) {
        this.btnToggleFullscreen.classList.add('active');
        this.btnToggleFullscreen.innerHTML = `<i data-lucide="minimize" class="w-4 h-4"></i><span>⛶ 해제</span>`;
      }
    } else {
      document.body.classList.remove('is-fullscreen');
      if (this.btnToggleFullscreen) {
        this.btnToggleFullscreen.classList.remove('active');
        this.btnToggleFullscreen.innerHTML = `<i data-lucide="maximize" class="w-4 h-4"></i><span>⛶ 전체</span>`;
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // -------------------------------------------------------------
  // [3] 교사용 비밀 서랍 (TEACHER DRAWER TOGGLE)
  // -------------------------------------------------------------
  toggleTeacherDrawer() {
    this.isTeacherDrawerOpen = !this.isTeacherDrawerOpen;

    if (this.isTeacherDrawerOpen) {
      if (this.teacherDrawer) {
        this.teacherDrawer.classList.add('open');
      }
      if (this.btnToggleTeacher) {
        this.btnToggleTeacher.classList.add('active');
      }
      const currentSlide = this.slides[this.currentIndex];
      if (currentSlide) {
        this.renderTeacherDrawerContent(currentSlide);
      }
    } else {
      if (this.teacherDrawer) {
        this.teacherDrawer.classList.remove('open');
      }
      if (this.btnToggleTeacher) {
        this.btnToggleTeacher.classList.remove('active');
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderTeacherDrawerContent(slide) {
    if (!this.teacherDrawerContent || !slide) return;

    if (this.teacherDrawerTitle) {
      this.teacherDrawerTitle.textContent = `Slide ${slide.id}: ${slide.title}`;
    }

    // Find corresponding note from TEACHER_NOTES array or fallback
    const note = (window.TEACHER_NOTES || []).find(n => n.slideId === slide.id) || {
      time: "5분",
      expectedAnswers: "실습과 발표에 적극적으로 참여하고 호응함.",
      confusingPoints: "'어려운 부분이 있나요?' ➔ '궁금한 점은 언제든 질문해 주세요.'",
      keyTerms: "AI 수업자료, 안티그래비티"
    };

    const keyTermBadges = note.keyTerms.split(',').map(term => `
      <span class="inline-block px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs mr-1 mb-1">
        ${term.trim()}
      </span>
    `).join('');

    this.teacherDrawerContent.innerHTML = `
      <!-- Card 1: Time -->
      <div class="glass-card p-4 rounded-2xl border border-amber-500/30 bg-slate-900/80 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
            <i data-lucide="clock" class="w-4 h-4"></i>
            <span>권장 시간 배분</span>
          </div>
          <p class="text-2xl font-extrabold text-white">${note.time}</p>
        </div>
        <span class="text-[11px] text-slate-400 mt-2">질의응답 및 실습 시간 포함</span>
      </div>

      <!-- Card 2: Expected Answers -->
      <div class="glass-card p-4 rounded-2xl border border-blue-500/30 bg-slate-900/80 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-blue-400 font-bold text-sm mb-2">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>예상 반응 & 답변</span>
          </div>
          <p class="text-xs md:text-sm text-slate-200 leading-relaxed font-medium break-keep">${note.expectedAnswers}</p>
        </div>
      </div>

      <!-- Card 3: Confusing Points & Coaching -->
      <div class="glass-card p-4 rounded-2xl border border-purple-500/30 bg-slate-900/80 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-purple-400 font-bold text-sm mb-2">
            <i data-lucide="help-circle" class="w-4 h-4"></i>
            <span>헷갈릴 지점 & 되받아 줄 말</span>
          </div>
          <p class="text-xs md:text-sm text-slate-200 leading-relaxed font-medium break-keep">${note.confusingPoints}</p>
        </div>
      </div>

      <!-- Card 4: Key Terms -->
      <div class="glass-card p-4 rounded-2xl border border-emerald-500/30 bg-slate-900/80 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
            <i data-lucide="key" class="w-4 h-4"></i>
            <span>짚어 줄 핵심 낱말</span>
          </div>
          <div class="flex flex-wrap mt-1">
            ${keyTermBadges}
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // -------------------------------------------------------------
  // Modals & Drawers Management
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
    if (this.agentDrawer) this.agentDrawer.classList.add('translate-x-full');

    this.isPresenterModalOpen = false;
    if (this.presenterModal) this.presenterModal.classList.add('hidden');

    this.isOverviewModalOpen = false;
    if (this.overviewModal) this.overviewModal.classList.add('hidden');

    this.isTeacherDrawerOpen = false;
    if (this.teacherDrawer) this.teacherDrawer.classList.remove('open');
    if (this.btnToggleTeacher) this.btnToggleTeacher.classList.remove('active');
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
    const titleEl = document.getElementById('overview-modal-title');
    if (titleEl) {
      titleEl.textContent = `전체 강의 슬라이드 목차 (${this.slides.length} Slides)`;
    }
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
// Safe Application Initialization
function initPresentationApp() {
  if (!window.app) {
    window.app = new PresentationApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPresentationApp);
} else {
  initPresentationApp();
}


// Global Window Helpers
window.nextSlide = () => window.app.nextSlide();
window.prevSlide = () => window.app.prevSlide();
window.goToSlide = (num) => window.app.goToSlide(num);
window.toggleAgentDrawer = () => window.app.toggleAgentDrawer();
window.togglePresenterModal = () => window.app.togglePresenterModal();
window.toggleOverviewModal = () => window.app.toggleOverviewModal();
window.toggleFullScreen = () => window.app.toggleFullScreen();
window.toggleTeacherDrawer = () => window.app.toggleTeacherDrawer();
window.toggleEditMode = () => window.app.toggleEditMode();
window.editorExec = (cmd, val) => window.app.editorExec(cmd, val);
window.editorChangeFontSize = (delta) => window.app.editorChangeFontSize(delta);
window.editorInsertImage = () => window.app.editorInsertImage();
window.editorHideElement = () => window.app.editorHideElement();
window.editorHideSlide = () => window.app.editorHideSlide();
window.editorResetSlide = () => window.app.editorResetSlide();
window.closeAllModals = () => window.app.closeAllModals();

// -------------------------------------------------------------
// Interactive Widgets Handlers
// -------------------------------------------------------------

// Slide 4: Quiz Checker
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

// Slide 6: Chatbot Sim
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

// Slide 6: Agent Sim
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

// Slide 11: Error Fix Sim
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

// Slide 12: Golden Prompt Builder
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

// Slide 17: QR Code Generator
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

// Slide 17/18: Fire Confetti
window.fireConfetti = () => {
  if (window.confetti) {
    window.confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 }
    });
  }
};

// =============================================================
// PDF Export Handler (전체 19개 슬라이드 일괄 인쇄/PDF 저장)
// =============================================================
window.exportToPDF = () => {
  const printContainer = document.getElementById('print-container');
  if (!printContainer) return;

  const slides = window.SLIDES_DATA || [];
  const total = slides.length;

  // Render all slides into print container
  printContainer.innerHTML = slides.map((s, idx) => `
    <div class="print-slide-page">
      <div class="w-full max-w-6xl h-full flex flex-col justify-center">
        ${s.content}
      </div>
      <div class="print-slide-footer">
        <span>이것만 알면 준호처럼 할 수 있다 - 안티그래비티 교사 연수</span>
        <span>Slide ${idx + 1} / ${total}</span>
      </div>
    </div>
  `).join('');

  // Re-render Lucide icons in print container
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Brief timeout to ensure DOM & icons render before print dialog
  setTimeout(() => {
    window.print();
  }, 300);
};


// =============================================================
// INTERACTIVE MINI-APP DEMO HANDLERS (실습 1, 2, 3 라이브 예제)
// =============================================================

// Web Audio Beep Synthesizer
window.playTone = (freq = 800, duration = 150) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration / 1000);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
  } catch (e) {}
};

// -------------------------------------------------------------
// -------------------------------------------------------------
// [Slide 13] Live A4 Worksheet Demo Handler
// -------------------------------------------------------------
window.demoFillWorksheetSample = () => {
  const el = (id) => document.getElementById(id);
  if (el('demo-stu-class')) el('demo-stu-class').value = '1';
  if (el('demo-stu-num')) el('demo-stu-num').value = '7';
  if (el('demo-stu-name')) el('demo-stu-name').value = '김민준';
  if (el('demo-ws-1')) el('demo-ws-1').value = '급';
  if (el('demo-ws-2')) el('demo-ws-2').value = '평평';
  if (el('demo-ws-3')) el('demo-ws-3').value = '계단식 논농사';
  if (el('demo-ws-4')) el('demo-ws-4').value = '가축(양) 목축·방목';
  if (el('demo-ws-5')) el('demo-ws-5').value = '스키장·휴양림 관광지';
  if (el('demo-ws-6')) el('demo-ws-6').value = '셰르파 활동으로 짐 운반, 숙소·음식 제공으로 소득 창출';
  if (el('demo-ws-7')) el('demo-ws-7').value = '관광객이 버린 쓰레기 몸살, 입산료 징수 및 되가져오기 정책';

  window.playTone(880, 200);
  if (window.fireConfetti) window.fireConfetti();
};

window.demoResetWorksheet = () => {
  const ids = ['demo-ws-1', 'demo-ws-2', 'demo-ws-3', 'demo-ws-4', 'demo-ws-5', 'demo-ws-6', 'demo-ws-7'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  window.playTone(440, 100);
};

window.demoPrintWorksheet = () => {
  window.playTone(660, 150);
  const w = window.open('worksheet.html', '_blank');
  if (w) {
    w.focus();
  }
};

// -------------------------------------------------------------
// [Slide 14] Live Photo Quiz Demo Handler
// -------------------------------------------------------------
window.demoQuizQuestions = [
  {
    q: "Q. 다음 그림을 그린 조선 후기 대표 풍속화가는 누구일까요?",
    img: "images/ssireum.jpg",
    choices: ["① 신사임당", "② 김홍도", "③ 정선", "④ 김정호"],
    answerIndex: 1,
    desc: "🎉 정답입니다! 조선 후기 서민들의 일상을 해학적으로 그린 단원 김홍도의 대표작 <씨름(국립중앙박물관 소장)>입니다."
  },
  {
    q: "Q. 세종대왕 때 장영실 등이 만든 조선의 오목 해시계는 무엇일까요?",
    img: "images/angbuilgu.jpg",
    choices: ["① 자격루", "② 혼천의", "③ 앙부일구", "④ 측우기"],
    answerIndex: 2,
    desc: "🎉 정답입니다! 솥 모양의 오목한 구면으로 글을 모르는 백성도 시간을 알 수 있게 동물 그림을 새긴 <앙부일구(보물)>입니다."
  },
  {
    q: "Q. 세종대왕이 백성을 가르치기 위해 창제한 28자의 글자는 무엇일까요?",
    img: "images/hunmin.jpg",
    choices: ["① 이두", "② 훈민정음", "③ 향찰", "④ 구결"],
    answerIndex: 1,
    desc: "🎉 정답입니다! '나랏말싸미 듕귁에 달아...' 1446년 반포된 유네스코 세계기록유산 <훈민정음 해례본(국보 제70호)>입니다."
  }
];

window.demoQuizCurrentIndex = 0;
window.demoQuizScore = 0;

window.demoAnswerQuiz = (choiceIdx) => {
  const qObj = window.demoQuizQuestions[window.demoQuizCurrentIndex];
  const fb = document.getElementById('demo-quiz-feedback');
  const scoreEl = document.getElementById('demo-quiz-score');
  const choiceBtns = document.querySelectorAll('#demo-quiz-choices button');

  if (!qObj || !fb) return;
  fb.classList.remove('hidden');

  if (choiceIdx === qObj.answerIndex) {
    window.playTone(880, 200);
    window.demoQuizScore += 50;
    if (scoreEl) scoreEl.textContent = '점수: ' + window.demoQuizScore + '점';
    fb.innerHTML = qObj.desc;
    fb.className = 'mt-3 text-sm md:text-base font-bold text-emerald-300 bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/40';
    if (choiceBtns[choiceIdx]) {
      choiceBtns[choiceIdx].className = 'py-3 px-4 rounded-xl bg-emerald-600 text-white text-sm md:text-base font-bold transition-all text-left ring-2 ring-emerald-300';
    }
    if (window.fireConfetti) window.fireConfetti();
  } else {
    window.playTone(300, 250);
    fb.innerHTML = '🤔 <strong>오답입니다!</strong> 다시 생각해보세요. (힌트: 2번 보기)';
    fb.className = 'mt-3 text-sm md:text-base font-bold text-rose-300 bg-rose-950/60 p-3 rounded-xl border border-rose-500/40';
    if (choiceBtns[choiceIdx]) {
      choiceBtns[choiceIdx].className = 'py-3 px-4 rounded-xl bg-rose-900/60 text-rose-200 text-sm md:text-base font-bold transition-all text-left line-through';
    }
  }
};

window.demoNextQuiz = () => {
  window.demoQuizCurrentIndex = (window.demoQuizCurrentIndex + 1) % window.demoQuizQuestions.length;
  const qObj = window.demoQuizQuestions[window.demoQuizCurrentIndex];
  const qEl = document.getElementById('demo-quiz-question');
  const imgEl = document.getElementById('demo-quiz-image');
  const fb = document.getElementById('demo-quiz-feedback');
  const choicesEl = document.getElementById('demo-quiz-choices');

  if (qEl) qEl.textContent = qObj.q;
  if (imgEl) imgEl.src = qObj.img;
  if (fb) fb.classList.add('hidden');
  if (choicesEl) {
    choicesEl.innerHTML = qObj.choices.map((c, i) => `
      <button onclick="window.demoAnswerQuiz(${i})" class="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm md:text-base font-bold transition-all text-left">${c}</button>
    `).join('');
  }
};


// -------------------------------------------------------------
// [Slide 15] Smart Classroom Seating Randomizer Mini-App Engine
// -------------------------------------------------------------
window.demoStudentRoster = [
  { name: "김민준", gender: "M", fixed: true, tag: "👓 시력" },
  { name: "이서연", gender: "F", fixed: true, tag: "🩹 건강" },
  { name: "박도윤", gender: "M", fixed: false, tag: "" },
  { name: "최지우", gender: "F", fixed: false, tag: "" },
  { name: "정예준", gender: "M", fixed: false, tag: "" },
  { name: "강하은", gender: "F", fixed: false, tag: "" },
  { name: "조은우", gender: "M", fixed: false, tag: "" },
  { name: "윤서아", gender: "F", fixed: false, tag: "" },
  { name: "장지호", gender: "M", fixed: false, tag: "" },
  { name: "임수아", gender: "F", fixed: false, tag: "" },
  { name: "한시우", gender: "M", fixed: false, tag: "" },
  { name: "오지유", gender: "F", fixed: false, tag: "" }
];

window.demoCurrentSeats = [...window.demoStudentRoster];
window.demoIsShuffling = false;
window.demoShuffleInterval = null;

window.demoRenderSeatGrid = (students) => {
  const container = document.getElementById('demo-seat-grid');
  if (!container) return;
  const list = students || window.demoCurrentSeats;

  container.innerHTML = list.map((st, idx) => {
    const isSpecial = st.fixed;
    const isBoy = st.gender === 'M';
    
    return `
      <div class="p-2 md:p-2.5 rounded-xl ${isSpecial ? 'bg-amber-950/70 border-2 border-amber-500/70 ring-1 ring-amber-400/40' : 'bg-slate-900/90 border border-slate-700 hover:border-slate-500'} text-center shadow-md transition-all">
        <div class="flex justify-between items-center text-[10px] font-extrabold mb-0.5 ${isSpecial ? 'text-amber-300' : 'text-slate-400'}">
          <span>${idx + 1}번</span>
          <span>${st.tag || (isBoy ? '<span class="text-sky-400">👨 남</span>' : '<span class="text-pink-400">👩 여</span>')}</span>
        </div>
        <span class="text-sm md:text-base font-black ${isSpecial ? 'text-amber-200' : isBoy ? 'text-sky-100' : 'text-pink-100'}">${st.name}</span>
      </div>
    `;
  }).join('');
};

window.demoShuffleSeats = () => {
  if (window.demoIsShuffling) return; // Prevent double trigger
  window.demoIsShuffling = true;

  const btn = document.getElementById('btn-shuffle-seats');
  const statusEl = document.getElementById('demo-seat-status');
  const optFixed = document.getElementById('demo-opt-fixed')?.checked ?? true;
  const optGender = document.getElementById('demo-opt-gender')?.checked ?? true;

  if (btn) {
    btn.disabled = true;
    btn.classList.add('opacity-75', 'cursor-not-allowed');
    btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 md:w-6 md:h-6 animate-spin"></i> <span>자리 배치 중...</span>';
    if (window.lucide) window.lucide.createIcons();
  }

  if (statusEl) {
    statusEl.innerHTML = '🎲 <strong>실시간 교실 로직 계산 중...</strong> (앞자리 고정석 & 남녀 짝꿍 규칙 매칭)';
    statusEl.className = 'mt-2 text-center text-xs md:text-sm font-bold text-amber-300 py-1 bg-amber-950/50 rounded-lg border border-amber-500/30 animate-pulse';
  }

  let step = 0;
  if (window.demoShuffleInterval) clearInterval(window.demoShuffleInterval);

  window.demoShuffleInterval = setInterval(() => {
    step++;
    // Flashing random shuffle animation
    const randomShuffled = [...window.demoStudentRoster].sort(() => Math.random() - 0.5);
    window.demoRenderSeatGrid(randomShuffled);
    window.playTone(350 + step * 35, 45);

    if (step >= 12) {
      clearInterval(window.demoShuffleInterval);
      window.demoShuffleInterval = null;

      // Final logical placement calculation
      let finalArrangement = [];
      const fixedList = window.demoStudentRoster.filter(s => s.fixed);
      const boys = window.demoStudentRoster.filter(s => !s.fixed && s.gender === 'M').sort(() => Math.random() - 0.5);
      const girls = window.demoStudentRoster.filter(s => !s.fixed && s.gender === 'F').sort(() => Math.random() - 0.5);

      if (optFixed && optGender) {
        // Seat 1 & 2: Fixed students
        finalArrangement.push(fixedList[0]); // 민준 (시력)
        finalArrangement.push(fixedList[1]); // 서연 (건강)
        
        // Seats 3~12: Boy-Girl pairs in desks (3&4, 5&6, 7&8, 9&10, 11&12)
        for (let i = 0; i < 5; i++) {
          finalArrangement.push(boys[i]);
          finalArrangement.push(girls[i]);
        }
      } else if (optFixed && !optGender) {
        // Fixed 1&2, remaining fully randomized
        finalArrangement.push(fixedList[0]);
        finalArrangement.push(fixedList[1]);
        const others = window.demoStudentRoster.filter(s => !s.fixed).sort(() => Math.random() - 0.5);
        finalArrangement = finalArrangement.concat(others);
      } else if (!optFixed && optGender) {
        // All students paired Boy-Girl
        const allBoys = window.demoStudentRoster.filter(s => s.gender === 'M').sort(() => Math.random() - 0.5);
        const allGirls = window.demoStudentRoster.filter(s => s.gender === 'F').sort(() => Math.random() - 0.5);
        for (let i = 0; i < 6; i++) {
          finalArrangement.push(allBoys[i]);
          finalArrangement.push(allGirls[i]);
        }
      } else {
        // Fully random
        finalArrangement = [...window.demoStudentRoster].sort(() => Math.random() - 0.5);
      }

      window.demoCurrentSeats = finalArrangement;
      window.demoRenderSeatGrid(finalArrangement);

      // Play victory chime and fire confetti
      window.playTone(880, 250);
      if (window.fireConfetti) window.fireConfetti();

      if (statusEl) {
        statusEl.innerHTML = `🎉 <strong>배치 완료!</strong> (규칙: ${optFixed ? '👓 앞줄 고정석 ' : ''}${optGender ? '👫 남녀 짝꿍' : '자유 배치'})`;
        statusEl.className = 'mt-2 text-center text-xs md:text-sm font-bold text-emerald-300 py-1 bg-emerald-950/60 rounded-lg border border-emerald-500/40';
      }

      if (btn) {
        btn.disabled = false;
        btn.classList.remove('opacity-75', 'cursor-not-allowed');
        btn.innerHTML = '<i data-lucide="shuffle" class="w-5 h-5 md:w-6 md:h-6"></i> <span>자리 섞기 (체험)</span>';
        if (window.lucide) window.lucide.createIcons();
      }

      window.demoIsShuffling = false;
    }
  }, 100);
};

window.demoResetSeats = () => {
  if (window.demoShuffleInterval) {
    clearInterval(window.demoShuffleInterval);
    window.demoShuffleInterval = null;
  }
  window.demoIsShuffling = false;
  window.demoCurrentSeats = [...window.demoStudentRoster];
  window.demoRenderSeatGrid(window.demoCurrentSeats);

  const statusEl = document.getElementById('demo-seat-status');
  if (statusEl) {
    statusEl.innerHTML = '✨ 현재 배치: 12명 (시력·건강 배려 2명 1·2번 앞줄 고정)';
    statusEl.className = 'mt-2 text-center text-xs md:text-sm font-bold text-pink-300 py-1 bg-pink-950/30 rounded-lg border border-pink-500/20';
  }

  const btn = document.getElementById('btn-shuffle-seats');
  if (btn) {
    btn.disabled = false;
    btn.classList.remove('opacity-75', 'cursor-not-allowed');
    btn.innerHTML = '<i data-lucide="shuffle" class="w-5 h-5 md:w-6 md:h-6"></i> <span>자리 섞기 (체험)</span>';
    if (window.lucide) window.lucide.createIcons();
  }
};

// =============================================================
// [Slide 16] Live Google Sheets Real-time Ranking Cloud Sync Engine
// =============================================================

// Google Apps Script 백엔드 완성 템플릿 코드
window.APPS_SCRIPT_CODE_TEMPLATE = `/**
 * 구글 스프레드시트 실시간 랭킹전 Web App 백엔드 스크립트
 * [배포 방법]: [배포] > [새 배포] > 유형: [웹 앱] > 액세스 권한: [모든 사용자 (Anyone)]
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  if (sheet.getLastRow() === 0) initSheetHeaders(sheet);

  // GET 방식 점수 등록 지원 (?name=홍길동&score=100)
  if (e && e.parameter && e.parameter.name && e.parameter.score !== undefined) {
    appendRecord(sheet, String(e.parameter.name || '익명').trim(), Number(e.parameter.score || 0));
  }

  var lastRow = sheet.getLastRow();
  var rows = [];
  if (lastRow > 1) {
    var values = sheet.getRange(2, 1, lastRow - 1, 3).getValues();
    for (var i = 0; i < values.length; i++) {
      var rowTime = values[i][0];
      var timeStr = (rowTime instanceof Date) ? Utilities.formatDate(rowTime, "Asia/Seoul", "HH:mm:ss") : String(rowTime || "");
      var rowName = String(values[i][1] || "익명");
      var rowScore = Number(values[i][2] || 0);
      if (rowName !== "" || rowScore > 0) {
        rows.push({ id: i + 1, time: timeStr, name: rowName, score: rowScore });
      }
    }
  }

  var sorted = rows.slice().sort(function(a, b) { return b.score - a.score; });
  var badges = ['🥇', '🥈', '🥉', '4위', '5위'];
  var leaderboard = sorted.slice(0, 10).map(function(item, idx) {
    return { rank: idx + 1, badge: badges[idx] || (idx + 1 + '위'), name: item.name, score: item.score, time: item.time };
  });

  var recentRows = rows.slice(-10).reverse();
  var res = { status: "success", totalCount: rows.length, leaderboard: leaderboard, recentRows: recentRows };
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  if (sheet.getLastRow() === 0) initSheetHeaders(sheet);

  var name = "익명";
  var score = 0;
  try {
    if (e && e.postData && e.postData.contents) {
      var payload = JSON.parse(e.postData.contents);
      name = payload.name || name;
      score = Number(payload.score || 0);
    } else if (e && e.parameter) {
      name = e.parameter.name || name;
      score = Number(e.parameter.score || 0);
    }
  } catch (err) {
    if (e && e.parameter) {
      name = e.parameter.name || name;
      score = Number(e.parameter.score || 0);
    }
  }

  var added = appendRecord(sheet, String(name).trim() || "익명", Number(score) || 0);
  return ContentService.createTextOutput(JSON.stringify({ status: "success", record: added })).setMimeType(ContentService.MimeType.JSON);
}

function appendRecord(sheet, name, score) {
  var now = new Date();
  var timeStr = Utilities.formatDate(now, "Asia/Seoul", "HH:mm:ss");
  var fullTimeStr = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  sheet.appendRow([fullTimeStr, name, score]);
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
  sheet.getRange(lastRow, 2).setHorizontalAlignment("center");
  sheet.getRange(lastRow, 3).setHorizontalAlignment("right").setNumberFormat("#,##0");
  return { time: timeStr, name: name, score: score };
}

function initSheetHeaders(sheet) {
  sheet.setName("학급랭킹DB");
  sheet.getRange(1, 1, 1, 3).setValues([["등록시간", "참가자 이름", "점수"]]);
  var h = sheet.getRange(1, 1, 1, 3);
  h.setBackground("#1e293b");
  h.setFontColor("#f8fafc");
  h.setFontWeight("bold");
  h.setHorizontalAlignment("center");
  sheet.setColumnWidth(1, 180);
  sheet.setColumnWidth(2, 140);
  sheet.setColumnWidth(3, 100);
}`;

// 구글 시트 Web App URL 관리 (실시간 클라우드 랭킹전 기본 연결)
window.GAS_DEFAULT_URL = "https://script.google.com/macros/s/AKfycby66cmbniNamfjaHZcdpve5bcPrcg7AKJR3k4b0-wMmbc4rvCOMB6NZygGkqsnjrlc/exec";

window.getGasUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const paramUrl = params.get('gas') || params.get('sheet_api');
  if (paramUrl) return decodeURIComponent(paramUrl).trim();
  const saved = localStorage.getItem('antigravity_gas_url');
  if (saved && saved.trim()) return saved.trim();
  return window.GAS_DEFAULT_URL || "";
};

window.setGasUrl = (url) => {
  if (url && url.trim()) {
    localStorage.setItem('antigravity_gas_url', url.trim());
  } else {
    localStorage.removeItem('antigravity_gas_url');
  }
};

// Apps Script 백엔드 코드 클립보드 복사
window.copyAppsScriptCode = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(window.APPS_SCRIPT_CODE_TEMPLATE).then(() => {
      alert("✅ Apps Script 백엔드 코드가 클립보드에 복사되었습니다!\n\n[구글 스프레드시트 > 확장 프로그램 > Apps Script]에 붙여넣고 [배포]를 진행해 주세요.");
    }).catch(() => {
      window.fallbackCopyCode();
    });
  } else {
    window.fallbackCopyCode();
  }
};

window.fallbackCopyCode = () => {
  const ta = document.createElement('textarea');
  ta.value = window.APPS_SCRIPT_CODE_TEMPLATE;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  alert("✅ Apps Script 백엔드 코드가 복사되었습니다!\n[Apps Script]에 붙여넣어 배포하세요.");
};

// 구글 시트 URL 설정 모달
window.openGoogleSheetSettingsModal = () => {
  const currentUrl = window.getGasUrl();
  let modal = document.getElementById('gas-settings-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gas-settings-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="glass-card max-w-xl w-full p-6 md:p-8 rounded-3xl border border-amber-500/50 bg-slate-900 shadow-2xl relative">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div class="flex items-center gap-3">
          <div class="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400">
            <i data-lucide="settings" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-black text-white">구글 시트 실시간 연동 설정</h3>
            <p class="text-xs md:text-sm text-slate-400">모든 교사의 스마트폰/노트북 점수를 하나의 시트로 실시간 집계</p>
          </div>
        </div>
        <button onclick="window.closeGoogleSheetSettingsModal()" class="text-slate-400 hover:text-white p-2 text-2xl font-bold">&times;</button>
      </div>

      <div class="space-y-4 text-sm text-slate-300">
        <div>
          <label class="block text-xs font-bold text-amber-300 uppercase mb-1">구글 Apps Script 웹 앱 URL (Web App URL)</label>
          <input type="text" id="modal-gas-url-input" value="${currentUrl}" placeholder="https://script.google.com/macros/s/.../exec" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 font-mono text-xs md:text-sm outline-none focus:border-amber-400" />
          <p class="text-[11px] text-slate-400 mt-1">💡 URL을 입력하면 실시간 다중 기기 모드로 작동하며, 비워두면 안전한 로컬 시뮬레이션으로 동작합니다.</p>
        </div>

        <div id="modal-test-result" class="hidden p-3 rounded-xl text-xs font-mono font-bold"></div>

        <div class="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
          <div class="font-bold text-slate-200">📌 빠른 연결 순서:</div>
          <div>1. <button onclick="window.copyAppsScriptCode()" class="text-sky-400 underline font-bold hover:text-sky-300">[Apps Script 코드 복사]</button> 클릭</div>
          <div>2. 새 구글 시트에서 [확장 프로그램 > Apps Script]에 붙여넣기</div>
          <div>3. [배포 > 새 배포] (유형: 웹 앱, 액세스: <strong>모든 사용자</strong>) 후 생성된 URL을 위 입력창에 붙여넣기!</div>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2.5 justify-between">
        <button onclick="window.testGasConnection()" id="btn-test-gas" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs md:text-sm font-bold transition-all flex items-center gap-1.5">
          <i data-lucide="activity" class="w-4 h-4 text-sky-400"></i>
          <span>연결 테스트</span>
        </button>

        <div class="flex gap-2">
          <button onclick="window.resetGasUrlToDemo()" class="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 text-xs font-bold transition-all">
            시뮬레이션 모드로 전환
          </button>
          <button onclick="window.saveGasUrlFromModal()" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs md:text-sm shadow-lg shadow-amber-500/30 transition-all">
            연결 및 저장
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
};

window.closeGoogleSheetSettingsModal = () => {
  const modal = document.getElementById('gas-settings-modal');
  if (modal) modal.classList.add('hidden');
};

window.testGasConnection = async () => {
  const input = document.getElementById('modal-gas-url-input');
  const resultEl = document.getElementById('modal-test-result');
  const btn = document.getElementById('btn-test-gas');
  const url = input ? input.value.trim() : '';

  if (!url) {
    if (resultEl) {
      resultEl.className = 'p-3 rounded-xl text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 block';
      resultEl.textContent = '❌ URL이 비어 있습니다. 웹 앱 URL을 입력해 주세요.';
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="animate-spin">⏳</span> 테스트 중...';
  }

  try {
    const fetchUrl = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();
    const res = await fetch(fetchUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.status === 'success') {
      resultEl.className = 'p-3 rounded-xl text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 block';
      resultEl.innerHTML = `✅ 연결 성공! 시트에서 현재 등록된 데이터 <strong>${data.totalCount}건</strong>을 정상 수신했습니다.`;
    } else {
      throw new Error('데이터 응답 형식이 일치하지 않습니다.');
    }
  } catch (err) {
    resultEl.className = 'p-3 rounded-xl text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 block';
    resultEl.innerHTML = `❌ 연결 실패: ${err.message}<br><span class="text-[11px] font-normal">웹 앱 배포 시 [액세스 권한: 모든 사용자]로 설정되었는지 확인해 주세요.</span>`;
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="activity" class="w-4 h-4 text-sky-400"></i> <span>연결 테스트</span>';
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

window.saveGasUrlFromModal = () => {
  const input = document.getElementById('modal-gas-url-input');
  const url = input ? input.value.trim() : '';
  window.setGasUrl(url);
  window.closeGoogleSheetSettingsModal();
  window.demoInitRankingWidget();
  alert(url ? "🎉 구글 시트 실시간 연동이 활성화되었습니다!\n이제 여러 기기에서 제출된 점수가 실시간으로 반영됩니다." : "🟡 로컬 시뮬레이션 모드로 전환되었습니다.");
};

window.resetGasUrlToDemo = () => {
  window.setGasUrl("");
  window.closeGoogleSheetSettingsModal();
  window.demoInitRankingWidget();
  alert("🟡 로컬 시뮬레이션 모드로 전환되었습니다.");
};

// 랭킹전 상태 관리
window.demoRankingState = {
  isPlaying: false,
  timeLeft: 10,
  timerInterval: null,
  score: 0,
  combo: 0,
  currentAns: null,
  isLiveConnected: false,
  pollingInterval: null,
  lastFetchedCount: 0,
  initialLeaderboard: [
    { rank: 1, name: '김민준 (5-1)', score: 140, time: '09:41:12', badge: '🥇' },
    { rank: 2, name: '이서연 (5-1)', score: 120, time: '09:41:45', badge: '🥈' },
    { rank: 3, name: '박도윤 (5-2)', score: 100, time: '09:42:03', badge: '🥉' },
    { rank: 4, name: '최지우 (5-1)', score: 80, time: '09:42:25', badge: '4위' },
    { rank: 5, name: '정예준 (5-2)', score: 60, time: '09:42:50', badge: '5위' }
  ],
  currentLeaderboard: null,
  initialSheetRows: [
    { id: 5, time: '09:42:50', name: '정예준 (5-2)', score: 60 },
    { id: 4, time: '09:42:25', name: '최지우 (5-1)', score: 80 },
    { id: 3, time: '09:42:03', name: '박도윤 (5-2)', score: 100 },
    { id: 2, time: '09:41:45', name: '이서연 (5-1)', score: 120 },
    { id: 1, time: '09:41:12', name: '김민준 (5-1)', score: 140 }
  ],
  currentSheetRows: null
};

window.demoInitRankingWidget = () => {
  if (!window.demoRankingState.currentLeaderboard) {
    window.demoRankingState.currentLeaderboard = JSON.parse(JSON.stringify(window.demoRankingState.initialLeaderboard));
  }
  if (!window.demoRankingState.currentSheetRows) {
    window.demoRankingState.currentSheetRows = JSON.parse(JSON.stringify(window.demoRankingState.initialSheetRows));
  }

  const gasUrl = window.getGasUrl();
  const statusBadge = document.getElementById('demo-sheet-sync-status');
  if (statusBadge) {
    if (gasUrl) {
      statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 🟢 구글 시트 연결 중...';
      statusBadge.className = 'px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono flex items-center gap-1.5';
    } else {
      statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span> 🟡 로컬 시뮬레이션';
      statusBadge.className = 'px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold font-mono flex items-center gap-1.5';
    }
  }

  window.demoRenderLeaderboard();
  window.demoRenderSheetRows();

  if (!window.demoRankingState.isPlaying) {
    const introView = document.getElementById('demo-rank-intro-view');
    const playView = document.getElementById('demo-rank-play-view');
    const endView = document.getElementById('demo-rank-end-view');
    if (introView) introView.classList.remove('hidden');
    if (playView) playView.classList.add('hidden');
    if (endView) endView.classList.add('hidden');
  }

  // 실시간 클라우드 폴링 시작
  window.startRankingPolling();
};

window.startRankingPolling = () => {
  window.stopRankingPolling();
  window.fetchRealRankingData();
  const gasUrl = window.getGasUrl();
  if (gasUrl) {
    window.demoRankingState.pollingInterval = setInterval(() => {
      window.fetchRealRankingData();
    }, 3500);
  }
};

window.stopRankingPolling = () => {
  if (window.demoRankingState && window.demoRankingState.pollingInterval) {
    clearInterval(window.demoRankingState.pollingInterval);
    window.demoRankingState.pollingInterval = null;
  }
};

// 실시간 구글 시트 데이터 조회 (GET)
window.fetchRealRankingData = async () => {
  const gasUrl = window.getGasUrl();
  const statusBadge = document.getElementById('demo-sheet-sync-status');
  if (!gasUrl) {
    window.demoRankingState.isLiveConnected = false;
    return false;
  }

  try {
    const fetchUrl = gasUrl + (gasUrl.includes('?') ? '&' : '?') + 't=' + Date.now();
    const res = await fetch(fetchUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (data && data.status === 'success') {
      const state = window.demoRankingState;
      const prevCount = state.lastFetchedCount || 0;
      state.isLiveConnected = true;

      if (Array.isArray(data.leaderboard)) {
        state.currentLeaderboard = data.leaderboard;
      }
      if (Array.isArray(data.recentRows)) {
        state.currentSheetRows = data.recentRows;
      }

      // 다른 기기에서 새로운 점수가 등록된 경우
      if (prevCount > 0 && data.totalCount > prevCount) {
        if (window.playTone) window.playTone(880, 200);
        if (statusBadge) {
          statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 🚀 새 참가자 실시간 등록 (+${data.totalCount - prevCount}건)`;
          statusBadge.className = 'px-3 py-1 rounded-full bg-emerald-500/40 text-emerald-200 text-xs font-bold font-mono flex items-center gap-1.5 border border-emerald-400 animate-bounce';
          setTimeout(() => {
            if (statusBadge) {
              statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 🟢 라이브 구글 시트 연결됨 (${data.totalCount}건)`;
              statusBadge.className = 'px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono flex items-center gap-1.5';
            }
          }, 3000);
        }
      } else {
        if (statusBadge && !statusBadge.classList.contains('animate-bounce')) {
          statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 🟢 라이브 구글 시트 연결됨 (${data.totalCount}건)`;
          statusBadge.className = 'px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono flex items-center gap-1.5';
        }
      }

      state.lastFetchedCount = data.totalCount;
      window.demoRenderLeaderboard();
      window.demoRenderSheetRows();
      return true;
    }
  } catch (err) {
    if (statusBadge) {
      statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-400"></span> 🔴 시트 연결 지연';
      statusBadge.className = 'px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold font-mono flex items-center gap-1.5';
    }
  }
  return false;
};

window.demoStartRankingGame = () => {
  const state = window.demoRankingState;
  if (state.isPlaying) return;

  state.isPlaying = true;
  state.timeLeft = 10;
  state.score = 0;
  state.combo = 0;

  const introView = document.getElementById('demo-rank-intro-view');
  const playView = document.getElementById('demo-rank-play-view');
  const endView = document.getElementById('demo-rank-end-view');
  const timerBadge = document.getElementById('demo-rank-timer-badge');
  const scoreBadge = document.getElementById('demo-rank-score-badge');
  const comboBadge = document.getElementById('demo-rank-combo-badge');

  if (introView) introView.classList.add('hidden');
  if (endView) endView.classList.add('hidden');
  if (playView) playView.classList.remove('hidden');

  if (timerBadge) timerBadge.textContent = '⏱️ 10초';
  if (scoreBadge) scoreBadge.textContent = '점수: 0점';
  if (comboBadge) comboBadge.textContent = '콤보 0연속!';

  if (window.playTone) window.playTone(587, 150);

  window.demoNextMathProblem();

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    if (timerBadge) {
      timerBadge.textContent = `⏱️ ${state.timeLeft}초`;
      if (state.timeLeft <= 3) {
        timerBadge.className = 'px-2.5 py-1 rounded-lg bg-rose-500/30 text-rose-300 font-mono font-bold animate-pulse';
        if (window.playTone) window.playTone(800, 60);
      } else {
        timerBadge.className = 'px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 font-mono font-bold';
      }
    }

    if (state.timeLeft <= 0) {
      window.demoEndRankingGame();
    }
  }, 1000);
};

window.demoNextMathProblem = () => {
  const state = window.demoRankingState;
  const qEl = document.getElementById('demo-rank-question');
  const optContainer = document.getElementById('demo-rank-options');
  if (!qEl || !optContainer) return;

  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  const correct = a * b;
  state.currentAns = correct;

  qEl.textContent = `${a} × ${b} = ?`;

  const choices = new Set([correct]);
  while (choices.size < 4) {
    const delta = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
    const wrong = Math.max(4, correct + delta);
    choices.add(wrong);
  }

  const shuffled = Array.from(choices).sort(() => Math.random() - 0.5);
  optContainer.innerHTML = '';

  shuffled.forEach(num => {
    const btn = document.createElement('button');
    btn.className = 'py-3 rounded-xl bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-100 font-mono font-black text-lg md:text-xl transition-all shadow-md transform active:scale-95 border border-slate-700';
    btn.textContent = num;
    btn.onclick = () => window.demoAnswerMath(num, btn);
    optContainer.appendChild(btn);
  });
};

window.demoAnswerMath = (selectedNum, btnElement) => {
  const state = window.demoRankingState;
  if (!state.isPlaying) return;

  const scoreBadge = document.getElementById('demo-rank-score-badge');
  const comboBadge = document.getElementById('demo-rank-combo-badge');

  if (selectedNum === state.currentAns) {
    state.combo++;
    const gain = 10 + (state.combo * 5);
    state.score += gain;

    if (window.playTone) window.playTone(880, 100);
    if (btnElement) {
      btnElement.classList.add('bg-emerald-600', 'text-white');
    }
  } else {
    state.combo = 0;
    if (window.playTone) window.playTone(280, 150);
    if (btnElement) {
      btnElement.classList.add('bg-rose-600', 'text-white');
    }
  }

  if (scoreBadge) scoreBadge.textContent = `점수: ${state.score}점`;
  if (comboBadge) {
    comboBadge.textContent = state.combo > 1 ? `🔥 ${state.combo}연속 콤보!` : `콤보 ${state.combo}연속!`;
    comboBadge.className = state.combo > 1 
      ? 'text-xs px-2.5 py-0.5 rounded-full bg-orange-500/30 text-orange-300 font-extrabold animate-bounce'
      : 'text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold';
  }

  setTimeout(() => {
    if (state.isPlaying) window.demoNextMathProblem();
  }, 120);
};

window.demoEndRankingGame = () => {
  const state = window.demoRankingState;
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  state.isPlaying = false;

  const playView = document.getElementById('demo-rank-play-view');
  const endView = document.getElementById('demo-rank-end-view');
  const finalScoreEl = document.getElementById('demo-rank-final-score');

  if (playView) playView.classList.add('hidden');
  if (endView) endView.classList.remove('hidden');
  if (finalScoreEl) finalScoreEl.textContent = state.score;

  if (window.playTone) {
    window.playTone(523, 150);
    setTimeout(() => window.playTone(659, 150), 150);
    setTimeout(() => window.playTone(783, 300), 300);
  }
  if (window.fireConfetti) window.fireConfetti();
};

// 점수 등록 (실제 클라우드 전송 + 시뮬레이션 지원)
window.demoSubmitRankingRecord = async () => {
  const state = window.demoRankingState;
  const nameInput = document.getElementById('demo-rank-player-name');
  const submitBtn = document.getElementById('demo-rank-submit-btn');
  const playerName = (nameInput && nameInput.value.trim()) || '참가 교사';
  const score = state.score;
  const gasUrl = window.getGasUrl();

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>전송 중...</span> ⏳';
    submitBtn.classList.add('opacity-75', 'cursor-wait');
  }

  if (gasUrl) {
    // 실제 구글 스프레드시트로 전송 (CORS 프리패스 지원)
    try {
      await fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name: playerName, score: score }),
        mode: 'no-cors'
      });
    } catch (postErr) {
      try {
        await fetch(`${gasUrl}${gasUrl.includes('?') ? '&' : '?'}name=${encodeURIComponent(playerName)}&score=${score}`, { mode: 'no-cors' });
      } catch (getErr) {
        console.warn('Fallback submit error:', getErr);
      }
    }

    if (window.playTone) window.playTone(900, 200);
    if (window.fireConfetti) window.fireConfetti();

    // 600ms 후 최신 집계 데이터 폴링
    setTimeout(() => {
      window.fetchRealRankingData();
    }, 600);

  } else {
    // 로컬 가상 시뮬레이션 처리
    window.demoSubmitLocalRankingRecord(playerName, score);
  }

  const syncStatus = document.getElementById('demo-sheet-sync-status');
  if (syncStatus) {
    syncStatus.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 🚀 구글 시트 등록 완료!';
    syncStatus.className = 'px-3 py-1 rounded-full bg-emerald-500/40 text-emerald-200 text-xs font-bold font-mono flex items-center gap-1.5 border border-emerald-400/60 animate-bounce';
  }

  setTimeout(() => {
    const endView = document.getElementById('demo-rank-end-view');
    const introView = document.getElementById('demo-rank-intro-view');
    if (endView) endView.classList.add('hidden');
    if (introView) introView.classList.remove('hidden');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>시트 전송</span> 🚀';
      submitBtn.classList.remove('opacity-75', 'cursor-wait');
    }
  }, 2000);
};

// 로컬 시뮬레이션 제출 처리
window.demoSubmitLocalRankingRecord = (playerName, score) => {
  const state = window.demoRankingState;
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  const newRowId = (state.currentSheetRows && state.currentSheetRows.length ? Math.max(...state.currentSheetRows.map(r => r.id)) : 0) + 1;
  const newRow = { id: newRowId, time: timeStr, name: playerName, score: score, isNew: true };
  state.currentSheetRows.unshift(newRow);

  state.currentLeaderboard.push({ name: playerName, score: score, time: timeStr, isNew: true });
  state.currentLeaderboard.sort((a, b) => b.score - a.score);
  state.currentLeaderboard = state.currentLeaderboard.slice(0, 5);

  const badges = ['🥇', '🥈', '🥉', '4위', '5위'];
  state.currentLeaderboard.forEach((item, idx) => {
    item.rank = idx + 1;
    item.badge = badges[idx] || `${idx + 1}위`;
  });

  window.demoRenderLeaderboard();
  window.demoRenderSheetRows();
  if (window.playTone) window.playTone(900, 200);
};

window.demoRenderLeaderboard = () => {
  const container = document.getElementById('demo-rank-leaderboard');
  if (!container) return;
  const list = window.demoRankingState.currentLeaderboard || window.demoRankingState.initialLeaderboard;

  container.innerHTML = list.map((item, idx) => {
    const highlight = item.isNew ? 'bg-amber-500/30 border border-amber-400/60 animate-pulse' : 'bg-slate-950/70 border border-slate-800';
    const textColor = idx === 0 ? 'text-amber-300 font-extrabold' : idx === 1 ? 'text-slate-200 font-bold' : idx === 2 ? 'text-amber-500 font-bold' : 'text-slate-400';
    return `
      <div class="flex items-center justify-between p-2 rounded-xl ${highlight} transition-all">
        <div class="flex items-center gap-2">
          <span class="w-6 text-center text-sm">${item.badge || (idx + 1 + '위')}</span>
          <span class="font-bold text-slate-200 truncate max-w-[90px] md:max-w-[110px]">${item.name}</span>
        </div>
        <div class="text-right">
          <span class="${textColor} text-xs md:text-sm font-black">${item.score}점</span>
          <span class="text-[10px] text-slate-500 ml-1">(${item.time})</span>
        </div>
      </div>
    `;
  }).join('');
};

window.demoRenderSheetRows = () => {
  const container = document.getElementById('demo-sheet-rows');
  if (!container) return;
  const rows = window.demoRankingState.currentSheetRows || window.demoRankingState.initialSheetRows;

  container.innerHTML = rows.slice(0, 7).map((row, idx) => {
    const isLatest = row.isNew && idx === 0;
    const rowClass = isLatest ? 'bg-emerald-950/70 text-emerald-200 font-bold animate-pulse' : 'text-slate-300 hover:bg-slate-900/50';
    return `
      <div class="grid grid-cols-4 py-1 px-1.5 transition-colors ${rowClass}">
        <span>#${row.id}</span>
        <span>${row.time}</span>
        <span class="truncate">${row.name}</span>
        <span class="text-right font-black text-amber-300">${row.score}점</span>
      </div>
    `;
  }).join('');
};

window.demoResetRankingData = () => {
  const gasUrl = window.getGasUrl();
  if (gasUrl) {
    window.fetchRealRankingData();
  } else {
    window.demoRankingState.currentLeaderboard = JSON.parse(JSON.stringify(window.demoRankingState.initialLeaderboard));
    window.demoRankingState.currentSheetRows = JSON.parse(JSON.stringify(window.demoRankingState.initialSheetRows));
    window.demoRenderLeaderboard();
    window.demoRenderSheetRows();
  }
};



// =============================================================
// INTERACTIVE MINI-APP DEMO HANDLERS (실습 1, 2, 3 라이브 예제)
// =============================================================

// Web Audio Beep Synthesizer
window.playTone = (freq = 800, duration = 150) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration / 1000);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
  } catch (e) {}
};

// -------------------------------------------------------------
// [Slide 13] Live A4 Worksheet Demo Handler
// -------------------------------------------------------------
window.demoFillWorksheetSample = () => {
  const el = (id) => document.getElementById(id);
  if (el('demo-stu-class')) el('demo-stu-class').value = '1';
  if (el('demo-stu-num')) el('demo-stu-num').value = '7';
  if (el('demo-stu-name')) el('demo-stu-name').value = '김민준';
  if (el('demo-ws-1')) el('demo-ws-1').value = '급';
  if (el('demo-ws-2')) el('demo-ws-2').value = '평평';
  if (el('demo-ws-3')) el('demo-ws-3').value = '계단식 논농사';
  if (el('demo-ws-4')) el('demo-ws-4').value = '가축(양) 목축·방목';
  if (el('demo-ws-5')) el('demo-ws-5').value = '스키장·휴양림 관광지';
  if (el('demo-ws-6')) el('demo-ws-6').value = '셰르파 활동으로 짐 운반, 숙소·음식 제공으로 소득 창출';
  if (el('demo-ws-7')) el('demo-ws-7').value = '관광객이 버린 쓰레기 몸살, 입산료 징수 및 되가져오기 정책';

  window.playTone(880, 200);
  if (window.fireConfetti) window.fireConfetti();
};

window.demoResetWorksheet = () => {
  const ids = ['demo-ws-1', 'demo-ws-2', 'demo-ws-3', 'demo-ws-4', 'demo-ws-5', 'demo-ws-6', 'demo-ws-7'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  window.playTone(440, 100);
};

window.demoPrintWorksheet = () => {
  window.playTone(660, 150);
  const w = window.open('worksheet.html', '_blank');
  if (w) {
    w.focus();
  }
};

// -------------------------------------------------------------
// [Slide 14] Live Photo Quiz Demo Handler
// -------------------------------------------------------------
window.demoQuizQuestions = [
  {
    q: "Q. 다음 그림을 그린 조선 후기 대표 풍속화가는 누구일까요?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ssireum_by_Kim_Hong-do.jpg/500px-Ssireum_by_Kim_Hong-do.jpg",
    choices: ["① 신사임당", "② 김홍도", "③ 정선", "④ 김정호"],
    answerIndex: 1,
    desc: "🎉 정답입니다! 조선 후기 서민들의 일상을 해학적으로 그린 단원 김홍도의 대표작 <씨름>입니다."
  },
  {
    q: "Q. 세종대왕 때 장영실 등이 만든 조선의 오목 해시계는 무엇일까요?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Angbuilgu_%28Sundial%29.JPG/500px-Angbuilgu_%28Sundial%29.JPG",
    choices: ["① 자격루", "② 혼천의", "③ 앙부일구", "④ 측우기"],
    answerIndex: 2,
    desc: "🎉 정답입니다! 솥 모양의 오목한 구면으로 글을 모르는 백성도 시간을 알 수 있게 동물 그림을 새긴 <앙부일구>입니다."
  }
];

window.demoQuizCurrentIndex = 0;
window.demoQuizScore = 0;

window.demoAnswerQuiz = (choiceIdx) => {
  const qObj = window.demoQuizQuestions[window.demoQuizCurrentIndex];
  const fb = document.getElementById('demo-quiz-feedback');
  const scoreEl = document.getElementById('demo-quiz-score');
  const choiceBtns = document.querySelectorAll('#demo-quiz-choices button');

  if (!qObj || !fb) return;
  fb.classList.remove('hidden');

  if (choiceIdx === qObj.answerIndex) {
    window.playTone(880, 200);
    window.demoQuizScore += 50;
    if (scoreEl) scoreEl.textContent = '점수: ' + window.demoQuizScore + '점';
    fb.innerHTML = qObj.desc;
    fb.className = 'mt-3 text-sm md:text-base font-bold text-emerald-300 bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/40';
    if (choiceBtns[choiceIdx]) {
      choiceBtns[choiceIdx].className = 'py-3 px-4 rounded-xl bg-emerald-600 text-white text-sm md:text-base font-bold transition-all text-left ring-2 ring-emerald-300';
    }
    if (window.fireConfetti) window.fireConfetti();
  } else {
    window.playTone(300, 250);
    fb.innerHTML = '🤔 <strong>오답입니다!</strong> 다시 생각해보세요. (힌트: 2번 보기)';
    fb.className = 'mt-3 text-sm md:text-base font-bold text-rose-300 bg-rose-950/60 p-3 rounded-xl border border-rose-500/40';
    if (choiceBtns[choiceIdx]) {
      choiceBtns[choiceIdx].className = 'py-3 px-4 rounded-xl bg-rose-900/60 text-rose-200 text-sm md:text-base font-bold transition-all text-left line-through';
    }
  }
};

window.demoNextQuiz = () => {
  window.demoQuizCurrentIndex = (window.demoQuizCurrentIndex + 1) % window.demoQuizQuestions.length;
  const qObj = window.demoQuizQuestions[window.demoQuizCurrentIndex];
  const qEl = document.getElementById('demo-quiz-question');
  const imgEl = document.getElementById('demo-quiz-image');
  const fb = document.getElementById('demo-quiz-feedback');
  const choicesEl = document.getElementById('demo-quiz-choices');

  if (qEl) qEl.textContent = qObj.q;
  if (imgEl) imgEl.src = qObj.img;
  if (fb) fb.classList.add('hidden');
  if (choicesEl) {
    choicesEl.innerHTML = qObj.choices.map((c, i) => `
      <button onclick="window.demoAnswerQuiz(${i})" class="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm md:text-base font-bold transition-all text-left">${c}</button>
    `).join('');
  }
};

// -------------------------------------------------------------
// [Slide 15] Live Seat Shuffler Demo Handler
// -------------------------------------------------------------
window.demoStudentNames = [
  "김민준", "이서연", "박도윤", "최지우",
  "정예준", "강하은", "조은우", "윤서아",
  "장지호", "임수아", "한시우", "오지유"
];

window.demoRenderSeatGrid = (students) => {
  const container = document.getElementById('demo-seat-grid');
  if (!container) return;
  container.innerHTML = students.map((name, idx) => {
    const isSpecial = idx === 0 || idx === 1; // Sight priority seats
    return `
      <div class="p-3 rounded-xl ${isSpecial ? 'bg-indigo-950/80 border border-indigo-500/50 ring-1 ring-indigo-400' : 'bg-slate-900/90 border border-slate-700'} text-center shadow-md">
        <span class="text-[10px] font-bold text-slate-400 block mb-0.5">${idx + 1}번 ${isSpecial ? '(시력배려)' : ''}</span>
        <span class="text-sm md:text-base font-black ${isSpecial ? 'text-indigo-300' : 'text-slate-100'}">${name}</span>
      </div>
    `;
  }).join('');
};

window.demoShuffleSeats = () => {
  window.playTone(600, 100);
  let count = 0;
  const interval = setInterval(() => {
    count++;
    const shuffled = [...window.demoStudentNames].sort(() => Math.random() - 0.5);
    window.demoRenderSeatGrid(shuffled);
    window.playTone(400 + count * 40, 50);

    if (count > 8) {
      clearInterval(interval);
      window.playTone(800, 200);
      if (window.fireConfetti) window.fireConfetti();
    }
  }, 100);
};

window.demoResetSeats = () => {
  window.demoRenderSeatGrid(window.demoStudentNames);
};
