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
    "revision": "fdf156785a738b71fce307fd137c9a06"
  },
  {
    "url": "assets/css/0.styles.7c9eb6dd.css",
    "revision": "ed58c882b13d1149fc6bfecd6fd97740"
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
    "url": "assets/js/11.575cf0e2.js",
    "revision": "95ccff1d972ea998af92cd6cf79015c1"
  },
  {
    "url": "assets/js/12.5e15edb4.js",
    "revision": "f3916bc9ab4531cf569e1e84df8ded02"
  },
  {
    "url": "assets/js/13.e27f4afb.js",
    "revision": "0ce32c90178a8175c2b4c88917b75c4c"
  },
  {
    "url": "assets/js/14.6b757da0.js",
    "revision": "3c8554e5c6a6357bc7fdbe70a0a0e45a"
  },
  {
    "url": "assets/js/15.7e3f19e0.js",
    "revision": "92fe2d5a00edfb39caca2303741c768a"
  },
  {
    "url": "assets/js/16.5d5c6e87.js",
    "revision": "e4b920242a3e18be1e4a3e155e742086"
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
    "url": "assets/js/19.bb3c45cc.js",
    "revision": "f570f50efff632912d7fea1913515fc6"
  },
  {
    "url": "assets/js/20.72541c23.js",
    "revision": "b96373bd4850ab54c4b4f049ec24330d"
  },
  {
    "url": "assets/js/21.f15776d1.js",
    "revision": "8037db44ad46365ce79458afa427c4f5"
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
    "url": "assets/js/25.977009b4.js",
    "revision": "7c9aeb46d3a1043250539c33db9961f0"
  },
  {
    "url": "assets/js/26.c9b1cbf1.js",
    "revision": "443f8a8430eaeabf6537ae1629f8b02f"
  },
  {
    "url": "assets/js/27.39ab32c9.js",
    "revision": "a689a6927cfec63476c387a60f84ca98"
  },
  {
    "url": "assets/js/28.6c2e1ffc.js",
    "revision": "ba8ee8f0eaa2a91b7d2ca50d067f5bc4"
  },
  {
    "url": "assets/js/29.2bce3cea.js",
    "revision": "549c1883a1c1803411690f4df4becce0"
  },
  {
    "url": "assets/js/3.0f5ab807.js",
    "revision": "9507ad771db84db29e7ab65d19f288c4"
  },
  {
    "url": "assets/js/30.2f88cfb8.js",
    "revision": "a288e44211bc091078da9edf3813fb25"
  },
  {
    "url": "assets/js/31.4cee7527.js",
    "revision": "0c416fb77389ea6b927723eda5c31071"
  },
  {
    "url": "assets/js/32.eac07e29.js",
    "revision": "ee014c50184f59dcf55c04d992fa68f1"
  },
  {
    "url": "assets/js/4.bb8749a2.js",
    "revision": "b61071c48f3164f0003358274dbaf419"
  },
  {
    "url": "assets/js/5.17112949.js",
    "revision": "4c575d0f9433d1e40ac7e49bbca0548b"
  },
  {
    "url": "assets/js/6.f071f446.js",
    "revision": "b44e2fa00fe7c599758c5449cede7bd5"
  },
  {
    "url": "assets/js/7.3aaebe2d.js",
    "revision": "19684481df83ba7dee2d3444dfeb128c"
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
    "url": "assets/js/app.e7b8355c.js",
    "revision": "c770e718b7e46a8585ead85220a34892"
  },
  {
    "url": "categories/index.html",
    "revision": "c10e6937795dd9f11a913be5ab069063"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "72905443bd89e3dda6402dbc18c68a06"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "868b66abab17bcc5a7aebb1788dc8e4c"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "f99786fe92604ba5ec45902d3cb7a6a1"
  },
  {
    "url": "devOps/index.html",
    "revision": "43187acc86616e734dec8da98897c157"
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
    "revision": "4f956654e7cf95e561416559e2960efb"
  },
  {
    "url": "java/index.html",
    "revision": "6fbdd86f028b74052fff49abf535cfe2"
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
    "revision": "2dfb2fe7dd2c3d504577655d27e84253"
  },
  {
    "url": "others/2022/index.html",
    "revision": "6ed986301b1e795e7dc079fd9d30acec"
  },
  {
    "url": "others/about.html",
    "revision": "bddff948092f89186e51c388bf52f2dd"
  },
  {
    "url": "others/firends.html",
    "revision": "30fd0bb3fb37d61b742d6bc0d6ca3371"
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
    "revision": "0f1529d5892ece8ba2a191c9edf2ee73"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "85230db02829786189d197f99410fe47"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "5229d8b2d34af89d163158a528bb65fb"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "fafe4034052528de648e61e48c374f30"
  },
  {
    "url": "timeline/index.html",
    "revision": "b9b5f781a89323c2d84ebd9c2aed2e23"
  },
  {
    "url": "vue/index.html",
    "revision": "6c83839f4f63e991f855716af2d7eff9"
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
