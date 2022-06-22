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
    "revision": "0e8cae100a9de64a8d812b17e6320228"
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
    "url": "assets/js/13.2f4c82d4.js",
    "revision": "7c3983cbba7d21bf61c9cbb4356addb1"
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
    "url": "assets/js/23.9a953869.js",
    "revision": "6e734df0a4e697a77f8bdf135a898b39"
  },
  {
    "url": "assets/js/24.012e2ff9.js",
    "revision": "333525c08e25d504ca3d1d312288c5a9"
  },
  {
    "url": "assets/js/25.026c86ac.js",
    "revision": "ba6570d58868e7e78ff90fe4058094a6"
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
    "url": "assets/js/29.97dee7fa.js",
    "revision": "b893aff840ab8f1f8302f11869a84dbb"
  },
  {
    "url": "assets/js/3.075f1346.js",
    "revision": "137c0f76be06e4e1492638bd0158e926"
  },
  {
    "url": "assets/js/30.a5a953de.js",
    "revision": "18998a71aca1918abbafe646514ad052"
  },
  {
    "url": "assets/js/31.e8c44d09.js",
    "revision": "9022deed94fd8662bd2d33bd6c0958cf"
  },
  {
    "url": "assets/js/32.3a021b42.js",
    "revision": "eefb3fe91b42ace42efa3c139c699faf"
  },
  {
    "url": "assets/js/33.60b2c7a4.js",
    "revision": "da310c292715d8901694d970fc8134dc"
  },
  {
    "url": "assets/js/34.c05c84e7.js",
    "revision": "32c28c068aca1db421f56f4f8dd548bf"
  },
  {
    "url": "assets/js/35.b9e6ec6d.js",
    "revision": "ae4827f604d4e1011465a47a06cd0e10"
  },
  {
    "url": "assets/js/36.482c2272.js",
    "revision": "24b47033796acb053afb040c3e52865b"
  },
  {
    "url": "assets/js/37.96046d02.js",
    "revision": "d9f82cc231c2f5dd58cd147846382873"
  },
  {
    "url": "assets/js/38.99747a07.js",
    "revision": "910d0b5c7264e363561dcb0b6b6919f6"
  },
  {
    "url": "assets/js/39.8f129494.js",
    "revision": "2eb471a66afbff89d03f96f962e976fd"
  },
  {
    "url": "assets/js/4.2ac406ec.js",
    "revision": "2ceb5d449bff55c52d3bbf02b0120f24"
  },
  {
    "url": "assets/js/40.222aa155.js",
    "revision": "f8262cf6d3bf76808dc0174ef49fdf97"
  },
  {
    "url": "assets/js/41.7a8fd0d9.js",
    "revision": "6aa519b689c2b0b13453b706fd277938"
  },
  {
    "url": "assets/js/42.cf8777c3.js",
    "revision": "ee5641c73d5c5f073a4643656c8b961f"
  },
  {
    "url": "assets/js/43.9e417753.js",
    "revision": "4d92c9392ed95b0d957f75cdda5a7ba1"
  },
  {
    "url": "assets/js/44.d37e5f5b.js",
    "revision": "43883097dc318831ef3e22abd6a8be8f"
  },
  {
    "url": "assets/js/45.d773369c.js",
    "revision": "5dd48e4090ef5f7daa0e390d8ff2ae7f"
  },
  {
    "url": "assets/js/46.7765f8d4.js",
    "revision": "a13189102ce767d115275d9290baf745"
  },
  {
    "url": "assets/js/47.ffe996d9.js",
    "revision": "0116f93f2a26b54851488dab57c08e96"
  },
  {
    "url": "assets/js/48.f335a65a.js",
    "revision": "d47c384c7e1c3f16e36a980937c7f102"
  },
  {
    "url": "assets/js/49.c6fc12b9.js",
    "revision": "47eab07465a3d0f41a98e0346452c6cd"
  },
  {
    "url": "assets/js/5.5e039b06.js",
    "revision": "6715951ee723a138d82df14390dcec72"
  },
  {
    "url": "assets/js/50.cf86856e.js",
    "revision": "72bd41700ea7cbc8b306b83b039649bd"
  },
  {
    "url": "assets/js/51.98a56be4.js",
    "revision": "3ac0a7229cd2ae6004e16b93bb721416"
  },
  {
    "url": "assets/js/52.8c14109d.js",
    "revision": "57e339045e6470e0d71e8dd260fb6aec"
  },
  {
    "url": "assets/js/53.d146263a.js",
    "revision": "3f82e0915782c36d481fbeb1ebcd9c89"
  },
  {
    "url": "assets/js/54.1f0869be.js",
    "revision": "9ed474966d6cf980e431ece26346aa91"
  },
  {
    "url": "assets/js/55.30ad14ce.js",
    "revision": "96bbfc30e72c1e5a9a1f0c9e258bcfc6"
  },
  {
    "url": "assets/js/56.9ea8a55a.js",
    "revision": "3ab1b7c71caa9fcaff8ca8a497f242ea"
  },
  {
    "url": "assets/js/57.7fb2e047.js",
    "revision": "4ccec462ac9729e77353257b13120ebf"
  },
  {
    "url": "assets/js/58.cd7fa290.js",
    "revision": "92800c2e9917bf68c69541c5ce974ab5"
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
    "url": "assets/js/app.f23ee337.js",
    "revision": "5a5d7b9b529cd68f1762b6e03bda4da1"
  },
  {
    "url": "categories/index.html",
    "revision": "9b3b6846a0155b92aee56e8a527411f0"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d31507ded82c0af6e176dffd0ec36db1"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "8e77db137feadf0b7ac70f0f0d388072"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "9a6ea793af574dc6812e560cc2d5ce7c"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8b9a6f1dfd5566c8990503fd643a06e8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b5879e9f238b90d6f54711249f343b35"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "4d160d52a4e1a3059c6a3bf587cd2fc4"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "1f2bb936bd670fa6c6d17ef7d32e3e56"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "b54af98c30fbc962229217dd743a9fe3"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "d39c95359403d0ef6f7e823f0b97ec27"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "d9a82e1592c84d61b7e60e8f9f7b211e"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "38d3fe67a985974158e84847cfc95198"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "a5b5bacdf388fbd39cea408a9b2d35ba"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "2fb3e5c2ca26d4cfe816c66843283e57"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "bc09ba9a23013d46a711ad77c51fd759"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "a6232fa032e20086fd705615db89ca02"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "8c4eabfe6b8d6edecb0fcf74fe0e7a0b"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "7ea562cc1978a9efd88fa844f47a6852"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "c521d56180cad8970df2ce170a6a7bd0"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "7eae3835be0a94a960ed8e0de7c14b72"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "c981538d35f67df930a568d039c2bd4b"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "7df502705cb84a9ad75b7f495192da3b"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "86f220abfb3528554f929a031a6f45d9"
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
    "revision": "b5a83bafe5722779cae003fc2800065a"
  },
  {
    "url": "java/index.html",
    "revision": "4957b401bc95e345ee5efbcb0c142fa3"
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
    "revision": "189f8c3a5357250f777cdc8259ab3dc5"
  },
  {
    "url": "node/nohup.html",
    "revision": "6e0a8d37c6e9f78b8de83264091e54a4"
  },
  {
    "url": "node/pm2.html",
    "revision": "3474ed737f45acda4782e04681d89fd3"
  },
  {
    "url": "node/tools.html",
    "revision": "3345878a97fa215b3cede45df65378a8"
  },
  {
    "url": "nuxt/index.html",
    "revision": "b8003428155407b278ad1be9d14f13d0"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "09ab38d2d90a31bfcb456f368cf4f6d0"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "18e871a237c85d77b33b4f9c2220a7b9"
  },
  {
    "url": "others/2022/20220215.html",
    "revision": "06a39028de7396d72f993b0e8a67fbe9"
  },
  {
    "url": "others/2022/index.html",
    "revision": "06758b0adde6ea7b0833b962a3d1caa1"
  },
  {
    "url": "others/about.html",
    "revision": "b00649051c1260b5e2b2b85b4a37d2ac"
  },
  {
    "url": "others/firends.html",
    "revision": "a45c828278a2c53cc1255374dfabb3d1"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "221846287c0b0731908a8ec21c626962"
  },
  {
    "url": "others/linux/index.html",
    "revision": "b991b6b12890ac7742d0a57bace3db0e"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "59296b0f594e5d278786d798fa08449e"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "d6bf0eab240763831085d24cc04c38a7"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "1cf69c769c3100196f110f9716ac1302"
  },
  {
    "url": "others/other/index.html",
    "revision": "382a10d4a324d51c3788b05fd72fc512"
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
    "revision": "148ee02feb27fa3dc552a55f732bb7c4"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "867d26f57075df13404bec4488896190"
  },
  {
    "url": "tag/index.html",
    "revision": "1d48cddd1c48fbfdd3c8957518496d6d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "92986553a9e8f7c55acc91b521efe2a8"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "f8546a978a1f44c6a5ed80a569f3972b"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "e9d6adfafc33c3e1685d0e209ef9a400"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "bae125b1c5bd2cc7b47235b75ecbb687"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "9e416a845630352510b26bcb0ed3849a"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "8fca6aff46cf641943713b8fb7bc73ff"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "e18f0c9b5871398b8b5ca8d5ae7f6036"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e3d0d8c5c5826511b8ac2f719f8fd778"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "d3389007e33992ec51c27e978f9013f7"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "5526fe257e2455435bef221b1b17e166"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "d294c9bb6d0df096a8a17de763a8b503"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "79acf846cc879b757cfb768a6c457092"
  },
  {
    "url": "timeline/index.html",
    "revision": "525f1cac4453a23c02343641482d77b6"
  },
  {
    "url": "vue/index.html",
    "revision": "718ee1e59205419e4c6aeecf9831070e"
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
