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
    "revision": "209b2b39b66ce2583f957ccdb6648ef7"
  },
  {
    "url": "assets/css/0.styles.accdedb9.css",
    "revision": "280c49a0068ae8fd00927d7b14a9a568"
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
    "url": "assets/js/1.f286ce0b.js",
    "revision": "418e0796603147d14431b2eafb80ba4c"
  },
  {
    "url": "assets/js/10.afe979b7.js",
    "revision": "d4d959b53185426580579b87e142f86d"
  },
  {
    "url": "assets/js/11.30cb5ae3.js",
    "revision": "f38ea1aea98fe2ac2c8f10a899d2442f"
  },
  {
    "url": "assets/js/12.67c51d1f.js",
    "revision": "4eabc5c74ea9dc37019d5d75a9de697b"
  },
  {
    "url": "assets/js/13.f21f79dc.js",
    "revision": "aa34a71ea4f93d769362e48082d0c952"
  },
  {
    "url": "assets/js/14.50afa7f9.js",
    "revision": "4fb91241d04c88c97502a346626b16f5"
  },
  {
    "url": "assets/js/15.2c4c3ee5.js",
    "revision": "8eecbf95b3cbb8e1d10098ee1a7558d1"
  },
  {
    "url": "assets/js/16.597bc53b.js",
    "revision": "a2e722cc0328babcefbbb8f4d76db8e6"
  },
  {
    "url": "assets/js/17.6ca00c75.js",
    "revision": "1c6565c64470eff90502b26366875f02"
  },
  {
    "url": "assets/js/18.aaf16b4d.js",
    "revision": "0f8971ee741087c342cd71f26ffd129e"
  },
  {
    "url": "assets/js/19.a4d8b89e.js",
    "revision": "6139cdfd22cb7375e2772411c09b566a"
  },
  {
    "url": "assets/js/20.515a4f6e.js",
    "revision": "03c10f56e21afb28a3be7269af651a38"
  },
  {
    "url": "assets/js/21.be158332.js",
    "revision": "cc17ca3d97cb47338e543999a3e49682"
  },
  {
    "url": "assets/js/22.0a34bd39.js",
    "revision": "22fcd77eb7aa2efa0e45b4013c86aac5"
  },
  {
    "url": "assets/js/23.45e11549.js",
    "revision": "7db59c6c4986641266aae3a65e8718e2"
  },
  {
    "url": "assets/js/24.7201248a.js",
    "revision": "09299960c43270539bfe8b71ba975033"
  },
  {
    "url": "assets/js/25.e12b7b96.js",
    "revision": "3a9ec388005182c2a1b1acb16a5fd955"
  },
  {
    "url": "assets/js/26.bcf78205.js",
    "revision": "a5cffbb9cd9d3ce68bb7cc3eeff2d8eb"
  },
  {
    "url": "assets/js/27.211be889.js",
    "revision": "ad45fff81cba3a41c0005f9fb74f05c2"
  },
  {
    "url": "assets/js/28.3ffe1683.js",
    "revision": "82a59ca996def1807952b7fae032a775"
  },
  {
    "url": "assets/js/29.b916220f.js",
    "revision": "454a0660cbbbf36e7bdb08dfee7edd89"
  },
  {
    "url": "assets/js/3.15b1993f.js",
    "revision": "919ac3bf01423db726696beb4f00a598"
  },
  {
    "url": "assets/js/30.95234938.js",
    "revision": "aff52ba17c35dc2f147c314dd6edd311"
  },
  {
    "url": "assets/js/31.29aafc7c.js",
    "revision": "be11eef44856c26ab7b0b446f8403b6d"
  },
  {
    "url": "assets/js/32.bacc7c71.js",
    "revision": "2f33adc7ed0e78248edf94463b8cb00f"
  },
  {
    "url": "assets/js/33.6fec5d8a.js",
    "revision": "9eb6c8a02bdcdcec549d74b51105e1c8"
  },
  {
    "url": "assets/js/34.202abecf.js",
    "revision": "e301e4f6c1920be27fa74ab9d1f04abd"
  },
  {
    "url": "assets/js/4.3abf5a6e.js",
    "revision": "bce6aeb9c70854e45d0706cb83df5c73"
  },
  {
    "url": "assets/js/5.525334fc.js",
    "revision": "358f6e1375562fbc932a3ea729ab8212"
  },
  {
    "url": "assets/js/6.040bc15e.js",
    "revision": "478a7be51940cb76782fc71f7f7c40e8"
  },
  {
    "url": "assets/js/7.befb7929.js",
    "revision": "541f9c7f890c394d05a6812b0433d8d6"
  },
  {
    "url": "assets/js/8.c7f37d27.js",
    "revision": "7d206473950b94594b4f5c12ef7663e1"
  },
  {
    "url": "assets/js/9.87fa8148.js",
    "revision": "17d409d3c5118a877bed68056f3d15dd"
  },
  {
    "url": "assets/js/app.3f3223a6.js",
    "revision": "2b93be0a2550ca6d127c6372006959e2"
  },
  {
    "url": "categories/index.html",
    "revision": "9dfedc55fc362a93f436ab76e31fad39"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "843725d275e9eabd849788ef70a419a0"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "e7181ff32a8785b8700fa66710f19d14"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "e86b09a665cd3a77bf59b0fb75cc1dd7"
  },
  {
    "url": "devOps/index.html",
    "revision": "e45e11a5ba85c614ab82ca8df9832c64"
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
    "revision": "b32b142055bae7c446ff601fefae0ce8"
  },
  {
    "url": "java/index.html",
    "revision": "665f8fc4a2e850e4cb88e14d0e831bb0"
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
    "revision": "f2db013235875bdb51a56730889a6034"
  },
  {
    "url": "others/2022/index.html",
    "revision": "ce15c406c95051081581c45d9378e2bb"
  },
  {
    "url": "others/about.html",
    "revision": "991f773da7b01c4ca2fa26fd4194ded0"
  },
  {
    "url": "others/firends.html",
    "revision": "71d1cd4869e9331f9f81b73307b610c8"
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
    "revision": "77eadef9798d7dec50674974e8cf7ed8"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "30b6dd07d17dd7f860bf1fc5a8d07572"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "8e519138f3365144e580a430b094240a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b4f172072ed77c1f3826924dbcacb22f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e83a3ee5a1d6662df16d4f76ec95ce90"
  },
  {
    "url": "vue/index.html",
    "revision": "32a2934e054e9e547666692f30ad97aa"
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
