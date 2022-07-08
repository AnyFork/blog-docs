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
    "revision": "c8857a14b1262c1e2db9d5ac53288dbc"
  },
  {
    "url": "assets/css/0.styles.5a3e48e2.css",
    "revision": "2371541f865226520d993e21e92ad31f"
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
    "url": "assets/js/1.f837db52.js",
    "revision": "3f1e843358e3f89eef887aa633459f33"
  },
  {
    "url": "assets/js/10.51cc7003.js",
    "revision": "47c7a6db9f5aa3df56a7c3df810aacc5"
  },
  {
    "url": "assets/js/11.299e2e73.js",
    "revision": "933a3d521660c1fd370b26eda181d847"
  },
  {
    "url": "assets/js/12.6f8cfdff.js",
    "revision": "8b07560140ca223ec100129b535eb1df"
  },
  {
    "url": "assets/js/13.9a7bc45e.js",
    "revision": "514a7227d2d295f5b7e8c0cfee87fc95"
  },
  {
    "url": "assets/js/14.a469a40e.js",
    "revision": "bbb083c13c2c961a44a3f20d37518e14"
  },
  {
    "url": "assets/js/15.8bea7218.js",
    "revision": "afef1828174e4daa74aed64689f98f46"
  },
  {
    "url": "assets/js/16.26593d82.js",
    "revision": "255246cf4ab50de1526ee32c9b4b6e11"
  },
  {
    "url": "assets/js/17.edf46fca.js",
    "revision": "8802427f98e0d85abae3bcc42bf3551d"
  },
  {
    "url": "assets/js/18.a03db775.js",
    "revision": "64bca8bb908fb2ac4e628a035fe31b70"
  },
  {
    "url": "assets/js/19.4698446f.js",
    "revision": "5760259d78f9d8511abb8e3cd516ff60"
  },
  {
    "url": "assets/js/20.7c535a93.js",
    "revision": "a3974846af120e2ceffa674e6b411061"
  },
  {
    "url": "assets/js/21.f729a164.js",
    "revision": "aacb2970296b70c98d99b8d457708861"
  },
  {
    "url": "assets/js/22.87033012.js",
    "revision": "e8f43bc8a0fc67ab096939d890bcbf7f"
  },
  {
    "url": "assets/js/23.4beeb795.js",
    "revision": "b63b54dafba9803c253f0adaa1765da6"
  },
  {
    "url": "assets/js/24.95a32d0c.js",
    "revision": "5889598c57262b96a3e44507024e49ee"
  },
  {
    "url": "assets/js/25.cc57ce6a.js",
    "revision": "9dbbf5aa57f6f42f90b09c0209917c5d"
  },
  {
    "url": "assets/js/26.cb303b4d.js",
    "revision": "bbe9570ef039d0a51ab21c56c5b2ea8f"
  },
  {
    "url": "assets/js/27.5d174615.js",
    "revision": "fb350662982b6538768447837d8e942a"
  },
  {
    "url": "assets/js/28.3c90c80a.js",
    "revision": "6980222a722c79166c03a7a9e1f3ade8"
  },
  {
    "url": "assets/js/29.a999d3ab.js",
    "revision": "a3e62e46f386414c1e6d45c1c990b4e9"
  },
  {
    "url": "assets/js/3.ed8546b8.js",
    "revision": "515f78f264a941e39df308cc556adef9"
  },
  {
    "url": "assets/js/30.aeff2ab1.js",
    "revision": "4ca494c61be8ca08e41b5e3007f61115"
  },
  {
    "url": "assets/js/31.a56dd115.js",
    "revision": "49d170ebccc2cb37b5bcd8bc6fcbd81a"
  },
  {
    "url": "assets/js/32.a8cab7b6.js",
    "revision": "a1889a39ae80c4a72077b94b48418244"
  },
  {
    "url": "assets/js/33.406506d8.js",
    "revision": "3d091be36f79b7af28c4ffebc1455063"
  },
  {
    "url": "assets/js/34.5bf32d3a.js",
    "revision": "4e5d2f9622728076a00a27d8f8dcd69b"
  },
  {
    "url": "assets/js/35.64ddbe2b.js",
    "revision": "b03414df1570075f9aec671ad0c4677e"
  },
  {
    "url": "assets/js/36.0c0379e5.js",
    "revision": "86c8f89328ab34efab6c45d0a96fb1b1"
  },
  {
    "url": "assets/js/37.d706a211.js",
    "revision": "6caa15dacf629349df19c0431d2e12f3"
  },
  {
    "url": "assets/js/38.808dce72.js",
    "revision": "dbfa5e44822fe722e7bb688b8629408c"
  },
  {
    "url": "assets/js/39.5df32c5a.js",
    "revision": "3286cb5000f1f51f4eeb5217f91c0ec5"
  },
  {
    "url": "assets/js/4.38f84a95.js",
    "revision": "ba6549e6b11b3c792c0fec21468a6901"
  },
  {
    "url": "assets/js/40.7053469d.js",
    "revision": "aa412680cf7a9602ceca135686458954"
  },
  {
    "url": "assets/js/41.6e264109.js",
    "revision": "37737184ba1dc66c00fc3691251f00a4"
  },
  {
    "url": "assets/js/42.cce0e678.js",
    "revision": "b8ffb6688fc7f58843f6e9fe60019be4"
  },
  {
    "url": "assets/js/43.d285ef09.js",
    "revision": "10bf6115406a391f5999158ce7b6e1ca"
  },
  {
    "url": "assets/js/44.9c1e9f8c.js",
    "revision": "dcc223f11f6ecbab19e834eaa663b87a"
  },
  {
    "url": "assets/js/45.892ebdcf.js",
    "revision": "508c68d71eeaf2307eb010af0edeb19a"
  },
  {
    "url": "assets/js/46.6ff6337b.js",
    "revision": "817d35f83f8299589ee30c48e54c3743"
  },
  {
    "url": "assets/js/47.3e37b912.js",
    "revision": "f92ff93034e59dac66d671775bfa8e47"
  },
  {
    "url": "assets/js/48.60169b98.js",
    "revision": "a294b61c81807f93a9c8345792000c0a"
  },
  {
    "url": "assets/js/49.169c7243.js",
    "revision": "08f71c53306861bc089714f1d2e6ac88"
  },
  {
    "url": "assets/js/5.137a258b.js",
    "revision": "a5792dcdacc48095061a9dc77bb94dda"
  },
  {
    "url": "assets/js/50.3c668b70.js",
    "revision": "ac8b6380ed5fb7da38c84e89c29a6b03"
  },
  {
    "url": "assets/js/51.5cfd1267.js",
    "revision": "8040f28c18d96d594f6c6286fc59533f"
  },
  {
    "url": "assets/js/52.69f053d0.js",
    "revision": "10fe3d02518dd6952c77a4abc784e027"
  },
  {
    "url": "assets/js/53.52f294ee.js",
    "revision": "02293a08cfb0e4469bad0ddf68a0a3d9"
  },
  {
    "url": "assets/js/54.03625639.js",
    "revision": "0f432f08f3662fd92e148b287ca9310d"
  },
  {
    "url": "assets/js/55.5f430009.js",
    "revision": "63986fe6de7a04351df8a478e89c98f3"
  },
  {
    "url": "assets/js/56.3530937d.js",
    "revision": "fd315fccf848f50b729f19561d41b3ea"
  },
  {
    "url": "assets/js/57.b08996fd.js",
    "revision": "c4a2c824a5c842c499bfebc990c88e9c"
  },
  {
    "url": "assets/js/58.4be0f136.js",
    "revision": "8bf88897d8ca388715d53338e90ce0ee"
  },
  {
    "url": "assets/js/59.98fad289.js",
    "revision": "4d8f256b05c66604e67860bbcbaf7065"
  },
  {
    "url": "assets/js/6.862accb7.js",
    "revision": "e1c7f0038a0b93e9791ce8b4268b3f4f"
  },
  {
    "url": "assets/js/60.0c445367.js",
    "revision": "f5566ffec691e9c65db2925ac710a353"
  },
  {
    "url": "assets/js/61.8906880c.js",
    "revision": "212b45785ea9f1944d798fb4aab918ab"
  },
  {
    "url": "assets/js/7.88c1dc6f.js",
    "revision": "062461c07d22a9301dae61cb9782397d"
  },
  {
    "url": "assets/js/8.d588bb69.js",
    "revision": "74a5d9ed31f4976680bef65e4e7ee46b"
  },
  {
    "url": "assets/js/9.cd9df87a.js",
    "revision": "1219058d0a292930204114d2c7830dec"
  },
  {
    "url": "assets/js/app.23c9afb0.js",
    "revision": "4e35e4da271ad6b81738fc18c27529ee"
  },
  {
    "url": "categories/index.html",
    "revision": "f62d44162686850a0a35d05d25e190a3"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "02efb4e6147e5f4c729a952b8cb62961"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "78a2e674d662dfbb854550328b502764"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "79b15c4d69fef55b1ac5153819c339ef"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "e442098f8ba1236ecd8a85dbc89a3d43"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1b7944498ef74fc32aed16261fdc5670"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "4eafde4de61195768151597b5db163d0"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "547a339cd7a1d16fde5e6c7f4d070297"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "b4bbc81388fab897b8fa1aff9cbeadce"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "d665d0d72d965861f9c10ac2815f202b"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "4d7744ae2364bc6511439b53a953004a"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "47b24e9cd97bc6efead0fb20cba20274"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "103a9a394f13bf8b1ae0a0a2d1024d10"
  },
  {
    "url": "devops/gitlab/install.html",
    "revision": "2b439327b315b54c2fcb3d67aa1b9cd7"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "bb9fef71093698bdef2d89b796f7f634"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "a0fccf134598262daa4682741dcca454"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "60ae1d48815954c37de8d798ee02ea21"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "6770b09f2322db43110ad3e6a4bfa560"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "c2f09d978fdda931a58a412335cb2088"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "34dcfd91055437a50cb8f7323836876a"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "4ae753f42b3eda547720a7afcbaa90cb"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "00c2fb19e8493dc171dafbc1d93f692c"
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
    "revision": "aeb2fe7894b08f360562ef04ecd88706"
  },
  {
    "url": "java/index.html",
    "revision": "7c63f5d486daebfc5362a1b44dcf7ca7"
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
    "url": "linux/basecommand.html",
    "revision": "ded344b36e58243f0cf68ff7399a6858"
  },
  {
    "url": "linux/index.html",
    "revision": "a7d1cb44adbfe02c97509de1adef1fcd"
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
    "url": "mysql/index.html",
    "revision": "a6611df18d955603b0516e32b48b9e86"
  },
  {
    "url": "mysql/mysqlinstall.html",
    "revision": "4fc2df60ab12de4b124333580f4e177f"
  },
  {
    "url": "node/index.html",
    "revision": "c3b0fb6a133d8019ebf8b0b4d1bc426e"
  },
  {
    "url": "node/nohup.html",
    "revision": "1b367d180113eb7e8685a55283c4ac82"
  },
  {
    "url": "node/pm2.html",
    "revision": "d103a2c6d61c91379db9d922127f6c8b"
  },
  {
    "url": "node/tools.html",
    "revision": "99880441529de89f5fa128e2d1c833ff"
  },
  {
    "url": "nuxt/index.html",
    "revision": "d67a657500fb6acd7124b4a0be9479cc"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "a123858fc23410d059ee6198fc61ada7"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "02561416a46e95a23cc09cf0822daa2c"
  },
  {
    "url": "others/about.html",
    "revision": "9297ef0912a09663e6ac462cffe06de4"
  },
  {
    "url": "others/blog.html",
    "revision": "09f816e5dc94655e92094e94c15e1fb9"
  },
  {
    "url": "others/firends.html",
    "revision": "1e2eae12a48c5df2c980344fb1945003"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "e47469dd58976c78dde0b709acf550ba"
  },
  {
    "url": "others/other/20220622.html",
    "revision": "11bfc53ec1bf7d1b268006623817f174"
  },
  {
    "url": "others/other/20220623.html",
    "revision": "f393248f41b005d99126d69c0a09433a"
  },
  {
    "url": "others/other/index.html",
    "revision": "f04b23b4ac84d0201bcf5bcd430b28f7"
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
    "revision": "656972736e52dd13a69b6a7f08cb118b"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "6633ac9683455dd2a88b9e29915776bd"
  },
  {
    "url": "tag/index.html",
    "revision": "dd5f62e5fbf723a1d423dfe7afb9845c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ba5c6eb5ab806491f718869228295de6"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "29de3a512aeafc956776d23ac5a7b69c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3a5bc8a7777ea5032ca8610cda7e5c46"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "d81a35a798de9fa64f8dc5cd270db6fd"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "83a2c738233910d74ed6e693ddc72e48"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "d789763444186cc9b5304d66682e9b9c"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "047f850b45975da0132b454b870e19ef"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "92f0912cabf41ab6dbc9142ef6b1519a"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "ff83919650753649f1bbc06fe12e045c"
  },
  {
    "url": "timeline/index.html",
    "revision": "77ea96c0a8dd3df4fe3849b76a374e0f"
  },
  {
    "url": "vue/index.html",
    "revision": "fe568313ac7b23d9f7c5c1bfd9f2aa84"
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
