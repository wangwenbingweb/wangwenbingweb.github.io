webpackJsonp([47],{"7MdE":function(n,i){},OFEb:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=t("Dd8w"),s=t.n(e),c=t("NYxO"),a={name:"controlLang",data:function(){return{list:[{id:1,lang_:"简体中文",icon:"./static/images/mine/choose_.png",icon_active:"./static/images/mine/choose.png"},{id:2,lang_:"繁体中文",icon:"./static/images/mine/choose_.png",icon_active:"./static/images/mine/choose.png"},{id:3,lang_:"English",icon:"./static/images/mine/choose_.png",icon_active:"./static/images/mine/choose.png"},{id:4,lang_:"取消",icon:"",icon_active:""}],lang:this.$store.state.lang||"简体中文"}},props:{center:Boolean},mounted:function(){},methods:s()({},Object(c.b)(["SAVE_LANG"]),{closeSon:function(n){0==n?(this.lang="简体中文",this.SAVE_LANG("简体中文"),this.$i18n.locale="zh-CN"):1==n?(this.lang="繁体中文",this.SAVE_LANG("繁体中文"),this.$i18n.locale="zh-TW"):2==n&&(this.lang="English",this.SAVE_LANG("English"),this.$i18n.locale="en-US"),this.$emit("formson",!1)}})},o={render:function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",{staticClass:"controlLang"},[t("div",{staticClass:"choose"},[t("div",{staticClass:"content"},[t("ul",n._l(n.list,function(i,e){return t("li",{key:e,on:{click:function(i){return n.closeSon(e)}}},[i.icon||i.icon_active?t("div",{staticClass:"icon"},[t("img",{attrs:{src:i.lang_==n.lang?i.icon_active:i.icon,alt:""}})]):n._e(),n._v(" "),t("span",[n._v(n._s(i.lang_))])])}),0)])])])},staticRenderFns:[]};var l=t("VU/8")(a,o,!1,function(n){t("7MdE")},"data-v-10e87588",null);i.default=l.exports}});