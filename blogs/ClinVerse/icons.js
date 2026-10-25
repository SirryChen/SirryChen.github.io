/* ClinVerse icons: 24-unit grid, 1.65-unit optical stroke, rounded joins. */
const CVIconPaths={
 'copy':'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
 'search':'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 'doctor':'<path class="icon-tint" d="M3 4h8v6a4 4 0 0 1-8 0Z"/><path d="M3 4v6a4 4 0 0 0 8 0V4M3 4h2M9 4h2M7 14v2a5 5 0 0 0 10 0v-2"/><circle cx="17" cy="11" r="3"/><path d="M17 9.8v2.4M15.8 11h2.4"/>',
 'controller':'<rect class="icon-tint" x="7" y="7" width="10" height="10" rx="3"/><rect x="7" y="7" width="10" height="10" rx="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M10 12h4M12 10v4"/><circle cx="12" cy="2.5" r="1"/><circle cx="21.5" cy="12" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="2.5" cy="12" r="1"/>',
 'patient':'<path class="icon-tint" d="M2.5 20v-2a5 5 0 0 1 10 0v2Z"/><circle cx="7.5" cy="7" r="3"/><path d="M2.5 20v-2a5 5 0 0 1 10 0v2M14 4h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2l-3 2V6a2 2 0 0 1 2-2M16.5 7.5h2"/>',
 'lab':'<path class="icon-tint" d="m8 3 5 3-4 7-5-3Z"/><path d="m8 3 5 3-4 7-5-3ZM10 2l4 2M12.5 9a6 6 0 0 1 4.8 9.5M4 16h9M7 13v3M6 21h14M13 19v2M15 5l2 1"/><path d="M8 19h8"/>',
 'latent':'<ellipse class="icon-tint" cx="9" cy="5" rx="6" ry="2.5"/><ellipse cx="9" cy="5" rx="6" ry="2.5"/><path d="M3 5v10c0 1.4 2.7 2.5 6 2.5M3 10c0 1.4 2.7 2.5 6 2.5M15 5v4"/><rect class="icon-tint" x="12" y="14" width="9" height="7" rx="2"/><rect x="12" y="14" width="9" height="7" rx="2"/><path d="M14 14v-2a2.5 2.5 0 0 1 5 0v2M16.5 17v1"/>',
 'judge':'<path class="icon-tint" d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="8" y="2" width="8" height="4" rx="1.5"/><path d="m8 12 2 2 5-5M8 18h8"/>',
 'external':'<path d="M9 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M13 3h8v8M11 13 21 3"/>',
 'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>',
 'arrow-up':'<path d="M12 20V4m-6 6 6-6 6 6"/>',
 'arrow-down':'<path d="M12 4v16m-6-6 6 6 6-6"/>',
 'download':'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
 'reset':'<path d="M3 4v6h6M3.5 10a8.5 8.5 0 1 1 .8 8.2"/>',
 'play':'<path d="m8 4 12 8-12 8Z" fill="currentColor" fill-opacity=".1"/>',
 'pause':'<path d="M8 5v14M16 5v14" stroke-width="2.5"/>',
 'close':'<path d="m6 6 12 12M18 6 6 18"/>',
 'expand':'<path d="M9 3H3v6M15 3h6v6M21 15v6h-6M9 21H3v-6"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 'sort':'<path d="M8 20V4m-4 4 4-4 4 4M16 4v16m-4-4 4 4 4-4"/>',
 'sort-up':'<path d="M12 20V4m-5 5 5-5 5 5"/>',
 'sort-down':'<path d="M12 4v16m-5-5 5 5 5-5"/>',
 'report':'<path class="icon-tint" d="M5 3h10l4 4v14H5Z"/><path d="M5 3h10l4 4v14H5ZM15 3v5h4M8 12h8M8 16h5"/>',
 'check':'<path d="m5 12 4 4L19 6"/>',
 'plus':'<path d="M12 5v14M5 12h14"/>',
 'github':'<path d="M9 20c-4 1.2-4-2-5-2.5M15 22v-3.8c0-1 .1-1.6-.5-2.2 2.8-.3 5.5-1.4 5.5-6a4.7 4.7 0 0 0-1.3-3.3c.2-.8.2-2.1-.2-3.1-1.2-.3-3.4 1.2-3.4 1.2a12 12 0 0 0-6.2 0S6.7 3.3 5.5 3.6c-.4 1-.4 2.3-.2 3.1A4.7 4.7 0 0 0 4 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.4-.5 2.2V22"/>'
};
function CVIcon(name,classes=''){return `<svg class="cv-icon ${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><use href="#cv-${name}"></use></svg>`}
const sprite=document.createElementNS('http://www.w3.org/2000/svg','svg');sprite.setAttribute('class','cv-icon-definitions');sprite.setAttribute('aria-hidden','true');sprite.innerHTML='<defs>'+Object.entries(CVIconPaths).map(([name,paths])=>`<symbol id="cv-${name}" viewBox="0 0 24 24">${paths}</symbol>`).join('')+'</defs>';document.body.prepend(sprite);
document.querySelectorAll('[data-icon]').forEach(n=>{n.innerHTML=CVIcon(n.dataset.icon);n.removeAttribute('data-icon')});
