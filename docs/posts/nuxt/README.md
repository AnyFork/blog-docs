---
title: Nuxt项目创建以及常见配置
date: 2019-04-06 09:44:16
tag:
  - Nuxt
category:
  - Nuxt
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202204060942130.jpg
sticky: 5
---

&emsp;Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于 Vue.js 开发 SSR 应用的一站式解决方案，对客户端/服务端基础架构进行了抽象，主要关注的是应用的 UI 渲染。NuxtJs 可以实现基于 vuejs 的多页面应用，支持 SSR(服务器端渲染)，简化了 SSR 的开发难度，受到了 React SSR 框架 Next.js 的启发，使用 Webpack 和 Node.js 进行封装的基于 Vue 的 SSR 框架，预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置，而且还可以直接用命令把我们制作的 vue 项目生成静态 html。作为框架，Nuxt.js 为客户端/服务端这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。

<!-- more -->

## 一、Nuxt.js 官网地址

1 Nuxt.js 2.x 版本中文网站：<https://www.nuxtjs.cn/>  
2 Nuxt.js 2.x 版本英文网站：<https://nuxtjs.org/>  
3 Nuxt.js 2.x 版本生命周期：<https://nuxtjs.org/docs/concepts/nuxt-lifecycle/>  
4 Nuxt.js 2.x 版本配置文档：<https://nuxtjs.org/docs/get-started/installation>  
5 Nuxt.js 3.x 版本英文网站：<https://v3.nuxtjs.org/>  
截止目前`2022年4月6日10:25:01`为止，NuxtJs3.x 已发布了 beta 版本，NuxtJs3.x 还在开发完善中，不推荐在生产环境中使用。建议使用 NuxtJS 2.x 版本，相对比较稳定。

## 二、SSR(服务端渲染)

SSR，即服务端渲染(Server Side Render)，就是在服务器端将对 Vue 页面进行渲染生成 html 文件，将 html 页面传递给浏览器。
为什么要使用 SSR?  
1、**降低 SPA(Single Page Application)首屏渲染的时间：** SPA 引用是将 bundle.js 从服务器获取，然后在客户端解析并挂载到 dom。而 SSR 直接将 HTML 字符串传递给浏览器。大大加快了首屏加载时间。  
2、**解决 SPA 不利于 SEO(Search Engine Optimization)的优化：** SPA 的 HTML 只有一个无实际内容的 HTML 和一个 app.js，SSR 生成的 HTML 是有内容的，这让搜索引擎能索引到页面内容。

## 三、NUXT.JS 特性

- 基于 Vue.js
- SSR 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- ES2015+语法支持
- 打包和压缩 JS 和 CSS
- HTML 头部标签管理
- 本地开发支持热加载
- 支持各种样式预处理器：SASS、LESS、Stulus 等等
- 支持 HTTP/2 推送
- 支持多页面应用
- 支持页面自定义布局
- 组件自动导入

## 四、开始 Nuxt 项目的搭建

为了快速入门，Nuxt.js 团队创建了脚手架工具 `create-nuxt-app`。确保安装了 npx(npx 在 NPM 版本 5.2.0 默认安装了)

```bash
$ npx create-nuxt-app <项目名>
或
$ yarn create nuxt-app <项目名>
```

详细安装步骤参考官网：<https://www.nuxtjs.cn/guide/installation>

## 五、Nuxt 跨域处理

&emsp;使用过 vue 的同学，肯定知道对于项目中的跨域，vue-cli 对 webpack 中的 proxy 选项进行了一层封装。它暴露出来的是一个叫 proxyTable 的选项，是对 webpack 中的 proxy 和其三方插件 http-proxy-middleware 的一个整合。不幸的 Nuxt 中没有 proxyTable 这么一个配置项来进行跨域的配置。当然幸运的是，在 Nuxt 中你可以直接通过配置 http-proxy-middleware 来处理跨域。更幸运的是 Nuxt 官方提供了两个包来处理 axios 跨域问题。

- [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)：Secure and easy Axios integration for Nuxt.
- [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)：Proxy support for nuxt server

安装依赖包：

```bash
npm i @nuxtjs/axios @nuxtjs/proxy -D
```

然后在 nuxt.config.js 文件里进行配置

```bash
#Modules: https://go.nuxtjs.dev/config-modules
modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

#Axios module configuration: https://go.nuxtjs.dev/config-axios
axios: {
  proxy: true,
  prefix: '/api',
  progress: true,
  withCredentials: true
},
#https://www.npmjs.com/package/@nuxtjs/proxy或https://github.com/nuxt-community/proxy-module
proxy: {
  '/api': {
    target: 'https://route.showapi.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }
}
```

详细配置参考上述链接地址。

## 六、styleResources 配置

当您需要在页面中注入一些变量和 mixin 而不必每次都导入它们时，这非常有用。Nuxt.js 使用 https://github.com/nuxt-community/style-resources-module 来实现这种行为。您需要为 css 预处理器指定要包含的 模式 / 路径 ： less, sass, scss 或 stylus。您不能在此处使用路径别名(~ 和 @)，你需要使用相对或绝对路径。

安装依赖包：

```bash
npm i @nuxtjs/style-resources -D
```

根据需要安装：

- SASS: npm i sass-loader node-sass -D
- LESS: npm i less-loader less -D
- Stylus: npm i stylus-loader stylus -D

如果使用的 npm,则变为 npm install less-loader less -D
修改 nuxt.config.js:

```bash
modules: [
   '@nuxtjs/style-resources'
  ],
styleResources:{
 less:'./assets/common.less'
 }
```

详细配置请参考：<https://github.com/nuxt-community/style-resources-module>

## 七、伪静态配置

Nuxt 路由虽然按照`pages`文件目录层级和内置的规则自动生成路由，但生成的路由没有`.html`后缀，如果需要配置路由伪静态(路由后缀加`.html`),需要在`nuxt.config.js`进行如下配置

```bash
 router: {
    extendRoutes(routes) {
      routes.forEach((item) => {
        if (item.path != '/') {
          item.path = item.path + '.html'
        }
      })
    }
  }
```

详细配置请参考：<https://www.nuxtjs.cn/api/configuration-router>

## 八、组件自动导入配置

Nuxt.js 2.13+ 支持组件自动扫描和自动导入,相关配置参考：<https://go.nuxtjs.dev/config-components>,需要在`nuxt.config.js`进行配置` components: true`,默认 false。
如果`components`组件存放目录下没有多级组件目录，自动导入的组件名称和组件文件名一致，如果存在多级文件目录，自动导入的组件名默认会加上文件层级目录，为了保证每个组件名称自动导入后组件名称不变，需要组个对目前层级进行前缀配置，配置如下：

```bash
# Auto import components: https://go.nuxtjs.dev/config-components
components: [
  { path: '~/components', prefix: '', extensions: ['vue'] },
  { path: '~/components/Layouts/', prefix: '', extensions: ['vue'] },
  { path: '~/components/LinkItem/', prefix: '', extensions: ['vue'] },
  { path: '~/components/RateItem/', prefix: '', extensions: ['vue'] }
]
```

详细配置请参考：<https://go.nuxtjs.dev/config-components>

## 九、Nuxt 打包屏蔽掉全局`console`功能

&emsp;出于安全考虑，线上环境一般不允许浏览器控制台打印任何信息，所以我们打包上线时，就需要屏蔽 console 功能。对于 Nuxt 项目可以通过配置插件的方式，在打包时禁用 console 功能。设置如下：

1、安装依赖包。

```bash
yarn add  babel-plugin-transform-remove-console --save-dev
or
npm install babel-plugin-transform-remove-console --save-dev

```

2、在`nuxt.config.js`进行如下配置：  
因为需要判断环境 所以需要在头部声明变量使用插件，若不需要可以直接在 build > babel > plugins 中使用

```bash
# build进行配置
build: {
    analyze: true,
    babel: {
      #在这里使用
      plugins:plugins
    }
  }
}
```
