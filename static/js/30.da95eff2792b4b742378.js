webpackJsonp([30],{DIiP:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,n=e("Xxa5"),i=e.n(n),r=e("exGp"),o=e.n(r),c=e("Dd8w"),u=e.n(c),l=e("bOdI"),d=e.n(l),m=(e("k3b4"),e("+2ln")),v=(e("jti4"),e("uk7J")),p=(e("eqfM"),e("/QYm")),_=e("VXNE"),h=e("NYxO"),f={name:"sendTask",components:(s={},d()(s,p.a.name,p.a),d()(s,v.a.name,v.a),d()(s,m.a.name,m.a),d()(s,"disclaimer",_.default),s),data:function(){return{fileList:[],areaCode:this.$store.state.areaCode||"86",countries:this.$store.state.countries||"中国",mobile:this.$store.state.mobile||"",token:this.$store.state.token||"",taskId:"",disclaimerFlag:this.$store.state.disclaimerFlag||"",realPath:"",taskDemand:"",show1:!0}},mounted:function(){1==this.disclaimerFlag||(this.show1=!this.show1)},computed:{scrollHeight:function(){return document.documentElement.scrollTop||document.body.scrollTop||0},isDisabled:function(){return!this.taskDemand}},watch:{taskDemand:function(){this.taskDemand.length>100&&(this.taskDemand=String(this.taskDemand).slice(0,100))}},methods:u()({},Object(h.b)(["SAVE_DISCLAIMERFLAG"]),{blurIn:function(){window.scrollTo(0,Math.max(this.scrollHeight-1,0))},back:function(){this.$router.go(-1)},agreed:function(){this.show1=!this.show1},shutdownFn:function(t){1==t?(this.show1=!this.show1,this.SAVE_DISCLAIMERFLAG(t),this.$router.go(-1)):(this.SAVE_DISCLAIMERFLAG(t),this.show1=!this.show1)},beforeRead:function(t){return"image/jpeg"!==t.type&&"image/png"!==t.type&&"image/jpg"!==t.type?(Object(p.a)("请上传JPG、PNG图片,大小3M以内"),!1):!(t.size>3145728)||(Object(p.a)("请上传JPG、PNG图片,大小3M以内"),!1)},afterRead:function(t){var a=this;return o()(i.a.mark(function e(){var s,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new FormData).append("file",t.file),s.append("type","H"),e.next=5,a.$api.upload(s);case 5:if(2e4==(n=e.sent).data.code){e.next=13;break}if(200!=n.data.code){e.next=11;break}a.realPath=n.data.data.realPath,e.next=13;break;case 11:return Object(p.a)(n.data.message),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,a)}))()},submit:function(){var t=this;return o()(i.a.mark(function a(){var e,s,n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,""!=t.taskDemand){a.next=6;break}return Object(p.a)("任务需求不能为空"),a.abrupt("return",!1);case 6:if(!e.test(t.taskDemand)){a.next=10;break}return Object(p.a)("请输入正确的任务需求"),t.taskDemand="",a.abrupt("return",!1);case 10:return(s=new FormData).append("companyLogo",t.realPath),s.append("taskDemand",t.taskDemand),s.append("type","1"),a.next=16,t.$api.submitTask(s);case 16:if(2e4==(n=a.sent).data.code){a.next=25;break}if(200!=n.data.code){a.next=23;break}Object(p.a)(n.data.data),t.$router.push({path:"/applicationht"}),a.next=25;break;case 23:return Object(p.a)(n.data.message),a.abrupt("return",!1);case 25:case"end":return a.stop()}},a,t)}))()}})},b={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-sendTask"},[s("div",{staticClass:"sendTask"},[s("div",{staticClass:"top"},[s("div",{staticClass:"left"},[s("van-icon",{attrs:{name:"arrow-left"},on:{click:function(a){return t.back()}}})],1),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.$t("m.Send_task")))]),t._v(" "),s("div",{staticClass:"right",on:{click:function(a){return t.agreed()}}},[t._v(t._s(t.$t("m.disclaimer")))])]),t._v(" "),s("div",{staticClass:"requirement"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("m.Mission_requirements")))]),t._v(" "),s("div",{staticClass:"teasing"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDemand,expression:"taskDemand"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请填写您的任务需求",maxlength:"100"},domProps:{value:t.taskDemand},on:{blur:t.blurIn,input:function(a){a.target.composing||(t.taskDemand=a.target.value)}}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.taskDemand.length)+"/100")])])]),t._v(" "),s("div",{staticClass:"interval"}),t._v(" "),s("div",{staticClass:"logo"},[s("div",{staticClass:"title"},[s("p",[t._v("\n          "+t._s(t.$t("m.Brand_LOGO"))+"\n          "),s("i",[t._v(t._s(t.$t("m.optional")))])])]),t._v(" "),s("div",{staticClass:"upload"},[s("div",{staticClass:"left"},[s("van-uploader",{attrs:{multiple:"","max-count":2,"after-read":t.afterRead,"before-read":t.beforeRead},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})],1),t._v(" "),s("div",{staticClass:"right"},[s("p",[t._v(t._s(t.$t("m.Click_upload_brandLOGO")))]),t._v(" "),s("span",[t._v(t._s(t.$t("m.Support_extensions_PNG_JPG")))])])])]),t._v(" "),s("div",{staticClass:"interval"}),t._v(" "),s("div",{staticClass:"contact"},[s("span",[t._v(t._s(t.$t("m.contact")))]),t._v(" "),s("p",[t._v("\n        "+t._s(t.countries)+"（+"+t._s(t.areaCode)+"）\n        "),s("i"),t._v("\n        "+t._s(t._f("formatPhone")(t.mobile))+"\n      ")])]),t._v(" "),s("div",{staticClass:"interval"}),t._v(" "),s("div",{staticClass:"subApplication"},[s("btn-component",{attrs:{disabled:t.isDisabled,replaceBg:t.isDisabled},on:{click:function(a){return t.submit()}}},[t._v(t._s(t.$t("m.Submit_application")))])],1),t._v(" "),s("div",{staticClass:"applicationht"},[s("router-link",{attrs:{to:{path:"/applicationht"}}},[t._v(t._s(t.$t("m.Application_history")))])],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"popup"},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("m.instructions")))]),t._v(" "),s("div",{staticClass:"describe"},[s("disclaimer")],1),t._v(" "),s("div",{staticClass:"know",on:{click:function(a){return t.shutdownFn(2)}}},[t._v(t._s(t.$t("m.Know_the")))]),t._v(" "),s("div",{staticClass:"shutdown",on:{click:function(a){return t.shutdownFn(1)}}},[s("img",{attrs:{src:e("HXL2"),alt:""}})])])])])},staticRenderFns:[]};var k=e("VU/8")(f,b,!1,function(t){e("FLge")},null,null);a.default=k.exports},FLge:function(t,a){}});