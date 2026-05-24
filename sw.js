/* 强行注销并清除所有旧缓存 */
self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    self.registration.unregister()
    .then(function() {
        return self.clients.matchAll();
    })
    .then(function(clients) {
        clients.forEach(client => client.navigate(client.url));
    });
});
