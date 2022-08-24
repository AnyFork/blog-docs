---
title: html绕开防盗链方法
date: 2022-03-01 19:06:46
description: html绕开防盗链方法
tag:
  - 其他
category:
  - 盗链
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203021637553.jpg
---

&emsp;现在很多第三方网站对于自身资源进行了防盗链保护，想要引用他们的资源链接，会直接资源跳转或者 403 禁止访问。此篇文章从 html 角度讲述如何绕开采用 referer 方式实现的软防盗链的方法。

<!-- more -->

## 盗链

&emsp;盗链是指服务提供商自己不提供服务的内容，通过技术手段绕过其它有利益的最终用户界面(如广告)，直接在自己的网站上向最终用户提供其它服务提供商的服务内容，骗取最终用户的浏览和点击率。受益者不提供资源或提供很少的资源，而真正的服务提供商却得不到任何的收益。举个例子：假设 B 站点作为一个商业网站，有很多自主版权的图片，自身展示用于商业目的。而 A 站点，希望在自己的网站上面也展示这些图片，直接使用：`<img src="http://b.com/photo.jpg"/>`这样，大量的客户端在访问 A 站点时，实际上消耗了 B 站点的流量，而 A 站点却从中达成商业目的。从而不劳而获。这样的 A 站点着实令 B 站点不快的。

## 防盗链

&emsp;为了解决盗链的问题，通过一定的方式禁止非法访问，实现网站资源链接防盗的策略就是防盗链。防盗通过 Referer 或者签名，网站可以检测目标网页访问的来源页，如果是指定的网站或符合条件的网站，就可以跟踪到显示它的网页地址。HTTP 协议和标准的浏览器对于解决盗链提供便利，浏览器在加载非本站的资源时，会增加一个头域，头域名字固定为：`Referer`，而在直接粘贴地址到浏览器地址栏访问时，请求的是本站的该 url 的页面，是不会有这个 referer 这个 http 头域的。针对非同域名下面的请求，可以通过对`Referer`拦截设置，判断是否允许访问，对于不允许的域名访问进行防盗。大部分网站现在通过 Nginx 配置 referer 引用的方式设置防盗链，有的设置了`valid_referers none blocked 匹配域名`这种方式只是防止第三方盗用图片，但可以通过浏览器打开，右键下载;有的设置了`valid_referers 匹配域名;`这种方式属于`强`防盗链,除了白名单中的域名，禁止任何非法访问，包括浏览器直接访问和右键下载。

## 如何设置网站防盗链

:::tip
网站资源链接防盗策略很多，但大多数网站通过 nginx 设置防盗链，禁止资源链接防盗。
:::

### **一 Nginx 防盗链配置**

#### **1 referer 引用方式**

&emsp;通过 Referer，网站可以检测目标网页访问的来源网页是否合法，只有在设定的允许范围内的 referer 才能访问指定的资源，从而实现了防盗链的目的。
工作模块：`ngx_http_referer_module`。作用变量：`$invalid_referer`全局变量。配置域：`server, location`

```bash
# 指定文件类型
server {
   listen 80;
   server_name www.imcati.com;
   root /usr/share/nginx/html;
   location ~*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        valid_referers none blocked www.imcati.com;
        if ($invalid_referer) {
　　　　　　  #rewrite ^/ http://www.youdomain.com/404.jpg;
            return 403;
        }
   }
}

# 指定文件目录
server {
   listen 80;
   server_name www.imcati.com;
   root /usr/share/nginx/html;
   location /img/ {
    root /data/img/;
    valid_referers none blocked www.imcati.com;
      if ($invalid_referer) {
          rewrite  ^/  http://www.765h.com/images/error.gif;
          #return   403;
      }
   }
}
```

1、valid_referers: 指定资源访问是通过以下几种方式为合法，即白名单。  
2、none：允许缺失的头部访问。可以把 none 去掉，防止别人通过右键另存图片地址  
3、blocked：代表有 referer 但是被防火墙或者是代理给去除了。  
4、server_names：若 referer 站点域名与 server_name 中本机配的域名一样允许访问。
5、首先当我输入我要打开的网址的时候，因为是直接输入的没有 referer 所以匹配了 valid_referers 后面的 none 或者是 blocked 所以 invalid_referer 值为 0 所以不进行跳转.
当我是从这个网站里面的链接跳到该网站首页的时候 因为 referer 的值是肯定包含 srever_names 所以匹配了 server_names 所以不进行跳转。当我从搜素引擎进去的时候因为 referer 字段类似于www.google.com.hk/search开始进行匹配 发现没有一个匹配，则此时会设置 invalid_referer 值为 1 if 语句成功执行，进行了跳转,达到功能。如果把这两个（none,blocked）去掉就可以真正的实现防盗连了！因为只有匹配到 server_name 的时候，才不会进行跳转。

#### **2 签名方式**

&emsp;当然别人也可以通过篡改伪造 refer 来进行访问，导致 referer 引用方式无法彻底解决防盗问题，签名方式可以彻底解决问题。使用签名方式需要安装第三方模块 `HttpAccessKeyModule`。
然后按照如下配置即可：

```bash
# 指定文件类型
server {
    listen       80;
    server_name  www.imcati.com;
    root /usr/share/nginx/html;
    location ~*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        accesskey on;
        accesskey_hashmethod md5;
        accesskey_arg "key";
        accesskey_signature "mypass$remote_addr";
    }
}
# 指定文件目录
server {
    listen       80;
    server_name  www.imcati.com;
    root /usr/share/nginx/html;
    location /img/ {
        root /data/img/;
        accesskey on;
        accesskey_hashmethod md5;
        accesskey_arg "key";
        accesskey_signature "mypass$remote_addr";
    }
}
```

1、accesskey on | off: 模块开关  
2、accesskey_hashmethod md5|sha—1: 签名加密方式  
3、accesskey_arg: GET 参数名称  
4、accesskey_signature：为加密值，此处为 mypass 和访问 IP 构成的字符串。  
5、$sign = md5('mypass' . $_SERVICE['REMOTE_ADDR']);  
6、通过`img src=/test.png?key=<?=$sign?>`方式访问图片。

## html 绕开防盗链方法

&emsp;如果采用 referer 应用方式处理防盗链问题，我们想要盗用其他网站的资源，可以在 html 通过以下设置绕开防盗链。在标签里加 meta。例如：`<meta name="referrer" content="never">`在某些情况下，出于一些原因，网站想要控制页面发送给 server 的 referrer 信息的情况下，可以使用这 referer metadata 参数。
referer 的 metedata 属性可设置 content 属性值为以下集合：`never`,`always`,`origin`,`default`

- 如果 referer-policy 的值为 never：删除 http head 中的 referer；值需要是 never，浏览器都可以兼容，no-referrer 这种有些浏览器不兼容
- 如果 referer-policy 的值为 default：如果当前页面使用的是 https 协议，而正要加载资源使用的是普通的 http 协议，则将 http header 中额 referer 置为空；
- 如果 referer-policy 的值 origin：只发送 origin 部分；
- 如果 referer-policy 的值为 always：不改变 http header 中的 referer 的值
