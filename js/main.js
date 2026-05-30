document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initTabs();
  initNewsletter();
  initAccessibility();
  initKidsVideo();
});

function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  document.querySelectorAll('.nav-dropdown > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        btn.parentElement.classList.toggle('open');
      }
    });
  });
}

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels = tabGroup.parentElement.querySelectorAll('.tab-panel');

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}

function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Thank you for subscribing! We\'ll keep you updated on Herndon Home news and events.');
        input.value = '';
      }
    });
  });
}

function initAccessibility() {
  const toolbar = document.querySelector('.a11y-toolbar');
  if (!toolbar) return;

  toolbar.querySelector('[data-action="font-up"]')?.addEventListener('click', () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = Math.min(current + 2, 22) + 'px';
  });

  toolbar.querySelector('[data-action="font-down"]')?.addEventListener('click', () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = Math.max(current - 2, 14) + 'px';
  });

  toolbar.querySelector('[data-action="contrast"]')?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    if (document.body.classList.contains('high-contrast')) {
      document.body.style.filter = 'contrast(1.2)';
    } else {
      document.body.style.filter = '';
    }
  });
}

function initKidsVideo() {
  const video = document.querySelector('.kids-video-wrap video');
  const placeholder = document.querySelector('.kids-video-placeholder');
  const playBtn = document.querySelector('.kids-video-placeholder .play-btn');

  if (playBtn && video) {
    playBtn.addEventListener('click', () => {
      if (placeholder) placeholder.style.display = 'none';
      video.style.display = 'block';
      video.play();
    });
  }
}
