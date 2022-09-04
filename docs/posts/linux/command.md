---
title: linux系统常用命令
date: 2022-03-10 10:48:07
tag:
  - linux
category:
  - linux
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207241420511.jpg
---

&emsp;Linux系统命令比较繁杂，虽然容易上手，但在使用时容易遗忘具体参数的含义，很是让人苦恼，因此本篇文章收集一些常用的Limux命令，以备日后使用过程中进行查阅和复习。
<!-- more -->

# 一、常用命令

## 1 cpu,内存,硬盘,系统等信息

```bash
#逻辑CPU个数
cat /proc/cpuinfo | grep "processor" | wc -l
#逻辑cpu个数
cat /proc/cpuinfo | grep "physical id" | sort | uniq | wc -l
#cpu全部信息
cat /proc/cpuinfo
#cpu型号信息
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
#内存信息
cat /proc/meminfo
#硬盘信息
fdisk -l    # 第一种
free -h    # 以g单位
free -m    # 以M单位
#系统内核信息
uname -a
#机器型号
dmidecode | grep "Product Name"
```

## 2 文件搜索命令

**根据文件或目录名称搜索： find 【搜索目录】【-name 或者-iname】【搜索字符】：-name 和-iname 的区别一个区分大小写，一个不区分大小写**

```bash
#精准搜索，名字必须为 init 才能搜索的到
find /etc -name init
#精准搜索，名字必须为 init或者有字母大写也能搜索的到
find /etc -iname init
#模糊搜索，以 init 结尾的文件或目录名
find /etc -name *init
#模糊搜索，？ 表示单个字符，即搜索到 init___
find /etc -name init???
```

**根据文件大小进行搜索：`find [搜索范围] [-size] [n]`**

```bash
#在根目录下查找大于 100M 的文件,这里 +n 表示大于，-n 表示小于，n 表示等于
find / -size +204800　　
```

**根据文件类型进行搜索：`find [搜索范围] [-type]`**

```bash
#查找/home目录下文件类型是目录的文件，-type 根据文件类型查找：f表示文件，d表示目录，l表示软链接
find /home -type l　　
```

**根据组合命令进行搜索**

```bash
#这里有两个参数：①、-a  表示两个条件同时满足（and）②、-o  表示两个条件满足任意一个即可（or）
#范例：查找/etc目录下大于80MB同时小于100MB的文件
find /etc -size +163840 -a -size -204800　
```

## 3 进程命令

**ps 命令**

```bash
#查找nginx应用的进程信息
ps -ef | grep nginx
#或
ps aux | grep nginx
#两者的输出结果差别不大，但展示风格不同。aux是BSD风格，-ef是System V风格。这是次要的区别，一个影响使用的区别是aux会截断command列，而-ef不会
#查看进程应用启动路径
cd /proc/pid
ls -l
#cwd符号链接的是进程运行目录；exe符号连接就是执行程序的绝对路径；cmdline就是程序运行时输入的命令行命令；environ记录了进程运行时的环境变量；fd目录下是进程打开或使用的文件的符号连接。
#杀掉进程
kill pid
```

## 4 查看指定端口进程占用

**netstat 命令**

```bash
netstat -tunlp | grep 8080
#如果命令不存在，请安装：
yum install net-tools
```

**losf 命令**

```bash
losf -i:8080
#如果命令不存在，请安装：
yum install losf
```

## 5 文件上传和下载

**步骤一：root 权限下，安装 lrzsz 软件**

```bash
#Centos系统
yum -y install lrzsz
```

**步骤二：上传文件。进度需要上传文件目录，使用 rz 命令，把文件从 windows 系统上传到 linux 系统中**

```bash
cd `文件上传目录`
rz
```

**步骤三：下载文件。使用 sz 命令，把文件从 linux 系统下载到 windows 系统中**

```bash
cd `文件目录`
sz `filename`
```

## 6 端口命令

**1 开放端口**

```bash
#永久开放5672端口
firewall-cmd --zone=public --add-port=5672/tcp --permanent
#关闭5672端口
firewall-cmd --zone=public --remove-port=5672/tcp --permanent
#配置立即生效
firewall-cmd --reload
```

**2 查看防火墙所有开放的端口**

```bash
firewall-cmd --zone=public --list-ports
```

**3 查看防火墙所有开放的端口**
如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估

```bash
systemctl stop firewalld.service
```

**4 查看防火墙状态**

```bash
systemctl status firewalld.service
#或
firewall-cmd --state
```

**5 查看监听的端口**

```bash
netstat -lnpt
```

PS:centos7 默认没有 netstat 命令，需要安装 net-tools 工具，yum install -y net-tools
**6 端口进程占用命令**

```bash
netstat -lnpt | grep 5672
```

**7 查看进程的详细信息**

```bash
ps 6832
```

**8 中止进程**

```bash
kill -9 6832
```
## 7 Docker容器运行日志命令

通过docker logs命令可以查看容器的日志：`docker logs -f -t --tail 100 datacenter`

```bash
# 语法格式
$ docker logs [OPTIONS] CONTAINER
  Options:
        --details        显示更多的信息
    -f, --follow         跟踪实时日志
        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）
        --tail string    从日志末尾显示多少行日志， 默认是all
    -t, --timestamps     显示时间戳
        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）
```
举例说明：
```bash
#查看指定时间后的日志，只显示最后100行
docker logs -f -t --since="2018-02-08" --tail=100 CONTAINER_ID
#查看最近30分钟的日志:
docker logs --since 30m CONTAINER_ID
#查看某时间之后的日志：
docker logs -t --since="2018-02-08T13:23:37" CONTAINER_ID
#查看某时间段日志：
docker logs -t --since="2018-02-08T13:23:37" --until "2018-02-09T12:23:37" CONTAINER_ID
```
## 8文件大小查看命令

1、查看当前文件夹及文件夹下大小，h:以K,M,G为单位显示，max-depth标识目录的深度
```bash
du -ah --max-depth=1
```
2、查看当前文件夹总大小
```bash
du -sh
```
3、查看指定文件夹总大小
```bash
du -sh ./data
```
4、显示目录或所有文件所占空间
```bash
du 
```
5、文件从大到小排序
```bash
du -sh  * | sort -rh
```
6、参数说明

- -a或-all 显示目录中个别文件的大小。
- -b或-bytes 显示目录或文件大小时，以byte为单位。
- -c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
- -D或--dereference-args 显示指定符号连接的源文件大小。
- -h或--human-readable 以K，M，G为单位，提高信息的可读性。
- -H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。
- -k或--kilobytes 以1024 bytes为单位。
- -l或--count-links 重复计算硬件连接的文件。
- -L<符号连接>或--dereference<符号连接> 显示选项中所指定符号连接的源文件大小。
- -m或--megabytes 以1MB为单位。
- -s或--summarize 仅显示总计。
- -S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。
- -x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
- -X<文件>或--exclude-from=<文件> 在<文件>指定目录或文件。
- --exclude=<目录或文件> 略过指定的目录或文件。
- --max-depth=<目录层数> 超过指定层数的目录后，予以忽略。
