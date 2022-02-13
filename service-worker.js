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
    "revision": "f311d589e1c598bc1fbc7f90c473ba86"
  },
  {
    "url": "assets/css/0.styles.d099256b.css",
    "revision": "2b246e28ba821a55b7f86fe2e2963d92"
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
    "url": "assets/js/1.9d6965a3.js",
    "revision": "b85d5a444e5902b27e01ee316eb5c761"
  },
  {
    "url": "assets/js/10.78c01b5a.js",
    "revision": "938bc1c5265e32c4ece103a8bfd9e956"
  },
  {
    "url": "assets/js/11.6c30825b.js",
    "revision": "ece32c94dba1383070cf8ba5b327e0bc"
  },
  {
    "url": "assets/js/12.df6c50d8.js",
    "revision": "402c0cca16035c99a3e5826498206c78"
  },
  {
    "url": "assets/js/13.7c581a45.js",
    "revision": "69a690b13d1ccdba0ce3792d5648ddd9"
  },
  {
    "url": "assets/js/14.34c2c87e.js",
    "revision": "ba7b6ce626e0485051e38ac9a12ce07c"
  },
  {
    "url": "assets/js/15.cad4fe23.js",
    "revision": "c8e99e87f32c4959dc8f249d326c3627"
  },
  {
    "url": "assets/js/16.d0af51bb.js",
    "revision": "61fa979e26ed4018e25d1528d5e1cbc7"
  },
  {
    "url": "assets/js/17.a85a530d.js",
    "revision": "75a5393ef92e91c5ca4813bef70590bc"
  },
  {
    "url": "assets/js/18.54ef93fa.js",
    "revision": "1fc0ff466a977681da1e60424d743a8e"
  },
  {
    "url": "assets/js/19.2b1f86a8.js",
    "revision": "87676f55c9b5090d3a907b916f2ffa3f"
  },
  {
    "url": "assets/js/20.5c440494.js",
    "revision": "783b90756709453a5caab9aec5b2bde5"
  },
  {
    "url": "assets/js/21.a4e55a8f.js",
    "revision": "03f57140ea7ae8b037d37d847f7a32cd"
  },
  {
    "url": "assets/js/3.fa639b10.js",
    "revision": "ccbb45e44c91c0e3a13c31e4bbf90632"
  },
  {
    "url": "assets/js/4.4dbba483.js",
    "revision": "c8014f00d8121021036d70b5cb6c0c10"
  },
  {
    "url": "assets/js/5.35920ff8.js",
    "revision": "e9e101af89139e65c3a4a717f3289027"
  },
  {
    "url": "assets/js/6.8c2b1f28.js",
    "revision": "cfe3af4da1f54aa4a0e2c8e6060585ac"
  },
  {
    "url": "assets/js/7.6da1175d.js",
    "revision": "9a1e17a37df4dd4008276b34f62bc081"
  },
  {
    "url": "assets/js/8.a89bcd73.js",
    "revision": "d3cde34ffb594317c58ad110180dc173"
  },
  {
    "url": "assets/js/9.5c91fd0c.js",
    "revision": "83dfb0ca0a8fdf560176c37c19dccf6c"
  },
  {
    "url": "assets/js/app.6a401f5a.js",
    "revision": "9bdd2814d7493d37b495ba03e71f5380"
  },
  {
    "url": "categories/index.html",
    "revision": "98db3e821f2aa57f419d814b1030b16c"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8a13db0e932d5c0d2f6a8c3645d4dc9c"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "b0964355f82a3b2745c26dc4aa67a832"
  },
  {
    "url": "devOps/index.html",
    "revision": "0708026e9c81120a1692cb27991e350d"
  },
  {
    "url": "images/bg.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "images/pay.jpg",
    "revision": "a5a6472d111445425e21dde384575552"
  },
  {
    "url": "images/user.jpg",
    "revision": "42dc934fec61a302fb7ab9ccb883918b"
  },
  {
    "url": "index.html",
    "revision": "1775403dd9e5d110ea6ea113f670862d"
  },
  {
    "url": "java/index.html",
    "revision": "5a501c1bd5ff110b54ff1fd47b39e1d0"
  },
  {
    "url": "other/2022/20220209.html",
    "revision": "5321f0f408993c96e7b9109b71048b2f"
  },
  {
    "url": "other/2022/index.html",
    "revision": "409cbcfbb8c369eb8c32c41aef0de2d6"
  },
  {
    "url": "other/about.html",
    "revision": "f24668a80fc34b5c7303050057cdfaf6"
  },
  {
    "url": "other/firends.html",
    "revision": "27d2494a1ea86eed320621bc29f082e2"
  },
  {
    "url": "setting.png",
    "revision": "2a045d90b17a55d36904a238d94f583b"
  },
  {
    "url": "tag/index.html",
    "revision": "850a1ea8157e01f4727da60c3d9d297b"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "f2bb5947479cf1ba5eb6ae20b129f63d"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "a3bab45ca07af484a1b7aca10e35c6f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5516994a6af47eb12b860bdc9e4de0a"
  },
  {
    "url": "vue/index.html",
    "revision": "96048e1c21f355360a757ee752954cd1"
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
