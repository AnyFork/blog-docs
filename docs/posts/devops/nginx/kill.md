---
title: Nginx进程杀不完解决方法
date: 2022-07-23 18:51:45
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207232148622.jpg
---

&emsp;日常工作中，当我们需要kill掉Nginx进程时，通过查看Nginx端口绑定的进程，然后去杀死相应进程，发现会有新的进程绑定，使用kill -9杀完了就有新的进程出现，原因是： nginx的进程分为Master进程和Worker进程，Worker进程是Master派生出来的子进程，其数量始终维持在一个数量上，当缺少一个Worker进程是，Master就会派生一个新的子进程。所以你杀worker进程是杀不完的。

<!-- more -->

## 方式一：

相关nginx进行全部杀掉:
```js
killall -9 nginx
```
## 方式二：

查询所有的nginx的进程：ps -A | grep nginx，然后全部杀掉
```js
[root@VM-0-12-centos /]# ps -A | grep nginx
 105248 ?        00:00:00 nginx
 105249 ?        00:00:00 nginx
 105250 ?        00:00:00 nginx
[root@VM-0-12-centos /]# kill -9 105248 and kill -9 105249 and kill -9 105250 
```
