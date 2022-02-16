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
    "revision": "61be706fa668d111cafb5a9f3cbcd878"
  },
  {
    "url": "assets/css/0.styles.83475503.css",
    "revision": "700427610fdf86fe0d93fc13bd2f9097"
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
    "url": "assets/img/bg1.5ad0201f.jpg",
    "revision": "5ad0201fda8eae83f8e01e96340d2ff0"
  },
  {
    "url": "assets/img/bg2.a2714343.jpg",
    "revision": "a271434381df69684288027f4d01531b"
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
    "url": "assets/img/bg5.9fa7bfd0.jpg",
    "revision": "9fa7bfd0cdd753df4019dac4fed2446e"
  },
  {
    "url": "assets/img/bg6.e9d151bd.jpg",
    "revision": "e9d151bdfe42d09c407aab30ea4a09ad"
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
    "url": "assets/js/1.71c7ca2f.js",
    "revision": "6b820f9acf3b9aa1032edb7f822ad0b5"
  },
  {
    "url": "assets/js/10.b2748ccd.js",
    "revision": "499493fcbfed6951bbbf6cb9fa07e5fa"
  },
  {
    "url": "assets/js/11.16a34a79.js",
    "revision": "559a1f9364e3d2d20a7c0da20c10ebb0"
  },
  {
    "url": "assets/js/12.18311bd0.js",
    "revision": "3a47c6352d5b9f0b7d6371de908bba94"
  },
  {
    "url": "assets/js/13.c865939c.js",
    "revision": "c6530d950d22d026c4f7b5acbabc0b31"
  },
  {
    "url": "assets/js/14.b41689df.js",
    "revision": "41008de72889ce98f949d5cbb911ea41"
  },
  {
    "url": "assets/js/15.d8794166.js",
    "revision": "398a80098be12f8cc14d56b9910753f2"
  },
  {
    "url": "assets/js/16.91f222ff.js",
    "revision": "3c62ff58302841111e58efe139202cbd"
  },
  {
    "url": "assets/js/17.7e932638.js",
    "revision": "c048d039e05cebe44b2b5d8a82c18454"
  },
  {
    "url": "assets/js/18.43dbecd4.js",
    "revision": "f0d1f727287459f84e345066e973b51d"
  },
  {
    "url": "assets/js/19.7b2adf53.js",
    "revision": "f49ec0646c2aac5db451d02acd17880d"
  },
  {
    "url": "assets/js/20.d78aa926.js",
    "revision": "9c15dcb1bbfc7ae1464e91e39b433f49"
  },
  {
    "url": "assets/js/21.f63ed204.js",
    "revision": "0ea7515a9153b869d8a68cff1696829a"
  },
  {
    "url": "assets/js/22.39001d7e.js",
    "revision": "b4f67a4e9c37823fe76c2d1728121136"
  },
  {
    "url": "assets/js/23.c3e73cd2.js",
    "revision": "34770d09337a5145b10843c9ff82eb71"
  },
  {
    "url": "assets/js/24.692d2697.js",
    "revision": "1adabdcd54cf97741431f1d1b8c0cfb9"
  },
  {
    "url": "assets/js/25.7fd7028b.js",
    "revision": "3bd7073acb352405df91a3cfa4babf67"
  },
  {
    "url": "assets/js/26.ead6b81a.js",
    "revision": "5d556afced9b158692d49530b456bead"
  },
  {
    "url": "assets/js/27.6e4566a4.js",
    "revision": "aa73bf3d6b83621ef2d8b510a108d974"
  },
  {
    "url": "assets/js/28.37d9b8bf.js",
    "revision": "1db65047fe121b1d09d44689535d7a81"
  },
  {
    "url": "assets/js/29.cf447546.js",
    "revision": "e4a9c96058b10ff1edac3acd9e2a3b73"
  },
  {
    "url": "assets/js/3.d4bc5784.js",
    "revision": "dbc4c76dd35de2c942e960fb49ff57a4"
  },
  {
    "url": "assets/js/30.728904d9.js",
    "revision": "c2450c443db6e84af4e7f6becc62e183"
  },
  {
    "url": "assets/js/31.8d02608b.js",
    "revision": "60197129ff6b00cee584305a92c7e7cb"
  },
  {
    "url": "assets/js/32.74683414.js",
    "revision": "f576c2e45688395f33cc5038001263b4"
  },
  {
    "url": "assets/js/33.6ff9fec7.js",
    "revision": "6e1bb0425662d9f5c53a057f1a998ae1"
  },
  {
    "url": "assets/js/34.6915e1ff.js",
    "revision": "148930134cd157256e7cbf5f72942d5f"
  },
  {
    "url": "assets/js/35.2471f4fd.js",
    "revision": "4dbeb4a2b8203ad217f284f8d6e4aded"
  },
  {
    "url": "assets/js/36.f245f99b.js",
    "revision": "fd6f7960af3c7241ede0ba829da91e48"
  },
  {
    "url": "assets/js/4.29e44ab6.js",
    "revision": "2a2953ca46f291472d63aeacada1bf63"
  },
  {
    "url": "assets/js/5.a6e61df2.js",
    "revision": "ae42fd23c64479653a660506a3a2cad0"
  },
  {
    "url": "assets/js/6.19dc88c3.js",
    "revision": "a6538fe8b044414dd8f1bc345a31c92d"
  },
  {
    "url": "assets/js/7.2fd65f48.js",
    "revision": "7d6a46142c096dbb4e630eba8f6852a9"
  },
  {
    "url": "assets/js/8.2058f426.js",
    "revision": "f9e517f7c77c00248b2d14ac0960c176"
  },
  {
    "url": "assets/js/9.d1d738d2.js",
    "revision": "1ac31443298477deffedc3952e674453"
  },
  {
    "url": "assets/js/app.c78de1aa.js",
    "revision": "aadd72db2ee91c689c3630f8be036de6"
  },
  {
    "url": "categories/index.html",
    "revision": "7699ded951dd28efecf0e362990efc5d"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "36b4233891d6be34081c1161f7f808ff"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "a8c9d88de9cbc05daf9d8be93932a096"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "dc634a69a89066669b202dcc58cce725"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "89cc25c6a47652af5cc24d48491247b0"
  },
  {
    "url": "devOps/index.html",
    "revision": "0603c8b4ad1a5a7af2f197fa1e402b2a"
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
    "revision": "a271434381df69684288027f4d01531b"
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
    "revision": "9fa7bfd0cdd753df4019dac4fed2446e"
  },
  {
    "url": "images/index/bg6.jpg",
    "revision": "e9d151bdfe42d09c407aab30ea4a09ad"
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
    "url": "images/markdown/start.png",
    "revision": "4fdb98e73ee36e40d46334f905d3eb00"
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
    "revision": "1c07fca00556973a496255bf7ef14deb"
  },
  {
    "url": "java/index.html",
    "revision": "e238bbfe2d9fc1ffeb472f65b7a9b6fa"
  },
  {
    "url": "js/flux.min.js",
    "revision": "433566db146789ba5861b43c49dcb36c"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "b8d64d0bc142b3f670cc0611b0aebcae"
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
    "url": "others/2022/20220215.html",
    "revision": "8b56501d61c0452265c1d053f7f126e4"
  },
  {
    "url": "others/2022/index.html",
    "revision": "cf8dfe1701375a35bfa8dca619f21fef"
  },
  {
    "url": "others/about.html",
    "revision": "54b34cd40c598690fbba401d5685d5e2"
  },
  {
    "url": "others/firends.html",
    "revision": "03319e6185506403e45c5d8a3f9f40bf"
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
    "revision": "b235c9953038bd0fdf51cf51a6380659"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "2c4e85ca63a2dabd03c8f87e042127fa"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "acd502b8d1a7055bef165c6968e06985"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "83ba271e6ea16ad9d2093dfe75b6fd88"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "cc939a925cb87e1461cb0cd3212bc6cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "3163c6d139794752a0a834fa90d861a5"
  },
  {
    "url": "vue/index.html",
    "revision": "e78917ff863a12a49e0675b7de5bf301"
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
