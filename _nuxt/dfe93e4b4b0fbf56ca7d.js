(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(t,e,o){"use strict";o.r(e);var n=o(30),r={data:function(){return{defaultCode:this.$store.state.defaultCode,cmOption:this.$store.state.codemirrorOpts}}},l={data:function(){return{lebabCode:"",cmOption:this.$store.state.codemirrorOpts}},mounted:function(){var code=window.lebab.transform(this.$store.state.defaultCode,this.$store.state.lebabDefaultOpts).code;this.lebabCode=code}},c={components:{AppSection:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_section"},[e("b-container",[e("h1",[this._v("Lebab modernizes your JavaScript code!")]),this._v(" "),e("b-button",{staticClass:"pl-5 pr-5 mb-5 text-white bg-transparent",attrs:{size:"lg",variant:"outline-warning",to:"/readme"}},[this._v("\n      Read More\n    ")]),this._v(" "),e("div",{staticClass:"iframebox"},[e("iframe",{staticClass:"iframestar",attrs:{src:"https://ghbtns.com/github-btn.html?user=lebab&repo=lebab&type=star&count=true&size=large"}})])],1)],1)}),[],!1,null,null,null).exports,AppSecondSection:Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"body_section py-5"},[o("b-container",[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("h1",[t._v("Still coding like this?")]),t._v(" "),o("p",[t._v("This code is fine. There's nothing wrong with it. It's clean and understandable. But it's just a little old :/")])]),t._v(" "),o("b-col",{attrs:{md:"6"}},[o("div",{staticClass:"cm-topbar"},[o("div",{staticClass:"cm-topone"}),t._v(" "),o("div",{staticClass:"cm-toptwo"}),t._v(" "),o("div",{staticClass:"cm-topthree"})]),t._v(" "),o("codemirror",{staticClass:"a",attrs:{options:t.cmOption},model:{value:t.defaultCode,callback:function(e){t.defaultCode=e},expression:"defaultCode"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,AppThirdSection:Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"body_section py-5"},[o("b-container",[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("div",{staticClass:"cm-topbar"},[o("div",{staticClass:"cm-topone"}),t._v(" "),o("div",{staticClass:"cm-toptwo"}),t._v(" "),o("div",{staticClass:"cm-topthree"})]),t._v(" "),o("codemirror",{staticClass:"a",attrs:{options:t.cmOption},model:{value:t.lebabCode,callback:function(e){t.lebabCode=e},expression:"lebabCode"}})],1),t._v(" "),o("b-col",{attrs:{md:"6"}},[o("h1",[t._v("Lebab it!")]),t._v(" "),o("p",[t._v("Lebab transpiles your ES5 code to ES6/ES7. It does exactly the opposite of what Babel does.")])])],1)],1)],1)}),[],!1,null,null,null).exports}},d=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-section"),this._v(" "),e("app-second-section"),this._v(" "),e("app-third-section")],1)}),[],!1,null,null,null);e.default=d.exports}}]);