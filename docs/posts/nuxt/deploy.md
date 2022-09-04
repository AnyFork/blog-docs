---
title: Nuxt项目部署方案
date: 2022-04-07 10:07:16
tag:
  - Nuxt
category:
  - 运维
  - Nuxt
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207200942246.png
---

&emsp;Nust.js 通过在`nuxt.config.js`文件配置 ssr：true,开启 SSR 支持，ssr：false 关闭 SSR 支持,即支持 SPA（原属性`mode`已过期），可以根据项目实际情况开启 ssr 或关闭 ssr。如果开通 SSR 功能，通过 npm run build 进行打包后，项目部署需要服务端环境支持，如果没有开通 SSR 功能，通过 npm run build 进行打包后，项目部署和普通的 vue 项目部署方式一致。当然 nuxt 可以通过 npm run generate 命令打包成静态页面，支持静态站点部署，但静态站点不支持 SSR。

<!-- more -->

&emsp;Nuxt.js 项目打包完成后，可以通过命令`npm run start`进行启动运行，进程是前台运行，会占用当前命令窗口，但当我们通过`Ctrl+C`关闭时，当前程序进程会被关闭，程序终止运行，所以需要后台进行运行进程。本文主要讲述 Nuxt SSR 项目常用的 2 中部署方式：**nohup &** 和**pm2**。当然前提是需要安装 Node 环境，如果未安装 Node 环境，请参考：[Node 环境安装](/node/)。无论那种方式均需要上传以下文件至服务器：`.nuxt,static,package.json,package-lock.json,nuxt.config.js`

## 一、nohup 方式后台运行

&emsp;nohup 命令的一般格式为:`nohup yourcommand &`,我们通过启动命令：`nohup npm run start &`来后台运行 nuxt ssr 项目。ohup 命令：nohup 是不挂断的意思( no hang up)。如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用 nohup 命令。该命令忽略所有挂（SIGHUP）信号，可以在你退出帐户/关闭终端之后继续运行相应的进程。&是指在后台运行，但当用户推出(挂起)的时候，命令自动也跟着退出. nohup 与&结合起来，可以实现不挂断的后台运行。相关`nohup`命令用法，请参考：[nohup 不挂断运行](/node/nohup.html)

1、通过`npm run build`命令编译打包。  
2、将打包后的文件`.nuxt,static,package.json,package-lock.json,nuxt.config.js`上传至服务器预设目录下。**注意：** 如果开发了`server`(服务端)代码，部署是`server`文件目录也需要上传  
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

pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。详情参考：[pm2 官网](https:#pm2.keymetrics.io/)

1、在项目根目录下创建文件`ecosystem.config.js`,并根据自己项目情况进行配置：

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

2、项目打包：`npm run build`

```bash
npm run build
```

3、将打包后的文件`.nuxt,static,package.json,package-lock.json,nuxt.config.js,ecosystem.config.js`上传至服务器预设目录下,例如：/opt/pm2。 如果开发了`server`(服务端)代码，部署是`server`文件目录也需要上传  
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
![](https:#cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202204071138505.png)

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
