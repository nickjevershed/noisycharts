import{n as b,s as x,p as m,r as j,q as k}from"./scheduler.B-cAbGyz.js";const u=[];function v(s,o){return{subscribe:z(s,o).subscribe}}function z(s,o=b){let r;const n=new Set;function a(t){if(x(s,t)&&(s=t,r)){const i=!u.length;for(const e of n)e[1](),u.push(e,s);if(i){for(let e=0;e<u.length;e+=2)u[e][0](u[e+1]);u.length=0}}}function l(t){a(t(s))}function f(t,i=b){const e=[t,i];return n.add(e),n.size===1&&(r=o(a,l)||b),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:a,update:l,subscribe:f}}function B(s,o,r){const n=!Array.isArray(s),a=n?[s]:s;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=o.length<2;return v(r,(f,t)=>{let i=!1;const e=[];let p=0,d=b;const g=()=>{if(p)return;d();const c=o(n?e[0]:e,f,t);l?f(c):d=k(c)?c:b},y=a.map((c,_)=>m(c,w=>{e[_]=w,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){j(y),d(),i=!1}})}function E(s){return{subscribe:s.subscribe.bind(s)}}var h;const A=((h=globalThis.__sveltekit_1xjqq8p)==null?void 0:h.base)??"/noisycharts";var q;const S=((q=globalThis.__sveltekit_1xjqq8p)==null?void 0:q.assets)??A;export{E as a,A as b,S as c,B as d,v as r,z as w};
