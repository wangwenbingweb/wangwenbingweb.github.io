webpackJsonp([34],{"2Jer":function(t,e){},eARG:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"mapbox",data:function(){return{center:{lng:0,lat:0},zoom:13}},mounted:function(){},methods:{handler:function(t){var e=t.BMap,o=t.map;(new e.Geolocation).getCurrentPosition(function(t){console.log("坐标",t.point.lng,t.point.lat);var n=new e.Point(t.point.lng,t.point.lat);o.centerAndZoom(n,4);var r=new e.Marker(t.point);o.panTo(t.point),o.addOverlay(r);var i=new e.Circle(n,2e6,{strokeColor:"#f01215",strokeWeight:1,strokeOpacity:1,fillColor:"#ccc",fillOpacity:.8});o.addOverlay(i),setTimeout(function(){o.clearOverlays(i),o.centerAndZoom(n,15);var r=new e.Marker(t.point);o.panTo(t.point),o.addOverlay(r);var a=new e.Circle(n,1e3,{strokeColor:"#f01215",strokeWeight:1,strokeOpacity:1,fillColor:"#ccc",fillOpacity:.8});o.addOverlay(a)},5e3),(new e.Geocoder).getLocation(n,function(t){t.addressComponents;console.log(t.addressComponents),console.log(t.address)})})},getClickInfo:function(t){console.log("123"),this.center.lng=t.point.lng,this.center.lat=t.point.lat,console.log(this.center.lng),console.log(this.center.lat)},getLoctionSuccess:function(t){console.log(t)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mapbox"},[e("baidu-map",{staticStyle:{height:"100%",width:"100%"},attrs:{center:this.center,zoom:this.zoom,"scroll-wheel-zoom":!0},on:{ready:this.handler,click:this.getClickInfo}},[e("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),this._v(" "),e("bm-city-list",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}})],1)],1)},staticRenderFns:[]};var i=o("VU/8")(n,r,!1,function(t){o("2Jer")},"data-v-632c0b7c",null);e.default=i.exports}});