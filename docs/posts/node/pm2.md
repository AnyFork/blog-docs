---
title: PM2项目部署流程和常用命令
date: 2022-04-07 16:31:16
tags:
  - pm2
categories:
  - Node
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207200951285.jpg
---

&emsp;pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。

<!-- more -->

## 一、pm2 官网信息

1、pm2 官网地址：<https://pm2.keymetrics.io/>  
2、pm2 官方文档：<https://pm2.keymetrics.io/docs/usage/quick-start/>  
3、pm2 github 地址：<https://github.com/Unitech/pm2>

## 二、pm2 安装步骤

1、pm2 安装需要依赖`Node`环境，并且`Node`版本需要高于 12，如果为安装`Node`,请参考：[Node 环境安装方式](/node/)  
2、pm2 安装命令

```bash
# 全局安装pm2
$ npm install pm2 -g
```

3、开始启动一个应用

配置 pm2 应用实例配置文件`ecosystem.config.js`,如下：

```bash
#pm2实例配置：ecosystem.config.js
module.exports = {
  apps: [
    {
      #实例名称
      name: 'NuxtRmbRate',
      #部署模式，单机：'fork',集群：'cluster'
      exec_mode: 'fork',
      #实例数目
      instances: '1',
      #需要执行的脚本文件，对于普通的nuxt项目(没有server)，一般采用nuxt start命令，用pm2执行时需要修改成./node-modules/nuxt/dist/bin/nuxt.js,否则报错
      script: 'server/index.js',
      #应用程序所在的目录
      cwd: '',
      # 传递给脚本的参数，例如nuxt start命令，参数为start
      args: '',
      # 完整日志路径
      output: 'log/output.log',
      # 错误日志路径
      error: 'log/error.log',
      # 访问日志路径
      log: 'log/access.log',
      # 日志格式
      log_type: 'json',
      # 合并日志
      merge_logs: true,
      # 日志日期格式
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
       # 最小运行时间，这里设置的是60s即如果应用程序在* 60s内退出，pm2会认为程序异常退出，此时触发重启* max_restarts设置数量，应用运行少于时间被认为是异常启动
      min_uptime: '60s',
      # 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；
      max_restarts: 10,
      # 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启
      autorestart: true,
      # 异常重启情况下，延时重启时间
      restart_delay: 30,
      #生产环境配置
      env_prod: {
        # 环境参数，当前指定为生产环境
        NODE_ENV: 'production'
      }
    }
  ]
}
```

其他配置项如下：

```bash
name 应用进程名称；

script 启动脚本路径；

cwd 应用启动的路径，关于 script 与 cwd 的区别举例说明：在/home/polo/目录下运行/data/release/node/index.js，此处 script 为/data/release/node/index.js，cwd 为/home/polo/；

args 传递给脚本的参数；

interpreter 指定的脚本解释器；

interpreter_args 传递给解释器的参数；

instances 应用启动实例个数，仅在 cluster 模式有效，默认为 fork；

exec_mode 应用启动模式，支持 fork 和 cluster 模式；

watch 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；

ignore_watch 忽略监听的文件夹，支持正则表达式；

max_memory_restart 最大内存限制数，超出自动重启；

env 环境变量，object 类型，如{"NODE_ENV":"production", "ID": "42"}；

log_date_format 指定日志日期格式，如 YYYY-MM-DD HH:mm:ss；

error_file 记录标准错误流，$HOME/.pm2/logs/XXXerr.log)，代码错误可在此文件查找；

out_file 记录标准输出流，$HOME/.pm2/logs/XXXout.log)，如应用打印大量的标准输出，会导致 pm2 日志过大；

min_uptime 应用运行少于时间被认为是异常启动；

max_restarts 最大异常重启次数，即小于 min_uptime 运行时间重启次数；

autorestart 默认为 true, 发生异常的情况下自动重启；

cron_restart crontab 时间格式重启应用，目前只支持 cluster 模式；

force 默认 false，如果 true，可以重复启动一个脚本。pm2 不建议这么做；

restart_delay 异常重启情况下，延时重启时间；
```

**注意：** 设置环境变量时需要以`env_`开头，详细参考：<https:#pm2.keymetrics.io/docs/usage/environment/>。例如设置了环境变量`env_production`，采用 pm2 启动时如下：`pm2 start ecosystem.config.js --env production`

启动项目实例

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
