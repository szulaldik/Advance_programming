const CACHE ='prjct'

const FILES = [ 'index.html', 'images/flying-star.png', 'images/bear.png', 'images/bee.png',
'images/bird.png', 'images/cat.png', 'images/corgi.png', 'images/flamingo.png', 'images/penguin.png',
'images/owl.png', 'images/soru.jpg', 'images/clown-fish.png', 'images/lion.png', 'manifest.json','./']

function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  }) 
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
self.addEventListener('fetch', fetchCB)
