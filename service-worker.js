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
    "revision": "c49734614389937e03a6468bbb663e7a"
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
    "url": "assets/js/23.cca37112.js",
    "revision": "1b2b8531a348c0b0cd93e0b203af4a92"
  },
  {
    "url": "assets/js/24.9517b3fc.js",
    "revision": "f291bbfdad57709a07a9c73cdaa974f2"
  },
  {
    "url": "assets/js/25.3431e774.js",
    "revision": "8175d39930769cdc1197565d0c2fff7d"
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
    "url": "assets/js/28.d92f080a.js",
    "revision": "34098ba8141877f547fdcf3c0ca52f62"
  },
  {
    "url": "assets/js/29.c3f978e3.js",
    "revision": "86eb2b8b3ef04e3105ca39be5cc4e18d"
  },
  {
    "url": "assets/js/3.0db49fc7.js",
    "revision": "1167b637e76d40b9c9c4259f39d71929"
  },
  {
    "url": "assets/js/30.2126ad80.js",
    "revision": "1703f36150e64fc787b4832298544a0f"
  },
  {
    "url": "assets/js/31.c7a54c17.js",
    "revision": "1b3c69a2f9357e5b1681790c405f0c6d"
  },
  {
    "url": "assets/js/32.19df3df3.js",
    "revision": "9edf8297ef1a4af118b2818185dd91bb"
  },
  {
    "url": "assets/js/33.22d074a5.js",
    "revision": "090b34976c47fe6aab6a028b6ced7e71"
  },
  {
    "url": "assets/js/34.770a69af.js",
    "revision": "51c7c1e2dbfc15f3ebbd9a98f1582913"
  },
  {
    "url": "assets/js/35.4d148cdd.js",
    "revision": "116a9ea4890d9caf9e85ce54090df09b"
  },
  {
    "url": "assets/js/36.2d087a4a.js",
    "revision": "8dd8695e6d441d5b8eb6d5d189ef90e4"
  },
  {
    "url": "assets/js/37.1d68a407.js",
    "revision": "636b8e8339409d88ae1e53ccd7162136"
  },
  {
    "url": "assets/js/38.0e7c5762.js",
    "revision": "420cd2f47803430c96d89a22d0407373"
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
    "url": "assets/js/app.d6de1eab.js",
    "revision": "004b862285790cc9cd5db113589cbd30"
  },
  {
    "url": "categories/index.html",
    "revision": "4ec44441814fbaaf2b85b9856b85512b"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "dd5a26b25279c8bed1b10870ac6eec98"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "676182d846031fba00931ce4d4af66a6"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "45903fbe16eb76b091859d49f1f26687"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "653d0b53e0c98a42a4cfa8bb46aee01b"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "da8eff64ba40b420b1d13866ce23709a"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "69bfaeae8199503983fbeee221185980"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "baeca6ebb49627def177521a61e27d5d"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "abfa8ba743a3c0810e8a4f52c8ef99bd"
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
    "revision": "3e5764f5084216f6afe23a2867987f65"
  },
  {
    "url": "java/index.html",
    "revision": "2892f2df5df25239bc52fc4bf33963dc"
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
    "revision": "f7b15e3773da00161464c4330dc6c836"
  },
  {
    "url": "others/2022/index.html",
    "revision": "fe1ae6ee0b79ba0600d40562e4e5321c"
  },
  {
    "url": "others/about.html",
    "revision": "1495f69ec775f4fe99444e516003cf70"
  },
  {
    "url": "others/firends.html",
    "revision": "4ee1d71e40c27ffbb30a9a7268709512"
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
    "revision": "3ddcd5e18a84d7ffda7ec53e36e3bac1"
  },
  {
    "url": "tag/index.html",
    "revision": "57e89723a6e60880c1c145039120fb13"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "6ba6542986df44187f2602d12038f4b0"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "392812e2fd4c733ee079906c5fae47a7"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "ce856c9a1b1fd2a3a9b76b5cec1df2e1"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "0eb9b8855c83b55dce94d7eaef4132b9"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "180a122fa360eb66cc09befbf7f9836a"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a38fc0254560b2ee179f74c6aa126e1"
  },
  {
    "url": "vue/index.html",
    "revision": "488f5a69756ae37d5b5674030b699a0e"
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
