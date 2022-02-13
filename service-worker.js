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
    "revision": "166860d7624009fa4cd8c51c5f5dff8a"
  },
  {
    "url": "assets/css/0.styles.7c02e36f.css",
    "revision": "702490e8afd63c853b4c9fed8a64e507"
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
    "url": "assets/js/1.3e79e94a.js",
    "revision": "aa305888f820a2ded909e286a40d9af7"
  },
  {
    "url": "assets/js/10.a291ea23.js",
    "revision": "32bb2e49170f3444fe73f69b5f2cf758"
  },
  {
    "url": "assets/js/11.1facd46e.js",
    "revision": "10df4bc65cea4635555df83117c58d10"
  },
  {
    "url": "assets/js/12.ca6c249f.js",
    "revision": "7032a55c1d75c8d826f385c535269653"
  },
  {
    "url": "assets/js/13.db194806.js",
    "revision": "388e6d9cd1eb0b5dc0fdea2255cfa058"
  },
  {
    "url": "assets/js/14.29aab3e8.js",
    "revision": "89858aec6747102a3360533d0e682d23"
  },
  {
    "url": "assets/js/15.9b682223.js",
    "revision": "b27f3179ccb5299aad66bd1349352642"
  },
  {
    "url": "assets/js/16.053f0933.js",
    "revision": "677f47fced89aeaedc650bb649335624"
  },
  {
    "url": "assets/js/17.fff23827.js",
    "revision": "bb46c589bef0036f5fcdc87c7b6d6c2b"
  },
  {
    "url": "assets/js/18.138dd7cf.js",
    "revision": "d7403db482d767f781f0c057d93bf569"
  },
  {
    "url": "assets/js/19.ad2371de.js",
    "revision": "f3077b702fa62786dfa08b4b0da55830"
  },
  {
    "url": "assets/js/20.c7f6a2ba.js",
    "revision": "768e47c9eedd510347fa59aa5bb55ac5"
  },
  {
    "url": "assets/js/21.a66accb7.js",
    "revision": "ed4f795b43134fd99cbec8a231486fa3"
  },
  {
    "url": "assets/js/22.550119b1.js",
    "revision": "482232a112aac18bd8d50a426f539d0e"
  },
  {
    "url": "assets/js/23.a07afd90.js",
    "revision": "6d78fcfaf103cf6a8cabbd42ae3d2c52"
  },
  {
    "url": "assets/js/24.028b358f.js",
    "revision": "d85a721584727c88be48dbebe29f0497"
  },
  {
    "url": "assets/js/25.2f7a9240.js",
    "revision": "0f613e5fbab587d563290540966e087f"
  },
  {
    "url": "assets/js/26.d1f86541.js",
    "revision": "e242832430ecb919f3e1441b1e0ef7af"
  },
  {
    "url": "assets/js/27.aac8a454.js",
    "revision": "0b19e0dbe0253e9dd22c0e809675d91c"
  },
  {
    "url": "assets/js/28.19c81f9d.js",
    "revision": "a773f0cb09fc086bb0ce1cf7eeb312b6"
  },
  {
    "url": "assets/js/29.5cf3d7ea.js",
    "revision": "ae5ba2052e1120506a8084bf154bb642"
  },
  {
    "url": "assets/js/3.60745e48.js",
    "revision": "2986f21eded269543c7d6de9014d2a13"
  },
  {
    "url": "assets/js/30.27767900.js",
    "revision": "315090bea67187dfa2d7e06d946c9cd5"
  },
  {
    "url": "assets/js/31.0879e666.js",
    "revision": "b4c678464b9758f5855a766c610e650b"
  },
  {
    "url": "assets/js/32.67c9ad7c.js",
    "revision": "9a683d1c800b03f756518b00ca585ecc"
  },
  {
    "url": "assets/js/4.a094fa82.js",
    "revision": "1147bc7f225ba3f0350a3de07ea19e13"
  },
  {
    "url": "assets/js/5.48198cbe.js",
    "revision": "2e19baefcf6d639a2474b82711eaef5e"
  },
  {
    "url": "assets/js/6.0bf9c934.js",
    "revision": "226d2b178dc3a40f33e87b3f0e46126a"
  },
  {
    "url": "assets/js/7.2faf2123.js",
    "revision": "ca01e58ff54fa3e65e503398bb4e462f"
  },
  {
    "url": "assets/js/8.652ab4de.js",
    "revision": "d90f75e62b73d2dd9ca2bdb4d1208192"
  },
  {
    "url": "assets/js/9.64b4fe3f.js",
    "revision": "c99e5b434bb513b9578d6383c58ec168"
  },
  {
    "url": "assets/js/app.48545ff7.js",
    "revision": "bb59d27831ae290b73dbd393214a5bcd"
  },
  {
    "url": "categories/index.html",
    "revision": "271444f0b4a212dd95d6431b738d81c9"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "3190397f3ec70c09aee33281c0588128"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "d9b13456cf61ea2dacb6ff9335dd0bcb"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "5b6bf6dbdef5d0ac050db219591dce39"
  },
  {
    "url": "devOps/index.html",
    "revision": "112dcd73c6dec7b240e635a93ec7c2b6"
  },
  {
    "url": "images/bg.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
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
    "revision": "243b33cb59bf960c5f1ac990d164cfb5"
  },
  {
    "url": "java/index.html",
    "revision": "a0881741186a0d46f91a1a5c828611dd"
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
    "url": "music/victory/victory.jpg",
    "revision": "dcd54e13a0804730c7c6ca6802ea352d"
  },
  {
    "url": "music/wind/wind.jpg",
    "revision": "6e9c57b6aa43978c7b22dcebcd86e47a"
  },
  {
    "url": "other/2022/20220209.html",
    "revision": "c3b43b0bd3488d0031633c3ffc20c5cd"
  },
  {
    "url": "other/2022/index.html",
    "revision": "ef8645fd226874ac45c4466a598fd62f"
  },
  {
    "url": "other/about.html",
    "revision": "6fbae6fb9912a9037a55f65b4c9ccc0d"
  },
  {
    "url": "other/firends.html",
    "revision": "d976ec66d2c57f3c71b26f400cf4ee29"
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
    "url": "tag/index.html",
    "revision": "f9d331cc47fd671593d1b95307ba7c23"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "6304074521dd8452c0da2255ea55eb74"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "0edc179844422a1d549aefc850370eda"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7abf63d0e911dc8fcf0803f26955bdc5"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b120983662ddba581a9ca15efd15942"
  },
  {
    "url": "vue/index.html",
    "revision": "e392423af8f5f28a17ea1edbd650dbbf"
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
