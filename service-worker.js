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
    "revision": "2471c7716d96bf9200267a281bea95d0"
  },
  {
    "url": "assets/css/0.styles.f11b12f1.css",
    "revision": "32a46724ae33fc67c58a77992964a1bd"
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
    "url": "assets/js/1.024c5996.js",
    "revision": "cdd59c205a3719dbc61b9291978f8224"
  },
  {
    "url": "assets/js/10.d43e177a.js",
    "revision": "39b75026915ab1a5b56bb0c95c506edc"
  },
  {
    "url": "assets/js/11.809dddf0.js",
    "revision": "169a9a4d5c34378951a051b66d46ba1d"
  },
  {
    "url": "assets/js/12.7326d280.js",
    "revision": "168379876a85941ea906dbfb308ae098"
  },
  {
    "url": "assets/js/13.fd2c2c4c.js",
    "revision": "e706bf7f38205045f59e540d676d5468"
  },
  {
    "url": "assets/js/14.d669b9ba.js",
    "revision": "9b68a7e135f2e900838eee7c2dfd9ff4"
  },
  {
    "url": "assets/js/15.89076bd9.js",
    "revision": "2c86a6d6fe546d9dcb683905867b727f"
  },
  {
    "url": "assets/js/16.310e198f.js",
    "revision": "78c5ef5c5fd7ea257d4e44eadefe330f"
  },
  {
    "url": "assets/js/17.538129ff.js",
    "revision": "b2853a79ea5be6181d4cd2efe60560a9"
  },
  {
    "url": "assets/js/18.de55b0f9.js",
    "revision": "f1a115874ca915108de2bf5040dfa118"
  },
  {
    "url": "assets/js/19.1f3e0e6b.js",
    "revision": "f1b181c25ff69a294b0c270336e7743b"
  },
  {
    "url": "assets/js/20.678b8c1f.js",
    "revision": "7c4aa18cac168e0f2594ca41af5d823e"
  },
  {
    "url": "assets/js/21.979cc3a0.js",
    "revision": "57a31b9ea26c60dbb6b948f387f08049"
  },
  {
    "url": "assets/js/22.f65d068f.js",
    "revision": "e0736623d8050e45715136219c09a9c1"
  },
  {
    "url": "assets/js/23.7e8a7b1e.js",
    "revision": "7684a7db7838beccae6e2b73f50e35ce"
  },
  {
    "url": "assets/js/24.2d4e832e.js",
    "revision": "3a29970109b474680d924e89a8620d64"
  },
  {
    "url": "assets/js/25.8442538f.js",
    "revision": "b1d7e649dba20bce7a840848b143e303"
  },
  {
    "url": "assets/js/26.c01488b4.js",
    "revision": "81e4f58c7fd25d16d31806314a9f1af4"
  },
  {
    "url": "assets/js/27.93587bd7.js",
    "revision": "295a5ffab0a2f01cbc030e7b1e297acd"
  },
  {
    "url": "assets/js/28.714ef821.js",
    "revision": "6c835f8d4b0f21bedd80a8e1d40666f9"
  },
  {
    "url": "assets/js/29.8548cb2c.js",
    "revision": "104ee369c8449decb3d723c90e10a227"
  },
  {
    "url": "assets/js/3.c3876641.js",
    "revision": "1db65421a7d0ee26e0d18954610663fc"
  },
  {
    "url": "assets/js/30.361d7230.js",
    "revision": "3fa9901f6bb2bd90a5f971fa5e78cb5f"
  },
  {
    "url": "assets/js/31.58e8933e.js",
    "revision": "d739b9725d72fe867812b29bf39b84c7"
  },
  {
    "url": "assets/js/32.2e7bafe1.js",
    "revision": "62613cf20bb25170c8204dce7a57f097"
  },
  {
    "url": "assets/js/33.56c5dee9.js",
    "revision": "e3d6267ca8bedf6f8b86c81fe0d6f342"
  },
  {
    "url": "assets/js/34.69d6f5bd.js",
    "revision": "3e202d17946302b4f9788a03b2f720c7"
  },
  {
    "url": "assets/js/35.ebd54919.js",
    "revision": "e38087fe3f1048935547e93f566d2046"
  },
  {
    "url": "assets/js/36.4e891fb5.js",
    "revision": "28a8874e687c3e2eebfc087b850ef1b9"
  },
  {
    "url": "assets/js/37.2e159698.js",
    "revision": "f0c006792f7bec53c278ac42185fa999"
  },
  {
    "url": "assets/js/38.4b1ac246.js",
    "revision": "65e58ff72c876422d4ba36c6e6f0810e"
  },
  {
    "url": "assets/js/39.2c2c76eb.js",
    "revision": "6a656221443280cc0b0bf33292c3aeb4"
  },
  {
    "url": "assets/js/4.f51d84b2.js",
    "revision": "bfd42c2e665fc3c65f0c79f932fddc72"
  },
  {
    "url": "assets/js/40.d54effd8.js",
    "revision": "77b88ba524a2dea6b24d188618ea5d29"
  },
  {
    "url": "assets/js/41.7275ea3d.js",
    "revision": "26178dad4a22e4f8e6cd3cdbb4102ce0"
  },
  {
    "url": "assets/js/42.d1448891.js",
    "revision": "587dd883c0bd4d33a2c0459f9c2802b6"
  },
  {
    "url": "assets/js/43.e00ff51e.js",
    "revision": "1c8d1c61da17e66b830449fe53fa2d40"
  },
  {
    "url": "assets/js/44.46fb34a6.js",
    "revision": "5d64225cdfe87920354e0115ca5ba0cb"
  },
  {
    "url": "assets/js/45.b001fa79.js",
    "revision": "2f81bf788b6521499c814403043f4979"
  },
  {
    "url": "assets/js/46.09181edf.js",
    "revision": "ab9b827e5ccf367947f9bec7e3b4da4a"
  },
  {
    "url": "assets/js/47.fabc387f.js",
    "revision": "30e06a329960e38a47eb7f461a701a66"
  },
  {
    "url": "assets/js/48.f2f37cb8.js",
    "revision": "56ec0b24451faa4f78c8497c7f9e694f"
  },
  {
    "url": "assets/js/49.c6566d42.js",
    "revision": "bb05ca697ae67de90ce56fde20d7ddfb"
  },
  {
    "url": "assets/js/5.16bd6cfa.js",
    "revision": "0e54afa8cc4d1934c19e5636159ac780"
  },
  {
    "url": "assets/js/50.91d825a8.js",
    "revision": "d8a4d8b2987ba177c32966486574b3b5"
  },
  {
    "url": "assets/js/51.e8479f87.js",
    "revision": "627ae4ad34cb28bdaf42393970fe2dad"
  },
  {
    "url": "assets/js/52.75e3cdc7.js",
    "revision": "8c92356afe53013acdc1f0ee15eac8b2"
  },
  {
    "url": "assets/js/53.1f7e6ae2.js",
    "revision": "f4b1bd60fe210200ae0dd663971152bb"
  },
  {
    "url": "assets/js/54.ff93d9c2.js",
    "revision": "720511a774cabde76952a7a4d455c980"
  },
  {
    "url": "assets/js/55.d6ab48c2.js",
    "revision": "ac512a9651fbfcfc0f6257ea0756efec"
  },
  {
    "url": "assets/js/56.2cbe14bf.js",
    "revision": "7287187ba3bfcd1d3f010d626704e032"
  },
  {
    "url": "assets/js/57.93a9d519.js",
    "revision": "30d1193de69d1efbd3ba6c6599ca038f"
  },
  {
    "url": "assets/js/58.1ac69dc3.js",
    "revision": "3e3a6763a7e2c53100f500e9ec9eb54a"
  },
  {
    "url": "assets/js/59.00a50ce4.js",
    "revision": "1466c8a9cc6d02412a9e13ddadb1a509"
  },
  {
    "url": "assets/js/6.046f5c68.js",
    "revision": "f18d2266246bfc351ff8fd0251a10869"
  },
  {
    "url": "assets/js/60.8af96b80.js",
    "revision": "28d179e53ba2ef7d4cfdb1db4aa14578"
  },
  {
    "url": "assets/js/61.d13461dc.js",
    "revision": "fc4b374960dbc5011f06e6d4694c2e8d"
  },
  {
    "url": "assets/js/7.189daffb.js",
    "revision": "4ba6ffb3526be840d94d20c5eeb1d66e"
  },
  {
    "url": "assets/js/8.29e78293.js",
    "revision": "20282df1027ce861efa9e921eff12a04"
  },
  {
    "url": "assets/js/9.65f2d598.js",
    "revision": "ce32806140595e10a0a122a9192ca487"
  },
  {
    "url": "assets/js/app.66a9929b.js",
    "revision": "8a1d4a4ec97beb542e59b712e5353620"
  },
  {
    "url": "categories/index.html",
    "revision": "bc10f4058ce9bf9eca46b1af394095cf"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "dff1a75c8ffb729ed37bae05b2dffe95"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "b3d1122f467bce995b269ff3cd6f13e0"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "fef6adca83959fcb24f448504dfff011"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "f4605f833b8f15e0d8765ecdad1b05bd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6e2f49d7e0dc780246886f5915dca089"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "73e4671a0c7846991d65be27719ba947"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "51bc0c2650b89eb686b92bbc834f0992"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "e1bde6d19caae27c928cf76f01a33291"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "49e4e43fad96ad875ef280ded8b9c1a3"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "5c2cae2f152c05c377899ed3f4e9ad72"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "7f7ef4e414719c5d5d5e80c3bc0721f2"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "efd9cb1775758843b0938ac29cbee63a"
  },
  {
    "url": "devops/gitlab/install.html",
    "revision": "381d0c6ad4fbff07b7094d261466c70f"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "b51d0a932d70028c7cc1bcd1d576aec6"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "dcb168cd0bf0846b0ee663c0198a2b9f"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "7d2e98c5758ef6df92221d8ad7f0308a"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "91cae00ecdc0c34c22487dbf0c3b99c9"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "42804b92fed0379b150adac17ad578cd"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "a40f83c566ea4d35f33e420780b73b12"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "e35a3e0b5dfe02ed0a93da379d10654a"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "a096c89277e7d82a0ae4e2d7b3024d84"
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
    "revision": "d2e9ece7f435957c2bf39685ddef3213"
  },
  {
    "url": "java/index.html",
    "revision": "de310be6d6d667a7c23c99709f8a8c31"
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
    "url": "linux/basecommand.html",
    "revision": "661fe3a4f78b2eb4f199c160733965ae"
  },
  {
    "url": "linux/index.html",
    "revision": "ec65ebfef49411763d39ad01f7984634"
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
    "revision": "838f1a05786669b6706a2a25e5cd0d6f"
  },
  {
    "url": "mysql/mysqlinstall.html",
    "revision": "daa749249cff82ccdcae2c997bf63236"
  },
  {
    "url": "node/index.html",
    "revision": "dd27367fd77e33a2e0519a1fe8366e84"
  },
  {
    "url": "node/nohup.html",
    "revision": "4b619925e07bd44b5186617b57cc1723"
  },
  {
    "url": "node/pm2.html",
    "revision": "b4fb30fb17fa5a178c9a93abc14ced38"
  },
  {
    "url": "node/tools.html",
    "revision": "499a9eb7a9bad2eea5740be0551bbac6"
  },
  {
    "url": "nuxt/index.html",
    "revision": "b6d50062e7a8529f9e51b6ba301b0fdb"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "35636b74003d9058f5559fe0d8195e4a"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "77cc2b2b5ea953fb30703e305ba08e00"
  },
  {
    "url": "others/about.html",
    "revision": "505acb292f7a0099aaeb4687d34ca46a"
  },
  {
    "url": "others/blog.html",
    "revision": "64794ffe4bcfe7bc00fb33a6bb45700c"
  },
  {
    "url": "others/firends.html",
    "revision": "b699290803d3e75a034c034322cf8c37"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "8d8284e75c591bc5081c8897c9d5bec3"
  },
  {
    "url": "others/other/20220622.html",
    "revision": "227683dff8c78f443e8557c860378501"
  },
  {
    "url": "others/other/20220623.html",
    "revision": "078f90c57a232be88aa30a4221813ff3"
  },
  {
    "url": "others/other/index.html",
    "revision": "9a79e0902d71fe99b79304a651cb004b"
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
    "revision": "25bc06e13bb17c8ccd4cc8e1c301cb42"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "2468f2c55b952c9d0a0515de603f460c"
  },
  {
    "url": "tag/index.html",
    "revision": "a91c5953a489bcc968f9053a3da2a721"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f519ac956c0fdc19f530a965e485ff28"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "68243f67ddb93928a47f69571d43d34a"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "d7b5ddcafa3679b66cb696d023be04c6"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "7f2e01b714d4463e7598769506d8ef89"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "5553d07c303196bed5f3f927c182a97f"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "a5eb2c97ccf17ca334897a594b501271"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "a273ac0cfce6570f37e1042b9282ec85"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "300ccfda7f3c37f0efb3934586896ca3"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "9a45ac3bfeda80af87c21f65c10532a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "6638d2e7631e6e1e709293b30429c634"
  },
  {
    "url": "vue/index.html",
    "revision": "6ac8f2ffca6d67e62952530506f64745"
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
