(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(t,a,s){t.exports=s.p+"assets/img/webpackPrefetch、webpackPreload 和 webpackChunkName 到底是干什么的_01.ed6ded68.jpg"},355:function(t,a,s){t.exports=s.p+"assets/img/webpackPrefetch_01.853d2582.jpg"},446:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpackprefetch、webpackpreload-和-webpackchunkname-到底是干什么的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpackprefetch、webpackpreload-和-webpackchunkname-到底是干什么的"}},[t._v("#")]),t._v(" webpackPrefetch、webpackPreload 和 webpackChunkName 到底是干什么的")]),t._v(" "),e("p",[t._v("这几个名词其实都是 webpack "),e("a",{attrs:{href:"https://webpack.docschina.org/api/module-methods/#magic-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("魔法注释（magic comments）"),e("OutboundLink")],1),t._v("里的，文档中说了 6 个配置，配置都可以"),e("strong",[t._v("组合")]),t._v("起来用")]),t._v(" "),e("h2",{attrs:{id:"一句话总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一句话总结"}},[t._v("#")]),t._v(" 一句话总结")]),t._v(" "),e("p",[e("code",[t._v("webpackChunkName")]),t._v(" 是为预加载的文件取别名，"),e("code",[t._v("webpackPreload")]),t._v(" 会在浏览器闲置下载文件，"),e("code",[t._v("webpackPreload")]),t._v(" 会在父 chunk 加载时并行下载文件")]),t._v(" "),e("h2",{attrs:{id:"webpackchunkname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpackchunkname"}},[t._v("#")]),t._v(" webpackChunkName")]),t._v(" "),e("p",[t._v("异步加载中，给异步组件生成的 bundle 定义名字")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAsyncComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 在 import 的括号里 加注释 /* webpackChunkName: "lodash" */ ，为引入的文件取别名')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "lodash" */')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dynamic'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imports'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("生成打包文件如下")]),t._v(" "),e("img",{attrs:{src:s(354)}}),t._v(" "),e("p",[t._v("生成的异步 bundle 的文件名默认会有 vendors~lodash 前缀")]),t._v(" "),e("p",[t._v("其实 webpack 懒加载是用内置的一个插件 "),e("a",{attrs:{href:"https://webpack.docschina.org/plugins/split-chunks-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin"),e("OutboundLink")],1),t._v(" 实现的，这个插件里面有些"),e("a",{attrs:{href:"https://webpack.docschina.org/plugins/split-chunks-plugin/#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认配置项"),e("OutboundLink")],1),t._v("，比如说 "),e("code",[t._v("automaticNameDelimiter")]),t._v("，默认的分割符就是 "),e("code",[t._v("~")]),t._v("，所以最后的文件名才会出现这个符号")]),t._v(" "),e("p",[t._v("若想打包过后的文件名不带 "),e("code",[t._v("vendors~")]),t._v(" 前缀，可以修改 "),e("code",[t._v("webpack.common.js")]),t._v(" 中 "),e("code",[t._v("optimization")]),t._v(" 配置项")]),t._v(" "),e("p",[t._v("详情看 "),e("RouterLink",{attrs:{to:"/灵魂拷问/Webpack/splitChunks有哪些配置项.html"}},[t._v("splitChunks 配置项详细解释")])],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/灵魂拷问/Webpack/webpack懒加载原理.html"}},[t._v("懒加载（异步加载）原理")])],1),t._v(" "),e("h2",{attrs:{id:"webpackprefetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpackprefetch"}},[t._v("#")]),t._v(" webpackPrefetch")]),t._v(" "),e("p",[t._v("如果 import 的时候添加：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "lodash" */')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("就会以 "),e("code",[t._v('<link rel="prefetch" as="script">')]),t._v(" 的形式预拉取 lodash 代码：")]),t._v(" "),e("img",{attrs:{src:s(355)}}),t._v(" "),e("p",[t._v("这个异步加载的代码不需要手动点击 button 触发，webpack 会在父 chunk 完成加载后，闲时加载 "),e("code",[t._v("lodash")]),t._v(" 文件")]),t._v(" "),e("h2",{attrs:{id:"webpackpreload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpackpreload"}},[t._v("#")]),t._v(" webpackPreload")]),t._v(" "),e("p",[e("code",[t._v("webpackPreload")]),t._v(" 是预加载当前导航下可能需要资源，他和 "),e("code",[t._v("webpackPrefetch")]),t._v(" 的主要区别是：")]),t._v(" "),e("ul",[e("li",[t._v("preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。")]),t._v(" "),e("li",[t._v("preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。")]),t._v(" "),e("li",[t._v("preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻")])])])}),[],!1,null,null,null);a.default=n.exports}}]);