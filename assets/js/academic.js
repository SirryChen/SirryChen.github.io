(() => {
  function buildContents() {
    const toc = document.getElementById('article-toc');
    if (!toc) return;
    const headings = [...document.querySelectorAll('#main h1, #main h2, #main h3, #main h4, #main h5, #main h6')];
    const levels = [...new Set(headings.map(heading => Number(heading.tagName.slice(1))))].sort((a, b) => a - b);
    const emphasizedLevels = levels.slice(0, 2);
    const usedIds = new Set([...document.querySelectorAll('[id]')].map(element => element.id));
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const base = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-') || `section-${index + 1}`;
        let id = base;
        let suffix = 2;
        while (usedIds.has(id)) id = `${base}-${suffix++}`;
        heading.id = id;
        usedIds.add(id);
      }
      const level = Number(heading.tagName.slice(1));
      const link = document.createElement('a');
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent;
      link.style.marginLeft = `${(level - 1) * 10}px`;
      if (emphasizedLevels.includes(level)) link.classList.add('toc-bold');
      toc.appendChild(link);
    });
    if (!headings.length) toc.closest('aside').hidden = true;
  }
  buildContents();
  const root = document.documentElement;
  const header = document.querySelector('.masthead');
  const mobile = matchMedia('(max-width: 760px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const menus = [...document.querySelectorAll('.profile-menu, .contents-menu')];
  const updateHeaderHeight = () => {
    if (header) root.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  };
  updateHeaderHeight();
  if (header && 'ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(header);
  else window.addEventListener('resize', updateHeaderHeight);
  const updateMenus = () => menus.forEach(menu => { menu.open = !mobile.matches; });
  updateMenus();
  mobile.addEventListener('change', updateMenus);
  document.getElementById('article-toc')?.addEventListener('click', event => {
    if (mobile.matches && event.target.closest('a')) menus.forEach(menu => { menu.open = false; });
  });

  const next = document.getElementById('next-page');
  const normalizePath = path => path.replace(/index\.html$/, '');
  const storageKey = 'sirry-page-slide';
  const nativeTransitions = 'CSSViewTransitionRule' in window;
  try {
    const pendingPath = sessionStorage.getItem(storageKey);
    sessionStorage.removeItem(storageKey);
    if (pendingPath === normalizePath(location.pathname)) {
      window.scrollTo(0, 0);
      if (!nativeTransitions && !reducedMotion.matches) {
        root.classList.add('page-entering');
        setTimeout(() => root.classList.remove('page-entering'), 450);
      }
    }
  } catch { /* Ordinary page navigation also works when storage is unavailable. */ }
  if (!next) return;

  let timer = null;
  let navigating = false;
  let downwardIntent = false;
  let intentUntil = 0;
  let touchY = null;
  const atBottom = () => Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 3;
  const mediaPlaying = () => [...document.querySelectorAll('audio, video')].some(media => !media.paused && !media.ended);
  const cancelPending = () => {
    clearTimeout(timer);
    timer = null;
    downwardIntent = false;
    intentUntil = 0;
    root.classList.remove('page-switch-pending');
  };
  const isLocalScroll = target => {
    if (!(target instanceof Element)) return false;
    if (target.closest('aside, .site-nav, input, textarea, select, button, audio, video, iframe, [contenteditable="true"]')) return true;
    for (let node = target; node && node !== document.body; node = node.parentElement) {
      if (node.scrollHeight > node.clientHeight + 1 && /^(auto|scroll)$/.test(getComputedStyle(node).overflowY)) return true;
    }
    return false;
  };
  const advance = () => {
    if (navigating || !downwardIntent || Date.now() > intentUntil || !atBottom() || mediaPlaying() || document.hidden) {
      cancelPending();
      return;
    }
    navigating = true;
    root.classList.remove('page-switch-pending');
    try { sessionStorage.setItem(storageKey, normalizePath(new URL(next.href).pathname)); } catch { /* Optional animation state. */ }
    const go = () => window.location.assign(next.href);
    if (nativeTransitions || reducedMotion.matches) go();
    else {
      root.classList.add('page-leaving');
      setTimeout(go, 240);
    }
  };
  const maybeAdvance = () => {
    if (!downwardIntent || Date.now() > intentUntil || navigating || !atBottom() || mediaPlaying() || document.hidden) {
      clearTimeout(timer);
      timer = null;
      root.classList.remove('page-switch-pending');
      return;
    }
    if (timer !== null) return;
    root.classList.add('page-switch-pending');
    timer = setTimeout(advance, 800);
  };
  const noteDirection = down => {
    if (!down) cancelPending();
    else {
      downwardIntent = true;
      intentUntil = Date.now() + 2500;
      maybeAdvance();
    }
  };
  window.addEventListener('wheel', event => {
    if (isLocalScroll(event.target) || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.deltaY === 0) { cancelPending(); return; }
    noteDirection(event.deltaY > 0);
  }, { passive: true });
  window.addEventListener('scroll', () => {
    if (!atBottom()) {
      clearTimeout(timer);
      timer = null;
      root.classList.remove('page-switch-pending');
    } else maybeAdvance();
  }, { passive: true });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      cancelPending();
      if (mobile.matches) menus.forEach(menu => { menu.open = false; });
      return;
    }
    if (event.defaultPrevented || isLocalScroll(event.target) || event.ctrlKey || event.metaKey || event.altKey) return;
    if (['ArrowDown', 'PageDown', 'End'].includes(event.key) || (event.key === ' ' && !event.shiftKey)) noteDirection(true);
    else if (['ArrowUp', 'PageUp', 'Home'].includes(event.key) || (event.key === ' ' && event.shiftKey)) noteDirection(false);
  });
  window.addEventListener('touchstart', event => {
    touchY = event.touches.length === 1 && !isLocalScroll(event.target) ? event.touches[0].clientY : null;
  }, { passive: true });
  window.addEventListener('touchmove', event => {
    if (touchY === null || event.touches.length !== 1) return;
    const delta = touchY - event.touches[0].clientY;
    if (Math.abs(delta) > 8) {
      noteDirection(delta > 0);
      touchY = event.touches[0].clientY;
    }
  }, { passive: true });
  document.addEventListener('pointerdown', cancelPending, { passive: true });
  document.addEventListener('click', cancelPending);
  window.addEventListener('hashchange', cancelPending);
  document.addEventListener('visibilitychange', cancelPending);
  document.addEventListener('play', cancelPending, true);
  window.addEventListener('pageshow', () => {
    navigating = false;
    cancelPending();
    root.classList.remove('page-leaving');
  });
})();
