---
title: pm2进程管理工具
date: 2022-04-07 16:31:16
tags:
  - pm2
categories:
  - Node
  - 部署
subSidebar: true
layout: PageLayOut
comment: true
publish: false
---

:::tip
pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能
:::

<!-- more -->

## 一、pm2 官网信息

1、pm2 官网地址：<https://pm2.keymetrics.io/>  
2、pm2 官方文档：<https://pm2.keymetrics.io/docs/usage/quick-start/>  
3、pm2 github 地址：<https://github.com/Unitech/pm2>

## 二、pm2 安装步骤

1、pm2 安装需要依赖`Node`环境，并且`Node`版本需要高于 12，如果为安装`Node`,请参考：[Node 环境安装](/node/)  
2、pm2 安装命令

```bash
# 全局安装pm2
$ npm install pm2 -g
```

3、开始启动一个应用

配置 pm2 应用实例配置文件`ecosystem.config.js`,如下：

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

启动名字为`NuxtRmbRate`的应用

```bash
pm2 start ecosystem.config.js
```

## 三、pm2 常用命令

```bash
# 显示所有进程状态
pm2 list
# 监视所有进程
pm2 monit
# 显示所有进程日志
pm2 logs
# 显示id=0的进程日志
pm2 logs 0
# 停止所有进程
pm2 stop all
# 重启所有进程
pm2 restart all
# 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 reload all
# 停止指定的进程
pm2 stop 0
# 重启指定的进程
pm2 restart 0
# 产生 init 脚本 保持进程活着
pm2 startup
# 运行健壮的 computer API endpoint ([http://localhost:9615](http://localhost:9615/))
pm2 web
# 杀死指定的进程
pm2 delete 0
# 杀死全部进程
pm2 delete all
# 查看进程详细信息
pm2 describe 0
```

<Reward/>
