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
    "revision": "02bdbaae7fd66078d84ce17e669b3a27"
  },
  {
    "url": "assets/css/0.styles.a20f05f6.css",
    "revision": "635cf429d9c27b504730752cf98450a6"
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
    "url": "assets/js/11.ec20221f.js",
    "revision": "ef841c3d5c4191681eb635d1ee2e3da5"
  },
  {
    "url": "assets/js/12.900a7128.js",
    "revision": "706ddd4bdd03b2b8db487419f36ab2a7"
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
    "url": "assets/js/15.402bf530.js",
    "revision": "b9668e35d2d1efbe304b4040af1c9678"
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
    "url": "assets/js/18.23252307.js",
    "revision": "d478f4b74887c67bf443115a181c5197"
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
    "url": "assets/js/21.afa0983a.js",
    "revision": "14b313a50bee76270a78d3e7a67e2e88"
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
    "url": "assets/js/25.45c1cfaf.js",
    "revision": "10787de36a037a12e9e0717d523b01b3"
  },
  {
    "url": "assets/js/26.055b0055.js",
    "revision": "d5e8841f74bf3cb1ffc1411e11c2c22c"
  },
  {
    "url": "assets/js/27.2fe30da3.js",
    "revision": "f62516c2b91eb646f73237118891e784"
  },
  {
    "url": "assets/js/28.1602eb6f.js",
    "revision": "6eb74cdb7ba9aa52384ebad0c56ec45e"
  },
  {
    "url": "assets/js/29.7095d7a3.js",
    "revision": "628139906a93333c5fc89af19cd3d7b8"
  },
  {
    "url": "assets/js/3.60745e48.js",
    "revision": "2986f21eded269543c7d6de9014d2a13"
  },
  {
    "url": "assets/js/30.a88a1cdc.js",
    "revision": "e60d1dd234ceb540ac56acbb530881e0"
  },
  {
    "url": "assets/js/31.5895ead8.js",
    "revision": "f59553ad6f52660e138ae804b44d6820"
  },
  {
    "url": "assets/js/32.67c9ad7c.js",
    "revision": "9a683d1c800b03f756518b00ca585ecc"
  },
  {
    "url": "assets/js/4.04223c60.js",
    "revision": "e3da730a9ba8c41261531631920d36aa"
  },
  {
    "url": "assets/js/5.cf0c0dcc.js",
    "revision": "7c0e910537771c29abfe7d0edfc9763d"
  },
  {
    "url": "assets/js/6.48966cb4.js",
    "revision": "01a872c85c84b1e5f5bee8a382d420e5"
  },
  {
    "url": "assets/js/7.dc9676a1.js",
    "revision": "b4498aa468d5eb26b01afef6eddbcab9"
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
    "url": "assets/js/app.ea049afa.js",
    "revision": "1d7cef9cbc2d733ed3e975432ed2b02a"
  },
  {
    "url": "categories/index.html",
    "revision": "e21b1cc2fb4dc1cd66007587d074fdde"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "3cbe3a295ce3d8ebff9b4c02bfab3019"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "02df0e2202344ab7699c1c10bd477419"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "dcb60edfe0a5aaff2105007bc5624f09"
  },
  {
    "url": "devOps/index.html",
    "revision": "5703e40f768d258040019747cbe32105"
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
    "revision": "1ae7c869e8fae676414be34c7613d55c"
  },
  {
    "url": "java/index.html",
    "revision": "65e3bcf3178c73cc99c9d8e3d984f48f"
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
    "url": "others/2022/20220209.html",
    "revision": "c956cad0a7df3a3afbd45f1f81c9cd7f"
  },
  {
    "url": "others/2022/index.html",
    "revision": "94cae4246dd54347d703f9fbfe324843"
  },
  {
    "url": "others/about.html",
    "revision": "9a545a908c030f3e61bee924ed337867"
  },
  {
    "url": "others/firends.html",
    "revision": "35679896d9b95907d68d3570aecc0d52"
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
    "revision": "728fe899480913061fa0497be74efc91"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "14c7b9b203f4949b4c55127de7904001"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "95960543e067be74600fb3f77a10406d"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "d09a4ef0202edffbe6f95d197a97bfb7"
  },
  {
    "url": "timeline/index.html",
    "revision": "768a3b16bfdee431028535e8db213c15"
  },
  {
    "url": "vue/index.html",
    "revision": "7976447443d3ac816ca7d813469e9321"
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
