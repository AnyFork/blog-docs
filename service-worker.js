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
    "revision": "3ae7754d80565ad98dd9534bdf085c2e"
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
    "url": "assets/js/13.2f4c82d4.js",
    "revision": "7c3983cbba7d21bf61c9cbb4356addb1"
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
    "url": "assets/js/23.5846200a.js",
    "revision": "a4a63eed688e42df702f6b0b2e4cf236"
  },
  {
    "url": "assets/js/24.012e2ff9.js",
    "revision": "333525c08e25d504ca3d1d312288c5a9"
  },
  {
    "url": "assets/js/25.07b52ba3.js",
    "revision": "9d088331a3de79fbf87f9cc243c849be"
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
    "url": "assets/js/35.c9a6e7f0.js",
    "revision": "124ee9da673235eb5998235efed6bdb3"
  },
  {
    "url": "assets/js/36.b5c864a5.js",
    "revision": "cb44ff3f49302da2437c009f9954c97c"
  },
  {
    "url": "assets/js/37.3fb41b4e.js",
    "revision": "749fc1e05326f2de995156025aaecc6a"
  },
  {
    "url": "assets/js/38.4879d18b.js",
    "revision": "f72e57b55c2850450b26b448468ca11a"
  },
  {
    "url": "assets/js/39.c252d331.js",
    "revision": "8e7cdb860466a873051701debaec540f"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.48fa238c.js",
    "revision": "bf74e3b193a286e64fb87b5c43f4133b"
  },
  {
    "url": "assets/js/41.360c309d.js",
    "revision": "afa7e1ec21b77838320843dce6e0a8f2"
  },
  {
    "url": "assets/js/42.05ab1ab5.js",
    "revision": "fb521b1ef9a789c2b14b8ed02628514f"
  },
  {
    "url": "assets/js/43.a50c434c.js",
    "revision": "c5ce876de09d095a5d085603535e0767"
  },
  {
    "url": "assets/js/44.ec333559.js",
    "revision": "496af2672d27f8f5330ac505b45e1f2a"
  },
  {
    "url": "assets/js/45.99469811.js",
    "revision": "25e03c54c7bfd4bfa714f8126b4c160e"
  },
  {
    "url": "assets/js/46.3e6b52d1.js",
    "revision": "f8b269f8fe4ca7cf5660023112a3a755"
  },
  {
    "url": "assets/js/47.3b530146.js",
    "revision": "b35c375003d3e487d330881b585f13f8"
  },
  {
    "url": "assets/js/48.ff6a205b.js",
    "revision": "67c8548aaf0e08fceac9940c36490534"
  },
  {
    "url": "assets/js/49.a3b79500.js",
    "revision": "a090f2eb3de34f37be85cd0f1411aeb3"
  },
  {
    "url": "assets/js/5.5e039b06.js",
    "revision": "6715951ee723a138d82df14390dcec72"
  },
  {
    "url": "assets/js/50.20f48f6f.js",
    "revision": "ab2af2d222c4b699b1e7a0a122750f72"
  },
  {
    "url": "assets/js/51.88bfb30a.js",
    "revision": "5ab81ef5e343cc8e461c4f1436d90aca"
  },
  {
    "url": "assets/js/52.c6d0621b.js",
    "revision": "4776ffe00af7803efe4100d1c4f0e614"
  },
  {
    "url": "assets/js/53.abdf0370.js",
    "revision": "d108d4f32e0a14757f7890777250a2b3"
  },
  {
    "url": "assets/js/54.3898c18a.js",
    "revision": "fc5623ac129d37874d2cdfd6042a883c"
  },
  {
    "url": "assets/js/55.02153cee.js",
    "revision": "e8f69c2651cceaac25ace07e5fe098c3"
  },
  {
    "url": "assets/js/56.7d090aaa.js",
    "revision": "779cb321a7f4a635e731150b31e64a72"
  },
  {
    "url": "assets/js/57.af5e3fb3.js",
    "revision": "4af089f6f09bb6b9ec7b1ae3c12d70f1"
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
    "url": "assets/js/app.26b5e465.js",
    "revision": "7bfec7a3eed61e3d96a5d0f67dce6993"
  },
  {
    "url": "categories/index.html",
    "revision": "7d4e4a138fb3202105592dcc4d0a2993"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d9facccfe37bb4f2f75c79f6856d4a72"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "19e4a74c6f561abeaa253cce66b567b3"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "be4b48f949f2f902aef30b00897c368f"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "101df9c31aebc7deaba806a20dd40601"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4dc4e9c9277a84b1bd0e252c79c7ae7"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "414bed93ec002b643db07a87efb28dd8"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "0f44aa154c04dd539c2cdcbdc08f4d86"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "f3c143d22eb707b44801ffc4eab4cfd4"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "2793ce6838125381d4256193502f058f"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "82aba4b1b245342721b0b41d1de76f04"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "f68749d5736b521dd92f5a2954ae5763"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "0066c2eebf51b225fa58531b48526f1c"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "6f06d753c89bdeb324c8736e5cca1f70"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "b5010877dba19891a486687a3731b91a"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "67cb7353458d62dc86296d505ae8cf2d"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "2caac4193e484e863b2e6095c53491e3"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "c53699c1bb25f1328c670cac87c3d1b4"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "874ae16ac4ae3e48906dc7e83a82e784"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "979fe4b2ca5b9ddcffca6f2e68fb9be0"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "198d1cd7a6906ff4d30310bc9c40ac09"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "4bb411a7410db3680e2948a1696a1b51"
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
    "revision": "040b9ee7fca7bba54a887eb6856f469d"
  },
  {
    "url": "java/index.html",
    "revision": "c1f39b285ad46aeff81ecbb585ff92a7"
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
    "url": "node/index.html",
    "revision": "4fdfdb6526e776505166df6efe00862d"
  },
  {
    "url": "node/nohup.html",
    "revision": "63f1c8fe50ff5e73b89f6136f5b17846"
  },
  {
    "url": "node/pm2.html",
    "revision": "bc59d48e50241528dd3f54fc9913f675"
  },
  {
    "url": "node/tools.html",
    "revision": "eb118924a0c661abc9aac1075c3ecb7f"
  },
  {
    "url": "nuxt/index.html",
    "revision": "96d560c5c1f5fa95d59f9235477a2166"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "0957c634e39b66fb6ff6319a6e979551"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "f1d39afc9307a18adb4e767824641d91"
  },
  {
    "url": "others/2022/20220215.html",
    "revision": "ad08a4de6e634ecb65f7822060dd09d6"
  },
  {
    "url": "others/2022/index.html",
    "revision": "446236429f33566b1b6480e88cdc872f"
  },
  {
    "url": "others/about.html",
    "revision": "d1dbbce77fadbd664b99f3cfd9e98d29"
  },
  {
    "url": "others/firends.html",
    "revision": "dcfed857ead6c467ca064da19fd1c061"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "a067e83ac73ba59968abfd28af28dfd1"
  },
  {
    "url": "others/linux/index.html",
    "revision": "61ab8af67551bbad85d4188415b0563e"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "a2cf088bb44de2ebe3406f5ed0a2321f"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "0bfa6bffa1c3e00dd151ed66d6ca867d"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "0ff9ecc5ec43d12ec47425ba1ec33fbd"
  },
  {
    "url": "others/other/index.html",
    "revision": "7a7d239b71d8f0e6b198f1ec57f25509"
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
    "revision": "cb1773f7c6c329fa7642e1cb57f7dbdf"
  },
  {
    "url": "tag/index.html",
    "revision": "16c9a0896f1329b83afa6de476856122"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4d4d1492042ca87cd93e4ab56d70349f"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "c0b960eeb08c271fc5c27c048ce220c5"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "51a4d7f37f4983b604792e64155c2541"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "e45e89dc86ac8454da8c7a7fbe0be605"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "cd11b9482e2c1cc990802db4777b8749"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "05d06261d1cd7d7b5f82d9e962affe4d"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "914960c9fbfb6e492e6f53b20a52d9e3"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "9a72f3f8d9071288521be39a202daa87"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "68b863a197d0123d9c3f22be83265888"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "d7d812ac9220d05d7e7f692c54a5506e"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "ab414f45f3b6b2b7b5b14d37adff4f23"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "033f554cf8d1a2f9426cd7d30fcd47d8"
  },
  {
    "url": "timeline/index.html",
    "revision": "338dd5493aec5377045e0e3eeda585da"
  },
  {
    "url": "vue/index.html",
    "revision": "222cc250ed2091fbff956d40d72adf7a"
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
