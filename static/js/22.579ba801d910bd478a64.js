webpackJsonp([22],{JnS0:function(t,s){},Obsv:function(t,s,v){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var P=v("Dd8w"),e=v.n(P),i=v("eMjc"),r=v.n(i),c=v("PUIo"),A=v.n(c),a=v("NYxO"),f={name:"taskShare",components:{vueQr:A.a},props:{taskIdInfo:String},data:function(){return{taskTitle:"",taskBounty:"",nickname:"",mobile:"",imgUrl:"",hide:!1,userId:this.$store.state.userId||"",config:{url:"",logo:v("i0T4")}}},created:function(){this.config.url=this.$global.shareUrl+"taskDetails?taskId="+this.taskIdInfo+"&userId="+this.userId,this.taskTitle=this.$store.state.taskTitle||"",this.taskBounty=this.$store.state.taskBounty||"",this.nickname=this.$store.state.nickname,this.mobile=this.$store.state.mobile},mounted:function(){var t=this;setTimeout(function(){t.clickGeneratePicture()},0)},methods:e()({},Object(a.b)(["SAVE_IMGURL"]),{clickGeneratePicture:function(){var t=this;setTimeout(function(){r()(t.$refs.imageDom,{backgroundColor:null,scale:5}).then(function(s){t.imgUrl=s.toDataURL("image/png"),t.SAVE_IMGURL(t.imgUrl),t.imgUrl&&(t.hide=!t.hide)})},500)}})},n={render:function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{ref:"imageDom",staticClass:"taskShare"},[v("div",{staticClass:"bg"},[v("div",{staticClass:"content"},[v("div",[t.nickname?v("p",[t._v(t._s(t.nickname))]):v("p",[t._v(t._s(t._f("formatPhone")(t.mobile)))])]),t._v(" "),v("div",{staticClass:"qr"},[v("div",{staticClass:"title"},[t._v(t._s(t.taskTitle.substring(0,8)))]),t._v(" "),v("div",{staticClass:"results"},[t._v("完成任务赚"+t._s(t.taskBounty)+"鲸贝")])]),t._v(" "),v("div",{staticClass:"footer"},[v("div",{staticClass:"code"},[v("div",{staticClass:"qrcode"},[v("vue-qr",{attrs:{text:t.config.url,logoScale:.24,logoSrc:t.config.logo,size:230,margin:5}})],1),t._v(" "),v("a",[t._v("扫码开始任务")])]),t._v(" "),t._m(0)])])]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:t.hide,expression:"hide"}],staticClass:"imgBox"},[v("img",{attrs:{src:t.imgUrl,alt:""}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",[s("div",{staticClass:"logo"},[s("img",{attrs:{src:v("jY8K"),alt:""}})]),this._v(" "),s("span",[this._v("帮你每天赚钱的APP")])])}]};var o=v("VU/8")(f,n,!1,function(t){v("JnS0")},"data-v-2712c99a",null);s.default=o.exports},jY8K:function(t,s){t.exports="data:image/png;base64,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"}});