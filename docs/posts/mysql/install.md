---
title: MySql多种安装方式
date: 2022-03-14 15:34:59
tag:
  - MySql
category:
  - 数据库
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202203141729266.gif
---

&emsp;MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。
在本专题中，会让大家快速掌握 MySQL 的基本知识，并轻松使用 MySQL 数据库。

<!-- more -->

## 1 docker 安装 MySql8.x 版本

### 拉取最新镜像

```bash
#查询镜像信息
docker search mysql
#拉取镜像
docker pull mysql:latest
#或拉取指定版本
docker pull mysql:8.0.28
```

### 创建挂载目录

```bash
# 创建配置文件目录：/opt/mysql/conf，数据挂载目录：/opt/mysql/data，日志目录：/var/log/mysql
mkdir -p /opt/mysql/conf /opt/mysql/data /opt/mysql/log
# 文件目录授权
chmod -R 755 /opt/mysql/
```

### 创建配置文件

```bash
# 方式一：创建mysql临时容器，通过命令复制容器原始配置文件，进行修改
docker run -p 3306:3306 --name mysql -d mysql
docker cp mysql:/etc/mysql/my.cnf /opt/mysql/conf
# 方式二：自己创建配置文件
vim /opt/mysql/conf/my.cnf
#添加以下内容到上述创建的配置文件中
[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
#数据存储目录
datadir         = /var/lib/mysql
pid-file = /usr/mysql/mysqld.pid
#日志路径
general_log = 1
general_log_file = /var/log/mysql/access.log
log-error = /var/log/mysql/error.log

character_set_server = utf8mb4
collation_server = utf8mb4_bin
secure-file-priv= NULL
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
# Custom config should go here
!includedir /etc/mysql/conf.d/
```

### 创建容器

```bash
docker run -p 3306:3306 --name mysql8 -v /opt/mysql/conf/my.cnf:/etc/mysql/my.cnf  -v /opt/mysql/data:/var/lib/mysql \
-v /opt/mysql/log:/var/log/mysql -e MYSQL_ROOT_PASSWORD=123456 -e TZ=Asia/Shanghai  --restart=always -d mysql
```

### 配置远程访问

```bash
#进入mysql容器
docker exec -it mysql8 /bin/bash
#登录mysql
mysql -uroot -p123456
#开放远程登录访问
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
#刷新权限
flush privileges;
```

至此可以测试远程连接是否正常访问

### 端口开放

如果防火墙已关闭，无需开放数据对外端口，如果防火墙开启，需要开放端口，命令如下：

```bash
#永久开放3306端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent
#配置立即生效
firewall-cmd --reload
```
