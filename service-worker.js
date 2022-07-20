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
    "revision": "47fd37d6378ccfb105c1eeb2e9a5f719"
  },
  {
    "url": "assets/css/0.styles.7c6d53f7.css",
    "revision": "e42c033245797d88364b1f793794e9d8"
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
    "url": "assets/img/bg2.d5bdc1d8.jpg",
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
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
    "url": "assets/img/bg5.eac41ddc.jpg",
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "assets/img/bg6.b1b9e5a8.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
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
    "url": "assets/js/1.f386542a.js",
    "revision": "2b8b5824ea10a62a76d4bf050d8bee52"
  },
  {
    "url": "assets/js/10.b13faa4e.js",
    "revision": "683b712c61d10050ab3a5f5d03659976"
  },
  {
    "url": "assets/js/11.bed0df6d.js",
    "revision": "15e43f9e45b8c16727d46deb99abb14a"
  },
  {
    "url": "assets/js/12.64c00073.js",
    "revision": "f6c8faa5ec559a6e61082a2fce03fe38"
  },
  {
    "url": "assets/js/13.6b77c6b8.js",
    "revision": "546cd987ea707dbf949096763057c944"
  },
  {
    "url": "assets/js/14.cf714e58.js",
    "revision": "59bc7cefcf42bd2922a8406b8d822f10"
  },
  {
    "url": "assets/js/15.f50699c5.js",
    "revision": "a5c8955eccb11262553f66ffa8e7bae8"
  },
  {
    "url": "assets/js/16.33fdbb0d.js",
    "revision": "b29d7ce7a672570fd96e0bbf40eee0a5"
  },
  {
    "url": "assets/js/17.d5e63dc7.js",
    "revision": "7f20633e52c1f573815799158721e07e"
  },
  {
    "url": "assets/js/18.de5a8e42.js",
    "revision": "d617b47dc7d9d56c643ac186d52b866f"
  },
  {
    "url": "assets/js/19.af5a7653.js",
    "revision": "04a178c671ad06c4f3fdce46ef54da49"
  },
  {
    "url": "assets/js/2.f9c16802.js",
    "revision": "eb34cc1f8eba36ddb56ff8f10883533d"
  },
  {
    "url": "assets/js/20.3e26f25e.js",
    "revision": "5464d708516ae0596a352773367631bf"
  },
  {
    "url": "assets/js/21.388f36c5.js",
    "revision": "a59d917ba9fef5d8b2bc854b5e4702e5"
  },
  {
    "url": "assets/js/22.ded540d2.js",
    "revision": "afdda3d758857d48abfaea09f5886a97"
  },
  {
    "url": "assets/js/23.5b7cd344.js",
    "revision": "c4760b85908a5ed5485044645b8c1cd3"
  },
  {
    "url": "assets/js/24.c906e4bb.js",
    "revision": "a98e0e7face91e5fdd2524058b1dfc23"
  },
  {
    "url": "assets/js/25.25e6b1b6.js",
    "revision": "89074c2deac5134a6ab1243e200631db"
  },
  {
    "url": "assets/js/26.f8cb1348.js",
    "revision": "84c7643737765c077d938c3741475950"
  },
  {
    "url": "assets/js/27.55b8b851.js",
    "revision": "18dcb01d93520113574a0451ed35d792"
  },
  {
    "url": "assets/js/28.f00ff99e.js",
    "revision": "548da98fe33a90ec9947636eeb28f886"
  },
  {
    "url": "assets/js/29.3111a6ab.js",
    "revision": "9d972ebb12a1915d97ffc1a1fa10ebd2"
  },
  {
    "url": "assets/js/30.6e4d22c8.js",
    "revision": "e73ef5093ec10ec770e83202e8d582a4"
  },
  {
    "url": "assets/js/31.46843a72.js",
    "revision": "9220475482c627facce7dc7d1ca9b146"
  },
  {
    "url": "assets/js/32.00683e1c.js",
    "revision": "c038aab306d90dba570a7625b0db82ef"
  },
  {
    "url": "assets/js/33.7f8e9403.js",
    "revision": "2a4242e97c49b6facb0b29b9331236e0"
  },
  {
    "url": "assets/js/34.db42ef86.js",
    "revision": "77f8a89950ab3c994397dc5beea7c1c0"
  },
  {
    "url": "assets/js/35.f0a44184.js",
    "revision": "47dcef04fa22edccbbedb7a51e297551"
  },
  {
    "url": "assets/js/36.808f0ca2.js",
    "revision": "62a9845f7ca7f1be640af867b28268b9"
  },
  {
    "url": "assets/js/37.70943536.js",
    "revision": "fa8bc338356cd9bb443e62c7898ed3de"
  },
  {
    "url": "assets/js/38.849177e6.js",
    "revision": "04ff9064a5adc3e90b90b7eda35a1082"
  },
  {
    "url": "assets/js/39.b0ae99ab.js",
    "revision": "b0f456fa83d55a2b471e0c5f760553a2"
  },
  {
    "url": "assets/js/40.41f76cfb.js",
    "revision": "b0da005afec638e3ac9decd5dd007d11"
  },
  {
    "url": "assets/js/41.ecc56475.js",
    "revision": "d1426bf628759c5e2837b09f11320e31"
  },
  {
    "url": "assets/js/5.52b02547.js",
    "revision": "6fb6ee1e5f555b29420d162aa7666289"
  },
  {
    "url": "assets/js/6.cf23ddec.js",
    "revision": "9cdc10011756dcdbd254d761c1138980"
  },
  {
    "url": "assets/js/7.fd06a3ef.js",
    "revision": "33cccd85fed99d41a14ad36bdfd19916"
  },
  {
    "url": "assets/js/8.7fe43e0c.js",
    "revision": "6dfcab72f0bf194bd15b8346caa89fee"
  },
  {
    "url": "assets/js/9.ad007d8a.js",
    "revision": "401533f488bfaa113b32da630154b3c8"
  },
  {
    "url": "assets/js/app.83fb4cfb.js",
    "revision": "92f1eec855bb6c6cda0a791e89bdf816"
  },
  {
    "url": "assets/js/vendors~docsearch.fe1299d7.js",
    "revision": "24e1a45a033d7862a91a9d688e142335"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "adb6beae733f10ff88cad40890ab3176"
  },
  {
    "url": "categories/index.html",
    "revision": "0ddc85b4c66071b678305dade3d8ee1c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7d1be062ad268fb6cfa6683b4a9bc4b7"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "d9c28f666298bdc3931842ea5ec7700a"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "d08496fb870216c1cc80241b80004fa4"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "3c6ca358a5fe14c72dfcc2fa3ba137ad"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "95432db21303f9b177b86e3374cca8be"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "35f340c9b3b390386524bd3f9d4e8338"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "27993bef884d69c5462c267576f788d7"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "a6fee25a1fec505482b96ea8f30b06dd"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "8f8285abe5a6153ebde889ea91c0892b"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "69b10d2ff4d2cba06fec1f0a736f4a43"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "93fc18b0a7c6819226db0c0a46929515"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "4b92931d9547bd6b7d0a2fe96f44bfd6"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "802c43e07e290c924ee91ba75a774831"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "0782555372b40805d33dfa5786b4e85b"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "46126ab81416b5ed32612d8b06a44675"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "828766745f0719377c0e9358161f6b1f"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "04423a0ad9ad9be2ca262b69d55f9af3"
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
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
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
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "images/index/bg6.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
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
    "revision": "857b7771a6bd6422c87c3b5933760950"
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
    "url": "linux/command.html",
    "revision": "c2808bef4abc4a5fbe5934ba666ec820"
  },
  {
    "url": "linux/nohup.html",
    "revision": "5ba7c4d1774343e70d4afcbc1917c2d6"
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
    "url": "mysql/install.html",
    "revision": "28b9819a44ac74a7e4640be6e00b1162"
  },
  {
    "url": "node/index.html",
    "revision": "e819d0f768ac3dac6c091e8f59e7ff7e"
  },
  {
    "url": "node/pm2.html",
    "revision": "fcfee3a598c03c1be59adedc58f0cc70"
  },
  {
    "url": "node/tools.html",
    "revision": "c9d18875c496019ab3a6971dff07d5cd"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "b3701dc4eed61823d75e4508ee54f8c5"
  },
  {
    "url": "nuxt/index.html",
    "revision": "1c3e351a69e18ed8b7389e1a9960dede"
  },
  {
    "url": "others/20220302.html",
    "revision": "aea1f753083f5310b055d114f711ea00"
  },
  {
    "url": "others/20220622.html",
    "revision": "fa9a2e93caed65c13b1a3da75349b333"
  },
  {
    "url": "others/20220623.html",
    "revision": "214fecbd0fa110f4e7036f69cc94de5c"
  },
  {
    "url": "others/blog.html",
    "revision": "364229b864572bd845606203e6cf04a7"
  },
  {
    "url": "others/deploy.html",
    "revision": "b4509aafe27d1e9165bc2d59a69ed856"
  },
  {
    "url": "others/firends.html",
    "revision": "26e89ef5d1928e030737b891a513d05a"
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
    "revision": "95fdabce8833ee821abc708b850026a7"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "f651b997fc1dd69a46670cf7a765cc51"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "c8855a10b86299fae09a86c09395017b"
  },
  {
    "url": "tag/index.html",
    "revision": "ba19f8f2a9b6f02efb1458be88206d29"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f4ad425f13651c4e827f4da8452ce86d"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "3578cbd75b8311e611498f107de31db4"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "a4615d6e60bc00976c4691bf5885fd0c"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "8f9e3e1d9fad37126c50a9c75fabe445"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "e238127ea51388f4ab03c82e4c28422a"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "efb7e312ae9072d6cf880e0dda84b67c"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "f63b156b28624903a52bb1024977dd5d"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "da9b5416050f0e0dd1ea0ea10da1c8ca"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "87110c2e866b55992cc75007df0250b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d91c68062ed70e8c44d5b456d12e52f"
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
