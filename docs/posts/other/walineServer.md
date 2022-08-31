---
title: Waline 服务端独立部署解决方案
date: 2022-8-23 15:30:27
description: Waline 服务端独立部署解决方案。
lang: zh-CN
tag:
  - waline
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202208311312129.png
---

&emsp;waline 是一款简洁、安全的评论系统，该系统包含了客户端与服务端，属于 valine 的衍生版本，增加了服务端功能，解决了 valine 阅读数据篡改，XSS 安全，用户隐私泄露等数据安全问题。waline 不仅具有 valine 功能，还提供了邮件通知、微信通知、评论后台管理、LeanCloud, MySQL, MongoDB, SQLite, PostgreSQL 多存储服务支持等诸多特性。不仅如此，Waline 默认使用 Vercel 部署，实现完全免费部署！本文着重记录 waline 服务器独立部署的过程。

<!-- more -->

## 简述

&emsp;waline 作为 valine 的加强版，增加了服务端功能，支持多种数据库和自定义数据库模式，数据存储更加安全。waline 默认数据库:[LeanCloud](https://console.leancloud.app/login)，`LeanCloud`有[国内版](https://console.leancloud.cn/login?from=%2Fapps)和[国际版](https://console.leancloud.app/login?from=%2Fapps)2 个版本，国内版需要配置自定义域名，国际版访问存在很高延迟，如果不考虑数据安全性，可以尝试`leancloud`数据库。默认部署方案：[Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)，`Vercel`是一种免费的部署方案，部署也比较简单，注册登录后配置环境变量，打包编译即可(依赖 github 仓库)，但最近`vercel`好像挂了，没有梯子根本无法访问，所有博主放弃了默认部署方式，采用`waline`服务端独立部署方案。更多其他部署方案，请参考[waline 官网](https://waline.js.org/)。

:::warning
`waline`服务端独立部署需要具备以下条件：

1、一台云服务器和安装好的数据库(例如：MySQL)，其他数据库参考[多数据源参考](https://waline.js.org/guide/server/databases.html)。

2、`Nodejs`环境安装配置，项目部署依赖 Node 环境，需要提前安装好环境。
:::

## 准备工作

&emsp;`waline`服务端独立部署很简单，可以参考[waline 官网](https://waline.js.org/guide/server/vps-deploy.html)独立部署，官网描述比较简单，仅供参考。本文独立部署只需要 3 大步骤：`环境变量配置`，`项目依赖包配置`和`服务器部署`。下面讲述具体实现方式。

### 环境变量配置

&emsp;环境变量配置指：配置`waline`数据库环境变量。`waline`采用环境变量的方式读取配置信息，内置了多种数据库环境变量，具体参考[多数据源环境变量](https://waline.js.org/guide/server/databases.html)。我们只需要按照内置配置项进行配置，就可以更换对应的数据库。下面以`MySQL`为例，使用时请先导入 [waline.sql](https://github.com/walinejs/waline/blob/main/assets/waline.sql) 以完成表和表结构的创建，之后在项目中配置如下环境变量：
| 环境变量名称 | 必填 | 默认值 | 备注 |
| ---------------- | ---- | --------- | ----------------------------- |
| MYSQL*HOST | | 127.0.0.1 | MySQL 服务的地址 |
| MYSQL_PORT | | 3306 | MySQL 服务的端口 |
| MYSQL_DB | ✅ | | MySQL 数据库库名 |
| MYSQL_USER | ✅ | | MySQL 数据库的用户名 |
| MYSQL_PASSWORD | ✅ | | MySQL 数据库的密码 |
| MYSQL_PREFIX | | wl* | MySQL 数据表的表前缀 |
| MYSQL_CHARSET | | utf8mb4 | MySQL 数据表的字符集 |
| MYSQL_SSL | | | 是否使用 SSL MYSQL 连接数据库 |

&emsp;根据实际情况可以只配置必填项，其他选项采用默认值即可。其他数据库配置也一样，只是配置项存在差异而已，很简单。环境变量使用有以下 2 种方式：

#### 方式一：

&emsp;如果你的服务器是 linux 操作系统的话，那么就可以通过修改属主目录下的.bashrc 文件，并写入以下内容：

```bash
export MYSQL_HOST=12.12.12.12
export MYSQL_PORT=3306
export MYSQL_DB=waline
#以这三个为例，更多请对照参数表一一填写即可
```

&emsp;填写完成后保存文件并执行以下命令刷新：

```bash
source ~/.bashrc
```

&emsp;该方法是直接导出系统级的环境变量，使`waline` 服务端可以从`process.env`对象中顺利读取到，而这样定义的全局环境变量存在一个弊端，就是会污染到全局，可能会干预到其他项目，而且 windows 与 linux 的配置方法各不相同。所以这里并不推荐，而是更推荐使用方案二

#### 方案二：

&emsp;我们需要了解的是，在`nodejs` 中，通过 `process.env` 对象可以拿到全局的环境变量，而有这么一个第三方库，可以做到既不污染全局环境变量，也能实现代码与配置分开管理：dotenv。该库支持将环境变量写入到一个在项目根目录下的.env 文件中，并在代码中通过`dotenv.config()`方法将变量合并至`process.env`对象中，每个项目的.env 文件都是一个独立的作用域，在项目结束运行时，`.env `文件中的全局变量将被销毁，我们可以通过这个方法，编写一个 javascript 脚本，我们只需要调用`dotenv.config()`方法写入全局变量，之后引入并执行`@waline/vercel/vanilla.js` 这个文件即可。

### 项目依赖包配置

&emsp;项目依赖包配置：构建项目目录，可以直接在服务器中搭建，也可以在本地创建好项目，再上传至服务器。下面讲述本地项目构建方式，项目名称为：`waline-server`为例。

- 创建项目目录

```bash
mkdir waline-server
```

- 初始化项目

```bash
npm init -y
```

- 安装依赖

```bash
# dotenv环境变量依赖
npm install dotenv
# waline 服务器端依赖
npm install @waline/vercel

```

- 创建环境变量`.env`文件,写入环境变量配置项

```bash
# 数据库连接地址
MYSQL_HOST=127.0.0.1
# 数据库连接端口号
MYSQL_PORT=3306
# 数据库名
MYSQL_DB=waline
# 连接数据库用户名
MYSQL_USER=root
# 连接密码
MYSQL_PASSWORD=thbbx09
```

- 创建程序入口文件`main.js`

```js
// 引入dotenv
const dotenv = require('dotenv')
// 调用config方法合并.env环境变量
dotenv.config()
// 引入并执行该文件
require('@waline/vercel/vanilla.js')
```

- `package.json`配置`script`

```js
"scripts": {
    "start": "node ./main.js"
  }
```

&emsp;至此，项目构建完成，可以在本地启动进行测试，默认访问地址：`http://127.0.0.1:8360`,默认端口：`8360`。将代码上传至服务器预设目录下，进行部署。项目代码获取方式：

```bash
git clone https://github.com/AnyFork/waline-server.git
```

### 服务器部署

&emsp;服务器部署分为 2 个步骤，1 上传代码至服务器并运行； 2 配置 nginx 反向代理。

- 项目启动
  将代码上传至预设目录，然后执行以下命令：

```bash
# 安装依赖
npm install
# 项目启动
npm run start
```

- Nginx 反向代理
  如果你不想带端口访问的话，可以增加 Nginx 80 和 443 端口的反代。可参考如下配置:

```bash
server
{
  listen 80;
  listen 443 ssl http2;
  server_name your.domain.server.name;
  root /www/wwwroot/your.domain.server.name;
  if ($server_port !~ 443){
    rewrite ^(/.*)$ https://$host$1 permanent;
  }

  # SSL setting
  ssl_certificate fullchain.pem;
  ssl_certificate_key privkey.pem;
  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  add_header Strict-Transport-Security "max-age=31536000";

  # proxy to 8360
  location / {
    proxy_pass http://127.0.0.1:8360;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header REMOTE-HOST $remote_addr;
    add_header X-Cache $upstream_cache_status;
    # cache
    add_header Cache-Control no-cache;
    expires 12h;
  }
}
```
