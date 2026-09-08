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

    // Update Modals & Teacher Drawer
    this.updateAgentDrawerContent(currentSlide);
    this.updatePresenterContent(currentSlide);
    this.renderTeacherDrawerContent(currentSlide);
    this.updateOverviewActiveState();
  }

  handleSlideSpecificInit() {
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
// PDF Export Handler (전체 18개 슬라이드 일괄 인쇄/PDF 저장)
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
