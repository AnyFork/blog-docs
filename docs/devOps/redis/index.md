---
title: Redis专题汇总
date: 2022-4-22 15:53:03
tags:
  - Redis
categories:
  - 运维
comments: true
subSidebar: true
layout: PageLayOut
listCell: { mode: right, image: https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202204221600458.jpg }
sticky: 6
---

&emsp;Redis(Remote Dictionary Server)，即远程字典服务，是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API。redis 的官网地址，非常好记，是 redis.io。(域名后缀 io 属于国家域名，是 british Indian Ocean territory，即英属印度洋领地），Vmware 在资助着 redis 项目的开发和维护。

<!-- more -->

## 一、Redis 简介


&emsp;redis 是一个 key-value 存储系统。和 Memcached 类似，它支持存储的 value 类型相对更多，包括 string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和 hash（哈希类型）。这些数据类型都支持 push/pop、add/remove 及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis 支持各种不同方式的排序。与 memcached 一样，为了保证效率，数据都是缓存在内存中。区别的是 redis 会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了 master-slave(主从)同步。<br>
&emsp;Redis 是一个高性能的 key-value 数据库。 redis 的出现，很大程度补偿了 memcached 这类 key/value 存储的不足，在部 分场合可以对关系数据库起到很好的补充作用。它提供了 Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang 等客户端，使用很方便。<br>
&emsp;Redis 支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得 Redis 可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。




<Reward/>