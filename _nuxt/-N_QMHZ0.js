function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./NtnIeEMO.js","./CwLKp59x.js","./entry.BnIPv8ts.css","./BDUNGZNM.js","./CSLC_UN-.js","./BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as f,w as m,e as v,s as g,j as l,a as d,u as h}from"./BDUNGZNM.js";import{P as _,Y as y,f as C,l as w,j as P,R as $,D as r}from"./CwLKp59x.js";import{h as p,u as N}from"./CSLC_UN-.js";import{u as j}from"./CVbWzvhI.js";import{_ as D}from"./DZwDs-KK.js";const T=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./NtnIeEMO.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:N().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&j("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=$(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),Q=E;export{Q as default};