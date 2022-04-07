---
title: Nuxt项目部署方案
date: 2022-04-07 10:07:16
tags:
  - Nuxt
categories:
  - 前端
  - Vue
  - 部署
subSidebar: true
layout: PageLayOut
comment: true
publish: false
---

:::tip
Nust.js 通过在`nuxt.config.js`文件配置 ssr：true,开启 SSR 支持，ssr：false 关闭 SSR 支持,即支持 SPA（原属性`mode`已过期），可以根据项目实际情况开启 ssr 或关闭 ssr。如果开通 SSR 功能，通过 npm run build 进行打包后，项目部署需要服务端环境支持，如果没有开通 SSR 功能，通过 npm run build 进行打包后，项目部署和普通的 vue 项目部署方式一致。当然 nuxt 可以通过 npm run generate 命令打包成静态页面，支持静态站点部署，但静态站点不支持 SSR。
:::

<!-- more -->

&emsp;Nuxt.js 项目打包完成后，可以通过命令`npm run start`进行启动运行，进程是前台运行，会占用当前命令窗口，但当我们通过`Ctrl+C`关闭时，当前程序进程会被关闭，程序终止运行，所以需要后台进行运行进程。本文主要讲述 Nuxt SSR 项目常用的 2 中部署方式：**nohup &** 和**pm2**。当然前提是需要安装 Node 环境，如果未安装 Node 环境，请参考：[Node 环境安装](/node/)。无论那种方式均需要上传以下文件至服务器：`.nuxt,static,package.json,package-lock.json,nuxt.config.js`

## 一、nohup 方式后台运行

&emsp;nohup 命令的一般格式为:`nohup yourcommand &`,我们通过启动命令：`nohup npm run start &`来后台运行 nuxt ssr 项目。ohup 命令：nohup 是不挂断的意思( no hang up)。如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用 nohup 命令。该命令忽略所有挂（SIGHUP）信号，可以在你退出帐户/关闭终端之后继续运行相应的进程。&是指在后台运行，但当用户推出(挂起)的时候，命令自动也跟着退出. nohup 与&结合起来，可以实现不挂断的后台运行。相关`nohup`命令用法，请参考：[nohup 不挂断运行](/node/nohup.html)

1、通过`npm run build`命令编译打包。  
2、将打包后的文件`.nuxt,static,package.json,package-lock.json,nuxt.config.js`上传至服务器预设目录下。  
3、安装依赖包：`npm install`  
5、启动项目：`nohup npm run start &`

```bash
nohup npm run start &
```

6、查看后台运行进程

```bash
# 查看后台运行的所有进程
jobs
# 查看后台运行的所有进程，包含进程pid
jobs -l
或者
ps -ef | grep npm
ps -ef | grep node
```

后台进程正常运行表示程序已启动，nohup 默认日志文件名为`nohup.out`,可以通过此文件查看项目是否运行正常，或者通过`tail`命令跟踪运行日志，详情参考：

## 二、pm2 方式部署

pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。详情参考：[pm2 官网](https://pm2.keymetrics.io/)

1、在项目根目录下创建文件`ecosystem.config.js`,并根据自己项目情况进行配置：

```bash
//pm2实例配置：ecosystem.config.js
module.exports = {
  apps: [
    {
      //实例名称
      name: 'NuxtRmbRate',
      //部署模式，单机：'fork',集群：'cluster'
      exec_mode: 'fork',
      //实例数目
      instances: '1',
      //nuxt start的执行路径
      script: './node_modules/nuxt/bin/nuxt.js',
      //启动参数
      args: 'start',
      // 完整日志路径
      output: 'log/output.log',
      // 错误日志路径
      error: 'log/error.log',
      // 访问日志路径
      log: 'log/access.log',
      // 日志格式
      log_type: 'json',
      // 合并日志
      merge_logs: true,
      // 日志日期格式
      log_date_format: 'YYYY-MM-DD HH:mm:ss'
    }
  ]
}
```

2、项目打包：`npm run build`

```bash
npm run build
```

3、将打包后的文件`.nuxt,static,package.json,package-lock.json,nuxt.config.js,ecosystem.config.js`上传至服务器预设目录下,例如：/opt/pm2。  
4、安装依赖包：`npm install`

```bash
npm install
```

5、启动项目：`pm2 start ecosystem.config.js`

```bash
pm2 start ecosystem.config.js
```

6、查看 pm2 项目实例列表：`pm2 list`

```bash
pm2 list
```

结果如下图，status:online 表示项目正在运行。
![](https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202204071138505.png)

7、查看项目运行日志：`pm2 logs id` 或者查看 logs 日志文件查看日志。

```bash
pm2 logs 0
```

8、其他命令

```bash
#停止实例
pm2 stop id/实例名称
#删除实例
pm2 delete id/实例名称
#重启实例
pm2 restart id/实例名称
```

其他`pm2`命令请参考：[pm2 进程管理工具](/node/pm2.html)
<Reward/>
