---
title: Nginx日志配置详解
date: 2022-03-14 12:02:50
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201036989.jpg
---

&emsp;Nginx 日志对于统计、系统服务排错很有用。Nginx 日志主要分为两种：access_log(访问日志)和 error_log(错误日志)。通过访问日志我们可以得到用户的 IP 地址、浏览器的信息，请求的处理时间等信息。错误日志记录了访问出错的信息，可以帮助我们定位错误的原因。本文将详细描述一下如何配置 Nginx 日志。

<!-- more -->

## 设置 access_log

&emsp;访问日志主要记录客户端的请求。客户端向 Nginx 服务器发起的每一次请求都记录在这里。客户端 IP，浏览器信息，referer，请求处理时间，请求 URL 等都可以在访问日志中得到。当然具体要记录哪些信息，你可以通过 log_format 指令定义。

语法如下：

```bash
# 设置访问日志
access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]];
# 关闭访问日志
access_log off;
```

- path 指定日志的存放位置。
- format 指定日志的格式。默认使用预定义的 combined。
- buffer 用来指定日志写入时的缓存大小。默认是 64k。
- gzip 日志写入前先进行压缩。压缩率可以指定，从 1 到 9 数值越大压缩比越高，同时压缩的速度也越慢。默认是 1。
- flush 设置缓存的有效时间。如果超过 flush 指定的时间，缓存中的内容将被清空。
- if 条件判断。如果指定的条件计算为 0 或空字符串，那么该请求不会写入日志。

另外，还有一个特殊的值 off。如果指定了该值，当前作用域下的所有的请求日志都被关闭。  
作用域：可以应用 access_log 指令的作用域分别有 http，server，location，limit_except。也就是说，在这几个作用域外使用该指令，Nginx 会报错。  
基本用法：

```bash
#该例子指定日志的写入路径为/var/logs/nginx-access.log，日志格式使用默认的combined。
access_log /var/logs/nginx-access.log
#或
#该例子指定日志的写入路径为/var/logs/nginx-access.log，日志格式使用默认的combined，指定日志的缓存大小为32k，日志写入前启用gzip进行压缩，压缩比使用默认值1，缓存数据有效时间为1分钟。
access_log /var/logs/nginx-access.log buffer=32k gzip flush=1m
```

### 使用 log_format 自定义日志格式

Nginx 预定义了名为 combined 日志格式，如果没有明确指定日志格式默认使用该格式：

```bash
log_format combined '$remote_addr - $remote_user [$time_local] ''"$request" $status $body_bytes_sent ''"$http_referer" "$http_user_agent"';
```

如果不想使用 Nginx 预定义的格式，可以通过 log_format 指令来自定义：`log_format name [escape=default|json] string ...; `

- name 格式名称。在 access_log 指令中引用。
- escape 设置变量中的字符编码方式是 json 还是 default，默认是 default。
- string 要定义的日志格式内容。该参数可以有多个。参数中可以使用 Nginx 变量。

下面演示一下自定义日志格式的使用:

```bash
access_log /var/logs/nginx-access.log main
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';

```

## 设置 error_log

错误日志在 Nginx 中是通过 error_log 指令实现的。该指令记录服务器和请求处理过程中的错误信息。配置错误日志文件的路径和日志级别：

```bash
error_log file [level];
Default:
error_log logs/error.log error;
```

第一个参数指定日志的写入位置。

第二个参数指定日志的级别。level 可以是 debug, info, notice, warn, error, crit, alert,emerg 中的任意值。可以看到其取值范围是按紧急程度从低到高排列的。只有日志的错误级别等于或高于 level 指定的值才会写入错误日志中。默认值是 error。

基本用法：`error_log /var/logs/nginx/nginx-error.log`。它可以配置在：main， http, mail, stream, server, location 作用域。例子中指定了错误日志的路径为：/var/logs/nginx/nginx-error.log，日志级别使用默认的 error

## open_log_file_cache

每一条日志记录的写入都是先打开文件再写入记录，然后关闭日志文件。如果你的日志文件路径中使用了变量，如 access_log /var/logs/$host/nginx-access.log，为提高性能，可以使用 open_log_file_cache 指令设置日志文件描述符的缓存。
语法：`open_log_file_cache max=N [inactive=time] [min_uses=N] [valid=time];`

- max 设置缓存中最多容纳的文件描述符数量，如果被占满，采用 LRU 算法将描述符关闭。
- inactive 设置缓存存活时间，默认是 10s。
- min_uses 在 inactive 时间段内，日志文件最少使用几次，该日志文件描述符记入缓存，默认是 1 次。
- valid：设置多久对日志文件名进行检查，看是否发生变化，默认是 60s。
- off：不使用缓存。默认为 off。

基本用法：`open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;`。它可以配置在 http、server、location 作用域中。例子中，设置缓存最多缓存 1000 个日志文件描述符，20s 内如果缓存中的日志文件描述符至少被被访问 2 次，才不会被缓存关闭。每隔 1 分钟检查缓存中的文件描述符的文件名是否还存在。
