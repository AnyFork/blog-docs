---
title: Nginx安装
date: 2022-02-18 18:51:45
tags:
  - nginx
categories:
  - 运维
omment: true
subSidebar: true
sidebar: true
publish: false
---

<!-- more -->

:::tip
日常工作中，nginx 使用非常频繁。今日抽空，顺便整理一下 linux 环境下 nginx 的 2 种安装方式，以备日后使用，减少不必要的错误。
:::

## 普通安装

### 1、下载 Nginx

&emsp;Nginx 官网地址：<https://nginx.org/en/download.html>，选择对应的 linux 版本，通过`wget`进行下载。

```bash
wget http://nginx.org/download/nginx-1.20.1.tar.gz
```

**注意**：如果`wget`没有安装，请执行`yum -y install wget` 进行安装。

### 2、解压

通过`tar`命令进行解压

```bash
tar -zvxf nginx-1.20.1.tar.gz
cd nginx-1.12.1
```

### 3、译环境安装

**gcc 安装**：安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装

```bash
# gcc 安装
yum install gcc-c++
```

**PCRE pcre-devel 安装**：PCRE(Perl Compatible Regular Expressions) 是一个 Perl 库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库，nginx 也需要此库。

```bash
yum install -y pcre pcre-devel
```

**zlib 安装**：zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

```bash
yum install -y zlib zlib-devel
```

**OpenSSL 安装**：OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），所以需要在 Centos 安装 OpenSSL 库。

```bash
yum install -y openssl openssl-devel
```

### 4、预编译

进入解压后的目录 nginx-1.20.1 进行预编译 ./configure --prefix=/opt/nginx 注意：--prefix 是指定安装目录

```bash
./configure --prefix=/opt/nginx
```

### 5、编译

通过`make`命令进行源码编译；如果`make`命令不存在，通过`yum -y install make autoconf `安装

```bash
make
```

### 6、安装

```bash
make install
```

安装完成后进入`/opt/nginx/sbin`目录，然后启动`./nginx` 这条命令成功没有输出。通过一下命令查看`nginx`是否启动成功：

```bash
ps -ef |grep nginx
```

如果出现`nginx`进程，则表示启动成功
![nginx](/blog-docs/images/markdown/nginx.png)

打开浏览器，输入`nginx`地址，默认监听 80 端口，如下图：
![nginxWeb](/blog-docs/images/markdown/nginxweb.png)

如果出现访问不了，尝试关闭防火墙`systemctl stop firewalld.service`或者永久关闭防火墙`systemctl disable firewalld.service`

### 7、创建 linux 全局软连接

::: tip
通过软链接的方式设置 nginx 为全局变量，就可以实现全局任何地方通过 nginx 相关命令操作 nginx 不用到 nginx 安装目录或者 nginx 全路径进行命令执行，使操作变得更加简单。
:::

```bash
ln -s /opt/nginx/sbin/nginx  /usr/bin/nginx
```

**上面的：/opt/nginx/sbin/nginx 为我们的 nginx 安装目录，若你的安装目录和我的不一样，自行修改为你的安装目录便可，建立软链接后，我们便可以在任意目录执行 nginx 命令了**

### 8、nginx 命令

首先需要进入 nginx 安装目录：`cd /opt/nginx/sbin/`

**启动命令**：`./nginx`

**退出命令**: `./nginx -s quit`，此方式停止步骤是待 nginx 进程处理任务完毕进行停止。

**停止命令**：`./nginx -s stop`，此方式相当于先查出 nginx 进程 id 再使用 kill 命令强制杀掉进程。

**单纯重启命令**：先停止再启动(推荐)，对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。

```bash
./nginx -s quit
./nginx
```

**重新加载配置文件**：当 nginx 的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用 ./nginx -s reload 不用先停止 nginx 再启动 nginx, 即可将配置信息在 nginx 中生效，如下：

```bash
./nginx -s reload
```

**指定配置文件启动**: /opt/nginx/sbin/nginx -c /opt/nginx/conf/nginx.conf

**指定配置文件重启**: /opt/nginx/sbin/nginx -s reload -c /opt/nginx/conf/nginx.conf

**测试 nginx 配置文件是否正确**：/nginx -t -c /opt/nginx/conf/nginx.conf

**开启自启动**

1、在/etc/rc.d/rc.local 中添加 nginx 启动命令行：

```bash
vi /etc/rc.d/rc.local
/opt/nginx/sbin/nginx
```

2、授权：`chmod +x /etc/rc.d/rc.local`

3、重启：`reboot`,通过命令`ps -ef | grep nginx`查看 nginx 是否开机自启动成功

**上面这种是最简单的 nginx 开机自启动的，推荐大家使用**。

## Docker 安装

### 1、拉取 nginx 镜像

```bash
docker pull nginx
```

### 2、启动 nginx 容器

```bash
docker run --name nginx -p 80:80 -d nginx
```

### 3、创建挂载目录

```bash
mkdir -p /opt/nginx
mkdir -p /opt/nginx/html
mkdir -p /opt/nginx/conf
mkdir -p /opt/nginx/logs
```

### 4、复制容器中挂载文件

```bash
docker cp 67e:/etc/nginx/nginx.conf /opt/nginx/
docker cp 67e:/etc/nginx/conf.d /opt/nginx/conf/
docker cp 67e:/usr/share/nginx/html/ /opt/nginx/www/
docker cp 67e:/var/log/nginx/ /opt/nginx/logs/
注：docker cp 67e 中的 "67e" 为容器ID前缀，只要唯一就好了
```

### 5、删除旧的 nginx 容器

```bash
# 停止容器
docker stop 67e
# 移除容器
docker rm 67e
```

### 6、创建 nginx 挂载目录容器

```bash
docker run --name nginx -p 80:80 \
-v /opt/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /opt/nginx/html/:/usr/share/nginx/html/ \
-v /opt/nginx/logs/:/var/log/nginx/ \
-v /opt/nginx/conf/:/etc/nginx/conf.d \
--privileged=true -d nginx
```

### 7、查看 nginx 容器运行情况

```bash
# 命令查看当前运行的容器
docker ps
# 通过浏览器访问80端口，查看是否显示正常页面
http:ip/

```

<Reward/>
