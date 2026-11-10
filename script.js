const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(el => revealObserver.observe(el));
} else {
  revealItems.forEach(el => el.classList.add('visible'));
}

const filterButtons = document.querySelectorAll('.work-filter');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  projectCards.forEach(card => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !visible);
    if (visible) requestAnimationFrame(() => card.classList.add('visible'));
  });
}));

const graphicFilterButtons = document.querySelectorAll('.graphic-filter');
const graphicCards = document.querySelectorAll('.graphic-card');
graphicFilterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.graphicFilter;
  graphicFilterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  graphicCards.forEach(card => {
    const visible = filter === 'all' || card.dataset.graphicCategory === filter;
    card.classList.toggle('is-hidden', !visible);
    if (visible) requestAnimationFrame(() => card.classList.add('visible'));
  });
}));
