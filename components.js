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
        <i class="fa-solid fa-pizza-slice"></i>
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
          <i class="fa-solid fa-moon"></i>
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
          <i class="fa-solid fa-pizza-slice"></i>
        </div>
        <div class="nav-logo-text">
          <span class="footer-brand-name">Slice&amp;<span>Dice</span></span>
          <span class="nav-logo-sub" style="color:rgba(255,255,255,0.4)">Pizza &amp; Fast Food</span>
        </div>
      </a>
      <p class="footer-tagline">Chennai's favourite pizza joint since 2008. Made fresh, baked hot, delivered fast — every single time.</p>
      <div class="footer-social">
        <a href="#" aria-label="Facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="#" aria-label="WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
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
        <i class="fa-solid fa-location-dot footer-contact-icon"></i>
        <span>24 Marina Road, T. Nagar,<br>Chennai 600017, Tamil Nadu</span>
      </div>
      <div class="footer-contact-item">
        <i class="fa-solid fa-phone footer-contact-icon"></i>
        <a href="tel:+914428001234">+91 44 2800 1234</a>
      </div>
      <div class="footer-contact-item">
        <i class="fa-solid fa-envelope footer-contact-icon"></i>
        <a href="mailto:hello@sliceanddice.in">hello@sliceanddice.in</a>
      </div>
      <div class="footer-contact-item">
        <i class="fa-solid fa-clock footer-contact-icon"></i>
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
  const sunIcon  = `<i class="fa-solid fa-sun"></i>`;
  const moonIcon = `<i class="fa-solid fa-moon"></i>`;
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

/* ─── NAV SCROLL EFFECT ─── */
(function navScroll() {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const nav = document.getElementById('site-nav');

    if (nav) {
      nav.classList.toggle('scrolled', currentScrollY > 20);
    }
    // auth-top-controls and floating-top-controls always stay visible
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
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
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
