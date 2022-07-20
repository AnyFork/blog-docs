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
    "revision": "9dab5b7e98ea71d56046b906d4cbeb05"
  },
  {
    "url": "assets/css/0.styles.4f2125f7.css",
    "revision": "608071a05da44967858ec4b61072d082"
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
    "url": "assets/js/1.f386542a.js",
    "revision": "2b8b5824ea10a62a76d4bf050d8bee52"
  },
  {
    "url": "assets/js/10.b13faa4e.js",
    "revision": "683b712c61d10050ab3a5f5d03659976"
  },
  {
    "url": "assets/js/11.bed0df6d.js",
    "revision": "15e43f9e45b8c16727d46deb99abb14a"
  },
  {
    "url": "assets/js/12.64c00073.js",
    "revision": "f6c8faa5ec559a6e61082a2fce03fe38"
  },
  {
    "url": "assets/js/13.b679a76c.js",
    "revision": "b401991bccac0ae303edc6dbbcb0a9d3"
  },
  {
    "url": "assets/js/14.cf714e58.js",
    "revision": "59bc7cefcf42bd2922a8406b8d822f10"
  },
  {
    "url": "assets/js/15.f50699c5.js",
    "revision": "a5c8955eccb11262553f66ffa8e7bae8"
  },
  {
    "url": "assets/js/16.33fdbb0d.js",
    "revision": "b29d7ce7a672570fd96e0bbf40eee0a5"
  },
  {
    "url": "assets/js/17.d5e63dc7.js",
    "revision": "7f20633e52c1f573815799158721e07e"
  },
  {
    "url": "assets/js/18.de5a8e42.js",
    "revision": "d617b47dc7d9d56c643ac186d52b866f"
  },
  {
    "url": "assets/js/19.af5a7653.js",
    "revision": "04a178c671ad06c4f3fdce46ef54da49"
  },
  {
    "url": "assets/js/2.f9c16802.js",
    "revision": "eb34cc1f8eba36ddb56ff8f10883533d"
  },
  {
    "url": "assets/js/20.3e26f25e.js",
    "revision": "5464d708516ae0596a352773367631bf"
  },
  {
    "url": "assets/js/21.388f36c5.js",
    "revision": "a59d917ba9fef5d8b2bc854b5e4702e5"
  },
  {
    "url": "assets/js/22.ded540d2.js",
    "revision": "afdda3d758857d48abfaea09f5886a97"
  },
  {
    "url": "assets/js/23.5b7cd344.js",
    "revision": "c4760b85908a5ed5485044645b8c1cd3"
  },
  {
    "url": "assets/js/24.c906e4bb.js",
    "revision": "a98e0e7face91e5fdd2524058b1dfc23"
  },
  {
    "url": "assets/js/25.25e6b1b6.js",
    "revision": "89074c2deac5134a6ab1243e200631db"
  },
  {
    "url": "assets/js/26.f8cb1348.js",
    "revision": "84c7643737765c077d938c3741475950"
  },
  {
    "url": "assets/js/27.55b8b851.js",
    "revision": "18dcb01d93520113574a0451ed35d792"
  },
  {
    "url": "assets/js/28.f00ff99e.js",
    "revision": "548da98fe33a90ec9947636eeb28f886"
  },
  {
    "url": "assets/js/29.3111a6ab.js",
    "revision": "9d972ebb12a1915d97ffc1a1fa10ebd2"
  },
  {
    "url": "assets/js/30.6e4d22c8.js",
    "revision": "e73ef5093ec10ec770e83202e8d582a4"
  },
  {
    "url": "assets/js/31.46843a72.js",
    "revision": "9220475482c627facce7dc7d1ca9b146"
  },
  {
    "url": "assets/js/32.00683e1c.js",
    "revision": "c038aab306d90dba570a7625b0db82ef"
  },
  {
    "url": "assets/js/33.7f8e9403.js",
    "revision": "2a4242e97c49b6facb0b29b9331236e0"
  },
  {
    "url": "assets/js/34.db42ef86.js",
    "revision": "77f8a89950ab3c994397dc5beea7c1c0"
  },
  {
    "url": "assets/js/35.f0a44184.js",
    "revision": "47dcef04fa22edccbbedb7a51e297551"
  },
  {
    "url": "assets/js/36.c75a3900.js",
    "revision": "c9be7bb2f35a2769ed9ee2da1bbd1da3"
  },
  {
    "url": "assets/js/37.15d26ce3.js",
    "revision": "960e9d0cb86bd39fcb448f7f940ce4ad"
  },
  {
    "url": "assets/js/38.b414c2ff.js",
    "revision": "53fdf8c664ad92d2029688a4119af4b7"
  },
  {
    "url": "assets/js/39.2807b780.js",
    "revision": "1d65bee691db449513ea2a63f33da204"
  },
  {
    "url": "assets/js/40.c3af122d.js",
    "revision": "4979d78ce2b43cf3891c5ec798b658c6"
  },
  {
    "url": "assets/js/5.42eb11fc.js",
    "revision": "e53155ad3ebff2ed44f7b8590cbae578"
  },
  {
    "url": "assets/js/6.a60fe986.js",
    "revision": "9a131a3a0849c38d395159ee1e10e6f0"
  },
  {
    "url": "assets/js/7.fd06a3ef.js",
    "revision": "33cccd85fed99d41a14ad36bdfd19916"
  },
  {
    "url": "assets/js/8.7fe43e0c.js",
    "revision": "6dfcab72f0bf194bd15b8346caa89fee"
  },
  {
    "url": "assets/js/9.ad007d8a.js",
    "revision": "401533f488bfaa113b32da630154b3c8"
  },
  {
    "url": "assets/js/app.57c98b8d.js",
    "revision": "dbb12b1111e996975d3ce0b377e44829"
  },
  {
    "url": "assets/js/vendors~docsearch.fe1299d7.js",
    "revision": "24e1a45a033d7862a91a9d688e142335"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e18e8133a69d3652f8150492d7abd03d"
  },
  {
    "url": "categories/index.html",
    "revision": "86edfd32f959139280a33eb537891c54"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d884a4ca8c1b54e5c70bd6b774a0518b"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "5d725989d670055da01415bf8c18ecbd"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "f492c483da832ba91485934b24ce2a5c"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "af220b2593bd3a00570d7f510e12c015"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "67e0541b3b1a0357f57733bc571995b4"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8d2ac3d5d9273a1d47b426006c476c3e"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "7f0fff303770419ededfec54b71ade61"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "71ec853a666dca8fe153f9bbab60c05a"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "90ea280c41cf14a397b650c140de379f"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "99fe404b7b35865a209254fbb71986f7"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "a3ba209ebb3a4476e79d58869295c530"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "2a056660982e9da6457c886d499a2823"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "626a6b95e20e21d0722d57b103da7963"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "4813f0d817d14165c087776d39d73f09"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "6806cf7322f8171bd069bf13eda78bfa"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "58bca7f2b93e2aa6c9b98a87472afe5a"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "73c01240d0658e0239d73398672ac5c1"
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
    "revision": "deaa36cdb36fc89df620ae67717b31e4"
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
    "revision": "e03305f33a5aef818d98dd5d49410077"
  },
  {
    "url": "linux/nohup.html",
    "revision": "80ddbe021183202d899b5c66d2878395"
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
    "revision": "758cf45f61bed8b416c27fb1c0f8cac3"
  },
  {
    "url": "node/index.html",
    "revision": "cd31ad4c58530685f4902d27de7faf19"
  },
  {
    "url": "node/pm2.html",
    "revision": "e319addc7ccf3bdb821e75092b537740"
  },
  {
    "url": "node/tools.html",
    "revision": "b5558754380b972cf2d2bbba155af761"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "2e921cdb4bd3f3d806547c53b17b66a2"
  },
  {
    "url": "nuxt/index.html",
    "revision": "ad3b080b4016eccd97b12c112b20e76c"
  },
  {
    "url": "others/20220302.html",
    "revision": "73a96a5beb1f1e8830c0ec9a4dbceb17"
  },
  {
    "url": "others/20220622.html",
    "revision": "34b08313bc834b9cbbb3efbdf2a45b59"
  },
  {
    "url": "others/20220623.html",
    "revision": "be1e2140e0c91ff0315b6e67b32bdb11"
  },
  {
    "url": "others/blog.html",
    "revision": "c8e03787f893af45a241f4629d4dfd0b"
  },
  {
    "url": "others/firends.html",
    "revision": "ce5740c3268919b6a5e5ed1cfae4d943"
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
    "revision": "8ae2afe95201ae2de4bca9224aa5cfed"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "50ed28009ecf9e054a571465ffc392e8"
  },
  {
    "url": "tag/index.html",
    "revision": "fcb203a4f4aa71abef916b50211f2da5"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ef8ebd8f940a21dab743263704348f20"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "5b27d28e872bd80ebb88d1bbf9f55395"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "24b88e48e5f34389f28a5a27c8bb490a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "b520e93811a35e8246f484a2e8949d9a"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "eea6f93eed603ddf9f509b8acd00a598"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "5974fcb9d02d3bba6b636055ebebe3ba"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "14c952e190401006e3d8dd38234d6142"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e4b3aefa0b1b8e4fdf6278c1a865994c"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "ab57fcc70c295561e777e44d2430a8e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "197c0b9d5f5980e3363ed6fa19f9ad24"
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
