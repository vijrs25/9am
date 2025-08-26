// Active pill on scroll (works with sticky nav)
const pills = document.querySelectorAll('.pill');
const sections = document.querySelectorAll('section[id]');

function setActive() {
  const y = window.scrollY + 130;
  sections.forEach(sec => {
    if (sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      pills.forEach(p => p.classList.remove('active'));
      const a = document.querySelector(`.pill[href="#${sec.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActive);
window.addEventListener('load', () => {
  setActive();
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Init AOS if loaded
  if (window.AOS) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      once: true,
      disable: reduce,
      duration: 600,              // base duration (overridden per-item if set)
      easing: 'ease-out-cubic',
      offset: 80 
    });
  }
});
