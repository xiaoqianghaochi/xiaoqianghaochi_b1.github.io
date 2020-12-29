(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{572:function(a,s,t){"use strict";t.r(s);var r=t(42),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mac下的权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac下的权限问题"}},[a._v("#")]),a._v(" mac下的权限问题")]),a._v(" "),t("h2",{attrs:{id:"usr-local-权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usr-local-权限问题"}},[a._v("#")]),a._v(" /usr/local 权限问题")]),a._v(" "),t("p",[a._v("npm install，或者 npm start 的时候，可能需要各种目录的读写权限")]),a._v(" "),t("p",[a._v("如果你不想每次都输入 sudo 命令，就要设置权限")]),a._v(" "),t("p",[a._v("mac 有 Rootless 机制（也叫SIP），从 OS X El Capitan 10.11 系统开始使用，系统默认将会锁定 /system、/sbin、/usr 这三个目录。用户要获取这三个目录的写权限，需要关闭 Rootless")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" /usr/local/\n")])])]),t("p",[a._v("如果失败提示 Operation not permitted 或其他权限不足，则需要关闭Rootless")]),a._v(" "),t("h3",{attrs:{id:"关闭-rootless-sip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭-rootless-sip"}},[a._v("#")]),a._v(" 关闭 Rootless/SIP")]),a._v(" "),t("p",[a._v("因为 SIP 是系统级的权限操作，我们无法直接关闭它，需要前往「"),t("a",{attrs:{href:"https://support.apple.com/zh-cn/HT201314",target:"_blank",rel:"noopener noreferrer"}},[a._v("macOS 恢复功能"),t("OutboundLink")],1),a._v("」下进行")]),a._v(" "),t("p",[a._v("将 Mac 开机，立即在键盘上按住 Command ⌘ + R，直到看到 Apple 标志或旋转的地球时松开")]),a._v(" "),t("p",[a._v("看到「实用工具」窗口时，恢复功能启动即完成")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.sspai.com/editor/u_753016/_image/2019-06-03/macOS%20%E6%81%A2%E5%A4%8D%E5%8A%9F%E8%83%BD%E4%B8%8B%20%E6%93%8D%E4%BD%9C%201.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"img"}})]),a._v(" "),t("p",[a._v("在上方的菜单栏点击「实用工具」选择「终端」")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.sspai.com/editor/u_753016/_image/2019-06-03/macOS%20%E6%81%A2%E5%A4%8D%E5%8A%9F%E8%83%BD%E4%B8%8B%20%E6%93%8D%E4%BD%9C%202.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"img"}})]),a._v(" "),t("p",[a._v("在终端中，输入「csrutil disable」后回车")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.sspai.com/editor/u_753016/_image/2019-06-03/macOS%20%E6%81%A2%E5%A4%8D%E5%8A%9F%E8%83%BD%E4%B8%8B%20%E6%93%8D%E4%BD%9C%203.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"回车后会提示「成功关闭了系统完整性保护，请重启机器」"}}),a._v("回车后会提示「成功关闭了系统完整性保护，请重启机器」")]),a._v(" "),t("p",[a._v("点击菜单栏  标志，选择「重新启动」")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.sspai.com/editor/u_753016/_image/2019-06-03/macOS%20%E6%81%A2%E5%A4%8D%E5%8A%9F%E8%83%BD%E4%B8%8B%20%E6%93%8D%E4%BD%9C%204.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"img"}})]),a._v(" "),t("p",[a._v("就此关闭了 SIP")]),a._v(" "),t("h3",{attrs:{id:"设置权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置权限"}},[a._v("#")]),a._v(" 设置权限")]),a._v(" "),t("p",[a._v("重启之后，打开终端，输入")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" /usr/local\n")])])]),t("p",[a._v("进行权限更改")])])}),[],!1,null,null,null);s.default=e.exports}}]);