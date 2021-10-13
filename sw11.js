const cacheVersion = 'v202112';
const filesToCache = [
  '/?utm_source=PWA',
  '/css',
  '/script',
  '/images'
];

self.addEventListener('install', event => {
  self.skipwaiting();
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheVersion)
    .then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch', event.request);
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});
