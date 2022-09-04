---
title: Redis 多种安装方式
date: 2022-4-22 15:53:03
tag:
  - Redis
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202204221600458.jpg
sticky: 6
---

&emsp;Redis(Remote Dictionary Server)，即远程字典服务，是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API。redis 的官网地址，非常好记，是 redis.io。(域名后缀 io 属于国家域名，是 british Indian Ocean territory，即英属印度洋领地），Vmware 在资助着 redis 项目的开发和维护。

<!-- more -->

## 一、Redis 简介


&emsp;redis 是一个 key-value 存储系统。和 Memcached 类似，它支持存储的 value 类型相对更多，包括 string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和 hash（哈希类型）。这些数据类型都支持 push/pop、add/remove 及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis 支持各种不同方式的排序。与 memcached 一样，为了保证效率，数据都是缓存在内存中。区别的是 redis 会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了 master-slave(主从)同步。<br>
&emsp;Redis 是一个高性能的 key-value 数据库。 redis 的出现，很大程度补偿了 memcached 这类 key/value 存储的不足，在部 分场合可以对关系数据库起到很好的补充作用。它提供了 Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang 等客户端，使用很方便。<br>
&emsp;Redis 支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得 Redis 可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。

:::tip
1、Reids 官网地址：<https://redis.io/><br>
2、Redis 下载地址：<https://redis.io/download/><br>
3、redis 历史版本地址：<https://download.redis.io/releases/><br>
:::

## 二、Redis 安装

&emsp;本文主要讲述`yum`安装，源码安装和 `Docker` 安装 3 种方式。推荐使用源码或者 docker 方式安装 Redis，可以选择比较新而且稳定的版本。

### 1、Yum 方式安装 Redis

`yum`方式安装软件，比较方便，快捷，不用考虑安装依赖包，无需手动编译，但无法人为干预安装过程以及软件安装位置。相关`yum`用法请参考：。

- **下载 epel 仓库**

```bash
yum install epel-release -y
```

- **下载 redis 数据库**

```bash
yum install redis -y
```

- **启动 Redis 服务**

```bash
systemctl start redis
```

- **Redis 服务开机自启动**

```bash
systemctl enable redis
或
chkconfig redis on
```

- **开放端口**

```bash
#开放6379端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent
#配置立即生效
firewall-cmd --reload
```

- **Redis 服务常见命令**

```bash
#查看服务状态
systemctl status redis
#停止服务
systemctl stop redis
#重启服务
systemctl restart redis
```

### 2、源码方式安装 Redis

- **下载 Redis 源码包**
  选择一个稳定版本：<https://download.redis.io/releases/>

```bash
#默认下载安装到/opt目录
cd /opt/
#目前Redis-6.2.6是最新的稳定版本；
wget https://download.redis.io/releases/redis-6.2.6.tar.gz
```

- **解压并重命名**

```bash
# 解压缩
tar -zxvf redis-6.2.6.tar.gz
# 重命名
mv redis-6.2.6.tar.gz redis
# 删除压缩包
rm -rf redis-6.2.6.tar.gz
```

- **编译**

```bash
#进入目录
cd redis
#编译,如果报错，需要安装gcc环境
make
```

- **安装**

&emsp;关键字 `PREFIX`的作用是编译的时候用于指定程序存放的路径。比如我们现在就是指定了 redis 必须存放在/opt/redis 目录。假设不添加该关键字 Linux 会将可执行文件存放在/usr/local/bin 目录，库文件会存放在/usr/local/lib 目录。配置文件会存放在/usr/local/etc 目录。其他的资源文件会存放在 usr/local/share 目录。这里指定号目录也方便后续的卸载，后续直接 rm -rf /opt/redis 即可删除 redis

```bash
make PREFIX=/opt/redis install
```

- **启动 Redis**

&emsp;二进制文件是编译安装完成后在 src 下面的 bin 目录，通过下面的命令启动 Redis 服务

```bash
./bin/redis-server ./redis.conf
```

- **开放端口**

```bash
#开放6379端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent
#配置立即生效
firewall-cmd --reload
```

- **配置 Redis 服务**

&emsp;Redis 安装完成后，每次启动或者停止都需要进入安装目录下执行命令，相对比较麻烦，可以通过下面方法，配置 Redis 服务，下次启动和停止非常简单。<br>
1、在 redis 目录下找到 utils/redis_init_script 复制到 /etc/init.d/redis 打开文件进行修改

```bash
cp /opt/redis/redis_init_script /etc/init.d/redis
```

2、进入/etc/init.d,编辑配置文件 redis

```bash
cd /etc/init.d/
vim redis
#代码如下
#!/bin/sh
REDISPORT=6379
EXEC=/opt/redis/bin/redis-server
CLIEXEC=/opt/redis/bin/redis-cli

PIDFILE=/var/run/redis_${REDISPORT}.pid
CONF="/opt/redis/${REDISPORT}.conf"

case "$1" in
    start)
        if [ -f $PIDFILE ]
        then
                echo "$PIDFILE exists, process is already running or crashed"
        else
                echo "Starting Redis server..."
                $EXEC $CONF
        fi
        ;;
    stop)
        if [ ! -f $PIDFILE ]
        then
                echo "$PIDFILE does not exist, process is not running"
        else
                PID=$(cat $PIDFILE)
                echo "Stopping ..."
                $CLIEXEC -p $REDISPORT shutdown
                while [ -x /proc/${PID} ]
                do
                    echo "Waiting for Redis to shutdown ..."
                    sleep 1
                done
                echo "Redis stopped"
        fi
        ;;
    *)
        echo "Please use start or stop as first argument"
        ;;
esac
```

主要编辑前 4 行`redis-server,redis-cli,redis.conf,pdi`文件真实安装路径，编辑完，保存退出。

- **文件授权**

```bash
#/etc/init.d/redis文件赋予可执行权限。
chmod +x /etc/init.d/redis
```

- **设置开机自启动**

在 /etc/init.d/目录下执行以下命令

```bash
#设置开机自启动
chkconfig redis on
#关闭开机自启动
chkconfig redis off
```

- **启动停止命令**

```bash
#开启redis服务
service redis start
#关闭redis服务
service redis stop
```

## 三、Redis 相关配置

Redis 的配置文件位于/opt/redis/目录下，可以更改配置文件参数，常用参数含义如下：
| 配置项名称 | 配置项值范围 | 说明 |
| ---- | ---- | ---- |
| daemonize | yes/no | yes 表示启用守护进程，默认是 no 即不以守护进程方式运行。其中 Windows 系统下不支持启用守护进程方式运行 |
| port | | 指定 Redis 监听端口，默认端口为 6379 |
| bind | | 绑定访问 Ip,限制除绑定 IP 外的其他 IP 访问。如果不限制可以注释掉或者 bind 0.0.0.0 。这个属性和下面的 protected-mode 控制了是否可以远程访问 |
| protected-mode | yse/no | 保护模式，该模式控制外部网是否可以连接 redis 服务，默认是 yes,所以默认我们外网是无法访问的，如需外网连接 rendis 服务则需要将此属性改为 no |
| timeout | 300 | 当客户端闲置多长时间后关闭连接，如果指定为 0，表示关闭该功能 |
| loglevel | debug、verbose、notice、warning | 日志级别，默认为 notice |
| databases | 16 | 设置数据库的数量，默认的数据库是 0。整个通过客户端工具可以看得到 |
| rdbcompression | yes/no | 指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大。 |
| dbfilename | dump.rdb | 指定本地数据库文件名，默认值为 dump.rdb |
| dir | | 指定本地数据库存放目录 |
| requirepass | | 设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 AUTH `<password>` 命令提供密码，默认关闭 |
| maxclients | 0 | 设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息。|
| maxmemory | `XXX <bytes>`| 指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区。配置项值范围列里 XXX 为数值。|

## 四、Redis 相关命令

1、查看 Redis 版本

```bash
#进入redis-cli目录下
redis-cli --version
#或者连接上redis
redis-cli
#输出详细信息
info
```

2、查看 Redis 进程和端口

```bash
#查看进程是否运行
ps -ef | grep redis
#查看端口进程
netstat -tunlp | grep 6379
```

3、注册为 service 服务启动停止命令

```bash
#开启redis服务
service redis start
#关闭redis服务
service redis stop
```

4、Yum 安装服务启动停止命令

```bash
#查看服务状态
systemctl status redis
#停止服务
systemctl stop redis
#重启服务
systemctl restart redis
```
