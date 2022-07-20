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
    "revision": "e3a7736efc62b5671b08e416a0eb23c6"
  },
  {
    "url": "assets/css/0.styles.4f2125f7.css",
    "revision": "608071a05da44967858ec4b61072d082"
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
    "url": "assets/js/13.b679a76c.js",
    "revision": "b401991bccac0ae303edc6dbbcb0a9d3"
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
    "url": "assets/js/36.c75a3900.js",
    "revision": "c9be7bb2f35a2769ed9ee2da1bbd1da3"
  },
  {
    "url": "assets/js/37.15d26ce3.js",
    "revision": "960e9d0cb86bd39fcb448f7f940ce4ad"
  },
  {
    "url": "assets/js/38.b414c2ff.js",
    "revision": "53fdf8c664ad92d2029688a4119af4b7"
  },
  {
    "url": "assets/js/39.2807b780.js",
    "revision": "1d65bee691db449513ea2a63f33da204"
  },
  {
    "url": "assets/js/40.c3af122d.js",
    "revision": "4979d78ce2b43cf3891c5ec798b658c6"
  },
  {
    "url": "assets/js/5.42eb11fc.js",
    "revision": "e53155ad3ebff2ed44f7b8590cbae578"
  },
  {
    "url": "assets/js/6.a60fe986.js",
    "revision": "9a131a3a0849c38d395159ee1e10e6f0"
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
    "url": "assets/js/app.2a7fd211.js",
    "revision": "e3d6c272e22a8efebc603b303eee7ca6"
  },
  {
    "url": "assets/js/vendors~docsearch.fe1299d7.js",
    "revision": "24e1a45a033d7862a91a9d688e142335"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "5c43392596048eee0ffdb0a860179d00"
  },
  {
    "url": "categories/index.html",
    "revision": "4e4ccd14768ec33baa80107152ea51ec"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "aae22e77fe8355b539e1e7d3a0004f6c"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "0278f78212a9ed62230d7a47ce569d08"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "bb54546df3a0b15ee1806a42d834b0d0"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "e004543c4a9a644352bace5fc69d44c0"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "679c89837e45d9bd5c695af2f6f8c434"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "7a61050f7c67cb30874b0bf505264d90"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "3017ca9e4e30a67cc7fad10e61d34aba"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "d33125fcd8715f151d00ebd8fbeae3e1"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "aa6697d943e8d76a79411a163f5f4a95"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "afe7c8662f38f1f28ee2dff05aa0c7ee"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "36d33976ccf11c501086b0145496c074"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "9be250ad7e0bf3ad4f34881a10757a74"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "2d4eb6d5a1becd9868a42a3b4fc15fc3"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "77da380ff6120eb15cb9af60f9ff7318"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "d90c0215efc8ff4de2fd8cbf577461ab"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "db338711aeecf653376816d623ca1c67"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "1583a22660b258faf279724d142b0198"
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
    "revision": "1593ef927c3434fc3900e866cf3851de"
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
    "revision": "7bbb11fc715fb15eb1ff477d971cd977"
  },
  {
    "url": "linux/nohup.html",
    "revision": "2f7d51bc2f0809a36016fa29f768eee9"
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
    "revision": "0310b87d6aaa99a7154a594d4e16b953"
  },
  {
    "url": "node/index.html",
    "revision": "80286b05c423d01088f3dc9e82457436"
  },
  {
    "url": "node/pm2.html",
    "revision": "f7a4988bd9b55ca5b51288fac6609a81"
  },
  {
    "url": "node/tools.html",
    "revision": "099fc5ac547948c29be9e16a5051f570"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "6ffbabf7c562ca5813f8fe8ecde22efc"
  },
  {
    "url": "nuxt/index.html",
    "revision": "818ecff44234f7273b919ed53a78376e"
  },
  {
    "url": "others/20220302.html",
    "revision": "b055dbfa872f7984cef58013d7878a50"
  },
  {
    "url": "others/20220622.html",
    "revision": "65434cc3c172230de2c0680eeec4f729"
  },
  {
    "url": "others/20220623.html",
    "revision": "37ebd90e151c4f8ed80711849bdf99da"
  },
  {
    "url": "others/blog.html",
    "revision": "3d6fcc5a2257986ad8d45d311644edec"
  },
  {
    "url": "others/firends.html",
    "revision": "0f7987d71b6774082be735bc32a552c3"
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
    "revision": "87889987b291aa9bc0c78fa9b84dc063"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "112a6e00579dd8537f08b905b5159a75"
  },
  {
    "url": "tag/index.html",
    "revision": "f5e62077e49af29b991610bce5e0c55d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9c2ccdd22f35504cbbbb71e9e4211a0a"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "ff3515ba74482d56c9fa4a37eb5ef688"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "6fe7ff653f08018bcfbdd4967a255dc9"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "4febdff36778689943f1925f9cc91e8c"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "96514a58bc051fd8bec00d78f957d625"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "d5e4cd1d89e4455f21115ef8b6e38920"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "9238d5c78b7a34292d5bd4992d450071"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "2994a8031f40657f775b8a49f6e2bb81"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "280fc36623a6c150e5612881da291f15"
  },
  {
    "url": "timeline/index.html",
    "revision": "5aefe20cd8eb8fcdeec9ab8dd77752f6"
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
