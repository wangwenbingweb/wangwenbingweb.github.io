webpackJsonp([3],{"6gXq":function(t,e){},"86U2":function(t,e,i){"use strict";var n,s=i("o69Z"),r=i("3X7g"),o=i("JOBW");var l=i("n8HW"),c=i("vQ9b"),a=i("RP/J"),h=i("V+2B"),d=i("1SJR"),u=i("5Fm4"),f=i("Pen3"),v=Object(s.b)("tab"),b=v[0],p=v[1],m=b({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:[Number,String]},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[p({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),{"van-ellipsis":this.ellipsis}],style:this.style,on:{click:this.onClick}},[t("span",{class:p("text")},[this.slots()||this.title,t(f.a,{attrs:{dot:this.dot,info:this.info}})])])}}),g=Object(s.b)("sticky"),x=g[0],S=g[1],y=x({mixins:[Object(u.a)(function(t){this.scroller||(this.scroller=Object(o.d)(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(s.d)(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=+this.offsetTop,n=Object(o.c)(window),s=Object(o.a)(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var l=s+e.offsetHeight;if(n+i+this.height>l){var c=this.height+n-l;return c<this.height?(this.fixed=!0,this.transform=-(c+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],e=this.fixed;return t("div",{style:{height:e?this.height+"px":null}},[t("div",{class:S({fixed:e}),style:this.style},[this.slots()])])}}),I=i("RfZZ"),O=i("vwLT"),C=Object(s.b)("tabs"),j=C[0],w=C[1],k=j({mixins:[O.a],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=50&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:w("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){return(0,arguments[0])("div",{class:w("content",{animated:this.animated}),on:Object(I.a)({},this.listeners)},[this.genChildren()])}}),$=Object(s.b)("tabs"),T=$[0],N=$[1];e.a=T({mixins:[Object(d.b)("vanTabs"),Object(u.a)(function(t){this.scroller||(this.scroller=Object(o.d)(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},scrollOffset:function(){return this.sticky?+this.offsetTop+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(o.g)(Math.ceil(Object(o.a)(this.$el)-this.offsetTop))},scrollspy:function(t){t?Object(a.b)(this.scroller,"scroll",this.onScroll,!0):Object(a.a)(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{resize:function(){this.setLine()},onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.tabHeight=Object(o.e)(t.$refs.wrap),t.scrollIntoView(!0)})},setLine:function(){var t=this,e=this.inited;this.$nextTick(function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(c.a)(t.$el)){var n=i[t.currentIndex].$el,r=t.lineWidth,o=t.lineHeight,l=Object(s.d)(r)?r:n.offsetWidth/2,a=n.offsetLeft+n.offsetWidth/2,h={width:Object(s.a)(l),backgroundColor:t.color,transform:"translateX("+a+"px) translateX(-50%)"};if(e&&(h.transitionDuration=t.duration+"s"),Object(s.d)(o)){var d=Object(s.a)(o);h.height=d,h.borderRadius=d}t.lineStyle=h}})},setCurrentIndexByName:function(t){var e=this.children.filter(function(e){return e.computedName===t}),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(s.d)(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){for(var e=t<this.currentIndex?-1:1;t>=0&&t<this.children.length;){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,s=e.computedName;n?this.$emit("disabled",s,i):(this.setCurrentIndex(t),this.scrollToCurrentContent(),this.$emit("click",s,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,s=e[this.currentIndex].$el;!function(t,e,i){Object(r.a)(n);var s=0,o=t.scrollLeft,l=0===i?1:Math.round(1e3*i/16);!function i(){t.scrollLeft+=(e-o)/l,++s<l&&(n=Object(r.c)(i))}()}(i,s.offsetLeft-(i.offsetWidth-s.offsetWidth)/2,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollToCurrentContent:function(){var t=this;if(this.scrollspy){this.clickedScroll=!0;var e=this.children[this.currentIndex],i=e&&e.$el;if(i)!function(t,e,i){var n=Object(o.b)(),s=n<t,l=0===e?1:Math.round(1e3*e/16),c=(t-n)/l;!function e(){n+=c,(s&&n>t||!s&&n<t)&&(n=t),Object(o.g)(n),s&&n<t||!s&&n>t?Object(r.c)(e):i&&i()}()}(Math.ceil(Object(o.a)(i))-this.scrollOffset,+this.duration,function(){t.clickedScroll=!1})}},onScroll:function(){if(this.scrollspy&&!this.clickedScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){if(Object(o.f)(t[e].$el)>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,o=this.scrollable,c=this.children.map(function(t,r){return i(m,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:t.info,title:t.title,color:e.color,isActive:r===e.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:o,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(r),Object(l.b)(t.$router,t)}}})}),a=i("div",{ref:"wrap",class:[N("wrap",{scrollable:o}),(t={},t[h.e]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:N("nav",[n]),style:this.navStyle},[this.slots("nav-left"),c,"line"===n&&i("div",{class:N("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:N([n])},[this.sticky?i(y,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[a]):a,i(k,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"8aUD":function(t,e,i){"use strict";var n=i("AXdl");e.a=n.default},FTWL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("bOdI"),r=i.n(s),o=(i("OWWB"),i("1fWZ")),l=(i("k3b4"),i("+2ln")),c=(i("P/b9"),i("tubq")),a=(i("eqfM"),i("/QYm")),h=(i("9++/"),i("QhyB")),d=(i("jAcA"),i("86U2")),u=(i("yIEv"),i("OIh9")),f=(i("qVvv"),i("8aUD")),v={components:(n={},r()(n,f.a.name,f.a),r()(n,u.a.name,u.a),r()(n,d.a.name,d.a),r()(n,h.a.name,h.a),r()(n,a.a.name,a.a),r()(n,c.a.name,c.a),r()(n,l.a.name,l.a),r()(n,o.a.name,o.a),n),data:function(){return{welcomeShow:!1,completeShow:!1,amountShow:!1,successfulShow:!1,heightall:0,signInShow:!1,images:[],active:0,flag:1,list:[],loading:!1,finished:!1,token:this.$store.state.token||"",taskId:"",welcome:this.$store.state.welcome||"",userId:this.$store.state.userId||"",currPage:1,pageSize:8,sort:1,time:0,mobileType:"H",hide:!1,address:"",titleHide:!0,totalNumber:1,oneDollar:"",searchBarFixed:!1}},mounted:function(){},methods:{tab:function(t){this.flag=t},onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<13;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=60&&(t.finished=!0)},2e3)}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo"},[i("div",{staticClass:"tab"},[i("ul",[i("li",{on:{click:function(e){return t.tab(1)}}},[t._v("切换1")]),t._v(" "),i("li",{on:{click:function(e){return t.tab(2)}}},[t._v("切换2")])])]),t._v(" "),i("div",{staticClass:"box"}),t._v(" "),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(t){return i("van-cell",{key:t,attrs:{title:t}})}),1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"rect1"}),this._v(" "),e("div",{staticClass:"rect2"}),this._v(" "),e("div",{staticClass:"rect3"}),this._v(" "),e("div",{staticClass:"rect4"}),this._v(" "),e("div",{staticClass:"rect5"})])}]};var p=i("VU/8")(v,b,!1,function(t){i("JzqF")},null,null);e.default=p.exports},JzqF:function(t,e){},OIh9:function(t,e,i){"use strict";var n=i("RfZZ"),s=i("o69Z"),r=i("1SJR"),o=i("n8HW"),l=Object(s.b)("tab"),c=l[0],a=l[1];e.a=c({mixins:[Object(r.a)("vanTabs")],props:Object(n.a)({},o.c,{dot:Boolean,info:[Number,String],name:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return Object(s.d)(this.name)?this.name:this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick(function(){e.parent.$emit("rendered",e.computedName,e.title)})}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,s=this.inited||i.scrollspy||!i.lazyRender,r=i.scrollspy||n,o=s?e():t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:a("pane-wrapper",{inactive:!n})},[t("div",{class:a("pane")},[o])]):t("div",{directives:[{name:"show",value:r}],attrs:{role:"tabpanel"},class:a("pane")},[o])}})},OWWB:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("T2s0")),r=(i.n(s),i("1H7Z")),o=(i.n(r),i("qpP9"));i.n(o)},S6Ip:function(t,e){},bFPQ:function(t,e){},jAcA:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("T2s0")),r=(i.n(s),i("S6Ip")),o=(i.n(r),i("bFPQ"));i.n(o)},qVvv:function(t,e,i){"use strict";var n=i("nsZj");i.n(n)},yIEv:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("6gXq"));i.n(s)}});