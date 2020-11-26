const cacheName = "v1";
const cachedItems = ["index.html"];

const self = this;

// Installing Service Worker

self.addEventListener("install", (e) => {
    console.log("Service Worker was installed")
//When we want to cache a list of predefined URLs
  e.waitUntil(
    caches.open(cacheName)
        .then((cache) => {
            console.log("Opened cache");
            return cache.addAll(cachedItems);
        })
        .then(()=>self.skipWaiting())
  );
});

// Listening for requests

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then(() => {
        return fetch(e.request);
      })
      .catch(() => console.log("No Network!"))
  );
});

// Activating Service Worker and cleaning the old caches

self.addEventListener("activate", (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(cacheName);
  e.waitUntil(
    caches.keys().then((casheNames) => {
      return Promise.all(
        casheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
