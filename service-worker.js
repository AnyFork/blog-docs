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
    "revision": "715efb3ad8da37b2ff9f6891efff5391"
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
    "url": "assets/js/1.6b874d0c.js",
    "revision": "24fe7963616f7241137ce01a257b5941"
  },
  {
    "url": "assets/js/10.31a244f0.js",
    "revision": "5e87e63cb0bc1e04ca1acc1460c8c030"
  },
  {
    "url": "assets/js/11.998adcad.js",
    "revision": "d0af290b3000c5992b5f7db940a5d729"
  },
  {
    "url": "assets/js/12.5e7d6002.js",
    "revision": "784552189b64a64bcca6d3f32387ae19"
  },
  {
    "url": "assets/js/13.bfc09520.js",
    "revision": "608ae53f9c6c9733ffbfc4c1928082e5"
  },
  {
    "url": "assets/js/14.d0d2a5c6.js",
    "revision": "836ca78001ec40402dd35cab3ed5f01e"
  },
  {
    "url": "assets/js/15.d6c90d1f.js",
    "revision": "21ff8267ae581e23c29be55cc0262fec"
  },
  {
    "url": "assets/js/16.c4be9b1d.js",
    "revision": "399afc0ad8eac4235b56b189f716e06d"
  },
  {
    "url": "assets/js/17.e8e1e0f1.js",
    "revision": "e27814011250afbe36736f24b5fe7e89"
  },
  {
    "url": "assets/js/18.9a88b719.js",
    "revision": "40e5ba7d492e2175a17d45259962fa30"
  },
  {
    "url": "assets/js/19.f0f58e69.js",
    "revision": "797499e7429bcea12401c3be954c3ec5"
  },
  {
    "url": "assets/js/20.d7b25c6c.js",
    "revision": "7ab3303420323eeb1d33a9de5bed15f0"
  },
  {
    "url": "assets/js/21.59cdd16d.js",
    "revision": "32b05174527720b438138b873bb3768e"
  },
  {
    "url": "assets/js/22.5e2786fe.js",
    "revision": "e11a61392cc7e1e4f7b72df1d56b8932"
  },
  {
    "url": "assets/js/23.adb74d0d.js",
    "revision": "39c6337dc49173e8bce6263e57c7d2f3"
  },
  {
    "url": "assets/js/24.e64aac0e.js",
    "revision": "7bff21dfb7a9bed1b465198c2f2cdf4b"
  },
  {
    "url": "assets/js/25.3833078b.js",
    "revision": "c6b36b6841c0ae3e08f85327184ea6b4"
  },
  {
    "url": "assets/js/26.f6e61638.js",
    "revision": "f1d9e325ff6b46f34f3703366b22c204"
  },
  {
    "url": "assets/js/27.c5b0a914.js",
    "revision": "20e2d930746e6c9736de239b3acd5f42"
  },
  {
    "url": "assets/js/28.6402b7c0.js",
    "revision": "34c89a6d82514adf4821cabac0d7da91"
  },
  {
    "url": "assets/js/29.c264d0b7.js",
    "revision": "b5084a11462793ea2e1c00612358d02b"
  },
  {
    "url": "assets/js/3.075f1346.js",
    "revision": "137c0f76be06e4e1492638bd0158e926"
  },
  {
    "url": "assets/js/30.460cd0bb.js",
    "revision": "f918cb45f2ccc2fd0fa570217993b198"
  },
  {
    "url": "assets/js/31.a7d3ae96.js",
    "revision": "43734f5bbc8204a5e05ca1b0c295a4d8"
  },
  {
    "url": "assets/js/32.56cbfe09.js",
    "revision": "16a21010fd7dc9083d8f171d2a2b833c"
  },
  {
    "url": "assets/js/33.0a87785b.js",
    "revision": "e0edfdd14a2d2ee4ba7ccdedf1dca355"
  },
  {
    "url": "assets/js/34.3f8121e8.js",
    "revision": "0838d367dd4a23e162984ff330133a32"
  },
  {
    "url": "assets/js/35.67423225.js",
    "revision": "8f61a73d42997b81b549900cd973f703"
  },
  {
    "url": "assets/js/36.80b12863.js",
    "revision": "ece5ecdf75131e52d2c24884ad533be8"
  },
  {
    "url": "assets/js/37.e3165e9a.js",
    "revision": "e1f05e4385bf2e96ded730c894b64ab7"
  },
  {
    "url": "assets/js/38.57ecadf1.js",
    "revision": "fed0ec65a5d33ca8572de1b116a94f75"
  },
  {
    "url": "assets/js/39.3d3ce15e.js",
    "revision": "a8d4ee7c93cdd251b50abec8a28255df"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.c4a555e0.js",
    "revision": "2dc6b102d3b29f9bd5aa46c91ad6727d"
  },
  {
    "url": "assets/js/41.ba7c0196.js",
    "revision": "af5e8a7374953c4156979c7c2b00d931"
  },
  {
    "url": "assets/js/42.9f0e94f0.js",
    "revision": "228b27304f16709235449c95bf3efb8d"
  },
  {
    "url": "assets/js/43.cfe92cd4.js",
    "revision": "2e55910023b2334e9b189841d2b4f9fb"
  },
  {
    "url": "assets/js/44.05ca2df6.js",
    "revision": "fb4706b393d76dce4251f6796d647fc5"
  },
  {
    "url": "assets/js/45.dc6493d4.js",
    "revision": "3429714d041eb2f89f6c905d89c04eef"
  },
  {
    "url": "assets/js/46.8fba6172.js",
    "revision": "5bd44239c5b4c44539bb2b057edf27a8"
  },
  {
    "url": "assets/js/47.b2ea63aa.js",
    "revision": "06f441f90733a2d0534c90dea0c3f0c0"
  },
  {
    "url": "assets/js/48.cc746abc.js",
    "revision": "b225e50a60620c99a362557d54d8418a"
  },
  {
    "url": "assets/js/49.433faa47.js",
    "revision": "665b999bad685bf5b4c7fcc81253903a"
  },
  {
    "url": "assets/js/5.5e039b06.js",
    "revision": "6715951ee723a138d82df14390dcec72"
  },
  {
    "url": "assets/js/50.b1635a91.js",
    "revision": "d2cfe03dd41b259298d21462a4b3eb69"
  },
  {
    "url": "assets/js/51.b65f8635.js",
    "revision": "b11d02fec9ec4f21d564b71ae704e7ea"
  },
  {
    "url": "assets/js/52.6a9f62d2.js",
    "revision": "0d5e7734363d6e6da70a62a23e2318d1"
  },
  {
    "url": "assets/js/53.944ed6ea.js",
    "revision": "62a9c974de3aac98d23ca879385c15e9"
  },
  {
    "url": "assets/js/6.49f32814.js",
    "revision": "71684466b1cdf6bbf0b869c2a92c8bfd"
  },
  {
    "url": "assets/js/7.8f6aa55c.js",
    "revision": "eef172e6b119a758c5d2f1221e50bbcb"
  },
  {
    "url": "assets/js/8.ca22cc6e.js",
    "revision": "a133b0b712f5854d4553319ccca96899"
  },
  {
    "url": "assets/js/9.cd61dda8.js",
    "revision": "f9f9809212affd2d9440f5af1e7753ae"
  },
  {
    "url": "assets/js/app.0460c3e9.js",
    "revision": "ba61973d05a3e7639bc5257191f600dd"
  },
  {
    "url": "categories/index.html",
    "revision": "7b7c1c99663c62599f8b7caff6474318"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "1c55d1e527bd7e5471443dbde7d59dce"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "73864b6b78424aefc17ef202d35281a0"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "6aef4472ffdf51d1a392a9f52962cde7"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "fae1f04e7f6c2e605fc36a338440bb7c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7cb75225bd51864d6f7909b91d852446"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "2c4a87fd3669fdb7c5310769711e739c"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "1d954a0c05867f2753198d1133de32b6"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "106722967db92526d5b956de7069ad3f"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "3ee5ac4052beb7c9bf740fcf8bb31c78"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "e620efa6d513db4d11d9ce9f8fc68c4d"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "bf69049c64cc00be3231e9e8f79af406"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "562717b77048db7489d86c3abd9a8e46"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "db2f30e7322c8e2b7d9db9a42b9e3ccd"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "7554f44d9b3542118ce2399444ff523f"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "2be4d6e36dbc120ae5cd7849cc014d74"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "cb330d31666c8cb0d1ebeb4353ab7ecb"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "7e97f4ecc71aec3c825c1abd826455f7"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "49d1b8bbfbfb55540ba8b032e00b1171"
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
    "revision": "739d29759dd8a47a99d23a74c0f5c912"
  },
  {
    "url": "java/index.html",
    "revision": "010fb2a07b7359fc72e2f64ac9b55d77"
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
    "url": "node/index.html",
    "revision": "20418ce8746aaaba9c44937323d85c38"
  },
  {
    "url": "node/nohup.html",
    "revision": "1b41b01b2d3968c0474ba3d56e0368ed"
  },
  {
    "url": "node/pm2.html",
    "revision": "364d88e03386a6a4f17cfdb6a5f73c70"
  },
  {
    "url": "nuxt/index.html",
    "revision": "0a2eb6cd969e1bdceeec9d3f4342bbce"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "106a868b6e32dd4c76e58069550d76f0"
  },
  {
    "url": "others/2022/20220215.html",
    "revision": "67e5dc13b35250956a565e5734c731ef"
  },
  {
    "url": "others/2022/index.html",
    "revision": "8542ab991bb200f84bcc3c2b7f313bdd"
  },
  {
    "url": "others/about.html",
    "revision": "60fdc81d55b8117bc5b791592d165d5e"
  },
  {
    "url": "others/firends.html",
    "revision": "217d1746616e8805f293d735e5ce01a0"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "0b3d00509e7615d4b271ec9e0e8043fb"
  },
  {
    "url": "others/linux/index.html",
    "revision": "dbf71da5bcafe4bc2969ad1445f705a2"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "b9dbf95c64384d45ec43e56d01156758"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "0b00c59016a3232d8181a1fb0058d2ec"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "fad3a4c548da61ac6eeb1d2f58a71af2"
  },
  {
    "url": "others/other/index.html",
    "revision": "829a39c2be27896a4f7c2351d3c4bf37"
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
    "revision": "81178178dec9661b5bf6926167af0944"
  },
  {
    "url": "tag/index.html",
    "revision": "b6bd2b8180a6f7f8de68f635f492742c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3579e492b472684386a8253a18e2b874"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "23304dd6acdb587f351ff7703127d70a"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "555c78997da60f0342d70d806e795318"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "06d9e06ad676dbb51dda8562c37eea76"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "110c698344df7a8fc52e036be8820791"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "8ddc11f23a333f2522f639f5f8f781fe"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "59a9d22ebd6acffd0472f30a3008996e"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "ebe1cdd75094dca3eb20f3ceffbc0c7c"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "66bb676943ac7ca77b65a7f9f9acc2a2"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "1eecfc2c6b3eb998ee37f98c171e2daf"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "883f0c6a6570dbe9ea2c807346f11352"
  },
  {
    "url": "timeline/index.html",
    "revision": "808ab6f1555c86be17300cdd4397daab"
  },
  {
    "url": "vue/index.html",
    "revision": "901e8e41850d7d3c886c2d4fbeeb2466"
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
