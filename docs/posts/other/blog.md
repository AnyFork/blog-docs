---
title: VuePress博客搭建文档
date: 2022-8-23 15:30:27
description: 从零开始搭建一个基于vuepress2.X版本的Markdown博客文档。
lang: zh-CN
tag:
  - 博客
categoy:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202208231513291.png
sidebar: 'auto'
sticky: 1
---

&emsp;经过一段时间的摸索，踩过了无数的坑，终于搭建好了一个属于自己的博客。在此记录一下踩坑过程，让以后的小伙伴们搭建自己博客的时候少走弯路。博客采用了`vuepress@2.x`版本进行构建，同时对默认主题进行了本地化继承修改，整个主题大的布局未改动，只是对首页和展示页面进行了布局调整，最终效果为当前博客显示效果。小伙伴们还等什么，赶快开始吧！👍

<!-- more -->

:::tip
1、博主以前也用`vuepress-theme-reco@1.x`主题搭建了一个博客，比较喜欢vuepress-theme-reco@1.x风格，由于`vuepress-theme-reco@1.x`采用的技术都相对目前比较落后，后来便用`vuepress 2.X`开发了现在的博客，整体页面风格和样式和原来的一模一样，但主题还是继承了`vuepress 2.X`默认主题，增加了博客,分类，标签功能和其他首页特效插件。

2、博客地址：<https://anyfork.github.io/blog-docs/>或<https://anyfork.gitee.io/blog-docs/>
:::

## 一 初始化项目

### 1 环境依赖

- [Node.js v14+](https://nodejs.org/)，最低使用`Node 14+`版本，建议使用`Node 14.16.0`版本

::: warning

- 使用 [pnpm](https://pnpm.io/zh/) 时，你可能需要安装 vue 和 @vuepress/client 作为 peer-dependencies ，即 pnpm add -D vue @vuepress/client@next 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [.yarnrc.yml](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 nodeLinker: 'node-modules'

:::

### 2 快速开始

- 创建项目目录

```sh
# 创建项目目录
mkdir blog-docs
# 进入项目目录
cd blog-docs
```

- 初始化项目

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="npm" active>

```bash:
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>

- 依赖安装

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="npm" active>

```bash:
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

- 在`package.json`增加中添加一些 scripts

```sh
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

- 将默认的临时目录和缓存目录添加到`.gitignore`文件中

```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
echo '.history' >> .gitignore
```

- 创建文档目录

```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

### 3 项目启动

用 vscode 打开项目，新建终端，执行启动脚本命令

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn dev
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

详细的创建过程请参考[vuepress 官网快速上手](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)，至此项目搭建基础就调整完了，小伙伴们就可以开开心心的写`markdown`文件了。

## 二 功能配置

&emsp;像回到顶部，分页，评论，时间线，多语言，左侧侧边栏，右侧侧边栏，文档摘要，自定义容器等功能官网已经写的很详细了，按照[官方文档](https://vuepress-theme-reco.recoluan.com/)配置即可，如果看不懂，那就多看几遍，多试试就懂了。下面针对官网部分功能简单说一下相关配置。

### 1、[评论](https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html#介绍)

&emsp;主题内置评论插件`@vuepress-reco/vuepress-plugin-comments`，可以根据自己的喜好选择[Valine](https://valine.js.org/)或者[Vssue](https://vssue.js.org/zh/options/)；
如果你想默认不加载评论，而只在某些页面显示评论功能，可以在`valineConfig`或`vssueConfig`中设置`showComment: false`，并在需要展示评论的页面 设置`isShowComments: true`。
如果仅是某篇文章不想设置开启评论功能，可以在`front-matter`设置`isShowComments: false`。

&emsp;浏览量仅在使用`Valine`时显示,使用`Valine`评论需要在`Valine`官网申请`appId: 'GpWG2PgOaXLTcz******dvza-gzGzoHsz'和appKey: 'NgptF7WB***YNPobYYtla'`，并进行配置才能
使用，配置如下：

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
  //valine配置，官网地址：https://valine.js.org/quickstart.html
  valineConfig: {
    appId: 'GpWG2PgOaXLTcz******dvza-gzGzoHsz',
    appKey: 'NgptF7WB***YNPobYYtla',
    showComment: false,
    placeholder: '填写邮箱可以收到回复哦!',
    //邮件提醒
    notify: true,
    //验证码
    verify: true,
    recordIP: true
  }
}
```

官方默认推荐的评论为`Valine`和`Vssue`，小编刚开始采用的是`Valine`,不仅可以查看浏览量，还能写评论，缺点是`Valine`是匿名评论的，评论后的内容通过`Valine`后台才能管理，不是太方便。所以最终选择了`gitalk`,通过 github 登录后发表评论，评论储存在仓库的 issue 区域，配置也比较简单，具体配置请看[gitalk](#gitalk)

## 三 插件安装

&emsp;vuepress 允许我们通过扩展插件的方式来拓展功能，通过插件可以丰富我们博客功能，使页面效果更加`炫酷`，`增强`网站的`逼格`，详细情况参考[vuepress@2.x 插件配置方式](https://v2.vuepress.vuejs.org/zh/guide/plugin.html)和[vuepress@2.x 内置插件](https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html)。`Vuepress 2.x`插件 API 变化比较大，使用方式也采用函数式调用，因此社区`Vuepress 1.x`插件不能使用。博主博客开发过程中针对`Vuepress 1.x`的部分插件进行了兼容`Vuepress 2.x`适配，以下是博客中用到的插件：

### 1 PWA 插件<Badge type="tip" text="官方插件" vertical="top" />

::: tip
1、[pwa](https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html)插件为`vuepress 2.x`官方开发的插件，使你的 VuePress 站点成为一个[渐进式 Web 应用 (PWA)](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)，该插件使用[workbox-build](https://developers.google.com/web/tools/workbox/modules/workbox-build?utm_source=devtools) 来生成 Service Worker 文件，并通过[register-service-worker](https://github.com/yyx990803/register-service-worker) 来注册 Service Worker

2、[pwa-popup](https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa-popup.html) 插件为`vuepress 2.x`官方开发的插件，提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。
该插件必须和 pwa 插件 一起使用，并且 skipWaiting 配置项不能设置为 true 。当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。

3、`pwa`和`pwa-popup`为官方开发的插件，并未集成的默认主题中，因此需要自己安装依赖。
:::

- [pwa](https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html)插件依赖安装和插件配置：

  - 安装依赖

  ```sh
   npm i -D @vuepress/plugin-pwa@next
  ```

  - 插件配置

  ```js
  import { pwaPlugin } from '@vuepress/plugin-pwa'
  module.exports = {
    plugins: [pwaPlugin()]
  }
  ```

- [pwa-popup](https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa-popup.html)插件依赖安装和插件配置：

  - 安装依赖

  ```sh
   npm i -D @vuepress/plugin-pwa-popup@next
  ```

  - 插件配置

  ```js
   pwaPopupPlugin({
        locales: {
            '/': {
                message: '发现新内容可用',
                buttonText: '点我刷新',
            }
        },
    }),
  ```

- 更多详细配置，请参考`pwa`官网配置：<https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html>

### 2 DocSearch 插件<Badge type="tip" text="官方插件" vertical="top" />

::: info
1、将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。

2、当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。

3、`DocSearch`为官方开发的插件，并未集成的默认主题中，因此需要自己安装依赖。
:::

- [DocSearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)插件依赖安装和插件配置：

- 安装依赖

  ```sh
   npm i -D @vuepress/plugin-docsearch@next
  ```

- 插件配置

  ```js
  import { docsearchPlugin } from '@vuepress/plugin-docsearch'
  module.exports = {
    plugins: [
      //docsearch插件,https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html
      docsearchPlugin({
        apiKey: 'e3224f6a8f05632af9c14c97******b54',
        indexName: 'anyfork',
        appId: '09V****WK61N',
        placeholder: '搜索文档',
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档'
              }
            }
          }
        }
      })
    ]
  }
  ```

- 更多详细配置，请参考[DocSearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)官网配置，`Algolia`配置请参考：[VuePress 博客优化之开启 Algolia 全文搜索](./algoliaSearch.md)

### 3 ReadingTime 插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`ReadingTime插件`统计文章字数和预估阅读时间，详情参考：<https://vuepress-theme-hope.github.io/v2/reading-time/zh/>
:::

- [ReadingTime](https://vuepress-theme-hope.github.io/v2/reading-time/zh/)插件依赖安装和插件配置：

- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-reading-time2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-reading-time2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-reading-time2@next@next
```

  </CodeGroupItem>

</CodeGroup>
- 插件配置

```js
import { readingTimePlugin } from 'vuepress-plugin-reading-time2'
module.exports = {
  plugins: [readingTimePlugin({})]
}
```

- 更多详细配置，请参考[readingTime](https://vuepress-theme-hope.github.io/v2/reading-time/zh/)官网配置。

### 4 SEO 插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`SEO插件`本插件会通过向网站`<head>` 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性，详情参考：<https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html>
:::

- [SEO](https://vuepress-theme-hope.github.io/v2/seo/zh/)插件依赖安装和插件配置：

- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-seo2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-seo2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-seo2@next
```

  </CodeGroupItem>

</CodeGroup>

- 插件配置

```js
import { seoPlugin } from 'vuepress-plugin-seo2'
module.exports = {
  plugins: [
    // seo插件，https://vuepress-theme-hope.github.io/v2/seo/
    seoPlugin({
      hostname: 'https://anyfork.github.io/',
      author: {
        name: '小紫念沁',
        url: 'https://anyfork.github.io/blog-docs/'
      }
    })
  ]
}
```

- 更多详细配置，请参考[SEO](https://vuepress-theme-hope.github.io/v2/seo/zh/config.html)官网配置。

### 5 SiteMap 插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`siteMap插件`本插件会为你的网站自动生成 Sitemap。为了使插件正常工作，你需要将部署的域名传递给插件的 hostname 选项。插件会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言版本替代地址。，详情参考：<https://vuepress-theme-hope.github.io/v2/sitemap/zh/>
:::

- [SEO](https://vuepress-theme-hope.github.io/v2/seo/zh/)插件依赖安装和插件配置：

- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-sitemap2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-sitemap2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-sitemap2@next
```

  </CodeGroupItem>

</CodeGroup>
- 插件配置

```js
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
module.exports = {
  plugins: [
    // siteMap站点地图插件，https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html
    sitemapPlugin({
      hostname: 'https://anyfork.github.io/blog-docs/',
      extraUrls: ['https://anyfork.gitee.io/blog-docs/']
    })
  ]
}
```

- 更多详细配置，请参考[siteMap](https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html)官网配置。

### 6 Copyright 插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`copyright插件`此插件可以在访问者从你的站点复制内容时，自动追加版权信息，也可以禁止站点的复制或者选择。详情参考：<https://vuepress-theme-hope.github.io/v2/copyright/zh/>
:::

- [copyright](https://vuepress-theme-hope.github.io/v2/copyright/zh/)插件依赖安装和插件配置：
- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-copyright2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-copyright2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-copyright2@next
```

  </CodeGroupItem>

</CodeGroup>

- 插件配置

```js
import { copyrightPlugin } from 'vuepress-plugin-copyright2'
module.exports = {
  plugins: [
    //复制加版权插件，https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html
    copyrightPlugin({
      hostname: 'https://anyfork.github.io/blog-docs/',
      author: '小紫念沁',
      global: true
    })
  ]
}
```

- 更多详细配置，请参考[copyright](https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html)官网配置。

### 7 CopyCode 插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`copyCode插件`此插件会自动添加复制按钮到每个代码块的右下角。默认情况下，按钮仅在桌面模式显示，如果你需要在移动端展示这个按钮，请将 showInMobile 设置为 true。在用户点击复制按钮后，屏幕上会显示一个复制成功的提示。默认的提示时长为 2000ms，如果你需要更改这个时长，请设置 duration(单位 ms)，如果你不需要这个提示，请将 duration 设置为 0。详情参考：<https://vuepress-theme-hope.github.io/v2/copy-code/zh/>
:::

- [CopyCode](https://vuepress-theme-hope.github.io/v2/copy-code/zh/)插件依赖安装和插件配置：
- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-copy-code2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-copy-code2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-copy-code2@next
```

  </CodeGroupItem>

</CodeGroup>

- 插件配置

```js
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
module.exports = {
  plugins: [
    //代码复制插件，https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCodePlugin({
      selector: '.theme-default-content div[class*="language-"] pre',
      locales: {
        '/': {
          copy: '复制成功!',
          hint: 'copy!'
        }
      }
    })
  ]
}
```

- 更多详细配置，请参考[copyCode](https://vuepress-theme-hope.github.io/v2/copy-code/zh/config.html)官网配置。

### 8 Giscus 评论插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`Giscus插件`Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便。详情参考：<https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html>
:::

- [Giscus](https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html)插件依赖安装和插件配置：
- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-comment2@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-comment2@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-comment2@next
```

  </CodeGroupItem>

</CodeGroup>

- 准备工作

  - 1 你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点
  - 2 你需要安装[Giscus App](https://github.com/apps/giscus)，使其有权限访问对应仓库。
  - 3 在完成以上步骤后，请前往[Giscus](https://giscus.app/zh-CN) 页面 获得你的设置。
    你只需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分，获取 data-repo, data-repo-id, data-category 和 data-category-id 这四个属性。

- 插件配置

  请将 `data-repo`, `data-repo-id`, `data-category` 和 `data-category-id` 作为插件选项传入 `repo`, `repoId`, `category categoryId`

```js
import { commentPlugin } from 'vuepress-plugin-comment2'
module.exports = {
  plugins: [
    //giscus评论插件,https://vuepress-theme-hope.github.io/v2/comment/zh/config/giscus.html
    commentPlugin({
      provider: 'Giscus',
      comment: true,
      //仓库名称
      repo: 'AnyFork/blog-docs',
      //仓库id
      repoId: 'R_kgDOG0MPtA',
      //分类类型
      category: 'Announcements',
      //分类id
      categoryId: 'DIC_kwDOG0MPtM4CQ_kf',
      //页面 ↔️ discussion 映射关系
      mapping: 'og:title'
    })
  ]
}
```

- 更多详细配置，请参考[Giscus](https://vuepress-theme-hope.github.io/v2/comment/zh/config/giscus.html)官网配置。

### 9 Markdown 语法扩展插件<Badge type="tip" text="Hope插件" vertical="top" />

::: tip
1、`Hope插件`指`vuepress-theme-hope`主题作者开发的插件库。

2、`Hope插件`官网地址：<https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html>

3、`Markdown语法扩展插件`通过安装并启用此插件，你可以在 Markdown 中使用更多的语法。详情参考：<https://vuepress-theme-hope.github.io/v2/md-enhance/zh/>
:::

- [Markdown 语法扩展](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/)插件依赖安装和插件配置：
- 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:
yarn add -D vuepress-plugin-md-enhance@next
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:
npm i -D vuepress-plugin-md-enhance@next
```

  </CodeGroupItem>
    <CodeGroupItem title="pnpm">

```bash:
pnpm add -D vuepress-plugin-md-enhance@next
```

  </CodeGroupItem>

</CodeGroup>

- 插件配置

```js
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
module.exports = {
  plugins: [
    //markdown 增强插件，https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/
    mdEnhancePlugin({
      // 启用自定义容器
      container: true
    })
  ]
}
```

你可以在选项中 enableAll 设置为 true 来启用插件的所有功能,不建议开启全部扩展功能，可以根据实际情况进行开启

- 更多详细配置，请参考[Markdown 语法扩展](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/)官网配置。
