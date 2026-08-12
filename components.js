/* =====================================================
   Slice & Dice — Local Pizza & Fast Food Restaurant
   components.js — Shared Nav, Footer, Interactions
   ===================================================== */

/* ─── NAV HTML ─── */
const NAV_HTML = `
<nav class="main-nav" id="site-nav" aria-label="Main Navigation">
  <div class="nav-inner">
    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="Slice & Dice Home">
      <div class="nav-logo-icon">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="26" fill="white" opacity="0.15"/>
          <path d="M32 8 C16 10 8 22 8 32 L32 32 Z" fill="white" opacity="0.9"/>
          <path d="M32 8 C48 10 56 22 56 32 L32 32 Z" fill="white" opacity="0.6"/>
          <path d="M8 32 C10 48 22 56 32 56 L32 32 Z" fill="white" opacity="0.4"/>
          <path d="M32 56 C48 54 56 42 56 32 L32 32 Z" fill="white" opacity="0.25"/>
          <circle cx="22" cy="22" r="3" fill="white" opacity="0.95"/>
          <circle cx="42" cy="20" r="2" fill="white" opacity="0.95"/>
          <circle cx="28" cy="16" r="2.5" fill="white" opacity="0.95"/>
          <circle cx="44" cy="34" r="2" fill="white" opacity="0.7"/>
        </svg>
      </div>
      <div class="nav-logo-text">
        <span class="nav-logo-name">Slice&amp;<span>Dice</span></span>
        <span class="nav-logo-sub">Pizza &amp; Fast Food</span>
      </div>
    </a>

    <!-- Desktop Links -->
    <ul class="nav-links">
      <li><a href="index.html" data-page="index">Home 1</a></li>
      <li><a href="home2.html" data-page="home2">Home 2</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="menu.html" data-page="menu">Menu</a></li>
      <li><a href="services.html" data-page="services">Services</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>

    <!-- Actions -->
    <div class="nav-actions">
      <!-- RTL toggle -->
      <button id="nav-dir-btn" onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle text direction">LTR</button>
      <!-- Dark mode toggle -->
      <button onclick="toggleTheme()" class="nav-icon-btn" aria-label="Toggle theme" id="nav-theme-btn">
        <span id="nav-theme-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </span>
      </button>
      <!-- Primary CTA -->
      <a href="login.html" class="nav-cta" id="nav-signin-btn">Sign In</a>
      <!-- Hamburger -->
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile drawer -->
<div class="nav-mobile-drawer" id="nav-drawer" aria-hidden="true">
  <div class="nav-mobile-inner">
    <a href="index.html"    data-page="index">Home 1</a>
    <a href="home2.html"   data-page="home2">Home 2</a>
    <a href="about.html"   data-page="about">About Us</a>
    <a href="menu.html"    data-page="menu">Menu</a>
    <a href="services.html" data-page="services">Services</a>
    <a href="contact.html"  data-page="contact">Contact</a>
    <a href="login.html" class="nav-mobile-cta">Sign In</a>
  </div>
</div>
`;

/* ─── FOOTER HTML ─── */
const FOOTER_HTML = `
<footer class="site-footer" aria-label="Site Footer">
  <div class="footer-grid">
    <!-- Brand -->
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" aria-label="Slice & Dice Home" style="width:fit-content;">
        <div class="nav-logo-icon">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="26" fill="white" opacity="0.15"/>
            <path d="M32 8 C16 10 8 22 8 32 L32 32 Z" fill="white" opacity="0.9"/>
            <path d="M32 8 C48 10 56 22 56 32 L32 32 Z" fill="white" opacity="0.6"/>
            <path d="M8 32 C10 48 22 56 32 56 L32 32 Z" fill="white" opacity="0.4"/>
            <circle cx="22" cy="22" r="3" fill="white" opacity="0.95"/>
            <circle cx="42" cy="20" r="2" fill="white" opacity="0.95"/>
          </svg>
        </div>
        <div class="nav-logo-text">
          <span class="footer-brand-name">Slice&amp;<span>Dice</span></span>
          <span class="nav-logo-sub" style="color:rgba(255,255,255,0.4)">Pizza &amp; Fast Food</span>
        </div>
      </a>
      <p class="footer-tagline">Chennai's favourite pizza joint since 2008. Made fresh, baked hot, delivered fast — every single time.</p>
      <div class="footer-social">
        <a href="#" aria-label="Facebook">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
        </a>
        <a href="#" aria-label="WhatsApp">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home 1</a></li>
        <li><a href="home2.html">Home 2</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="coming-soon.html">Coming Soon</a></li>
        <li><a href="404.html">404 Page</a></li>
      </ul>
    </div>

    <!-- Menu Categories -->
    <div class="footer-col">
      <h4>Our Menu</h4>
      <ul>
        <li><a href="menu.html">Pizzas</a></li>
        <li><a href="menu.html">Burgers</a></li>
        <li><a href="menu.html">Fast Bites</a></li>
        <li><a href="menu.html">Drinks</a></li>
        <li><a href="menu.html">Desserts</a></li>
        <li><a href="menu.html">Combo Deals</a></li>
        <li><a href="coming-soon.html">New Arrivals</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div class="footer-col">
      <h4>Contact Us</h4>
      <div class="footer-contact-item">
        <svg class="footer-contact-icon" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>24 Marina Road, T. Nagar,<br>Chennai 600017, Tamil Nadu</span>
      </div>
      <div class="footer-contact-item">
        <svg class="footer-contact-icon" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.13.96.34 1.9.65 2.82a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.92.31 1.86.52 2.82.65A2 2 0 0 1 21.72 17z"/></svg>
        <a href="tel:+914428001234">+91 44 2800 1234</a>
      </div>
      <div class="footer-contact-item">
        <svg class="footer-contact-icon" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:hello@sliceanddice.in">hello@sliceanddice.in</a>
      </div>
      <div class="footer-contact-item">
        <svg class="footer-contact-icon" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Mon–Sun: 11AM–11PM</span>
      </div>
    </div>
  </div>

  <!-- Bottom -->
  <div class="footer-bottom">
    <p>© <span id="footer-year"></span> Slice &amp; Dice Pizza &amp; Fast Food. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="coming-soon.html">Privacy Policy</a>
      <a href="coming-soon.html">Terms of Service</a>
      <a href="404.html">404 Page</a>
      <a href="coming-soon.html">Coming Soon</a>
    </div>
  </div>
</footer>
`;

/* ─── INJECT NAV + FOOTER ─── */
(function injectShared() {
  const navEl = document.getElementById('main-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const footerEl = document.getElementById('main-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Year
  const fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();
})();

/* ─── THEME TOGGLE ─── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('sd_theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const sunIcon  = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  document.querySelectorAll('#nav-theme-icon, #login-theme-icon, #signup-theme-icon, #err-theme-icon, #cs-theme-icon').forEach(el => {
    if (el) el.innerHTML = isDark ? sunIcon : moonIcon;
  });
}

/* ─── RTL TOGGLE ─── */
function toggleDir() {
  const html = document.documentElement;
  const isRTL = html.getAttribute('dir') === 'rtl';
  const newDir = isRTL ? 'ltr' : 'rtl';
  html.setAttribute('dir', newDir);
  localStorage.setItem('sd_dir', newDir);
  const newLabel = newDir.toUpperCase();
  document.querySelectorAll('#nav-dir-btn, #login-dir-btn, #signup-dir-btn, #err-dir-btn, #cs-dir-btn').forEach(el => {
    if (el) el.textContent = newLabel;
  });
}

/* ─── LOAD SAVED THEME + DIR ─── */
(function applySavedPrefs() {
  const savedTheme = localStorage.getItem('sd_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  if (isDark) document.documentElement.classList.add('dark');

  const savedDir = localStorage.getItem('sd_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  setTimeout(() => {
    const label = savedDir.toUpperCase();
    document.querySelectorAll('#nav-dir-btn, #login-dir-btn, #signup-dir-btn, #err-dir-btn, #cs-dir-btn').forEach(el => {
      if (el) el.textContent = label;
    });
  }, 50);

  // Update icons after DOM ready
  setTimeout(() => updateThemeIcons(isDark), 50);
})();

/* ─── ACTIVE NAV LINK ─── */
(function setActiveLink() {
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('[data-page]').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === page || (page === '' && linkPage === 'index')) {
      link.classList.add('active');
    }
  });
})();

/* ─── MOBILE DRAWER TOGGLE ─── */
(function setupHamburger() {
  document.addEventListener('click', function(e) {
    const hamburger = document.getElementById('nav-hamburger');
    const drawer    = document.getElementById('nav-drawer');
    if (!hamburger || !drawer) return;

    if (hamburger.contains(e.target)) {
      const isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      drawer.setAttribute('aria-hidden', !isOpen);
    } else if (!drawer.contains(e.target)) {
      drawer.classList.remove('open');
      hamburger && hamburger.classList.remove('open');
      hamburger && hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ─── NAV SCROLL EFFECT & HIDE ON SCROLL DOWN ─── */
(function navScroll() {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const nav = document.getElementById('site-nav');
    const floatControls = document.querySelectorAll('.auth-top-controls, .floating-top-controls');

    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 15;

    if (nav) {
      nav.classList.toggle('scrolled', currentScrollY > 20);
    }

    floatControls.forEach(el => {
      if (el) el.classList.toggle('controls-hidden', isScrollingDown);
    });

    lastScrollY = currentScrollY;
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
})();

/* ─── BACK TO TOP ─── */
(function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ─── SCROLL REVEAL (IntersectionObserver) ─── */
(function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const staggerParents = document.querySelectorAll('.stagger-container');
  staggerParents.forEach(parent => {
    const items = parent.querySelectorAll('.stagger-item');
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.09}s`;
      io.observe(item);
    });
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));
})();

/* ─── ANIMATED COUNTERS ─── */
(function setupCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target  = parseInt(el.getAttribute('data-count'), 10);
      const suffix  = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const start = performance.now();
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(easeOut(p) * target).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
})();

/* ─── TAB SWITCHER ─── */
(function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      const container = btn.closest('.tab-bar');
      const allTabs = container ? container.querySelectorAll('.tab-btn') : [btn];
      allTabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const root = btn.closest('section') || document;
      const allContent = root.querySelectorAll('.tab-content');

      if (targetId === 'tab-all') {
        allContent.forEach(c => c.classList.add('active'));
      } else {
        allContent.forEach(c => c.classList.remove('active'));
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');
      }
    });
  });
})();

/* ─── ACCORDION ─── */
function toggleAccordion(btn) {
  const content = btn.nextElementSibling;
  const icon    = btn.querySelector('.acc-icon');
  const isOpen  = content ? content.classList.contains('open') : false;

  if (!content) return;

  const parent = btn.closest('.faq-line') || btn.closest('.faq-list') || btn.closest('#faq') || btn.closest('section') || document;
  parent.querySelectorAll('.accordion-content.open').forEach(c => {
    c.classList.remove('open');
    const ic = c.previousElementSibling ? c.previousElementSibling.querySelector('.acc-icon') : null;
    if (ic) ic.classList.remove('rotated');
  });

  if (!isOpen) {
    content.classList.add('open');
    if (icon) icon.classList.add('rotated');
  }
}

function toggleAcc(btn) {
  toggleAccordion(btn);
}

/* ─── PASSWORD VISIBILITY TOGGLE ─── */
function togglePwd(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon  = document.getElementById(iconId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  if (icon) {
    icon.innerHTML = show
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
}

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─── */
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
