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
    "revision": "5396225c2f78ad6290cc8c627f1cd520"
  },
  {
    "url": "assets/css/0.styles.a0b3b792.css",
    "revision": "0d9b834235568f9c4e8704ef0a355d9e"
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
    "url": "assets/js/13.b624467c.js",
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
    "url": "assets/js/19.62871d92.js",
    "revision": "35ba0b85f377f6447603ccc231c15acc"
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
    "url": "assets/js/app.c06c1de4.js",
    "revision": "04c6b504622741d8f22d425171d59afd"
  },
  {
    "url": "bg.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "categories/index.html",
    "revision": "e169e13899438768ef5d523e56cd738b"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "0b58f210be01fef70bf5e1ad7930f677"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "46e20ec92cf5b4dfde0cb883721aef84"
  },
  {
    "url": "devOps/index.html",
    "revision": "0a6ab0e60d3c89b70af7c8a07cdb86a7"
  },
  {
    "url": "index.html",
    "revision": "5cfe6db63130735abd75f1374ee09f5a"
  },
  {
    "url": "java/index.html",
    "revision": "651bd690cee880facd18881d8e178f3a"
  },
  {
    "url": "other/2022/20220209.html",
    "revision": "ec4d09ef0061bc21e5902ae6440e6bd2"
  },
  {
    "url": "other/2022/index.html",
    "revision": "d0a555e43e77358b3396f99100670e0b"
  },
  {
    "url": "other/about.html",
    "revision": "faa14553d3d3326175aa0704b80c7b7d"
  },
  {
    "url": "other/firends.html",
    "revision": "2ca66d7ada425797e0e23d6f15186151"
  },
  {
    "url": "pay.jpg",
    "revision": "a5a6472d111445425e21dde384575552"
  },
  {
    "url": "tag/index.html",
    "revision": "19f74445cb2c9ecb8e60e55189ae1742"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "25385430b0a3889482fb0c999f7a4496"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b7a33c0b90553717cfb85a48e1401e62"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b35160cdfce2906d725120a75505791"
  },
  {
    "url": "user.jpg",
    "revision": "42dc934fec61a302fb7ab9ccb883918b"
  },
  {
    "url": "vue/index.html",
    "revision": "92092f22284106d1b85ef8de9382e221"
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
