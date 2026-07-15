// Service Worker – Offline-Cache (Cache-first für App-Shell)
const CACHE = 'animagic26-v8';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './details.js',
  './app.js',
  './manifest.webmanifest',
  './fonts/yanone-kaffeesatz-latin.woff2',
  './fonts/yanone-kaffeesatz-latin-ext.woff2',
  './img/icon.svg',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/icon-maskable-192.png',
  './img/icon-maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(
      (cached) =>
        cached ||
        fetch(e.request).then((resp) => {
          // Neue Ressourcen nachcachen
          if (resp.ok && new URL(e.request.url).origin === location.origin) {
            const clone = resp.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return resp;
        }).catch(() => cached)
    )
  );
});
