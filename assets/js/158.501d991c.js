(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{515:function(t,a,v){"use strict";v.r(a);var r=v(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"jit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jit"}},[t._v("#")]),t._v(" JIT")]),t._v(" "),v("p",[t._v("计算机执行高级语言的两种基本的方式："),v("RouterLink",{attrs:{to:"/知识库/javascript基础/编译原理/jit.html#jie-shi-zhi-hang"}},[t._v("解释执行")]),t._v(" 和 "),v("RouterLink",{attrs:{to:"/知识库/javascript基础/编译原理/jit.html#bian-yi-zhi-hang"}},[t._v("编译执行")])],1),t._v(" "),v("p",[t._v("解释执行的启动速度快，但是执行时的速度慢，而编译执行的启动速度慢，但是执行时的速度快")]),t._v(" "),v("p",[t._v("但是 V8 混合使用编译器和解释器，这个技术称为 JIT（Just In Time）")]),t._v(" "),v("ul",[v("li",[t._v("在 "),v("strong",[t._v("启动过程")]),t._v(" 中 采用了解释执行的策略")]),t._v(" "),v("li",[t._v("在 "),v("strong",[t._v("解释执行")]),t._v("过程 中 如果某段代码的执行频率超过一个值，那么 V8 就会采用 "),v("strong",[t._v("优化编译器")]),t._v(" 将其编译成执行效率更加高效的机器代码")])]),t._v(" "),v("p",[t._v("充分地利用解释执行和编译执行的优点，规避其缺点")]),t._v(" "),v("p",[t._v("解释器（Ignition）和 优化编译器（Turbofan）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/YuArtian/yuartian.github.io/blob/master/.gitbook/assets/v8-gong-zuo-liu-cheng.png?raw=true",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"解释执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解释执行"}},[t._v("#")]),t._v(" 解释执行")]),t._v(" "),v("p",[t._v("先将输入的源代码通过解析器编译成中间代码，之后直接使用解释器解释执行中间代码，最后直接输出结果")]),t._v(" "),v("h2",{attrs:{id:"编译执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译执行"}},[t._v("#")]),t._v(" 编译执行")]),t._v(" "),v("p",[t._v("采用这种方式时，也需要先将源代码转换为中间代码")]),t._v(" "),v("p",[t._v("然后我们的编译器再将中间代码编译成机器代码。通常编译成的机器代码是以二进制文件形式存储的，需要执行这段程序的时候直接执行二进制文件就可以了")]),t._v(" "),v("p",[t._v("还可以使用虚拟机将编译后的机器代码保存在内存中，然后直接执行内存中的二进制代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);