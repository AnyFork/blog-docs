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
    "revision": "525184fdab474aab001e2650bec48129"
  },
  {
    "url": "assets/css/0.styles.1bd76b84.css",
    "revision": "eb2add9f9c5349eef1ee641db27cb951"
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
    "url": "assets/js/1.d6ce6357.js",
    "revision": "4c5e6f3607a610dc66000e88c10fc2db"
  },
  {
    "url": "assets/js/10.dd0433a6.js",
    "revision": "bae2878a66d2dcd8f06447b45d1bf0d2"
  },
  {
    "url": "assets/js/11.180551c0.js",
    "revision": "3306697fe56daf2eb9b422a284029553"
  },
  {
    "url": "assets/js/12.7e6aaff7.js",
    "revision": "23feff70c77f452407a7a0919ed23d16"
  },
  {
    "url": "assets/js/13.ceb467e8.js",
    "revision": "5f06a95e1891596424bf573751397df8"
  },
  {
    "url": "assets/js/14.6168bedf.js",
    "revision": "5964df90c1a76f75c2d692c68c8764a6"
  },
  {
    "url": "assets/js/15.861007ca.js",
    "revision": "0c4c2baeff5326c0dc28b3cf10f2d7ef"
  },
  {
    "url": "assets/js/16.adddbca9.js",
    "revision": "f9a54f5445b8cc590e72c5a21946baba"
  },
  {
    "url": "assets/js/17.0536d5e3.js",
    "revision": "491bd0ca1d4b7026fe7a2c9d1ad6877d"
  },
  {
    "url": "assets/js/18.f4968b78.js",
    "revision": "4a38fdc4958dfd25b164868cba729bfb"
  },
  {
    "url": "assets/js/19.71e11142.js",
    "revision": "ffc3237abf3c6ba46ed8ea03c5c36eaf"
  },
  {
    "url": "assets/js/2.f9c16802.js",
    "revision": "eb34cc1f8eba36ddb56ff8f10883533d"
  },
  {
    "url": "assets/js/20.80508830.js",
    "revision": "a2f5bbbf797bd6a1d88f3879dd2e5431"
  },
  {
    "url": "assets/js/21.e80b454a.js",
    "revision": "dc9e06c8aaddad524aa22a0e5fbc5f4e"
  },
  {
    "url": "assets/js/22.b7bbbecc.js",
    "revision": "c58226c6b77d50aca9eafa595982999b"
  },
  {
    "url": "assets/js/23.6ecf0a8e.js",
    "revision": "f3465dcfd09f8afdb1397f646f959ffc"
  },
  {
    "url": "assets/js/24.d5573f41.js",
    "revision": "3864790170f8a8face4f936a4116e6b3"
  },
  {
    "url": "assets/js/25.6f67a127.js",
    "revision": "c87392420dc7fc04c231d91914ca63f8"
  },
  {
    "url": "assets/js/26.36237307.js",
    "revision": "1ebe825fca2bf541e9867117d44be68a"
  },
  {
    "url": "assets/js/27.98ce0797.js",
    "revision": "69480b7964444a55f977bcdb10bda5e6"
  },
  {
    "url": "assets/js/28.b645deee.js",
    "revision": "94c8f27a82b175e5dfc37cad78fd1b18"
  },
  {
    "url": "assets/js/29.48070f9c.js",
    "revision": "66e9eb4b41feed3cb813d4ebbf738f7a"
  },
  {
    "url": "assets/js/30.f3dbdf2b.js",
    "revision": "7bc89d6decdd6d55ba992b973deb3369"
  },
  {
    "url": "assets/js/31.b2109287.js",
    "revision": "804d068bd48589fb819b4be6c7a9f228"
  },
  {
    "url": "assets/js/32.b2c36e24.js",
    "revision": "cf29193ce88a7298cae45d6e09ffdc1b"
  },
  {
    "url": "assets/js/33.bd0f58e0.js",
    "revision": "ebc05e444c41241f63c7f6932cf16ba5"
  },
  {
    "url": "assets/js/34.0092a59b.js",
    "revision": "3f604f0808b61bab43c2ffae7df190cf"
  },
  {
    "url": "assets/js/35.4367654f.js",
    "revision": "2cde0d898da6e3fdb2c1ddf1e8aca816"
  },
  {
    "url": "assets/js/36.a2d9cf2e.js",
    "revision": "fc391b8ea086e9fb8443baeaa3b9a0b6"
  },
  {
    "url": "assets/js/37.4c4b7c3a.js",
    "revision": "ced013ec19ca153fbc891f3631019cd2"
  },
  {
    "url": "assets/js/38.150f599d.js",
    "revision": "2c12f6c017a6379a2fb0663ac2ee69f0"
  },
  {
    "url": "assets/js/39.b0ae99ab.js",
    "revision": "b0f456fa83d55a2b471e0c5f760553a2"
  },
  {
    "url": "assets/js/4.d9fec408.js",
    "revision": "84bb9e3906ee9ec430f1cc7d1bda784e"
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
    "url": "assets/js/5.62d51222.js",
    "revision": "b649ab237ec74f46f225d703d8f2a82b"
  },
  {
    "url": "assets/js/6.76d743cb.js",
    "revision": "3080e59040952cadfc005e2e4f8f8215"
  },
  {
    "url": "assets/js/7.794cb8ce.js",
    "revision": "df0f9127225b7bf3e5ff1f12a3233071"
  },
  {
    "url": "assets/js/8.4dd1c88e.js",
    "revision": "ceea9e99740f26262775513a94d872e4"
  },
  {
    "url": "assets/js/9.60cbec96.js",
    "revision": "7bf7f161379faf87030f4527d294ce50"
  },
  {
    "url": "assets/js/app.866cef36.js",
    "revision": "e428170b364d576c679c3b04492341f8"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5b25a9fe468ab0880249d43ce868eb7b"
  },
  {
    "url": "categories/index.html",
    "revision": "fdebbb0a6d53da752fe1a520afdad62e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "76a3de846b7898ec47305ef5b194ac90"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "cbbf1d2cc312e53f16b65e095f96ea0a"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "7a420875c702790cb4e5b99cda94dc8a"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "89421c905f63d00d8aaa7e051df1d1ed"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8075a2afd4dc41a34d600069fee6054c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d591cb6d75b1acee52d24debb78ab178"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "021fb19ded20128a5ac17e9553e124fd"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "e3bde0a6c1a0700f4df8242fcb4f7fb9"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "b327858bb9a76906af5f2502e460f41a"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "4f6dbce090e41bb15c7c2ba82b429488"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "ec120daef0fa047c465003305068f369"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "3d75b3bbb15c12cf81d9c87ec1f167f5"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "b85628271400c65bdb3cbf20d5f5d49e"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "c8008f01f2be8e56271e2c6de8446aba"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "8906f9d2bae5626e4d4cbe406b019503"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "af80926289cc535e5279ff2a3d40c609"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "df7800751533f43db79a1c3bc773a5bc"
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
    "revision": "ba68ee924fb64b114da70b87d28b956c"
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
    "revision": "34d29620f417099b7ec8526a56629533"
  },
  {
    "url": "linux/nohup.html",
    "revision": "7819701ffb0881b6b3ca83cd872a5e52"
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
    "revision": "565aba797e9f53bd6a6e9b1ec6698841"
  },
  {
    "url": "node/index.html",
    "revision": "a12e5533f6ca8761e268341acf2e128f"
  },
  {
    "url": "node/pm2.html",
    "revision": "6b6dff78f7c9f56055631352a2d92efb"
  },
  {
    "url": "node/tools.html",
    "revision": "f3195960894ea48a08ac8926c10d0bdc"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "ae859caac5978bae55180b121472ad96"
  },
  {
    "url": "nuxt/index.html",
    "revision": "3074745238f7a801d6efc9dc89d98a43"
  },
  {
    "url": "others/20220302.html",
    "revision": "04d522e1bf8b3a600b343ac7b2a3596e"
  },
  {
    "url": "others/20220622.html",
    "revision": "2581dc74a56819181a2a4a1b1e5d25ac"
  },
  {
    "url": "others/20220623.html",
    "revision": "b5aa41f3419b5cdfa4118f3138eeb9ce"
  },
  {
    "url": "others/algolia.html",
    "revision": "9697d494ca82cf329ea6f96c95252a03"
  },
  {
    "url": "others/blog.html",
    "revision": "305fe4ef71500ef027f2016ea589feca"
  },
  {
    "url": "others/deploy.html",
    "revision": "29b9641b3ddaf11955d0c1db3d3ade60"
  },
  {
    "url": "others/firends.html",
    "revision": "f5ab7588e3585893cfd7210282c295ba"
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
    "url": "tag/Algolia/index.html",
    "revision": "a244a455b882a87b0bf4a1b33ab49ca0"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "5d3064ef4205939ed4eea3b094c29328"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "52a6b74b688c03ed355ee19613bd83d8"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "3849111ab3b6f0b7bddb017d3dab7708"
  },
  {
    "url": "tag/index.html",
    "revision": "5ef17f737ce6dfdb63533dba1955412b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "60b2a25572131d7bbd5a3ea0ee4a26c7"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "86890f6b80cfb51a012a7a2d0c537f7e"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "b40e9f73a8c74d4faceffcbe021fccda"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "11285db155514a3b668f154f1797deeb"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "569d03535ca0fece8359da6e33b3b269"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "15c064ad076b153ec7cf3d32e7ab9012"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "fe65d9e7ec4f946fcb4917de794317f4"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "a27a0a6fd66fe1a6cb4aab4a7841c548"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "1a81fcbb84969d6b38a695f020c715e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f7b815542d2c5dcbd1a5a9657ec6410"
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
