const CACHE_NAME = "uniapply-v1";
const ASSETS = [
  "/UniApplySA/",
  "/UniApplySA/index.html",
  "/UniApplySA/manifest.json",
  "/UniApplySA/icon-192.png",
  "/UniApplySA/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
