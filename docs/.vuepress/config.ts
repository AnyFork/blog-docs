import { AnyForkTheme } from "./theme";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { navbar, plugins } from './config/index'
import { AnyForkThemeOptions } from "./theme/types/theme";
const { path } = require('@vuepress/utils')
export default defineUserConfig({
  //站点根路径,默认配置/
  base: "/blog-docs/",
  //站点语言配置
  lang: "zh-CN",
  title: "小紫念沁",
  description: "资料文档汇集网站",
  dest: "dist",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/blog-docs/favicon.ico" },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    //关闭referrer,防止第三方图片因防盗链无法显示问题。
    ["meta", { name: "referrer", content: "never" }],
    ["link", { rel: "manifest", href: "/blog-docs/manifest.json" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['script', { language: 'javascript', type: 'text/javascript', src: '/blog-docs/js/jquery.min.js' }],
    ['script', { language: 'javascript', type: 'text/javascript', src: '/blog-docs/js/flux.min.js' }],
  ],
  theme: AnyForkTheme({
    logo: "/images/logo.png",
    author: "小紫念沁",
    authorAvatar: "/images/logo.png",
    //信息栏展示社交信息
    socialLinks: [
      { icon: 'GithubOutlined', link: 'https://anyFork.github.io/blog-docs/' },
      { icon: 'GoogleCircleFilled', link: 'https://anyFork.gitee.io/blog-docs/' }
    ],
    //友情链接
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
        title: 'TypeScript中文文档',
        link: 'https://ts.yayujs.com/'
      }
    ],
    colorMode: "auto",
    //侧边栏深度
    sidebarDepth: 3,
    navbar: navbar,
    sidebar: {
      "/design-patterns/": [
        {
          text: "VuePress Reference",
          collapsible: true,
          children: ["/reference/cli.md", "/reference/config.md"],
        },
        {
          text: "Bundlers Reference",
          collapsible: true,
          children: [
            "/reference/bundler/vite.md",
            "/reference/bundler/webpack.md",
          ],
        },
      ],
    },
  } as AnyForkThemeOptions),
  markdown: {
    headers: {
      level: [1, 2, 3, 4],
    },
  },
  //指定开发服务器的主机名
  host: "0.0.0.0",
  //端口
  port: 9527,
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [require("tailwindcss")({}), require("autoprefixer")({})],
        },
      }
    }
  }),
  //注册插件
  plugins: plugins,
  //定义全局常量
  define: (app) => {
    return {
      POSTS: app.pages,
    };
  },
  clientConfigFile: path.resolve(__dirname, './client.ts'),
});
