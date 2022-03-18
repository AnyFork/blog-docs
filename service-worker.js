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
    "revision": "b9b0fd355aed7aaf395d65eb47e8ce9a"
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
    "url": "assets/js/23.cee0ea2f.js",
    "revision": "9ac3f7f4649a5b885c34a9524c7696e3"
  },
  {
    "url": "assets/js/24.e64aac0e.js",
    "revision": "7bff21dfb7a9bed1b465198c2f2cdf4b"
  },
  {
    "url": "assets/js/25.8dd9a8e6.js",
    "revision": "85f559a11df2c4c27451961a2e0507b8"
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
    "url": "assets/js/32.56cbfe09.js",
    "revision": "16a21010fd7dc9083d8f171d2a2b833c"
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
    "url": "assets/js/41.50f26436.js",
    "revision": "7d2731a283abcd173adc42e3465726ab"
  },
  {
    "url": "assets/js/42.d36122d3.js",
    "revision": "390bb87d93de618588508fdc277d1277"
  },
  {
    "url": "assets/js/43.ea4b76a8.js",
    "revision": "a1e1a558e07d3c972d58325c961da727"
  },
  {
    "url": "assets/js/44.01bd972d.js",
    "revision": "710d5d035b5870a45f685572b1c71814"
  },
  {
    "url": "assets/js/45.8e7267b0.js",
    "revision": "d2d02938a7d257996953d6b8633b6023"
  },
  {
    "url": "assets/js/46.ad5fe9b8.js",
    "revision": "e14f67d35a69c1bfbebd0fbfc6d89b6b"
  },
  {
    "url": "assets/js/47.250d578a.js",
    "revision": "ad970d0772f2abfec1a8a50a0e6b9e40"
  },
  {
    "url": "assets/js/48.647d5f74.js",
    "revision": "929e0d790c3b931a5f72ffff255f1f69"
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
    "url": "assets/js/app.3b9bc282.js",
    "revision": "2d110862ff3fc294495a0a64a1b0f793"
  },
  {
    "url": "categories/index.html",
    "revision": "9320b98d3e85e1f218e783b580efa97b"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "f78c0d6b64692ea6fcfe11c2e274c39d"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "005e91c886e5489279c8652066b3cd63"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "38f33f83f6d8f9ce1770d270c3709ff3"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "a4d2a40c1fd3a3d73bc4e4b16de72f60"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "9a5c8a1e4882e06e3e20eecee074670c"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "9d2c6b4433ba85ff29e65f49f5dfc105"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "e0c8266274300f3d06d882de4880603b"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "66beac739c14a7b041cef047ae99b37f"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "08dc51533c84ddb1281101c531710838"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "58e6be4acf68dfd2bf0c2d38dedaa31a"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "5cec7c848c5633999de86b2afa1f42cd"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "5517bfd9ee6c7bf3247d3a4b238671bc"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "590b486dc51e697e1fd946eb20739ccb"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "5f3e582c9eb94692152dffe11b26f7ff"
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
    "revision": "248aafbc9f84ef91b8d3cc3da5e001bc"
  },
  {
    "url": "java/index.html",
    "revision": "85bcc3f3f275df624c6c17f8bce263b0"
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
    "revision": "ebfe32f86f3673e1ecafb1045c18fd4e"
  },
  {
    "url": "others/2022/index.html",
    "revision": "b7d52a83ddba24ec591e93af53706791"
  },
  {
    "url": "others/about.html",
    "revision": "58316b4fe5a94a3b7a78a1e981e11fb4"
  },
  {
    "url": "others/firends.html",
    "revision": "46ac15c4dc077993137618b51472b6c7"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "699c91bba2a62c1713c1c01055090ac5"
  },
  {
    "url": "others/linux/index.html",
    "revision": "e2143902a995145334b667e47b9c3ac5"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "0b8937ae0ca9a0d5139cc24a91598acd"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "84875c97c52c74d18aa263aa5d744c14"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "8485e04ba8aa4b7b611d91abf170a8c0"
  },
  {
    "url": "others/other/index.html",
    "revision": "7a72d775ee8f5143c532a1a87a572303"
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
    "revision": "989389dae36ba432ef20a63ca042d180"
  },
  {
    "url": "tag/index.html",
    "revision": "6e781446d0d9b76fd8d43f59958b750f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "62c234e354846cfb7f76c1b312c3d814"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "913b0954f5ed722c8480315e695751af"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "174acf2e3665387de83f488f61124ad5"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "fc1dbce0543785d7cd3fc065053ec8a5"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "9012df82b034558cff02237b265e99e9"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "6afad0eab029ab4d495ae6b9369cf0bc"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "d0a06c846e956ee2761d6d26983c302f"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "49ef8cc60d7b86e2b2a1a7eef750117f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b3f35bf1db4b7009b69ffe28480e083b"
  },
  {
    "url": "vue/index.html",
    "revision": "6712c0c29b44c113faf948cd514f71dc"
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
