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
    "revision": "c707e78c3904bfdfb234c8a9ac7c3033"
  },
  {
    "url": "assets/css/0.styles.1bd76b84.css",
    "revision": "eb2add9f9c5349eef1ee641db27cb951"
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
    "url": "assets/js/1.d6ce6357.js",
    "revision": "4c5e6f3607a610dc66000e88c10fc2db"
  },
  {
    "url": "assets/js/10.dd0433a6.js",
    "revision": "bae2878a66d2dcd8f06447b45d1bf0d2"
  },
  {
    "url": "assets/js/11.180551c0.js",
    "revision": "3306697fe56daf2eb9b422a284029553"
  },
  {
    "url": "assets/js/12.f853208f.js",
    "revision": "a98f5fec3eec17067876a74aea78a124"
  },
  {
    "url": "assets/js/13.ceb467e8.js",
    "revision": "5f06a95e1891596424bf573751397df8"
  },
  {
    "url": "assets/js/14.6168bedf.js",
    "revision": "5964df90c1a76f75c2d692c68c8764a6"
  },
  {
    "url": "assets/js/15.861007ca.js",
    "revision": "0c4c2baeff5326c0dc28b3cf10f2d7ef"
  },
  {
    "url": "assets/js/16.adddbca9.js",
    "revision": "f9a54f5445b8cc590e72c5a21946baba"
  },
  {
    "url": "assets/js/17.0536d5e3.js",
    "revision": "491bd0ca1d4b7026fe7a2c9d1ad6877d"
  },
  {
    "url": "assets/js/18.f4968b78.js",
    "revision": "4a38fdc4958dfd25b164868cba729bfb"
  },
  {
    "url": "assets/js/19.71e11142.js",
    "revision": "ffc3237abf3c6ba46ed8ea03c5c36eaf"
  },
  {
    "url": "assets/js/2.f9c16802.js",
    "revision": "eb34cc1f8eba36ddb56ff8f10883533d"
  },
  {
    "url": "assets/js/20.80508830.js",
    "revision": "a2f5bbbf797bd6a1d88f3879dd2e5431"
  },
  {
    "url": "assets/js/21.700ff596.js",
    "revision": "b576a4e50a57306f559c1265cba52f50"
  },
  {
    "url": "assets/js/22.f8bd3775.js",
    "revision": "cd279ed7eea2f7af21ae132fa6c6ffb7"
  },
  {
    "url": "assets/js/23.7a354598.js",
    "revision": "11e4f1a66292f8b1f2d0236d88f02953"
  },
  {
    "url": "assets/js/24.262a206b.js",
    "revision": "de6c675dbfd18c682f5be06cd4331ab9"
  },
  {
    "url": "assets/js/25.00fec012.js",
    "revision": "fb07871ed656c84d02d759e19c04f57a"
  },
  {
    "url": "assets/js/26.5d0e1eb8.js",
    "revision": "208c193a478d866536b38aefc92f5950"
  },
  {
    "url": "assets/js/27.d008d50c.js",
    "revision": "d92d2a882a35365a551c609f088521bd"
  },
  {
    "url": "assets/js/28.a9448061.js",
    "revision": "c36c9b80723d8e56e8ff9a041e00b0bf"
  },
  {
    "url": "assets/js/29.ee515fe5.js",
    "revision": "91201f5cd3348654e0e507883eda70f7"
  },
  {
    "url": "assets/js/30.90a18b7c.js",
    "revision": "7b05128c42f4696584b2819cd50d4439"
  },
  {
    "url": "assets/js/31.2645ac11.js",
    "revision": "16c1476e8b11a7a3c35a0e526a3a68a2"
  },
  {
    "url": "assets/js/32.9bda6896.js",
    "revision": "d91bc3a0da490407dcefdbf5c43dcffd"
  },
  {
    "url": "assets/js/33.1609b312.js",
    "revision": "977a0414aa291a2ef594e9951dbaac81"
  },
  {
    "url": "assets/js/34.8cce82e1.js",
    "revision": "eefe3c5aed1f51cff815671d166d864a"
  },
  {
    "url": "assets/js/35.ac079af8.js",
    "revision": "182a76c23d6a1f24915bfa3c15a9b2fd"
  },
  {
    "url": "assets/js/36.09a177ec.js",
    "revision": "3a4344a6843e8bf79371e86992e0001b"
  },
  {
    "url": "assets/js/37.75174ed4.js",
    "revision": "5260fe16e66c5b1ee8dbe7fb019f0dec"
  },
  {
    "url": "assets/js/38.09b6671b.js",
    "revision": "fc538f6c6ef2024bbf24e17e0e2e1ad6"
  },
  {
    "url": "assets/js/39.167bd5c8.js",
    "revision": "ceb402130b7e17d154bec7d867b991e5"
  },
  {
    "url": "assets/js/4.d9fec408.js",
    "revision": "84bb9e3906ee9ec430f1cc7d1bda784e"
  },
  {
    "url": "assets/js/40.c157bb83.js",
    "revision": "34e7487da2b04f78a0f5ca0da49445ab"
  },
  {
    "url": "assets/js/41.4c01ff5c.js",
    "revision": "3a4a7cad69f65dde4ebf44739fbefb62"
  },
  {
    "url": "assets/js/42.97948371.js",
    "revision": "67a1e9069814bee58f14c774a3370b33"
  },
  {
    "url": "assets/js/5.62d51222.js",
    "revision": "b649ab237ec74f46f225d703d8f2a82b"
  },
  {
    "url": "assets/js/6.76d743cb.js",
    "revision": "3080e59040952cadfc005e2e4f8f8215"
  },
  {
    "url": "assets/js/7.794cb8ce.js",
    "revision": "df0f9127225b7bf3e5ff1f12a3233071"
  },
  {
    "url": "assets/js/8.4dd1c88e.js",
    "revision": "ceea9e99740f26262775513a94d872e4"
  },
  {
    "url": "assets/js/9.60cbec96.js",
    "revision": "7bf7f161379faf87030f4527d294ce50"
  },
  {
    "url": "assets/js/app.f59c034d.js",
    "revision": "18595cfa3331c3f1e9541698b3c152c5"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "e854f8b2366eb0f4242a5e321a7c8009"
  },
  {
    "url": "categories/index.html",
    "revision": "a22eb65a24aafb21a3fedf40b04b671a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ffdc8e19241fd33d8c1503601f7d2743"
  },
  {
    "url": "categories/nginx/index.html",
    "revision": "c692417e2d9208974cebf35890be5a22"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "ff09f5f17c327033612d5cff189d9539"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "858c6807db2992976ed9f1b1b8a6281a"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "7b738054c66a1c47f633484222839a79"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "cd2090a8ee1f71bd71b6f10483247f83"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "5e09e0afc95dc09e59137c5768f38829"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "f789831fb7c23ed3b51095dc3186eb78"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "4ba33948eff0a573f4011c775a8469f9"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "f32624f2be35acf5d8de3044233c04b4"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "5d791b947460f8292bd55a66b0f9024e"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "2c2bbbc061b52faad2eb2f6bd161f40e"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "8e98214031f11e6e8d45ce3898e4aa63"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "5781fabcc3fa6811c0460fd2a522fcae"
  },
  {
    "url": "devops/nginx/kill.html",
    "revision": "11f64029e848e597d76957cdf57f4c67"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "84a2d0200d9a41b67505632633d11197"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "e1429e8eb0c8f56307306309eddb85c4"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "5d8bc51b33de27745733ca957e4ba029"
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
    "revision": "f5a66add0fb591e9cb86b36bbcda50f3"
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
    "revision": "793f97f7f0fd4dc30e612552ad6c34ed"
  },
  {
    "url": "linux/nohup.html",
    "revision": "672b373e8f19526b377156599444e3a3"
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
    "revision": "eda8662087781eec0763f16b9af0b48e"
  },
  {
    "url": "node/index.html",
    "revision": "43e051d32680680b29623ac64f83c3df"
  },
  {
    "url": "node/pm2.html",
    "revision": "5b9a49dbcebb5c950e7ec097e707cf44"
  },
  {
    "url": "node/tools.html",
    "revision": "45d143fd4df2d18b46799b36d7746de2"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "1b850fefda1f1607252914e8fff60f6a"
  },
  {
    "url": "nuxt/index.html",
    "revision": "f2946a84008251dddba6dccabec15e27"
  },
  {
    "url": "others/20220302.html",
    "revision": "3ced7802e7976910f75167332a75d3d8"
  },
  {
    "url": "others/20220622.html",
    "revision": "a41de9f0a513b6c1d770ba7a4478be30"
  },
  {
    "url": "others/20220623.html",
    "revision": "ed75dbeb887c33e356ad0302ac3727a6"
  },
  {
    "url": "others/algolia.html",
    "revision": "866cf059aa51a41c0f9a2259c0b1dd51"
  },
  {
    "url": "others/blog.html",
    "revision": "b1ef4eb744572192b661dce04d026dee"
  },
  {
    "url": "others/deploy.html",
    "revision": "8c7df306cbb378d9c50af2e27421b6bd"
  },
  {
    "url": "others/firends.html",
    "revision": "9aa70486f402ed626b3634aa02c1e5db"
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
    "url": "tag/Algolia/index.html",
    "revision": "66476cd0e8e557d3e8fe81bafefac2f6"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c1b4730605423a8a40add4312281342c"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "2aee0097f0ca11006f9044644258a52a"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "34cbff9be2ea024e2b47b2fad80fc1c6"
  },
  {
    "url": "tag/index.html",
    "revision": "b9fbf7b401e049f8f41447a87b58cd95"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "cb8a74841375b1466a6f5e097a41e9c1"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "0cb96d6641e78a405b959621ce1471b0"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "955d21fe76a22913c09f127914c443b8"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "320422de21df4d05755727a3be1d5372"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "b6040b660958b172ce19b6d1869a4f9e"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "fd7033fe4be28d842b3c921296727e00"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "632f4175202fbcd9bfc8d1711b905a11"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e53db2ce8a6aa26dce980782ab4949fd"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f1255f1fc303acc68e6e24d0d0d2f6b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c40be479d8269ee38092ed186af24fa"
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
