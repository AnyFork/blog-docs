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
    "revision": "1b8595e42dc84e63500efe1a6dd407fa"
  },
  {
    "url": "assets/css/0.styles.06de03aa.css",
    "revision": "bf757a34961c816ff672737cfae31ad6"
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
    "url": "assets/js/1.15fdf64d.js",
    "revision": "1d50ca94f89890527d204ddfd1cace96"
  },
  {
    "url": "assets/js/10.2874d326.js",
    "revision": "bc3a62fd517f954a602d9013ae9f4d01"
  },
  {
    "url": "assets/js/11.30c8c62e.js",
    "revision": "ebcc0f77619ba867ac097834ecd8dd8f"
  },
  {
    "url": "assets/js/12.b8d51ad2.js",
    "revision": "807cca93fa36978ca1f8fe6dd78db385"
  },
  {
    "url": "assets/js/13.514f7485.js",
    "revision": "95554e91733711809ad6a91e1d619f6e"
  },
  {
    "url": "assets/js/14.3f92b10a.js",
    "revision": "09bd374a1bb4a16cbf3a5772e1e74c54"
  },
  {
    "url": "assets/js/15.ce43712a.js",
    "revision": "3bee73a2641a030e22230fefe74228a8"
  },
  {
    "url": "assets/js/16.dbbf359d.js",
    "revision": "7399d16394c786030225ef4ad5f87562"
  },
  {
    "url": "assets/js/17.c635e071.js",
    "revision": "fae7d185e5554bbda3ca0309e2b0e3f9"
  },
  {
    "url": "assets/js/18.75a2534c.js",
    "revision": "055a55c14032ea2547f660dac7471de0"
  },
  {
    "url": "assets/js/19.b483f71b.js",
    "revision": "b188fcf91a7cd9577ca7f24fa8ac8eb5"
  },
  {
    "url": "assets/js/20.c672d164.js",
    "revision": "00584c6306ada584bbb074ead04b6d70"
  },
  {
    "url": "assets/js/21.b4852c5c.js",
    "revision": "e52b0bd09a308d18564b9cad0eeb260e"
  },
  {
    "url": "assets/js/22.395a5322.js",
    "revision": "bb4b202d70b906913a154fa965513cf9"
  },
  {
    "url": "assets/js/23.a19fbd84.js",
    "revision": "955a9b3c2ddb49cab0f2a1af25162148"
  },
  {
    "url": "assets/js/24.9517b3fc.js",
    "revision": "f291bbfdad57709a07a9c73cdaa974f2"
  },
  {
    "url": "assets/js/25.df7e8be6.js",
    "revision": "cbc479db8dcd456d228b7807642e93f8"
  },
  {
    "url": "assets/js/26.796e0ed1.js",
    "revision": "fdf82a550b9e94b6580903990071d01a"
  },
  {
    "url": "assets/js/27.f651a7d3.js",
    "revision": "b97c9471513b2728357ef4183e678787"
  },
  {
    "url": "assets/js/28.7152ab27.js",
    "revision": "b919a6658d3ad5ae6ba7855bcd3f2ec7"
  },
  {
    "url": "assets/js/29.b58eb748.js",
    "revision": "43c53f9cc7e6bb8cd7a950ea1bf8716c"
  },
  {
    "url": "assets/js/3.0db49fc7.js",
    "revision": "1167b637e76d40b9c9c4259f39d71929"
  },
  {
    "url": "assets/js/30.56f97206.js",
    "revision": "5e81d10a804081837812b3a8f8342191"
  },
  {
    "url": "assets/js/31.83e43d69.js",
    "revision": "bf53e68f664e1628fde5e644a1528de3"
  },
  {
    "url": "assets/js/32.1711fc34.js",
    "revision": "016aed80ee85e3a49398b6ab84320bbe"
  },
  {
    "url": "assets/js/33.0f320a6b.js",
    "revision": "4d0571ed7c2499211cd21e663e5871ee"
  },
  {
    "url": "assets/js/34.67c58007.js",
    "revision": "0987936dc17a5faea8de2df441567d6f"
  },
  {
    "url": "assets/js/35.986ad249.js",
    "revision": "30fdfa31631f221ba5b0d40c1b72efa4"
  },
  {
    "url": "assets/js/36.1656372f.js",
    "revision": "70633dca40756f5911f773aca19772a9"
  },
  {
    "url": "assets/js/4.87f1456c.js",
    "revision": "75d9d007596e40ec9d90da51f9957361"
  },
  {
    "url": "assets/js/5.5a75cdd0.js",
    "revision": "7767afbd0227ec4ca534820eebb1daae"
  },
  {
    "url": "assets/js/6.2723164a.js",
    "revision": "984adb47a6350026dac45fdacf63e32a"
  },
  {
    "url": "assets/js/7.a28ae33d.js",
    "revision": "075187946201b8d5dc6e30c78ed3309d"
  },
  {
    "url": "assets/js/8.2d2dd89c.js",
    "revision": "45ed6524429afee9b2915563385ad843"
  },
  {
    "url": "assets/js/9.e669597d.js",
    "revision": "c4965e87286dd29adc8b2beca4775b3a"
  },
  {
    "url": "assets/js/app.2a66aaa5.js",
    "revision": "4413fe05fa4a9ae49a4d39483c29ba01"
  },
  {
    "url": "categories/index.html",
    "revision": "3907822f53e48c548c6ddabc791fb381"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8d24e3f0eb75f9f36636afa132a4e69e"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "2f4c03a9be007506282ddfc2588f9c91"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "80180c4a6a08de8c45554bd2af62243b"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "c9347348097aaa65dde53e790414c2f2"
  },
  {
    "url": "devops/index.html",
    "revision": "a7b8bcb97a1e05c40f2a77890847507b"
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
    "url": "images/markdown/gitalk.png",
    "revision": "94d3ae9fd18bdd2192ec8a3e77a88c1e"
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
    "revision": "382fd9b833fe78e22cdab608280c5178"
  },
  {
    "url": "java/index.html",
    "revision": "d31d73c262dd512d8784a86d99237774"
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
    "url": "others/2022/20220215.html",
    "revision": "48fc75499edb6c3a36af3e3491eda81f"
  },
  {
    "url": "others/2022/index.html",
    "revision": "ce48fd2afb44d3c1ebace58e9ba0ae59"
  },
  {
    "url": "others/about.html",
    "revision": "20a362aae52935192c9c7f84529ab33a"
  },
  {
    "url": "others/firends.html",
    "revision": "7c46dd1043c8b98e8d91d3b1427a3cf5"
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
    "revision": "b11627e3488f782a8a78da46d5561077"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "a5a054dca450965b67cd3e00426c49c3"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "7bf6904fc2d35ca941b091c83926cc41"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "e9582fdc727b503dce8d722bfd3e810f"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ab668f335539cbcef3ef2753c310c89f"
  },
  {
    "url": "timeline/index.html",
    "revision": "06baf5acdfc25006a4515db6c9f92c6d"
  },
  {
    "url": "vue/index.html",
    "revision": "59eaff14287d37cf8e5e4250a3329416"
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
