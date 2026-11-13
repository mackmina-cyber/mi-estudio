/* Mi Estudio — network first: with internet it always loads the newest version
   from GitHub; without internet it uses the last saved copy. */
const CACHE = "mi-estudio";
/* geo/world.json and guides are saved automatically on first download. */
const FILES = ["./", "index.html", "descargar.html", "catalog.json", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
/* Guide files (guides/*.json) are saved automatically the first time they are downloaded. */

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request, { cache: "no-store" })
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
