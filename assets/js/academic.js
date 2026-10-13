(() => {
  const toc = document.getElementById('article-toc');
  if (!toc) return;
  const headings = [...document.querySelectorAll('#main h1, #main h2, #main h3, #main h4, #main h5, #main h6')];
  const levels = [...new Set(headings.map(heading => Number(heading.tagName.slice(1))))].sort((a, b) => a - b);
  const emphasizedLevels = levels.slice(0, 2);
  const usedIds = new Set([...document.querySelectorAll('[id]')].map(element => element.id));
  headings.forEach((heading, index) => {
    if (!heading.id) {
      const base = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-') || `section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (usedIds.has(id)) id = `${base}-${suffix++}`;
      heading.id = id;
      usedIds.add(id);
    }
    const level = Number(heading.tagName.slice(1));
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    link.style.marginLeft = `${(level - 1) * 10}px`;
    if (emphasizedLevels.includes(level)) link.classList.add('toc-bold');
    toc.appendChild(link);
  });
  if (!headings.length) toc.closest('aside').hidden = true;
})();
