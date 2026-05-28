// DIRT ROLLOFFS - Modern interactions

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("open");
}

// Close mobile menu when resizing back to desktop
function initMobileMenuCloseOnResize() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) menu.classList.remove('open');
  });

  // Close when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('open')) return;

    const header = menu.closest('.site-header');
    if (!header) return;

    if (!header.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initScrollTop();
  initMobileMenuCloseOnResize();
});


function initScrollReveal() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const targets = document.querySelectorAll('[data-reveal], .animate');
  if (!targets.length) return;

  if (prefersReduced) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach(el => io.observe(el));
}

function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 300) btn.classList.add('show');
    else btn.classList.remove('show');
  };

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initScrollTop();
});

// ORIGINAL MOBILE MENU
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
