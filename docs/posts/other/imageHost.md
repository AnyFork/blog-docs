---
title: 使用github搭建免费的图床
date: 2022-03-02 16:42:35
description: 使用github搭建免费的图床
tag:
  - 其他
category:
  - 图床
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021636834.jpg
---

&emsp;经常采用 markdown 编写文档的小伙伴深有体会，如何将图片资源进行存储，并在 markdown 文档中使用呢？采用第三方的图片资源，有的资源有防盗链限制，有的资源可能会过期，那么，今天就给小伙伴介绍一个免费的，快速高效的，属于自己的图床仓库。

<!-- more -->

::: info
1、github 图床原理：通过 github Api 和个人授权 Token,通过第三方工具将本地图片上传到个人 github 仓库进行图片存储，然后生成一个通过 CND 加速的链接，提供用户访问。 **注意：** github 个人授权令牌 Token 一旦创建再无法获取，一定牢记住，如果遗失，只能重新生成一个。

2、github 图床最好单独创建一个仓库，并且仓库大小不能超过 100M，否则会被官方视为图床封禁，如果超过 100M，需要重新创建新的图床仓库。
:::

## 什么是图床

&emsp;图床其实是互联网中存储图片的空间，举个栗子：假设你在微博分享一张图片，你的粉丝可以通过互联网看到你分享的图片，那么他是去访问你的手机的相册吗？其实不是的，你分享图片，也就是把图片上传到微博的服务器，微博将为你生成一个独一无二的访问链接，这个链接指向的空间其实就是图床。

## 为什么需要图床

&emsp;会去接触图床的人通常都是一些热爱在网上分享博客或者喜欢采用 markdown 编写文档的人，使用图床的人通常采用 Markdown 的方式去编辑文字。我们都知道现在通常流行两种方式编辑文字：富文本编辑，Word 就是其中非常具有代表性的，文字的各种格式都是通过交互按钮设置的，这时候需要频繁的鼠标配合操作。这种方式操作渐变，但是对于大量编辑工作的文字工作者，双手离开键盘使用鼠标其实是一种负担。
Markdown 编辑，是一种通过 Markdown 标记语言去规定格式的纯文本编辑方式。这种方式使得文字工作者专注于文字，而非格式，双手可以彻底的解放鼠标，大大提高了效率。还有一个优点就是，Markdown 比富文本编辑方式更加具有通用性，word 的文字整篇复制到有道云笔记格式会出现差异，这也是富文本编辑的巨大缺陷。

## 怎样获得图床

目前有许多获得图床的途径非常多，通常分为收费的和免费的。收费图床：优点在于地址保持、独立域名、可能速度更快吧。免费图床：推荐刚接触的同学可以使用有道云笔记和微博，因为这两个软件大家都比较熟悉，操作也简单。 常用的图床有：微博，有道云笔记，github 图床,腾讯云 cos,七牛图床，阿里云 OSS，SM.MS 图床。今日主要给小伙伴们介绍一款免费的 github 图床的创建方式。图床的大致使用流程如下：![图床的大致使用流程如下](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021701018.png)

## 图床仓库创建

1、创建一个存放图片的公开的`github`仓库
![创建一个存放图片的公开的github仓库](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021717135.png)
2、创建 Token，【进入 github】-【点击头像】-【settings】-【developer settings】-【Personal access tokens】，个人访问令牌创建成功，请复制你的 token，它只显示一次，请妥善保管。操作如下图：![创建Token](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021717283.png)

## PicGO 工具下载安装

&emsp;PicGO 是一款采用 electron+Vue 开发上传图片的桌面端工具。首先需要本地下载安装客户端，官网开源地址：<https://github.com/Molunerfinn/PicGo/releases>; 安装完打开客户端进行配置：有很多图床，我们选择 github 图床，配置相关的仓库信息和 token 信息。

## PicGO 配置 github 图床

1、填写图床仓库名称，分支，图片存放目录，个人令牌 Token，配置如下：
![token配置](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021709999.png)  
这里的自定义域名的格式：`https://cdn.jsdelivr.net/gh/用户名/仓库名`，这是个免费的 CDN 加速，可以加快图片的访问速度，也可以不加。
2、通过 PicGO 上传区上传图片
![上传图例](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021726001.png)  
3、在相册中查看图片，点击对应的图片复制不同格式连接，直接使用。
![预览图例](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021726886.png)  
4、查看 github 图床仓库图片存储情况
![仓库预览](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021730066.png)  
至此 github 图床创建完成了，小伙伴们可以开心的玩耍了 :grinning:。

## 免费的 CDN 加速

:::note
CDN 的全称是 Content Delivery Network，即内容分发网络。CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。由于某些原因，很多公用免费的 CDN 资源在中国大陆并不很好用，就算是付费的，也有一定的限制，例如每天的刷新次数有限之类的。
:::

&emsp;最近 CDN`https://cdn.jsdelivr.net`由于 dns 污染一致无法访问，导致加速失效。下面便收集了一些免费的 CDN 链接，以备更换。主要介绍：jsdelivr，staticaly，githack

### jsdelivr

:::tip
1、这是在中国大陆唯一有 license 的公有 CDN，而且实际使用中的访问速度也是极快的。

2、[官网地址](https://www.jsdelivr.com),没梯子访问可能有点慢，不过 CDN 的节点是很快的 可以引用的资源包括 NPM、github、wordpress 的所有资源，github 可以是任意体积小于 50M 的仓库。
:::
以 github 为例，只需要通过符合 JSDelivr 规则的 URL 引用，即可直接使用 Github 中的资源。

```bash
// 用户名/仓库名@版本号/文件名
https://cdn.jsdelivr.net/gh/user/repo@version/file
// load jQuery v3.2.1
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js


// 使用一个范围内的版本
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js
https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js


// 忽略版本号则默认使用最新版
// you should NOT use this in production
https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js


// 在任意JS/CSS文件后添加 .min 能得到一个缩小版
// 如果它本身不存在，我们将会为你生成
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js


// 在末尾加 / 则得到目录列表
https://cdn.jsdelivr.net/gh/jquery/jquery/
```

### staticaly

官网地址：<https://www.staticaly.com>,轻松地从GitHub / GitLab / Bitbucket 等加载您的项目 没有流量限制或限制。文件通过超快速全球 CDN 提供。 在 URL（不是分支）中使用特定标记或提交哈希。根据 URL 永久缓存文件。 除 master 分支外，文件在浏览器中缓存 1 年。 具体用法：

```bash
# GitHub CDN
https://cdn.staticaly.com/gh/:user/:repo/:tag/:file
https://cdn.staticaly.com/gh/growvv/growvv.github.io/master/README.md

# GitLab CDN
https://cdn.staticaly.com/gl/:user/:repo/:tag/:file

# Bitbucket CDN
https://cdn.staticaly.com/bb/:user/:repo/:tag/:file

# WordPress CDN
https://cdn.staticaly.com/wp/c/:version/wp-includes/:file
https://cdn.staticaly.com/wp/p/:plugin_name/:version/:file
https://cdn.staticaly.com/wp/t/:theme_name/:version/:file

# Imgpx CDN
https://cdn.staticaly.com/img/:image_url

# Favicons CDN
https://cdn.staticaly.com/favicons/:favicon_url
```

### githack

官网地址：<http://raw.githack.com/> 具体用法和上面的 staticaly 很类似，直接从 GitHub，Bitbucket 或 GitLab 提供原始文件。用法如下：

```bash
# Github CDN
//主分支
https://rawcdn.githack.com/liub1934/LB-Blog/master/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png

//版本分支
https://rawcdn.githack.com/liub1934/LB-Blog/8806f440d3f9a7cc3e6125d7d75564e40262c6a8/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png
```

## 其他图床

### 客来图床

&emsp;另外给小伙伴们介绍一款 web 浏览器网站工具，也可以上传图片到我们的 github 图床仓库，这种方式可以避免特殊情况下安装桌面端程序也可以上传图片。官网地址：<https://img.itclan.cn/#/upload>。使用和 PicGo 很相似，输入个人令牌，会自动调用 github Api 获取个人信息，然后选择图床仓库，配置图床文件路径，如下图：  
![配置](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021749103.png)  
然后点击上传图片，上传后可以筛选不同目录下的图片，也可以预览 PicGo 上传的图片，同时可以获取 github 外网链接和 CND 加速链接，markdown 格式的链接直接使用，如下图：
![图例](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021750165.png)
