document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal ───────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Navbar: switch to light when leaving dark hero ──────
  const navbar  = document.getElementById('navbar');
  const hero    = document.getElementById('hero');

  const heroObserver = new IntersectionObserver(([entry]) => {
    navbar.classList.toggle('light', !entry.isIntersecting);
  }, { threshold: 0.05 });

  heroObserver.observe(hero);

  // ── Mobile nav ──────────────────────────────────────────
  const burger   = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

});
