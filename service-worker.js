/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d434f9c7a09669a661d1bf0e19f0ed5a"
  },
  {
    "url": "assets/css/0.styles.49183b04.css",
    "revision": "bf92b81a2320d0277beaabffca7bd942"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7b440df5.js",
    "revision": "1c785ccae4c4e89d338f65506fca1c0f"
  },
  {
    "url": "assets/js/11.a3da3f83.js",
    "revision": "c15cab568354321c4e80ec8c1b1668f3"
  },
  {
    "url": "assets/js/12.bcd0136b.js",
    "revision": "e5289030d150abda451885fed0d73ae4"
  },
  {
    "url": "assets/js/13.b3cc7278.js",
    "revision": "42d6dc1e3d0fc05ab668b9869b218859"
  },
  {
    "url": "assets/js/14.94fb81ef.js",
    "revision": "f9cb413f8d510b5b6ab83a9e403a05db"
  },
  {
    "url": "assets/js/15.24f1241c.js",
    "revision": "eb5d2998ff99a41dcd340fd13ece9373"
  },
  {
    "url": "assets/js/2.b6a375be.js",
    "revision": "35ac0bf312f2ab45a20dcacecb93baf7"
  },
  {
    "url": "assets/js/3.2db9c10a.js",
    "revision": "ab75a3528008c3710c840af6c07e8b1c"
  },
  {
    "url": "assets/js/4.db5b0acc.js",
    "revision": "79613b63df75b46c70a82eb00baa78b2"
  },
  {
    "url": "assets/js/5.98c812a0.js",
    "revision": "1b70ccde651123f415221d2977ba8a7e"
  },
  {
    "url": "assets/js/6.6e23e6a9.js",
    "revision": "994a222a8b57e480debbb259a8c5b2ed"
  },
  {
    "url": "assets/js/7.7807a37f.js",
    "revision": "c4c17cca4a9def71345f5215dcf793aa"
  },
  {
    "url": "assets/js/8.1818c539.js",
    "revision": "af2697bdd76561020008e3915d2fb29c"
  },
  {
    "url": "assets/js/9.d44f2fdf.js",
    "revision": "ce6fbef1c36b683a8bac894fdf228bb2"
  },
  {
    "url": "assets/js/app.4ad8db26.js",
    "revision": "ddd99c178a80630eef04fa9f7e873f59"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "guide/index.html",
    "revision": "c23b188be57b0d2d6c11da24f027340d"
  },
  {
    "url": "index.html",
    "revision": "7bb85f06c2ca45ccb3b07c5044050bf3"
  },
  {
    "url": "notes/note.html",
    "revision": "9346d44f78791e3d859b945c34b99038"
  },
  {
    "url": "passages/2019-12-05-interview-1/index.html",
    "revision": "08f2720eb8201b6dc026b6a5f8224360"
  },
  {
    "url": "passages/2019-12-06-ourxmaps-maps/index.html",
    "revision": "0c4cdc510fbb714a0641e519759647af"
  },
  {
    "url": "passages/2019-12-06-ourxmaps-using/index.html",
    "revision": "63b73c87960b4d1f95ed308c42edd8d9"
  },
  {
    "url": "passages/2019-12-06-ourxmaps/index.html",
    "revision": "de63bdf9093b1a08da35576c1d8d1478"
  },
  {
    "url": "passages/2020-01-21-openssh-aarch64/index.html",
    "revision": "83e7f2fa87585d98b04cfc1ac40ac6c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
