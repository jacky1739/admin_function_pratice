(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-10f39a85":"3859cbe9","chunk-2d0e5e97":"f89db678","chunk-2d0e627b":"31a7fb57","chunk-60d453d6":"5c9099c2","chunk-7c216055":"88fb26f6"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var d=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/admin_function_pratice/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var l=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4a74":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=t("bc3a"),c=t.n(o),u=t("2106"),a=t.n(u),i=t("7bb1"),d=t("3aa8"),p=t("cbdf"),l={class:"constainer"};function f(e,n){var t=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])("div",l,[Object(r["g"])(t)])}t("6c67");const s={};s.render=f;var b=s,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/",name:"Home",component:function(){return t.e("chunk-10f39a85").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-2d0e627b").then(t.bind(null,"9817"))},children:[{path:"products",component:function(){return t.e("chunk-60d453d6").then(t.bind(null,"d416"))}}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/test",name:"NotFound",component:function(){return t.e("chunk-7c216055").then(t.bind(null,"2762"))}}],v=Object(h["a"])({history:Object(h["b"])(),routes:m}),O=v,j=t("9457"),y=Object(r["c"])(b);y.component("Form",i["c"]),y.component("Field",i["b"]),y.component("ErrorMessage",i["a"]),y.use(O),y.use(a.a,c.a),y.mount("#app"),Object(i["e"])("required",d["c"]),Object(i["e"])("email",d["a"]),Object(i["e"])("min",d["b"]),Object(i["d"])({generateMessage:Object(p["a"])({zh_TW:j}),validateOnInput:!0}),Object(p["b"])("zh_TW")},"6c67":function(e,n,t){"use strict";t("4a74")}});
//# sourceMappingURL=app.bb569400.js.map