import{u as C,P as N,a as B,b as I}from"./Layout.84616358.js";import{_ as R,f as T,s as L,q as P,B as j,j as A,U as D,o,h as l,w as _,a as s,b as d,c as x,z as h,t as b,A as F,u,F as k,r as i}from"./app.62b00ca8.js";const V={class:"page"},q={class:"pt-[20px] w-[var(--content-width)] my-0 mx-auto"},E={class:"w-full flex my-[10px]"},M=T({__name:"Category",setup(O){var m;const a=C("category"),g=L(),y=P();console.log(g);const e=j({pageTotal:((m=a.value.currentItems)==null?void 0:m.length)||0,pageNumber:1,pageSize:10}),v=A(()=>{var t;return(t=a.value.currentItems)==null?void 0:t.slice((e.pageNumber-1)*e.pageSize,e.pageNumber*e.pageSize)}),z=t=>{const{page:r,pageSize:c}=t;e.pageNumber=r,e.pageSize=c};return D(g,t=>{if(t.path=="/category/"){const r=Object.keys(a.value.map)[0];y.push(a.value.map[r])}},{immediate:!0}),(t,r)=>{const c=i("Icon"),S=i("RouterLink"),w=i("Pagination");return o(),l(N,null,{page:_(()=>[s("main",V,[s("div",q,[d(c,{icon:"AppstoreTwotone",iconSize:25,text:"\u5206\u7C7B\u5217\u8868",textSize:20,class:"dark:hover:text-[#fff]"}),s("div",E,[(o(!0),x(k,null,h(u(a).map,({items:p,path:n},f)=>(o(),l(S,{key:f,to:n,class:"shadow-item flex items-center text-[#666] px-[14px] font-normal h-[50px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"},{default:_(()=>[s("span",null,b(f),1),s("span",{class:"ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",style:F({"background-color":u(B)()})},b(p.length),5)]),_:2},1032,["to"]))),128))]),(o(!0),x(k,null,h(u(v),(p,n)=>(o(),l(I,{page:p.info,position:n%2==0?"left":"right",key:n},null,8,["page","position"]))),128)),d(w,{pageTotal:e.pageTotal,pageNumber:e.pageNumber,pageSize:e.pageSize,onClick:z},null,8,["pageTotal","pageNumber","pageSize"])])])]),_:1})}}});var H=R(M,[["__file","Category.vue"]]);export{H as default};
