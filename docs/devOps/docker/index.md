---
title: Docker专题汇总
date: 2022-02-19 15:53:03
lang: zh-CN
tags:
  - docker
categories:
  - 运维
comments: true
subSidebar: true
listCell: { mode: right, image: /images/markdown/docker.jpg }
sticky: 2
---

&emsp;Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 操作系统的机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。简化配置,镜像安装，容器的创建非常的方便，同时可以弹性扩容。

<!-- more -->

:::warning 温馨提示
Docker 要求 CentOS7 系统的内核版本在 3.10 以上，否则无法安装 Docker。小伙伴们可以通过`uname -a`查看自己 centos 内核版本，如果低于 3.10，需要重新安装 centos 镜像。以下是 docker 相关网址：<br/>docker 官网：<https://www.docker.com/><br/>docker 文档官网：<https://docs.docker.com/><br/>安装文档：<https://docs.docker.com/engine/install/centos/>
:::

<Reward/>
