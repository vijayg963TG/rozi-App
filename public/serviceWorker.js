// let CACHE_NAME = 'beast_healthCare';
// const urlsToCache = [
//   '/',
//   '/login',
//   '/signup',
//   '/assets/images/maskable512.png',
//   '/manifest.json',
//   '/assets/images/bg.jpg',
//   '/assets/brand/roziroti-logos.jpeg',
//   '/assets/images/roziroti-logos192.jpeg',
//   '/assets/images/roziroti-logos256.jpeg',
//   '/assets/images/roziroti-logos384.jpeg',
//   '/assets/images/roziroti-logos512.jpeg',
//   '/assets/images/success.gif',
//   '/assets/icons/eye.png',
//   '/assets/icons/password.svg'
// ];

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// self.addEventListener('install', function (event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   );
//   self.skipWaiting();
// });
