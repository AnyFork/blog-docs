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
    "revision": "5e4de66a76698aa515795e26f0001d37"
  },
  {
    "url": "assets/css/0.styles.06bba90c.css",
    "revision": "a47fb08a76e28635c587d05bb4c73e6e"
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
    "url": "assets/img/bg1.5ad0201f.jpg",
    "revision": "5ad0201fda8eae83f8e01e96340d2ff0"
  },
  {
    "url": "assets/img/bg2.d5bdc1d8.jpg",
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
  },
  {
    "url": "assets/img/bg3.22fa8f88.jpg",
    "revision": "22fa8f88a23088bce0900fa25ddc35ce"
  },
  {
    "url": "assets/img/bg4.4ae33586.jpg",
    "revision": "4ae3358619d74cccfa403461d44fb14c"
  },
  {
    "url": "assets/img/bg5.eac41ddc.jpg",
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "assets/img/bg6.b1b9e5a8.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
  },
  {
    "url": "assets/img/dark.590c111f.svg",
    "revision": "590c111fece215aa6e8cf0fa5495c0a6"
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
    "url": "assets/img/light.f77dd99b.svg",
    "revision": "f77dd99b23a251e6935b0f0cef978d0c"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.697d80c2.js",
    "revision": "81933659016d3dd1f069bf10abea1dbb"
  },
  {
    "url": "assets/js/10.92d22d1e.js",
    "revision": "c426723e39945bf580bf9098de67504b"
  },
  {
    "url": "assets/js/11.e49c6030.js",
    "revision": "8c0b4e97169434ad591a4e13d572b512"
  },
  {
    "url": "assets/js/12.0a9abaf6.js",
    "revision": "df4be197f85beaa20dc3f9c94f63d4f3"
  },
  {
    "url": "assets/js/13.fe577da3.js",
    "revision": "bd09a0409696055785a65a958fe52633"
  },
  {
    "url": "assets/js/14.471058f6.js",
    "revision": "d2762aa32f4eebf49debc343fc4fa3c5"
  },
  {
    "url": "assets/js/15.7a3fe98c.js",
    "revision": "30e302d1c09e3209019a9a02f6198388"
  },
  {
    "url": "assets/js/16.1540bd67.js",
    "revision": "eaca418ca49f5a0ab2e9fd25a423d98d"
  },
  {
    "url": "assets/js/17.3185c0b4.js",
    "revision": "fb2c8f0947e90b1653f8da8850a7e25a"
  },
  {
    "url": "assets/js/18.f86a230e.js",
    "revision": "6b2a7c988e7a8dae74ab33e577aa3b84"
  },
  {
    "url": "assets/js/19.b0589996.js",
    "revision": "9087a4ddeadaf78916c5986dfe82d8e5"
  },
  {
    "url": "assets/js/2.cbe818b5.js",
    "revision": "c50032e7d6e06366c52e773a73233847"
  },
  {
    "url": "assets/js/20.9df4016b.js",
    "revision": "ea70ada5286d1f073efabaedcba60ef3"
  },
  {
    "url": "assets/js/21.1d2217bc.js",
    "revision": "855a86cc0080b310c5b8da58c4195d94"
  },
  {
    "url": "assets/js/22.0012e9cf.js",
    "revision": "f1b81a9d43f1fe5b8a3a2836d6131912"
  },
  {
    "url": "assets/js/23.0609db4c.js",
    "revision": "738322703a5697f990b5d2827b284321"
  },
  {
    "url": "assets/js/24.671d83e9.js",
    "revision": "0f39c18b07758cfa4764c5cdf80b00dc"
  },
  {
    "url": "assets/js/25.4ebde626.js",
    "revision": "fb501a458a4174707a76788f21544ec7"
  },
  {
    "url": "assets/js/26.5bc3d328.js",
    "revision": "f9fb4701e016ab89049f0d2210a9fb7d"
  },
  {
    "url": "assets/js/27.dc9b1169.js",
    "revision": "4483d5fab50b15feb679c85ab17a9882"
  },
  {
    "url": "assets/js/28.b4adf7a0.js",
    "revision": "0aa1b04d1638418052b194f8712409b7"
  },
  {
    "url": "assets/js/29.d366395f.js",
    "revision": "e5ab89722a8be366c3e403fb33f7cef1"
  },
  {
    "url": "assets/js/30.b9d86654.js",
    "revision": "09cc24ae8fad1749f5c793257b03cbc7"
  },
  {
    "url": "assets/js/31.c3e06be4.js",
    "revision": "1a1231896cec31c659bf5428cd4a747c"
  },
  {
    "url": "assets/js/5.84ef2468.js",
    "revision": "8dca61d14448032cbf03d96460275a06"
  },
  {
    "url": "assets/js/6.ac796efe.js",
    "revision": "84efa84750ad4a6ad5dd7e971ea693b9"
  },
  {
    "url": "assets/js/7.ffd299a5.js",
    "revision": "efdd96a20bf0b3d2e18421a7d339576f"
  },
  {
    "url": "assets/js/8.7fe43e0c.js",
    "revision": "6dfcab72f0bf194bd15b8346caa89fee"
  },
  {
    "url": "assets/js/9.0ae9b508.js",
    "revision": "3802b4354b53e7325bf0c165731ba3da"
  },
  {
    "url": "assets/js/app.ce9c7872.js",
    "revision": "d46e0f08538b7486d856ffb4a8200e39"
  },
  {
    "url": "assets/js/vendors~docsearch.fe1299d7.js",
    "revision": "24e1a45a033d7862a91a9d688e142335"
  },
  {
    "url": "categories/index.html",
    "revision": "52523bea589b6451aa22a6e1b065c377"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "5fdc6a8f391f7b7a9127f1d8bc7e9488"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "b8481ea2dba96a3cd6ad234f8b8b7458"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "d0366a7a4ddfd5e9ad03e11cc3dde7fd"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "0dcf16968ab3f4c506d2a8eb59932d22"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "813ca4b999a87deb52daf0ae4d57d9ee"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "7e63f0e85f87bb86ac2a12c2beb40545"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "c7ff183fc6804ca3310e5ca6841c646c"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "65411c217f418dbcf6391d6d40be42c3"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "60723b3d25d8f4f8c86cd6f2c0c560a1"
  },
  {
    "url": "images/184.png",
    "revision": "4a53cf302746206c34f7def829a2b97a"
  },
  {
    "url": "images/525.png",
    "revision": "80ddb277d0fefa8a211aec6e47cf0adf"
  },
  {
    "url": "images/bg.gif",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "images/index/bg1.jpg",
    "revision": "5ad0201fda8eae83f8e01e96340d2ff0"
  },
  {
    "url": "images/index/bg2.jpg",
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
  },
  {
    "url": "images/index/bg3.jpg",
    "revision": "22fa8f88a23088bce0900fa25ddc35ce"
  },
  {
    "url": "images/index/bg4.jpg",
    "revision": "4ae3358619d74cccfa403461d44fb14c"
  },
  {
    "url": "images/index/bg5.jpg",
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "images/index/bg6.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
  },
  {
    "url": "images/markdown/blog.png",
    "revision": "8308ecbc3c519d59ef14b8e17424e513"
  },
  {
    "url": "images/markdown/build.png",
    "revision": "567d571332117b1970964ba5325e1112"
  },
  {
    "url": "images/markdown/docker.jpg",
    "revision": "914b18231fc360aa4cb24a781149c068"
  },
  {
    "url": "images/markdown/gitalk.png",
    "revision": "94d3ae9fd18bdd2192ec8a3e77a88c1e"
  },
  {
    "url": "images/markdown/nginx.png",
    "revision": "b944c4a2463c996241afa6289d3e6871"
  },
  {
    "url": "images/markdown/nginxlogo.png",
    "revision": "470a576e259ba5299cd0ec819c804e2e"
  },
  {
    "url": "images/markdown/nginxweb.png",
    "revision": "c1ed879bd37817029459fff61aeb8250"
  },
  {
    "url": "images/markdown/start.png",
    "revision": "4fdb98e73ee36e40d46334f905d3eb00"
  },
  {
    "url": "images/nginx.png",
    "revision": "470a576e259ba5299cd0ec819c804e2e"
  },
  {
    "url": "images/pay.png",
    "revision": "10b5d14c3349ebe4f295e1931a2fad03"
  },
  {
    "url": "images/user.jpg",
    "revision": "42dc934fec61a302fb7ab9ccb883918b"
  },
  {
    "url": "index.html",
    "revision": "f061d38496b8b8fee51d73c80f203dee"
  },
  {
    "url": "js/flux.min.js",
    "revision": "9547393d8b7ebb80a108ba42f8cbc7d7"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "b8d64d0bc142b3f670cc0611b0aebcae"
  },
  {
    "url": "linux/command.html",
    "revision": "e7882af9bf2151bf07493a5687016180"
  },
  {
    "url": "music/canon/canon.jpg",
    "revision": "2d5b5f7af1277220148c7a9297b74c73"
  },
  {
    "url": "music/night/night.jpg",
    "revision": "5c9fe76738538df551f5a0358091f91d"
  },
  {
    "url": "music/wind/wind.jpg",
    "revision": "6e9c57b6aa43978c7b22dcebcd86e47a"
  },
  {
    "url": "mysql/install.html",
    "revision": "3a6f634fc2cb6799900118c469bc6180"
  },
  {
    "url": "node/index.html",
    "revision": "0226f76e75859f92aba71b82a02c89db"
  },
  {
    "url": "nuxt/index.html",
    "revision": "6a4d95c12a975291a4d759ddaa9f836c"
  },
  {
    "url": "others/20220302.html",
    "revision": "eccc06c1bcb433508c3f4d36bbe52182"
  },
  {
    "url": "others/20220622.html",
    "revision": "6a9df3e836179ebaf279efd31de7a049"
  },
  {
    "url": "others/20220623.html",
    "revision": "cb0d0b92e0dc38917b490f99e8227bc5"
  },
  {
    "url": "others/blog.html",
    "revision": "91e4b92d6569c412ff3c1a3dbec36346"
  },
  {
    "url": "others/firends.html",
    "revision": "2c02bfe317f746f5c6d7a0390e48e53c"
  },
  {
    "url": "setting.png",
    "revision": "2a045d90b17a55d36904a238d94f583b"
  },
  {
    "url": "snowflake/blue.png",
    "revision": "275ba7773ea73e26b8c8eb9401abad1f"
  },
  {
    "url": "snowflake/white.png",
    "revision": "ebe7fdd5eab6476c35d3052ceb2c2a80"
  },
  {
    "url": "svg/back.svg",
    "revision": "6c1aced7606120fd21a4d49e9ccd4232"
  },
  {
    "url": "svg/dark.svg",
    "revision": "590c111fece215aa6e8cf0fa5495c0a6"
  },
  {
    "url": "svg/light.svg",
    "revision": "f77dd99b23a251e6935b0f0cef978d0c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "fd15d0c9b4119e4535494fc9ef8d7a04"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "0497f7125e8db99aec214c250ba00182"
  },
  {
    "url": "tag/index.html",
    "revision": "462c48b34ab5ba8c0e5e207ea6d4affb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "74aab814ab43ecf3555df5ccf6b6bf24"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "976db99cc3a8e7e4350111f1b4aa55eb"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b40c9b07f6b067cee479596c2b4033d8"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "fb9f0c733b9fa50b0bdb59d643e116d0"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "8b7a5451ee8dda1e7017514d02fac9bd"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "df914cdf9c7ad94ade85c5a4fa9afdf6"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "6d5ab02b4fc3613ddbe3d98763b0468f"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "2c6c3e6ce63ec51f508ff5f040d95704"
  },
  {
    "url": "timeline/index.html",
    "revision": "33a8a3acd95350ee6e768839415cad5e"
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
