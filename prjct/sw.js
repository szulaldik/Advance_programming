const CACHE ='prjct'
const FILES = [ 'prjct/index.html', 'prjct/images/flying-star.png', 'prjct/images/bear.png', 'prjct/images/bee.png',
'prjct/images/bird.png', 'prjct/images/cat.png', 'prjct/images/corgi.png', 'prjct/images/flamingo.png', 'prjct/images/penguin.png',
'prjct/images/owl.png', 'prjct/images/soru.jpg', 'prjct/images/clown-fish.png', 'prjct/images/lion.png', 'prjct/manifest.json','./']

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
