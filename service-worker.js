if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1a4abaa798c9189028b48032c6746f15","url":"index.html"},{"revision":"187ba5f602a9c224e8b2150db14fe256","url":"precache-manifest.187ba5f602a9c224e8b2150db14fe256.js"},{"revision":"b3cd7050f080280414e4249141307da0","url":"static/css/12.243c3a81.chunk.css"},{"revision":"5297356b813d92afc277a7f1d2340252","url":"static/css/9.6cb74e6d.chunk.css"},{"revision":"6c0e8b578410e3906c6cb4e46871d062","url":"static/css/main.843892a3.chunk.css"},{"revision":"8600f90b888df3df88975edef5626524","url":"static/js/0.a4b7c211.chunk.js"},{"revision":"bf28dda4c6285cd4d42f87ce9c849177","url":"static/js/1.d6048967.chunk.js"},{"revision":"4c349b508a9b1dffd1de4fb62e3b5af4","url":"static/js/10.32359907.chunk.js"},{"revision":"675c637ab0d13c64d5f2c3fd318b66d6","url":"static/js/11.7cea8216.chunk.js"},{"revision":"79cb58cac654560523e165960551319b","url":"static/js/12.c21bbfca.chunk.js"},{"revision":"bb8fbe5dd1733f70a8ce53843adffcc6","url":"static/js/13.59ee45fd.chunk.js"},{"revision":"9ce37758d0463b7bf56caaf43a17c372","url":"static/js/14.2fe722c5.chunk.js"},{"revision":"2384f0a056dce76b72c1ccd9f52452e5","url":"static/js/15.6dee8cf6.chunk.js"},{"revision":"a3558053f67caccecb4bcabc13687b34","url":"static/js/16.068fa6cb.chunk.js"},{"revision":"309d61d678493c5057d609894b95c3b0","url":"static/js/17.74865910.chunk.js"},{"revision":"e41bb39ad3aec560c9c564412f3bf979","url":"static/js/18.7dd915f5.chunk.js"},{"revision":"aea959e94b600fe02fbfe0e398657425","url":"static/js/19.7b0bc79a.chunk.js"},{"revision":"ba32901eb469047646413d354bb75ff5","url":"static/js/2.ce3ee4c9.chunk.js"},{"revision":"190d4bec3b92b21ffa62685de62a927e","url":"static/js/20.6a3603d9.chunk.js"},{"revision":"bbb6af683a404b68e9ecc8122c91a9dc","url":"static/js/21.c4ae2e16.chunk.js"},{"revision":"b82161a4fd4b501f0e98a660aa7759f7","url":"static/js/22.ad965b93.chunk.js"},{"revision":"6cd44b8c6c103d085bda954540cd6741","url":"static/js/23.7e4b8d81.chunk.js"},{"revision":"bd4f9e98801ef128416d89b8fce438ee","url":"static/js/3.a374f60a.chunk.js"},{"revision":"9a5a794359fde316074ea08fa8555251","url":"static/js/4.c2351daa.chunk.js"},{"revision":"212fbe2f527fda897c6e550e3b29ee19","url":"static/js/5.b931d8eb.chunk.js"},{"revision":"dc3f89fe9a2da58eae5c86e66975a21d","url":"static/js/8.73614036.chunk.js"},{"revision":"1916b7f08e1d959e9470e9def0646ac9","url":"static/js/9.b5a62870.chunk.js"},{"revision":"184f464228ff91568963b1e56bdcc60f","url":"static/js/main.57296ba9.chunk.js"},{"revision":"2279668b212edf89c4369dfc4ef12e65","url":"static/js/runtime-main.7622fc7f.js"},{"revision":"e8c322de9658cbeb8a774b6624167c2c","url":"static/media/brand-icons.e8c322de.woff2"},{"revision":"0ab54153eeeca0ce03978cc463b257f7","url":"static/media/icons.0ab54153.woff2"},{"revision":"cd6c777f1945164224dee082abaea03a","url":"static/media/outline-icons.cd6c777f.woff2"}]);

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp(
        'https://dlag3y92c3.execute-api.us-east-1.amazonaws.com/prod/geo-data'
      ),
      new workbox.strategies.CacheFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
