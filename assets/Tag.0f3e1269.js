import{u as N,P as B,a as T,b as C}from"./Layout.eeac1459.js";import{_ as I,f as R,v as L,s as P,C as A,k as D,U as E,o,h as l,w as f,b as s,d as _,c as d,A as x,t as h,B as F,i as u,F as k,r as i}from"./app.637068fd.js";const V={class:"page"},j={class:"pt-[20px] w-[var(--content-width)] my-0 mx-auto"},M={class:"w-full flex my-[10px]"},O=R({__name:"Tag",setup(U){var g;const b=L(),v=P(),a=N("tag"),e=A({pageTotal:((g=a.value.currentItems)==null?void 0:g.length)||0,pageNumber:1,pageSize:10}),S=D(()=>{var t;return(t=a.value.currentItems)==null?void 0:t.slice((e.pageNumber-1)*e.pageSize,e.pageNumber*e.pageSize)}),z=t=>{const{page:n,pageSize:p}=t;e.pageNumber=n,e.pageSize=p};return E(b,t=>{if(t.path=="/tag/"){const n=Object.keys(a.value.map)[0];v.push(a.value.map[n])}},{immediate:!0}),(t,n)=>{const p=i("Icon"),y=i("RouterLink"),w=i("Pagination");return o(),l(B,null,{page:f(()=>[s("main",V,[s("div",j,[_(p,{icon:"AppstoreTwotone",iconSize:25,text:"\u6807\u7B7E\u5217\u8868",textSize:20,class:"dark:hover:text-[#fff]"}),s("div",M,[(o(!0),d(k,null,x(u(a).map,({items:c,path:r},m)=>(o(),l(y,{key:m,to:r,class:"shadow-item flex items-center text-[#666] px-[14px] font-normal h-[50px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"},{default:f(()=>[s("span",null,h(m),1),s("span",{class:"ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",style:F({"background-color":u(T)()})},h(c.length),5)]),_:2},1032,["to"]))),128))]),(o(!0),d(k,null,x(u(S),(c,r)=>(o(),l(C,{page:c.info,position:r%2==0?"left":"right",key:r},null,8,["page","position"]))),128)),_(w,{pageTotal:e.pageTotal,pageNumber:e.pageNumber,pageSize:e.pageSize,onClick:z},null,8,["pageTotal","pageNumber","pageSize"])])])]),_:1})}}});var H=I(O,[["__file","Tag.vue"]]);export{H as default};
