const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
const plugins = require('./config/plugins')
module.exports = {
  //站点根路径,默认配置/
  base: '/blog-docs',
  //站点语言配置
  lang: 'zh-CN',
  title: '小紫念沁',
  description: '资料文档汇集网站',
  dest: 'dist',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  //修改默认的语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    //设置项目加密密钥
    keyPage: {
      //1.3.0 版本后需要设置为密文,['32位的 md5 加密密文']
      keys: ['e10adc3949ba59abbe56e057f20f883e'],
      // 登录页动画球的颜色
      color: '#42b983',
      // 登录页动画线的颜色
      lineColor: '#42b983'
    },
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
    type: 'IndexPage',
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
        { icon: 'reco-github', link: 'https://github.com/AnyFork/blog-docs' },
        { icon: 'reco-mayun', link: 'https://gitee.com/AnyFork' }
      ]
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: 'vuepress社区',
        desc: 'vuepress中文社区，社区维护的 VuePress 生态系统',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-community.netlify.app/zh/'
      }
    ],
    logo: '/images/user.jpg',
    search: true,
    searchMaxSuggestions: 10,
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
