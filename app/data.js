// AnimagiC 2026 – Daten aus dem offiziellen Programmheft (31. Juli – 2. August 2026, Rosengarten Mannheim)

const DAYS = [
  { id: 'fr', label: 'Freitag', date: '31.07.' },
  { id: 'sa', label: 'Samstag', date: '01.08.' },
  { id: 'so', label: 'Sonntag', date: '02.08.' },
];

const ROOMS = {
  mozartsaal: { name: 'Mozartsaal', level: 'Ebene 0' },
  musensaal: { name: 'Musensaal', level: 'Ebene 1' },
  crunchyroll: { name: 'Crunchyroll Cinema', level: 'Ebene 2' },
  cinemagic1: { name: 'CineMagic 1', level: '' },
  kino1: { name: 'AnimagiC-Kino 1', level: '' },
  kino2: { name: 'AnimagiC-Kino 2', level: '' },
  kino3: { name: 'AnimagiC-Kino 3', level: '' },
  signing: { name: 'Signing-Room', level: '' },
  stand: { name: 'Publisher-Stände', level: '' },
};

const CATEGORIES = {
  konzert: { label: 'Konzert', color: '#e91e8c' },
  show: { label: 'Show', color: '#9c27b0' },
  screening: { label: 'Screening', color: '#3f51b5' },
  panel: { label: 'Panel / Talk', color: '#00897b' },
  workshop: { label: 'Workshop', color: '#f57c00' },
  signierstunde: { label: 'Signierstunde', color: '#c62828' },
  zeremonie: { label: 'Zeremonie', color: '#d4af37' },
  auktion: { label: 'Auktion', color: '#607d8b' },
  wettbewerb: { label: 'Wettbewerb', color: '#7cb342' },
};

// premiere: WP = Weltpremiere, DP = Deutschlandpremiere, EP = Europapremiere, ECP = Europa-Convention-Premiere, DUB = DUB-Premiere, PREV = Preview
const EVENTS = [
  // ── Mozartsaal · Freitag ────────────────────────────────────────────
  { id: 'moz-fr-1', day: 'fr', start: '16:30', end: '16:45', room: 'mozartsaal', cat: 'show', title: 'Taiko Heidelberg', sub: 'Taiko-Performance', slug: 'taiko-heidelberg' },
  { id: 'moz-fr-2', day: 'fr', start: '17:00', end: '17:30', room: 'mozartsaal', cat: 'konzert', title: 'SIREN starring IZUMI from SI-VIS', sub: 'Anisong- & J-Pop-Konzert', premiere: 'Europapremiere', slug: 'siren-izumi' },
  { id: 'moz-fr-3', day: 'fr', start: '18:00', end: '18:30', room: 'mozartsaal', cat: 'konzert', title: 'VK Blanka', sub: 'Anisong- & J-Pop/Rock-Konzert', slug: 'vk-blanka' },
  { id: 'moz-fr-4', day: 'fr', start: '19:00', end: '20:30', room: 'mozartsaal', cat: 'zeremonie', title: 'Eröffnungsfeier', sub: 'Verleihung des AnimaniA Awards, Performance von J-Music-Acts & Vorstellung der Ehrengäste', slug: 'eroeffnungsfeier' },
  { id: 'moz-fr-5', day: 'fr', start: '21:00', end: '21:30', room: 'mozartsaal', cat: 'konzert', title: 'MADKID', sub: 'Anisong- & J-Pop/Rock-Konzert', slug: 'madkid' },
  { id: 'moz-fr-6', day: 'fr', start: '22:00', end: '00:00', room: 'mozartsaal', cat: 'screening', title: 'Chainsaw Man – The Movie: Reze Arc', sub: 'Special Screening, im Anschluss: Stage Talk mit Manabu Otsuka', meta: 'Dt. · 101 Min. · FSK 16', slug: 'chainsaw-man-reze' },
  // ── Mozartsaal · Samstag ────────────────────────────────────────────
  { id: 'moz-sa-1', day: 'sa', start: '11:30', end: '11:45', room: 'mozartsaal', cat: 'show', title: 'Taiko Heidelberg', sub: 'Taiko-Performance', slug: 'taiko-heidelberg' },
  { id: 'moz-sa-2', day: 'sa', start: '12:15', end: '13:30', room: 'mozartsaal', cat: 'wettbewerb', title: 'AnimagiC-Bühnencosplay', sub: 'Wettbewerb', slug: 'buehnencosplay' },
  { id: 'moz-sa-3', day: 'sa', start: '13:45', end: '14:15', room: 'mozartsaal', cat: 'konzert', title: 'MADKID', sub: 'Anisong- & J-Pop/Rock-Konzert', slug: 'madkid' },
  { id: 'moz-sa-4', day: 'sa', start: '14:30', end: '15:00', room: 'mozartsaal', cat: 'wettbewerb', title: 'AnimagiC-Bühnencosplay', sub: 'Siegerehrung', slug: 'buehnencosplay' },
  { id: 'moz-sa-5', day: 'sa', start: '15:45', end: '17:00', room: 'mozartsaal', cat: 'konzert', title: 'VIDEOGAMES live in concert', sub: 'Orchesterkonzert · Musikverein Siershahn e.V. X AnimagiC', slug: 'videogames-live' },
  { id: 'moz-sa-6', day: 'sa', start: '17:45', end: '19:15', room: 'mozartsaal', cat: 'show', title: 'TnS – Tsuki no Senshi', sub: 'Showgruppe „Hades“', slug: 'tns-tsuki-no-senshi' },
  { id: 'moz-sa-7', day: 'sa', start: '20:00', end: '22:00', room: 'mozartsaal', cat: 'konzert', title: 'SACRA MUSIC Fes. X AnimagiC', sub: 'Anisong-Konzert mit SIREN starring IZUMI from SI-VIS, ASCA und Yuki Kajiura / FictionJunction', slug: 'sacra-music-fes' },
  { id: 'moz-sa-8', day: 'sa', start: '22:30', end: '23:30', room: 'mozartsaal', cat: 'screening', title: 'Kagurabachi Anime World Tour', sub: 'Preview-Screening, im Anschluss: Stage Talk mit Koichi Yasuda', premiere: 'Deutschlandpremiere', slug: 'kagurabachi' },
  // ── Mozartsaal · Sonntag ────────────────────────────────────────────
  { id: 'moz-so-1', day: 'so', start: '11:15', end: '12:30', room: 'mozartsaal', cat: 'konzert', title: 'VIDEOGAMES live in concert', sub: 'Orchesterkonzert · Musikverein Siershahn e.V. X AnimagiC', slug: 'videogames-live' },
  { id: 'moz-so-2', day: 'so', start: '13:00', end: '13:30', room: 'mozartsaal', cat: 'konzert', title: 'MADKID', sub: 'Anisong- & J-Pop/Rock-Konzert', slug: 'madkid' },
  { id: 'moz-so-3', day: 'so', start: '14:00', end: '14:30', room: 'mozartsaal', cat: 'konzert', title: 'VK Blanka', sub: 'Anisong- & J-Pop/Rock-Konzert', slug: 'vk-blanka' },
  { id: 'moz-so-4', day: 'so', start: '15:00', end: '15:30', room: 'mozartsaal', cat: 'konzert', title: 'ASCA', sub: 'Anisong- & J-Pop-Konzert', slug: 'asca' },
  { id: 'moz-so-5', day: 'so', start: '16:00', end: '16:45', room: 'mozartsaal', cat: 'konzert', title: 'Yuki Kajiura / FictionJunction', sub: 'Anisong- & J-Music-Konzert', slug: 'yuki-kajiura' },
  { id: 'moz-so-6', day: 'so', start: '17:30', end: '18:30', room: 'mozartsaal', cat: 'zeremonie', title: 'Großes Finale', sub: 'Feierliche Verabschiedung der Ehrengäste, Performance von J-Music-Acts & Rückblick auf 2026 & Ausblick auf 2027', slug: 'grosses-finale' },

  // ── Musensaal · Freitag ─────────────────────────────────────────────
  { id: 'mus-fr-1', day: 'fr', start: '15:00', end: '15:30', room: 'musensaal', cat: 'konzert', title: 'Miyu Kaneko', sub: 'Anisong- & J-Pop-Konzert', premiere: 'Solopremiere außerhalb Japans', slug: 'miyu-kaneko' },
  { id: 'mus-fr-2', day: 'fr', start: '16:15', end: '17:00', room: 'musensaal', cat: 'konzert', title: 'Budo & Ken', sub: 'Best of Classic Music & Anime mit Flügel & Gesang', premiere: 'Deutschlandpremiere', slug: 'budo-ken' },
  { id: 'mus-fr-3', day: 'fr', start: '17:30', end: '18:00', room: 'musensaal', cat: 'konzert', title: 'Ai Higuchi', sub: 'Anisong- & J-Pop-Konzert', slug: 'ai-higuchi' },
  { id: 'mus-fr-4', day: 'fr', start: '18:30', end: '20:20', room: 'musensaal', cat: 'screening', title: 'SCARLET', sub: 'Movie-Screening', meta: 'Dt. · ca. 111 Min. · FSK 12', slug: 'scarlet' },
  { id: 'mus-fr-5', day: 'fr', start: '21:00', end: '21:30', room: 'musensaal', cat: 'screening', title: 'Detektiv Conan Film 29: Der gefallene Engel des Highways', sub: 'Preview-Screening', meta: 'Dt. · ca. 20 Min. · FSK 12', slug: 'detektiv-conan-film29' },
  { id: 'mus-fr-6', day: 'fr', start: '22:00', end: '22:30', room: 'musensaal', cat: 'konzert', title: 'ASTERISM', sub: 'Heavy Metal x Anisong-Konzert', slug: 'asterism' },
  { id: 'mus-fr-7', day: 'fr', start: '22:45', end: '00:15', room: 'musensaal', cat: 'screening', title: 'JUJUTSU KAISEN: Execution – Der Shibuya-Vorfall x Die Metzel-Spiele', sub: 'Movie-Screening', meta: 'OmU · ca. 90 Min. · FSK 16', slug: 'jujutsu-kaisen-execution' },
  // ── Musensaal · Samstag ─────────────────────────────────────────────
  { id: 'mus-sa-1', day: 'sa', start: '11:15', end: '12:30', room: 'musensaal', cat: 'show', title: 'Daijoubu', sub: 'Showgruppe „Die Tagebücher der Apothekerin“', slug: 'daijoubu' },
  { id: 'mus-sa-2', day: 'sa', start: '13:00', end: '14:00', room: 'musensaal', cat: 'panel', title: 'Celebrating 30 Years of TV-Series Detective Conan', sub: 'Stage-Event mit Talk & Live-Dubbing mit Kappei Yamaguchi & Masataka Todo', slug: 'kappei-yamaguchi' },
  { id: 'mus-sa-3', day: 'sa', start: '14:30', end: '15:00', room: 'musensaal', cat: 'konzert', title: 'Miyu Kaneko', sub: 'Anisong- & J-Pop-Konzert', premiere: 'Solopremiere außerhalb Japans', slug: 'miyu-kaneko' },
  { id: 'mus-sa-4', day: 'sa', start: '15:30', end: '16:00', room: 'musensaal', cat: 'konzert', title: 'ASTERISM', sub: 'Heavy Metal x Anisong-Konzert', slug: 'asterism' },
  { id: 'mus-sa-5', day: 'sa', start: '16:30', end: '17:15', room: 'musensaal', cat: 'konzert', title: 'Budo & Ken', sub: 'Best of Classic Music & Anime mit Flügel & Gesang', premiere: 'Deutschlandpremiere', slug: 'budo-ken' },
  { id: 'mus-sa-6', day: 'sa', start: '18:00', end: '19:00', room: 'musensaal', cat: 'panel', title: 'Mayumi Tanaka on Stage', sub: 'Special Talk und Live-Dubbing', premiere: 'Europapremiere', slug: 'mayumi-tanaka' },
  { id: 'mus-sa-7', day: 'sa', start: '20:00', end: '23:00', room: 'musensaal', cat: 'show', title: 'Dice Actors', sub: 'Synchronschauspiel x D&D – live', slug: 'dice-actors' },
  // ── Musensaal · Sonntag ─────────────────────────────────────────────
  { id: 'mus-so-1', day: 'so', start: '11:00', end: '12:15', room: 'musensaal', cat: 'show', title: 'All Stars', sub: 'Showgruppe „PROJECT ZERO – Die Maske der Mondfinsternis“', slug: 'all-stars' },
  { id: 'mus-so-2', day: 'so', start: '12:45', end: '13:30', room: 'musensaal', cat: 'konzert', title: 'Budo & Ken', sub: 'Best of Classic Music & Anime mit Flügel & Gesang', premiere: 'Deutschlandpremiere', slug: 'budo-ken' },
  { id: 'mus-so-3', day: 'so', start: '14:00', end: '14:30', room: 'musensaal', cat: 'konzert', title: 'Ai Higuchi', sub: 'Anisong- & J-Pop-Konzert', slug: 'ai-higuchi' },
  { id: 'mus-so-4', day: 'so', start: '15:00', end: '16:00', room: 'musensaal', cat: 'panel', title: 'Mayumi Tanaka on Stage', sub: 'Special Talk und Live-Dubbing', premiere: 'Europapremiere', slug: 'mayumi-tanaka' },
  { id: 'mus-so-5', day: 'so', start: '16:30', end: '17:00', room: 'musensaal', cat: 'konzert', title: 'ASTERISM', sub: 'Heavy Metal x Anisong-Konzert', slug: 'asterism' },

  // ── Crunchyroll Cinema · Freitag ────────────────────────────────────
  { id: 'cru-fr-1', day: 'fr', start: '15:00', end: '15:50', room: 'crunchyroll', cat: 'screening', title: 'Episode „ZERO“ Shin’ichi Kudô: Der Fall im Aquarium', sub: 'TV-Special', meta: 'OmU · ca. 50 Min. · FSK 12', slug: 'episode-zero-conan' },
  { id: 'cru-fr-2', day: 'fr', start: '16:30', end: '17:45', room: 'crunchyroll', cat: 'auktion', title: 'Große Charity-Auktion', sub: '', slug: 'charity-auktion' },
  { id: 'cru-fr-3', day: 'fr', start: '18:00', end: '18:30', room: 'crunchyroll', cat: 'screening', title: 'Atelier of Witch Hat', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-fr-4', day: 'fr', start: '18:30', end: '19:00', room: 'crunchyroll', cat: 'screening', title: 'Though I Am an Inept Villainess', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-fr-5', day: 'fr', start: '19:15', end: '19:45', room: 'crunchyroll', cat: 'screening', title: 'The Elusive Samurai Season 2', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-fr-6', day: 'fr', start: '19:45', end: '20:15', room: 'crunchyroll', cat: 'screening', title: 'Please Excuse My Younger Brothers', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-fr-7', day: 'fr', start: '20:30', end: '21:00', room: 'crunchyroll', cat: 'screening', title: 'PSYREN', sub: '', premiere: 'Weltpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-8', day: 'fr', start: '21:00', end: '21:30', room: 'crunchyroll', cat: 'screening', title: 'The Vermilion Mask', sub: '', premiere: 'Weltpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-9', day: 'fr', start: '21:30', end: '22:00', room: 'crunchyroll', cat: 'screening', title: 'Overgeared', sub: '', premiere: 'Deutschlandpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-10', day: 'fr', start: '22:15', end: '22:45', room: 'crunchyroll', cat: 'screening', title: 'Black Torch', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-11', day: 'fr', start: '22:45', end: '23:15', room: 'crunchyroll', cat: 'screening', title: 'Tomb Raider King', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-12', day: 'fr', start: '23:15', end: '23:45', room: 'crunchyroll', cat: 'screening', title: 'Das Band der Unterwelt', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-13', day: 'fr', start: '23:45', end: '00:15', room: 'crunchyroll', cat: 'screening', title: 'The World’s Finest Assassin – Season 2', sub: '', premiere: 'Europapremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-fr-14', day: 'fr', start: '00:15', end: '00:45', room: 'crunchyroll', cat: 'screening', title: 'Dead Account', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  // ── Crunchyroll Cinema · Samstag ────────────────────────────────────
  { id: 'cru-sa-1', day: 'sa', start: '11:00', end: '12:00', room: 'crunchyroll', cat: 'panel', title: 'A Magical Chat with the Witch Hat Atelier Cast & Staff', sub: 'Q&A-Panel & Live-Dubbing mit dem Atelier of Witch Hat-Team', slug: 'witch-hat' },
  { id: 'cru-sa-2', day: 'sa', start: '12:00', end: '12:30', room: 'crunchyroll', cat: 'screening', title: 'Atelier of Witch Hat', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-sa-3', day: 'sa', start: '15:00', end: '16:00', room: 'crunchyroll', cat: 'panel', title: 'Crunchyroll Show', sub: 'Interaktives Show-Panel mit Anime-News & Talk-Gästen', slug: 'crunchyroll-show' },
  { id: 'cru-sa-4', day: 'sa', start: '16:00', end: '16:30', room: 'crunchyroll', cat: 'screening', title: 'Black Clover – Season 2', sub: '', premiere: 'Deutschlandpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-sa-5', day: 'sa', start: '17:30', end: '18:00', room: 'crunchyroll', cat: 'screening', title: 'Please Excuse My Younger Brothers', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-sa-6', day: 'sa', start: '18:00', end: '19:45', room: 'crunchyroll', cat: 'screening', title: 'Miss Kobayashi’s Dragon Maid: Ein einsamer Drache sehnt sich nach Liebe', sub: '', meta: 'OmU · ca. 105 Min. · FSK 12' },
  { id: 'cru-sa-7', day: 'sa', start: '20:00', end: '20:30', room: 'crunchyroll', cat: 'screening', title: 'PSYREN', sub: '', premiere: 'Weltpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-8', day: 'sa', start: '20:30', end: '21:00', room: 'crunchyroll', cat: 'screening', title: 'The Vermilion Mask', sub: '', premiere: 'Weltpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-9', day: 'sa', start: '21:00', end: '21:30', room: 'crunchyroll', cat: 'screening', title: 'Overgeared', sub: '', premiere: 'Deutschlandpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-10', day: 'sa', start: '21:30', end: '22:00', room: 'crunchyroll', cat: 'screening', title: 'Reborn as a Space Mercenary: I Woke Up Piloting the Strongest Starship!', sub: '', premiere: 'Deutschlandpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-11', day: 'sa', start: '22:15', end: '22:45', room: 'crunchyroll', cat: 'screening', title: 'Black Torch', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-12', day: 'sa', start: '22:45', end: '23:15', room: 'crunchyroll', cat: 'screening', title: 'Tomb Raider King', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-13', day: 'sa', start: '23:15', end: '23:45', room: 'crunchyroll', cat: 'screening', title: 'Das Band der Unterwelt', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'cru-sa-14', day: 'sa', start: '23:45', end: '00:15', room: 'crunchyroll', cat: 'screening', title: 'Bungo Stray Dogs WAN 2nd Season', sub: '', meta: 'Ep. 1+2 · OmU · ca. 30 Min. · FSK 16' },
  // ── Crunchyroll Cinema · Sonntag ────────────────────────────────────
  { id: 'cru-so-1', day: 'so', start: '12:00', end: '13:00', room: 'crunchyroll', cat: 'panel', title: 'Bringing Witch Hat Atelier to Life with the Cast & Staff', sub: 'Q&A-Panel & Live-Dubbing mit dem Atelier of Witch Hat-Team', slug: 'witch-hat' },
  { id: 'cru-so-2', day: 'so', start: '14:00', end: '15:00', room: 'crunchyroll', cat: 'panel', title: 'You and I Are Not so Opposite!', sub: 'Q&A-Panel & Live-Dubbing mit Anji Iwata & Daniel Kirchberger', slug: 'anji-iwata-daniel-kirchberger' },
  { id: 'cru-so-3', day: 'so', start: '15:30', end: '16:00', room: 'crunchyroll', cat: 'screening', title: 'Black Clover – Season 2', sub: '', premiere: 'Deutschlandpremiere', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-so-4', day: 'so', start: '16:00', end: '16:30', room: 'crunchyroll', cat: 'screening', title: 'GROW UP SHOW -Sunflower Circus-', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-so-5', day: 'so', start: '16:30', end: '17:00', room: 'crunchyroll', cat: 'screening', title: 'A Returner’s Magic Should Be Special S2', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-so-6', day: 'so', start: '17:00', end: '17:30', room: 'crunchyroll', cat: 'screening', title: 'The Oblivious Saint Can’t Contain Her Power', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'cru-so-7', day: 'so', start: '17:30', end: '18:00', room: 'crunchyroll', cat: 'screening', title: 'The Elusive Samurai Season 2', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },

  // ── CineMagic 1 · Freitag ───────────────────────────────────────────
  { id: 'cm1-fr-1', day: 'fr', start: '15:15', end: '16:15', room: 'cinemagic1', cat: 'signierstunde', title: 'Tokyo Revengers: Sho Karino', sub: 'Signierstunde · „First Come, First Served“', slug: 'sho-karino' },
  { id: 'cm1-fr-2', day: 'fr', start: '17:00', end: '18:00', room: 'cinemagic1', cat: 'panel', title: 'Bocchi the Rock! – Special Stage', sub: 'Q&A-Panel mit den Synchronsprecherinnen' },
  { id: 'cm1-fr-3', day: 'fr', start: '18:00', end: '18:50', room: 'cinemagic1', cat: 'screening', title: 'Bocchi the Rock!', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 & 2 · Dt. · ca. 50 Min. · FSK 12' },
  { id: 'cm1-fr-4', day: 'fr', start: '19:45', end: '21:15', room: 'cinemagic1', cat: 'screening', title: 'Make a Girl', sub: '', meta: 'Dt. · ca. 92 Min. · FSK 12', slug: 'make-a-girl' },
  { id: 'cm1-fr-5', day: 'fr', start: '21:30', end: '22:00', room: 'cinemagic1', cat: 'screening', title: 'My Love Story with Yamada Kun at Lv999', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'cm1-fr-6', day: 'fr', start: '22:00', end: '22:50', room: 'cinemagic1', cat: 'screening', title: 'Call of the Night Season 2', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 12' },
  { id: 'cm1-fr-7', day: 'fr', start: '23:00', end: '23:30', room: 'cinemagic1', cat: 'screening', title: 'Sakamoto Days', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'cm1-fr-8', day: 'fr', start: '23:30', end: '00:30', room: 'cinemagic1', cat: 'screening', title: 'Banana Fish', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 16' },
  // ── CineMagic 1 · Samstag ───────────────────────────────────────────
  { id: 'cm1-sa-1', day: 'sa', start: '11:45', end: '12:45', room: 'cinemagic1', cat: 'panel', title: 'Tokyo Revengers Special-Cast-Panel', sub: 'Q&A-Panel & Live-Dubbing mit Sho Karino', slug: 'sho-karino' },
  { id: 'cm1-sa-2', day: 'sa', start: '13:00', end: '13:30', room: 'cinemagic1', cat: 'screening', title: 'Girls Band Cry', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'cm1-sa-3', day: 'sa', start: '14:00', end: '15:00', room: 'cinemagic1', cat: 'panel', title: 'Call of the Night Season 2 Insider AnimagiC 2026', sub: 'Q&A-Panel & Live-Dubbing mit dem Team von Call of the Night Season 2' },
  { id: 'cm1-sa-4', day: 'sa', start: '15:30', end: '16:20', room: 'cinemagic1', cat: 'screening', title: 'Sparks of Tomorrow', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 12', slug: 'sparks-of-tomorrow' },
  { id: 'cm1-sa-5', day: 'sa', start: '16:30', end: '17:30', room: 'cinemagic1', cat: 'panel', title: 'Kyoto Animation’s New Frontier: Sparks of Tomorrow', sub: 'Q&A-Panel mit dem Team von Sparks of Tomorrow', slug: 'sparks-of-tomorrow' },
  { id: 'cm1-sa-6', day: 'sa', start: '17:30', end: '18:00', room: 'cinemagic1', cat: 'screening', title: 'Sparks of Tomorrow', sub: '', premiere: 'Weltpremiere', meta: 'Ep. 5 · OmU · ca. 25 Min. · FSK 12', slug: 'sparks-of-tomorrow' },
  { id: 'cm1-sa-7', day: 'sa', start: '18:30', end: '20:10', room: 'cinemagic1', cat: 'screening', title: 'Assassination Classroom The Movie: Our Time', sub: '', meta: 'Dt. · ca. 97 Min. · FSK 12', slug: 'assassination-classroom-movie' },
  { id: 'cm1-sa-8', day: 'sa', start: '20:15', end: '22:15', room: 'cinemagic1', cat: 'screening', title: 'Unanswered//butterfly SWORD ART ONLINE', sub: '', meta: 'OmU · ca. 120 Min. · FSK 12', slug: 'sao-unanswered-butterfly' },
  { id: 'cm1-sa-9', day: 'sa', start: '22:30', end: '23:30', room: 'cinemagic1', cat: 'screening', title: 'Banana Fish', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 16' },
  { id: 'cm1-sa-10', day: 'sa', start: '23:30', end: '00:30', room: 'cinemagic1', cat: 'screening', title: 'Fist of the North Star: HOKUTO NO KEN', sub: '', meta: 'Ep. 1+2 · OmU · ca. 50 Min. · FSK 16', slug: 'hokuto-no-ken' },
  // ── CineMagic 1 · Sonntag ───────────────────────────────────────────
  { id: 'cm1-so-1', day: 'so', start: '11:30', end: '12:30', room: 'cinemagic1', cat: 'panel', title: 'MAPPA: 15th Anniversary Panel', sub: 'Q&A-Panel mit den Gästen von Studio MAPPA', slug: 'mappa' },
  { id: 'cm1-so-2', day: 'so', start: '13:30', end: '14:30', room: 'cinemagic1', cat: 'panel', title: 'Call of the Night Season 2 Insider AnimagiC 2026', sub: 'Q&A-Panel & Live-Dubbing mit dem Team von Call of the Night Season 2' },
  { id: 'cm1-so-3', day: 'so', start: '15:00', end: '16:00', room: 'cinemagic1', cat: 'panel', title: 'Though I Am an Inept Villainess: Special Stage', sub: 'Screening Episode 1 · Q&A-Panel mit Synchronsprecherin Lin Gothoni', premiere: 'DUB-Premiere', slug: 'lin-gothoni' },
  { id: 'cm1-so-4', day: 'so', start: '16:15', end: '17:15', room: 'cinemagic1', cat: 'panel', title: 'NinotakuTV', sub: 'Q&A mit Moderator Nino Kerl', slug: 'ninotaku-tv' },
  { id: 'cm1-so-5', day: 'so', start: '17:30', end: '18:30', room: 'cinemagic1', cat: 'screening', title: 'Call of the Night Season 2', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 12' },

  // ── AnimagiC-Kino 1 · Freitag ───────────────────────────────────────
  { id: 'k1-fr-1', day: 'fr', start: '15:30', end: '16:30', room: 'kino1', cat: 'panel', title: 'Snowball Earth: Special Panel', sub: 'Q&A & Live-Drawing mit Manga-ka Yuhiro Tsujitsugu', slug: 'yuhiro-tsujitsugu' },
  { id: 'k1-fr-2', day: 'fr', start: '17:00', end: '18:00', room: 'kino1', cat: 'panel', title: 'Dice Actors – Synchronstars im Q&A', sub: 'Q&A-Panel mit den Dice Actors', slug: 'dice-actors' },
  { id: 'k1-fr-3', day: 'fr', start: '18:30', end: '19:30', room: 'kino1', cat: 'panel', title: 'Digimon Tamers – Das Jubiläums-Panel', sub: '25 Jahre Digimon Tamers – ein Rückblick mit KSM Anime' },
  { id: 'k1-fr-4', day: 'fr', start: '20:00', end: '20:30', room: 'kino1', cat: 'screening', title: 'Anne Shirley', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 6' },
  { id: 'k1-fr-5', day: 'fr', start: '20:30', end: '21:00', room: 'kino1', cat: 'screening', title: 'Girls Band Cry', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'k1-fr-6', day: 'fr', start: '21:15', end: '22:15', room: 'kino1', cat: 'screening', title: 'Servamp: Alice in the Garden', sub: '', meta: 'OmU · ca. 60 Min. · FSK 12', slug: 'servamp-alice' },
  { id: 'k1-fr-7', day: 'fr', start: '22:30', end: '23:45', room: 'kino1', cat: 'screening', title: 'THE GHOST IN THE SHELL', sub: '', meta: 'Ep. 1–3 · Dt. · ca. 75 Min. · FSK 12', slug: 'ghost-in-the-shell' },
  // ── AnimagiC-Kino 1 · Samstag ───────────────────────────────────────
  { id: 'k1-sa-1', day: 'sa', start: '11:00', end: '12:15', room: 'kino1', cat: 'panel', title: 'Vom Yakuza zur Villainess', sub: 'Q&A & Live-Drawing', slug: 'touko-amekawa-sora-goto' },
  { id: 'k1-sa-2', day: 'sa', start: '13:00', end: '14:00', room: 'kino1', cat: 'panel', title: 'Just Like Mona Lisa-Anime: Panel', sub: 'Exklusives neues Filmmaterial, Special-Talk & Live-Drawing mit Tsumuji Yoshimura-sensei und dem Produktionsteam', slug: 'tsumuji-yoshimura' },
  { id: 'k1-sa-3', day: 'sa', start: '14:30', end: '16:00', room: 'kino1', cat: 'panel', title: 'AniMoon- & MANGAMOON-Panel', sub: 'Q&A- und News-Panel' },
  { id: 'k1-sa-4', day: 'sa', start: '16:30', end: '17:30', room: 'kino1', cat: 'panel', title: 'peppermint anime x AKIBA PASS', sub: 'News & Spaß mit dem peppermint-anime-Team' },
  { id: 'k1-sa-5', day: 'sa', start: '18:00', end: '18:45', room: 'kino1', cat: 'panel', title: 'ADN präsentiert', sub: 'Exklusive Anime-Previews von und mit ADN' },
  { id: 'k1-sa-6', day: 'sa', start: '19:15', end: '20:30', room: 'kino1', cat: 'screening', title: 'YAIBA: Samurai Legend – Season 1', sub: 'Produzent Takuro Marutsubaki begrüßt euch zum Screening der ersten beiden Episoden', premiere: 'DUB-Premiere' },
  { id: 'k1-sa-7', day: 'sa', start: '20:45', end: '22:20', room: 'kino1', cat: 'screening', title: 'MOBILE SUIT GUNDAM HATHAWAY', sub: '', meta: 'OmeU · ca. 95 Min. · FSK 16', slug: 'gundam-hathaway' },
  { id: 'k1-sa-8', day: 'sa', start: '22:30', end: '00:35', room: 'kino1', cat: 'screening', title: 'MOBILE SUIT GUNDAM HATHAWAY: The Sorcerey of Nymph Circe', sub: '', premiere: 'Europapremiere', meta: 'OmeU · ca. 108 Min. · FSK 16', slug: 'gundam-nymph-circe' },
  // ── AnimagiC-Kino 1 · Sonntag ───────────────────────────────────────
  { id: 'k1-so-1', day: 'so', start: '10:30', end: '11:15', room: 'kino1', cat: 'panel', title: 'Dice Actors – Synchronstars im Q&A', sub: 'Q&A-Panel mit den Dice Actors', slug: 'dice-actors' },
  { id: 'k1-so-2', day: 'so', start: '11:45', end: '12:45', room: 'kino1', cat: 'screening', title: 'KAIJU GIRL CARAMELISE', sub: 'Ep. 5 + Ep. 6', premiere: 'Europapremiere', meta: 'OmU · ca. 50 Min. · FSK 12', slug: 'spica-aoki' },
  { id: 'k1-so-3', day: 'so', start: '12:45', end: '13:15', room: 'kino1', cat: 'panel', title: 'KAIJU GIRL CARAMELISE: Special Talk', sub: 'Q&A mit Manga-ka Spica Aoki und dem Anime-Team', slug: 'spica-aoki' },
  { id: 'k1-so-4', day: 'so', start: '13:45', end: '14:30', room: 'kino1', cat: 'panel', title: 'KSM Anime Publisher-Panel', sub: 'Lizenz-News & Produkt-Highlights' },
  { id: 'k1-so-5', day: 'so', start: '15:00', end: '16:15', room: 'kino1', cat: 'screening', title: 'YAIBA: Samurai Legend – Season 1', sub: 'Produzent Takuro Marutsubaki begrüßt euch zum Screening der ersten beiden Episoden', premiere: 'DUB-Premiere' },
  { id: 'k1-so-6', day: 'so', start: '16:30', end: '18:05', room: 'kino1', cat: 'screening', title: 'Alice im Wunderland: Dive in Wonderland', sub: '', meta: 'Dt. · ca. 95 Min. · FSK 12', slug: 'alice-dive-in-wonderland' },
  { id: 'k1-so-7', day: 'so', start: '18:15', end: '18:45', room: 'kino1', cat: 'screening', title: 'Anne Shirley', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 6' },

  // ── AnimagiC-Kino 2 · Freitag ───────────────────────────────────────
  { id: 'k2-fr-1', day: 'fr', start: '14:30', end: '15:15', room: 'kino2', cat: 'panel', title: 'Behind the Scenes: Mit Profi-Manga-ka Mayumi Nagashi', sub: 'Q&A-Panel mit Live-Drawing', slug: 'mayumi-nagashi' },
  { id: 'k2-fr-2', day: 'fr', start: '15:45', end: '16:45', room: 'kino2', cat: 'signierstunde', title: 'Vom Yakuza zur Villainess: Touko Amekawa & Sora Goto', sub: 'Signierstunde · Teilnahme nur mit limitierter Goldmünze möglich, die ab Hallenöffnung am Stand von Dokico erhältlich sind', slug: 'touko-amekawa-sora-goto' },
  { id: 'k2-fr-3', day: 'fr', start: '17:15', end: '18:15', room: 'kino2', cat: 'signierstunde', title: 'Studio MAPPA: Manabu Otsuka & Kaori Makita', sub: 'Signierstunde · „First Come, First Served“', slug: 'mappa' },
  { id: 'k2-fr-4', day: 'fr', start: '18:45', end: '20:20', room: 'kino2', cat: 'screening', title: 'The Dangers in My Heart: The Movie', sub: '', meta: 'Dt. · ca. 102 Min. · FSK 6', slug: 'dangers-in-my-heart-movie' },
  { id: 'k2-fr-5', day: 'fr', start: '20:30', end: '21:00', room: 'kino2', cat: 'screening', title: 'The World Is Dancing', sub: '', meta: 'OmU · ca. 25 Min. · FSK 12' },
  { id: 'k2-fr-6', day: 'fr', start: '21:00', end: '21:50', room: 'kino2', cat: 'screening', title: 'Tougen Anki', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 16' },
  { id: 'k2-fr-7', day: 'fr', start: '22:00', end: '22:50', room: 'kino2', cat: 'screening', title: 'Hellsing Ultimate OVA', sub: '', meta: 'Ep. 1 · Dt. · ca. 50 Min. · FSK 16' },
  { id: 'k2-fr-8', day: 'fr', start: '23:00', end: '00:45', room: 'kino2', cat: 'screening', title: 'Golgo 13', sub: '', meta: 'Dt. · ca. 95 Min. · FSK 16', slug: 'golgo-13' },
  // ── AnimagiC-Kino 2 · Samstag ───────────────────────────────────────
  { id: 'k2-sa-1', day: 'sa', start: '11:00', end: '11:45', room: 'kino2', cat: 'panel', title: 'So entsteht ein japanischer Manga – mit Mayumi Nagashi', sub: 'Q&A-Panel mit Live-Drawing', slug: 'mayumi-nagashi' },
  { id: 'k2-sa-2', day: 'sa', start: '12:15', end: '13:00', room: 'kino2', cat: 'panel', title: 'Hardball Films Panel', sub: 'Exklusive Lizenz-News & Klassiker-Anime-Q&A' },
  { id: 'k2-sa-3', day: 'sa', start: '13:30', end: '14:30', room: 'kino2', cat: 'signierstunde', title: 'Tokyo Revengers: Sho Karino', sub: 'Signierstunde · „First Come, First Served“', slug: 'sho-karino' },
  { id: 'k2-sa-4', day: 'sa', start: '15:00', end: '15:45', room: 'kino2', cat: 'panel', title: 'KAZÉ-Panel: KAZÉ Herbst 26/27 ... und mehr!', sub: 'Programm-Neuheiten & KAZÉ-Q&A' },
  { id: 'k2-sa-5', day: 'sa', start: '16:15', end: '17:15', room: 'kino2', cat: 'signierstunde', title: 'KAIJU GIRL CARAMELISE: Spica Aoki', sub: 'Signierstunde · „First Come, First Served“', slug: 'spica-aoki' },
  { id: 'k2-sa-6', day: 'sa', start: '17:45', end: '19:00', room: 'kino2', cat: 'signierstunde', title: 'Dragon’s Destiny: Lesung & Signierstunde', sub: 'mit Yunuyei & Vincent Fallow · „First Come, First Served“' },
  { id: 'k2-sa-7', day: 'sa', start: '19:30', end: '20:00', room: 'kino2', cat: 'screening', title: 'A New Dawn', sub: 'Preview', meta: 'Dt. · ca. 20 Min. · FSK 12', slug: 'a-new-dawn' },
  { id: 'k2-sa-8', day: 'sa', start: '20:00', end: '21:55', room: 'kino2', cat: 'screening', title: 'Labyrinth', sub: '', premiere: 'Europa-Convention-Premiere', meta: 'OmU · ca. 115 Min. · FSK 12', slug: 'labyrinth' },
  { id: 'k2-sa-9', day: 'sa', start: '22:00', end: '23:00', room: 'kino2', cat: 'screening', title: 'Doukyusei – Verliebt in meinen Mitschüler', sub: '', meta: 'OmU · ca. 61 Min. · FSK 16', slug: 'doukyusei' },
  { id: 'k2-sa-10', day: 'sa', start: '23:15', end: '23:45', room: 'kino2', cat: 'screening', title: 'Demon Slave – The Chained Soldier – Season 2', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 16' },
  { id: 'k2-sa-11', day: 'sa', start: '23:45', end: '00:15', room: 'kino2', cat: 'screening', title: 'Virgin Road: Die Henkerin und ihre Art zu leben', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  // ── AnimagiC-Kino 2 · Sonntag ───────────────────────────────────────
  { id: 'k2-so-1', day: 'so', start: '11:00', end: '12:00', room: 'kino2', cat: 'panel', title: 'Kimi wo Tsumugu: Dokico-Panel', sub: 'Behind the Scenes + Ausblick auf die Zukunft des Verlags mit dem Anime-Team von ponbleu' },
  { id: 'k2-so-2', day: 'so', start: '12:30', end: '13:30', room: 'kino2', cat: 'signierstunde', title: 'Vom Yakuza zur Villainess: Touko Amekawa & Sora Goto', sub: 'Signierstunde · Teilnahme nur mit limitierter Goldmünze möglich, die ab Hallenöffnung am Stand von Dokico erhältlich sind', slug: 'touko-amekawa-sora-goto' },
  { id: 'k2-so-3', day: 'so', start: '14:00', end: '14:45', room: 'kino2', cat: 'panel', title: 'polyband anime Panel', sub: 'Der Publisher präsentiert aktuelle und kommende Highlights' },
  { id: 'k2-so-4', day: 'so', start: '15:15', end: '16:15', room: 'kino2', cat: 'signierstunde', title: 'KAIJU GIRL CARAMELISE: Spica Aoki', sub: 'Signierstunde · „First Come, First Served“', slug: 'spica-aoki' },
  { id: 'k2-so-5', day: 'so', start: '16:45', end: '18:15', room: 'kino2', cat: 'screening', title: '100 Meters', sub: '', meta: 'OmU · ca. 106 Min. · FSK 6', slug: '100-meters' },

  // ── AnimagiC-Kino 3 · Freitag ───────────────────────────────────────
  { id: 'k3-fr-1', day: 'fr', start: '14:45', end: '15:15', room: 'kino3', cat: 'panel', title: 'papertoons-Publisher-Panel', sub: '' },
  { id: 'k3-fr-2', day: 'fr', start: '16:00', end: '17:00', room: 'kino3', cat: 'workshop', title: 'Angelina Paustian · Workshop', sub: 'Bento! Japanische Lebensfreude in der Box' },
  { id: 'k3-fr-3', day: 'fr', start: '17:30', end: '18:30', room: 'kino3', cat: 'workshop', title: 'JNTO · Workshop', sub: 'Japanreisen auf den Spuren von Anime & Manga' },
  { id: 'k3-fr-4', day: 'fr', start: '19:00', end: '19:30', room: 'kino3', cat: 'screening', title: 'MAO', sub: '', meta: 'Ep. 1 · OmU · ca. 25 Min. · FSK 12' },
  { id: 'k3-fr-5', day: 'fr', start: '19:30', end: '20:00', room: 'kino3', cat: 'screening', title: 'I Was Reincarnated as the 7th Prince', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-6', day: 'fr', start: '20:00', end: '20:30', room: 'kino3', cat: 'screening', title: 'BLEACH: TYBW – Season 1', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-7', day: 'fr', start: '20:30', end: '21:00', room: 'kino3', cat: 'screening', title: 'Strike Witches – Staffel 2', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-8', day: 'fr', start: '21:15', end: '21:45', room: 'kino3', cat: 'screening', title: 'Re:Monster', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-9', day: 'fr', start: '21:45', end: '22:15', room: 'kino3', cat: 'screening', title: 'BLEACH: TYBW – Season 2', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-10', day: 'fr', start: '22:15', end: '22:45', room: 'kino3', cat: 'screening', title: 'My Gift Lv9999 Unlimited Gacha', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-11', day: 'fr', start: '23:00', end: '23:30', room: 'kino3', cat: 'screening', title: 'My One-Hit Kill Sister', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-12', day: 'fr', start: '23:30', end: '00:00', room: 'kino3', cat: 'screening', title: 'BLEACH: TYBW – Season 3', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-fr-13', day: 'fr', start: '00:00', end: '00:30', room: 'kino3', cat: 'screening', title: 'Nukitashi: Welcome to Love Island', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  // ── AnimagiC-Kino 3 · Samstag ───────────────────────────────────────
  { id: 'k3-sa-1', day: 'sa', start: '11:00', end: '12:00', room: 'kino3', cat: 'workshop', title: 'Go! Go! Nihon · Workshop', sub: 'Lerne Japanisch mit Go! Go! Nihon' },
  { id: 'k3-sa-2', day: 'sa', start: '12:30', end: '13:30', room: 'kino3', cat: 'panel', title: 'Oventroja: Talk mit Daniel Eichinger', sub: 'Panel' },
  { id: 'k3-sa-3', day: 'sa', start: '14:00', end: '15:00', room: 'kino3', cat: 'workshop', title: 'Angelina Paustian · Workshop', sub: 'Ramen kochen Basics!' },
  { id: 'k3-sa-4', day: 'sa', start: '15:30', end: '16:15', room: 'kino3', cat: 'panel', title: 'Panini-Manga-Panel', sub: 'Vergangenheit, Gegenwart und Zukunft von Panini Manga' },
  { id: 'k3-sa-5', day: 'sa', start: '16:45', end: '17:30', room: 'kino3', cat: 'workshop', title: 'JNTO · Workshop', sub: 'Japanreise für Samurai-Fans' },
  { id: 'k3-sa-6', day: 'sa', start: '18:00', end: '18:45', room: 'kino3', cat: 'panel', title: 'Tonkatsu Pictures – 2026/27', sub: 'Publisher Tonkatsu Pictures präsentiert seinen Release-Plan' },
  { id: 'k3-sa-7', day: 'sa', start: '19:00', end: '19:45', room: 'kino3', cat: 'panel', title: 'Yomeru: Verlags-Panel', sub: '' },
  { id: 'k3-sa-8', day: 'sa', start: '20:00', end: '20:30', room: 'kino3', cat: 'screening', title: 'Kubo Won’t Let Me Be Invisible', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'k3-sa-9', day: 'sa', start: '20:30', end: '21:00', room: 'kino3', cat: 'screening', title: 'The Most Heretical Last Boss Queen', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'k3-sa-10', day: 'sa', start: '21:00', end: '22:00', room: 'kino3', cat: 'screening', title: 'BLEACH: TYBW – Season 4', sub: '', meta: 'Ep. 1 · Dt. · ca. 60 Min. · FSK 16' },
  { id: 'k3-sa-11', day: 'sa', start: '22:15', end: '22:45', room: 'kino3', cat: 'screening', title: 'Good Luck Girl', sub: '', premiere: 'DUB-Premiere', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 12' },
  { id: 'k3-sa-12', day: 'sa', start: '22:45', end: '23:15', room: 'kino3', cat: 'screening', title: 'Spice & Wolf: Merchant Meets The Wise Wolf', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-sa-13', day: 'sa', start: '23:15', end: '23:45', room: 'kino3', cat: 'screening', title: 'I’m Standing on a Million Lives', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-sa-14', day: 'sa', start: '23:45', end: '00:15', room: 'kino3', cat: 'screening', title: 'The Café Terrace and Its Goddesses', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  { id: 'k3-sa-15', day: 'sa', start: '00:15', end: '00:45', room: 'kino3', cat: 'screening', title: 'Please Put Them On, Takamine-san', sub: '', meta: 'Ep. 1 · Dt. · ca. 25 Min. · FSK 16' },
  // ── AnimagiC-Kino 3 · Sonntag ───────────────────────────────────────
  { id: 'k3-so-1', day: 'so', start: '11:00', end: '12:00', room: 'kino3', cat: 'workshop', title: 'Go! Go! Nihon · Workshop', sub: 'Dein Guide für das Leben in Japan mit Go! Go! Nihon' },
  { id: 'k3-so-2', day: 'so', start: '12:30', end: '13:30', room: 'kino3', cat: 'panel', title: 'TOKYOPOP-Panel', sub: 'Die HIGHLIGHTS von TOKYOPOP' },
  { id: 'k3-so-3', day: 'so', start: '14:00', end: '15:00', room: 'kino3', cat: 'panel', title: 'The Wrong Scents: Talk mit Anne Luise P.', sub: 'Panel' },
  { id: 'k3-so-4', day: 'so', start: '15:30', end: '16:30', room: 'kino3', cat: 'workshop', title: 'JNTO · Workshop', sub: 'Reisen ins unentdeckte Japan' },
  { id: 'k3-so-5', day: 'so', start: '16:45', end: '17:35', room: 'kino3', cat: 'screening', title: 'Inazuma Eleven', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 6', slug: 'inazuma-eleven' },
  { id: 'k3-so-6', day: 'so', start: '17:45', end: '18:35', room: 'kino3', cat: 'screening', title: 'Christopher Columbus', sub: '', meta: 'Ep. 1+2 · Dt. · ca. 50 Min. · FSK 6', slug: 'christopher-columbus' },

  // ── Signing-Room · Freitag ──────────────────────────────────────────
  { id: 'sig-fr-1', day: 'fr', start: '14:30', end: '15:30', room: 'signing', cat: 'signierstunde', title: 'Dice Actors: Signierstunde', sub: '„First Come, First Served“', slug: 'dice-actors' },
  { id: 'sig-fr-2', day: 'fr', start: '16:00', end: '17:00', room: 'signing', cat: 'signierstunde', title: 'Miyu Kaneko: Signierstunde & Merchandise-Verkauf', sub: '„First Come, First Served“ · Jeder Teilnehmer erhält ein Autogramm auf einem AnimagiC-Shikishi. Der Produktkauf ist keine Pflicht, Käufer werden aber bevorzugt behandelt und erhalten zusätzlich ein Foto mit Miyu Kaneko.', slug: 'miyu-kaneko' },
  { id: 'sig-fr-3', day: 'fr', start: '17:30', end: '18:30', room: 'signing', cat: 'signierstunde', title: 'Budo & Ken: Signierstunde', sub: '„First Come, First Served“', slug: 'budo-ken' },
  // ── Signing-Room · Samstag ──────────────────────────────────────────
  { id: 'sig-sa-1', day: 'sa', start: '11:15', end: '12:15', room: 'signing', cat: 'signierstunde', title: 'Dice Actors: Signierstunde', sub: '„First Come, First Served“', slug: 'dice-actors' },
  { id: 'sig-sa-2', day: 'sa', start: '13:00', end: '14:00', room: 'signing', cat: 'signierstunde', title: 'Studio MAPPA: Manabu Otsuka & Kaori Makita', sub: 'Signierstunde · „First Come, First Served“', slug: 'mappa' },
  { id: 'sig-sa-3', day: 'sa', start: '14:30', end: '15:30', room: 'signing', cat: 'signierstunde', title: 'Vom Yakuza zur Villainess: Touko Amekawa & Sora Goto', sub: 'Signierstunde · Teilnahme nur mit limitierter Goldmünze möglich, die ab Hallenöffnung am Stand von Dokico erhältlich sind', slug: 'touko-amekawa-sora-goto' },
  { id: 'sig-sa-4', day: 'sa', start: '16:15', end: '17:15', room: 'signing', cat: 'signierstunde', title: 'Miyu Kaneko: Signierstunde & Merchandise-Verkauf', sub: '„First Come, First Served“ · Autogramm auf AnimagiC-Shikishi, Käufer erhalten zusätzlich ein Foto mit Miyu Kaneko.', slug: 'miyu-kaneko' },
  { id: 'sig-sa-5', day: 'sa', start: '18:00', end: '19:00', room: 'signing', cat: 'signierstunde', title: 'Budo & Ken: Signierstunde', sub: '„First Come, First Served“', slug: 'budo-ken' },
  // ── Signing-Room · Sonntag ──────────────────────────────────────────
  { id: 'sig-so-1', day: 'so', start: '11:15', end: '12:15', room: 'signing', cat: 'signierstunde', title: 'Miyu Kaneko: Signierstunde & Merchandise-Verkauf', sub: '„First Come, First Served“ · Autogramm auf AnimagiC-Shikishi, Käufer erhalten zusätzlich ein Foto mit Miyu Kaneko.', slug: 'miyu-kaneko' },
  { id: 'sig-so-2', day: 'so', start: '13:00', end: '14:00', room: 'signing', cat: 'signierstunde', title: 'Studio MAPPA: Manabu Otsuka & Kaori Makita', sub: 'Signierstunde · „First Come, First Served“', slug: 'mappa' },
  { id: 'sig-so-3', day: 'so', start: '14:30', end: '15:30', room: 'signing', cat: 'signierstunde', title: 'Budo & Ken: Signierstunde', sub: '„First Come, First Served“', slug: 'budo-ken' },
  { id: 'sig-so-4', day: 'so', start: '16:00', end: '17:00', room: 'signing', cat: 'signierstunde', title: 'Dice Actors: Signierstunde', sub: '„First Come, First Served“', slug: 'dice-actors' },

  // ── Signierstunden an den Publisher-Ständen ─────────────────────────
  // Atelier of Witch Hat · Crunchyroll VIP-Area
  { id: 'st-wh-fr', day: 'fr', start: '15:00', end: '16:00', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'Atelier of Witch Hat: Signierstunde', sub: 'Rena Motomura, Ayumu Watanabe & Hirotsugu Ogo · „First Come, First Served“', slug: 'witch-hat' },
  { id: 'st-wh-sa', day: 'sa', start: '14:00', end: '15:00', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'Atelier of Witch Hat: Signierstunde', sub: 'Rena Motomura, Ayumu Watanabe & Hirotsugu Ogo · „First Come, First Served“', slug: 'witch-hat' },
  { id: 'st-wh-so', day: 'so', start: '14:00', end: '15:00', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'Atelier of Witch Hat: Signierstunde', sub: 'Rena Motomura, Ayumu Watanabe & Hirotsugu Ogo · „First Come, First Served“', slug: 'witch-hat' },
  // Sparks of Tomorrow · ABC-Animation-Themenwelt Ebene 2
  { id: 'st-sot-fr', day: 'fr', start: '16:00', end: '17:30', room: 'stand', place: 'Sparks-of-Tomorrow-Stand · Ebene 2', cat: 'signierstunde', title: 'Sparks of Tomorrow: Signierstunde', sub: 'Minoru Ota & Kohei Okamura · Freitag: „First Come, First Served“; Sa/So: Teilnahme mit limitierten Merch-Produkten vom Stand', slug: 'sparks-of-tomorrow' },
  { id: 'st-sot-sa', day: 'sa', start: '11:00', end: '12:00', room: 'stand', place: 'Sparks-of-Tomorrow-Stand · Ebene 2', cat: 'signierstunde', title: 'Sparks of Tomorrow: Signierstunde', sub: 'Minoru Ota & Kohei Okamura · Freitag: „First Come, First Served“; Sa/So: Teilnahme mit limitierten Merch-Produkten vom Stand', slug: 'sparks-of-tomorrow' },
  { id: 'st-sot-so', day: 'so', start: '14:00', end: '15:00', room: 'stand', place: 'Sparks-of-Tomorrow-Stand · Ebene 2', cat: 'signierstunde', title: 'Sparks of Tomorrow: Signierstunde', sub: 'Minoru Ota & Kohei Okamura · Freitag: „First Come, First Served“; Sa/So: Teilnahme mit limitierten Merch-Produkten vom Stand', slug: 'sparks-of-tomorrow' },
  // Call of the Night Season 2 · peppermint anime
  { id: 'st-cotn-fr', day: 'fr', start: '15:45', end: '16:45', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'Call of the Night Season 2: Signierstunde', sub: 'Gen Sato, Tomoyuki Itamura, Yuki Tsuchimoto & Olivia Büschken · „First Come, First Served“ · signiert werden Call-of-the-Night-Shikishis' },
  { id: 'st-cotn-sa', day: 'sa', start: '11:45', end: '12:45', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'Call of the Night Season 2: Signierstunde', sub: 'Gen Sato, Tomoyuki Itamura, Yuki Tsuchimoto & Olivia Büschken · „First Come, First Served“ · signiert werden Call-of-the-Night-Shikishis' },
  { id: 'st-cotn-so', day: 'so', start: '10:45', end: '11:45', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'Call of the Night Season 2: Signierstunde', sub: 'Gen Sato, Tomoyuki Itamura, Yuki Tsuchimoto & Olivia Büschken · „First Come, First Served“ · signiert werden Call-of-the-Night-Shikishis' },
  // You and I Are Polar Opposites · Crunchyroll VIP-Area
  { id: 'st-po-fr', day: 'fr', start: '13:30', end: '14:30', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'You and I Are Polar Opposites: Signierstunde', sub: 'Anji Iwata & Daniel Kirchberger · „First Come, First Served“ · signiert werden Poster', slug: 'anji-iwata-daniel-kirchberger' },
  { id: 'st-po-sa', day: 'sa', start: '12:00', end: '13:00', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'You and I Are Polar Opposites: Signierstunde', sub: 'Anji Iwata & Daniel Kirchberger · „First Come, First Served“ · signiert werden Poster', slug: 'anji-iwata-daniel-kirchberger' },
  { id: 'st-po-so', day: 'so', start: '16:00', end: '17:00', room: 'stand', place: 'Crunchyroll VIP-Area · Ebene 2', cat: 'signierstunde', title: 'You and I Are Polar Opposites: Signierstunde', sub: 'Anji Iwata & Daniel Kirchberger · „First Come, First Served“ · signiert werden Poster', slug: 'anji-iwata-daniel-kirchberger' },
  // Snowball Earth · altraverse-Dekowelt
  { id: 'st-se-fr', day: 'fr', start: '17:00', end: '18:00', room: 'stand', place: 'Snowball-Earth-Dekowelt am altraverse-Stand · Ebene 0', cat: 'signierstunde', title: 'Yuhiro Tsujitsugu: Signierstunde', sub: 'Plätze werden morgens in der Dekowelt vergeben: Snowball-Earth-Manga mitbringen und am Glücksrad ein Ticket gewinnen (1 Ticket pro Person)', slug: 'yuhiro-tsujitsugu' },
  { id: 'st-se-so', day: 'so', start: '15:30', end: '16:30', room: 'stand', place: 'Snowball-Earth-Dekowelt am altraverse-Stand · Ebene 0', cat: 'signierstunde', title: 'Yuhiro Tsujitsugu: Signierstunde', sub: 'Plätze werden morgens in der Dekowelt vergeben: Snowball-Earth-Manga mitbringen und am Glücksrad ein Ticket gewinnen (1 Ticket pro Person)', slug: 'yuhiro-tsujitsugu' },
  // Mayumi Nagashi · Dokico
  { id: 'st-mn-fr', day: 'fr', start: '16:00', end: '17:00', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Mayumi Nagashi: Signierstunde', sub: 'Bei Kauf des Mangas „Aira-san in Bedrängnis“ am Dokico-Stand oder Vorlage eines Kaufbelegs: Autogramm auf Dokico-Shikishi', slug: 'mayumi-nagashi' },
  { id: 'st-mn-sa', day: 'sa', start: '13:00', end: '14:00', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Mayumi Nagashi: Signierstunde', sub: 'Bei Kauf des Mangas „Aira-san in Bedrängnis“ am Dokico-Stand oder Vorlage eines Kaufbelegs: Autogramm auf Dokico-Shikishi', slug: 'mayumi-nagashi' },
  { id: 'st-mn-so', day: 'so', start: '12:30', end: '13:30', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Mayumi Nagashi: Signierstunde', sub: 'Bei Kauf des Mangas „Aira-san in Bedrängnis“ am Dokico-Stand oder Vorlage eines Kaufbelegs: Autogramm auf Dokico-Shikishi', slug: 'mayumi-nagashi' },
  // ASCA · peppermint anime
  { id: 'st-asca-fr', day: 'fr', start: '14:30', end: '15:00', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'ASCA: Signierstunde', sub: 'Die ersten 25 CD-Käufer:innen des Tages erhalten ein garantiertes Ticket, weitere ein Good-Luck-Ticket · signiert werden CDs oder das AnimagiC-Shikishi', slug: 'asca' },
  { id: 'st-asca-so', day: 'so', start: '13:15', end: '13:45', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'ASCA: Signierstunde', sub: 'Die ersten 25 CD-Käufer:innen des Tages erhalten ein garantiertes Ticket, weitere ein Good-Luck-Ticket · signiert werden CDs oder das AnimagiC-Shikishi', slug: 'asca' },
  // SIREN starring IZUMI · peppermint anime
  { id: 'st-siren-sa', day: 'sa', start: '15:00', end: '15:30', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'SIREN starring IZUMI from SI-VIS: Signierstunde', sub: 'Follow auf X (@I_zumiii) oder TikTok (@izumitiktok) beim Anstellen nachweisen · Autogramm auf AnimagiC-Shikishi oder gekauftem Artikel', slug: 'siren-izumi' },
  { id: 'st-siren-so', day: 'so', start: '12:00', end: '12:30', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'SIREN starring IZUMI from SI-VIS: Signierstunde', sub: 'Follow auf X (@I_zumiii) oder TikTok (@izumitiktok) beim Anstellen nachweisen · Autogramm auf AnimagiC-Shikishi oder gekauftem Artikel', slug: 'siren-izumi' },
  // Ai Higuchi · Black Screen Records
  { id: 'st-aih-sa', day: 'sa', start: '17:45', end: '18:45', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'Ai Higuchi: Autogrammstunde', sub: 'Ticket beim Kauf limitierter Merch-Artikel (CD, T-Shirt, Halstuch) am Stand · Unterschrift auf erworbenem Artikel + Handshake · keine Fotos', slug: 'ai-higuchi' },
  { id: 'st-aih-so', day: 'so', start: '16:00', end: '17:00', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'Ai Higuchi: Autogrammstunde', sub: 'Ticket beim Kauf limitierter Merch-Artikel (CD, T-Shirt, Halstuch) am Stand · Unterschrift auf erworbenem Artikel + Handshake · keine Fotos', slug: 'ai-higuchi' },
  // MADKID · Black Screen Records
  { id: 'st-mk-fr', day: 'fr', start: '14:00', end: '15:00', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'MADKID: Signierstunde', sub: '„First Come, First Served“ · Käufer von MADKID-Produkten werden bevorzugt · signiert wird Produkt oder AnimagiC-Shikishi · keine Fotos/Videos', slug: 'madkid' },
  { id: 'st-mk-sa', day: 'sa', start: '15:00', end: '16:00', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'MADKID: Signierstunde', sub: '„First Come, First Served“ · Käufer von MADKID-Produkten werden bevorzugt · signiert wird Produkt oder AnimagiC-Shikishi · keine Fotos/Videos', slug: 'madkid' },
  { id: 'st-mk-so', day: 'so', start: '14:00', end: '15:00', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'MADKID: Signierstunde', sub: '„First Come, First Served“ · Käufer von MADKID-Produkten werden bevorzugt · signiert wird Produkt oder AnimagiC-Shikishi · keine Fotos/Videos', slug: 'madkid' },
  // VK Blanka · Black Screen Records
  { id: 'st-vkb-fr', day: 'fr', start: '16:00', end: '17:00', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'VK Blanka: Signierstunde', sub: '„First Come, First Served“ · signiert werden AnimagiC-Shikishis und Vinyl-Produkte · VK Blanka macht gerne ein Foto mit euch', slug: 'vk-blanka' },
  { id: 'st-vkb-so', day: 'so', start: '11:30', end: '12:30', room: 'stand', place: 'Black-Screen-Records-Stand', cat: 'signierstunde', title: 'VK Blanka: Signierstunde', sub: '„First Come, First Served“ · signiert werden AnimagiC-Shikishis und Vinyl-Produkte · VK Blanka macht gerne ein Foto mit euch', slug: 'vk-blanka' },
  // ASTERISM · peppermint anime
  { id: 'st-ast-fr', day: 'fr', start: '17:15', end: '18:00', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'ASTERISM: Signierstunde', sub: '„First Come, First Served“ · signiert werden AnimagiC-Shikishis und ASTERISM-Produkte · Kauf nicht verpflichtend, Käufer bevorzugt', slug: 'asterism' },
  { id: 'st-ast-sa', day: 'sa', start: '16:30', end: '17:15', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'ASTERISM: Signierstunde', sub: '„First Come, First Served“ · signiert werden AnimagiC-Shikishis und ASTERISM-Produkte · Kauf nicht verpflichtend, Käufer bevorzugt', slug: 'asterism' },
  { id: 'st-ast-so', day: 'so', start: '14:45', end: '15:30', room: 'stand', place: 'peppermint-anime-Stand', cat: 'signierstunde', title: 'ASTERISM: Signierstunde', sub: '„First Come, First Served“ · signiert werden AnimagiC-Shikishis und ASTERISM-Produkte · Kauf nicht verpflichtend, Käufer bevorzugt', slug: 'asterism' },
  // Lin Gothoni · TOHO
  { id: 'st-lg-sa', day: 'sa', start: '16:00', end: '17:00', room: 'stand', place: 'TOHO-Stand E2-08 · Ebene 2', cat: 'signierstunde', title: 'Lin Gothoni: Signierstunde', sub: 'Deutsche Stimme von Shu Keigetsu (Though I Am an Inept Villainess) · „First Come, First Served“ · Fans mit mitgebrachtem TOKYOPOP-Manga-Band werden bevorzugt', slug: 'lin-gothoni' },
  { id: 'st-lg-so', day: 'so', start: '16:15', end: '17:15', room: 'stand', place: 'TOHO-Stand E2-08 · Ebene 2', cat: 'signierstunde', title: 'Lin Gothoni: Signierstunde', sub: 'Deutsche Stimme von Shu Keigetsu (Though I Am an Inept Villainess) · „First Come, First Served“ · Fans mit mitgebrachtem TOKYOPOP-Manga-Band werden bevorzugt', slug: 'lin-gothoni' },
  // Bocchi the Rock!-Cast · AniMoon
  { id: 'st-btr-fr', day: 'fr', start: '19:00', end: '20:00', room: 'stand', place: 'AniMoon-Stand', cat: 'signierstunde', title: 'Bocchi the Rock!-Cast: Signierstunde', sub: 'Lisa Dzyadyk, Lea Kalbhenn, Amira Leisner & Luisa Wietzorek · AniMoon-Produkt mitbringen oder vor Ort erwerben · 30 Min. vorher erscheinen · „First Come, First Served“' },
  { id: 'st-btr-sa1', day: 'sa', start: '12:00', end: '13:00', room: 'stand', place: 'AniMoon-Stand', cat: 'signierstunde', title: 'Bocchi the Rock!-Cast: Signierstunde', sub: 'Lisa Dzyadyk, Lea Kalbhenn, Amira Leisner & Luisa Wietzorek · AniMoon-Produkt mitbringen oder vor Ort erwerben · 30 Min. vorher erscheinen · „First Come, First Served“' },
  { id: 'st-btr-sa2', day: 'sa', start: '17:00', end: '18:00', room: 'stand', place: 'AniMoon-Stand', cat: 'signierstunde', title: 'Bocchi the Rock!-Cast: Signierstunde', sub: 'Lisa Dzyadyk, Lea Kalbhenn & Amira Leisner · AniMoon-Produkt mitbringen oder vor Ort erwerben · 30 Min. vorher erscheinen · „First Come, First Served“' },
  { id: 'st-btr-so', day: 'so', start: '12:00', end: '13:00', room: 'stand', place: 'AniMoon-Stand', cat: 'signierstunde', title: 'Bocchi the Rock!-Cast: Signierstunde', sub: 'Lisa Dzyadyk, Lea Kalbhenn & Amira Leisner · AniMoon-Produkt mitbringen oder vor Ort erwerben · 30 Min. vorher erscheinen · „First Come, First Served“' },
  // altraverse-Stand A16 (Buch/Merch mitbringen oder erwerben; signiert wird Buch oder Gratis-Shikishi)
  { id: 'st-gz-fr', day: 'fr', start: '13:30', end: '14:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Gin Zarbo: Signierstunde', sub: 'Das Geheimnis von Scarecrow · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-gz-sa1', day: 'sa', start: '12:30', end: '13:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Gin Zarbo: Signierstunde', sub: 'Das Geheimnis von Scarecrow · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-gz-sa2', day: 'sa', start: '17:00', end: '18:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Gin Zarbo: Signierstunde', sub: 'Das Geheimnis von Scarecrow · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-gz-so', day: 'so', start: '15:30', end: '16:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Gin Zarbo: Signierstunde', sub: 'Das Geheimnis von Scarecrow · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-jj-fr', day: 'fr', start: '15:00', end: '16:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Janinja: Signierstunde', sub: 'I Don’t Hair · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-jj-sa1', day: 'sa', start: '14:00', end: '15:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Janinja: Signierstunde', sub: 'I Don’t Hair · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-jj-sa2', day: 'sa', start: '18:30', end: '19:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Janinja: Signierstunde', sub: 'I Don’t Hair · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-jj-so', day: 'so', start: '11:00', end: '12:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Janinja: Signierstunde', sub: 'I Don’t Hair · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-da-fr', day: 'fr', start: '16:00', end: '17:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Alessandro Starace & Leonardo Berghella: Signierstunde', sub: 'Dada Adventure · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-da-sa1', day: 'sa', start: '12:00', end: '13:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Alessandro Starace & Leonardo Berghella: Signierstunde', sub: 'Dada Adventure · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-da-sa2', day: 'sa', start: '16:15', end: '17:15', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Alessandro Starace & Leonardo Berghella: Signierstunde', sub: 'Dada Adventure · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-da-so', day: 'so', start: '14:00', end: '15:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Alessandro Starace & Leonardo Berghella: Signierstunde', sub: 'Dada Adventure · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-rc-sa1', day: 'sa', start: '11:00', end: '12:00', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Racami: Signierstunde', sub: 'Der Fluch des purpurnen Rauches / Die innere Stimme – Briefe an Lille · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-rc-sa2', day: 'sa', start: '15:30', end: '16:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Racami: Signierstunde', sub: 'Der Fluch des purpurnen Rauches / Die innere Stimme – Briefe an Lille · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  { id: 'st-rc-so', day: 'so', start: '12:30', end: '13:30', room: 'stand', place: 'altraverse-Stand A16', cat: 'signierstunde', title: 'Racami: Signierstunde', sub: 'Der Fluch des purpurnen Rauches / Die innere Stimme – Briefe an Lille · Buch/Merch mitbringen oder vor Ort erwerben · signiert wird Buch oder Gratis-Shikishi' },
  // Carlsen-Manga-Stand
  { id: 'st-dj-fr', day: 'fr', start: '15:00', end: '16:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'Dominik Jell: Signierstunde', sub: 'REVOLT · Mangaka von „MORTALIS“' },
  { id: 'st-dj-sa', day: 'sa', start: '11:00', end: '12:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'Dominik Jell: Signierstunde', sub: 'REVOLT · Mangaka von „MORTALIS“' },
  { id: 'st-dj-so', day: 'so', start: '13:00', end: '14:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'Dominik Jell: Signierstunde', sub: 'REVOLT · Mangaka von „MORTALIS“' },
  { id: 'st-ms-fr', day: 'fr', start: '16:00', end: '17:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'manus: Signierstunde', sub: 'Severed' },
  { id: 'st-ms-sa', day: 'sa', start: '14:00', end: '15:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'manus: Signierstunde', sub: 'Severed' },
  { id: 'st-ms-so', day: 'so', start: '11:00', end: '12:00', room: 'stand', place: 'Carlsen-Manga-Stand', cat: 'signierstunde', title: 'manus: Signierstunde', sub: 'Severed' },
  // Egmont-Manga-Stand H02
  { id: 'st-de-fr1', day: 'fr', start: '15:30', end: '17:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-fr2', day: 'fr', start: '18:00', end: '19:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-sa1', day: 'sa', start: '10:00', end: '11:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-sa2', day: 'sa', start: '14:00', end: '15:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-sa3', day: 'sa', start: '16:30', end: '17:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-so1', day: 'so', start: '10:30', end: '12:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-de-so2', day: 'so', start: '13:30', end: '15:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Daniel Eichinger: Signierstunde', sub: 'Oventroja' },
  { id: 'st-al-fr1', day: 'fr', start: '14:00', end: '15:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-al-fr2', day: 'fr', start: '17:00', end: '18:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-al-sa1', day: 'sa', start: '12:30', end: '14:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-al-sa2', day: 'sa', start: '15:30', end: '16:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-al-sa3', day: 'sa', start: '17:30', end: '19:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-al-so', day: 'so', start: '12:00', end: '13:30', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Anne Luise P.: Signierstunde', sub: 'The Wrong Scents / Bound' },
  { id: 'st-rp-sa1', day: 'sa', start: '12:30', end: '14:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Ren M. Pape: Signierstunde', sub: 'Nebel / Monster Forest' },
  { id: 'st-rp-sa2', day: 'sa', start: '15:30', end: '17:00', room: 'stand', place: 'Egmont-Manga-Stand H02 · Foyer West', cat: 'signierstunde', title: 'Ren M. Pape: Signierstunde', sub: 'Nebel / Monster Forest' },
  // Manlin-Stand H16
  { id: 'st-syb-fr', day: 'fr', start: '16:00', end: '18:00', room: 'stand', place: 'Manlin-Stand H16 · Westfoyer, Ebene 0', cat: 'signierstunde', title: 'Shi Yi Ball: Signierstunde', sub: 'Monstrous Heart · Autogrammticket ab 45 € Einkaufswert am Stand · Shikishi mit Unterschrift und kleiner Zeichnung · Fotos möglich' },
  { id: 'st-syb-sa', day: 'sa', start: '14:00', end: '16:00', room: 'stand', place: 'Manlin-Stand H16 · Westfoyer, Ebene 0', cat: 'signierstunde', title: 'Shi Yi Ball: Signierstunde', sub: 'Monstrous Heart · Autogrammticket ab 45 € Einkaufswert am Stand · Shikishi mit Unterschrift und kleiner Zeichnung · Fotos möglich' },
  { id: 'st-syb-so', day: 'so', start: '14:00', end: '16:00', room: 'stand', place: 'Manlin-Stand H16 · Westfoyer, Ebene 0', cat: 'signierstunde', title: 'Shi Yi Ball: Signierstunde', sub: 'Monstrous Heart · Autogrammticket ab 45 € Einkaufswert am Stand · Shikishi mit Unterschrift und kleiner Zeichnung · Fotos möglich' },
  // Magical Familiars
  { id: 'st-vf-sa', day: 'sa', start: '15:30', end: '16:30', room: 'stand', place: 'Magical-Familiars-Stand', cat: 'signierstunde', title: 'Vincent Fallow: Autogrammstunde', sub: 'Dragon’s Destiny · Collector’s Edition des Hörbuchs am Stand erwerben für Autogrammticket + Signierkarte (limitiert auf 50 Stück)' },
  // Ponbleu · Dokico
  { id: 'st-pb-fr', day: 'fr', start: '17:30', end: '18:30', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Ponbleu-Team: Signierstunde', sub: 'ani, Kam K’emon & Badbrix (Kimi wo Tsumugu / Lass mich dich flicken) · bei Produktkauf am Dokico-Stand: Autogramm auf Dokico-Shikishi' },
  { id: 'st-pb-sa', day: 'sa', start: '16:30', end: '17:30', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Ponbleu-Team: Signierstunde', sub: 'ani, Kam K’emon & Badbrix (Kimi wo Tsumugu / Lass mich dich flicken) · bei Produktkauf am Dokico-Stand: Autogramm auf Dokico-Shikishi' },
  { id: 'st-pb-so', day: 'so', start: '16:30', end: '17:30', room: 'stand', place: 'Dokico-Stand A09 · Ebene 0, Foyer Ost', cat: 'signierstunde', title: 'Ponbleu-Team: Signierstunde', sub: 'ani, Kam K’emon & Badbrix (Kimi wo Tsumugu / Lass mich dich flicken) · bei Produktkauf am Dokico-Stand: Autogramm auf Dokico-Shikishi' },
];

// Einlasszeiten der Säle (aus den Programmtafeln)
const HALL_ADMISSION = {
  mozartsaal: { fr: '15:45', sa: '11:00', so: '10:45' },
  musensaal: { fr: '14:30', sa: '10:45', so: '10:30' },
};

// Zusatzbeschreibungen (aus dem Programmheft) – werden per Slug den Events zugeordnet.
// Wird nach der Extraktion befüllt; leere Einträge werden ausgeblendet.
let DETAILS = {};

const FAQ = [
  {
    q: 'Wann und wo findet die AnimagiC 2026 statt?',
    a: 'Die AnimagiC 2026 findet von <strong>Freitag, 31. Juli bis Sonntag, 2. August 2026</strong> im <strong>Congress Center Rosengarten</strong> in Mannheim statt. Motto: <em>100% MAGIC</em>.',
  },
  {
    q: 'Welche Öffnungszeiten gelten?',
    a: `<strong>Einlass Rosengarten</strong> (nur mit Eintrittsarmband):<br>
      Freitag 13:00 – 01:00 Uhr · Samstag 09:30 – 01:00 Uhr · Sonntag 10:00 – 18:30 Uhr<br><br>
      <strong>Händler-/Ausstellerfoyers:</strong><br>
      Freitag 13:00 – 20:00 Uhr · Samstag 09:30 – 20:00 Uhr · Sonntag 10:00 – 19:00 Uhr<br><br>
      <strong>Variohalle</strong> (Bring & Buy / Künstlermarkt / Aussteller / Händler):<br>
      Freitag 13:00 – 20:00 Uhr · Samstag 09:30 – 20:00 Uhr · Sonntag 10:00 – 17:00 Uhr`,
  },
  {
    q: 'Wie funktioniert der Einlass?',
    a: `Alle Besucher gehen zuerst mit ihrem Ticket zur <strong>Armbandanlage</strong> (rechtes Eingangsportal, Raum Bruno Schmitz) und erhalten dort ihr AnimagiC-Armband. Dort gibt es auch die Con-Pakete Deluxe und T-Shirts. Der Einlass erfolgt dann über die Eingänge <strong>OST und WEST</strong>.<br><br>
      <strong>Öffnungszeiten Armbandanlage:</strong> Freitag 08:30 – 19:00 Uhr · Samstag 08:00 – 15:00 Uhr · Sonntag 09:00 – 13:00 Uhr (danach Abholung an der Tageskasse). Es werden nur Armbänder ausgegeben, die am gleichen Tag gültig sind.<br><br>
      Mit dem Armband könnt ihr den Rosengarten während der Gültigkeit beliebig oft verlassen und wieder betreten. Das Armband darf nicht manipuliert oder weitergegeben werden.`,
  },
  {
    q: 'Was ist der EXPRESS-Einlass?',
    a: `Der EXPRESS-Einlass gilt für Besucher mit <strong>EXPRESS-Armband</strong> (alle Tickets mit Hotelübernachtung sowie Con-Paket Deluxe mit EXPRESS-Einlass). Zur täglichen Hallenöffnung werden diese Besucher zuerst eingelassen:<br><br>
      Freitag 13:00 Uhr (Security-Kontrolle ab 12:40 Uhr)<br>
      Samstag 09:30 Uhr (Security-Kontrolle ab 09:10 Uhr)<br>
      Sonntag 10:00 Uhr (Security-Kontrolle ab 09:40 Uhr)<br><br>
      Danach wird der Eingang für alle anderen Armbänder geöffnet.`,
  },
  {
    q: 'Gibt es eine Tageskasse?',
    a: `Ja, am <strong>linken Eingangsportal</strong> des Rosengarten:<br>
      Freitag 09:00 – 21:00 Uhr · Samstag 08:00 – 19:00 Uhr · Sonntag 08:00 – 17:00 Uhr<br><br>
      Tageskassenkunden erhalten ihr Armband direkt beim Ticketkauf. Achtung: Bis zur Hallenöffnung muss der Rosengarten wieder verlassen werden.`,
  },
  {
    q: 'Was darf ich NICHT mitbringen?',
    a: `<ul>
      <li>Waffen aller Art sowie Wurfgeschosse und Gegenstände, die als solche verwendet werden können</li>
      <li>Speisen, Alkohol, Glas-/Keramik-/Metallflaschen aller Größen sowie Getränke in PET-Flaschen über 0,5 l</li>
      <li>Drogen, Gassprühdosen, ätzende oder färbende Substanzen (z. B. Deo-Spray), Feuerwerkskörper und Pyrotechnik</li>
      <li>Tiere (ausgenommen ausgebildete Assistenzhunde)</li>
      </ul>
      <strong>Erlaubt sind:</strong> Deo-Roller aus Plastik, 1 × 0,5-l-PET-Flasche mit nichtalkoholischem Getränk, 2 kleine Snacks (Obst, Brötchen, Croissant, Schoko-/Müsliriegel), notwendige Medikamente und ausgebildete Assistenzhunde.<br><br>
      Tipp: Möglichst auf Taschen verzichten – das beschleunigt die Security-Kontrolle.`,
  },
  {
    q: 'Was gilt für Cosplay-Waffen und Requisiten?',
    a: `Aus Sicherheitsgründen müssen <strong>sämtliche Cosplay-Waffenmodelle, -Requisiten und ausladende Kostümteile</strong> an der <strong>Cosplay-Garderobe</strong> (am Eingangsportal) abgegeben werden, bevor ihr zur Armbandausgabe geht oder die Convention betretet.<br><br>
      <strong>Öffnungszeiten Cosplay-Garderobe:</strong> Freitag 08:30 – 01:00 Uhr · Samstag 08:00 – 01:00 Uhr · Sonntag 08:00 – 19:15 Uhr<br><br>
      Wichtig: Holt eure Utensilien unbedingt wieder ab – Gegenstände, die am Sonntag nach 19:15 Uhr nicht abgeholt wurden, werden entsorgt. Bei Cosplays müssen Oberkörper, Po und Intimbereich ausreichend bedeckt sein. Die Verwendung des Manji-Symbols (z. B. Tokyo-Revengers-Cosplay) ist auf der AnimagiC untersagt.`,
  },
  {
    q: 'Darf ich fotografieren und filmen?',
    a: `In allen Panel-, Screening- und Vorführräumen (AnimagiC-Kinos, CineMagic, Mozart- und Musensaal usw.) gilt ein <strong>grundsätzliches Film-, Foto- und Aufnahmeverbot</strong> – das Handy muss dort ausgeschaltet werden.<br><br>
      Auf der übrigen Conventionfläche ist Fotografieren/Filmen für private Zwecke erlaubt. <strong>Cosplay ist keine stillschweigende Einwilligung:</strong> Fragt Cosplayer vor dem Foto und holt ihr Einverständnis ein, bevor ihr Bilder hochladet. Viele Ehrengäste möchten nicht fotografiert oder gefilmt werden. Livestreamen von der AnimagiC ist nicht gestattet.`,
  },
  {
    q: 'Wie läuft der Einlass in Mozart- und Musensaal?',
    a: `Im Mozart- und Musensaal finden in Programmpausen grundsätzlich <strong>keine Saalräumungen</strong> statt. Platzreservierungen durch Besucher sind nicht möglich – „freigehaltene“ Plätze werden bei Bedarf vor Programmbeginn durch die Saalordner freigegeben.<br><br>
      Die Teilnahme an einzelnen Programmpunkten ist nicht garantiert: Ist die maximale Kapazität eines Saals erreicht, ist kein Zutritt mehr möglich.<br><br>
      <strong>Sal-Einlass:</strong> Mozartsaal Fr 15:45 / Sa 11:00 / So 10:45 Uhr · Musensaal Fr 14:30 / Sa 10:45 / So 10:30 Uhr`,
  },
  {
    q: 'Ist die AnimagiC barrierefrei?',
    a: `Es gibt einen <strong>barrierefreien Eingang</strong> (Eingang West) sowie Aufzüge zu allen Ebenen. Barrierefreie WCs befinden sich auf Ebene -1 und Ebene 2. Rollstuhlfahrer und geheingeschränkte Personen erhalten den Einlass über den Eingang Tageskasse. Ein größerer Gebäudeplan ist auf AnimagiC.de verfügbar.`,
  },
  {
    q: 'Wo bekomme ich Hilfe oder Informationen?',
    a: `Der <strong>Info-Counter</strong> im Eingangsbereich (linkes Eingangsportal) ist die Anlaufstelle für alle Fragen und Probleme:<br>
      Freitag 09:00 – 01:00 Uhr · Samstag 08:00 – 01:00 Uhr · Sonntag 08:00 – 18:30 Uhr<br><br>
      Die AnimagiC-Crew erkennt ihr an den T-Shirts – wendet euch bei akuten Problemen an sie. Bei Unfällen: Ruhe bewahren und sofort die Sanitäter informieren – ausgebildete Sanitäter stehen während der gesamten Veranstaltung bereit.`,
  },
  {
    q: 'Welche Regeln gelten auf der Convention?',
    a: `<ul>
      <li>Im gesamten Rosengarten gilt strengstes Rauch-, Drogen-/Cannabis- und Alkoholverbot (auch auf dem Vorplatz).</li>
      <li>Gebäude, Einrichtung und Ausstellungsstücke pfleglich behandeln; Flyer verteilen ist nicht gestattet.</li>
      <li>Auf eigene Sachen achten – für gestohlene oder verlorene Gegenstände wird keine Haftung übernommen.</li>
      <li>Ehrengästen gegenüber höflich auftreten; was sie signieren dürfen, hängt von ihren Firmen ab.</li>
      <li>Respektvoller Umgang miteinander – bei Problemen an Security, Crew oder Info-Counter wenden.</li>
      </ul>`,
  },
  {
    q: 'Wo gibt es Essen und Trinken?',
    a: `Der <strong>Food-Court</strong> („Where's the Food?") bietet Essensstände auf dem Gelände. Zusätzlich gibt es das <strong>AnimagiC-Maid-Café</strong> (Maido no Kisetsu & Kisetsu League) in der Rosengarten Lounge auf Ebene 1 – mit Kuchen, hausgemachtem Eistee und Kaffeespezialitäten:<br>
      Freitag 13:00 – 22:00 Uhr · Samstag 09:30 – 22:00 Uhr · Sonntag 10:00 – 18:00 Uhr`,
  },
  {
    q: 'Was kosten die Tickets?',
    a: `Vorverkaufspreise (animagic.tickettoaster.de):<br>
      <strong>3-Tages-Pass:</strong> 135,50 € · <strong>Fr+Sa:</strong> 100,50 € · <strong>Sa+So:</strong> 110,50 €<br>
      <strong>Freitag:</strong> 50,50 € · <strong>Samstag:</strong> 73,50 € · <strong>Sonntag:</strong> 56,50 €<br><br>
      Begleitperson-Ticket 50 % ermäßigt (Schwerbehindertenausweis mit Merkzeichen „B“). An der Tageskasse gibt es nur Tagestickets – Preise/Verfügbarkeit werden auf animagic.de veröffentlicht. Die Besucherzahl kann aus Sicherheitsgründen begrenzt werden.`,
  },
  {
    q: 'Welche Altersregelungen gelten?',
    a: `<ul>
      <li><strong>Unter 6:</strong> Eintritt frei, nur in ständiger Begleitung eines Erwachsenen (mit Ticket); Konzertbesuch wegen Lautstärke nicht empfohlen</li>
      <li><strong>Unter 14:</strong> nur mit Erziehungsberechtigtem bzw. autorisiertem Erwachsenen (mit Ticket)</li>
      <li><strong>14–15 Jahre:</strong> ohne Begleitung max. bis 22:00 Uhr</li>
      <li><strong>16–17 Jahre:</strong> ohne Begleitung max. bis 24:00 Uhr</li>
      <li><strong>Kino/Screenings:</strong> FSK gilt – FSK 12 mit Elternprivileg ab 6, FSK 16/18 absolut. Ausweis bereithalten!</li>
      </ul>
      Ein Formular „Erziehungsbeauftragung“ gibt es auf animagic.de zum Download.`,
  },
  {
    q: 'Wie komme ich zum Rosengarten?',
    a: `<strong>Adresse:</strong> Congress Center Rosengarten, Rosengartenplatz 2, 68161 Mannheim<br><br>
      <strong>ÖPNV:</strong> Haltestellen „Wasserturm“ und „Rosengarten“ sind direkt vom Hauptbahnhof erreichbar; zu Fuß vom Hbf ca. 15 Minuten.<br>
      <strong>Auto:</strong> Parken in den Innenstadt-Parkhäusern (z. B. Parkhaus Rosengarten).<br><br>
      Beliebter Cosplay-Fotospot: die Wasserturm-Anlage direkt neben dem Rosengarten.`,
  },
  {
    q: 'Was gibt es sonst noch zu entdecken?',
    a: `<ul>
      <li><strong>Ebene -1 · Variohalle:</strong> Bring & Buy (Artikelabgabe Fr 09:00–12:30 über den Glaskubus) und Künstlermarkt</li>
      <li><strong>Ebene 0:</strong> Händler & Aussteller, Mozartsaal</li>
      <li><strong>Ebene 1:</strong> Games-Area (Fr 13:00–00:30, Sa 09:30–00:30, So 10:00–18:00 – u. a. Turniere, VR & Konsolen) und Maid-Café</li>
      <li><strong>Ebene 2:</strong> Crunchyroll-Area & Crunchyroll-Halle, weitere Aussteller & Aktionen</li>
      <li><strong>Charity:</strong> Große Charity-Auktion am Freitag, 16:30 Uhr im Crunchyroll Cinema</li>
      </ul>`,
  },
];
