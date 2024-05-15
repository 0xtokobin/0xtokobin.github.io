import z from"./MW7TVwC3.js";import{_ as L}from"./DZwDs-KK.js";import{_ as S}from"./L2z3VTkK.js";import{g as N}from"./C8ZLHhcL.js";import{f as A,ad as D,L as E,r as V,m as k,h as F,o as t,c as l,a as e,u as n,k as i,b as c,w as x,F as h,s as w,x as G,G as H,J as I,d as v,t as y,_ as $,aq as M,ac as R}from"./CwLKp59x.js";import"./CVbWzvhI.js";const q={class:"flex h-full w-full flex-col justify-center"},J={class:"flex items-center justify-center"},O={class:"sm:w-xl md:w-2xl lg:w-4xl flex w-[21rem] flex-row items-center justify-between xl:w-[calc(100%-100px)]"},P={class:"text-[#444] dark:text-white"},T={class:"flex items-center justify-center text-2xl font-bold text-[#444] dark:text-white"},K={key:0,class:"m-0 p-0 text-2xl"},Q={key:1,class:"m-0 p-0 text-2xl"},U={class:"mx-30 gap-15 hidden flex-1 list-none flex-row items-center text-[#444] dark:text-white lg:flex"},W={class:"flex flex-row items-center gap-5 text-[#444] dark:text-white"},X={class:"z-150 fixed bottom-0 left-0 right-0 top-[4rem] block bg-white px-8 dark:bg-[#0d1117]"},Y={class:"dark:text-gray mt-10 flex list-none flex-col gap-1 text-sm text-gray-500"},Z=A({__name:"Header",setup(d){const a=N(),m=D(),_=E();let s=V(!1);const u=[{name:"首页",path:"/"},{name:"关于",path:"/about"}];k(()=>s.value,g=>{g?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")});const p=()=>{a.value=a.value==="light"?"dark":"light"},B=()=>{s.value=!s.value},b=()=>{s.value=!1};k(()=>a.value,()=>{document.documentElement.setAttribute("data-theme",a.value)});const C=()=>_.name==="articles-slug";return F(()=>{document.documentElement.setAttribute("data-theme",a.value),m.afterEach(()=>{b()})}),(g,de)=>{const r=z,f=L,j=S;return t(),l(h,null,[e("div",{class:G(["z-50 h-[4rem] bg-white shadow-md dark:bg-[#212526]",{fixed:n(s),"w-full":n(s),"overflow-hidden":n(s)}])},[e("div",q,[e("div",J,[e("div",O,[e("div",P,[n(s)?(t(),i(r,{key:1,onClick:b,name:"mdi:close",size:"28"})):(t(),i(r,{key:0,onClick:B,class:"lg:!hidden",name:"mdi:menu",size:"28"}))]),e("div",T,[c(f,{to:"/"},{default:x(()=>[C()?(t(),l("span",Q,"tokobin' Blog")):(t(),l("h1",K," tokobin' Blog "))]),_:1})]),e("ul",U,[(t(),l(h,null,w(u,o=>e("li",{key:o.path},[c(f,{to:o.path},{default:x(()=>[v(y(o.name),1)]),_:2},1032,["to"])])),64))]),e("div",W,[c(j),n(a)==="light"?(t(),i(r,{key:0,onClick:p,class:"cursor-pointer",name:"material-symbols:dark-mode-outline",size:"28"})):(t(),i(r,{key:1,onClick:p,class:"cursor-pointer",name:"material-symbols:light-mode-outline",size:"28"}))])])])])],2),H(e("div",X,[e("ul",Y,[(t(),l(h,null,w(u,o=>e("li",{key:o.path,class:"relative"},[c(f,{to:o.path,class:"drak:border-[#30363d] flex items-center border-0 border-b border-solid border-gray-200 py-3 dark:text-white"},{default:x(()=>[v(y(o.name),1)]),_:2},1032,["to"])])),64))])],512),[[I,n(s)]])],64)}}}),ee={},te={class:"dark:text-gray-3 w-full border-0 border-solid bg-white pb-10 pt-10 text-base text-[#444] dark:bg-[#212526]"},se=M('<div class="mx-auto flex max-w-6xl flex-col"><div class="flex flex-col justify-center gap-2 gap-5 md:flex-row"><div class="mx-4 flex flex-1 flex-col space-y-2"><span class="mb-2 font-bold">社交媒体</span><a href="https://github.com/0xtokobin" target="_blank">Github</a><a href="https://space.bilibili.com/272931568" target="_blank">BiliBili</a><a href="https://steamcommunity.com/profiles/76561198835274895/" target="_blank">Steam</a></div><div class="mx-4 flex flex-1 flex-col space-y-2"><span class="mb-2 font-bold">友情链接</span><a></a></div><div class="mx-4 flex flex-1 flex-col space-y-2"><span class="mb-2 font-bold">学习论坛</span><a href="https://www.bilibili.com/" target="_blank">B站大学</a><a href="https://www.oschina.net/" target="_blank">开源中国</a><a href="https://juejin.cn/" target="_blank">掘金论坛</a><a href="https://segmentfault.com/" target="_blank">思否</a></div></div></div>',1),ae=[se];function oe(d,a){return t(),l("div",te,ae)}const le=$(ee,[["render",oe]]),ne={},ce={class:"flex min-h-screen flex-col"},re={class:"flex-1 bg-white dark:bg-[#212526]"};function ie(d,a){const m=Z,_=le;return t(),l("div",ce,[c(m),e("div",re,[R(d.$slots,"default")]),c(_)])}const pe=$(ne,[["render",ie]]);export{pe as default};