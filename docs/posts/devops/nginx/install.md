---
title: Nginx 多种安装方式以及第三方模块安装步骤
date: 2022-02-18 18:51:45
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201025944.jpg
---

&emsp;日常工作中，nginx 使用非常频繁。今日抽空，顺便整理一下 linux 环境下 nginx 常用的 3 种安装方式(yum,源码编译，docker)，以备日后使用，减少不必要的错误。docker 方式比较简单，但一定要注意文件目录挂载配置，配置不正确，即使容器启动起来，nginx 也无法运行。

<!-- more -->

## 一 yum 安装 nginx

yum 安装 nginx 操作简单，无需编译源码，还会生成 nginx 服务。具体步骤如下：

### 1 更新 yum

```bash
yum update -y
```

### 2 安装 nginx 源

可以通过：<http://nginx.org/packages/centos/7/x86_64/RPMS/>,查找自己想安装的版本。

```bash
#安装nginx源
rpm -ivh http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.20.2-1.el7.ngx.x86_64.rpm
#查看nginx信息
yum info nginx
```

### 3 安装 nginx

```bash
yum install nginx -y
```

### 4 开放 80 端口或者关闭防火墙

```bash
# 开发80端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
# 重新加载
firewall-cmd --reload
#或直接关闭防火墙
systemctl stop firewalld
```

### 5 启动 nginx

```bash
# 启动nginx
systemctl start nginx
```

### 6 开机自启动

```bash
systemctl enable nginx
```

### 7 查看 nginx 版本和编译参数信息

```bash
#nginx版本信息
nginx -v
#nginx编译参数信息,包括安装位置以及各种配置文件信息。
nginx -V
```

**nginx 相关配置信息：**
![](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203181052935.png)

**yum 方式安装的默认地址和配置的默认地址**

```bash
#yum方式安装后默认配置文件的路径
/etc/nginx/nginx.conf
#nginx网站默认存放目录
/usr/share/nginx/html
#网站默认主页路径
/usr/share/nginx/html/index.html
```

## 二 源码编译安装

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

进入解压后的目录 nginx-1.20.1 进行预编译。注意：--prefix 是指定安装目录，默认`/usr/local/nginx`

```bash
./configure --prefix=/opt/nginx --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module
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
![nginx](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209041716374.png)

打开浏览器，输入`nginx`地址，默认监听 80 端口，如下图：
![nginxWeb](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209041715335.png)

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

## 三 Docker 安装

### 1、拉取 nginx 镜像

```bash
docker pull nginx
```

### 2、启动 nginx 容器

```bash
docker run --name nginx -p 80:80 -d nginx
```

至此一个简单的 nginx 容器就启动成功了，下面配置挂载目录。

### 3、创建挂载目录

```bash
mkdir -p /opt/nginx
mkdir -p /opt/nginx/html
mkdir -p /opt/nginx/conf.d
mkdir -p /opt/nginx/logs
```

### 4、复制容器中挂载文件

```bash
docker cp 67e:/etc/nginx/nginx.conf /opt/nginx/
docker cp 67e:/etc/nginx/conf.d /opt/nginx/conf.d/
docker cp 67e:/usr/share/nginx/html/ /opt/nginx/html/
docker cp 67e:/var/log/nginx/ /opt/nginx/logs/
注：docker cp 67e 中的 "67e" 为容器ID前缀，只要唯一就好了
```

### 5、删除旧的 nginx 容器

```bash
# 停止容器
docker stop 67e
# 移除容器
docker rm 67e
#或者强制删除容器
docker rm -f 67e
```

### 6、创建 nginx 挂载目录容器

```bash
docker run -d --name nginx -p 80:80 -p 443:443 -v /opt/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /opt/nginx/html:/usr/share/nginx/html -v /opt/nginx/logs:/var/log/nginx \
-v /opt/nginx/conf.d:/etc/nginx/conf.d --privileged=true --restart=always nginx
```

`--privileged=true`: 使用该参数，container 内的 root 拥有真正的 root 权限。否则，container 内的 root 只是外部的一个普通用户权限。privileged 启动的容器，可以看到很多 host 上的设备，并且可以执行 mount。甚至允许你在 docker 容器中启动 docker 容器  
`--restart=always`: 当 Docker 重启时，容器自动启动。  
修改运行中的容器自启动：`docker container update --restart=always 容器名字`  
构建容器自启动：启动命令额外加上`--restart=always`

### 7、查看 nginx 容器运行情况

```bash
# 命令查看当前运行的容器
docker ps
# 通过浏览器访问80端口，查看是否显示正常页面
http:ip/

```

如果浏览器访问不了，应该是防火墙的原因。可以通过命令`systemctl stop firewalld`关闭防火墙或者开通对应的端口`80`和`443`，端口开通命令参考：[linux 常用指令](../../others/linux/basecommand.html#_6-centos-端口开通)

## 四 nginx 安装第三方模块

&emsp;nginx 文件非常小但是性能非常的高效,这方面完胜 apache,nginx 文件小的一个原因之一是 nginx 自带的功能相对较少,好在 nginx 允许第三方模块,第三方模块使得 nginx 越发的强大. 在安装模块方面,nginx 显得没有 apache 安装模块方便，当然也没有 php 安装扩展方便.在原生的 nginx,他不可以动态加载模块,所以当你安装第三方模块的时候需要覆盖 nginx 文件.接下来看看如何安装 nginx 第三模块吧。

nginx 第三方模块安装方法：`./configure --prefix=/你的安装目录 --add-module=/第三方模块路径`。下面以`nginx-upsync-module`第三方模块为例子。

- 如果第一次安装 nginx 并安装第三方模块：

```bash
#进入源码文件目录
cd nginx-1.19
#进行预编译
./configure --prefix=/opt/nginx --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module    --with-pcre --add-module=../nginx-upsync-module-master
#编译
make
#安装
make install
```

- 如果已经安装 nginx 并安装第三方模块：

```bash
#如果没有已安装好的nginx源码目录，需要从nginx官网下载相同版本的源码，在源码基础上重新安装nginx,进入源码文件目录
cd nginx-1.19
#进行预编译
./configure --prefix=/opt/nginx  --with-http_ssl_module    --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module    --with-pcre --add-module=../nginx-upsync-module-master
#编译
make
#将编译好的文件覆盖原来的nginx文件，在nginx源码目录下的objs文件在
cp objs/nginx /opt/nginx/sbin/nginx
```

总结,安装 nginx 安装第三方模块实际上是使用--add-module 重新安装一次 nginx，不要 make install 而是直接把编译目录下 objs/nginx 文件直接覆盖老的 nginx 文件。如果你需要安装多个 nginx 第三方模块,你只需要多指定几个相应的--add-module 即可。注意：重新编译的时候，记得一定要把以前编译过的模块一同加到 configure 参数里面。

nginx 提供了非常多的第三方模块：<https://www.nginx.com/resources/wiki/modules/>
