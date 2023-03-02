const fileToCache = [
    'index.html',
    'styles/index.css',
    'js/main.js',
    'pages/404.html',
    '/pages/offline.html'
    
]
 const staticCache = 'Pages'

 /**********install *********/
 self.addEventListener('install' , event => {
    console.log('service worker is installing')
    
    event.waitUntil(
        caches.open(staticCache)
        .then(cache =>{
            return cache.addAll(fileToCache)
        })
    )
 })

 /**********activate *****/
 self.addEventListener('activate',event => {
    console.log("service worker is activating")
 })

 self.addEventListener('fetch' , event => {
    console.log('fetching : ', event.request.url)
   event.respondWith(
    caches.match(event.request) 
    .then(response => {
       // console.log(event.request)
        if(response){
            console.log(`found ${event.request.url} in cache`)
            return response
        }
        console.log('Network request for ',event.request.url)
        return fetch(event.request)
        .then (response => {
            if(response.status == 404){

            }
            else{
                return caches.open(staticCache)
                .then(cache => {
                    cache.put(event.request.url,response.clone())
                    return response
                })
            }
        })
       
    }).catch(error => {
           console.log("offline")
          return caches.match('/pages/offline.html')
       
    })
   )
})