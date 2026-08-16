// Doctor Rush v0.3.2 – kein permanenter Offline-Cache
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith("doctor-rush")).map(k=>caches.delete(k)));
    await self.registration.unregister();
  })());
});
self.addEventListener("fetch",event=>event.respondWith(fetch(event.request)));
