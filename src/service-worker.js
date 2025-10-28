// Service Worker for GameStore PWA
const CACHE_NAME = 'gamestore-v1';
const STATIC_CACHE = 'gamestore-static-v1';
const IMAGE_CACHE = 'gamestore-images-v1';
const FONT_CACHE = 'gamestore-fonts-v1';

// Maximum cache age in seconds (1 year for images and fonts)
const MAX_CACHE_AGE = 365 * 24 * 60 * 60;

const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/icon.png',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [STATIC_CACHE, IMAGE_CACHE, FONT_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache with different strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Strategy for images
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(request).then((networkResponse) => {
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache valid responses
            if (networkResponse.ok) {
              cache.put(request, responseToCache);
            }
            
            return networkResponse;
          });
        });
      })
    );
    return;
  }
  
  // Strategy for fonts
  if (request.destination === 'font' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }
  
  // Strategy for static assets (CSS, JS)
  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
          
          return response || fetchPromise;
        });
      })
    );
    return;
  }
  
  // Default strategy: network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(STATIC_CACHE)
          .then((cache) => {
            cache.put(request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for offline purchases (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-purchases') {
    event.waitUntil(syncPurchases());
  }
});

async function syncPurchases() {
  // Implement your offline purchase sync logic here
  console.log('Syncing offline purchases...');
}

// Push notifications (optional)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificación de GameStore',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'gamestore-notification',
    requireInteraction: true
  };
  
  event.waitUntil(
    self.registration.showNotification('GameStore', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
