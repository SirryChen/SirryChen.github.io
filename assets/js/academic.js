(() => {
  const toc = document.getElementById('article-toc');
  if (toc) {
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent;
      if (heading.tagName === 'H3') link.classList.add('toc-subheading');
      toc.appendChild(link);
    });
    if (!headings.length) toc.closest('details').hidden = true;
  }
  const links = document.querySelectorAll('.site-nav [data-section]');
  const sections = [...links].map(link => document.getElementById(link.dataset.section)).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.dataset.section === entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
})();
