import { AnyForkTheme } from "./theme";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { navbar, plugins, sidebar, firendLink } from './config/index'
import { AnyForkThemeOptions } from "./theme/types/theme";
import { path } from '@vuepress/utils'
export default defineUserConfig({
  //站点根路径,默认配置/
  base: "/blog-docs/",
  //站点语言配置
  lang: "zh-CN",
  title: "小紫念沁",
  description: "资料文档汇集网站",
  dest: "dist",
  head: [
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/blog-docs/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
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
    //仓库地址
    repo: 'https://github.com/AnyFork/blog-docs',
    //如果你的文档不在仓库的根部
    docsDir: 'docs',
    //是否开启编辑链接
    editLinks: true,
    //链接文本
    editLinkText: '在 GitHub 上编辑此页！',
    //仓库代码提交的分支,默认main
    docsBranch: 'main',
    //开启最后更新
    lastUpdated: true,
    //开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    lastUpdatedText: '上次更新',
    //是否启用 贡献者列表
    contributors: true,
    //贡献者列表 标签的文字
    contributorsText: '贡献者',
    //信息栏展示社交信息
    socialLinks: [
      { icon: 'GithubOutlined', link: 'https://anyFork.github.io/blog-docs/' },
      { icon: 'GoogleCircleFilled', link: 'https://anyFork.gitee.io/blog-docs/' }
    ],
    //友情链接
    friendLink: firendLink,
    colorMode: "auto",
    //侧边栏深度
    sidebarDepth: 3,
    navbar: navbar,
    sidebar: sidebar
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
      },
      //打包配置
      build: {
        //配置超过1000kb经过提醒
        chunkSizeWarningLimit: 3000,
        rollupOptions: {
          output: {
            chunkFileNames: 'assets/js/[name].js',
            entryFileNames: 'assets/js/[name].js',
          }
        }
      }
    }
  }),
  //注册插件
  plugins: plugins,
  clientConfigFile: path.resolve(__dirname, './client.ts'),
});
