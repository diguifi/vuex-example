(function(e){function t(t){for(var o,a,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e8de88ed"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,u=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e),i=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,u.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"31f2":function(e,t,n){"use strict";var o=n("71aa"),r=n.n(o);r.a},"71aa":function(e,t,n){},8659:function(e,t,n){},c21b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("034f"),n("2877")),c={},u=Object(a["a"])(c,r,i,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},p=[],v=n("c665"),d=n("dc0a"),m=n("d328"),b=n("11d9"),h=n("9ab4"),O=n("60a3"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"left"},[n("h1",[e._v(e._s(e.title))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],staticClass:"item-input",attrs:{type:"text",placeholder:"Add an Item"},domProps:{value:e.newItem},on:{input:function(t){t.target.composing||(e.newItem=t.target.value)}}})]),n("ul",e._l(e.itens,function(t,o){return n("li",{key:o},[e._v("\n        "+e._s(t)+"\n        "),n("button",{staticClass:"rm",on:{click:function(t){e.removeItens(o)}}},[e._v("Remove")])])}))]),n("div",{staticClass:"right"},[n("stats")],1)])},_=[],g=n("c93e"),y=n("aa9a"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stats"},[n("h1",[e._v("A different component")]),n("p",[e._v("There are currently "+e._s(e.counterItens)+" itens")]),n("button",{on:{click:e.removeAllItens}},[e._v("Remove all Itens")]),n("p",[e._v(e._s(e.msg))])])},I=[],E=n("65d9"),A=n.n(E),k=n("2f62"),M=function(e){function t(){var e;return Object(v["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).call(this)),e.msg="",e}return Object(y["a"])(t,[{key:"removeAllItens",value:function(){var e=this;this.removeAll().then(function(){e.msg="They have been removed"})}}]),Object(d["a"])(t,e),t}(o["default"]);M=h["a"]([A()({name:"Stats",components:{},computed:Object(g["a"])({},Object(k["c"])(["counterItens"])),methods:Object(g["a"])({},Object(k["d"])(["REMOVE_ALL"]),Object(k["b"])(["removeAll"]))})],M);var T=M,x=T,P=(n("ecc6"),Object(a["a"])(x,w,I,!1,null,"4531f1db",null));P.options.__file="Stats.vue";var C=P.exports,S=function(e){function t(){var e;return Object(v["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).call(this)),e.newItem="",e}return Object(y["a"])(t,[{key:"addItem",value:function(){this.ADD_ITEM(this.newItem),this.newItem=""}},{key:"removeItens",value:function(e){this.removeItem(e)}}]),Object(d["a"])(t,e),t}(O["b"]);S=h["a"]([Object(O["a"])({components:{Stats:C},computed:Object(g["a"])({},Object(k["e"])(["title","itens"])),methods:Object(g["a"])({},Object(k["d"])(["ADD_ITEM"]),Object(k["b"])(["removeItem"]))})],S);var D=S,L=D,R=(n("31f2"),Object(a["a"])(L,j,_,!1,null,null,null));R.options.__file="HelloWorld.vue";var V=R.exports,$=function(e){function t(){return Object(v["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(O["b"]);$=h["a"]([Object(O["a"])({components:{HelloWorld:V}})],$);var H=$,N=H,W=Object(a["a"])(N,f,p,!1,null,null,null);W.options.__file="Home.vue";var q=W.exports;o["default"].use(l["a"]);var B=new l["a"]({routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["default"].use(k["a"]);var F=new k["a"].Store({state:{title:"Shopping list",itens:["Milk","Cereal","Plastic spoons"]},getters:{counterItens:function(e){return e.itens.length}},mutations:{ADD_ITEM:function(e,t){e.itens.push(t)},REMOVE_ITEM:function(e,t){e.itens.splice(t,1)},REMOVE_ALL:function(e){e.itens=[]}},actions:{removeItem:function(e,t){e.commit("REMOVE_ITEM",t)},removeAll:function(e){var t=e.commit;return new Promise(function(e,n){setTimeout(function(){t("REMOVE_ALL"),e()},1500)})}}}),J=n("9483");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].config.productionTip=!1,new o["default"]({router:B,store:F,render:function(e){return e(s)}}).$mount("#app")},ecc6:function(e,t,n){"use strict";var o=n("8659"),r=n.n(o);r.a}});
//# sourceMappingURL=app.c2426b9d.js.map