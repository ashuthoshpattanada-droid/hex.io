/* =====================================================================
   1. TEMPLATE PRESETS DEFINITION
   ===================================================================== */
const TEMPLATES = {
    samuraiRonin: {
        id: 'samuraiRonin',
        name: 'Ronin Samurai',
        tagline: 'Crimson & gold bushido + falling maple leaves',
        accent: '#dc2626',
        cardBg: 'rgba(20, 10, 12, 0.80)',
        cardBorder: 'rgba(220, 38, 38, 0.48)',
        radius: '14px',
        font: "'Cinzel', Georgia, serif",
        particleMode: 'leaves',
        squareAvatar: true
    },
    verdantNature: {
        id: 'verdantNature',
        name: 'Verdant Forest',
        tagline: 'Emerald canopy glass + glowing fireflies',
        accent: '#10b981',
        cardBg: 'rgba(9, 22, 16, 0.76)',
        cardBorder: 'rgba(16, 185, 129, 0.42)',
        radius: '26px',
        font: "'Plus Jakarta Sans', sans-serif",
        particleMode: 'fireflies',
        squareAvatar: false
    },
    surveyCorpsAoT: {
        id: 'surveyCorpsAoT',
        name: 'Survey Corps // AoT',
        tagline: 'Wings of Freedom steel + titan steam',
        accent: '#38bdf8',
        cardBg: 'rgba(15, 20, 26, 0.82)',
        cardBorder: 'rgba(148, 163, 184, 0.45)',
        radius: '10px',
        font: "'Oswald', sans-serif",
        particleMode: 'steam',
        squareAvatar: true
    },
    obsidian: {
        id: 'obsidian',
        name: 'Obsidian Neon',
        tagline: 'Dark glassmorphism + purple glow',
        accent: '#a855f7',
        cardBg: 'rgba(18, 18, 26, 0.72)',
        cardBorder: 'rgba(168, 85, 247, 0.38)',
        radius: '24px',
        font: "'Inter', sans-serif",
        particleMode: 'constellation',
        squareAvatar: false
    },
    cyberTerminal: {
        id: 'cyberTerminal',
        name: 'Cyber Terminal',
        tagline: 'Monospace grid + matrix rain',
        accent: '#22c55e',
        cardBg: 'rgba(7, 17, 11, 0.84)',
        cardBorder: 'rgba(34, 197, 94, 0.45)',
        radius: '10px',
        font: "'JetBrains Mono', monospace",
        particleMode: 'rain',
        squareAvatar: true
    },
    crimsonValor: {
        id: 'crimsonValor',
        name: 'Crimson Tactical',
        tagline: 'Sharp HUD edges + red neon',
        accent: '#ef4444',
        cardBg: 'rgba(24, 10, 13, 0.78)',
        cardBorder: 'rgba(239, 68, 68, 0.42)',
        radius: '14px',
        font: "'Rajdhani', sans-serif",
        particleMode: 'embers',
        squareAvatar: false
    },
    frostMinimal: {
        id: 'frostMinimal',
        name: 'Arctic Frost',
        tagline: 'Ice-blue glow + soft snow',
        accent: '#38bdf8',
        cardBg: 'rgba(15, 23, 42, 0.62)',
        cardBorder: 'rgba(56, 189, 248, 0.38)',
        radius: '28px',
        font: "'Inter', sans-serif",
        particleMode: 'snow',
        squareAvatar: false
    },
    sakuraBlossom: {
        id: 'sakuraBlossom',
        name: 'Sakura Blossom',
        tagline: 'Editorial serif + drifting petals',
        accent: '#f472b6',
        cardBg: 'rgba(28, 14, 24, 0.74)',
        cardBorder: 'rgba(244, 114, 182, 0.42)',
        radius: '26px',
        font: "'Playfair Display', Georgia, serif",
        particleMode: 'petals',
        squareAvatar: false
    },
    solarGold: {
        id: 'solarGold',
        name: 'Solar Prestige',
        tagline: 'Luxury amber glass + rising embers',
        accent: '#f59e0b',
        cardBg: 'rgba(24, 18, 10, 0.78)',
        cardBorder: 'rgba(245, 158, 11, 0.42)',
        radius: '20px',
        font: "'Space Grotesk', sans-serif",
        particleMode: 'embers',
        squareAvatar: false
    },
    vaporwave: {
        id: 'vaporwave',
        name: 'Vaporwave 84',
        tagline: 'Retro synth grid + cyan/pink neon',
        accent: '#06b6d4',
        cardBg: 'rgba(20, 12, 36, 0.78)',
        cardBorder: 'rgba(236, 72, 153, 0.48)',
        radius: '6px',
        font: "'Space Grotesk', sans-serif",
        particleMode: 'grid',
        squareAvatar: true
    },
    monochromeVoid: {
        id: 'monochromeVoid',
        name: 'Monochrome Void',
        tagline: 'Ultra-clean stark white & obsidian',
        accent: '#e2e8f0',
        cardBg: 'rgba(10, 10, 12, 0.85)',
        cardBorder: 'rgba(255, 255, 255, 0.24)',
        radius: '18px',
        font: "'JetBrains Mono', monospace",
        particleMode: 'constellation',
        squareAvatar: true
    }
};

/* =====================================================================
   2. APPLICATION STATE (CLEAN EMPTY DEFAULTS)
   ===================================================================== */
const state = {
    templateId: 'samuraiRonin',
    username: '',
    displayName: '',
    avatarUrl: '',
    accentColor: '#dc2626',
    location: '',
    discordActivity: '',
    bioPhrases: [
        'your bio appears here...'
    ],
    links: [
        { label: '', value: '', icon: 'bi-link-45deg', isUrl: false }
    ],
    bgMode: 'leaves',
    isPlaying: false,
    volume: 0.45,
    trackIndex: 0,
    views: 0,
    discordSeconds: 0,
    isPublicView: false
};

/* =====================================================================
   3. TOAST & CLIPBOARD HELPERS
   ===================================================================== */
const toastEl = document.getElementById('liveToast');
const bsToast = new bootstrap.Toast(toastEl, { delay: 2300 });

function showToast(message) {
    document.getElementById('toast-text').textContent = message;
    bsToast.show();
}

function copyText(text, msg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast(msg);
    } catch (e) {
        showToast('Unable to copy automatically.');
    }
    document.body.removeChild(ta);
}

/* =====================================================================
   4. RENDER TEMPLATE GRID & APPLY THEME
   ===================================================================== */
function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    const num = parseInt(clean, 16);
    return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

function applyThemeVariables() {
    const tpl = TEMPLATES[state.templateId] || TEMPLATES.obsidian;
    const rgb = hexToRgb(state.accentColor);

    document.documentElement.style.setProperty('--accent', state.accentColor);
    document.documentElement.style.setProperty('--accent-rgb', rgb);
    document.documentElement.style.setProperty('--card-bg', tpl.cardBg);
    document.documentElement.style.setProperty('--card-border', tpl.cardBorder);
    document.documentElement.style.setProperty('--card-radius', tpl.radius);
    document.documentElement.style.setProperty('--card-font', tpl.font);

    const avatarFrame = document.getElementById('card-avatar-frame');
    const avatarImg = document.getElementById('card-avatar-img');
    if (tpl.squareAvatar) {
        avatarFrame.classList.remove('rounded-circle');
        avatarFrame.style.borderRadius = '18px';
        avatarImg.classList.remove('rounded-circle');
        avatarImg.style.borderRadius = '15px';
    } else {
        avatarFrame.classList.add('rounded-circle');
        avatarFrame.style.borderRadius = '';
        avatarImg.classList.add('rounded-circle');
        avatarImg.style.borderRadius = '';
    }

    document.getElementById('card-template-badge').textContent = tpl.name;
}

function renderTemplateGrid() {
    const grid = document.getElementById('template-grid');
    grid.innerHTML = Object.values(TEMPLATES).map(tpl => {
        const isActive = state.templateId === tpl.id;
        return `
            <div class="col-6">
                <div class="template-option p-3 h-100 ${isActive ? 'active' : ''}" onclick="selectTemplate('${tpl.id}')">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-semibold small text-white">${tpl.name}</span>
                        <span class="rounded-circle d-inline-block" style="width:11px;height:11px;background:${tpl.accent};box-shadow:0 0 8px ${tpl.accent};"></span>
                    </div>
                    <div class="text-secondary" style="font-size:0.74rem;">${tpl.tagline}</div>
                </div>
            </div>
        `;
    }).join('');
}

function selectTemplate(id) {
    const tpl = TEMPLATES[id];
    if (!tpl) return;
    state.templateId = id;
    state.accentColor = tpl.accent;
    state.bgMode = tpl.particleMode;

    document.getElementById('input-accent').value = tpl.accent;
    if (!state.avatarUrl.trim()) {
        document.getElementById('card-avatar-img').src = getDefaultAvatar();
    }
    document.getElementById('bg-mode-text').textContent =
        tpl.particleMode.charAt(0).toUpperCase() + tpl.particleMode.slice(1);

    initParticles();
    applyThemeVariables();
    renderTemplateGrid();
}

/* =====================================================================
   5. RENDER LINKS EDITOR & CARD LINKS
   ===================================================================== */
function renderLinksEditor() {
    const list = document.getElementById('links-editor-list');
    if (!state.links.length) {
        list.innerHTML = `<div class="text-secondary small font-monospace py-2 px-3 rounded-3 border border-secondary border-opacity-25">No links added yet. Click "+ Add Link" to create one.</div>`;
        return;
    }
    list.innerHTML = state.links.map((link, idx) => `
        <div class="d-flex align-items-center gap-2">
            <input type="text" class="form-control form-control-sm" style="max-width: 115px;"
                   value="${link.label}" placeholder="Platform"
                   oninput="updateLink(${idx}, 'label', this.value)">
            <input type="text" class="form-control form-control-sm font-monospace"
                   value="${link.value}" placeholder="Handle or https://..."
                   oninput="updateLink(${idx}, 'value', this.value)">
            <button type="button" class="btn btn-sm btn-outline-danger rounded-3 px-2" onclick="removeLink(${idx})" title="Remove">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `).join('');
}

function renderCardLinks() {
    const grid = document.getElementById('card-links-grid');
    const activeLinks = state.links.filter(l => l.label.trim() || l.value.trim());
    if (!activeLinks.length) {
        grid.innerHTML = `<div class="col-12"><div class="text-secondary small font-monospace py-2 px-3 rounded-3 border border-white border-opacity-10 bg-black bg-opacity-25">Add social links or gaming tags on the left</div></div>`;
        return;
    }
    grid.innerHTML = activeLinks.map((link, idx) => {
        const isLastOdd = (idx === activeLinks.length - 1) && (activeLinks.length % 2 !== 0);
        const colClass = isLastOdd ? 'col-12' : 'col-6';
        const labelText = link.label.trim() || 'Link';
        const valText = link.value.trim() || '—';
        const isUrl = valText.startsWith('http://') || valText.startsWith('https://');

        if (isUrl) {
            return `
                <div class="${colClass}">
                    <a href="${valText}" target="_blank" rel="noreferrer"
                       class="social-pill d-flex align-items-center justify-content-between px-3 py-2.5 w-100">
                        <span class="d-flex align-items-center gap-2 overflow-hidden">
                            <i class="bi ${link.icon || 'bi-link-45deg'}" style="color: var(--accent);"></i>
                            <span class="small fw-semibold text-truncate">${labelText}</span>
                        </span>
                        <i class="bi bi-box-arrow-up-right text-secondary" style="font-size:0.75rem;"></i>
                    </a>
                </div>
            `;
        }

        return `
            <div class="${colClass}">
                <button type="button" onclick="copyText('${valText.replace(/'/g, "\\'")}', 'Copied ${labelText}: ${valText.replace(/'/g, "\\'")}')"
                        class="social-pill d-flex align-items-center gap-2 px-3 py-2.5 w-100 text-start">
                    <i class="bi ${link.icon || 'bi-tag-fill'}" style="color: var(--accent);"></i>
                    <div class="overflow-hidden">
                        <div class="small fw-semibold lh-1 mb-1">${labelText}</div>
                        <div class="font-monospace text-secondary text-truncate" style="font-size:0.7rem;">${valText}</div>
                    </div>
                </button>
            </div>
        `;
    }).join('');
}

function updateLink(idx, field, val) {
    state.links[idx][field] = val;
    renderCardLinks();
}

function removeLink(idx) {
    state.links.splice(idx, 1);
    renderLinksEditor();
    renderCardLinks();
}

document.getElementById('add-link-btn').addEventListener('click', () => {
    state.links.push({ label: '', value: '', icon: 'bi-link-45deg', isUrl: false });
    renderLinksEditor();
    renderCardLinks();
});

/* =====================================================================
   6. SYNC FORM INPUTS TO LIVE PROFILE CARD
   ===================================================================== */
function getDefaultAvatar() {
    const cleanHex = state.accentColor.replace('#', '') || 'dc2626';
    const initials = (state.displayName || state.username || 'HEX').trim().slice(0, 3).toUpperCase();
    return `https://placehold.co/240x240/12121a/${cleanHex}?text=${encodeURIComponent(initials)}`;
}

function syncAllUI() {
    const cleanSlug = (state.username || '').toLowerCase().replace(/[^a-z0-9_]/g, '') || 'yourname';
    document.getElementById('card-username').textContent = `@${cleanSlug}`;
    document.getElementById('splash-handle-label').textContent = `@${cleanSlug}`;
    document.getElementById('short-url-preview').textContent = `https://hex.io/${cleanSlug}`;
    document.getElementById('card-display-name').textContent = state.displayName.trim() || 'Your Name';
    document.getElementById('card-discord-tag').textContent = `${cleanSlug}#0000`;
    document.getElementById('card-location').textContent = state.location.trim() || 'Your Location';
    document.getElementById('card-discord-activity').textContent = state.discordActivity.trim() || 'No status set';
    document.getElementById('card-avatar-img').src = state.avatarUrl.trim() || getDefaultAvatar();
    document.title = state.isPublicView
        ? `${state.displayName.trim() || cleanSlug} (@${cleanSlug}) // hex.io`
        : `hex.io // Aesthetic Link-in-Bio Studio`;

    applyThemeVariables();
    renderTemplateGrid();
    renderLinksEditor();
    renderCardLinks();
}

document.getElementById('input-username').addEventListener('input', (e) => {
    state.username = e.target.value;
    syncAllUI();
});
document.getElementById('input-display-name').addEventListener('input', (e) => {
    state.displayName = e.target.value;
    syncAllUI();
});
document.getElementById('input-avatar').addEventListener('input', (e) => {
    state.avatarUrl = e.target.value;
    document.getElementById('card-avatar-img').src = state.avatarUrl.trim() || getDefaultAvatar();
});
document.getElementById('input-accent').addEventListener('input', (e) => {
    state.accentColor = e.target.value;
    if (!state.avatarUrl.trim()) {
        document.getElementById('card-avatar-img').src = getDefaultAvatar();
    }
    applyThemeVariables();
});
document.getElementById('input-location').addEventListener('input', (e) => {
    state.location = e.target.value;
    document.getElementById('card-location').textContent = state.location.trim() || 'Your Location';
});
document.getElementById('input-discord').addEventListener('input', (e) => {
    state.discordActivity = e.target.value;
    document.getElementById('card-discord-activity').textContent = state.discordActivity.trim() || 'No status set';
});
document.getElementById('input-bio').addEventListener('input', (e) => {
    const parts = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    state.bioPhrases = parts.length ? parts : ['your bio appears here...'];
    phraseIdx = 0;
    charIdx = 0;
    isDeleting = false;
});

/* =====================================================================
   7. SHAREABLE URL GENERATION (#p=...) & PUBLIC VIEW MODE
   ===================================================================== */
function encodeProfilePayload() {
    const payload = {
        t: state.templateId,
        u: state.username,
        n: state.displayName,
        a: state.avatarUrl,
        c: state.accentColor,
        l: state.location,
        d: state.discordActivity,
        b: state.bioPhrases,
        k: state.links.filter(l => l.label.trim() || l.value.trim())
    };
    return btoa(encodeURIComponent(JSON.stringify(payload)));
}

function decodeProfilePayload(hashStr) {
    try {
        const raw = hashStr.replace(/^#p=/, '');
        const parsed = JSON.parse(decodeURIComponent(atob(raw)));
        state.templateId = parsed.t || 'samuraiRonin';
        state.username = parsed.u || '';
        state.displayName = parsed.n || '';
        state.avatarUrl = parsed.a || '';
        state.accentColor = parsed.c || '#dc2626';
        state.location = parsed.l || '';
        state.discordActivity = parsed.d || '';
        state.bioPhrases = Array.isArray(parsed.b) && parsed.b.length ? parsed.b : ['your bio appears here...'];
        state.links = Array.isArray(parsed.k) ? parsed.k : [];
        state.bgMode = (TEMPLATES[state.templateId] || TEMPLATES.samuraiRonin).particleMode;
        return true;
    } catch (e) {
        return false;
    }
}

function enterPublicViewMode(showSplash = true) {
    state.isPublicView = true;
    document.getElementById('studio-column').classList.add('d-none');
    document.getElementById('top-navbar').classList.add('d-none');
    document.getElementById('preview-header-label').classList.add('d-none');
    document.getElementById('public-floating-bar').classList.remove('d-none');
    document.getElementById('preview-column').classList.remove('col-lg-6');
    document.getElementById('preview-column').classList.add('col-12', 'min-vh-100');

    if (showSplash) {
        document.getElementById('splash-screen').classList.remove('hidden-splash');
    }
    syncAllUI();
}

function exitPublicViewMode() {
    state.isPublicView = false;
    try {
        if (window.location.protocol === 'blob:') {
            window.location.hash = '';
        } else {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    } catch (e) {
        window.location.hash = '';
    }
    document.getElementById('studio-column').classList.remove('d-none');
    document.getElementById('top-navbar').classList.remove('d-none');
    document.getElementById('preview-header-label').classList.remove('d-none');
    document.getElementById('public-floating-bar').classList.add('d-none');
    document.getElementById('preview-column').classList.add('col-lg-6');
    document.getElementById('preview-column').classList.remove('col-12', 'min-vh-100');
    syncAllUI();
}

document.getElementById('generate-share-btn').addEventListener('click', () => {
    const encoded = encodeProfilePayload();
    const shareUrl = `${window.location.origin}${window.location.pathname}#p=${encoded}`;
    window.location.hash = `p=${encoded}`;
    copyText(shareUrl, `Shareable hex.io link copied! (${document.getElementById('short-url-preview').textContent})`);
});

document.getElementById('preview-splash-btn').addEventListener('click', () => {
    const encoded = encodeProfilePayload();
    window.location.hash = `p=${encoded}`;
    enterPublicViewMode(true);
});

document.getElementById('back-to-studio-btn').addEventListener('click', exitPublicViewMode);

document.getElementById('splash-screen').addEventListener('click', () => {
    document.getElementById('splash-screen').classList.add('hidden-splash');
    synth.start();
    state.views += 1;
    document.getElementById('card-views').textContent = state.views.toLocaleString();
});

/* =====================================================================
   8. WEB AUDIO SYNTH ENGINE & VISUALIZER
   ===================================================================== */
class WebAudioSynth {
    constructor() {
        this.ctx = null;
        this.gain = null;
        this.analyser = null;
        this.timer = null;
        this.step = 0;
        this.tracks = [
            { title: 'Midnight Synthwave', wave: 'sawtooth', tempo: 315, notes: [110, 130.81, 164.81, 196, 146.83, 174.61, 220, 196] },
            { title: 'Cyber Rain Lo-Fi', wave: 'triangle', tempo: 400, notes: [130.81, 164.81, 196, 246.94, 110, 146.83, 174.61, 220] },
            { title: 'Deep Space Drift', wave: 'sine', tempo: 350, notes: [82.41, 123.47, 164.81, 196, 98, 146.83, 185, 220] }
        ];
    }
    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.gain = this.ctx.createGain();
            this.gain.gain.value = state.volume * 0.32;
            this.analyser = this.ctx.createAnalyser();
            this.analyser.fftSize = 64;
            this.gain.connect(this.analyser);
            this.analyser.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }
    playNote(freq, dur, wave) {
        if (!this.ctx || !state.isPlaying) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const env = this.ctx.createGain();

        osc.type = wave;
        osc.frequency.setValueAtTime(freq, now);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(680, now);
        env.gain.setValueAtTime(0.001, now);
        env.gain.linearRampToValueAtTime(0.25, now + 0.05);
        env.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        filter.connect(env);
        env.connect(this.gain);
        osc.start(now);
        osc.stop(now + dur + 0.04);
    }
    start() {
        this.init();
        clearInterval(this.timer);
        state.isPlaying = true;
        this.updateUI();
        const tick = () => {
            const tr = this.tracks[state.trackIndex];
            const n = tr.notes[this.step % tr.notes.length];
            this.playNote(n, (tr.tempo / 1000) * 1.7, tr.wave);
            this.step++;
        };
        tick();
        this.timer = setInterval(tick, this.tracks[state.trackIndex].tempo);
    }
    pause() {
        state.isPlaying = false;
        clearInterval(this.timer);
        this.updateUI();
    }
    toggle() {
        state.isPlaying ? this.pause() : this.start();
    }
    switchTrack(dir) {
        state.trackIndex = (state.trackIndex + dir + this.tracks.length) % this.tracks.length;
        this.step = 0;
        this.updateUI();
        if (state.isPlaying) this.start();
    }
    updateUI() {
        document.getElementById('track-title').textContent = this.tracks[state.trackIndex].title;
        const icon = document.getElementById('play-pause-icon');
        icon.className = state.isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill';
    }
}

const synth = new WebAudioSynth();
document.getElementById('play-pause-btn').addEventListener('click', () => synth.toggle());
document.getElementById('prev-track-btn').addEventListener('click', () => synth.switchTrack(-1));
document.getElementById('next-track-btn').addEventListener('click', () => synth.switchTrack(1));
document.getElementById('volume-slider').addEventListener('input', (e) => {
    state.volume = parseInt(e.target.value, 10) / 100;
    if (synth.gain && synth.ctx) {
        synth.gain.gain.setTargetAtTime(state.volume * 0.32, synth.ctx.currentTime, 0.04);
    }
});

/* Visualizer Loop */
const visCanvas = document.getElementById('visualizer-canvas');
const visCtx = visCanvas.getContext('2d');
function renderVisualizer() {
    const rect = visCanvas.getBoundingClientRect();
    if (visCanvas.width !== Math.floor(rect.width)) {
        visCanvas.width = Math.floor(rect.width) || 180;
        visCanvas.height = Math.floor(rect.height) || 26;
    }
    const w = visCanvas.width;
    const h = visCanvas.height;
    visCtx.clearRect(0, 0, w, h);

    const bars = 22;
    const gap = 3;
    const bw = (w - gap * (bars - 1)) / bars;
    let data = new Uint8Array(bars);

    if (synth.analyser && state.isPlaying) {
        const raw = new Uint8Array(synth.analyser.frequencyBinCount);
        synth.analyser.getByteFrequencyData(raw);
        for (let i = 0; i < bars; i++) data[i] = raw[i % raw.length];
    } else {
        const t = Date.now() * 0.003;
        for (let i = 0; i < bars; i++) data[i] = (Math.sin(t + i * 0.45) + 1) * 18 + 10;
    }

    visCtx.fillStyle = state.accentColor;
    for (let i = 0; i < bars; i++) {
        const bh = Math.max(3, (data[i] / 255) * h * 0.85);
        visCtx.globalAlpha = 0.5 + (data[i] / 255) * 0.5;
        visCtx.fillRect(i * (bw + gap), (h - bh) / 2, bw, bh);
    }
    visCtx.globalAlpha = 1;
    requestAnimationFrame(renderVisualizer);
}

/* =====================================================================
   9. PARTICLE CANVAS BACKGROUND & 3D CARD TILT
   ===================================================================== */
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
let particles = [];

function initParticles() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    const count = state.bgMode === 'rain' ? 105 : (state.bgMode === 'petals' || state.bgMode === 'leaves' ? 45 : (state.bgMode === 'steam' ? 36 : 60));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * bgCanvas.height,
        vx: state.bgMode === 'rain'
            ? -1.1
            : (state.bgMode === 'petals' || state.bgMode === 'leaves'
                ? (0.5 + Math.random() * 0.7)
                : (Math.random() - 0.5) * 0.55),
        vy: state.bgMode === 'rain'
            ? (6 + Math.random() * 5)
            : (state.bgMode === 'embers' || state.bgMode === 'steam'
                ? -(0.7 + Math.random() * 1.3)
                : (state.bgMode === 'snow' || state.bgMode === 'petals' || state.bgMode === 'leaves'
                    ? (0.7 + Math.random() * 1.1)
                    : (Math.random() - 0.5) * 0.55)),
        size: state.bgMode === 'rain'
            ? (10 + Math.random() * 12)
            : (state.bgMode === 'steam'
                ? (28 + Math.random() * 44)
                : (state.bgMode === 'petals' || state.bgMode === 'leaves'
                    ? (4.5 + Math.random() * 4.5)
                    : (1.5 + Math.random() * 2.2))),
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.04,
        phase: Math.random() * Math.PI * 2
    }));
}
window.addEventListener('resize', initParticles);

let gridOffset = 0;
function animateBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    if (state.bgMode === 'constellation') {
        bgCtx.fillStyle = state.accentColor;
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > bgCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > bgCanvas.height) p.vy *= -1;
            bgCtx.globalAlpha = 0.55;
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            bgCtx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
                if (dist < 130) {
                    bgCtx.strokeStyle = state.accentColor;
                    bgCtx.globalAlpha = (1 - dist / 130) * 0.22;
                    bgCtx.beginPath();
                    bgCtx.moveTo(p.x, p.y);
                    bgCtx.lineTo(particles[j].x, particles[j].y);
                    bgCtx.stroke();
                }
            }
        });
    } else if (state.bgMode === 'rain') {
        bgCtx.strokeStyle = state.accentColor;
        bgCtx.globalAlpha = 0.38;
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.y > bgCanvas.height) { p.y = -15; p.x = Math.random() * bgCanvas.width; }
            bgCtx.beginPath();
            bgCtx.moveTo(p.x, p.y);
            bgCtx.lineTo(p.x + p.vx * 1.4, p.y + p.size);
            bgCtx.stroke();
        });
    } else if (state.bgMode === 'embers') {
        bgCtx.fillStyle = state.accentColor;
        particles.forEach(p => {
            p.y += p.vy;
            p.x += Math.sin(p.y * 0.02 + p.angle) * 0.6;
            if (p.y < -10) { p.y = bgCanvas.height + 10; p.x = Math.random() * bgCanvas.width; }
            bgCtx.globalAlpha = 0.65;
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            bgCtx.fill();
        });
    } else if (state.bgMode === 'petals') {
        bgCtx.fillStyle = state.accentColor;
        particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx + Math.sin(p.y * 0.015) * 0.5;
            p.angle += p.spin;
            if (p.y > bgCanvas.height + 15) { p.y = -15; p.x = Math.random() * bgCanvas.width; }
            if (p.x > bgCanvas.width + 15) p.x = -15;
            bgCtx.save();
            bgCtx.translate(p.x, p.y);
            bgCtx.rotate(p.angle);
            bgCtx.globalAlpha = 0.55;
            bgCtx.beginPath();
            bgCtx.ellipse(0, 0, p.size, p.size * 0.52, 0, 0, Math.PI * 2);
            bgCtx.fill();
            bgCtx.restore();
        });
    } else if (state.bgMode === 'leaves') {
        particles.forEach((p, idx) => {
            p.y += p.vy;
            p.x += p.vx + Math.sin(p.y * 0.014 + p.phase) * 0.85;
            p.angle += p.spin * 1.2;
            if (p.y > bgCanvas.height + 18) { p.y = -18; p.x = Math.random() * bgCanvas.width; }
            if (p.x > bgCanvas.width + 18) p.x = -18;
            bgCtx.save();
            bgCtx.translate(p.x, p.y);
            bgCtx.rotate(p.angle);
            bgCtx.fillStyle = idx % 3 === 0 ? '#f59e0b' : state.accentColor;
            bgCtx.globalAlpha = 0.62;
            bgCtx.beginPath();
            bgCtx.moveTo(0, -p.size);
            bgCtx.quadraticCurveTo(p.size * 0.9, 0, 0, p.size);
            bgCtx.quadraticCurveTo(-p.size * 0.9, 0, 0, -p.size);
            bgCtx.fill();
            bgCtx.restore();
        });
    } else if (state.bgMode === 'fireflies') {
        const t = Date.now() * 0.003;
        particles.forEach(p => {
            p.x += p.vx + Math.cos(t + p.phase) * 0.35;
            p.y += p.vy + Math.sin(t + p.phase) * 0.35;
            if (p.x < -10) p.x = bgCanvas.width + 10;
            if (p.x > bgCanvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = bgCanvas.height + 10;
            if (p.y > bgCanvas.height + 10) p.y = -10;
            const pulse = 0.25 + ((Math.sin(t * 1.6 + p.phase) + 1) / 2) * 0.75;
            bgCtx.save();
            bgCtx.fillStyle = state.accentColor;
            bgCtx.shadowColor = state.accentColor;
            bgCtx.shadowBlur = 12;
            bgCtx.globalAlpha = pulse;
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.size * 1.15, 0, Math.PI * 2);
            bgCtx.fill();
            bgCtx.restore();
        });
    } else if (state.bgMode === 'steam') {
        particles.forEach(p => {
            p.y += p.vy;
            p.x += Math.sin(p.y * 0.008 + p.phase) * 0.45;
            if (p.y < -p.size) { p.y = bgCanvas.height + p.size; p.x = Math.random() * bgCanvas.width; }
            const grad = bgCtx.createRadialGradient(p.x, p.y, 2, p.x, p.y, p.size);
            grad.addColorStop(0, 'rgba(203, 213, 225, 0.14)');
            grad.addColorStop(1, 'rgba(203, 213, 225, 0)');
            bgCtx.fillStyle = grad;
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            bgCtx.fill();
        });
    } else if (state.bgMode === 'grid') {
        const horizon = bgCanvas.height * 0.55;
        gridOffset = (gridOffset + 0.6) % 40;
        bgCtx.strokeStyle = state.accentColor;
        bgCtx.globalAlpha = 0.22;
        bgCtx.lineWidth = 1;

        for (let y = horizon; y < bgCanvas.height; y += 26) {
            const offsetY = y + (gridOffset * 0.65);
            bgCtx.beginPath();
            bgCtx.moveTo(0, offsetY);
            bgCtx.lineTo(bgCanvas.width, offsetY);
            bgCtx.stroke();
        }
        const centerX = bgCanvas.width / 2;
        for (let i = -12; i <= 12; i++) {
            bgCtx.beginPath();
            bgCtx.moveTo(centerX + i * 45, horizon);
            bgCtx.lineTo(centerX + i * 190, bgCanvas.height);
            bgCtx.stroke();
        }
    } else {
        bgCtx.fillStyle = '#ffffff';
        bgCtx.globalAlpha = 0.55;
        particles.forEach(p => {
            p.y += p.vy;
            p.x += Math.sin(p.y * 0.015) * 0.35;
            if (p.y > bgCanvas.height) { p.y = -10; p.x = Math.random() * bgCanvas.width; }
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            bgCtx.fill();
        });
    }
    bgCtx.globalAlpha = 1;
    requestAnimationFrame(animateBg);
}

const bgModes = ['leaves', 'fireflies', 'steam', 'constellation', 'rain', 'snow', 'embers', 'petals', 'grid'];
document.getElementById('bg-cycle-btn').addEventListener('click', () => {
    const nextIdx = (bgModes.indexOf(state.bgMode) + 1) % bgModes.length;
    state.bgMode = bgModes[nextIdx];
    document.getElementById('bg-mode-text').textContent =
        state.bgMode.charAt(0).toUpperCase() + state.bgMode.slice(1);
    initParticles();
});

/* 3D Card Tilt */
const cardEl = document.getElementById('profile-card');
cardEl.addEventListener('mousemove', (e) => {
    const rect = cardEl.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    cardEl.style.transform = `perspective(950px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
});
cardEl.addEventListener('mouseleave', () => {
    cardEl.style.transform = 'perspective(950px) rotateX(0deg) rotateY(0deg)';
});

/* Typewriter Bio & Discord Timer */
const bioEl = document.getElementById('card-bio');
let phraseIdx = 0, charIdx = 0, isDeleting = false;
function typeLoop() {
    const phrase = state.bioPhrases[phraseIdx % state.bioPhrases.length];
    if (!isDeleting) {
        bioEl.textContent = phrase.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1700);
            return;
        }
    } else {
        bioEl.textContent = phrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % state.bioPhrases.length;
        }
    }
    setTimeout(typeLoop, isDeleting ? 35 : 65);
}

setInterval(() => {
    state.discordSeconds++;
    const h = String(Math.floor(state.discordSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((state.discordSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(state.discordSeconds % 60).padStart(2, '0');
    document.getElementById('card-discord-timer').textContent = `${h}:${m}:${s} elapsed`;
}, 1000);

/* =====================================================================
   10. INITIALIZE ON WINDOW LOAD
   ===================================================================== */
window.onload = function () {
    document.getElementById('input-accent').value = state.accentColor;
    document.getElementById('bg-mode-text').textContent =
        state.bgMode.charAt(0).toUpperCase() + state.bgMode.slice(1);

    if (window.location.hash.startsWith('#p=')) {
        const ok = decodeProfilePayload(window.location.hash);
        if (ok) {
            enterPublicViewMode(true);
        } else {
            syncAllUI();
        }
    } else {
        syncAllUI();
    }

    initParticles();
    animateBg();
    renderVisualizer();
    typeLoop();
};