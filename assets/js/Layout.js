import{P as u,B as p}from"./Layout2.js";import{_,f as d,u as f,o as g,h as v,w as n,b as e,t as k,i as t,d as o,j as x,r}from"./app.js";const y={class:"title w-[var(--content-width)] my-0 mx-auto shadow-item py-0 px-6 rounded"},h={class:"flex items-center justify-between"},w={class:"text-[2rem]"},C=d({__name:"Layout",setup(D){const s=x(),c=f();return(i,a)=>{const l=r("Icon"),m=r("CommentService");return g(),v(u,null,{"page-top":n(()=>[e("div",y,[e("div",h,[e("h1",w,k(t(s).title),1),o(l,{icon:"RollbackOutlined",text:"\u8FD4\u56DE",onClick:a[0]||(a[0]=b=>i.$router.go(-1)),class:"cursor-pointer"})]),o(p,{page:t(s),class:"pb-5 mt-0"},null,8,["page"])])]),"page-bottom":n(()=>[o(m,{darkmode:t(c)},null,8,["darkmode"])]),_:1})}}});var L=_(C,[["__file","Layout.vue"]]);export{L as default};