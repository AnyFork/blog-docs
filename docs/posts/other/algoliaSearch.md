---
title: VuePress博客优化之开启Algolia全文搜索
date: 2022-07-22 9:07:35
description: VuePress博客优化之开启Algolia全文搜索
tag:
  - Algolia
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207210908451.jpg
sticky: 3
---

&emsp;Algolia 是一个数据库实时搜索服务，能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景。Algolia 的服务支持多种语言支持 Ruby、Rails、Python、PHP、JS、Java、Android、Objective-C 等多种语言，具备关键字输入智能容错功能，并提供有搜索排名配置，并具有实时快速的特点（Algolia 在全球 12 个数据中心均有部署）。Algolia 还为移动设备提供了离线搜索引擎，其 C++ SDK 可以嵌入到应用服务器端，这样即便没有网络连接应用也能提供搜索功能。

<!-- more -->

:::tip
1 Algolia 管理后台地址：  
<https://www.algolia.com/apps/09V7PWK61N/explorer/browse/anyfork?searchMode=search>  
2 Algolia 爬虫后台地址：  
<https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview>  
3 Algolia GitHub 地址:  
<https://github.com/algolia/docsearch>
:::

## 为什么在使用 Algolia?

- 1、由于 VuePress 的内置搜索只会为页面的标题、h2 、 h3 以及 tags 构建搜索索引。如果你需要全文搜索，内置搜索无法实现，可则以使用 Algolia 搜索。
- 2、使用 Algolia 搜索最大的好处就是方便，它会自动爬取网站的页面内容并构建索引，你只用申请一个 Algolia 服务，在网站上添加一些代码，就像添加统计代码一样，然后就可以实现一个全文搜索功能，操作简单还方便，容错率很高。
- 3、使用范围广，目前很多应用的官方文档(例如：vue.js,vite,vuepress 等)均使用 Algolia 进行全文搜索，而且支持多种 Ruby、Rails、Python、PHP、JS、Java、Android、Objective-C 等多种语言，可以实现自动和手动爬取索引。展示效果如下:![配置页面](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207210920996.png)

## 如何使用 Algolia?

- 1、**搜索服务申请**

  - 1、申请地址：<https://docsearch.algolia.com/apply/>
  - 2、填写应用 Algolia 搜索服务的站点地址，能够对外访问。
  - 3、填写个人邮箱，申请通过后会收到回复邮件，包含开通的应用信息以及进行后续其他操作的说明。
  - 4、填写公开的仓库地址，此仓库存放站点源码。

  填完之后一周之内，收到回复邮件，按照邮件内容进行操作。记住一定要回复邮件，告诉自己就是网站的维护者，并且可以修改代码，否则超过时间不回复，申请的应用会被自动销毁。

- 2、**代码配置**

  - 1、如果你用的是`VuePress 1.x` 的默认主题，VuePress 直接提供了 themeConfig.algolia 选项来用 Algolia 搜索替换内置的搜索框，你只用如此简单的配置即可实现全文搜索。

  ```js
  // .vuepress/config.js
  module.exports = {
    themeConfig: {
      algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
        // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
        appId: '<APP_ID>',
      }
    }
  }

  ```

  - 2、如果你用的是`VuePress 2.x` 的默认主题或者继承默认主题，可以通过`DocSearch`插件进行配置，插件配置完毕以后，在`Navbar`中自动生成搜索框。`DocSearch`插件配置如下。

  ```js
  // .vuepress/config.js
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

  - 3、如果你用的不是 VuePress 的默认主题，就比如我用的是`vuepress-theme-reco 1.x`，它的搜索栏是自己实现的，所以添加上述的配置是不会有效果的(1.6.10 版本中自定义的`AlgoliaSearchBox.vue`组件存在很多 bug)，这个时候就需要遵照邮件中的方法，手动添加 CSS 和 JavaScript 文件。如果你直接引入 vuepress-theme-reco 1.x 包，使用按照下面步骤进行配置：

  1 我们需要先修改下 config.js:

  ```js
  module.exports = {
    head: [
      ['link', { href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3', rel: 'stylesheet' }],
      ['script', { language: 'javascript', type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3' }]
    ]
  }
  ```

  2 然后修改.vuepress/enhanceApp.js 文件：

  ```js
  export default ({ router, Vue, isServer }) => {
    Vue.mixin({
      mounted() {
        // 不加 setTimeout 会有报错，但不影响效果
        setTimeout(() => {
          try {
            docsearch({
              appId: '43GX903BPS',
              apiKey: 'feff649032d8034cf2a636ef55d96054',
              indexName: 'ts-yayujs',
              container: '.search-box',
              debug: false
            })
          } catch (e) {
            console.log(e)
          }
        }, 100)
      }
    })
  }
  ```

如果你是将 vuepress-theme-reco 1.x 主题进行本地化魔改，主题中`Alglia`配置不变，可以对自定义组件`AlgoliaSearchBox.vue`修改如下：

```vue
<template>
  <div id="algolia-search-input" class="search-box"></div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'
export default defineComponent({
  props: ['options'],
  setup(props, ctx) {
    const initialize = (userOptions) => {
      const { algoliaOptions = {} } = userOptions
      docsearch(
        Object.assign({}, userOptions, {
          container: '#algolia-search-input',
          algoliaOptions: algoliaOptions
        })
      )
    }
    onMounted(() => {
      initialize(props.options)
    })
  }
})
</script>
<style>
.search-box .DocSearch.DocSearch-Button {
  cursor: text;
  height: 2rem;
  color: #5b5b5b;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  font-size: 0.9rem;
  padding: 0 0.5rem 0 0rem;
  outline: none;
  transition: all 0.2s ease;
  background: transparent;
  background-size: 1rem;
  margin: 0px;
}

.search-box .DocSearch-Button-Container {
  margin-left: 0.4rem;
}

.search-box .DocSearch-Button .DocSearch-Search-Icon {
  width: 15px;
  height: 15px;
  position: relative;
  top: 0.1rem;
}

.search-box .DocSearch-Button-Placeholder {
  font-size: 0.8rem;
}

.search-box .DocSearch-Button-Keys {
  display: flex;
  right: 0.1rem;
}

.search-box .DocSearch-Button-Key {
  font-size: 12px;
  line-height: 15px;
  width: 15px;
  height: 15px;
}
</style>
```

注意其中的 container，参考 [docsearch](https://github.com/algolia/docsearch) 的官方仓库，这里提供的不是 input 输入框的选择器，而是一个挂载节点，比如 div 的选择器。如果样式自己不喜欢，可以通过修改`vuepress/styles/index.styl`覆盖目前的样式。最终效果如下：![最终效果](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211001028.png)

## 数据爬取

- 1、配置完毕后将网站进行重新部署，查看`Algolia`全局搜索是否有数据。
- 2、如果你搜任何数据，都显示搜索不到数据，那很可能是爬取的数据有问题，我们登陆 <https://www.algolia.com/> 打开管理后台，点击左侧选项栏里的 Search，查看对应的 indexName 数据，如果 Browse 这里没有显示数据，那说明爬取的数据可能有问题，导致没有生成对应的 Records：![图示](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211111162.png)
  如果没有数据，那我们就查下爬取的逻辑，打开爬虫后台：<https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview>，点击对应 indexName 进入后台：
  ![图示](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211115127.png)如果显示成功爬取，也有 Monitoring Success 的数据，但 Records 为 0，那大概是爬虫提取数据的逻辑有问题，点击左侧选项栏中的 Editor，查看具体的爬虫逻辑：![图示](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211119981.png)像 pathsToMatch 这里如果是'<https://anyfork.github.io/blog-docs/docs/>**'，但你的网址都是 [https://anyfork.github.io/blog-docs/\*\*](https://anyfork.github.io/blog-docs/**)开头的，那这里大概就是会提取错误，修改一下，然后点击右侧的数据进行测试：![图示](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211126112.png)如果能像这样提取到数据，就说明没有什么问题了，点击右上角的 Save，然后切换回 Overview，点击右上角的 Restart crawling，我们重新爬取一下数据：![图示](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207211128410.png)除了手动进行爬取之外，`Algolia`爬虫后台会定时爬取数据。至此， VuePress 博客优化之开启 Algolia 全文搜索就配置完了，小伙伴赶紧开始吧！

**参考文章**：<https://blog.csdn.net/weixin_55475226/article/details/123363042>
