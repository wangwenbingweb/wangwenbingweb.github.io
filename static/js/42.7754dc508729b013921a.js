webpackJsonp([42],{"8xe4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=a("Xxa5"),n=a.n(s),i=a("exGp"),u=a.n(i),c=a("bOdI"),o=a.n(c),l=(a("eqfM"),a("/QYm")),p=(a("jti4"),a("uk7J")),d={components:(r={},o()(r,p.a.name,p.a),o()(r,l.a.name,l.a),r),data:function(){return{fileList:[],isActive:3,problemDesc:"",realPath:"",token:this.$store.state.token||"",taskId:"",num:0,urlArr:[]}},mounted:function(){},watch:{problemDesc:function(){this.problemDesc.length>500&&(this.problemDesc=String(this.problemDesc).slice(0,500))}},computed:{scrollHeight:function(){return document.documentElement.scrollTop||document.body.scrollTop||0},isDisabled:function(){return!this.problemDesc}},methods:{blurIn:function(){window.scrollTo(0,Math.max(this.scrollHeight-1,0))},switchFn:function(e){this.isActive=e},submitfb:function(){var e=this;return u()(n.a.mark(function t(){var a,r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,""!=e.problemDesc){t.next=6;break}return Object(l.a)("描述不能为空"),t.abrupt("return",!1);case 6:if(!a.test(e.problemDesc)){t.next=10;break}return Object(l.a)("请输入正确的问题描述"),e.problemDesc="",t.abrupt("return",!1);case 10:return e.realPath=e.urlArr.join(","),(r=new FormData).append("problemDesc",e.problemDesc),r.append("type",e.isActive),r.append("images",e.realPath),r.append("mobileType","H"),t.next=18,e.$api.submitfb(r);case 18:if(2e4==(s=t.sent).data.code){t.next=26;break}if(200!=s.data.code){t.next=24;break}e.$router.push({path:"/feedbackht"}),t.next=26;break;case 24:return Object(l.a)(s.data.message),t.abrupt("return",!1);case 26:case"end":return t.stop()}},t,e)}))()},beforeRead:function(e){return"image/jpeg"!==e.type&&"image/png"!==e.type&&"image/jpg"!==e.type?(Object(l.a)("请上传JPG、PNG图片,大小3M以内"),!1):!(e.size>3145728)||(Object(l.a)("请上传JPG、PNG图片,大小3M以内"),!1)},upload:function(e){var t=this;return u()(n.a.mark(function a(){var r,s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$api.upload(e);case 2:if(2e4==(r=a.sent).data.code){a.next=12;break}if(200!=r.data.code){a.next=10;break}(s=[]).push(r.data.data.realPath),t.urlArr=t.urlArr.concat(s),a.next=12;break;case 10:return Object(l.a)(r.data.message),a.abrupt("return",!1);case 12:case"end":return a.stop()}},a,t)}))()},afterRead:function(e,t){this.num=t.index+1;var a=new FormData;a.append("file",e.file),a.append("type","H"),this.upload(a)},beforedelete:function(e,t){this.num=this.num-=1,this.urlArr.splice(t.index,1),this.fileList.splice(t.index,1)}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-sp"},[a("div",{staticClass:"type"},[e._v(e._s(e.$t("m.Types_of")))]),e._v(" "),a("div",{staticClass:"choose"},[a("ul",e._l(e.$t("m.optionsList.list"),function(t,r){return a("li",{key:r,class:{active:r+1===e.isActive},on:{click:function(t){return e.switchFn(r+1)}}},[e._v(e._s(t.text))])}),0)]),e._v(" "),a("div",{staticClass:"describe"},[e._v(e._s(e.$t("m.description")))]),e._v(" "),a("div",{staticClass:"teasing"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.problemDesc,expression:"problemDesc"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:e.$t("m.Please_fill_in_your_problem")},domProps:{value:e.problemDesc},on:{blur:e.blurIn,input:function(t){t.target.composing||(e.problemDesc=t.target.value)}}}),e._v(" "),a("span",{staticClass:"text"},[e._v(e._s(e.problemDesc.length)+"/500")])]),e._v(" "),a("div",{staticClass:"picture"},[a("p",[e._v("\n      "+e._s(e.$t("m.image"))+"\n      "),a("i",[e._v(e._s(e.$t("m.please_provide_screenshot_roblem")))])]),e._v(" "),a("span",[e._v(e._s(e.num)+"/4")])]),e._v(" "),a("div",{staticClass:"upload"},[a("van-uploader",{attrs:{multiple:"","max-count":4,"after-read":e.afterRead,"before-delete":e.beforedelete,"before-read":e.beforeRead},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),e._v(" "),a("div",{staticClass:"submitfb"},[a("btn-component",{attrs:{disabled:e.isDisabled,replaceBg:e.isDisabled},on:{click:function(t){return e.submitfb()}}},[e._v(e._s(e.$t("m.Submit_feedback")))])],1),e._v(" "),a("div",{staticClass:"feedbackht"},[a("router-link",{attrs:{to:"/feedbackht"}},[e._v(e._s(e.$t("m.Feedback_history")))])],1)])},staticRenderFns:[]};var b=a("VU/8")(d,m,!1,function(e){a("IJZ0")},null,null);t.default=b.exports},IJZ0:function(e,t){}});