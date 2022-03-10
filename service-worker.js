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
    "revision": "820d20787867dd857bfa85d8b505d6f5"
  },
  {
    "url": "assets/css/0.styles.2f9feedc.css",
    "revision": "780505d9c6d5a68901abab2f6061adf0"
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
    "url": "assets/js/1.6d36829c.js",
    "revision": "580bc0ef58e1eddadb2e562e2590b585"
  },
  {
    "url": "assets/js/10.2874d326.js",
    "revision": "bc3a62fd517f954a602d9013ae9f4d01"
  },
  {
    "url": "assets/js/11.3b6bac5c.js",
    "revision": "a8c88164d8c4a069bc15ebaa5ae3cb31"
  },
  {
    "url": "assets/js/12.b8d51ad2.js",
    "revision": "807cca93fa36978ca1f8fe6dd78db385"
  },
  {
    "url": "assets/js/13.dbef3628.js",
    "revision": "db7aff6f2228abe4fbfb86576cca7711"
  },
  {
    "url": "assets/js/14.e874860b.js",
    "revision": "9854279c6596288d4e35f655cdc6d674"
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
    "url": "assets/js/19.84dc3a6e.js",
    "revision": "1bc8bda2705d1918a267a66b7846350b"
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
    "url": "assets/js/23.27e8fa33.js",
    "revision": "bfca7acc0dc9944dd08d112ba55915e2"
  },
  {
    "url": "assets/js/24.ea2942f2.js",
    "revision": "3cb9f436fc9210f5b2aebb3e41d6401c"
  },
  {
    "url": "assets/js/25.47da53a3.js",
    "revision": "ecfce38e13a029865fe65971ab80d4c7"
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
    "url": "assets/js/32.b6572034.js",
    "revision": "c8d5a67bfae2b1a465ae691bd7ca67c3"
  },
  {
    "url": "assets/js/33.cfe70edb.js",
    "revision": "39ad9abc3872464acdf562de3d0d084d"
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
    "url": "assets/js/36.94facb03.js",
    "revision": "ac7cf5c79933e09fa0dad8ada18292ef"
  },
  {
    "url": "assets/js/37.e1cff4ee.js",
    "revision": "15fd2c8eb4dd93aa8e07173bf3dcc581"
  },
  {
    "url": "assets/js/38.27cb88db.js",
    "revision": "a0df33b33ceb9c0e59bfc01276343c68"
  },
  {
    "url": "assets/js/39.16463e8f.js",
    "revision": "004d03fb9a7624ad00c41ad6f02f1ba7"
  },
  {
    "url": "assets/js/4.edff2a3b.js",
    "revision": "6a109ce1f9a185a8635a5e3b088b8a72"
  },
  {
    "url": "assets/js/40.5bffcb93.js",
    "revision": "bd35876195ba53f818130cee815733be"
  },
  {
    "url": "assets/js/5.702ec06e.js",
    "revision": "d070f259fc8cdae373577d542a15e430"
  },
  {
    "url": "assets/js/6.5a0681ec.js",
    "revision": "43b86c373d41545192af18b250f57478"
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
    "url": "assets/js/app.601df0fe.js",
    "revision": "0f39a018442e43467ad2797b34a464fa"
  },
  {
    "url": "categories/index.html",
    "revision": "46b22e83e5306e21af0d9ba58a7235fd"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b14cf2736fc9bea448eea50dd2dec8f5"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "38eaecf63109a37a4f338c2aec5ce741"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "a71b6dde0d59ac43b5e02ccc2aa275fb"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "b5952bde0227372deead80f89001c576"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "3ae77da8930eec4ce40ed6671527604b"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "fae17700b9b2633a970c0d5eb7ab2cd7"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "1233f5abb138725f2b0217e0311174a6"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "2c19adb629786df7e6be9dcabd0b01d5"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "6d294ce0d3cf8596bf96ddbdac303950"
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
    "revision": "6cee879b01792fa6e2d3f78d79fb017a"
  },
  {
    "url": "java/index.html",
    "revision": "7f4596ba98798b6155afced24772cfee"
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
    "revision": "2fcb35b35dc158564158585e429a05a1"
  },
  {
    "url": "others/2022/index.html",
    "revision": "5472b724569a3e2e2df43b3d062a3ce6"
  },
  {
    "url": "others/about.html",
    "revision": "66d7edd150664c41a2844c739358d7aa"
  },
  {
    "url": "others/firends.html",
    "revision": "24657c166118700c42bb19033a6b74b2"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "bd438fc9bfc701f8928cc5245da1483e"
  },
  {
    "url": "others/other/index.html",
    "revision": "3f3fc93466a1c623e202d006052c2c3f"
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
    "revision": "18d0ce0976119fae5f72026b2cb7fdb5"
  },
  {
    "url": "tag/index.html",
    "revision": "57cdda72bb1c2f4ad69f59cd60e20994"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "17777a782ba55a9b29384a2926379829"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "323864778354eb3a469c5feb581fb72e"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "b3538d7ad47182070459502fd3d5fe46"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "1af7fde17e0064e8ec6b5fd705ea48ee"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "bb7f6196d27cec27ba1fa0c78d5748ed"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3dd35f39ddefe7d7f5898c419fb485bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "c86a1911e0738c3b9a380a5efb123164"
  },
  {
    "url": "vue/index.html",
    "revision": "01418e95a5981d715f1e241981e3c3c2"
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
