webpackJsonp([24],{234:function(t,e,r){r(339);var s=r(1)(r(340),r(341),null,null);t.exports=s.exports},339:function(t,e){},340:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Error500",methods:{backPage:function(){this.$router.go(-1)},goHome:function(){this.$router.push({name:"home_index"})}}}},341:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error500"},[r("div",{staticClass:"error500-body-con"},[r("Card",[r("div",{staticClass:"error500-body-con-title"},[t._v("\n                5"),r("span",{staticClass:"error500-0-span"},[r("Icon",{attrs:{type:"social-freebsd-devil"}})],1),r("span",{staticClass:"error500-0-span"},[r("Icon",{attrs:{type:"social-freebsd-devil"}})],1)]),t._v(" "),r("p",{staticClass:"error500-body-con-message"},[t._v("Oops! the server is wrong")]),t._v(" "),r("div",{staticClass:"error500-btn-con"},[r("Button",{staticStyle:{width:"200px"},attrs:{size:"large",type:"text"},on:{click:t.goHome}},[t._v("返回首页")]),t._v(" "),r("Button",{staticStyle:{width:"200px","margin-left":"40px"},attrs:{size:"large",type:"primary"},on:{click:t.backPage}},[t._v("返回上一页")])],1)])],1)])},staticRenderFns:[]}}});