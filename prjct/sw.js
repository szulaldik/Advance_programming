const CACHE ='prjct'
const FILES = [ 'index.html', 'images/flying-star.png', 'images/bear.png', 'images/bee.png',
'images/bird.png', 'images/cat.png', 'images/corgi.png', 'images/flamingo.png', 'images/penguin.png',
'images/owl.png', 'images/soru.jpg', 'images/clown-fish.png', 'images/lion.png','sw.js', 'manifest.json', './']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}

self.addEventListener('install', installCB)
function cacheCB(e) { //cache first
  let req = e.request
  e.respondWith(
    caches.match(req)
    .then(r1 => r1 || fetch(req))
    .catch(console.log)
  )
}
self.addEventListener('fetch', cacheCB)
