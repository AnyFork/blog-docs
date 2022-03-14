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
    "revision": "9e7c28ada97fd600b8144dfbe4c3036b"
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
    "url": "assets/js/1.6b874d0c.js",
    "revision": "24fe7963616f7241137ce01a257b5941"
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
    "url": "assets/js/13.bfc09520.js",
    "revision": "608ae53f9c6c9733ffbfc4c1928082e5"
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
    "url": "assets/js/19.f0f58e69.js",
    "revision": "797499e7429bcea12401c3be954c3ec5"
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
    "url": "assets/js/23.6cfbedb5.js",
    "revision": "e39d75e857478ba8149e136f3a4bfa91"
  },
  {
    "url": "assets/js/24.e64aac0e.js",
    "revision": "7bff21dfb7a9bed1b465198c2f2cdf4b"
  },
  {
    "url": "assets/js/25.13ed81f5.js",
    "revision": "0ca145719a2da70b9c65b2c695996e8d"
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
    "url": "assets/js/30.460cd0bb.js",
    "revision": "f918cb45f2ccc2fd0fa570217993b198"
  },
  {
    "url": "assets/js/31.a7d3ae96.js",
    "revision": "43734f5bbc8204a5e05ca1b0c295a4d8"
  },
  {
    "url": "assets/js/32.bd967e3a.js",
    "revision": "8fe5589dcf5a8cd42ae88e0aadceb619"
  },
  {
    "url": "assets/js/33.0a87785b.js",
    "revision": "e0edfdd14a2d2ee4ba7ccdedf1dca355"
  },
  {
    "url": "assets/js/34.3f8121e8.js",
    "revision": "0838d367dd4a23e162984ff330133a32"
  },
  {
    "url": "assets/js/35.67423225.js",
    "revision": "8f61a73d42997b81b549900cd973f703"
  },
  {
    "url": "assets/js/36.5ef4c4fd.js",
    "revision": "48606391a70853ce6eb3e569ee2bc66b"
  },
  {
    "url": "assets/js/37.11d6b636.js",
    "revision": "e524ae338fa5e306bbc4df3d9aaabcfd"
  },
  {
    "url": "assets/js/38.8266649e.js",
    "revision": "510f4f8196c6e960a4e2ab964ad31256"
  },
  {
    "url": "assets/js/39.2e4ff1dc.js",
    "revision": "156cd09603fae3e3f7e197c770752bc2"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.0f940cf6.js",
    "revision": "56b942a30577ccec5db2e907ad0c2e3b"
  },
  {
    "url": "assets/js/41.e80a571f.js",
    "revision": "1b0fdcedfdd3df89febbec2a5bc92560"
  },
  {
    "url": "assets/js/42.b70fb500.js",
    "revision": "3994fa0da4beae61aeca6b2ed756e9ee"
  },
  {
    "url": "assets/js/43.2965ea46.js",
    "revision": "36e80ef8680f32e711958cdb03baab23"
  },
  {
    "url": "assets/js/44.0f95cf56.js",
    "revision": "e9b5c6dbcbf21a6cc7232be621e972e4"
  },
  {
    "url": "assets/js/45.b1a97f90.js",
    "revision": "72be0506e0c2965c11553f878fec7cbf"
  },
  {
    "url": "assets/js/46.197f3ca3.js",
    "revision": "02d7a3be0b2d100e1f39beabadec9279"
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
    "url": "assets/js/app.74151ad1.js",
    "revision": "72aba38689e75e530beb0575650a021c"
  },
  {
    "url": "categories/index.html",
    "revision": "53e15abb612083b04da36217cf4a7236"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8b1392bc3869a759c62dc6f8ee074e96"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "9747b9c29cf7edbf4f72ff7ede6ef5c2"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "172abb6c8d161648e4075ff8301810a0"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "2178c3704ad2102746103f9f680553c9"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "85f285ccbbe5150cbad7c749e62ba029"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "4971bed84702a9cd467860c8d81ab56c"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "92fe4b6efffa0497086e681deb9d3c1b"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "d9a0aec458b9f70ba64d7bb14cdbb820"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "756c1a8a5fd3d115e538060a4eb52f66"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "72c929aec0c85387129695c2e559447d"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "d6c81b53585e8e8cdcb4c75ff6244a49"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "03ffd7c2840790938139512b074b0815"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "a2d7d3d5fb6dcacfe5d1bb58746ac04f"
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
    "revision": "ca3b7c6f63bef649e859e8e58314de87"
  },
  {
    "url": "java/index.html",
    "revision": "4ecdbf9aca006871f8ac4961921a94fc"
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
    "revision": "29c218b5c79de9711c6cbee44ebbd8b6"
  },
  {
    "url": "others/2022/index.html",
    "revision": "476ad3f7b25e37f41fb69c8d7e962ba9"
  },
  {
    "url": "others/about.html",
    "revision": "730c602d93c1952e4addc14705149c02"
  },
  {
    "url": "others/firends.html",
    "revision": "176e208fac4aee7cf6b393acac3ee366"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "1c8b08c736a2d5f7de771f3bb9a63671"
  },
  {
    "url": "others/linux/index.html",
    "revision": "8d9bb0b130875684e461412a4ca3d8ea"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "14c2e879644356d60c7e5c3b8d4b28cb"
  },
  {
    "url": "others/other/index.html",
    "revision": "b62f6e9c016418942b91cb944b85290c"
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
    "revision": "df949a89a025dd2b44a49e23cbf0d9e5"
  },
  {
    "url": "tag/index.html",
    "revision": "2c09ff15c6f7626e605780d9f9109058"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "67b165a83bcc8d5f46310db8e7ee1260"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "632501b9eca35ec89afebd4e84b62e57"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "383cde435b5ed726f56909253669c927"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "e112773f6f79e1fbd07f880172841e6f"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "95a901e0d0032b1641fb9da901a94505"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "14ced77d15d86d4a2ea32ab419dd0a16"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "171296793085cf7ea31c468bdb1a50b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "7704759dee2accb0cf8c4fbe6131d202"
  },
  {
    "url": "vue/index.html",
    "revision": "361c05cbfa3546db752271e98e3fbc9e"
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
