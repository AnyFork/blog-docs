(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{662:function(s,t,e){"use strict";e.r(t);var a=e(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v(" 经过几天的尝试，踩了无数的坑，终于搭建好了一个属于自己的博客。在此记录一下踩坑历\n史，让以后的小伙伴们少走弯路，能够轻轻松松搭建自己的博客。文档采用了"),e("code",[s._v("vuepress")]),s._v("进行构建，同时对"),e("code",[s._v("vuepress-theme-reco")]),s._v("主题进行了魔改，整个主题大的布局未改动，只是对首页和展示页面进行了布局调整，最终效果为当前博客显示效果。小伙伴们还等什么，赶快开始吧！👍")]),s._v(" "),e("Boxx"),s._v(" "),e("h2",{attrs:{id:"一、初始化项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、初始化项目"}},[s._v("#")]),s._v(" 一、初始化项目")]),s._v(" "),e("p",[s._v(" 由于"),e("code",[s._v("vuepress-theme-reco 2.x")]),s._v("版本还未发布正式版，项目目前采用稳定版"),e("code",[s._v("vuepresss 1.x")]),s._v("和"),e("code",[s._v("vuepress-theme-reco 1.x")]),s._v("版本。可以参考"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),e("OutboundLink")],1),s._v("官网的脚手架"),e("code",[s._v("@vuepress-reco/theme-cli")]),s._v("进行项目目录构建。")]),s._v(" "),e("p",[s._v("1、官方脚手架快速开始创建项目，以 npm 为例:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打开cmd全局安装脚手架")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vuepress-reco/theme-cli -g\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过脚手架命令创建项目")]),s._v("\ntheme-cli init\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("2、按照提示输入项目名称，回车等待项目目录生成")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/markdown/build.png",alt:"项目生成命令"}})]),s._v(" "),e("p",[s._v("3、用 vscode 打开项目，执行以下命令启动项目")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装依赖")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动项目")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("启动成功后，效果如下：\n"),e("img",{attrs:{src:"/images/markdown/start.png",alt:"项目启动效果"}})]),s._v(" "),e("h2",{attrs:{id:"二、目录结构调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、目录结构调整"}},[s._v("#")]),s._v(" 二、目录结构调整")]),s._v(" "),e("p",[e("code",[s._v("vuepress-theme-reco 1.x")]),s._v("脚手架生成的目录和"),e("code",[s._v("vuepress")]),s._v("官方推荐的目录存在差异，"),e("code",[s._v(".vuepress")]),s._v("和"),e("code",[s._v("docs")]),s._v("目录同级，均在项目根目录下，项目首页默认为根目录下的"),e("code",[s._v("REAME.MD")]),s._v("文件。如果不想调整目录，可跳过步骤二。\n1、目录调整")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("将"),e("code",[s._v(".vuepress")]),s._v("整个目录放置在"),e("code",[s._v("docs")]),s._v("目录下，项目默认首页("),e("code",[s._v("/")]),s._v(")变更为"),e("code",[s._v("docs")]),s._v("目录下的"),e("code",[s._v("README.md")]),s._v("文件。倘若目录不调整，也没大的问题，只是脚手架生成的文档目录为当前项目根路径下的"),e("code",[s._v("README.md")]),s._v("文件，代码提交仓库后，会影响仓库的"),e("code",[s._v("README.md")]),s._v("文件的排版。")])]),s._v(" "),e("li",[e("p",[s._v("调整完目录结构后，将"),e("code",[s._v("package.json")]),s._v("文件下的启动脚本变更如下：\n2、脚本调整")])])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("至此项目搭建基础就调整完了，小伙伴们就可以开开心心的写"),e("code",[s._v("markdown")]),s._v("文件了。")]),s._v(" "),e("h2",{attrs:{id:"三、功能配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、功能配置"}},[s._v("#")]),s._v(" 三、功能配置")]),s._v(" "),e("p",[s._v(" 像回到顶部，分页，评论，时间线，多语言，左侧侧边栏，右侧侧边栏，文档摘要，自定义容器等功能官网已经写的很详细了，按照"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1),s._v("配置即可，如果看不懂，那就多看几遍，多试试就懂了。下面针对官网部分功能简单说一下相关配置。")]),s._v(" "),e("p",[s._v("1、"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html#%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"}},[s._v("评论"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v(" 主题内置评论插件"),e("code",[s._v("@vuepress-reco/vuepress-plugin-comments")]),s._v("，可以根据自己的喜好选择"),e("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Valine"),e("OutboundLink")],1),s._v("或者"),e("a",{attrs:{href:"https://vssue.js.org/zh/options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vssue"),e("OutboundLink")],1),s._v("；\n如果你想默认不加载评论，而只在某些页面显示评论功能，可以在"),e("code",[s._v("valineConfig")]),s._v("或"),e("code",[s._v("vssueConfig")]),s._v("中设置"),e("code",[s._v("showComment: false")]),s._v("，并在需要展示评论的页面 设置"),e("code",[s._v("isShowComments: true")]),s._v("。\n如果仅是某篇文章不想设置开启评论功能，可以在"),e("code",[s._v("front-matter")]),s._v("设置"),e("code",[s._v("isShowComments: false")]),s._v("。")]),s._v(" "),e("p",[s._v(" 浏览量仅在使用"),e("code",[s._v("Valine")]),s._v("时显示,使用"),e("code",[s._v("Valine")]),s._v("评论需要在"),e("code",[s._v("Valine")]),s._v("官网申请"),e("code",[s._v("appId: 'GpWG2PgOaXLTcz******dvza-gzGzoHsz'和appKey: 'NgptF7WB***YNPobYYtla'")]),s._v("，并进行配置才能\n使用，配置如下：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("theme")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//valine配置，官网地址：https://valine.js.org/quickstart.html")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("valineConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("appId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GpWG2PgOaXLTcz******dvza-gzGzoHsz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("appKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NgptF7WB***YNPobYYtla'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("showComment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'填写邮箱可以收到回复哦!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//邮件提醒")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("notify")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//验证码")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("verify")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("recordIP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("官方默认推荐的评论为"),e("code",[s._v("Valine")]),s._v("和"),e("code",[s._v("Vssue")]),s._v("，小编刚开始采用的是"),e("code",[s._v("Valine")]),s._v(",不仅可以查看浏览量，还能写评论，缺点是"),e("code",[s._v("Valine")]),s._v("是匿名评论的，评论后的内容通过"),e("code",[s._v("Valine")]),s._v("后台才能管理，不是太方便。所以最终选择了"),e("code",[s._v("gitalk")]),s._v(",通过github登录后发表评论，评论储存在仓库的issue区域，配置也比较简单，具体配置请看[gitalk]")]),s._v(" "),e("p",[s._v("2、"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/password.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("加密"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v(" 如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 keys，可以设置多个密码，数组的值必须是字符串。配置如下:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("theme")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置项目加密密钥")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keyPage")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1.3.0 版本后需要设置为密文,['32位的 md5 加密密文']")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keys")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e10adc3949ba59abbe56e057f20f883e'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 登录页动画球的颜色")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#42b983'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 登录页动画线的颜色")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("lineColor")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#42b983'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"}),e("p",[s._v("注意：上面配置的密码是项目级的，如果需要配置页面密码，需要在"),e("code",[s._v("front-matter")]),s._v("中配置"),e("code",[s._v("keys: - e10adc3949ba59abbe56e057f20f883e")]),s._v(",此密码同样需要 32 位的 md5 加密密文。")])]),e("p",[s._v("3、"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/home.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("自定义首页"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("自定义首页会自动添加"),e("code",[s._v("header")]),s._v(" 和 "),e("code",[s._v("footer")]),s._v("，自定义部分无需考虑添加头部和脚部内容。")])]),e("p",[s._v("将你希望首页样式封装成 vue 组件，封装成插件或者@vuepress/plugin-register-components 插件全局注册，然后配置 type:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("theme")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your vue component name'")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("小编当前的博客采用的就是自定义首页和自定义单页面"),e("code",[s._v("page")]),s._v(",详细配置请看[首页]和[单页面 page]")]),s._v(" "),e("h2",{attrs:{id:"四、插件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、插件安装"}},[s._v("#")]),s._v(" 四、插件安装")]),s._v(" "),e("p",[s._v(" 通过安装"),e("code",[s._v("vuepress-theme-reco")]),s._v("主题配套插件，可以"),e("code",[s._v("增强")]),s._v("网站的"),e("code",[s._v("逼格")]),s._v(",效果更加"),e("code",[s._v("炫酷")])]),s._v(" "),e("p",[s._v("1、官方已有功能配置")]),s._v(" "),e("h2",{attrs:{id:"五、主题魔改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、主题魔改"}},[s._v("#")]),s._v(" 五、主题魔改")]),s._v(" "),e("Reward")],1)}),[],!1,null,null,null);t.default=r.exports}}]);