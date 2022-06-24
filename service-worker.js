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
    "revision": "76447e66608bf27face0625cfff9d3b8"
  },
  {
    "url": "assets/css/0.styles.22922323.css",
    "revision": "bfe1884bb0c6443c843d89048dad61dc"
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
    "url": "assets/js/1.73a6b1b8.js",
    "revision": "f4da4317251c313003f2903d095b6865"
  },
  {
    "url": "assets/js/10.b7df63aa.js",
    "revision": "a6af80ac5195f31a6e4a91ee917a4732"
  },
  {
    "url": "assets/js/11.95b1af85.js",
    "revision": "15061faa20bd0ac7cfb1e7c08b956749"
  },
  {
    "url": "assets/js/12.a5121f74.js",
    "revision": "9aee5a91a494a6988da92e1d07b326b5"
  },
  {
    "url": "assets/js/13.f86f9960.js",
    "revision": "8ff422896c87461cf5aa8ed076e755ef"
  },
  {
    "url": "assets/js/14.00c7fdca.js",
    "revision": "be3d04795e2df673788db08ab22c2723"
  },
  {
    "url": "assets/js/15.8a6ce38a.js",
    "revision": "03303e40733c9007729b17f4103c6a9f"
  },
  {
    "url": "assets/js/16.e4c7c90d.js",
    "revision": "f4ee18cf81757a3d45218530e36e46c0"
  },
  {
    "url": "assets/js/17.2ea4a723.js",
    "revision": "d5b9f3a52221607077f60c1a0e121e03"
  },
  {
    "url": "assets/js/18.5afa6454.js",
    "revision": "f087ba7e4143146ad4161f48ff7bc93a"
  },
  {
    "url": "assets/js/19.91a965bc.js",
    "revision": "0a9c8d05b52d68200176bd12cbd4a04a"
  },
  {
    "url": "assets/js/20.e145a951.js",
    "revision": "a23059bb86b18f5afd0453a6cd23eff5"
  },
  {
    "url": "assets/js/21.c008cf05.js",
    "revision": "3b441913feb030c5dd9aaf82555554f3"
  },
  {
    "url": "assets/js/22.5c2950b0.js",
    "revision": "4f9e7b88d72051d665b8c993fdfd32e5"
  },
  {
    "url": "assets/js/23.2fc5e43a.js",
    "revision": "1ecc12e2ef2ced59b0cf69771403df36"
  },
  {
    "url": "assets/js/24.b96ea0ad.js",
    "revision": "f4d3ed0ea175610eb5a5773bb7a003af"
  },
  {
    "url": "assets/js/25.6fe93796.js",
    "revision": "2b3a16719063449d6f3b03a753b31c4d"
  },
  {
    "url": "assets/js/26.82d15ae7.js",
    "revision": "76c001304e09ca1cbd32fa9b45e658e3"
  },
  {
    "url": "assets/js/27.a39e6291.js",
    "revision": "76368f50da3096cc1a0c1850cc705ace"
  },
  {
    "url": "assets/js/28.9ab8d649.js",
    "revision": "bb65f2c729feff73d0ea6586e3a5416d"
  },
  {
    "url": "assets/js/29.f30cfe2e.js",
    "revision": "29ce1b9b0f5233cfa40c3e3d015d89c6"
  },
  {
    "url": "assets/js/3.d905a4a5.js",
    "revision": "ccd57d9e0e26bf40519765dd3d5a4c10"
  },
  {
    "url": "assets/js/30.c5865333.js",
    "revision": "9bfdd49e25ff39a0596e1ecaec973879"
  },
  {
    "url": "assets/js/31.72b2327c.js",
    "revision": "70d385ba848730872903785d49d4c398"
  },
  {
    "url": "assets/js/32.999728b3.js",
    "revision": "5f3f717c684550d0b4746f4aec5f10e5"
  },
  {
    "url": "assets/js/33.83f5b677.js",
    "revision": "2ef5bd0f4f3b4d191a1201e049eec1cf"
  },
  {
    "url": "assets/js/34.2f43962b.js",
    "revision": "ee507b8fd23146444f57ff190b721fa4"
  },
  {
    "url": "assets/js/35.e145b231.js",
    "revision": "f31962940b8bc9455eb0a5c1cd63b5b2"
  },
  {
    "url": "assets/js/36.1210408e.js",
    "revision": "0ca672e61a1b9289df8e5a2d4a2b64fe"
  },
  {
    "url": "assets/js/37.6fdcce78.js",
    "revision": "f0d9d26ea9e6d205fdff8adf3d65a0ee"
  },
  {
    "url": "assets/js/38.4575adec.js",
    "revision": "b81e8843b7cf2fcca15641f9d0e82b9b"
  },
  {
    "url": "assets/js/39.7d94fd10.js",
    "revision": "29625c9bff75c405b30c7a83f3136ca7"
  },
  {
    "url": "assets/js/4.a9cf025f.js",
    "revision": "b84ad0dae7d0ddc553eb98f157844fa7"
  },
  {
    "url": "assets/js/40.b3683243.js",
    "revision": "66963c40de28cfbdde02e5ee6d637ffe"
  },
  {
    "url": "assets/js/41.b93a0af8.js",
    "revision": "981b53e0f4937abe510fa2969a0ad73e"
  },
  {
    "url": "assets/js/42.181b0e19.js",
    "revision": "da6b138c7449dc0bad826e4127c06f98"
  },
  {
    "url": "assets/js/43.d5879593.js",
    "revision": "db3d70815c4304c94ec9602d8ecd4787"
  },
  {
    "url": "assets/js/44.23f00e29.js",
    "revision": "bfe237b41d7af891945d7efc07a50212"
  },
  {
    "url": "assets/js/45.00ac73ab.js",
    "revision": "81eb8b41b6dba640d1937d1f3380cc8d"
  },
  {
    "url": "assets/js/46.9ade1c20.js",
    "revision": "a63640f01aa5765c347488f5965f1ad6"
  },
  {
    "url": "assets/js/47.4105ddd6.js",
    "revision": "0b4d1d8e2b02a0f80b27ed1e50211afb"
  },
  {
    "url": "assets/js/48.89ad6053.js",
    "revision": "bb1f221517e64d3636d1a95d20d52320"
  },
  {
    "url": "assets/js/49.e8127a2d.js",
    "revision": "d141a1453db51b741788e6c9d6bfa8ec"
  },
  {
    "url": "assets/js/5.5badeb7e.js",
    "revision": "d38b4df06138d09e50a3eb8963a58d29"
  },
  {
    "url": "assets/js/50.ec44e507.js",
    "revision": "e8610d6cf5083977f0396e916eb06770"
  },
  {
    "url": "assets/js/51.8c27cc58.js",
    "revision": "6f21e9621835c31b42240fefb842e39f"
  },
  {
    "url": "assets/js/52.a6b11843.js",
    "revision": "1a8c113fac4f67bbd8e197e5229fa1bc"
  },
  {
    "url": "assets/js/53.5a466160.js",
    "revision": "d83636c96f485e41dcb68a7f2f039330"
  },
  {
    "url": "assets/js/54.f49c5a23.js",
    "revision": "db8b39ddf4da94f5519409e59dba4207"
  },
  {
    "url": "assets/js/55.54a900bc.js",
    "revision": "a4411182e985970101e24efc69a75e17"
  },
  {
    "url": "assets/js/56.ea0e82f6.js",
    "revision": "f9b186132611a7eb8db6f48a3a6fd21a"
  },
  {
    "url": "assets/js/57.16ad18db.js",
    "revision": "ab3e0f2585e83010e57f67d5bc50ff0c"
  },
  {
    "url": "assets/js/58.6949405d.js",
    "revision": "8c6fe429ebfdcef67742ec9978e07559"
  },
  {
    "url": "assets/js/59.5d1924a8.js",
    "revision": "95f2df2df05374aaf3c324f97adb82d1"
  },
  {
    "url": "assets/js/6.76b8ade4.js",
    "revision": "0b9261ff56a6d16db4959433ad175f0e"
  },
  {
    "url": "assets/js/60.3fe19819.js",
    "revision": "9794972f0605fb01916ce96f77c7cd15"
  },
  {
    "url": "assets/js/61.ff8b1f16.js",
    "revision": "09d3bd97b1d302d608316cbdbee1cf25"
  },
  {
    "url": "assets/js/62.16c8c49e.js",
    "revision": "702b58a21e1303948a6a083a6fa2237f"
  },
  {
    "url": "assets/js/7.e286b706.js",
    "revision": "f56e54c4b9717c74f28123106b2a2934"
  },
  {
    "url": "assets/js/8.3139eb11.js",
    "revision": "04d6e4292be5f5cabc94327aad99bf8d"
  },
  {
    "url": "assets/js/9.9b58996b.js",
    "revision": "dd4e1873c565a48fb1de97edde1dc8af"
  },
  {
    "url": "assets/js/app.b59b47d8.js",
    "revision": "6004404c683cda659fc9d45e39e1e970"
  },
  {
    "url": "categories/index.html",
    "revision": "b64e3ea61c0499c09db4179263254558"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "df0adb63644cc36c9eb934c04fb11e13"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "e5f9741e30f9b4c5f61bd30828c77d24"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "b44b696aa90f855a0ce37943e77ea499"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "04ba4dfd938d73d7ef07590d0d50cd00"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a739bab06f85492692a05022a97c92bb"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "00abfd43ac727bf18ad64f6d86a815f1"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "c4272a5430ce4dedcc1986fb56ade06d"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "e1fda7997f748bb749abbf349387fdc3"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "7559868dca926428987f27613e1e701e"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "7fc8356b9c7f2b38da1552b5266615f4"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "ce0eae8e6b06d06f49bca02c889d37b4"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "c3d800f132718c2da558e0733e280fee"
  },
  {
    "url": "devops/gitlab/install.html",
    "revision": "0e1ac90cb82aafb4fd23d57b698f2a09"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "594cfcb42ea5345f326be16be32b78a9"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "3089e455c25f9a8ad51cdfa3e0efa560"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "60c84bb49d9154a2fd653691a5bd7fe6"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "a379b01d70079f92b57d0eaa4217a869"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "ed738da79d8987eb7667ba84cdd5758a"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "6bdd22c12c5e43980c3caf4d522254cd"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "b55234f4da5e283f8950b51043e20e16"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "1efa88cfec07653bcf70ee82431fd2be"
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
    "revision": "f54b6bdf707c1b10019b277469193a0b"
  },
  {
    "url": "java/index.html",
    "revision": "b6ba88b52605c8ab1f545f6f22360cd8"
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
    "revision": "83e3d1adf9d9f5ce9b20cd3ae6cd618a"
  },
  {
    "url": "linux/index.html",
    "revision": "df4de5e63379fadac2213ea0152648cd"
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
    "revision": "5711e4232dbe7ab02c57944eeaf6fff1"
  },
  {
    "url": "mysql/mysqlinstall.html",
    "revision": "3a265748219b28ab74d175ce4b14db38"
  },
  {
    "url": "node/index.html",
    "revision": "5a94e36d9c39f59a51b8c35c9d6db896"
  },
  {
    "url": "node/nohup.html",
    "revision": "1cb7ffbf56060e5d78faaa32f6026c02"
  },
  {
    "url": "node/pm2.html",
    "revision": "08b5d325a413b076380258e666f25f10"
  },
  {
    "url": "node/tools.html",
    "revision": "6b8b27ebf4a8bfc34812f877e635613f"
  },
  {
    "url": "nuxt/index.html",
    "revision": "2f474052c40feeef4486509bd2ef6490"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "3cb1e0e5acfe840592a1bf51dfeed930"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "3c8e3d0b267fe470a08fd6b8743bd4fb"
  },
  {
    "url": "others/about.html",
    "revision": "21327b93864451c8a8c0106c4766860f"
  },
  {
    "url": "others/blog.html",
    "revision": "d516a4661a43a8d4ca3dde7239ed6f15"
  },
  {
    "url": "others/firends.html",
    "revision": "ddc94f26673d3c5351d4b10e6821f171"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "cbe1e18fcdc24455f1639de214a5dd47"
  },
  {
    "url": "others/other/20220622.html",
    "revision": "87c9538104e6cd3bfe27cc509bec671e"
  },
  {
    "url": "others/other/20220623.html",
    "revision": "4390b715dbc336a582d749da489436d6"
  },
  {
    "url": "others/other/index.html",
    "revision": "948e6ab6afa10a209218ef7dfec57dc8"
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
    "revision": "a4f75e5472e8f518f4aa842931e47298"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "11e06dfc04ffa4412072f86ed012b73d"
  },
  {
    "url": "tag/index.html",
    "revision": "cf7459e936d00e5b035763c6b788c37d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a2082e88f3276e354327ea8f4df8da91"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "9b44b47b134e4978178c0aa3c07df727"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "0901f5e4ffcd144a72d501d5bd787e8b"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "025633df5e78b840b89565d13a4bf075"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "ca9bd888ba477542c0a5fc7d663a9481"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "982245a3c9eadd648118d14ee8858132"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "4e2e7cef3eb19cfb7dcfeda6cb08bfea"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "43d0dd5c883a0bb8aa212e298d57a284"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "8a92ceb2693fc7cb5286f9075f1e6378"
  },
  {
    "url": "timeline/index.html",
    "revision": "f1cf76d26e4ecfec96640a5c70d38811"
  },
  {
    "url": "vue/index.html",
    "revision": "bb2f560d97e9f041af9f111170bd5056"
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
