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
    "revision": "a9cd0bc1b0feb0c793eb656851f0dc59"
  },
  {
    "url": "assets/css/0.styles.f8d2c269.css",
    "revision": "7b73409b09cc8a7ff4bf05d59a745111"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.100a461e.js",
    "revision": "3cc7330a7aeea899b1dae1094c8c776f"
  },
  {
    "url": "assets/js/10.e979c37a.js",
    "revision": "ab5adfeb50c7748055fbe966b5812e49"
  },
  {
    "url": "assets/js/11.96faf7e1.js",
    "revision": "eae078c22cb9465aa4fe5596fc601df8"
  },
  {
    "url": "assets/js/12.146950b8.js",
    "revision": "e72c0ca244343176b82a57d26f4b259f"
  },
  {
    "url": "assets/js/13.9487be60.js",
    "revision": "8dee765b9763f3048780441ea006bca5"
  },
  {
    "url": "assets/js/14.8ac98d1e.js",
    "revision": "5587417b5935bf322d3ec0b30b7b6b98"
  },
  {
    "url": "assets/js/15.feff1f09.js",
    "revision": "9503d191c873538ea09abd5d58c5bc95"
  },
  {
    "url": "assets/js/16.24a468bc.js",
    "revision": "7e4280667a462a3ee8b9fd527c28e4a5"
  },
  {
    "url": "assets/js/17.53ab3f44.js",
    "revision": "148186331dcd9e2f6160d0e8f5eafb93"
  },
  {
    "url": "assets/js/18.fe38e33c.js",
    "revision": "4c646c36dad3bf94b2d29ef1e4ae151c"
  },
  {
    "url": "assets/js/19.7451966e.js",
    "revision": "c65d7e17e08b6f77e2e60afe50e556de"
  },
  {
    "url": "assets/js/20.6862c6e3.js",
    "revision": "ba5f8726cc9a2013752fe196f8f8b71b"
  },
  {
    "url": "assets/js/21.614d8e73.js",
    "revision": "e11ed0a1934422cda89fede9a519115d"
  },
  {
    "url": "assets/js/3.ea5bf3a9.js",
    "revision": "9d34602bb490d08659029517c3ea60b2"
  },
  {
    "url": "assets/js/4.af64838f.js",
    "revision": "5afd7f117ed2a8752083bb059ba0d803"
  },
  {
    "url": "assets/js/5.d08de251.js",
    "revision": "649783767ee7983d55ad421b5b7e272b"
  },
  {
    "url": "assets/js/6.138b9aa9.js",
    "revision": "67ee9904f8c06fae17547bb35e52b3bb"
  },
  {
    "url": "assets/js/7.2dc26617.js",
    "revision": "8dcaf55082561c0a3eaf804b4aba0d65"
  },
  {
    "url": "assets/js/8.3cc3c65b.js",
    "revision": "b74ab0a58c88d03252eb3a7452a38a6c"
  },
  {
    "url": "assets/js/9.8cfffb0a.js",
    "revision": "15cffa3ae6e63afd1302e027c3883ddc"
  },
  {
    "url": "assets/js/app.9f475bf6.js",
    "revision": "e77760ff86a7e98d2126113a4ababb50"
  },
  {
    "url": "bg.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "categories/index.html",
    "revision": "1a965ebbbbd61b311e467d3869fdbe58"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "4ada402a553a8f9790189ba98d534c77"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "d828d6d089b66d904f35cbda8ef0cb73"
  },
  {
    "url": "docs/devOps/index.html",
    "revision": "0c02b3053eb6e5197ba7608544fb1773"
  },
  {
    "url": "docs/java/index.html",
    "revision": "72129a65067c3b1e462aa9fa01d521e1"
  },
  {
    "url": "docs/other/2022/20220209.html",
    "revision": "b4166ff43b84df663276775070572d29"
  },
  {
    "url": "docs/other/2022/index.html",
    "revision": "d09574c914d01efbd8f0571016faca74"
  },
  {
    "url": "docs/other/about.html",
    "revision": "a2f159fbd1c37503aefac9e8fa1e604d"
  },
  {
    "url": "docs/other/firends.html",
    "revision": "151d94687641d5310ee5d99e0b3fa709"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "1cfcd2859e037b6f9d88c4704d04bbdc"
  },
  {
    "url": "index.html",
    "revision": "1f2f248cf2ff0b6b471e3d845364d4f4"
  },
  {
    "url": "pay.jpg",
    "revision": "a5a6472d111445425e21dde384575552"
  },
  {
    "url": "tag/index.html",
    "revision": "388a74421198475c0b1481f636e28127"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "db4c940d4da4e0e2bf8bc56804397fff"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "48a9a43a3ab3d46d0833d8e0c97fcb71"
  },
  {
    "url": "timeline/index.html",
    "revision": "d0d7752229e3df0fca9581cf284274fa"
  },
  {
    "url": "user.jpg",
    "revision": "42dc934fec61a302fb7ab9ccb883918b"
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
