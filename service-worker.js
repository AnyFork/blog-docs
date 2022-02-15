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
    "revision": "76474fd556398ee1393b34a63cf8fc3d"
  },
  {
    "url": "assets/css/0.styles.d3925d3d.css",
    "revision": "081a55233eb8b427ae886f2cf39647b7"
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
    "url": "assets/js/1.d0d23016.js",
    "revision": "3db07fee72deb3e0bdb2b17e43f35244"
  },
  {
    "url": "assets/js/10.41f070fc.js",
    "revision": "1b98bc3bf4e7bd2abec5bc8c600bdd17"
  },
  {
    "url": "assets/js/11.16a34a79.js",
    "revision": "559a1f9364e3d2d20a7c0da20c10ebb0"
  },
  {
    "url": "assets/js/12.95d0cfa6.js",
    "revision": "eba4590deb77e9853498a8318e665ee5"
  },
  {
    "url": "assets/js/13.f21f79dc.js",
    "revision": "aa34a71ea4f93d769362e48082d0c952"
  },
  {
    "url": "assets/js/14.b41689df.js",
    "revision": "41008de72889ce98f949d5cbb911ea41"
  },
  {
    "url": "assets/js/15.2c4c3ee5.js",
    "revision": "8eecbf95b3cbb8e1d10098ee1a7558d1"
  },
  {
    "url": "assets/js/16.91f222ff.js",
    "revision": "3c62ff58302841111e58efe139202cbd"
  },
  {
    "url": "assets/js/17.ffce9e88.js",
    "revision": "c5115fe9a9fc98a3958ecc8c52385218"
  },
  {
    "url": "assets/js/18.75d75f3a.js",
    "revision": "4f110c5ddcbbd3fdd9f91ccf755ba444"
  },
  {
    "url": "assets/js/19.d94094a2.js",
    "revision": "5db6b4f2f14cf2b9f4294fc3baa10e39"
  },
  {
    "url": "assets/js/20.e93a7ed1.js",
    "revision": "490e3a28a817ee98f077a4be3a247eda"
  },
  {
    "url": "assets/js/21.0eff105e.js",
    "revision": "984fa1622b2c3eff66c2865e837d6d38"
  },
  {
    "url": "assets/js/22.569876b4.js",
    "revision": "98ba3dc4c2f699196a0f99c71cec4509"
  },
  {
    "url": "assets/js/23.f23fb003.js",
    "revision": "bf1dcc9f790d8e4779259db8cdd147d9"
  },
  {
    "url": "assets/js/24.08d58fbd.js",
    "revision": "92e88153ae85e53da1edaf080235fd15"
  },
  {
    "url": "assets/js/25.70c28762.js",
    "revision": "b8b1e52dde83206a466a1ae378686886"
  },
  {
    "url": "assets/js/26.67181995.js",
    "revision": "6b4082f6179ee863121fd1f130c79bc9"
  },
  {
    "url": "assets/js/27.c4dc81ce.js",
    "revision": "272e84e544bd5a0c99db308ac9e4df8b"
  },
  {
    "url": "assets/js/28.f36f6c3d.js",
    "revision": "0c664416c74e22e876e702a8def8f6f4"
  },
  {
    "url": "assets/js/29.17d500de.js",
    "revision": "d8c31ad7a99d485e7fbd6064e01846f0"
  },
  {
    "url": "assets/js/3.a84a5ca1.js",
    "revision": "81cb3108b5e87243d35193beb82523b2"
  },
  {
    "url": "assets/js/30.91fecf69.js",
    "revision": "a0b848837bf3da0b267d4f1214e1631e"
  },
  {
    "url": "assets/js/31.67fb2ae5.js",
    "revision": "d6ef9aa8c25a827e662af76c28ec84a7"
  },
  {
    "url": "assets/js/32.459f17cc.js",
    "revision": "93f94959df5f41f972383d94fceb4196"
  },
  {
    "url": "assets/js/33.28c825fd.js",
    "revision": "eb10e5758663557a4e78049fcc8640cd"
  },
  {
    "url": "assets/js/34.5743a173.js",
    "revision": "6c07d3ae46b5a8e5dd6b33f57a66e0d8"
  },
  {
    "url": "assets/js/35.84d96317.js",
    "revision": "2d2f08ba28b667eb6be0e4e0a1c2b11e"
  },
  {
    "url": "assets/js/4.5c48510f.js",
    "revision": "268504e878e1d37fd22fa4063de54ef8"
  },
  {
    "url": "assets/js/5.a223d0cc.js",
    "revision": "27a83bd5138457310f51a7fc63d6e3b2"
  },
  {
    "url": "assets/js/6.3f78f7e6.js",
    "revision": "11ac37eed894a1f39e956fab855667d1"
  },
  {
    "url": "assets/js/7.b6c7abd2.js",
    "revision": "459f3336ffd486da7391f8c3c6010de0"
  },
  {
    "url": "assets/js/8.6d78f23a.js",
    "revision": "ecea16d7b9122e46bb9d5b0d0b61f31c"
  },
  {
    "url": "assets/js/9.431b32f5.js",
    "revision": "e1e0a2bd2eb08196935c5fb90b8e0bf2"
  },
  {
    "url": "assets/js/app.3ebcfdf2.js",
    "revision": "44496e191c40ed7f6762821c67d6211e"
  },
  {
    "url": "categories/index.html",
    "revision": "e67c3afca9d2f928994cc4542da5f1a4"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "cc8a8d17bade4b5372e2bca37c6a5a63"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "48cbfb0f8601a2f8bc92d626ced94968"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "8ff4c68ba3d08b123e74b824aa8a11ba"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "357e6fc44ad87a46c6e4d46725b8fda9"
  },
  {
    "url": "devOps/index.html",
    "revision": "6318f79bdd01b52f5830a6a97e5ce5e4"
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
    "url": "images/markdown/blog.png",
    "revision": "8308ecbc3c519d59ef14b8e17424e513"
  },
  {
    "url": "images/markdown/build.png",
    "revision": "567d571332117b1970964ba5325e1112"
  },
  {
    "url": "images/markdown/start.png",
    "revision": "4fdb98e73ee36e40d46334f905d3eb00"
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
    "revision": "fbd74ab6092201246ca953c85f8b4013"
  },
  {
    "url": "java/index.html",
    "revision": "531ad537224067e40d76942443ff0341"
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
    "revision": "39e0be5c3b33b4531157fdbb312fc436"
  },
  {
    "url": "others/2022/index.html",
    "revision": "ceabe9d90134c43f055cef26248543dc"
  },
  {
    "url": "others/about.html",
    "revision": "506c124dbd0237ef8db954e518716f8b"
  },
  {
    "url": "others/firends.html",
    "revision": "0d85fc9a42c9945f5ffe85754a5282f5"
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
    "url": "tag/index.html",
    "revision": "8657d70d84bab7b60a6f3fb36596b844"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "681b608108484799f42d471241090bf4"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "0208af463ccc3939855485ce0e31c117"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "0e5d0cc5f6f3c2be05f6c5541793f185"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "20727fa355d5ec9a696cf848122daf8e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ea73e1997001cccfdb19a23d627c64e0"
  },
  {
    "url": "vue/index.html",
    "revision": "9676c772b636ba841374b15d4745ec0e"
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
