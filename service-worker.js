/* ======================================================
MODULE 01 — CACHE OFFLINE COMPLET
====================================================== */

const CACHE_NAME = "vpijlr-cache-v2";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",

  "/app.js",
  "/licenceManager.js",
  "/cloud-sync.js",
  "/typeVerification.js",
  "/gestionImpression.js",
  "/signatureMobile.js",
  "/gestionPiecesActives.js",

  "/logo_jlr.png",
  "/entreprise.json"
];

/* ======================================================
MODULE 02 — INSTALL
====================================================== */

self.addEventListener("install", event => {

  console.log("Service Worker installé");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );

});

/* ======================================================
MODULE 03 — ACTIVATE (NETTOYAGE CACHE)
====================================================== */

self.addEventListener("activate", event => {

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if(key !== CACHE_NAME){
            return caches.delete(key);
          }
        })
      );
    })
  );

});

/* ======================================================
MODULE 04 — FETCH OFFLINE INTELLIGENT
====================================================== */

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request).then(response => {

      if(response){
        return response;
      }

      return fetch(event.request).catch(() => {

        // fallback simple offline
        if(event.request.destination === "document"){
          return caches.match("/index.html");
        }

      });

    })

  );

});
