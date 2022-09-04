---
title: Nginx Gzip资源压缩
date: 2022-03-14 09:34:50
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201100605.jpg
---

&emsp;Nginx Gzip 压缩功能， 可以使网站的 css、js 、xml、html 等静态资源在传输时进行压缩，经过 Gzip 压缩后资源可以变为原来的 30%甚至更小，尽管这样会消耗一定的 cpu 资源，但是会节约大量的出口带宽来提高访问速度

<!-- more -->

## Gzip 压缩

&emsp;Nginx 开启 Gzip 压缩功能，可以使网站的 css、js 、xml、html 文件在传输时进行压缩，提高网页的访问速度,有效地节约带宽,进而优化 Nginx 性能! 经过 Gzip 压缩后页面大小可以变为原来的 30%甚至更小，这样，用户浏览页面的时候速度会快得多。Gzip 的压缩页面需要浏览器和服务器双方都支持，实际上就是服务器端压缩，传到浏览器后浏览器解压并解析。浏览器那里不需要我们担心，因为目前的巨大多数浏览器 都支持解析 Gzip 过的页面。  
&emsp;开启 Gzip 功能后，Nginx 服务器会根据配置的策略对发送的内容, 如 css、js、xml、html 等静态资源进行压缩, 使得这些内容大小减少，在用户接收到返回内容之前对其进行处理，以压缩后的数据展现给客户。这样不仅可以节约大量的出口带宽，提高传输效率，还能提升用户快的感知体验, 一举两得; 尽管会消耗一定的 cpu 资源，但是为了给用户更好的体验还是值得的。  
&emsp;Web 网站上的图片，视频等其它多媒体文件以及大文件，因为压缩前后文件大小压缩差异不大，压缩效果不好，反而会增加 cup 的消耗，所以对于图片或大文件没有必要进行压缩。如果想要优化，可以采用客户端缓存的方法进行性能优化。Gzip 压缩可以配置 http,server 和 location 模块下。  
&emsp;对于字体的处理,只需要为 ttf、otf 和 svg 字体启用 gzip，对其他字体格式进行 gzip 压缩时效果不明显。`gzip_types font/ttf font/otf image/svg+xml `

## Nginx 开启 Gzip 压缩参数说明

```bash
# 开启gzip压缩服务
gzip on;

# gzip压缩是要申请临时内存空间的，假设前提是压缩后大小是小于等于压缩前的。
# 例如，如果原始文件大小为10K，那么它超过了8K，所以分配的内存是8 * 2 = 16K;再例如，
# 原始文件大小为18K，很明显16K也是不够的，那么按照 8 * 2 * 2 = 32K的大小申请内存。
# 如果没有设置，默认值是申请跟原始数据相同大小的内存空间去存储gzip压缩结果。

# 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。
# 例如 4 4k 代表以4k为单位，按照原始数据大小以4k为单位的4倍申请内存。
# 4 8k 代表以8k为单位，按照原始数据大小以8k为单位的4倍申请内存。
# 如果没有设置，默认值是申请跟原始数据相同大小的内存空间去存储gzip压缩结果。
gzip_buffers 2 8k;

# nginx对于静态文件的处理模块。
# 该模块可以读取预先压缩的gz文件，这样可以减少每次请求进行gzip压缩的CPU资源消耗。
# 该模块启用后，nginx首先检查是否存在请求静态文件的gz结尾的文件，如果有则直接返回该gz文件内容。
# 为了要兼容不支持gzip的浏览器，启用gzip_static模块就必须同时保留原始静态文件和gz文件。
# 这样的话，在有大量静态文件的情况下，将会大大增加磁盘空间。我们可以利用nginx的反向代理功能实现只保留gz文件。
gzip_static on|off

# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩
gzip_min_length 1k;

# gzip压缩基于的http协议版本，默认就是HTTP 1.1
gzip_http_version 1.1;

# gzip 压缩级别，1-10，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明
gzip_comp_level 2;

# 需要进行gzip压缩的Content-Type的Header的类型。建议js、text、css、xml、json都要进行压缩；
# 图片就没必要了，gif、jpge文件已经压缩得很好了，就算再压，效果也不好，而且还耗费cpu。
# javascript有多种形式。其中的值可以在 mime.types 文件中找到。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

# 默认值：off
# Nginx作为反向代理的时候启用，开启或者关闭后端服务器返回的结果，匹配的前提是后端服务器必须要返回包含"Via"的 header头。
# off - 关闭所有的代理结果数据的压缩
# expired - 启用压缩，如果header头中包含 "Expires" 头信息
# no-cache - 启用压缩，如果header头中包含 "Cache-Control:no-cache" 头信息
# no-store - 启用压缩，如果header头中包含 "Cache-Control:no-store" 头信息
# private - 启用压缩，如果header头中包含 "Cache-Control:private" 头信息
# no_last_modified - 启用压缩,如果header头中不包含 "Last-Modified" 头信息
# no_etag - 启用压缩 ,如果header头中不包含 "ETag" 头信息
# auth - 启用压缩 , 如果header头中包含 "Authorization" 头信息
# any - 无条件启用压缩
gzip_proxied [off|expired|no-cache|no-store|private|no_last_modified|no_etag|auth|any] ...

# 是否在http header中添加Vary: Accept-Encoding，建议开启
# 和http头有关系，加个vary头，给代理服务器用的，有的浏览器支持压缩，
# 有的不支持，所以避免浪费不支持的也压缩，所以根据客户端的HTTP头来判断，是否需要压缩
gzip_vary on;

# 禁用IE 6 gzip
gzip_disable "MSIE [1-6]\.";
```

## 客户端和服务器进行 gzip 压缩的请求和处理过程

![](https://cdn.jsdelivr.net/gh/AnyFork/blog-images/main/markdown/202203141006242.png)

- 整个请求过程来看，开启 gzip 和不开启 gip 功能，其 http 的请求和返回过程是一致的，不同的是参数。
- 当开启 HTTP 的 gzip 功能时，客户端发出 http 请求时，会通过 headers 中的 Accept-Encoding 属性告诉服务器“我支持 gzip 解压，解压格式（算法）deflate,sdch 为：”。Accept-Encoding:gzip,deflate,sdch。
  注意，不是 request 说自己支持解压，Nginx 返回 response 数据的时候就一定会压缩。这还要看本次 Nginx 返回数据的格式是什么，如果返回数据的原始数据格式，和设置的 gzip_types 相符合，这时 Nginx 才会进行压缩。
- Nginx 返回 response headers 是，如果数据被压缩了，就会在 Content-Encoding 属性中标示 gzip，表示接下来返回的 response
- content 是经过压缩的；并且在 Content-Type 属性中表示数据的原始格式。最后返回经过压缩的 response content 给客户端，客户端再进行解压。这里注意一下，在客户端发送的 headers 里面，有一个 deflate,sdch。这是两种压缩算法，如果读者感兴趣，可以查查相关的资料（我建议查查，了解哈弗曼压缩算法对扩展自己的架构思路很有帮助）
