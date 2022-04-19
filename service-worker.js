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
    "revision": "dfabf615bc4351e31a998d821e49d25d"
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
    "url": "assets/js/23.81d176cf.js",
    "revision": "2a7f3e7b5b7e2f89a5d541842ab13f6a"
  },
  {
    "url": "assets/js/24.012e2ff9.js",
    "revision": "333525c08e25d504ca3d1d312288c5a9"
  },
  {
    "url": "assets/js/25.8edcae88.js",
    "revision": "6a97ee835703ea7cb2f170990647d1b2"
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
    "url": "assets/js/36.80b12863.js",
    "revision": "ece5ecdf75131e52d2c24884ad533be8"
  },
  {
    "url": "assets/js/37.e3165e9a.js",
    "revision": "e1f05e4385bf2e96ded730c894b64ab7"
  },
  {
    "url": "assets/js/38.5c793162.js",
    "revision": "e3e07df7f86dac294bca84aa4c2bc717"
  },
  {
    "url": "assets/js/39.6f8b7798.js",
    "revision": "348c961305570a84d7345b58411c026d"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.5f345089.js",
    "revision": "d1fbdecea5b98ecfa9935127405fd25e"
  },
  {
    "url": "assets/js/41.72338ace.js",
    "revision": "59c1015f37feb54642861cb64997a19e"
  },
  {
    "url": "assets/js/42.3755759e.js",
    "revision": "95414d923305c89b9c8d5c9f04a52a3c"
  },
  {
    "url": "assets/js/43.46d18747.js",
    "revision": "9d70f40b6230e7e3c7342dd375d8a29e"
  },
  {
    "url": "assets/js/44.220e04a5.js",
    "revision": "804f8c7d1b8ac45de6f93e39c83adb79"
  },
  {
    "url": "assets/js/45.0df180f4.js",
    "revision": "877fc63fd05121a6d7a690079f35009d"
  },
  {
    "url": "assets/js/46.11d36985.js",
    "revision": "b56b5f35ed1bbc7820bf5e5a2c659405"
  },
  {
    "url": "assets/js/47.70f4dd47.js",
    "revision": "576a058fbb1cee59b376881d6aeb5c56"
  },
  {
    "url": "assets/js/48.965dbc9c.js",
    "revision": "9713f7cf1437a405ccfd57efc1c8ff15"
  },
  {
    "url": "assets/js/49.32602a2e.js",
    "revision": "26eb0022d8a1a47af78938b26eefdaef"
  },
  {
    "url": "assets/js/5.5e039b06.js",
    "revision": "6715951ee723a138d82df14390dcec72"
  },
  {
    "url": "assets/js/50.51efd041.js",
    "revision": "66d681f86709dba5915799801b003ff2"
  },
  {
    "url": "assets/js/51.34102717.js",
    "revision": "787050e886cf2ec68a32efff0d6ddddc"
  },
  {
    "url": "assets/js/52.74e46b0f.js",
    "revision": "1d32a3344277022dc322967ed540adbc"
  },
  {
    "url": "assets/js/53.ec158b3e.js",
    "revision": "2c418150021c5f96574e5246387ed230"
  },
  {
    "url": "assets/js/54.f53090a0.js",
    "revision": "845ac6674119912dbc3e9fed7f8dabad"
  },
  {
    "url": "assets/js/55.4199ddf2.js",
    "revision": "d3c838af04058df08631b3234c22c5d6"
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
    "url": "assets/js/app.c279e068.js",
    "revision": "8d8d1665c7d1332285a9e2b19cdcfa02"
  },
  {
    "url": "categories/index.html",
    "revision": "98801a6e28cb5c201caf73927f20e488"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c144ce350c462c83da50ac38533a7a21"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "898d2f336784010340f3fee4f87169ac"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "6650d03994d0ed4b53878d9ad3094daa"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "14bc842ec291d9467721dbd505822258"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2ac51c0e35330a8afa2d92a179ae3f7d"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "45859e3e1d903ceba4aaa0f51bc7bdce"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "c557e164373389c68dc68a8d29ca903a"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "c671cba2098aa7059146b1b84ab49b91"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "29edd6baab70260bfe8d1ca968d9b88b"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "0b5e7446f418d3e26442b9716fdd36e2"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "475338469921a5b7a62ad5cc999458f6"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "0110f85eda96958e13aaa240f449a451"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "62cef3f93c858824fef78245f22c6c35"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "a75cfa0aff1b7e6c5db98f88a2452129"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "9d61842eda31f321d7adf70b6a0e162c"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "1b1c12fc19a671ef9879658fb530040a"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "a07e886b183e913a7e932d0c88feaf9c"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "5723ff85c726a71cefea98ca61d45fe5"
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
    "revision": "56eafccfcbae7c4e7581d42487d84c5f"
  },
  {
    "url": "java/index.html",
    "revision": "2b87d464e99bdd4d53df0c54a50b3784"
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
    "revision": "5cccdcdd2b004e9f45c05587861e344f"
  },
  {
    "url": "node/nohup.html",
    "revision": "a05408e53def11cecd9e3e024768184e"
  },
  {
    "url": "node/pm2.html",
    "revision": "f0a7f4a0cf156f123594756ce5284cae"
  },
  {
    "url": "node/tools.html",
    "revision": "598926728e7778c4bae206225c1382dd"
  },
  {
    "url": "nuxt/index.html",
    "revision": "84afdd3f54e8f13b2ff797814dc1613e"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "d858ae25ff2e6d05e8d56364cf0bcd32"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "8c9c1d91b946046efa20065d4eafc609"
  },
  {
    "url": "others/2022/20220215.html",
    "revision": "6235a7df0a3df999bd859c066f0edda0"
  },
  {
    "url": "others/2022/index.html",
    "revision": "accd123b7ab8c1c5a7b24216f60a399e"
  },
  {
    "url": "others/about.html",
    "revision": "8129310466cedd0ab6f14782e3ada179"
  },
  {
    "url": "others/firends.html",
    "revision": "671ee26eeb7a1a6f821f7b2bc83fa620"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "7e51ac0787fc121276f47c834759922a"
  },
  {
    "url": "others/linux/index.html",
    "revision": "fc7f60b42859688813ada7189830d426"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "61f01f7b8a6a6ec10e3f4e2414367b01"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "00bd784f917778d155d8997f6494f13b"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "c4f692861d95fe52810324e2af3b9ee6"
  },
  {
    "url": "others/other/index.html",
    "revision": "fed52d0c3f6aa21d3e829e6085408bea"
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
    "revision": "1563a17b4450c0705e3569f2453fc1dc"
  },
  {
    "url": "tag/index.html",
    "revision": "93f447d36d84ce75dd55e5268bad76e4"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ab2da31584d8fdca0a09b9aa389b26a7"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "7bbe82cf04646ab5d2948882179c9600"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b853b274282cbf4383c7274cc4fff001"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "ea4448ef7dde73182c2681fe3924a9f4"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "8dd924892681058fd61caef7ab9f35ae"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "30ea257446597db34844e52ea28f18c2"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "5497e669f8a9e1d6faa9108457fc1c5c"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "699ab3d1d19aba5175a9a224ab65fcab"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "e34af88c20c8f545133c7109f28ff054"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "68a4722110b2e5e3d822a3525c3715af"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "2db6a1055db015cdc6d3ad3d47a87cc1"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb0f04b3a9d0a0fb790dcf154b0f5457"
  },
  {
    "url": "vue/index.html",
    "revision": "f4c9c4d663654561f1aed19c50ab755c"
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
