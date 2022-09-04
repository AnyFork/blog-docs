import{o as i,c as d,y as s,a as r,az as c,Y as x,V as k,W as h,t as S,v as b,x as C,_ as T,d as V,e as _,r as N,w as P,X as M,E as m,u as o,Z as L,$ as w,aD as B,z as F}from"./anyfork.js";import{i as y}from"./app.js";import"./pagesRoutes.js";var H=(n,l)=>{const e=n.__vccOpts||n;for(const[f,g]of l)e[f]=g;return e};const z={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"\u2026"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(n){this.innerValue=n}},pages:function(){let n={};if(this.pageCount<=this.pageRange)for(let l=0;l<this.pageCount;l++){let e={index:l,content:l+1,selected:l===this.selected-1};n[l]=e}else{const l=Math.floor(this.pageRange/2);let e=t=>{let u={index:t,content:t+1,selected:t===this.selected-1};n[t]=u},f=t=>{let u={disabled:!0,breakView:!0};n[t]=u};for(let t=0;t<this.marginPages;t++)e(t);let g=0;this.selected-l>0&&(g=this.selected-1-l);let a=g+this.pageRange-1;a>=this.pageCount&&(a=this.pageCount-1,g=a-this.pageRange+1);for(let t=g;t<=a&&t<=this.pageCount-1;t++)e(t);g>this.marginPages&&f(g-1),a+1<this.pageCount-this.marginPages&&f(a+1);for(let t=this.pageCount-1;t>=this.pageCount-this.marginPages;t--)e(t)}return n}},methods:{handlePageSelected(n){this.selected!==n&&(this.innerValue=n,this.$emit("update:modelValue",n),this.clickHandler(n))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},K=["tabindex","innerHTML"],R=["tabindex","innerHTML"],E=["onClick","onKeyup"],D=["tabindex","innerHTML"],A=["tabindex","innerHTML"],U=["innerHTML"],I=["innerHTML"],j=["onClick","onKeyup"],p=["innerHTML"],q=["innerHTML"];function O(n,l,e,f,g,a){return e.noLiSurround?(i(),d("div",{key:1,class:s(e.containerClass)},[e.firstLastButton?(i(),d("a",{key:0,onClick:l[8]||(l[8]=t=>a.selectFirstPage()),onKeyup:l[9]||(l[9]=c(t=>a.selectFirstPage(),["enter"])),class:s([e.pageLinkClass,a.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.firstButtonText},null,42,U)):x("",!0),a.firstPageSelected()&&e.hidePrevNext?x("",!0):(i(),d("a",{key:1,onClick:l[10]||(l[10]=t=>a.prevPage()),onKeyup:l[11]||(l[11]=c(t=>a.prevPage(),["enter"])),class:s([e.prevLinkClass,a.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.prevText},null,42,I)),(i(!0),d(k,null,h(a.pages,t=>(i(),d(k,null,[t.breakView?(i(),d("a",{key:t.index,class:s([e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""]),tabindex:"0"},[S(n.$slots,"breakViewContent",{},()=>[b(C(e.breakViewText),1)])],2)):t.disabled?(i(),d("a",{key:t.index,class:s([e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass]),tabindex:"0"},C(t.content),3)):(i(),d("a",{key:t.index,onClick:u=>a.handlePageSelected(t.index+1),onKeyup:c(u=>a.handlePageSelected(t.index+1),["enter"]),class:s([e.pageLinkClass,t.selected?e.activeClass:""]),tabindex:"0"},C(t.content),43,j))],64))),256)),a.lastPageSelected()&&e.hidePrevNext?x("",!0):(i(),d("a",{key:2,onClick:l[12]||(l[12]=t=>a.nextPage()),onKeyup:l[13]||(l[13]=c(t=>a.nextPage(),["enter"])),class:s([e.nextLinkClass,a.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.nextText},null,42,p)),e.firstLastButton?(i(),d("a",{key:3,onClick:l[14]||(l[14]=t=>a.selectLastPage()),onKeyup:l[15]||(l[15]=c(t=>a.selectLastPage(),["enter"])),class:s([e.pageLinkClass,a.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.lastButtonText},null,42,q)):x("",!0)],2)):(i(),d("ul",{key:0,class:s(e.containerClass)},[e.firstLastButton?(i(),d("li",{key:0,class:s([e.pageClass,a.firstPageSelected()?e.disabledClass:""])},[r("a",{onClick:l[0]||(l[0]=t=>a.selectFirstPage()),onKeyup:l[1]||(l[1]=c(t=>a.selectFirstPage(),["enter"])),class:s(e.pageLinkClass),tabindex:a.firstPageSelected()?-1:0,innerHTML:e.firstButtonText},null,42,K)],2)):x("",!0),a.firstPageSelected()&&e.hidePrevNext?x("",!0):(i(),d("li",{key:1,class:s([e.prevClass,a.firstPageSelected()?e.disabledClass:""])},[r("a",{onClick:l[2]||(l[2]=t=>a.prevPage()),onKeyup:l[3]||(l[3]=c(t=>a.prevPage(),["enter"])),class:s(e.prevLinkClass),tabindex:a.firstPageSelected()?-1:0,innerHTML:e.prevText},null,42,R)],2)),(i(!0),d(k,null,h(a.pages,t=>(i(),d("li",{key:t.index,class:s([e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""])},[t.breakView?(i(),d("a",{key:0,class:s([e.pageLinkClass,e.breakViewLinkClass]),tabindex:"0"},[S(n.$slots,"breakViewContent",{},()=>[b(C(e.breakViewText),1)])],2)):t.disabled?(i(),d("a",{key:1,class:s(e.pageLinkClass),tabindex:"0"},C(t.content),3)):(i(),d("a",{key:2,onClick:u=>a.handlePageSelected(t.index+1),onKeyup:c(u=>a.handlePageSelected(t.index+1),["enter"]),class:s(e.pageLinkClass),tabindex:"0"},C(t.content),43,E))],2))),128)),a.lastPageSelected()&&e.hidePrevNext?x("",!0):(i(),d("li",{key:2,class:s([e.nextClass,a.lastPageSelected()?e.disabledClass:""])},[r("a",{onClick:l[4]||(l[4]=t=>a.nextPage()),onKeyup:l[5]||(l[5]=c(t=>a.nextPage(),["enter"])),class:s(e.nextLinkClass),tabindex:a.lastPageSelected()?-1:0,innerHTML:e.nextText},null,42,D)],2)),e.firstLastButton?(i(),d("li",{key:3,class:s([e.pageClass,a.lastPageSelected()?e.disabledClass:""])},[r("a",{onClick:l[6]||(l[6]=t=>a.selectLastPage()),onKeyup:l[7]||(l[7]=c(t=>a.selectLastPage(),["enter"])),class:s(e.pageLinkClass),tabindex:a.lastPageSelected()?-1:0,innerHTML:e.lastButtonText},null,42,A)],2)):x("",!0)],2))}var W=H(z,[["render",O]]);const X={key:0,class:"w-full flex items-center justify-center flex-wrap"},Y={class:"h-full pr-[5px]"},Z=b("\u8DF3\u81F3: "),G={class:"h-full pr-[5px]"},J=r("span",null,"\u6BCF\u9875\uFF1A",-1),Q=r("option",{value:10},"10",-1),$=r("option",{value:15},"15",-1),ee=r("option",{value:20},"20",-1),te=[Q,$,ee],ae=r("span",null,"\u6761",-1),le={class:"h-full pr-[5px]"},ne=V({__name:"Pagination",props:{pageTotal:null,pageNumber:null,pageSize:null},emits:["click"],setup(n,{emit:l}){const e=n,f=(t,u)=>{l("click",{page:t,pageSize:u})},g=_(()=>Math.ceil(e.pageTotal/e.pageSize)),a=N(void 0);return P(a,t=>{t&&(parseInt(t)>g.value?alert(`\u8F93\u5165\u7684\u9875\u9762\u4E0D\u80FD\u8D85\u8FC7\uFF1A${g.value}`):f(parseInt(t),e.pageSize))}),P(()=>e.pageNumber,t=>{t+""!=a.value&&(a.value=void 0),t&&f(t,e.pageSize)}),P(()=>e.pageSize,t=>{f(1,t)}),(t,u)=>n.pageTotal>e.pageSize?(i(),d("div",X,[M(o(W),{modelValue:n.pageNumber,"onUpdate:modelValue":u[0]||(u[0]=v=>m(pageNumber)?pageNumber.value=v:null),"page-count":o(g),"prev-text":o(y)?"Pre":"\u4E0A\u4E00\u9875","next-text":o(y)?"Next":"\u4E0B\u4E00\u9875","container-class":"pagination","page-class":"page-item","page-range":3,"margin-pages":3,"hide-prev-next":!0},null,8,["modelValue","page-count","prev-text","next-text"]),r("div",{class:"sm:my-[20px] flex items-center sm:ml-[50px] leading-[25px]",style:F(o(y)?{fontSize:"10px"}:"")},[r("div",Y,[Z,L(r("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=v=>a.value=v),class:"w-5 h-[15px]"},null,512),[[w,a.value]])]),r("div",G,[J,L(r("select",{"onUpdate:modelValue":u[2]||(u[2]=v=>m(pageSize)?pageSize.value=v:null),class:"h-[21px]"},te,512),[[B,n.pageSize]]),ae]),r("div",le,"\u5171\uFF1A"+C(e.pageTotal)+"\u6761",1)],4)])):x("",!0)}});var ue=T(ne,[["__file","Pagination.vue"]]);export{ue as default};
