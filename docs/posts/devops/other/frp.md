---
title: Frp内网穿透服务搭建
description: 搭建一款属于自己的内网穿透服务器。
date: 2022-9-11 15:53:03
sidebar: 'auto'
tag:
  - 内网穿透
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209111209061.jpg
---

&emsp;frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。

<!-- more -->

## 一、Frp 简介

&emsp;`内网穿透`在日常工作中应用还是比较广泛的，可以将我们本地内网应用服务映射到公网上，供其他人访问使用。Frp 相对其他`内网穿透`工具而言，不仅免费，而且还可以自己部署，配置简单，容易上手，但部署前提是需要一台具有公网 IP 的云服务器。下面是 Frp 官网信息和软件下载地址：
:::tip
1、Frp 官网地址：<https://gofrp.org/><br>
2、Frp Github 地址：<https://gofrp.org/><br>
3、Frp 安装包下载地址：<https://github.com/fatedier/frp/releases/><br>
:::

### 1 Frp 是什么？

&emsp;frp 是一个免费的，开源的内网穿透工具。专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。采用`go`语言进行开发，由客户端`frpc`和服务端`frps`2 部分组成，配置简单，容易上手，重要的是免费，自己可以进行部署。

### 2 为什么使用 frp？

&emsp;通过在具有公网 IP 的节点上部署 frp 服务端，可以轻松地将内网服务穿透到公网，同时提供诸多专业的功能特性：

- 客户端服务端通信支持 TCP、KCP 以及 Websocket 等多种协议。
- 采用 TCP 连接流式复用，在单个连接间承载更多请求，节省连接建立时间。
- 代理组间的负载均衡。
- 端口复用，多个服务通过同一个服务端端口暴露。
- 多个原生支持的客户端插件（静态文件查看，HTTP、SOCK5 代理等），便于独立使用 frp 客户端完成某些工作。
- 高度扩展性的服务端插件系统，方便结合自身需求进行功能扩展。
- 服务端和客户端 UI 页面。

### 3 原理

&emsp;frp 主要由 客户端(frpc) 和 服务端(frps) 组成，服务端通常部署在具有公网 IP 的机器上，客户端通常部署在需要穿透的内网服务所在的机器上。内网服务由于没有公网 IP，不能被非局域网内的其他用户访问。用户通过访问服务端的 frps，由 frp 负责根据请求的端口或其他信息将请求路由到对应的内网机器，从而实现通信。

## 二、Frp 安装

&emsp;Frp 服务需要安装服务端`frps`和客户端`frpc` 2 部分。软件下载前往[官网]（https://github.com/fatedier/frp/releases）下载，一般服务端部署在linux，客户端部署在window。根据实际情况下载对应系统的安装包。下面是`frps`和`frpc`安装过程：

### 1 服务端 frps 安装

- 下载安装包  
  &emsp;目前可以在 Github 的 [Release](https://github.com/fatedier/frp/releases) 页面中下载到最新版本的客户端和服务端二进制文件，所有文件被打包在一个压缩包中。根据自身服务器情况选择 linux 或 windows 版本，然后把对应的压缩包包上传至公网云服务器。

- 上传安装包，并解压  
  &emsp;解压缩下载的压缩包，将其中的 frpc 拷贝到内网服务所在的机器上，将 frps 拷贝到具有公网 IP 的机器上，放置在任意目录

- systemd 部署 frps 服务  
  &emsp;在 Linux 系统下，使用 systemd 可以方便地控制 frp 服务端 frps 的启动和停止、配置后台运行和开启自启。要使用 systemd 来控制 frps，需要先安装 systemd，然后在 /etc/systemd/system 目录下创建一个 frps.service 文件。

1 如 Linux 服务端上没有安装 systemd，可以使用 yum 或 apt 等命令安装 systemd.

```bash
# yum
yum install systemd
# apt
apt install systemd
```

2 使用文本编辑器，如 vim 创建并编辑 frps.service 文件。

```bash
$ vim /etc/systemd/system/frps.service
```

写入内容

```bash
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
ExecStart = /path/to/frps -c /path/to/frps.ini

[Install]
WantedBy = multi-user.target
```

3 使用 systemd 命令，管理 frps。

```bash
# 启动frp
systemctl start frps
# 停止frp
systemctl stop frps
# 重启frp
systemctl restart frps
# 查看frp状态
systemctl status frps
```

4 配置 frps 开机自启。

```bash
systemctl enable frps
```

- frps 配置

&emsp;进入 frps 安装目录，编辑`frps.ini`文件，配置服务器端参数和端口，简单配置如下：

```bash
[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = xxx
# 授权码，请改成更复杂的
token = xxx
# http 端口
vhost_http_port =xxx
# https 端口
vhost_https_port =xxx

# frp管理后台端口，请按自己需求更改
dashboard_port = xxx
# frp管理后台用户名和密码，请改成自己的
dashboard_user = xxx
dashboard_pwd = xxx
enable_prometheus = true

# frp日志配置
log_file = /www/wwwroot/frp-server/log/frps.log
log_level = info
log_max_days = 3

```

详细参数参考[服务端配置](https://gofrp.org/docs/reference/server-configures/)

- 5 frps 服务启动

&emsp;frps.ini 配置完成后，通过`systemctl restart frps`重启服务或者`systemctl start frps`,`systemctl status frps`查看 frps 启动状态，当运行状态是`active`时，说明服务启动正常。
此时可以通过`http://43.143.18.xx:7500/static/#/`地址，访问 frps 服务端`dashboard`面板。界面如下：
![dashboard面板](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209111519311.png)

### 2 客户端 frpc 安装

&emsp;根据内网服务器系统下载相应的安装包，然后解压放在任意目录下，核心文件`frpc.exe`和`frpc.ini`其他文件不想要可以直接删除。

- frpc.ini 文件配置

```bash
[common]
# 服务端身份验证token
token = xxx
# 服务端地址
server_addr = xxxxxx
# 服务端端口
server_port = xxx
# 客户端adminUi地址
admin_addr = xxx
# 客户端adminUi端口
admin_port = xxx
# 客户端adminUi账号
admin_user = xxx
# 客户端adminUi密码
admin_pwd = xxx

[web]
type = https
custom_domains = xxx
plugin = https2http
plugin_local_addr = xxxx
# HTTPS 证书相关的配置
plugin_crt_path = xxxx
plugin_key_path = xxxx
plugin_host_header_rewrite = xxxx
plugin_header_X-From-Where = xxxx

[web2]
type = http
#内网启动客户端ip
local_ip = xxxx
#本地服务开启的端口
local_port = xxxx
custom_domains = xxxx
```

`[web]`和`[web2]`为配的的 2 个代理节点，前者采用 https 协议，后者采用 http 协议。在使用 https 或者 http 协议前，需要在服务器 frps.ini 文件中配置对应的 http 和 https 访问端口参数`vhost_http_port =8081`和`vhost_https_port =8080`,并在云服务器安全组开发对外端口，具体端口可以自定义。

- 启动 frpc 服务

&emsp;当 frpc.ini 配置完成时，以 windows 系统为例，cmd 进入 frpc 目录，执行如下命令，启动 frpc 服务

```bash
frpc.exe -c frpc.ini
```

当控制台打印启动成功后，表示客户端启动成功。此时启动本地内网需要代理的服务应用，通过对应的 http 请求：`http://frp.anyfork.top:8081` 或者 `https://frp.anyfork.top:8080`进行访问，便可以映射到本地内网服务。

- admin UI 界面

&emsp;当客户端服务启动后，可以通过`http://127.0.0.1:7400`访问客户端 Admin UI 界面，此界面展示客户端代理节点和配置文件信息，可以动态更改配置文件，在线动态刷新配置。具体界面如下：
![adminUi界面](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209111542667.png)

## 三 nginx 反向代理配置

&emsp;frp 本来就是一款反向代理应用服务器，支持多种协议。服务器端通过设置`vhost_http_port`和`vhost_https_port`2 个端口参数，客户端通过配置 http 和 https(依赖插件`https2http`)协议节点，可以实现 http 和 https 访问。无需借助 nginx 等其他反向代理工具，可以直接实现 http 和 https 功能。本项目便可以直接通过`http://frp.anyfork.top:8081` 或者 `https://frp.anyfork.top:8080`进行直接访问。如果你服务器 80 和 443 端口未被占用，可以直接配置`vhost_http_port=80`和`vhost_https_port=443`，这样访问时就无需加端口访问。如果你服务器 80 和 443 端口被占用，又不想像上面哪样通过`域名+端口`方式访问，可以采用 nginx 进行反向代理，隐藏端口。具体配置如下：
:::danger
通过 nginx 反向代理隐藏访问端口的方式目前只支持 frpc 客户端 http 协议，对于 https 协议 nginx 访问返回 502,具体原因还不清楚。
:::

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name frp.anyfork.top;
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    #HTTP_TO_HTTPS_END
    ssl_certificate    /www/server/panel/vhost/cert/frp_server/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/frp_server/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
    #SSL-END
    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;
        proxy_set_header X-Host $host:$server_port;
        proxy_set_header X-Scheme $scheme;
        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    # HTTP反向代理相关配置结束 <<<

    access_log  /www/wwwlogs/frps.log;
    error_log  /www/wwwlogs/frps.error.log;
}


```

上面的配置针对 frpc 客户端 http 节点进行了反向代理，并配置了 ssl 证书，并反向代理 frpc 配置的 http 监听的端口 8081，实现了 https 访问。对于 frpc 客户端 https 节点，不能通过配置反向代码映射到 8080 端口，具体原因还不清楚。通过此方法 frpc 就可以不用配置 https 协议节点，直接通过 http 协议节点和 nginx 反向代理就可以实现 https 功能。
