if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const d=e=>s(e,r),c={module:{uri:r},exports:a,require:d};i[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(l(...e),a)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0dd6c201852db20e2715172e75c0a9d5"},{url:"article/index.html",revision:"aa3ed257dcd1b7e60191c07ff641feb0"},{url:"assets/404.2a48a87a.js",revision:null},{url:"assets/404.html.1077fbb4.js",revision:null},{url:"assets/404.html.459faed1.js",revision:null},{url:"assets/algoliaSearch.html.78eee28d.js",revision:null},{url:"assets/algoliaSearch.html.8abfceeb.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/bg1.209fc7c3.js",revision:null},{url:"assets/bg1.fcb7bcd4.jpg",revision:null},{url:"assets/bg2.54e00d96.js",revision:null},{url:"assets/bg2.58810d83.jpg",revision:null},{url:"assets/bg3.415b52e9.jpg",revision:null},{url:"assets/bg3.8e18e102.js",revision:null},{url:"assets/bg4.82ef72dd.jpg",revision:null},{url:"assets/bg4.f47177d1.js",revision:null},{url:"assets/bg5.3c52e119.js",revision:null},{url:"assets/bg5.bc422601.jpg",revision:null},{url:"assets/bg6.0888bac7.js",revision:null},{url:"assets/bg6.4223ab9c.jpg",revision:null},{url:"assets/blogDocs.html.91425f13.js",revision:null},{url:"assets/blogDocs.html.ff3abd28.js",revision:null},{url:"assets/Category.52b29090.js",revision:null},{url:"assets/firends.html.ad6ba703.js",revision:null},{url:"assets/firends.html.cf0d07c2.js",revision:null},{url:"assets/giscus.15440425.js",revision:null},{url:"assets/githubPages.html.059fbbdf.js",revision:null},{url:"assets/githubPages.html.132d28f7.js",revision:null},{url:"assets/hotlinking.html.03610d2b.js",revision:null},{url:"assets/hotlinking.html.71b0dd49.js",revision:null},{url:"assets/Icon.635999a6.js",revision:null},{url:"assets/iconfont.0ae9f5e1.svg",revision:null},{url:"assets/iconfont.f8ff8401.svg",revision:null},{url:"assets/imageHost.html.5709a060.js",revision:null},{url:"assets/imageHost.html.fae61b79.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.00003c62.js",revision:null},{url:"assets/index.html.0355b818.js",revision:null},{url:"assets/index.html.09163f6e.js",revision:null},{url:"assets/index.html.0b0a13a2.js",revision:null},{url:"assets/index.html.127c55a1.js",revision:null},{url:"assets/index.html.12a34abf.js",revision:null},{url:"assets/index.html.27b0cb17.js",revision:null},{url:"assets/index.html.27da63ba.js",revision:null},{url:"assets/index.html.2a57be01.js",revision:null},{url:"assets/index.html.2f78f615.js",revision:null},{url:"assets/index.html.37b4f274.js",revision:null},{url:"assets/index.html.44cd5f48.js",revision:null},{url:"assets/index.html.44d22b8b.js",revision:null},{url:"assets/index.html.4679aa53.js",revision:null},{url:"assets/index.html.4d02bb1c.js",revision:null},{url:"assets/index.html.53f98175.js",revision:null},{url:"assets/index.html.59b354f6.js",revision:null},{url:"assets/index.html.59c3c2e1.js",revision:null},{url:"assets/index.html.5d06ceb3.js",revision:null},{url:"assets/index.html.60ead0fc.js",revision:null},{url:"assets/index.html.7e1df17c.js",revision:null},{url:"assets/index.html.8b6b6b4e.js",revision:null},{url:"assets/index.html.98ea0f8d.js",revision:null},{url:"assets/index.html.99ed5b7b.js",revision:null},{url:"assets/index.html.a2f7220e.js",revision:null},{url:"assets/index.html.af62920e.js",revision:null},{url:"assets/index.html.b397647d.js",revision:null},{url:"assets/index.html.bacdaeec.js",revision:null},{url:"assets/index.html.be0bca68.js",revision:null},{url:"assets/index.html.c8db1b6a.js",revision:null},{url:"assets/index.html.dcc5f771.js",revision:null},{url:"assets/index.html.ec257ab0.js",revision:null},{url:"assets/index.html.ecb9ca7f.js",revision:null},{url:"assets/index.html.f6c09605.js",revision:null},{url:"assets/internetResource.html.01878b26.js",revision:null},{url:"assets/internetResource.html.74240eb4.js",revision:null},{url:"assets/Layout.9d70d380.js",revision:null},{url:"assets/Layout.9f1fea6a.js",revision:null},{url:"assets/Pagination.8bc1ef79.js",revision:null},{url:"assets/sakura.e2074011.png",revision:null},{url:"assets/style.5d91ffde.css",revision:null},{url:"assets/Tag.a6fcfdc7.js",revision:null},{url:"assets/Timeline.e13ae4eb.js",revision:null},{url:"category/index.html",revision:"d0c4b5b4f278ae8f8e959d97f94ba955"},{url:"category/java/index.html",revision:"945091163c4b1595c40da11a82a5bb68"},{url:"category/其他/index.html",revision:"8f7b67f96b1ccdabda8eca3ac854fc51"},{url:"category/图床/index.html",revision:"a15585791c8644fada78fc42cdc38535"},{url:"category/盗链/index.html",revision:"bb705506299b52e4d9aa8227f22c9f85"},{url:"category/网络资源/index.html",revision:"13ecc3c05b81f5d38fa75ba73a23eb16"},{url:"category/运维/index.html",revision:"59b09f93100b76bb06d14b9b49c0c0d3"},{url:"images/184.png",revision:"4a53cf302746206c34f7def829a2b97a"},{url:"images/525.png",revision:"80ddb277d0fefa8a211aec6e47cf0adf"},{url:"images/bg.gif",revision:"c8f26794a0ee092e62abbd0f99857064"},{url:"images/blue.png",revision:"275ba7773ea73e26b8c8eb9401abad1f"},{url:"images/index/bg1.jpg",revision:"5ad0201fda8eae83f8e01e96340d2ff0"},{url:"images/index/bg2.jpg",revision:"d5bdc1d874720fa0c63b4013a429767a"},{url:"images/index/bg3.jpg",revision:"22fa8f88a23088bce0900fa25ddc35ce"},{url:"images/index/bg4.jpg",revision:"4ae3358619d74cccfa403461d44fb14c"},{url:"images/index/bg5.jpg",revision:"eac41ddc9329ac632ef5cec131413bbf"},{url:"images/index/bg6.jpg",revision:"b1b9e5a87af4ae07bbffce5c1f11f719"},{url:"images/logo.png",revision:"d3de1be36bfbc01bd7bdc26dfa3c089f"},{url:"img/customer_address.png",revision:"291a16faafde101077a5e8675dfb119c"},{url:"img/customer_product.png",revision:"72586f34f1dc090b19f87df6658a220f"},{url:"img/demo.png",revision:"5881bd39d6b651bc011291ff2dcd2b34"},{url:"img/Employee.jpg",revision:"169348d7cd53c7e2a447960245539764"},{url:"img/image-20191229173422328.png",revision:"fca17294c7a4dc0f70936a2922960198"},{url:"img/image-20191229173455149.png",revision:"7205333733eaf8afc64b9e231fd323d5"},{url:"img/image-20191229173518926.png",revision:"39ef36b138932b50caeeb4139d0365b5"},{url:"img/image-20191229173539838.png",revision:"d515fa6446c0e164ce5226b3bf05552c"},{url:"img/image-20191229173554296.png",revision:"aee108424989056d9c408d49462c210c"},{url:"img/image-20200207194617620.png",revision:"c937eae097f8518c3bf735d23fd396ab"},{url:"img/image-20200207234545691.png",revision:"d83f6a7c2984cdca077d6980c9383309"},{url:"img/image-20200208180417291.png",revision:"3f069fcd6bffb0e38d05c86691f1eb64"},{url:"img/image-20200208182322313.png",revision:"4f886137d5228513cdebd713f14e688d"},{url:"img/image-20200208212930857.png",revision:"12c1c4bd761d51da5c54b9f1e27370a2"},{url:"img/image-20200210143039168.png",revision:"b3aed680751693a41a9d463f5090b6d3"},{url:"img/image-20200210144457478.png",revision:"9a196899c780ad59af83fd7bc1f8ec87"},{url:"img/image-20200211130313251.png",revision:"e040b079a7f9437e6b3d582795009140"},{url:"img/image-20200214110924010.png",revision:"22e10b7ce0bd27bb68d253fa4e30b032"},{url:"img/image-20200214215446638.png",revision:"7a03ad6ee912325a302b3918b7ff4a87"},{url:"img/image-20200215220322641.png",revision:"d4b221990dd6bcab88c5d10897a9a459"},{url:"img/image-20200215225227616.png",revision:"bac4c516197198ae92b641620ff800ed"},{url:"img/image-20200401214509176.png",revision:"73c7aeb248046a17fab34a7eb30ffe22"},{url:"img/image-20200401222951963.png",revision:"31c4312d547a8d08a91eb25eabe4a77a"},{url:"img/image-20200413225341516.png",revision:"624233205e93d61af9d03c3cd8ed221e"},{url:"img/image-20200426233931693.png",revision:"5cceb9401d819a9892e287df616fe3af"},{url:"img/image-20200429111324770.png",revision:"2689d1f8699a85d9d338b0d8816e6634"},{url:"img/image-20200429165544151.png",revision:"b9d9c2f9b4c0186bdefd16450f16dc45"},{url:"img/image-20200429185050396.png",revision:"a24effda856f43acbe34d518b18a81fb"},{url:"img/image-20200429204239868.png",revision:"3dc6c6ede1194f4d5ba141dea9d981e9"},{url:"img/image-20200429204700956.png",revision:"abc263795e405f0627ebf6fdd9a743d6"},{url:"img/image-20200429211132185.png",revision:"38f3364b456bbd073dfba9c6191f8100"},{url:"img/image-20200430220155371.png",revision:"24b67b94d377da25555f71798d2afcbb"},{url:"img/jdk源码解析.png",revision:"e2e94fb6e679c79ff8ed157cb562bafb"},{url:"img/node.png",revision:"92c2467f225a40a5c8062e40b7c95787"},{url:"img/open-close.png",revision:"b1bc43f8899d6ac68ff39cc38b6ea204"},{url:"img/中介者模式.png",revision:"9d8a5c557acc5dbaf7e702d4637cc952"},{url:"img/享元模式.png",revision:"f9c1330e1d7561f6eb184adfe72e6f68"},{url:"img/依赖倒转原则.png",revision:"0103ffbb0f055b7b5035d5b8adfe2cce"},{url:"img/依赖倒转原则改进.png",revision:"81576e42df1f73fd5cd0ed725b6e70e9"},{url:"img/俄罗斯方块.jpeg",revision:"0b011b051d6929b1c1363a2b72562177"},{url:"img/原型模式.png",revision:"01169043b75362bf946f779cc79a61f1"},{url:"img/原型模式1.png",revision:"72b3a3ced65b0fdd0a3b673b9c7fe406"},{url:"img/原型模式2.png",revision:"ec1592f99bf2059d04dd3d4057151531"},{url:"img/原型模式3.png",revision:"d46ebc663214dfd3913e139dec2612ca"},{url:"img/合成复用原则.png",revision:"862719a05de20d96246e46a9c2619e06"},{url:"img/合成复用原则1.png",revision:"0e25cfc80431dd8b201719ce28e2b30d"},{url:"img/命令模式.png",revision:"30d45ba8d1d3c0a74cce9cd725e2a400"},{url:"img/外观模式-jdk源码解析.png",revision:"7cefe2f5c6de4bcfa1c321b617efa8fa"},{url:"img/外观模式.png",revision:"58f74d1e5f46d7c460e2786b8adafaad"},{url:"img/外观模式引入.jpg",revision:"cbc8f8ea5a4f70a753b5a8d2c51f4938"},{url:"img/对象适配器模式.png",revision:"572d096750aa930f022f11d81c887513"},{url:"img/工厂方法模式.png",revision:"00f971d4979a52a5386099252551d380"},{url:"img/工厂设计模式引入.png",revision:"b35530ce2796ec528ed02c0ea9389599"},{url:"img/建造者模式.png",revision:"0c333740e293ac426f48c38ff4035027"},{url:"img/建造者模式1.png",revision:"e2ba2bae8dc3cc15f8cf40341bfef028"},{url:"img/抽象工厂模式.png",revision:"4d7ecac3ea269f8a1d5178519956f216"},{url:"img/接口隔离原则.png",revision:"5b2787bdf1f246d73f4419d6243b5937"},{url:"img/接口隔离原则1.png",revision:"f416a80c7f4c755fc5ae8aab477d08f2"},{url:"img/桥接模式.png",revision:"4f894cc7617ee07f5a81b036add64459"},{url:"img/模板方法模式.png",revision:"16fb86c30ebb4ebbd0c3a1937e9ded89"},{url:"img/正方形不是长方形.png",revision:"63f87499bc28a509c30ad2304615f7c9"},{url:"img/正方形不是长方形改进.png",revision:"0287aaffe963b365408a7bbab4ed003a"},{url:"img/状态模式.png",revision:"29e0ec8519b692c6b71e04a782491de9"},{url:"img/状态模式前.png",revision:"f99a1caf3b7cc7a116c9ce28ea8205da"},{url:"img/白箱备忘录模式.png",revision:"38b4cfb6dc213f3b46e8c7ba9058fc7c"},{url:"img/策略模式.png",revision:"53a093c27bdef61549b64e3a45eaf49a"},{url:"img/简单工厂模式.png",revision:"1527e0bdaf992c8584d79ef8d77e89dc"},{url:"img/组合模式-安全性.png",revision:"69a08abace096f997f417fcbffa9a123"},{url:"img/组合模式.png",revision:"2fcc3113082188ef77ce708321974dec"},{url:"img/装饰者模式-jdk源码.png",revision:"be70f180e4c5d62c67e61d59f65c920f"},{url:"img/装饰者模式-使用前.png",revision:"7ded22a171aae719cc0d3ae354894032"},{url:"img/装饰者模式.png",revision:"4051b674e6792c1661445fce5310d7bd"},{url:"img/观察者模式.png",revision:"c84dc6416692264536a257e48a208870"},{url:"img/解释器模式.png",revision:"0b6ae7cc94927a7f18f5347edab512d1"},{url:"img/访问者模式.png",revision:"45970209d4c24cc6e949a9e2915549e7"},{url:"img/责任链模式.png",revision:"11ffa3713cd317990b240c3fc4825ab4"},{url:"img/转接头.png",revision:"d6bdd625e8dd9d46d260df886d55da35"},{url:"img/迪米特法则.png",revision:"ad7121073524466fc292590a716e5534"},{url:"img/迭代器模式.png",revision:"d786b2ee6a696a60eea556dfc341a881"},{url:"img/适配器模式-jdk源码解析.png",revision:"61d341223541fe2ea2a23c59f5182a46"},{url:"img/适配器模式.png",revision:"883067f9d0e2292f150644217190e53e"},{url:"img/静态代理.png",revision:"7e9463b84b8a3cb2f9d49765d1bbe18e"},{url:"img/黑箱备忘录模式.png",revision:"0bc2eeb9471f6cc3e16da23b1772d3c0"},{url:"index.html",revision:"816323c4deb668c1da5088050f890ffd"},{url:"js/flux.min.js",revision:"9547393d8b7ebb80a108ba42f8cbc7d7"},{url:"js/jquery.min.js",revision:"b8d64d0bc142b3f670cc0611b0aebcae"},{url:"music/canon/canon.jpg",revision:"2d5b5f7af1277220148c7a9297b74c73"},{url:"music/night/night.jpg",revision:"5c9fe76738538df551f5a0358091f91d"},{url:"music/wind/wind.jpg",revision:"6e9c57b6aa43978c7b22dcebcd86e47a"},{url:"posts/design-pattern/index.html",revision:"e6dd9639d8671ed23f23f1c3ef24d28a"},{url:"posts/other/algoliaSearch.html",revision:"b237044a67e9d45370ccdcbd298eba26"},{url:"posts/other/blogDocs.html",revision:"bc18e4a41e86c846a7ebd77842ca4b2e"},{url:"posts/other/firends.html",revision:"d30c26632ef2c241cd38462d204ce090"},{url:"posts/other/githubPages.html",revision:"da73ed1c86c6826e6562eb730d107856"},{url:"posts/other/hotlinking.html",revision:"9479e86e1c45e6b90f3a11f4dad635ee"},{url:"posts/other/imageHost.html",revision:"c01e2f4d9b1e0a837b1ab67a30ed1b3d"},{url:"posts/other/internetResource.html",revision:"40f52da0c94cdd5ce7b64ebad81e4281"},{url:"setting.png",revision:"2a045d90b17a55d36904a238d94f583b"},{url:"tag/algolia/index.html",revision:"943c6bb0e23f6727233cebfd2ddf951e"},{url:"tag/github-pages/index.html",revision:"39897b47b7c9ab6d4575be87199589dd"},{url:"tag/index.html",revision:"bf65fd6d82ee40a370e024d0e2937ca2"},{url:"tag/其他/index.html",revision:"a34c99721706dc307d38f2eff6ba18a6"},{url:"tag/博客/index.html",revision:"9c04113477fa86c4c54de58f3d416033"},{url:"tag/设计模式/index.html",revision:"df34b05002b979aeb71e78bdbb635642"},{url:"timeline/index.html",revision:"c01f44f8428e69dfc3d12f532dfaf2f8"}],{})}));
