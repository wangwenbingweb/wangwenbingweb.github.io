webpackJsonp([6],{"3IMD":function(t,e){},EbgE:function(t,e){},JKiR:function(t,e){},PTpu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s,o=n("Xxa5"),a=n.n(o),l=n("exGp"),r=n.n(l),c=n("Dd8w"),u=n.n(c),d=n("bOdI"),h=n.n(d),f=(n("eqfM"),n("/QYm")),g=(n("nsZj"),n("T2s0"),n("1H7Z"),n("WpgC"),n("3IMD"),n("SSsa")),p=(n("XmAh"),n("il3B")),m=(n("Qu9z"),n("o69Z")),v=n("joY4"),b=n("RP/J"),C=n("vwLT"),k=n("7+uW"),O=Object(m.b)("swipe-cell"),y=O[0],B=O[1],S=y({mixins:[C.a,(i={event:"touchstart",method:"onClick"},k.default.extend({props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var t=this;return{clickOutsideHandler:function(e){t.closeOnClickOutside&&!t.$el.contains(e.target)&&t[i.method]()}}},mounted:function(){Object(b.b)(document,i.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(b.a)(document,i.event,this.clickOutsideHandler)}}))],props:{onClose:Function,disabled:Boolean,leftWidth:[Number,String],rightWidth:[Number,String],beforeClose:Function,stopPropagation:Boolean,name:{type:[Number,String],default:""}},data:function(){return{offset:0,dragging:!1}},computed:{computedLeftWidth:function(){return+this.leftWidth||this.getWidthByRef("left")},computedRightWidth:function(){return+this.rightWidth||this.getWidthByRef("right")}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{getWidthByRef:function(t){return this.$refs[t]?this.$refs[t].getBoundingClientRect().width:0},open:function(t){var e="left"===t?this.computedLeftWidth:-this.computedRightWidth;this.opened=!0,this.offset=e,this.$emit("open",{position:t,name:this.name,detail:this.name})},close:function(t){this.offset=0,this.opened&&(this.opened=!1,this.$emit("close",{position:t,name:this.name}))},onTouchStart:function(t){this.disabled||(this.startOffset=this.offset,this.touchStart(t))},onTouchMove:function(t){this.disabled||(this.touchMove(t),"horizontal"===this.direction&&(this.dragging=!0,this.lockClick=!0,(!this.opened||this.deltaX*this.startOffset<0)&&Object(b.c)(t,this.stopPropagation),this.offset=Object(v.a)(this.deltaX+this.startOffset,-this.computedRightWidth,this.computedLeftWidth)))},onTouchEnd:function(){var t=this;this.disabled||this.dragging&&(this.toggle(this.offset>0?"left":"right"),this.dragging=!1,setTimeout(function(){t.lockClick=!1},0))},toggle:function(t){var e=Math.abs(this.offset),n=this.opened?.85:.15,i=this.computedLeftWidth,s=this.computedRightWidth;s&&"right"===t&&e>s*n?this.open("right"):i&&"left"===t&&e>i*n?this.open("left"):this.close()},onClick:function(t){void 0===t&&(t="outside"),this.$emit("click",t),this.opened&&!this.lockClick&&(this.beforeClose?this.beforeClose({position:t,name:this.name,instance:this}):this.onClose?this.onClose(t,this,{name:this.name}):this.close(t))},getClickHandler:function(t,e){var n=this;return function(i){e&&i.stopPropagation(),n.onClick(t)}},genLeftPart:function(){var t=this.$createElement,e=this.slots("left");if(e)return t("div",{ref:"left",class:B("left"),on:{click:this.getClickHandler("left",!0)}},[e])},genRightPart:function(){var t=this.$createElement,e=this.slots("right");if(e)return t("div",{ref:"right",class:B("right"),on:{click:this.getClickHandler("right",!0)}},[e])}},render:function(){var t=arguments[0],e={transform:"translate3d("+this.offset+"px, 0, 0)",transitionDuration:this.dragging?"0s":".6s"};return t("div",{class:B(),on:{click:this.getClickHandler("cell")}},[t("div",{class:B("wrapper"),style:e},[this.genLeftPart(),this.slots(),this.genRightPart()])])}}),x=n("NYxO"),_={components:(s={},h()(s,S.name,S),h()(s,p.a.name,p.a),h()(s,g.a.name,g.a),h()(s,f.a.name,f.a),s),data:function(){return{token:this.$store.state.token||"",taskId:"",list:[]}},mounted:function(){this.getData()},computed:{},methods:u()({},Object(x.b)(["SAVE_TASKTITLE","SAVE_TASKBOUNTY"]),{collectDelete:function(t){var e=this;return r()(a.a.mark(function n(){var i,s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(i=new FormData).append("taskId",t),n.next=4,e.$api.collectDelete(i);case 4:if(2e4==(s=n.sent).data.code){n.next=12;break}if(200!=s.data.code){n.next=10;break}e.getData(),n.next=12;break;case 10:return Object(f.a)(s.data.message),n.abrupt("return",!1);case 12:case"end":return n.stop()}},n,e)}))()},beforeClose:function(t){var e=this,n=t.name,i=t.position,s=t.instance;switch(i){case"left":case"cell":case"outside":s.close();break;case"right":p.a.confirm({message:"确定删除吗？"}).then(function(){e.collectDelete(n),s.close()}).catch(function(){})}},getData:function(){var t=this;return r()(a.a.mark(function e(){var n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FormData,e.next=3,t.$api.collectList(n);case 3:if(2e4==(i=e.sent).data.code){e.next=11;break}if(200!=i.data.code){e.next=9;break}t.list=i.data.data,e.next=11;break;case 9:return Object(f.a)(i.data.message),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,t)}))()},detailsFn:function(t,e,n,i){if(this.SAVE_TASKTITLE(e),this.SAVE_TASKBOUNTY(n),1!=i)return!1;this.$router.push({path:"/taskDetails",query:{taskId:t}})}})},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-coll"},[n("div",{staticClass:"list"},[t.list.length>0?n("ul",t._l(t.list,function(e,i){return n("li",{key:i,on:{click:function(n){return t.detailsFn(e.id,e.taskTitle,e.taskSingleReward,e.taskStatus)}}},[n("van-swipe-cell",{attrs:{"before-close":t.beforeClose,name:e.id}},[n("div",{staticClass:"content"},[n("div",{staticClass:"task"},[n("div",{staticClass:"fl"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e.taskCover,alt:""}})]),t._v(" "),n("div",{staticClass:"details"},[n("p",[t._v(t._s(e.taskTitle))]),t._v(" "),n("div",{staticClass:"label"},t._l(e.labelName.split(","),function(e,i){return n("i",{key:i},[t._v(t._s(e))])}),0),t._v(" "),n("span",[t._v(t._s(t._f("transformLineBreak")(e.taskDetail)))])])]),t._v(" "),1==e.taskStatus?n("div",{staticClass:"fr"},[t._v("+"+t._s(e.taskSingleReward))]):n("div",{staticClass:"fr active"},[t._v("已下架")])]),t._v(" "),n("div",{staticClass:"right_"})]),t._v(" "),n("van-button",{staticClass:"delete-button",attrs:{slot:"right",square:"",text:"删除",type:"danger"},slot:"right"})],1)],1)}),0):t._e(),t._v(" "),t.list.length<=0?n("div",{staticClass:"nodata"},[t._m(0),t._v(" "),n("p",[t._v(t._s(t.$t("m.load_empty")))])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"failure"},[e("img",{attrs:{src:n("tQlk"),alt:""}})])}]};var w=n("VU/8")(_,T,!1,function(t){n("EbgE")},null,null);e.default=w.exports},Qu9z:function(t,e){},SSsa:function(t,e,n){"use strict";var i=n("RfZZ"),s=n("AA6R"),o=n.n(s),a=n("o69Z"),l=n("rhik"),r=n("V+2B"),c=n("n8HW"),u=n("+2ln"),d=n("pIDD"),h=Object(a.b)("button"),f=h[0],g=h[1];function p(t,e,n,i){var s,a=e.tag,h=e.icon,f=e.type,p=e.color,m=e.plain,v=e.disabled,b=e.loading,C=e.hairline,k=e.loadingText,O={};p&&(O.color=m?p:r.f,m||(O.background=p),-1!==p.indexOf("gradient")?O.border=0:O.borderColor=p);var y,B,S=[g([f,e.size,{plain:m,loading:b,disabled:v,hairline:C,block:e.block,round:e.round,square:e.square}]),(s={},s[r.c]=C,s)];return t(a,o()([{style:O,class:S,attrs:{type:e.nativeType,disabled:v},on:{click:function(t){b||v||(Object(l.a)(i,"click",t),Object(c.a)(i))},touchstart:function(t){Object(l.a)(i,"touchstart",t)}}},Object(l.b)(i)]),[(B=[],b?B.push(t(d.a,{class:g("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&B.push(t(u.a,{attrs:{name:h,classPrefix:e.iconPrefix},class:g("icon")})),(y=b?k:n.default?n.default():e.text)&&B.push(t("span",{class:g("text")},[y])),B)])}p.props=Object(i.a)({},c.c,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e.a=f(p)},XmAh:function(t,e,n){"use strict";var i=n("nsZj"),s=(n.n(i),n("02pT")),o=(n.n(s),n("T2s0")),a=(n.n(o),n("1H7Z")),l=(n.n(a),n("hW8u")),r=(n.n(l),n("WpgC")),c=(n.n(r),n("3IMD")),u=(n.n(c),n("JKiR"));n.n(u)},il3B:function(t,e,n){"use strict";var i,s=n("RfZZ"),o=n("7+uW"),a=n("o69Z"),l=n("V+2B"),r=n("CsZI"),c=n("SSsa"),u=Object(a.b)("dialog"),d=u[0],h=u[1],f=u[2],g=d({mixins:[Object(r.a)()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1})):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[l.d,h("footer",{buttons:i})]},[this.showCancelButton&&n(c.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||f("cancel")},class:h("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(c.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||f("confirm")},class:[h("confirm"),(t={},t[l.b]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,i=this.messageAlign,s=this.slots(),o=this.slots("title")||this.title,l=o&&e("div",{class:h("header",{isolated:!n&&!s})},[o]),r=(s||n)&&e("div",{class:h("content")},[s||e("div",{domProps:{innerHTML:n},class:h("message",(t={"has-title":o},t[i]=i,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[h(),this.className],style:{width:Object(a.a)(this.width)}},[l,r,this.genButtons()])])}}});function p(t){return a.h?Promise.resolve():new Promise(function(e,n){var a;i&&(a=i.$el,document.body.contains(a))||(i&&i.$destroy(),(i=new(o.default.extend(g))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){i.value=t})),Object(s.a)(i,p.currentOptions,t,{resolve:e,reject:n})})}p.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){i["confirm"===t?"resolve":"reject"](t)}},p.alert=p,p.confirm=function(t){return p(Object(s.a)({showCancelButton:!0},t))},p.close=function(){i&&(i.value=!1)},p.setDefaultOptions=function(t){Object(s.a)(p.currentOptions,t)},p.resetDefaultOptions=function(){p.currentOptions=Object(s.a)({},p.defaultOptions)},p.resetDefaultOptions(),p.install=function(){o.default.use(g)},p.Component=g,o.default.prototype.$dialog=p;e.a=p}});