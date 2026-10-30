(() => {
  // Mobile navigation toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Show a placeholder if an image fails to load
  document.querySelectorAll('.media[data-fallback]').forEach((figure) => {
    const image = figure.querySelector('img');
    if (!image) return;

    const markMissing = () => figure.classList.add('is-missing');
    if (image.complete && image.naturalWidth === 0) markMissing();
    image.addEventListener('error', markMissing, { once: true });
  });
})();
