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
    "revision": "9b9aed13788f6776385e2c73a8893917"
  },
  {
    "url": "assets/css/0.styles.fadb05c2.css",
    "revision": "0dc2ede575a1a77e4457c0f114326e2a"
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
    "url": "assets/js/1.7dabaa80.js",
    "revision": "dbf734ba70d21e95a2cdcc6c85c5ea8d"
  },
  {
    "url": "assets/js/10.06978662.js",
    "revision": "626665f7a9d9a0705d6f72bf56613822"
  },
  {
    "url": "assets/js/11.17a5376e.js",
    "revision": "daf40f2b84ccbd808ce77a8cc3622fc9"
  },
  {
    "url": "assets/js/12.c9d4b6af.js",
    "revision": "d398500e35e5659d3437afe36272ee94"
  },
  {
    "url": "assets/js/13.931f690d.js",
    "revision": "71f213a986a4085a31c3c1ab6374a2cb"
  },
  {
    "url": "assets/js/14.6ff13ed2.js",
    "revision": "0264dd6db0b81a97aa0027d851db5f01"
  },
  {
    "url": "assets/js/15.c710ede3.js",
    "revision": "6b0420aeac7d2d41393cc2aed27148fe"
  },
  {
    "url": "assets/js/16.58be6a53.js",
    "revision": "b3b70df5229f8bda1a6e2496c85e9cf6"
  },
  {
    "url": "assets/js/17.b7873c1b.js",
    "revision": "5553ae7fff7983e382e5bfc2e7520b06"
  },
  {
    "url": "assets/js/18.ce194c63.js",
    "revision": "95d4425b10df725ff8e6105f1118cf8b"
  },
  {
    "url": "assets/js/19.d1a03a71.js",
    "revision": "2a00dd6fef850f427806bfcbd9904657"
  },
  {
    "url": "assets/js/2.f632ac53.js",
    "revision": "05d700325dc57e3868125ac596ad5708"
  },
  {
    "url": "assets/js/20.a3782f2d.js",
    "revision": "812b94e9bbbea494c65b50a637902880"
  },
  {
    "url": "assets/js/21.ba0c9d7a.js",
    "revision": "1b991621f5aea65095dc3b03200e3fca"
  },
  {
    "url": "assets/js/22.0f6021c4.js",
    "revision": "a8f308ea161c5a5715208f8a4459c489"
  },
  {
    "url": "assets/js/23.ac4e00ea.js",
    "revision": "6d067c38f89d17dc2a17b9a3040df09b"
  },
  {
    "url": "assets/js/24.56ccd7b5.js",
    "revision": "1d28bc32f191580e68e19a7ec27a2017"
  },
  {
    "url": "assets/js/25.849039d4.js",
    "revision": "11e887ecfd5157ae9856335ed147d20f"
  },
  {
    "url": "assets/js/26.58c21560.js",
    "revision": "ac39cc9b6a5716a51480b239269aafb5"
  },
  {
    "url": "assets/js/27.2a4d75ab.js",
    "revision": "c1fee8bdbb31cfc797ef5dbb00eadaac"
  },
  {
    "url": "assets/js/28.3f283918.js",
    "revision": "c8fb4142b1ea817fbb5f3e63d650a08f"
  },
  {
    "url": "assets/js/29.6a81b369.js",
    "revision": "5e34760e2096388622e286810cb53a28"
  },
  {
    "url": "assets/js/30.63690dbd.js",
    "revision": "c03520b657d84719bc39a321769cb606"
  },
  {
    "url": "assets/js/31.ca175bd1.js",
    "revision": "93c6bcc05cb454243d77ee88d1ef0fd7"
  },
  {
    "url": "assets/js/32.c805d9e5.js",
    "revision": "e1f57349024fc6e111a6e7fc8a107760"
  },
  {
    "url": "assets/js/33.74100a1c.js",
    "revision": "4034a84144c80e5c3f65d5365d585c62"
  },
  {
    "url": "assets/js/34.7625751c.js",
    "revision": "177396af21f2521ed2944cb42845aa25"
  },
  {
    "url": "assets/js/35.c66f72fe.js",
    "revision": "28c8fee40f3d0188dd9136a282c88a5c"
  },
  {
    "url": "assets/js/36.095ebc04.js",
    "revision": "02f804cedf06829cfb6f3907fa05f961"
  },
  {
    "url": "assets/js/37.8b476e9e.js",
    "revision": "25aa2ae429e38cecbc73eb827c1c5033"
  },
  {
    "url": "assets/js/38.f6772646.js",
    "revision": "0f24e353872a050fa73bcb1e7cbc5d48"
  },
  {
    "url": "assets/js/39.fae8a882.js",
    "revision": "05b8c049576fa0e90e9e569ea64b2118"
  },
  {
    "url": "assets/js/40.2bc8945e.js",
    "revision": "4172e35dfef9f611094ed991ef093596"
  },
  {
    "url": "assets/js/41.b98e3b3b.js",
    "revision": "c3559c7c7c1bc997432baf70849e666b"
  },
  {
    "url": "assets/js/42.03edebb2.js",
    "revision": "dbb7fbbfedf6c47eb5d02850c803d95d"
  },
  {
    "url": "assets/js/43.4f3987a8.js",
    "revision": "5ba97ec9b9e0af75c69f45ed37d15c2c"
  },
  {
    "url": "assets/js/44.549fc843.js",
    "revision": "8054074c0f0cb43c200949ad44f8d3a8"
  },
  {
    "url": "assets/js/45.76cf2701.js",
    "revision": "b700e78328043b2adb79d70d7c738b1f"
  },
  {
    "url": "assets/js/46.d970cfa6.js",
    "revision": "24ff46670fdb51c166e04ba457d72500"
  },
  {
    "url": "assets/js/47.500a0f67.js",
    "revision": "95e0506db562ec3eefa59012b02f129f"
  },
  {
    "url": "assets/js/48.89620ea8.js",
    "revision": "65fd40a86cf9e1a9052c2a740f976fb4"
  },
  {
    "url": "assets/js/49.87b4974e.js",
    "revision": "6b6e6ef56cd026c194950b4ee29164a8"
  },
  {
    "url": "assets/js/5.ea4b393d.js",
    "revision": "ec39fa713638a686101104519db654c7"
  },
  {
    "url": "assets/js/50.bb142785.js",
    "revision": "b76ed27e4434705e9f312e56e4694116"
  },
  {
    "url": "assets/js/51.2172a842.js",
    "revision": "f78bef4b1dad782f8391a1aec2f8bc03"
  },
  {
    "url": "assets/js/6.932dfada.js",
    "revision": "b7c123bda36027e2d86c900d9597f7b0"
  },
  {
    "url": "assets/js/7.d3003a88.js",
    "revision": "a7a3066d827224d62db7e4d637c35909"
  },
  {
    "url": "assets/js/8.c4ba562d.js",
    "revision": "7e372ff1be99125fd79b66f725668056"
  },
  {
    "url": "assets/js/9.d57e97ab.js",
    "revision": "80dac0f8a151e29950f745e8f0077563"
  },
  {
    "url": "assets/js/app.29a14d62.js",
    "revision": "ea89c2b3ecc5770d5d80e5873f813b07"
  },
  {
    "url": "assets/js/vendors~docsearch.91fedccd.js",
    "revision": "b2c7003147f1a877e29ca64a3723a955"
  },
  {
    "url": "categories/index.html",
    "revision": "32434e9623de483e8645a15c44d11066"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6d64a65709d4ff11f0216ad24ea41344"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "63233b8c5212eac340b371c2b328b143"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d37a1a16f3f42fa57641033255fda070"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "f2aef573e66e632bc47327eb8c040006"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b42062238cff04613b990a355c30442c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "cb9198e563f2073c45aa279cd7d93fcb"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "700ba512b849858c5a6d3c12afbc1b89"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "1730ac5ba9c4974123df9945e5b4e4ab"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "beb6c927ad297e5f9692e6742807c6d1"
  },
  {
    "url": "docs/devops/docker/index.html",
    "revision": "60b64108e3e27547f90d322c93a990f0"
  },
  {
    "url": "docs/devops/docker/install.html",
    "revision": "66a02e6ac42210e694b8320733a59f95"
  },
  {
    "url": "docs/devops/gitlab/index.html",
    "revision": "8ad73dd3b1ed0df92aa5466dd75b6460"
  },
  {
    "url": "docs/devops/gitlab/install.html",
    "revision": "fcbacdc3bc3beca87020f8966e1ab86f"
  },
  {
    "url": "docs/devops/nginx/index.html",
    "revision": "c469604a410b4a5212dd2d7b8bdd1a00"
  },
  {
    "url": "docs/devops/nginx/nginxcache.html",
    "revision": "0f46061a182685725c62bc87ccf03490"
  },
  {
    "url": "docs/devops/nginx/nginxgzip.html",
    "revision": "1341d6a07196bc51a772316f0c958864"
  },
  {
    "url": "docs/devops/nginx/nginxinstall.html",
    "revision": "040b1e105dd6bb3b0f7973c95055ef65"
  },
  {
    "url": "docs/devops/nginx/nginxlocation.html",
    "revision": "502d66ae54cb7222f9c7e6a152e7bdda"
  },
  {
    "url": "docs/devops/nginx/nginxlog.html",
    "revision": "96dd205a27f7417ce7e6fc4ce45363eb"
  },
  {
    "url": "docs/devops/redis/index.html",
    "revision": "ea89cf2d6b76a1b0919cd81c6f4474ae"
  },
  {
    "url": "docs/devops/redis/install.html",
    "revision": "27f3922d510272a47bd1b9e7a1ad33b8"
  },
  {
    "url": "docs/index.html",
    "revision": "3201fc318c45ab557f150a0e9fd57ebf"
  },
  {
    "url": "docs/java/index.html",
    "revision": "87c03c91fd4c8e36f89fb504ae027ea7"
  },
  {
    "url": "docs/linux/basecommand.html",
    "revision": "24579691d09aa2b8560ab9671bf69efd"
  },
  {
    "url": "docs/linux/index.html",
    "revision": "0f9ecc875cca2f13ac0ce421226bed2d"
  },
  {
    "url": "docs/mysql/index.html",
    "revision": "f3b139e9e9c313b5dcef8724c8e4bcbc"
  },
  {
    "url": "docs/mysql/mysqlinstall.html",
    "revision": "d4cee9480c058a86fb2005c418a1f469"
  },
  {
    "url": "docs/node/index.html",
    "revision": "2cc8a0c57b7353b6fc15a8856984d782"
  },
  {
    "url": "docs/node/nohup.html",
    "revision": "a0fd7ad400cdc36d169434f819d2e9b1"
  },
  {
    "url": "docs/node/pm2.html",
    "revision": "dc9b3ca885da0062102879c1914857c1"
  },
  {
    "url": "docs/node/tools.html",
    "revision": "ea8324d76570d24cee0bff47799b4ca1"
  },
  {
    "url": "docs/nuxt/index.html",
    "revision": "eb586bc3933ca462c7c2b1689f4399e6"
  },
  {
    "url": "docs/nuxt/nuxtdeploy.html",
    "revision": "02fc6132ee396c14bd62a1ee1ea0e278"
  },
  {
    "url": "docs/nuxt/nuxtinfo.html",
    "revision": "a8d68bf6f737f955080570e1195f167b"
  },
  {
    "url": "docs/others/about.html",
    "revision": "868eb247177e0de42c8879938148df91"
  },
  {
    "url": "docs/others/blog.html",
    "revision": "e26831f1e03f1811e4a51462de2f7378"
  },
  {
    "url": "docs/others/firends.html",
    "revision": "9bf2bee52822599e14d7517262f7fd90"
  },
  {
    "url": "docs/others/other/20220302.html",
    "revision": "77750a16a7c8c1d3eed4b92c3b2dd5da"
  },
  {
    "url": "docs/others/other/20220622.html",
    "revision": "9f55d864847e032a8a7913d3e4583fd8"
  },
  {
    "url": "docs/others/other/20220623.html",
    "revision": "5a872053fe799c7fc2da624112e246d0"
  },
  {
    "url": "docs/others/other/index.html",
    "revision": "495f584aa0e04512fef5bd7007b9adc7"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "ad68186f73a49d68000baf94b21fa09c"
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
    "revision": "7f1abc20ce1fe080de91eeaf2267d2be"
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
    "revision": "1cc0bda03819a8265c0cb2124b7dc249"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "e6ccdecdad9e3662443aa95b661f07be"
  },
  {
    "url": "tag/index.html",
    "revision": "f7f6308b5413f5d258c68b18e16c4403"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "184f21d073efd7010dfb1915fa254298"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "fc0530e932f93dd7fffadb51c4525535"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3f9942e3c9721be4681160620d19eb15"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "9a7930b8a4063addfff616527addb09c"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "6cd8b961e559f19fa4a56b543bb671f6"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "f05b9dbcdafea8257a1ddf26bbd67e11"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "c2874e4d3c65f844580e28d680ed6e9b"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "aa773c62f7917cb7598883caa19e0d91"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "0c174dd2c1c3248b676ad4cb34c4e521"
  },
  {
    "url": "timeline/index.html",
    "revision": "c786cceebb3e82f168290ed969236a71"
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
