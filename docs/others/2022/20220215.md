---
title: 从零开始搭建vuepress博客
date: 2022-02-15 12:14:50
description: 从零开始搭建vuepress博客
lang: zh-CN
tags:
  - 博客
categories:
  - 部署
subSidebar: true
layout: PageLayOut
listCell: { mode: left, image: /images/markdown/blog.png }
comment: true
sticky: 1
---

&emsp;经过几天的摸索，踩过了无数的坑，终于搭建好了一个属于自己的博客。在此记录一下踩坑历史，让以后的小伙伴们少走弯路，能够轻轻松松搭建自己的博客。文档采用了`vuepress@1.x`进行构建，同时对`vuepress-theme-reco@1.x`主题进行了魔改，整个主题大的布局未改动，只是对首页和展示页面进行了布局调整，最终效果为当前博客显示效果。小伙伴们还等什么，赶快开始吧！👍

<!-- more -->

<Boxx title="温馨提示：" content="vuepress-theme-reco@2.x虽然已经发布Beta版本，目前还不够稳定，官方文档还不够完善。小编尝鲜了一下，首页布局变动较大，相对1.X去掉了好几个模块，配置变化也挺大，整体色调没1.X好看，由于2.X模块化了，学习需要一定成本，感兴趣的小伙伴可以研究一下源码，尝尝鲜。"/>

## 一、初始化项目

&emsp;由于`vuepress-theme-reco@2.x`版本还不稳定，项目目前采用稳定版`vuepresss@1.x`和`vuepress-theme-reco@1.x`版本。可以参考[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)官网的脚手架` @vuepress-reco/theme-cli`进行项目目录构建。

### 1、快速开始

官方脚手架快速开始创建项目，以 npm 为例:

```sh
#打开cmd全局安装脚手架
npm install @vuepress-reco/theme-cli -g

#通过脚手架命令创建项目
theme-cli init
```

按照提示输入项目名称，回车等待项目目录生成

![项目生成命令](/blog-docs/images/markdown/build.png)

### 2、项目启动

用 vscode 打开项目，执行以下命令启动项目

```sh
#安装依赖
npm install

#启动项目
npm run dev
```

启动成功后，效果如下：

![项目启动效果](/blog-docs//images/markdown/start.png)

## 二、目录结构调整

&emsp;`vuepress-theme-reco@1.x`脚手架生成的目录和`vuepress`官方推荐的目录存在差异，`.vuepress`和`docs`目录同级，均在项目根目录下，项目首页默认为根目录下的`REAME.MD`文件。不调整也没啥大的影响。如果不想调整目录，可跳过步骤二。

### 1、目录调整

- 将`.vuepress`整个目录放置在`docs`目录下，项目默认首页(`/`)变更为`docs`目录下的`README.md`文件。倘若目录不调整，也没大的问题，只是脚手架生成的文档目录为当前项目根路径下的`README.md`文件，代码提交仓库后，会影响仓库的`README.md`文件的排版。

- 调整完目录结构后，将`package.json`文件下的启动脚本变更如下：

### 2、脚本调整

```js
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```

至此项目搭建基础就调整完了，小伙伴们就可以开开心心的写`markdown`文件了。

## 三、功能配置

&emsp;像回到顶部，分页，评论，时间线，多语言，左侧侧边栏，右侧侧边栏，文档摘要，自定义容器等功能官网已经写的很详细了，按照[官方文档](https://vuepress-theme-reco.recoluan.com/)配置即可，如果看不懂，那就多看几遍，多试试就懂了。下面针对官网部分功能简单说一下相关配置。

### 1、[评论](https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html#介绍)

&emsp;主题内置评论插件`@vuepress-reco/vuepress-plugin-comments`，可以根据自己的喜好选择[Valine](https://valine.js.org/)或者[Vssue](https://vssue.js.org/zh/options/)；
如果你想默认不加载评论，而只在某些页面显示评论功能，可以在`valineConfig`或`vssueConfig`中设置`showComment: false`，并在需要展示评论的页面 设置`isShowComments: true`。
如果仅是某篇文章不想设置开启评论功能，可以在`front-matter`设置`isShowComments: false`。

&emsp;浏览量仅在使用`Valine`时显示,使用`Valine`评论需要在`Valine`官网申请` appId: 'GpWG2PgOaXLTcz******dvza-gzGzoHsz'和appKey: 'NgptF7WB***YNPobYYtla'`，并进行配置才能
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

### 2、[加密](https://vuepress-theme-reco.recoluan.com/views/1.x/password.html)

&emsp;如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 keys，可以设置多个密码，数组的值必须是字符串。配置如下:

```js
module.exports = {
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
    }
  }
}
```

::: warning
注意：上面配置的密码是项目级的，如果需要配置页面密码，需要在`front-matter`中配置`keys: - e10adc3949ba59abbe56e057f20f883e`,此密码同样需要 32 位的 md5 加密密文。
:::

### 3、<span id="index">自定义首页</span>

:::tip
自定义首页会自动添加`header` 和 `footer`，自定义部分无需考虑添加头部和脚部内容。请查看[官网](https://vuepress-theme-reco.recoluan.com/views/1.x/home.html#自定义首页)
:::

将你希望的首页样式封装成 vue 组件，封装成插件或者@vuepress/plugin-register-components 插件全局注册，然后配置`type:'你自定义的组件名称'`

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'your vue component name'
  }
}
```

小编当前的博客采用的就是自定义首页和自定义单页面`page`,详细配置请看[主题魔改](#主题魔改)

## 四、插件安装

&emsp;通过安装`vuepress-theme-reco@1.x`主题配套插件，页面效果更加`炫酷`，可以`增强`网站的`逼格`。[vuepress@1.x 插件](https://v1.vuepress.vuejs.org/zh/plugin/)和[vuepress-theme-reco@1.x 插件](https://vuepress-theme-reco.recoluan.com/views/plugins/)均提供和内置了部分插件在主题当中。相关插件可以去官网上进行查看，下面介绍几款小编项目中用
的插件。

### 1、PWA 插件

[@vuepress/plugin-pwa](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-pwa): 自动生成 Service Worker,生成一个刷新按钮，更新网站内容，也能离线访问。

- 安装命令：`npm install -D @vuepress/plugin-pwa`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }
  ]
}
```

- 其他配置：需要新增配置文件`manifest.json`,具体配置请查看[官网](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#安装)

### 2、看板娘插件

[@vuepress-reco/vuepress-plugin-kan-ban-niang](https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang/): 看板娘。 [官网配置](https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html)

- 安装命令： `npm install -D @vuepress-reco/vuepress-plugin-kan-ban-niang`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['haru1', 'whiteCat', 'miku', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'],
      clean: false,
      messages: {
        welcome: '欢迎来到我的博客',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你不喜欢我了吗？痴痴地望着你。'
      },
      messageStyle: { right: '68px', bottom: '290px' },
      width: 250,
      height: 320
    }
  ]
}
```

### 3、公告插件

['@vuepress-reco/vuepress-plugin-bulletin-popover](https://vuepress-theme-reco.recoluan.com/views/plugins/bulletinPopover.html): 公告插件

- 安装命令： `npm install -D @vuepress-reco/vuepress-plugin-bulletin-popover`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    '@vuepress-reco/vuepress-plugin-bulletin-popover',
    {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎来到我的博客🎉🎉🎉',
          style: 'text-align: center;font-size: 15px;font-weight: bold;'
        },
        {
          type: 'text',
          content: '博客汇集了个人总结的资料文档，会不定期进行更新!',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        },
        {
          type: 'text',
          content: '博客中可能存在一些问题，欢迎小伙伴们给我留言.',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        },
        {
          type: 'text',
          content: '邮箱：874957743@qq.com',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        }
      ],
      footer: null
    }
  ]
}
```

### 4、音乐播放器插件

[@vuepress-reco/vuepress-plugin-bgm-player](https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html): 音乐播放器。[官网地址](https://github.com/vuepress-reco/vuepress-plugin-bgm-player)

- 安装命令： `npm install -D @vuepress-reco/vuepress-plugin-bgm-player`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        //本地音乐4首
        {
          name: 'Victory(胜利)',
          artist: 'Two Steps From Hell',
          url: '/blog-docs/music/victory/victory.mp3',
          cover: '/blog-docs/music/victory/victory.jpg'
        },
        {
          name: '卡农',
          artist: '卡农钢琴版',
          url: '//blog-docs/music/canon/canon.mp3',
          cover: '/blog-docs/music/canon/canon.jpg'
        },
        {
          name: '风居住的街道',
          artist: '风居住的街道 钢琴版 - 钢琴曲',
          url: '/blog-docs/music/wind/wind.mp3',
          cover: '/blog-docs/music/wind/wind.jpg'
        },
        {
          name: '夜的钢琴曲',
          artist: '夜的钢琴曲五 - 石进',
          url: '/blog-docs/music/night/night.mp3',
          cover: '/blog-docs/music/night/night.jpg'
        }
      ],
      //自动缩放
      autoShrink: true,
      //自动播放
      autoplay: true,
      //float样式
      floatStyle: { bottom: '80px', 'z-index': '999999' }
    }
  ]
}
```

### 5、首页气泡特效插件

[vue-canvas-effect](https://github.com/gzf201314/vue-canvas-effect): 首页气泡特效

::: warning
如果用`vuepress-theme-reco@1.x`默认的首页(`type:'blog'`)，系统使用的组件是`HomeBlog.vue`，使用首页气泡特效需要修改首页`HomeBlog.vue`源码。
如果修改自定义首页，请参考下面自定义首页代码，差异不大。<font color="red">此处有坑</font>：注意此插件需要在浏览器端动态导入，不能直接在页面通过`import xx from 'xxx'`方式引入，
开发环境可能没问题，但打包 build 的时候会出问题。小伙伴们可以试一下。:smile:
:::

- 安装命令： `npm install -D vue-canvas-effect`
- 修改源码首页文件：node_moudles/vuepress-theme-reco/components/HomeBlog/index.vue，在 setup 中加入如下代码：

```js
//是否显示首页气泡
const bubbles = computed(() => instance.$frontmatter.bubbles || true)
const bubblesRef = ref('')
onMounted(() => {
  import('vue-canvas-effect/src/components/bubbles').then((module) => {
    bubblesRef.value = module.default
  })
})
```

在源文件 27 行加入如下代码：

```vue
<!--首页图片气泡-->
<component v-if="bubbles" :is="bubblesRef"></component>
```

### 6、页面彩带插件

[ribbon-animation](https://github.com/JabinPeng/vuepress-plugin-ribbon-animation): 页面彩带插件

- 安装命令： `npm install -D vuepress-plugin-ribbon-animation`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    'ribbon-animation',
    {
      size: 120, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: -1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: '80%',
        // 色带HSL亮度量
        colorBrightness: '60%',
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: 'max',
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      //  点击彩带  true显示  false为不显示
      ribbonShow: false,
      // 滑动彩带
      ribbonAnimationShow: true
    }
  ]
}
```

### 7、页面樱花插件

[vuepress-plugin-sakura](https://github.com/JabinPeng/vuepress-plugin-sakura): 页面樱花插件

- 安装命令： `npm install vuepress-plugin-sakura -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    'sakura',
    {
      // 默认数量
      num: 40,
      //是否显示
      show: true,
      // 层级
      zIndex: 100,
      img: {
        // false 默认图 true 换图 需要填写httpUrl地址
        replace: true,
        // 绝对路径
        httpUrl: '/blog-docs/snowflake/blue.png'
      }
    }
  ]
}
```

系统默认是樱花，小伙伴们可以自定义图片，小编用的是蓝色的:snowflake:。

### 8、趣味动态标题插件

[vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title): 趣味动态标题。

- 安装命令： `npm i vuepress-plugin-dynamic-title -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/failure.ico',
      hideText: '(●—●)喔哟，崩溃啦！',
      recoverTime: 2000
    }
  ]
}
```

小伙伴们可以自己感受一下效果，注意观察网站 title :middle_finger:

### 9、随机名言插件

[vuepress-plugin-boxx](https://github.com/zpj80231/vuepress-plugin-boxx): 默认随机展示名人名句

- 安装命令： `npm i vuepress-plugin-boxx -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: ['vuepress-plugin-boxx']
}
```

引入后会全局注册一个`<Boxx/>`组件，可以在`markdown`文件中直接使用，也可以自定义名言，代码如下：

```md
<Boxx title="温馨提示：" content="vuepress-theme-reco@2.x虽然已经发布Beta版本，目前还不够稳定，官方文档还不够完善。小编尝鲜了一下，首页布局变动较大，相对1.X去掉了好几个模块，配置变化也挺大，整体色调没1.X好看，由于2.X模块化了，学习需要一定成本，感兴趣的小伙伴可以研究一下源码，尝尝鲜。"/>
```

### 10、代码块复制插件

[vuepress-plugin-nuggets-style-copy](https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy): 代码块复制插件

- 安装命令： `npm i vuepress-plugin-nuggets-style-copy -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!'
      }
    }
  ]
}
```

### 11、git 更新日期插件

[@vuepress/last-updated](): git 更新日期插件

- 安装命令： 此插件`vuepress@1.x`默认已经安装，无需再安装
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    '@vuepress/last-updated',
    {
      //上次更新"时间格式
      transformer: (timestamp, lang) => {
        dayjs.extend(utc)
        dayjs.extend(timezone)
        return dayjs.tz(timestamp, 'Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
      }
    }
  ]
}
```

<font color="red">注意：</font>如果需要处理 git 提交时间少 8 个小时，请配置上面的时间格式化代码，小编用的`dayjs`

### 12、<span id="gitalk">gitalk 插件</span>

[vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment#readme): 集成了 gitalk 无后台的评论的插件
:::warning
此插件默认集成了`gitalk`和`Valine`,根据个人需要选择`gitalk`或者`Valine`,可以根据[vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment#readme)进行配置，也可以参考[gitalk 官网](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)和[Valine 官网](https://valine.js.org/) 进行额外配置。
:::

- 安装命令： `npm i vuepress-plugin-comment -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：
- `vuepress-plugin-comment`官网：<https://github.com/dongyuanxin/vuepress-plugin-comment#readme>
- `gitalk`官网：<https://github.com/gitalk/gitalk/blob/master/readme-cn.md>
- `Valine`官网：<https://valine.js.org/>

```js
module.exports = {
  plugins: [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: '85f8ec984fa87a6ce536',
        clientSecret: '1df94a9d2362071c398e34f30bcecea987fa3aa4',
        repo: 'blog-docs',
        owner: 'AnyFork',
        admin: ['AnyFork'],
        distractionFreeMode: false,
        id: '<%- window.location.pathname %>',
        title: '<%- document.title %>'
      }
    }
  ]
}
```

<font color="red">注意：</font>gitalk 需要 github 认证，在 github 生成`clientID`和`clientSecret`，配置成功后，如果出现下图
![github](/blog-docs/images/markdown/gitalk.png)

**如果出现上图情况，请不要慌，按照下面步骤来**

- 1、在 github 存放评论的地方(Issues)新增一条评论。
- 2、检查`clientID`、`clientSecret`、`reco`、`admin`是否正确。
- 3、检查 github 认证配置的 homePage 和授权 URL 地址是否一致，均为当前网站访问地址，注意配置 https 的域名才行。
- 4、本地点击登录可能会无限跳转的首页，不要慌，小编当时也出现过，因为你配置的授权是线上域名，所以需要提交代码到服务器上，在服务器上进行 github 授权认证。认证通过后，本地多刷新几次就可以正常评论了。

### 13、中文链接转拼音插件

[vuepress-plugin-permalink-pinyin](https://github.com/viko16/vuepress-plugin-permalink-pinyin#readme): 中文目录链接转拼音插件

- 安装命令：`npm i vuepress-plugin-permalink-pinyin -D`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    'permalink-pinyin',
    {
      // Converted into lowercase, default: true
      lowercase: true,
      // Separator of the slug, default: '-'
      separator: '-'
    }
  ]
}
```

### 14、代码扩展优化

[@vuepress-reco/extract-code](https://vuepress-theme-reco.recoluan.com/views/plugins/extractCode.html): 代码扩展优化

- 安装命令：`npm i @vuepress-reco/extract-code -D`
- 使用方法参考：<https://vuepress-theme-reco.recoluan.com/views/plugins/extractCode.html>
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: ['@vuepress-reco/extract-code']
}
```

**最终效果如下**：

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/components/Tags.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/components/Tags.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/components/Tags.vue?style
  </template>
</RecoDemo>

### 15、鼠标点击特效插件

[vuepress-plugin-cursor-effects](https://www.npmjs.com/package/vuepress-plugin-cursor-effects)：鼠标点击特效插件

- github: https://github.com/moefyit/vuepress-plugin-cursor-effects
- 安装命令： `npm install -D vuepress-plugin-cursor-effects`
- 插件配置：在`config.js`的 pulgin 选项中配置如下：

```js
module.exports = {
  plugins: [
    //github地址：https://github.com/moefyit/vuepress-plugin-cursor-effects
    'vuepress-plugin-cursor-effects',
    {
      // size of the particle, default: 2
      size: 4,
      // shape of the particle, default: 'star'
      shape: 'star',
      // z-index property of the canvas, default: 999999999
      zIndex: 999999999
    }
  ]
}
```

### 16、首页背景图切换动画效果

[flux.js](https://github.com/joelambert/Flux-Slider/tree/master)：背景图切换动画效果

- 此插件需要依赖`jquery.js`,配置可以参考官网
- 小编采用自定义组件的方式，将其布局在自定义首页页面中，多图片通过首页`front-matter`自定义

  **自定义的组件代码如下**：

  <RecoDemo :collapse="true">
  <template slot="code-自定义背景动画效果">
  <<< @/docs/.vuepress/components/ImagePage.vue
  </template>
  </RecoDemo>

至此插件使用就整理完了，后续再补充.....

## 五、<span id="主题魔改">主题魔改</span>

:::tip
小伙伴们都清楚，将自定义的`vue`组件放置在`.vuepress`下面的 components 目录下，组件会被全局注册，可以在`markdown`文件中使用。同时`vuepress-theme-reco@1.x`
允许我们[自定义首页](#index), 按照这个原理我们对主题进行修改。网上大部分人把`node-modules`目录下整个`vuepress-theme-reco@1.x`文件 copy 出来放到当前项目`theme`目录下进行
修改,小编没有这样做，按照主题模板重新开发了一款名为`IndexPage`的首页(包含博客列表排版，增加了左右布局和原主题自带的上下布局。左右布局中文章封面图可以通过设置`front-matter`来确定在左侧还是右侧显示)，同时对右侧侧边栏进行了部分布局调整。文章单页面(详情页面)新增了返回按钮。请看下面代码文件。
:::

<RecoDemo :collapse="true">
  <template slot="code-首页">
    <<< @/docs/.vuepress/components/IndexPage.vue
  </template>
  <template slot="code-博客列表">
    <<< @/docs/.vuepress/components/NoteAbstractItem.vue
  </template>
  <template slot="code-单页面">
    <<< @/docs/.vuepress/components/Page.vue
  </template>
</RecoDemo>

按照官方对应模板组件布局，调整对应的组件，就可以达到小编博客中展示的效果。小编在自定义页面时增加了额外的`front-matter`属性控制页面布局，例如首页多个背景图，博客列表布局风格等。

**此篇入门级别的 vuepress 博客搭建教程就编写完了，文章中有问题欢迎小伙伴们指正**

<Reward/>
