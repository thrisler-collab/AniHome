self.addEventListener("install", e => {
    console.log("install")
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./Licon.png", "./i512.png"])
        })
    )
} );