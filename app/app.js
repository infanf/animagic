// AnimagiC 2026 Messe-App
(() => {
  'use strict';

  // ── State ─────────────────────────────────────────────────────────
  const state = {
    day: localStorage.getItem('am26.day') || 'fr',
    room: 'all',
    cat: 'all',
    search: '',
    premiereOnly: false,
    favs: new Set(JSON.parse(localStorage.getItem('am26.favs') || '[]')),
  };

  const $ = (sel) => document.querySelector(sel);
  const dayById = (id) => DAYS.find((d) => d.id === id);

  // Zeiten nach 0 Uhr gehören logisch zum Vortag → für Sortierung +24h
  const tMin = (t) => {
    const [h, m] = t.split(':').map(Number);
    return (h < 6 ? h + 24 : h) * 60 + m;
  };

  const saveFavs = () => {
    localStorage.setItem('am26.favs', JSON.stringify([...state.favs]));
    updateBadge();
  };

  // Alternativtermine: gleicher Titel + gleicher Untertitel = derselbe Programmpunkt
  const altEvents = (ev) =>
    EVENTS.filter((e) => e.id !== ev.id && e.title === ev.title && (e.sub || '') === (ev.sub || ''))
      .sort((a, b) => DAYS.findIndex((d) => d.id === a.day) - DAYS.findIndex((d) => d.id === b.day) || tMin(a.start) - tMin(b.start));

  // ── Filter-Selects füllen ─────────────────────────────────────────
  function initFilters() {
    const roomSel = $('#filter-room');
    roomSel.innerHTML =
      '<option value="all">Alle Räume</option>' +
      Object.entries(ROOMS).map(([id, r]) => `<option value="${id}">${r.name}</option>`).join('');
    const catSel = $('#filter-cat');
    catSel.innerHTML =
      '<option value="all">Alle Kategorien</option>' +
      Object.entries(CATEGORIES).map(([id, c]) => `<option value="${id}">${c.label}</option>`).join('');

    roomSel.addEventListener('change', () => { state.room = roomSel.value; renderSchedule(); });
    catSel.addEventListener('change', () => { state.cat = catSel.value; renderSchedule(); });
    $('#filter-search').addEventListener('input', (e) => { state.search = e.target.value.trim().toLowerCase(); renderSchedule(); });
    $('#filter-premiere').addEventListener('change', (e) => { state.premiereOnly = e.target.checked; renderSchedule(); });
  }

  // ── Day-Tabs ──────────────────────────────────────────────────────
  function renderDayTabs() {
    $('#day-tabs').innerHTML = DAYS.map((d) => `
      <button class="day-tab ${state.day === d.id ? 'active' : ''}" data-day="${d.id}" role="tab">
        ${d.label}<span class="d-date">${d.date}</span>
      </button>`).join('');
    document.querySelectorAll('.day-tab').forEach((btn) =>
      btn.addEventListener('click', () => {
        state.day = btn.dataset.day;
        localStorage.setItem('am26.day', state.day);
        renderDayTabs();
        renderSchedule();
      })
    );
  }

  // ── Event-Karte ───────────────────────────────────────────────────
  function eventCard(ev, { showDay = false, conflict = false } = {}) {
    const cat = CATEGORIES[ev.cat];
    const room = ROOMS[ev.room];
    const fav = state.favs.has(ev.id);
    const altCount = altEvents(ev).length;
    return `
      <div class="event-card ${conflict ? 'conflict' : ''}" data-id="${ev.id}" style="--cat-color:${cat.color}">
        <div class="ev-time"><b>${ev.start}</b>${ev.end ? '– ' + ev.end : ''}</div>
        <div class="ev-body">
          <div class="ev-title">${ev.title}</div>
          ${ev.sub ? `<div class="ev-sub">${ev.sub}</div>` : ''}
          <div class="ev-tags">
            <span class="tag cat">${cat.label}</span>
            <span class="tag">${ev.place || room.name}</span>
            ${ev.premiere ? `<span class="tag premiere">${ev.premiere}</span>` : ''}
            ${ev.meta ? `<span class="tag">${ev.meta}</span>` : ''}
            ${altCount ? `<span class="tag alt">↻ ${altCount + 1} Termine</span>` : ''}
            ${showDay ? `<span class="tag">${dayById(ev.day).label}</span>` : ''}
          </div>
        </div>
        <button class="ev-fav ${fav ? 'active' : ''}" data-fav="${ev.id}" aria-label="Zu meinem Plan">${fav ? '★' : '☆'}</button>
      </div>`;
  }

  function bindCards(container) {
    container.querySelectorAll('.ev-fav').forEach((btn) =>
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFav(btn.dataset.fav);
      })
    );
    container.querySelectorAll('.event-card').forEach((card) =>
      card.addEventListener('click', () => openModal(card.dataset.id))
    );
  }

  function toggleFav(id) {
    state.favs.has(id) ? state.favs.delete(id) : state.favs.add(id);
    saveFavs();
    renderSchedule();
    renderMyPlan();
    // Modal-Button aktualisieren, falls offen
    const modalBtn = $('#modal .md-fav');
    if (modalBtn && modalBtn.dataset.id === id) updateModalFavBtn(modalBtn, id);
  }

  // ── Zeitplan ──────────────────────────────────────────────────────
  function filteredEvents() {
    return EVENTS.filter((ev) => {
      if (ev.day !== state.day) return false;
      if (state.room !== 'all' && ev.room !== state.room) return false;
      if (state.cat !== 'all' && ev.cat !== state.cat) return false;
      if (state.premiereOnly && !ev.premiere) return false;
      if (state.search) {
        const hay = `${ev.title} ${ev.sub || ''} ${ROOMS[ev.room].name} ${ev.premiere || ''}`.toLowerCase();
        if (!hay.includes(state.search)) return false;
      }
      return true;
    }).sort((a, b) => tMin(a.start) - tMin(b.start));
  }

  function renderSchedule() {
    const list = $('#event-list');
    const evs = filteredEvents();
    $('#filter-meta').textContent = `${evs.length} Programmpunkt${evs.length === 1 ? '' : 'e'} am ${dayById(state.day).label}`;
    if (!evs.length) {
      list.innerHTML = '<div class="empty">Keine Events gefunden.<br>Filter anpassen oder anderen Tag wählen.</div>';
      return;
    }
    // Nach Startzeit gruppieren
    let html = '';
    let lastTime = null;
    for (const ev of evs) {
      if (ev.start !== lastTime) {
        html += `<div class="time-label">${ev.start} Uhr</div>`;
        lastTime = ev.start;
      }
      html += eventCard(ev);
    }
    list.innerHTML = html;
    bindCards(list);
  }

  // ── Mein Plan ─────────────────────────────────────────────────────
  function renderMyPlan() {
    const wrap = $('#myplan-list');
    const favEvents = EVENTS.filter((ev) => state.favs.has(ev.id));
    if (!favEvents.length) {
      wrap.innerHTML = '<div class="empty">Noch keine Events gespeichert.<br>Markiere Programmpunkte im Zeitplan mit ☆.</div>';
      return;
    }
    let html = '';
    let anyConflict = false;
    for (const day of DAYS) {
      const dayEvs = favEvents.filter((e) => e.day === day.id).sort((a, b) => tMin(a.start) - tMin(b.start));
      if (!dayEvs.length) continue;
      html += `<div class="myplan-day"><h3>${day.label}, ${day.date}2026</h3>`;
      for (const ev of dayEvs) {
        const conflict = dayEvs.some((other) => other !== ev && overlaps(ev, other));
        if (conflict) anyConflict = true;
        html += eventCard(ev, { conflict });
      }
      html += '</div>';
    }
    const conflictNote = anyConflict
      ? '<p class="conflict-note">⚠️ Rot markierte Events überschneiden sich zeitlich.</p>'
      : '';
    wrap.innerHTML = conflictNote + html;
    bindCards(wrap);
  }

  const overlaps = (a, b) =>
    a.end && b.end && tMin(a.start) < tMin(b.end) && tMin(b.start) < tMin(a.end);

  function updateBadge() {
    const badge = $('#myplan-badge');
    badge.textContent = state.favs.size;
    badge.hidden = state.favs.size === 0;
  }

  // ── FAQ ───────────────────────────────────────────────────────────
  function renderFAQ() {
    $('#faq-list').innerHTML = FAQ.map((f, i) => `
      <div class="faq-item">
        <button class="faq-q" data-i="${i}">${f.q}</button>
        <div class="faq-a">${f.a}</div>
      </div>`).join('');
    document.querySelectorAll('.faq-q').forEach((btn) =>
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'))
    );
  }

  // ── Modal ─────────────────────────────────────────────────────────
  function updateModalFavBtn(btn, id) {
    const saved = state.favs.has(id);
    btn.classList.toggle('saved', saved);
    btn.textContent = saved ? '★ In meinem Plan – entfernen' : '☆ Zu meinem Plan hinzufügen';
  }

  function openModal(id) {
    const ev = EVENTS.find((e) => e.id === id);
    if (!ev) return;
    const cat = CATEGORIES[ev.cat];
    const room = ROOMS[ev.room];
    const day = dayById(ev.day);
    const desc = ev.slug && DETAILS[ev.slug] ? DETAILS[ev.slug] : '';
    const admission = HALL_ADMISSION[ev.room] ? `Saaleinlass: ${HALL_ADMISSION[ev.room][ev.day]} Uhr · ` : '';
    const alts = altEvents(ev);
    const altsHtml = alts.length
      ? `<div class="md-alts"><div class="md-alts-title">↻ Weitere Termine</div>` +
        alts.map((a) => `
          <button class="md-alt" data-alt="${a.id}">
            <b>${dayById(a.day).label}, ${a.start}${a.end ? ' – ' + a.end : ''} Uhr</b>
            <span>${a.place || ROOMS[a.room].name}${a.premiere ? ' · ' + a.premiere : ''}</span>
          </button>`).join('') +
        `</div>`
      : '';
    $('#modal-content').innerHTML = `
      <div class="md-when">${day.label}, ${day.date}2026 · ${ev.start}${ev.end ? ' – ' + ev.end : ''} Uhr</div>
      <div class="md-title">${ev.title}</div>
      <div class="md-room">📍 ${ev.place || room.name}${!ev.place && room.level ? ' · ' + room.level : ''}</div>
      <div class="md-tags">
        <span class="tag cat" style="--cat-color:${cat.color};background:${cat.color}">${cat.label}</span>
        ${ev.premiere ? `<span class="tag premiere">${ev.premiere}</span>` : ''}
      </div>
      ${ev.sub ? `<div class="md-sub">${ev.sub}</div>` : ''}
      ${desc ? `<div class="md-desc">${desc}</div>` : ''}
      ${ev.meta || admission ? `<div class="md-meta">${admission}${ev.meta || ''}</div>` : ''}
      ${altsHtml}
      <button class="md-fav" data-id="${ev.id}"></button>
    `;
    const favBtn = $('#modal .md-fav');
    updateModalFavBtn(favBtn, ev.id);
    favBtn.addEventListener('click', () => toggleFav(ev.id));
    document.querySelectorAll('#modal .md-alt').forEach((btn) =>
      btn.addEventListener('click', () => openModal(btn.dataset.alt))
    );
    $('#modal').hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('#modal').hidden = true;
    document.body.style.overflow = '';
  }
  $('#modal .modal-close').addEventListener('click', closeModal);
  $('#modal .modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // ── Navigation ────────────────────────────────────────────────────
  document.querySelectorAll('.nav-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b === btn));
      const view = btn.dataset.view;
      $('#view-schedule').hidden = view !== 'schedule';
      $('#view-myplan').hidden = view !== 'myplan';
      $('#view-faq').hidden = view !== 'faq';
      $('#view-imprint').hidden = true;
      if (view === 'myplan') renderMyPlan();
      window.scrollTo(0, 0);
    })
  );

  // Impressum
  $('#open-imprint').addEventListener('click', () => {
    $('#view-faq').hidden = true;
    $('#view-imprint').hidden = false;
    window.scrollTo(0, 0);
  });
  $('#close-imprint').addEventListener('click', () => {
    $('#view-imprint').hidden = true;
    $('#view-faq').hidden = false;
    window.scrollTo(0, 0);
  });

  // ── Service Worker ────────────────────────────────────────────────
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // ── Install-Prompt (beforeinstallprompt, Chromium) ────────────────
  const banner = $('#install-banner');
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  let deferredPrompt = null;

  function showBanner(hint) {
    if (isStandalone || localStorage.getItem('am26.installDismissed')) return;
    if (hint) $('#install-hint').textContent = hint;
    banner.hidden = false;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showBanner();
  });

  $('#install-btn').addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (outcome === 'accepted') banner.hidden = true;
    } else {
      // iOS/Safari: kein Prompt-API – Anleitung zeigen
      $('#install-hint').textContent = 'Teilen-Menü öffnen und „Zum Home-Bildschirm“ wählen';
    }
  });

  $('#install-dismiss').addEventListener('click', () => {
    banner.hidden = true;
    localStorage.setItem('am26.installDismissed', '1');
  });

  window.addEventListener('appinstalled', () => { banner.hidden = true; });

  // iOS Safari kennt beforeinstallprompt nicht – dezenter Hinweis nach kurzer Nutzung
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIos && !isStandalone) {
    setTimeout(() => showBanner('Teilen-Menü öffnen und „Zum Home-Bildschirm“ wählen'), 4000);
  }

  // ── Init ──────────────────────────────────────────────────────────
  initFilters();
  renderDayTabs();
  renderSchedule();
  renderMyPlan();
  renderFAQ();
  updateBadge();
})();
