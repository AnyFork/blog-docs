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
    "revision": "91462a32668e7dd60469ab6efbd1dc7d"
  },
  {
    "url": "assets/css/0.styles.2f9feedc.css",
    "revision": "780505d9c6d5a68901abab2f6061adf0"
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
    "url": "assets/js/1.fd7c4eab.js",
    "revision": "8ee477e6a88e6c155be933772c2c185c"
  },
  {
    "url": "assets/js/10.31a244f0.js",
    "revision": "5e87e63cb0bc1e04ca1acc1460c8c030"
  },
  {
    "url": "assets/js/11.998adcad.js",
    "revision": "d0af290b3000c5992b5f7db940a5d729"
  },
  {
    "url": "assets/js/12.5e7d6002.js",
    "revision": "784552189b64a64bcca6d3f32387ae19"
  },
  {
    "url": "assets/js/13.b8055308.js",
    "revision": "b3357470f6f60645ca02e15c2bd636af"
  },
  {
    "url": "assets/js/14.d0d2a5c6.js",
    "revision": "836ca78001ec40402dd35cab3ed5f01e"
  },
  {
    "url": "assets/js/15.d6c90d1f.js",
    "revision": "21ff8267ae581e23c29be55cc0262fec"
  },
  {
    "url": "assets/js/16.c4be9b1d.js",
    "revision": "399afc0ad8eac4235b56b189f716e06d"
  },
  {
    "url": "assets/js/17.e8e1e0f1.js",
    "revision": "e27814011250afbe36736f24b5fe7e89"
  },
  {
    "url": "assets/js/18.9a88b719.js",
    "revision": "40e5ba7d492e2175a17d45259962fa30"
  },
  {
    "url": "assets/js/19.61a923b8.js",
    "revision": "43abecaa76796c7192b3ae2e85bd13aa"
  },
  {
    "url": "assets/js/20.d7b25c6c.js",
    "revision": "7ab3303420323eeb1d33a9de5bed15f0"
  },
  {
    "url": "assets/js/21.59cdd16d.js",
    "revision": "32b05174527720b438138b873bb3768e"
  },
  {
    "url": "assets/js/22.5e2786fe.js",
    "revision": "e11a61392cc7e1e4f7b72df1d56b8932"
  },
  {
    "url": "assets/js/23.c0220d62.js",
    "revision": "b956183050f494218713a0d6214c762d"
  },
  {
    "url": "assets/js/24.dfa0d832.js",
    "revision": "6910abeef71dd359c853f6cd6320e5f2"
  },
  {
    "url": "assets/js/25.2fbf6437.js",
    "revision": "a4dd57c1e88753be794aedea0349462d"
  },
  {
    "url": "assets/js/26.f6e61638.js",
    "revision": "f1d9e325ff6b46f34f3703366b22c204"
  },
  {
    "url": "assets/js/27.c5b0a914.js",
    "revision": "20e2d930746e6c9736de239b3acd5f42"
  },
  {
    "url": "assets/js/28.6402b7c0.js",
    "revision": "34c89a6d82514adf4821cabac0d7da91"
  },
  {
    "url": "assets/js/29.c264d0b7.js",
    "revision": "b5084a11462793ea2e1c00612358d02b"
  },
  {
    "url": "assets/js/3.075f1346.js",
    "revision": "137c0f76be06e4e1492638bd0158e926"
  },
  {
    "url": "assets/js/30.2fe92d58.js",
    "revision": "ae18788cd22866a1bdbdb15fd5a76497"
  },
  {
    "url": "assets/js/31.abc2cb0a.js",
    "revision": "8c060fa2539a64ba7cde3481266f140f"
  },
  {
    "url": "assets/js/32.b1a08b82.js",
    "revision": "44a7b66f997744fce775a403ddd0bb4f"
  },
  {
    "url": "assets/js/33.ba637ae0.js",
    "revision": "15e18b10b373a3d4dd2a5b586a8a9012"
  },
  {
    "url": "assets/js/34.7773c36d.js",
    "revision": "d554acb6625b39bd969bd59f19bccb39"
  },
  {
    "url": "assets/js/35.b5aab0bf.js",
    "revision": "057b071d9cfff69155268ae9503088a8"
  },
  {
    "url": "assets/js/36.3912df16.js",
    "revision": "777776de2f916b1694069dc142966dc6"
  },
  {
    "url": "assets/js/37.4737d770.js",
    "revision": "b987827dd762fd2ba42a26685fe833d5"
  },
  {
    "url": "assets/js/38.50ce55fe.js",
    "revision": "c16097374b21feda1038f13114ca62dc"
  },
  {
    "url": "assets/js/39.4d6355ff.js",
    "revision": "94298bfbaa5afdf5d703bda5d2e35346"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.d9f3f03b.js",
    "revision": "e1fdb3fe5182aa8d808a8885b71ecf5c"
  },
  {
    "url": "assets/js/41.ecec567e.js",
    "revision": "018295164cbbab6e582d1899849c22a7"
  },
  {
    "url": "assets/js/42.5c4592d7.js",
    "revision": "ef628a27c19094410ba0903b08928326"
  },
  {
    "url": "assets/js/5.5e039b06.js",
    "revision": "6715951ee723a138d82df14390dcec72"
  },
  {
    "url": "assets/js/6.49f32814.js",
    "revision": "71684466b1cdf6bbf0b869c2a92c8bfd"
  },
  {
    "url": "assets/js/7.8f6aa55c.js",
    "revision": "eef172e6b119a758c5d2f1221e50bbcb"
  },
  {
    "url": "assets/js/8.ca22cc6e.js",
    "revision": "a133b0b712f5854d4553319ccca96899"
  },
  {
    "url": "assets/js/9.cd61dda8.js",
    "revision": "f9f9809212affd2d9440f5af1e7753ae"
  },
  {
    "url": "assets/js/app.e6585198.js",
    "revision": "551b8391108e9aa3a731d6cc0148e16d"
  },
  {
    "url": "categories/index.html",
    "revision": "0129733c0d8cf05bb7204d14f572f5ac"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "3ec4e382f8f6d1e7e4bd44fbd28866ea"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "cf293c6370a634764298193d7190cdeb"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "73a3f2cb60f9786b16ee111db24230f2"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "0131f4a8d566d6f198ff32328c5538b6"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "3c05b6d8829cd5c5416011006dc84856"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "2b484866455828a08ad4baf23691b766"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "6451af794b872936b5468ab0fd65158c"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "c1104d5fd75dbc014b32f72517de42bb"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "8c9963e0c137ca957f6c0285cd20af20"
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
    "revision": "28c689869b39c57b3fa0b10ed86caabd"
  },
  {
    "url": "java/index.html",
    "revision": "d6d319bc4c6da70deaff3599c48cde69"
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
    "revision": "bb2710a6158de9cfad15bf0025a8b0eb"
  },
  {
    "url": "others/2022/index.html",
    "revision": "461394b876788813a83fd4cf455b7fec"
  },
  {
    "url": "others/about.html",
    "revision": "1c6a07dcacb998bd367160491b377bee"
  },
  {
    "url": "others/firends.html",
    "revision": "eb885f2eda7e7647812519fbdf0128b7"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "1c009e6eb5e282c0327185cabed19e6a"
  },
  {
    "url": "others/linux/index.html",
    "revision": "1a2e52742d2c27f43cc38bc257922eb2"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "9f3e47d635d5ac8e5695d7212c6cafb3"
  },
  {
    "url": "others/other/index.html",
    "revision": "3305d6412ed19932975febfc502ccf08"
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
    "url": "tag/docker/index.html",
    "revision": "aaca51c635618a7fe98a0ba3d60704fc"
  },
  {
    "url": "tag/index.html",
    "revision": "4ab19c9293f976fa35c5cf91e606fa2a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5f9c2564357c8438253c5e2190e02201"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "a51038a0b173345df6a90af57e0cddb4"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "038ef43d0d587c822cb8ba3aa9a89ba7"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "c6dc01f9cd9aea3ab951c817e93c3c18"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "8521dfc9c1c66bd0768a4671099dd58b"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "3e9293d68ac87e354a8a802d05818e59"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b549ac63c1aec25db37d4d2919eaef82"
  },
  {
    "url": "timeline/index.html",
    "revision": "344bdb059eb0ff1dda006e93f1f43f67"
  },
  {
    "url": "vue/index.html",
    "revision": "a7208ec72e69ebea840c392d41f9e20f"
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
