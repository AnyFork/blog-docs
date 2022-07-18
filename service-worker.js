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
    "revision": "41cb4b4ce569e265e8ab6446911124da"
  },
  {
    "url": "assets/css/0.styles.7a4bbea1.css",
    "revision": "18e7fd18c5a6495f2128a13be4ba5428"
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
    "url": "assets/js/1.1e55e400.js",
    "revision": "60c85b8fcb6f754d98469a5bb1b18de4"
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
    "url": "assets/js/5.2cdd32b7.js",
    "revision": "6f347794653c25e70027dc6f2d632105"
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
    "url": "assets/js/6.c31373e5.js",
    "revision": "8374dd1a007c6f74ecd5778b96de8a48"
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
    "url": "assets/js/app.8d782e31.js",
    "revision": "41b87efe3b77f8958f153a54787633c6"
  },
  {
    "url": "assets/js/vendors~docsearch.91fedccd.js",
    "revision": "b2c7003147f1a877e29ca64a3723a955"
  },
  {
    "url": "categories/index.html",
    "revision": "265265c4f001553142173e8ead0344cd"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "adeafa33af1df494236ae7d4619ab76c"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "48b30a378f7559b2ab30fe6841fb1db5"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "60100ccc89179deb2e0c070fabb20c84"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "d6f27df0d96439c784dde1608fe4d83e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "004296d589c3864c27b8e66ada51c258"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "9d3e04b321e52d0957417e7ecdb3178b"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "0b6c6f2507a7f46f43b8ae8e706f843f"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "a041e76645ca4844d8a1a25212ead98d"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "f6e15862484552dc5c31951c5bc76822"
  },
  {
    "url": "docs/devops/docker/index.html",
    "revision": "028f83932826c5a74c3d2f6ef76acacb"
  },
  {
    "url": "docs/devops/docker/install.html",
    "revision": "12b36d9557a10e51b68b8deeb7bdc80a"
  },
  {
    "url": "docs/devops/gitlab/index.html",
    "revision": "96dd2a315f067f21b6c077b2118611d4"
  },
  {
    "url": "docs/devops/gitlab/install.html",
    "revision": "9df229b7e15b634509baac248b1124e9"
  },
  {
    "url": "docs/devops/nginx/index.html",
    "revision": "a674f62689eda09492fbc7d0c07deabf"
  },
  {
    "url": "docs/devops/nginx/nginxcache.html",
    "revision": "7ff2f939cb3feb4c394e4825c0b66c14"
  },
  {
    "url": "docs/devops/nginx/nginxgzip.html",
    "revision": "1c02feea818ca5be75cad59553ed096e"
  },
  {
    "url": "docs/devops/nginx/nginxinstall.html",
    "revision": "dc263cb4b7215e62799d5c60b1b3bbf7"
  },
  {
    "url": "docs/devops/nginx/nginxlocation.html",
    "revision": "d04ac1ca7f582bcb2d705a14a0d2e92b"
  },
  {
    "url": "docs/devops/nginx/nginxlog.html",
    "revision": "5ee424913ffe964fdb5cf839bb7af183"
  },
  {
    "url": "docs/devops/redis/index.html",
    "revision": "477707869001ba8dc0b7fd9c7a7751b4"
  },
  {
    "url": "docs/devops/redis/install.html",
    "revision": "9dfd700c9500999d772e9939e36e5e6f"
  },
  {
    "url": "docs/index.html",
    "revision": "526874f42bf63526f346e19a15d7f7f3"
  },
  {
    "url": "docs/java/index.html",
    "revision": "76d6da619afd560c8942cc214ea897f1"
  },
  {
    "url": "docs/linux/basecommand.html",
    "revision": "14af245a20ca063715588e69fe1ebc17"
  },
  {
    "url": "docs/linux/index.html",
    "revision": "4cc75895ea314398ca4971bba687bbb2"
  },
  {
    "url": "docs/mysql/index.html",
    "revision": "3167e65c8d58bd1533e049ad0340d766"
  },
  {
    "url": "docs/mysql/mysqlinstall.html",
    "revision": "49ca08d45fa5705e8bd9b156fda34e35"
  },
  {
    "url": "docs/node/index.html",
    "revision": "c30efe522d1b945e05d7f6ea6723bf0b"
  },
  {
    "url": "docs/node/nohup.html",
    "revision": "9ccba7945b694c929801d900520b18e7"
  },
  {
    "url": "docs/node/pm2.html",
    "revision": "dbdbacc7617f9870be6fdeda4aeabd3b"
  },
  {
    "url": "docs/node/tools.html",
    "revision": "482d6de3b9a5b6a26ea37a1723008dc9"
  },
  {
    "url": "docs/nuxt/index.html",
    "revision": "5155a3a0b08477a4ff82abed17a67617"
  },
  {
    "url": "docs/nuxt/nuxtdeploy.html",
    "revision": "de9f4ead7f6d23408cd7266d6fbc6a70"
  },
  {
    "url": "docs/nuxt/nuxtinfo.html",
    "revision": "528189163d50fff42c073d6c31d96bfe"
  },
  {
    "url": "docs/others/about.html",
    "revision": "1c30e8e180d257a3dc90800dce193908"
  },
  {
    "url": "docs/others/blog.html",
    "revision": "46ed0a359ef9d9d166a163582d2b5918"
  },
  {
    "url": "docs/others/firends.html",
    "revision": "c7c722f30a254f0d70267b3b77800e6c"
  },
  {
    "url": "docs/others/other/20220302.html",
    "revision": "6675486adb1b93b0971ba27fe25321f1"
  },
  {
    "url": "docs/others/other/20220622.html",
    "revision": "4214355cc18866b67e9b7f7bc0abe63f"
  },
  {
    "url": "docs/others/other/20220623.html",
    "revision": "adb650bf1bd5f3e571004b4255880020"
  },
  {
    "url": "docs/others/other/index.html",
    "revision": "a31968dac40fc55ff971d539b0c17c46"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "5cca9bef41b6399e8fe3d2bca9921adc"
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
    "revision": "7387afa885527399ece150a49f1997aa"
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
    "revision": "fd5c026032970939cfc5f18f69828d92"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "4cdf8583c50d1ca45f3f3e4757f885eb"
  },
  {
    "url": "tag/index.html",
    "revision": "7a34406674f520b5611c4c54a1ce2fb6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a8bd24c49b25c5de5e0bb99ed13ec783"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "4989bf5683c67b80479d9779cc8ec68d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "1cc1b6f72470979794c3bb5c2fc0005a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "088d5c778ed6692b9f264b0ea580f8aa"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "caf85a364d356fdadca14cd805ec8def"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "7e81c14900b188f985c35d0518bf99ab"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "297dcd1fba155cf1e71c5988d9881996"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e65bd08e36d22d46a65bd50d30acc164"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "8dd50c559df322f2ff296059c9cd6c7e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab69947500ec0d5aca8a0d5e5819e598"
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
