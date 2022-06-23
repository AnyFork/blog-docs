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
    "revision": "2b364e98202707e16609a5702d4f07bf"
  },
  {
    "url": "assets/css/0.styles.b546de90.css",
    "revision": "ca154acfb820d75ec91b81deecc3a6f3"
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
    "url": "assets/js/11.97a0a9d0.js",
    "revision": "118e6419c05cdcb7049852cf22b59e09"
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
    "url": "assets/js/14.211e9480.js",
    "revision": "0a57b7f48050d8eba4efd466f102b1b1"
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
    "url": "assets/js/23.e27aa69c.js",
    "revision": "bc30b40e6f50d5de80cec3dac76e1110"
  },
  {
    "url": "assets/js/24.012e2ff9.js",
    "revision": "333525c08e25d504ca3d1d312288c5a9"
  },
  {
    "url": "assets/js/25.2e532cbb.js",
    "revision": "ee2df6142bf1ae112cd4031620c4f9c7"
  },
  {
    "url": "assets/js/26.9e8d80b9.js",
    "revision": "f1d9e325ff6b46f34f3703366b22c204"
  },
  {
    "url": "assets/js/27.88a48dcc.js",
    "revision": "408470d05693fddd2ab7772943654923"
  },
  {
    "url": "assets/js/28.03733584.js",
    "revision": "34c89a6d82514adf4821cabac0d7da91"
  },
  {
    "url": "assets/js/29.8f07839a.js",
    "revision": "5cf26872f525bd82837bfc5e4448ca68"
  },
  {
    "url": "assets/js/3.075f1346.js",
    "revision": "137c0f76be06e4e1492638bd0158e926"
  },
  {
    "url": "assets/js/30.7ffcc657.js",
    "revision": "437231326ec0c7d9ffecd9ea6c2cc5bf"
  },
  {
    "url": "assets/js/31.69fd8a6e.js",
    "revision": "589711cbea9a5979fb14d6db8c8c2618"
  },
  {
    "url": "assets/js/32.6febd9b2.js",
    "revision": "b3db56275add2adf4ca1dd4cbe71e106"
  },
  {
    "url": "assets/js/33.4cdb47fd.js",
    "revision": "5f85ae1fe7f91bd9ffdbacaf3b0e2899"
  },
  {
    "url": "assets/js/34.3b096265.js",
    "revision": "f85fe20188b74b6e27d774b5c0dc2800"
  },
  {
    "url": "assets/js/35.46ee8e10.js",
    "revision": "4395cfe64ff747ccc41267883871260e"
  },
  {
    "url": "assets/js/36.b2cfc0a0.js",
    "revision": "e1652f3f0aea4445f66d9152630ede99"
  },
  {
    "url": "assets/js/37.230eb530.js",
    "revision": "d9f82cc231c2f5dd58cd147846382873"
  },
  {
    "url": "assets/js/38.a463c163.js",
    "revision": "ae7df6028789684e26ac0b30f0f8e20a"
  },
  {
    "url": "assets/js/39.2097c461.js",
    "revision": "ddb66765b09d6e017eb9fdda6b7d1da6"
  },
  {
    "url": "assets/js/4.c1ff9b7a.js",
    "revision": "b1859319c2e5023a1c1f9123212e8219"
  },
  {
    "url": "assets/js/40.92a2e18d.js",
    "revision": "b7f1366167def27e87f16cc16e63a25b"
  },
  {
    "url": "assets/js/41.4c38521e.js",
    "revision": "7d2731a283abcd173adc42e3465726ab"
  },
  {
    "url": "assets/js/42.195a4cef.js",
    "revision": "7388e20deed0aaedaa88a6785a17792a"
  },
  {
    "url": "assets/js/43.72b00561.js",
    "revision": "3c2ac1816c4a4181940ab82ee9b78332"
  },
  {
    "url": "assets/js/44.2b86ee37.js",
    "revision": "3fc965f34ee5720e5883a684c636e88a"
  },
  {
    "url": "assets/js/45.0869b724.js",
    "revision": "ab51266fe58aa30140e55d5915fa76f6"
  },
  {
    "url": "assets/js/46.cfd382c0.js",
    "revision": "ecd857965422eb6bcb3af13460579894"
  },
  {
    "url": "assets/js/47.905f7641.js",
    "revision": "8548940b612805f1f3cead619324bef0"
  },
  {
    "url": "assets/js/48.1eb557d3.js",
    "revision": "fd78434fc1ae261290f03c10aa5476a2"
  },
  {
    "url": "assets/js/49.9561603a.js",
    "revision": "97eba75788ccc8ceabcadde4e603bf79"
  },
  {
    "url": "assets/js/5.1e803a1d.js",
    "revision": "10394c967483418508a88566cf37e456"
  },
  {
    "url": "assets/js/50.18e4e198.js",
    "revision": "bd30b3dd34bc422d5d2d985d8af0cf11"
  },
  {
    "url": "assets/js/51.ad1da8f4.js",
    "revision": "d94e3f1c0730ccf96b799bd197d51d80"
  },
  {
    "url": "assets/js/52.aaab2480.js",
    "revision": "9a4f639d0e87f38fbaf4c94ffdd571ef"
  },
  {
    "url": "assets/js/53.72ce2b79.js",
    "revision": "993327d3832ee3eb73f5c56a8ea3b405"
  },
  {
    "url": "assets/js/54.0cd6eb57.js",
    "revision": "b65b30ed00255823ee6ca653e2c9cda2"
  },
  {
    "url": "assets/js/55.504c82b2.js",
    "revision": "586380005df8b4a8e56da76d326b323c"
  },
  {
    "url": "assets/js/56.236b382f.js",
    "revision": "4e3a921713a88c22f53937bda82d95c2"
  },
  {
    "url": "assets/js/57.4dd38f15.js",
    "revision": "fbfbf3253c16c9535322dd4288769186"
  },
  {
    "url": "assets/js/58.da3ccea8.js",
    "revision": "d4a52b4a12e6726961b7330e69df3715"
  },
  {
    "url": "assets/js/59.2acae00f.js",
    "revision": "edb126d438ccf3b17b7f4531ca675e1a"
  },
  {
    "url": "assets/js/6.2dcb73d9.js",
    "revision": "90bd762acc6c3fd63b756574120c41f0"
  },
  {
    "url": "assets/js/60.bc2a6b8f.js",
    "revision": "02ef8140cd3d73b7a167a9f5698e4834"
  },
  {
    "url": "assets/js/61.64ed5c2d.js",
    "revision": "ea03549646096b400acbd754a27dd3f7"
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
    "url": "assets/js/app.8bfa0980.js",
    "revision": "74380c186c70665f5e36f0b4ceb4f4e6"
  },
  {
    "url": "categories/index.html",
    "revision": "4ece863a98820f56baf19f5d8334a040"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fe00f0b8c7a05ba04154acbdd3bb7ee2"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "c673e024fc13de4d80c35da686a30690"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "8041173d650b7250538f1d04c7367c37"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "70002543890a6375096bd70d0250fd15"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "79f70ea51cb5c2c82691565eae4211f4"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "befc1f795871782ad2ee055b24777f02"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "fd33848ac873b03737eede877ab70454"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "da8af3eb09a13164f6782964ec3d8a12"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "55e5c57de30ba2f7be2951819ea11754"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "62fe153673e8f7eddcacd1deb0fed5a9"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "a4f5edf42a8f24a45c1ba9955e7968cd"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "5801de333845240f6aef3154069533ca"
  },
  {
    "url": "devops/gitlab/install.html",
    "revision": "1171a458910177f832a3d973088ab4e6"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "9b459bebc80e1685f2e9631d13204bca"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "7eb0af447c6007b930840eee036db1cf"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "787048ffb8738c70586f897c8230a056"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "a809bcfa253143f7fad6957828a71e03"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "87efa232b5692f0832a3769609518fc8"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "eb146b1d018b2d00a92e56f8d2bcc8d9"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "28a6fd4cdc1fbcaf98b378115ce2e2d4"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "f7b933d86b929b6f58d3c5ea92e88baf"
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
    "revision": "63aef9256f3012c058be8eb84a4020fd"
  },
  {
    "url": "java/index.html",
    "revision": "f890468796fab770284d6d1a07038ff4"
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
    "url": "linux/basecommand.html",
    "revision": "32baa660c7e352ed34f64639e8f67deb"
  },
  {
    "url": "linux/index.html",
    "revision": "bf34f236f7760783a71323e345337239"
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
    "url": "mysql/index.html",
    "revision": "9f62b295cb1cce64c96d9abf53cd0f70"
  },
  {
    "url": "mysql/mysqlinstall.html",
    "revision": "8d7df951017f8721645fec64aa8b3791"
  },
  {
    "url": "node/index.html",
    "revision": "2ecc5c23557a9e797c924add9f34068b"
  },
  {
    "url": "node/nohup.html",
    "revision": "a8ce48d02cc48b9407090a77b9f31698"
  },
  {
    "url": "node/pm2.html",
    "revision": "799a0ce0230ee2a6bfc7a3f3af8f8f55"
  },
  {
    "url": "node/tools.html",
    "revision": "056344f8efa13ac304c69c29e01804ab"
  },
  {
    "url": "nuxt/index.html",
    "revision": "dbfcae2704b1e1d7b299aa8ffbb36323"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "9609974e6dd3a47f57bbf955242a8eca"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "55d877e1194279d2cc988ebf29d0497d"
  },
  {
    "url": "others/about.html",
    "revision": "85177f116b22d2134e723dc3f90dc633"
  },
  {
    "url": "others/blog.html",
    "revision": "a1f4cfa5dd46c058b335e43d359f6d85"
  },
  {
    "url": "others/firends.html",
    "revision": "db1bbe786159cb5f59f3916100f8eadd"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "297e3eb0689fe49be0dd3fe40559cf89"
  },
  {
    "url": "others/other/20220622.html",
    "revision": "5d2b55faa77fe59fa7cc62c15a5ede7f"
  },
  {
    "url": "others/other/20220623.html",
    "revision": "5471ae4b041afc47d29bf8dbea335fde"
  },
  {
    "url": "others/other/index.html",
    "revision": "3e77ae1172f4af9434bce56a56489a89"
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
    "revision": "38ba6ef428e83a1c3b2ed91627e07419"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "e44fd79db0e7e8861aac5ab5f094bec5"
  },
  {
    "url": "tag/index.html",
    "revision": "0e2ab2507b9dfd625de5cd3af748ef79"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b062b9fcf7f526c86b7892d6b16882ba"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "abfdd90b938cc67c5451475a27641317"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "5d9fcfc8e9a8c9af9bc4f5ba54e14939"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "ae9c35bb1626ad1eaf9c89dd60626d6e"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "150143e57b740eb554616a479349f90a"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "66f5d3991b93b63f36157ae2c8b3a1f8"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "3136d6ed585623617bc9803a37a3fa25"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e82ad2fb9fa7c977c2220ac062559612"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "b62bc7b994a1cd4141e81bb851bb8d51"
  },
  {
    "url": "timeline/index.html",
    "revision": "75dac83a201e9689765624ae717cbc92"
  },
  {
    "url": "vue/index.html",
    "revision": "778842dce1a154b84de208085476a950"
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
