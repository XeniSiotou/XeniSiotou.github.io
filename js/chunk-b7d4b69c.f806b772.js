(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7d4b69c"],{"139f":function(t,e,a){t.exports=a.p+"img/next.3a638d22.svg"},"1cd7":function(t,e,a){},"51dc":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navarrroot"},["project"==t.data.previousLink.type||"lecture"==t.data.previousLink.type?s("router-link",{staticClass:"prev-cont",attrs:{to:t.data.previousLink.link}},[s("div",{staticClass:"special-char"},[s("img",{attrs:{src:a("e0ea"),alt:"<"}})]),s("div",{staticClass:"message"},[t._v(" "+t._s(this.message())+" "+t._s(t.data.previousLink.type)+t._s(this.plural(!1))+" ")])]):t._e(),"project"!=t.data.previousLink.type&&"lecture"!=t.data.previousLink.type?s("div",{staticClass:"placeholder"}):t._e(),s("div",{staticClass:"short-title"},[t._v(t._s(t.data.shortTitle))]),"project"!=t.data.nextLink.type&&"lecture"!=t.data.nextLink.type?s("div",{staticClass:"placeholder"}):t._e(),"project"==t.data.nextLink.type||"lecture"==t.data.nextLink.type?s("router-link",{staticClass:"next-cont",attrs:{to:t.data.nextLink.link}},[s("div",{staticClass:"message"},[t._v(" "+t._s(this.message(!0))+" "+t._s(t.data.nextLink.type)+t._s(this.plural(!0))+" ")]),s("div",{staticClass:"special-char"},[s("img",{attrs:{src:a("139f"),alt:">"}})])]):t._e()],1)},i=[],r={name:"navarr",props:["data"],methods:{message:function(t){return t?this.data.nextLink.type!=this.data.currentType?"Go to ":"Next":this.data.previousLink.type!=this.data.currentType?"Go to ":"Previous"},plural:function(t){if(t){if(this.data.nextLink.type!=this.data.currentType)return"s"}else if(this.data.previousLink.type!=this.data.currentType)return"s"}}},n=r,c=(a("c61d"),a("2877")),o=Object(c["a"])(n,s,i,!1,null,"d0ec0f28",null);e["a"]=o.exports},c61d:function(t,e,a){"use strict";var s=a("1cd7"),i=a.n(s);i.a},cc28:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navarr",{attrs:{data:t.data}}),a("h1",[t._v("Port of Tinos")]),a("p",[t._v("Under Construction")])],1)},i=[],r=a("51dc"),n={name:"Lecture1",components:{navarr:r["a"]},props:["data"]},c=n,o=a("2877"),p=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=p.exports},e0ea:function(t,e,a){t.exports=a.p+"img/prev.fed8f78e.svg"}}]);
//# sourceMappingURL=chunk-b7d4b69c.f806b772.js.map