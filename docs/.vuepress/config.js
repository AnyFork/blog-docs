const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
const plugins = require('./config/plugins')
module.exports = {
  //站点根路径,默认配置/
  base: '/blog-docs/',
  //站点语言配置
  lang: 'zh-CN',
  title: '小紫念沁',
  description: '资料文档汇集网站',
  dest: 'dist',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    //关闭referrer,防止第三方图片因防盗链无法显示问题。
    ['meta', { name: 'referrer', content: 'never' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['script', { language: 'javascript', type: 'text/javascript', src: '/js/jquery.min.js' }],
    ['script', { language: 'javascript', type: 'text/javascript', src: '/js/flux.min.js' }],
    ['link', { href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3", rel: "stylesheet" }],
    ['script', { language: 'javascript', type: 'text/javascript', src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3" }]
  ],
  //修改默认的语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    sidebarDepth:2,
    mode: 'auto',
    //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    subSidebar: 'auto',
    //valine配置，官网地址：https://valine.js.org/quickstart.html
    valineConfig: {
      appId: 'GpWG2PgOaXLTczcInOTXdvza-gzGzoHsz',
      appKey: 'NgptF7WB2wjLOjYNPobYYtla',
      showComment: false,
      placeholder: '填写邮箱可以收到回复哦!',
      // 邮件提醒
      notify: true,
      // 验证码
      verify: true,
      recordIP: true
    },
    //顶部nav配置
    nav: nav,
    //侧边栏sidebar
    sidebar: sidebar,
    //自定义首页
    type: 'blog',
    //blog分类和标签设置
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      },
      // 信息栏展示社交信息
      socialLinks: [
        { icon: 'reco-github', link: 'https://anyFork.github.io/blog-docs/' },
        { icon: 'reco-mayun', link: 'https://anyFork.gitee.io/blog-docs/' }
      ]
    },
    friendLink: [
      {
        title: 'vuepress 2.x',
        link: 'https://v2.vuepress.vuejs.org/zh/'
      },
      {
        title: 'vuepress 1.x社区',
        link: 'https://vuepress-community.netlify.app/zh/'
      },
      {
        title: 'vuepress-theme-reco 2.x',
        link: 'http://v2.vuepress-reco.recoluan.com/'
      },
      {
        title:'TypeScript中文文档',
        link:'https://ts.yayujs.com/'
      }
    ],
    logo: '/images/user.jpg',
    algolia: {
      apiKey: 'e3224f6a8f05632af9c14c9767650b54',
      indexName: 'anyfork',
      appId: '09V7PWK61N'
    },
    author: '小紫念沁',
    authorAvatar: '/images/user.jpg',
    record: '陕ICP备17067667号-1',
    startYear: '2022',
    //开启最后更新
    lastUpdated: true,
    //开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    lastUpdated: '上次更新',
    //git地址
    repo: 'AnyFork/blog-docs',
    //如果你的文档不在仓库的根部
    docsDir: 'docs',
    //是否开启编辑链接
    editLinks: true,
    //链接文本
    editLinkText: '在 GitHub 上编辑此页！',
    //仓库代码提交的分支,默认main
    docsBranch: 'main'
  },
  markdown: {
    lineNumbers: true
  },
  //指定开发服务器的主机名
  host: '0.0.0.0',
  //端口
  port: 9527,
  //插件配置
  plugins: plugins
}
