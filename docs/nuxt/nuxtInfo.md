---
title: Nuxt项目开发常用功能点
date: 2022-04-019 10:07:16
tags:
  - Nuxt
categories:
  - 前端
  - Vue
subSidebar: true
layout: PageLayOut
comment: true
publish: false
---

:::tip
本篇文章主要记录 nuxt 开发过程中常用的一些功能点设置,以备日后开发使用。
:::

## 一、Nuxt 打包屏蔽掉全局`console`功能

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
#头部对环境判断,当正式环境时添加插件禁用console功能
let plugins= []
if (process.env.NODE_ENV === 'production') {
  plugins.push("transform-remove-console")
  #如果想要有选项的屏蔽console可以使用以下方式
  plugins.push(["transform-remove-console", { "exclude": ["error", "warn"] }])
}
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
<Reward/>
