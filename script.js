// Simple mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('main-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    // toggle visual nav for small screens
    if (!expanded) {
      nav.style.display = 'block';
    } else {
      nav.style.display = '';
    }
  });

  // Close nav when clicking a link (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.innerWidth < 640) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.style.display = '';
    }
  });
});