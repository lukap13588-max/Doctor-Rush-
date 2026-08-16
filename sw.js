// Doctor Rush v0.3.1 – Cache-Migration
// Dieser Worker speichert absichtlich nichts mehr offline.
// Falls noch ein alter Doctor-Rush-Service-Worker registriert ist,
// ersetzt diese Datei ihn und räumt die alten Caches auf.

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith("doctor-rush"))
        .map(key => caches.delete(key))
    );

    await self.registration.unregister();

    const clientsList = await self.clients.matchAll({ type: "window" });
    for (const client of clientsList) {
      client.postMessage({ type: "DOCTOR_RUSH_CACHE_CLEARED" });
    }
  })());
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
