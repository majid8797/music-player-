const CACHE_NAME = 'majid-music-v2';
const urlsToCache = [
  '/music-player/',
  '/music-player/index.html',
  '/music-player/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
