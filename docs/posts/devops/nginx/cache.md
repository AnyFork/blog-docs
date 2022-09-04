---
title: Nginx Cache缓存配置
date: 2022-03-14 10:13:50
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201016051.jpg
---

&emsp;Nginx作为Web缓存服务器，它介于客户端和应用服务器之间，当用户通过浏览器访问一个URL时，web缓存服务器会去应用服务器获取要展示给用户的内容，将内容缓存到自己的服务器上，当下一次请求到来时，如果访问的是同一个URL，web缓存服务器就会直接将之前缓存的内容返回给客户端，而不是向应用服务器再次发送请求。web缓存降低了应用服务器、数据库的负载，减少了网络延迟，提高了用户访问的响应速度，增强了用户的体验。

<!-- more -->

## 浏览器缓存的作用是什么？

&emsp;1. 缓存可以减少冗余的数据传输。节省了网络带宽，从而更快的加载页面。  
&emsp;2. 缓存降低了服务器的要求，从而服务器更快的响应。

## 缓存的资源文件到什么地方去了呢？

&emsp;根据缓存的资源存储的位置缓存分为`内存缓存(memory cache)`和`磁盘缓存(disk cache)` memory cache: 它是将资源文件缓存到内存中，等下次请求访问的时候不需要重新下载资源，而是直接从内存中读取数据。disk cache: 它是将资源文件缓存到硬盘中，等下次请求的时候它是直接从硬盘中读取。二者区别如下：

- memory cache(内存缓存)退出进程时数据会被清除，而 disk cache(硬盘缓存)退出进程时数据不会被清除。内存读取比硬盘中读取的速度更快。但是我们也不能把所有数据放在内存中缓存的，因为内存也是有限的。
- memory cache(内存缓存)一般会将脚本、字体、图片会存储到内存缓存中。
- disk cache(硬盘缓存) 一般非脚本会存放在硬盘中，比如 css 这些。

&emsp;缓存读取的原理：先从内存中查找对应的缓存，如果内存中能找到就读取对应的缓存，否则的话就从硬盘中查找对应的缓存，如果有就读取，否则的话，就重新网络请求。
&emsp;浏览器缓存分为：`强制缓存和协商缓存`  
&emsp;协商缓存原理：客户端向服务器端发出请求，服务端会检测是否有对应的标识，如果没有对应的标识，服务器端会返回一个对应的标识给客户端，客户端下次再次请求的时候，把该标识带过去，然后服务器端会验证该标识，如果验证通过了，则会响应 304，告诉浏览器读取缓存。如果标识没有通过，则返回请求的资源。那么协商缓存的标识又有 2 种：`ETag/if-None-Match` 和 `Last-Modified/if-Modify-Since`

## 协商缓存 Last-Modified/if-Modify-Since

&emsp;浏览器第一次发出请求一个资源的时候，服务器会返回一个 last-Modify 到 hearer 中. Last-Modify 含义是最后的修改时间。当浏览器再次请求的时候，request 的请求头会加上 if-Modify-Since，该值为缓存之前返回的 Last-Modify. 服务器收到 if-Modify-Since 后，根据资源的最后修改时间(last-Modify)和该值(if-Modify-Since)进行比较，如果相等的话，则命中缓存，返回 304，否则, 如果 Last-Modify > if-Modify-Since, 则会给出 200 响应，并且更新 Last-Modify 为新的值

## 协商缓存 ETag/if-None-Match

&emsp;ETag 的原理和上面的 last-modified 是类似的。ETag 则是对当前请求的资源做一个唯一的标识。该标识可以是一个字符串，文件的 size,hash 等。只要能够合理标识资源的唯一性并能验证是否修改过就可以了。ETag 在服务器响应请求的时候，返回当前资源的唯一标识(它是由服务器生成的)。但是只要资源有变化，ETag 会重新生成的。浏览器再下一次加载的时候会向服务器发送请求，会将上一次返回的 ETag 值放到 request header 里的 if-None-Match 里面去，服务器端只要比较客户端传来的 if-None-Match 值是否和自己服务器上的 ETag 是否一致，如果一致说明资源未修改过，因此返回 304，如果不一致，说明修改过，因此返回 200。并且把新的 Etag 赋值给 if-None-Match 来更新该值

## last-modified 和 ETag 之间对比

- 1. 在精度上，ETag 要优先于 last-modified。
- 2. 在性能上，Etag 要逊于 Last-Modified，Last-Modified 需要记录时间，而 Etag 需要服务器通过算法来计算出一个 hash 值。
- 3. 在优先级上，服务器校验优先考虑 Etag。

## 理解强制缓存

&emsp;基本原理：浏览器在加载资源的时候，会先根据本地缓存资源的 header 中的信息(Expires 和 Cache-Control)来判断是否需要强制缓存。如果命中的话，则会直接使用缓存中的资源。否则的话，会继续向服务器发送请求。  
&emsp;Expires 是 http1.0 的规范，它的值是一个绝对时间的 GMT 格式的时间字符串。这个时间代表的该资源的失效时间，如果在该时间之前请求的话，则都是从缓存里面读取的。但是使用该规范时，可能会有一个缺点就是当服务器的时间和客户端的时间不一样的情况下，会导致缓存失效。  
&emsp;Cache-Control 是 http1.1 的规范，它是利用该字段 max-age 值进行判断的。该值是一个相对时间，比如 Cache-Control: max-age=3600, 代表该资源的有效期是 3600 秒。除了该字段外，我们还有如下字段可以设置：

- no-cache: 需要进行协商缓存，发送请求到服务器确认是否使用缓存。

- no-store：禁止使用缓存，每一次都要重新请求数据。

- public：可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。

- private：只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。

&emsp;**注意：Cache-Control 与 Expires 可以在服务端配置同时启用，同时启用的时候 Cache-Control 优先级高**

## nginx 缓存配置

&emsp;可以在一定程度上，减少服务器的处理请求压力。比如对一些图片，大文件，css 或 js 做一些缓存，那么在每次刷新浏览器的时候，就不会重新请求了，而是从缓存里面读取。这样就可以减轻服务器的压力。nginx 可配置的缓存又有 2 种：

- 1 客户端的缓存(一般指浏览器的缓存)。
- 2 服务端的缓存(使用 proxy-cache 实现的)。  
  **注意：客户端的缓存一般有如下两种方式实现：协商缓存和强缓存。**

```bash
server {
  location ~* \.(html)$ {
    access_log off;
    add_header  Cache-Control  max-age=no-cache;
  }

  location ~* \.(css|js|png|jpg|jpeg|gif|gz|svg|mp4|ogg|ogv|webm|htc|xml|woff)$ {
    # 同上，通配所有以.css/.js/...结尾的请求
    access_log off;
    add_header    Cache-Control  max-age=360000;
  }
}
```

~_ 的含义是：通配任意字符（且大小写不敏感），\转义字符，因此 ~_ \.(html)$的含义是：匹配所有以.html 结尾的请求
access_log off; 的含义是 关闭日志功能。  
**add_header Cache-Control max-age=no-cache;** 的含义：html 文件不设置强制缓存时间，协商缓存，使用 Last-Modified。no-cache 会发起往返通信来验证缓存的响应，但如果资源未发生变化，则不会下载，返回 304  
**add_header Cache-Control max-age=360000;** 的含义给上面匹配后缀的文件设置强制缓存，且缓存的时间是 360000 秒，第一次访问的时候，从服务器请求，当除了第一次以外，再次刷新浏览器，会从浏览器缓存读取，那么强制缓存一般是从内存里面先读取，如果内存没有，再从硬盘读取。

**注意：如上只是不对反向代理的页面进行缓存设置的，但是如果是反向代理后的页面，如上设置是不生效的。比如说我 node 起了一个服务，然后通过访问 nginx 反向代理的方式代理到我 node 服务来，上面的配置是不生效的。因此我们需要如下处理配置**

## 解决 nginx 反向代理缓存不起作用的问题

比如我上面的 node 服务端口是 7878 端口。nginx 需要如下配置：

```bash
server {
  listen  8081;
  server_name  xxx.abc.com;
  location / {
    proxy_pass http://localhost:7878;
    add_header  Cache-Control  max-age=no-cache;
  }
}
```

1 如果我们要添加缓存功能的话，需要创建一个用于存放缓存文件的文件夹。比如我们这里使用 /data/nuget-cache。  
2 然后我们需要在 nginx.conf 的 http 设置部分添加 proxy_cache_path 的设置，如下：

```bash
http {
  // ..... 其他的配置
  proxy_cache_path  /data/nuget-cache levels=1:2 keys_zone=nuget-cache:20m max_size=50g inactive=168h;
  server {
    listen  8081;
    server_name  xxx.abc.com;
    location / {
      proxy_pass http://localhost:7878;
      add_header  Cache-Control  max-age=no-cache;
    }
  }
}
```

proxy_cache_path 各个配置值的含义解析如下：

- proxy_cache_path 指缓存的目录，目录为：/data/nuget-cache。
- levels=1:2 表示采用 2 级目录结构。
- keys_zone 指的是缓存空间名称，叫 nuget-cache。缓存内存的空间为 20M。
- max_size 指的是缓存文件可以占用的最大空间，为 50G。
- inactive=168h; 默认过期时间为 168 个小时。为 7 天，也可以写成：inactive=7d; 这样的格式。

3 我们还需要在 server 设置部分添加 proxy_cache 与 proxy_cache_valid 的设置：

```bash
http {
  // ..... 其他的配置
  proxy_cache_path  /data/nuget-cache levels=1:2 keys_zone=nuget-cache:20m max_size=50g inactive=168h;
  server {
    listen  8081;
    server_name  xxx.abc.com;
    location / {
      proxy_pass http://localhost:7878;
      add_header  Cache-Control  max-age=no-cache;
      proxy_cache nuget-cache;
      proxy_cache_valid 168h;
      proxy_ignore_headers Set-Cookie Cache-Control;
      proxy_hide_header Cache-Control;
      proxy_hide_header Set-Cookie;
    }
  }
}
```

- proxy_cache 设置的是 proxy_cache_path 中的 keys_zone 的值。
- proxy_cache_valid：设置的是缓存过期时间，比如设置 168 个小时过期。
- proxy_ignore_headers 的含义是：忽略 Cache-Control 的请求头控制，依然进行缓存，比如对请求头设置 cookie 后，默认是不缓存的，需要我们增加忽略配置。  
  至此 nginx 缓存配置就完成了，重启 nginx，发现已经可以实现缓存了。
