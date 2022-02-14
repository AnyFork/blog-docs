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
    "revision": "e95a6a4cd79c275937b65943c0f255be"
  },
  {
    "url": "assets/css/0.styles.f4102e56.css",
    "revision": "c500e30e6c5cbf531fdc111473e3d052"
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
    "url": "assets/js/1.b0929c33.js",
    "revision": "39e2e3c929d9465dc28266c499d63462"
  },
  {
    "url": "assets/js/10.e8cdcc65.js",
    "revision": "168fa4f7912f7960e1cf5ec41785c8ba"
  },
  {
    "url": "assets/js/11.c6db34ca.js",
    "revision": "2d897e82f8fb294bb5e137312027a9b8"
  },
  {
    "url": "assets/js/12.198d91a5.js",
    "revision": "4f5f0f7e11fed91828db9be4f506a91c"
  },
  {
    "url": "assets/js/13.e27f4afb.js",
    "revision": "0ce32c90178a8175c2b4c88917b75c4c"
  },
  {
    "url": "assets/js/14.521751c9.js",
    "revision": "691eb7a1573dafaa2334749fc1bce18c"
  },
  {
    "url": "assets/js/15.7e3f19e0.js",
    "revision": "92fe2d5a00edfb39caca2303741c768a"
  },
  {
    "url": "assets/js/16.85987386.js",
    "revision": "79f470aaf7688748c46a453cae904e97"
  },
  {
    "url": "assets/js/17.95643fe3.js",
    "revision": "8084362a7932e277db15d596692c8deb"
  },
  {
    "url": "assets/js/18.a8ecdc62.js",
    "revision": "b176b6b8adff6abfd4e77c9284ba142f"
  },
  {
    "url": "assets/js/19.4ad1f1de.js",
    "revision": "695af046e98ef6188cf001164a24a387"
  },
  {
    "url": "assets/js/20.72541c23.js",
    "revision": "b96373bd4850ab54c4b4f049ec24330d"
  },
  {
    "url": "assets/js/21.9ec31399.js",
    "revision": "2758ff42167dc3e9638921a1f63c619a"
  },
  {
    "url": "assets/js/22.14c31719.js",
    "revision": "e2197e6ae4c4561207e980f3cf20baf5"
  },
  {
    "url": "assets/js/23.7b6f5049.js",
    "revision": "aead5260c3f9cbc12f16652f3d8160b5"
  },
  {
    "url": "assets/js/24.23467383.js",
    "revision": "5fe260db0e464d93afac2ea9fefb9e47"
  },
  {
    "url": "assets/js/25.4f262785.js",
    "revision": "772dc32d6a1dcbd1832cc487c7ee9791"
  },
  {
    "url": "assets/js/26.bceb163c.js",
    "revision": "98f14355fe2c8c75d3cbcfd810148386"
  },
  {
    "url": "assets/js/27.d98ee600.js",
    "revision": "20cea5b698ab0ea70894982e1775e9fc"
  },
  {
    "url": "assets/js/28.79de871e.js",
    "revision": "d5e7fce38bcd2476895e16c53e9dc147"
  },
  {
    "url": "assets/js/29.8a780a8c.js",
    "revision": "a2dfd6da5e41b67da8cc8688c95cdd88"
  },
  {
    "url": "assets/js/3.0f5ab807.js",
    "revision": "9507ad771db84db29e7ab65d19f288c4"
  },
  {
    "url": "assets/js/30.153a0db7.js",
    "revision": "818ce8b16f56d530edd0be0dca3fa62e"
  },
  {
    "url": "assets/js/31.740630fc.js",
    "revision": "5b984f61ee8b5800a4b50f494e91d41a"
  },
  {
    "url": "assets/js/32.eac07e29.js",
    "revision": "ee014c50184f59dcf55c04d992fa68f1"
  },
  {
    "url": "assets/js/4.4abfa17d.js",
    "revision": "e9c3642f962e6c6bf0f6a720ba308507"
  },
  {
    "url": "assets/js/5.6bcd5a62.js",
    "revision": "e276ce6793347e094b8823b15b9ae07c"
  },
  {
    "url": "assets/js/6.d01eb4fa.js",
    "revision": "bfb7f0319c82fdae13ae85bdf9d84c33"
  },
  {
    "url": "assets/js/7.248425ea.js",
    "revision": "e5b717577fac0f0bcfcb7bf897fa2099"
  },
  {
    "url": "assets/js/8.6255afb0.js",
    "revision": "a9734df881f8abd51f45ea3364510bd2"
  },
  {
    "url": "assets/js/9.5e82553f.js",
    "revision": "b8d5edbc8bba94e393da9f43876985b0"
  },
  {
    "url": "assets/js/app.bffb3d15.js",
    "revision": "34cfcba9527d399291a558cf248ca28d"
  },
  {
    "url": "categories/index.html",
    "revision": "1c7074cb0f2ee545ce540e9db0533889"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "1aa7b51c9cf32dc7fbe4277310300a11"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "daefd1dbcbec2564bb65a1254a9f28d0"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "7aef1c9f57391b3383c8c59e11c755d3"
  },
  {
    "url": "devOps/index.html",
    "revision": "f2ed5d16cd182298d160b97e68ef26de"
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
    "revision": "bb60c05e4b04a0bdac3dff469c5e6dcf"
  },
  {
    "url": "java/index.html",
    "revision": "4dc243a6473bf0a2a8ed828aa2892aa8"
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
    "revision": "4f6b603cd8c7fc78f6552b363c4a049e"
  },
  {
    "url": "others/2022/index.html",
    "revision": "6bdf1c863baa0b6beaf151d21824704f"
  },
  {
    "url": "others/about.html",
    "revision": "c4f6f167fc1075d8557f70ca8ecc9cb5"
  },
  {
    "url": "others/firends.html",
    "revision": "a25405235e1fd2d5af057f389bad0d7b"
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
    "revision": "717e92c6de5bd8b49c15cce17561eac2"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "791b3d6d9f28b80e4ebe2d2f30260903"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "7b693e40630c333e0b0a7741295f4dac"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "47d5f8843c3585994e060e9d9e108801"
  },
  {
    "url": "timeline/index.html",
    "revision": "16c40f95ff12b32ba5841872850ba194"
  },
  {
    "url": "vue/index.html",
    "revision": "96c88aeef797ad76263f622733d67883"
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
