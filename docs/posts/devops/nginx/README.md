---
title: nginx 内容简介和性能分析
date: 2022-02-19 15:53:03
lang: zh-CN
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209041530281.png
sticky: 5
---

&emsp;Nginx是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了IMAP/POP3/SMTP 服务。适合做静态文件处理和反向代理服务器，轻量级,非阻塞，支持高并发，高抗压，耗费内存少。同时支持故障转移，负载均衡等功能。

<!-- more -->

## 一、nginx 简介

::: theorem
Nginx (engine x) 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。Nginx 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru 站点（俄文：Рамблер）开发的，第一个公开版本 0.1.0 发布于 2004 年 10 月 4 日。
其将源代码以类 BSD 许可证的形式发布，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名。2011 年 6 月 1 日，nginx 1.0.4 发布。
Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在 BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力在同类型的网页服务器中表现较好，中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

::: right
来自 [维基百科](https://baike.baidu.com/item/nginx/3817705?fr=aladdin)
:::

## 二、Nginx 的优点

1、**跨平台**：Nginx 可以在大多数 Unix like OS 编译运行，而且也有 Windows 的移植版本。

2、**简单稳定**：配置简单，非常容易上手，基本在一个 conf 文件中配置，性能比较稳定，用于反向代理，宕机的概率微乎其微，可以 7\*24 小时长时间不间断运行手。

3、**非阻塞**、高并发连接：数据复制时，磁盘 I/O 的第一阶段是非阻塞的。官方测试能够支撑 5 万并发连接，在实际生产环境中跑到 2 ～ 3 万并发连接数.(这得益于 Nginx 使用了最新的 epoll 模型)

4、**事件驱动**：通信机制采用 epoll 模型，支持更大的并发连接。

5、**master/worker 结构**：一个 master 进程，生成一个或多个 worker 进程

6、**内存消耗小**：处理大并发的请求内存消耗非常小。在 3 万并发连接下，开启的 10 个 Nginx 进程才消耗 150M 内存（15M\*10=150M）

7、**成本低廉**：Nginx 可以做高并发的负载均衡，且 Nginx 是开源免费的。而购买 F5 BIG-IP、NetScaler 等硬件负载均衡交换机则需要十多万至几十万人民币

8、**内置的健康检查功能**：NGINX 能够根据应用服务器处理页面返回的状态码、超时信息等检测服务器是否出现故障，并及时返回错误的请求重新提交到其它节点上

9、**节省带宽**：支持 GZIP 压缩，可以添加浏览器本地缓存的 Header 头。

10、**稳定性高**：用于反向代理，宕机的概率微乎其微

11、**模块化程度高**：Nginx 是高度模块化的设计，编写模块相对简单，包括 gzipping, byte ranges, chunked responses,以及 SSI-filter 等 filter，支持 SSL 和 TLSSNI。

12、**支持 Rwrite 重写规则**：能够根据域名、URL 的不同， 将 HTTP 请求分发到不同的后端服务器群组。

13、**支持反向代理和负载均衡**：nginx 支持反向代理和负载均衡的功能。

14、nginx 代理和后端 web 服务器间无需长连接；

15、接收用户请求是异步的，即先将用户请求全部接收下来，再一次性发送后后端 web 服务器，极大的减轻后端 web 服务器的压力。

16、送响应报文时，是边接收来自后端 web 服务器的数据，边发送给客户端的。

17、网络依赖型低。NGINX 对网络的依赖程度非常低，理论上讲，只要能够 ping 通就可以实施负载均衡，而且可以有效区分内网和外网流量。

## 三、Nginx 的缺点

1、**动态处理差**：Nginx只适合静态和反向代理，nginx 处理静态文件好,耗费内存少，但是处理动态页面则很鸡肋，现在一般前端用 nginx 作为反向代理抗住压力，apache 作为后端处理动态请求。

2、**rewrite 弱**：虽然 nginx 支持 rewrite 功能，但是相比于 Apache 来说，Apache 比 nginx 的 rewrite 强大。

## 四、功能对比

### Nginx 和 tomcat 的区别

&emsp;nginx 常用做静态内容服务和代理服务器，直接外来请求转发给后面的应用服务器（tomcat，Django 等），tomcat 更多用来做一个应用容器，让 java web app 泡在里面的东西。严格意义上来讲，Apache 和 nginx 应该叫做 HTTP Server，而 tomcat 是一个 Application Server 是一个 Servlet/JSO 应用的容器。客户端通过 HTTP Server 访问服务器上存储的资源（HTML 文件，图片文件等），HTTP Server 是中只是把服务器上的文件如实通过 HTTP 协议传输给客户端。应用服务器往往是运行在 HTTP Server 的背后，执行应用，将动态的内容转化为静态的内容之后，通过 HTTP Server 分发到客户端
注意：nginx 只是把请求做了分发，不做处理！！

### Nginx 和 Apache 的区别

&emsp;Apache 是同步多进程模型，一个连接对应一个进程，而 nginx 是异步的，多个连接（万级别）可以对应一个进程。nginx 轻量级，抗并发，处理静态文件好
Apache 超稳定，对 PHP 支持比较简单，nginx 需要配合其他后端用，处理动态请求有优势，建议使用前端 nginx 抗并发，后端 apache 集群，配合起来会更好，nignx 的正向代理和反向代理

**1、nginx 相对于 apache 的优点**
:::tip
轻量级，同样起 web 服务，比 apache 占用更少的内存及资源 抗并发，nginx 处理请求是异步非阻塞的，而 apache 则是阻塞型的，在高并发下 nginx 能保持低资源低消耗高性能高度模块化的设计，编写模块相对简单提供负载均衡,社区活跃，各种高性能模块出品迅速
:::
**2、apache 相对于 nginx 的优点**
:::tip
apache 的 rewrite（重写） 比 nginx 的强大 ;支持动态页面;支持的模块多，基本涵盖所有应用;性能稳定，而 nginx 相对 bug 较多。
:::

**3、两者优缺点比较**
:::tip
Nginx 配置简洁, Apache 复杂 ;
Nginx 静态处理性能比 Apache 高 3 倍以上 ;
Apache 对 PHP 支持比较简单，Nginx 需要配合其他后端用;Apache 的组件比 Nginx 多 ;
apache 是同步多进程模型，一个连接对应一个进程;nginx 是异步的，多个连接(万级别)可以对应一个进程;
nginx 处理静态文件好,耗费内存少;
动态请求由 apache 去做，nginx 只适合静态和反向;
Nginx 适合做前端服务器，负载性能很好;
Nginx 本身就是一个反向代理服务器 ，且支持负载均衡
:::
