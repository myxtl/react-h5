(this["webpackJsonpreact-h5"]=this["webpackJsonpreact-h5"]||[]).push([[0],{37:function(e,t,n){e.exports=n(72)},47:function(e,t,n){},49:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(15),s=n.n(o),i=n(13),u=n(35),l=n(11),m={count:0},h=Object(l.b)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),p=Object(l.c)(h),b=n(1),f=n(2),g=n(3),v=n(4),d=n(9),j=n(36),O=n(12),y=n.n(O),k=n(17),E=(n(47),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).register=function(){a.props.history.push("/register")},a.state={},a}return Object(f.a)(n,[{key:"submitLogin",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={userName:"myxtl",password:"qwer1234"},window.localStorage.setItem("userInfo",JSON.stringify(t)),this.props.history.push("/home");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login-btn",onClick:this.submitLogin.bind(this)},"\u767b\u5f55"),c.a.createElement("div",{className:"login-btn",onClick:this.register.bind(this)},"\u6ce8\u518c"))}}]),n}(r.Component)),C=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;Object(b.a)(this,n),a=t.call(this,e);var r=JSON.parse(window.localStorage.getItem("userInfo"));return a.state={userInfo:r,isLogoin:!!r},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.history;this.state.isLogoin||e.replace("/login")}},{key:"componentWillMount",value:function(){var e=this.props.history;this.state.isLogoin||e.replace("/login")}},{key:"render",value:function(){var e=this.props,t=e.hasTab,n=Object(j.a)(e,["hasTab"]);return this.state.isLogoin?c.a.createElement(d.a,Object.assign({},n,{render:function(e){return c.a.createElement("div",{className:t?"tabPageContent":"noTabPageContent"},c.a.createElement(r.Component,e))}})):c.a.createElement(d.a,Object.assign({},n,{render:function(e){return c.a.createElement(r.Fragment,null,c.a.createElement(E,null))}}))}}]),n}(r.Component),w=Object(d.e)(C),N=(n(49),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleClick=function(){a.props.history.push("/test")},a.state={},a}return Object(f.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-home"},c.a.createElement("div",{onClick:this.handleClick.bind(this)},"\u8df3\u8f6c\u81f3test\u9875\u9762"))}}]),n}(r.Component)),T=n(8),L=n.n(T),I={baseUrl:{dev:"http://192.168.0.112:5555",pro:"http://192.168.0.112:5555"},tabList:[{icon:"iconfont icon-shouye",name:"\u9996\u9875",url:"/home"},{icon:"iconfont icon-fenlei",name:"\u5206\u7c7b",url:"/category"},{icon:"iconfont icon-gouwuche",name:"\u8d2d\u7269\u8f66",url:"/cart"},{icon:"iconfont icon-wode",name:"\u6211\u7684",url:"/user"}]},x=I.baseUrl.pro,S={},P=L.a.CancelToken;L.a.interceptors.request.use((function(e){return S[e.url]?(S[e.url]("\u64cd\u4f5c\u53d6\u6d88"),S[e.url]=a):S[e.url]=a,e}),(function(e){return Promise.reject(e)})),L.a.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="\u9519\u8bef\u8bf7\u6c42";break;case 401:e.message="\u672a\u6388\u6743\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55";break;case 403:e.message="\u62d2\u7edd\u8bbf\u95ee";break;case 404:e.message="\u8bf7\u6c42\u9519\u8bef,\u672a\u627e\u5230\u8be5\u8d44\u6e90";break;case 405:e.message="\u8bf7\u6c42\u65b9\u6cd5\u672a\u5141\u8bb8";break;case 408:e.message="\u8bf7\u6c42\u8d85\u65f6";break;case 500:e.message="\u670d\u52a1\u5668\u7aef\u51fa\u9519";break;case 501:e.message="\u7f51\u7edc\u672a\u5b9e\u73b0";break;case 502:e.message="\u7f51\u7edc\u9519\u8bef";break;case 503:e.message="\u670d\u52a1\u4e0d\u53ef\u7528";break;case 504:e.message="\u7f51\u7edc\u8d85\u65f6";break;case 505:e.message="http\u7248\u672c\u4e0d\u652f\u6301\u8be5\u8bf7\u6c42";break;default:e.message="\u8fde\u63a5\u9519\u8bef".concat(e.response.status)}else e.message="\u8fde\u63a5\u5230\u670d\u52a1\u5668\u5931\u8d25";return Promise.resolve(e.response)})),L.a.defaults.baseURL=x,L.a.defaults.headers={},L.a.defaults.timeout=1e4;var D=function(e,t){return new Promise((function(n,r){L()({method:"get",url:e,params:t,cancelToken:new P((function(e){a=e}))}).then((function(e){n(e)}))}))},B=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).getCategoryList=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/category/query");case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getCategoryList()}},{key:"render",value:function(){return c.a.createElement("div",null,"PageCategory")}}]),n}(r.Component),J=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"PageGoodsDetail")}}]),n}(r.Component),M=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,"pagecart"))}}]),n}(r.Component),q=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"handleLogout",value:function(){window.localStorage.clear(),this.props.history.push("/login")}},{key:"componentDidMount",value:function(){L.a.get("https://hb.4coder.org.cn/poster_json/poster_34.json").then((function(e){}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"logout",onClick:this.handleLogout.bind(this)},"\u9000\u51fa\u767b\u5f55"))}}]),n}(r.Component),F=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"goBack",value:function(){(0,this.props.history.go)(-1)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"btn",onClick:this.goBack.bind(this)},"\u8fd4\u56de\u767b\u5f55"))}}]),n}(r.Component),U=n(22),_=(n(67),[{path:"/home",name:"home",component:N,hasTab:!0},{path:"/goodsDetail/:id",name:"goodsDetail",component:J,hasTab:!1},{path:"/category",name:"category",component:B,hasTab:!0},{path:"/cart",name:"cart",component:M,hasTab:!0},{path:"/user",name:"user",component:q,hasTab:!0},{path:"/test",name:"test",component:function(e){var t=Object(r.useState)(0),n=Object(U.a)(t,2),a=n[0],o=n[1],s=Object(r.useState)({}),i=Object(U.a)(s,2);i[0],i[1];return c.a.createElement("div",{className:"test"},c.a.createElement("p",null,a),c.a.createElement("button",{onClick:function(){o(a+1)}},"Click me!"))},hasTab:!1},{path:"/login",name:"login",component:E,hasTab:!1},{path:"/register",name:"register",component:F,hasTab:!1}]),A=(0,n(7).createBrowserHistory)(),G=(n(68),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"changeIndex",value:function(e){this.props.history.push(e.url)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tabList,a=t.history.location.pathname,r=!1;return _.forEach((function(e,t){e.path===a&&(r=e.hasTab)})),r?c.a.createElement("nav",{className:"tab"},n.map((function(t,n){return c.a.createElement("div",{className:a===t.url?"tabItem active":"tabItem",key:n,onClick:e.changeIndex.bind(e,t)},c.a.createElement("div",{className:a===t.url?"itemIcon activeIcon":"itemIcon"},c.a.createElement("i",{className:t.icon})),c.a.createElement("div",{className:"itemName noSelect"},t.name))}))):null}}]),n}(r.Component)),H=Object(d.e)(G);function R(e){return e.routes.map((function(e){return c.a.createElement(r.Fragment,null,c.a.createElement(w,{path:e.path,key:e.name,hasTab:e.hasTab,exact:!0,component:e.component}))}))}var W=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.b,{history:A},c.a.createElement(r.Fragment,null,c.a.createElement(R,{routes:_}),c.a.createElement(H,{tabList:I.tabList}))))}}]),n}(r.Component);n(69),n(70),n(71);s.a.render(c.a.createElement(u.a,{store:p},c.a.createElement(i.a,null,c.a.createElement(W,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.03caf728.chunk.js.map