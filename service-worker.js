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
    "revision": "e1d3d832f18ad5fcf4992d6bb9ab52a5"
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
    "url": "assets/js/23.ff1eb5cd.js",
    "revision": "8ed23ecafc85568b28d1070dd44e7d26"
  },
  {
    "url": "assets/js/24.012e2ff9.js",
    "revision": "333525c08e25d504ca3d1d312288c5a9"
  },
  {
    "url": "assets/js/25.8c648f71.js",
    "revision": "ad021c56947b5fc3b422936edd64d5f6"
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
    "url": "assets/js/29.953fba96.js",
    "revision": "9da3e784566473589576d52c2b7d269f"
  },
  {
    "url": "assets/js/3.075f1346.js",
    "revision": "137c0f76be06e4e1492638bd0158e926"
  },
  {
    "url": "assets/js/30.73118077.js",
    "revision": "1179cc3ba51b21245a0367d98f9ce492"
  },
  {
    "url": "assets/js/31.2b32dd53.js",
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
    "url": "assets/js/37.30b7898b.js",
    "revision": "df70d5be79198879aa311afcd2c44c04"
  },
  {
    "url": "assets/js/38.0939b7ec.js",
    "revision": "44ceb272da6554f74a823d76d106a5f8"
  },
  {
    "url": "assets/js/39.ea04d2dc.js",
    "revision": "402e82ec93ba210504b4ff1aad771cb1"
  },
  {
    "url": "assets/js/4.c1ff9b7a.js",
    "revision": "b1859319c2e5023a1c1f9123212e8219"
  },
  {
    "url": "assets/js/40.c2934751.js",
    "revision": "0e3769bad4641dd7cf2d67d000790d1d"
  },
  {
    "url": "assets/js/41.1a47b558.js",
    "revision": "c5034c12ee1a648b9d2211acb2f14ba0"
  },
  {
    "url": "assets/js/42.99edf3ff.js",
    "revision": "e972e32cc4d43da8d342d2077bbaf378"
  },
  {
    "url": "assets/js/43.d50a59dc.js",
    "revision": "5575199beca175a068e2c76a9b1b4472"
  },
  {
    "url": "assets/js/44.eb540f18.js",
    "revision": "e3c81d293d43c70c96636b7ff5d79aaa"
  },
  {
    "url": "assets/js/45.fcb84f00.js",
    "revision": "09c558383dbf356acc4e31346268a869"
  },
  {
    "url": "assets/js/46.51d52b6a.js",
    "revision": "7ab306bb9798d241c5438c4275da3b57"
  },
  {
    "url": "assets/js/47.76fcf240.js",
    "revision": "88795d026bca70aa01aec248bd873816"
  },
  {
    "url": "assets/js/48.56829848.js",
    "revision": "aaf00748700ca47de20207483d4670e3"
  },
  {
    "url": "assets/js/49.df37b2a4.js",
    "revision": "59b63d2c66c0a3c3aef632b39e24a122"
  },
  {
    "url": "assets/js/5.1e803a1d.js",
    "revision": "10394c967483418508a88566cf37e456"
  },
  {
    "url": "assets/js/50.502e46e0.js",
    "revision": "3d7745dad4a59b7e947dae72328b3a0c"
  },
  {
    "url": "assets/js/51.60aded7e.js",
    "revision": "5d076917c68195b0672e8f03a2b27602"
  },
  {
    "url": "assets/js/52.8ef5419f.js",
    "revision": "237aa22ae34b1c660d74bf3c83a503ea"
  },
  {
    "url": "assets/js/53.0a449245.js",
    "revision": "e6dfd56c226b4fa2eee3db729f7990d9"
  },
  {
    "url": "assets/js/54.202bc635.js",
    "revision": "06cd730ded4632f0efa4ee628c7d0870"
  },
  {
    "url": "assets/js/55.504c82b2.js",
    "revision": "586380005df8b4a8e56da76d326b323c"
  },
  {
    "url": "assets/js/56.879af359.js",
    "revision": "4e3a921713a88c22f53937bda82d95c2"
  },
  {
    "url": "assets/js/57.8d22d7f3.js",
    "revision": "f6342742effbb6f249b7c9a2be3e97e0"
  },
  {
    "url": "assets/js/58.0a7c1ad5.js",
    "revision": "e020826bfb4cbbe3bdd347699a371797"
  },
  {
    "url": "assets/js/59.c0cf217b.js",
    "revision": "0acf37f9024588e3f11105b1edc1629c"
  },
  {
    "url": "assets/js/6.2dcb73d9.js",
    "revision": "90bd762acc6c3fd63b756574120c41f0"
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
    "url": "assets/js/app.bbe7e0f4.js",
    "revision": "ac8d3cd6fe5a0fd96b2d64f4db2a5204"
  },
  {
    "url": "categories/index.html",
    "revision": "ff1c52a231441ffb09ab111692a13b96"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "75a80095e871fa0e3941e893cd129be2"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "05aff66e511f1fbd962d48e8afa7b0ea"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "2c7d59b83806d759e99ba480bb8e897d"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "332d3259e4026b434a488e184c14c3da"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1be6edbb929daad9e1d892dea32e6bb3"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "b718b160332399ed841743b4f7face38"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "4b7722a8ab9939ac2d77f09227274f4a"
  },
  {
    "url": "categories/网络资源/index.html",
    "revision": "d7f6411effde4751c54d09394fded326"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "82b15af0738bfbb5f05033048227f206"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "f7f17657569cbbdadbd6208b9770ad97"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "10fd42c28e9ab008770d0e4359813922"
  },
  {
    "url": "categories/随笔Essay/index.html",
    "revision": "ebee862c25c35231f21c808cdeaee484"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "d39a1c5bd7903353f6cd7c3544bf4cad"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "a8c5781ab7bf091f8e65ec72832eb440"
  },
  {
    "url": "devops/gitlab/install.html",
    "revision": "0e02880177d2638867f326b2f61ac40e"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "6401a5507965a6d47171f03d427c38dd"
  },
  {
    "url": "devops/nginx/nginxcache.html",
    "revision": "02e67e282ee61b009830f0530cd1de97"
  },
  {
    "url": "devops/nginx/nginxgzip.html",
    "revision": "b6a52367295c6a36dfed4d5faac28d64"
  },
  {
    "url": "devops/nginx/nginxinstall.html",
    "revision": "5f66185fa025f52cfd3afee60307ce19"
  },
  {
    "url": "devops/nginx/nginxlocation.html",
    "revision": "eee0f77349b71f7827dd91ee12e15e52"
  },
  {
    "url": "devops/nginx/nginxlog.html",
    "revision": "285310384d692adc0393de0e8320ddb5"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "9746fdaf13d4d491ea7157975faa6e15"
  },
  {
    "url": "devops/redis/install.html",
    "revision": "3842662ee272958dd7a41bf1b7d45283"
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
    "revision": "34e81757e9ed5ae0e4a369c2d48032a6"
  },
  {
    "url": "java/index.html",
    "revision": "fc247ecf533672bc677ebaa89956b098"
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
    "revision": "6167509f515743c95e0657d26813a151"
  },
  {
    "url": "node/nohup.html",
    "revision": "d4f92d97221a48d5d7facb00c7abd52d"
  },
  {
    "url": "node/pm2.html",
    "revision": "b5179b41bb03d71470dca5f1fd0d551d"
  },
  {
    "url": "node/tools.html",
    "revision": "e9b338ad1e1d2c8bfdb9ee751e0ca75b"
  },
  {
    "url": "nuxt/index.html",
    "revision": "f8d0effc14c8aef9f977c35e04333fdf"
  },
  {
    "url": "nuxt/nuxtdeploy.html",
    "revision": "1d0891699c44e54850ffcc284f3fca12"
  },
  {
    "url": "nuxt/nuxtinfo.html",
    "revision": "ce8368f9d995e584538272b6a0249dd2"
  },
  {
    "url": "others/2022/20220215.html",
    "revision": "4037e8c222ecde25f36f04cb49bb1dc2"
  },
  {
    "url": "others/2022/index.html",
    "revision": "4edd76eb210ea3ac3a779a2061123ab8"
  },
  {
    "url": "others/about.html",
    "revision": "7d0fe8495ae6837172819726e38915f6"
  },
  {
    "url": "others/firends.html",
    "revision": "9d2db27988fda90263aa1f906bc5c434"
  },
  {
    "url": "others/linux/basecommand.html",
    "revision": "dcc221c064d1399388318eaddf14c5ba"
  },
  {
    "url": "others/linux/index.html",
    "revision": "ecfe9192ffe1838b1d6d92b72513442b"
  },
  {
    "url": "others/mysql/index.html",
    "revision": "e98db275ecf7bf5c519a0f6e1566046c"
  },
  {
    "url": "others/mysql/mysqlinstall.html",
    "revision": "e185e264a9353143f15e91bd24c33c77"
  },
  {
    "url": "others/other/20220302.html",
    "revision": "e5485d5d46342a5551c931de548d3d42"
  },
  {
    "url": "others/other/index.html",
    "revision": "60d738e3715d28e4cb0decc23eeefee7"
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
    "revision": "b97b29f0819883315e257bb6caa8e100"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "01dd351637180c20e631d1ac7ec32d31"
  },
  {
    "url": "tag/index.html",
    "revision": "8a703ff2b9af73ef205b157fd3f5be6f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "37475808fa892524923a5813b515821b"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "f976fe561aa0b91ab6f782b4434fa16d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "6a4f7cae9fa96cfc6b77ed833470de77"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "3d1657470a3125404b6a8028fe6969fd"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "ffde6ef14d1b9caba6e28420bebd86f0"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "1b75a24aab73a4a8ffacf51bcfe51a6c"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "1e89d6fc107fe8d16c6e35232e10cffe"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "158eb1dcef3ba55b9e5e3a5c5aba8b1f"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "b7182a3d2deea1de5c71a506453bfc74"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "1aa697883c766fc5c7a090726c085acf"
  },
  {
    "url": "tag/网络资源链接/index.html",
    "revision": "cc20913f32d0360cd419196fd910e6e8"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "63cea25b273d8ee656b1a0978c271646"
  },
  {
    "url": "timeline/index.html",
    "revision": "e29196514e989c25f568375717b3e99b"
  },
  {
    "url": "vue/index.html",
    "revision": "1ee19b1a7d89b12ab0c07839e7189884"
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
