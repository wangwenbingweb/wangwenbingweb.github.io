webpackJsonp([21],{KrUr:function(t,e){},"Nk/F":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=a("Xxa5"),r=a.n(i),n=a("exGp"),d=a.n(n),b=a("Dd8w"),f=a.n(b),l=a("bOdI"),u=a.n(l),c=(a("eqfM"),a("/QYm")),o=(a("9++/"),a("QhyB")),P=a("NYxO"),v={components:(s={},u()(s,o.a.name,o.a),u()(s,c.a.name,c.a),s),data:function(){return{list:[],loading:!1,finished:!1,token:this.$store.state.token||"",taskId:"",currPage:1,pageSize:10,userId:this.$store.state.userId||"",totalNumber:1,type:1}},methods:f()({},Object(P.b)(["SAVE_TASKTITLE","SAVE_TASKBOUNTY"]),{detailFn:function(t,e,a,s){if(this.SAVE_TASKTITLE(e),this.SAVE_TASKBOUNTY(a),1!=s)return!1;this.$router.push({path:"/taskDetails",query:{taskId:t}})},tab:function(t){this.type=t,this.currPage=1,this.list=[],this.loading=!0,this.finished=!1,this.getData()},onLoad:function(){var t=this;setTimeout(function(){t.getData()},500)},getData:function(){var t=this;return d()(r.a.mark(function e(){var a,s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("mobileType","H"),a.append("type",t.type),a.append("currPage",t.currPage),a.append("pageSize",t.pageSize),a.append("userId",t.userId),e.next=8,t.$api.recordOfTask(a);case 8:if(2e4==(s=e.sent).data.code){e.next=17;break}if(200!=s.data.code){e.next=15;break}t.totalNumber=s.data.data.number,0!=t.totalNumber?(i=s.data.data.list,t.list=t.list.concat(i),i.length>=10?t.currPage+=1:t.finished=!0,t.loading=!1):(t.finished=!0,t.loading=!1),e.next=17;break;case 15:return Object(c.a)(s.data.message),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t)}))()}})},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"taskRecord"},[s("div",{staticClass:"tab"},[s("ul",[s("li",{class:1==t.type?"active":"",on:{click:function(e){return t.tab(1)}}},[t._v("\n        参与中\n        "),1==t.type?s("span"):t._e()]),t._v(" "),s("li",{class:2==t.type?"active":"",on:{click:function(e){return t.tab(2)}}},[t._v("\n        已完成\n        "),2==t.type?s("span"):t._e()])])]),t._v(" "),s("div",{staticClass:"tab-content"},[t.totalNumber>0?s("van-list",{attrs:{finished:t.finished,"finished-text":"","immediate-check":!0},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[s("ul",t._l(t.list,function(e,i){return s("li",{key:i,on:{click:function(a){return t.detailFn(e.id,e.taskTitle,e.taskSingleReward,e.taskStatus)}}},[s("div",{staticClass:"instructions"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:e.taskCover?e.taskCover:a("drsW"),alt:""}})]),t._v(" "),s("div",{staticClass:"explain"},[s("p",[t._v(t._s(e.taskTitle))]),t._v(" "),e.labelName?s("div",{staticClass:"label"},t._l(e.labelName.split(","),function(e,a){return s("i",{key:a},[t._v(t._s(e))])}),0):t._e(),t._v(" "),s("span",[t._v(t._s(t._f("transformLineBreak")(e.taskDetail)))])])]),t._v(" "),1==e.taskStatus?s("div",{staticClass:"amount"},[t._v("+"+t._s(e.taskSingleReward))]):s("div",{staticClass:"amount active"},[t._v("已下架")])])}),0)]):t._e(),t._v(" "),0==t.totalNumber?s("div",{staticClass:"record"},[t._m(0),t._v(" "),s("p",[t._v(t._s(t.$t("m.load_empty")))])]):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"failure"},[e("img",{attrs:{src:a("tQlk"),alt:""}})])}]};var A=a("VU/8")(v,p,!1,function(t){a("KrUr")},"data-v-46667e2a",null);e.default=A.exports},drsW:function(t,e){t.exports="data:image/png;base64,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"}});