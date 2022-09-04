---
title: nohup后台运行并输出日志到指定文件
date: 2022-04-07 17:08:16
tag:
  - linux
category:
  - linux
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201006898.jpg
---

&emsp;nohup 是不挂断的意思( no hang up)。如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用 nohup 命令。该命令忽略所有挂（SIGHUP）信号，可以在你退出帐户/关闭终端之后继续运行相应的进程。  是指在后台运行，但当用户推出(挂起)的时候，命令自动也跟着退出. nohup 与   结合起来，可以实现不挂断的后台运行。

<!-- more -->

## 一、nohup 命令

**1、nohup 命令格式：`nohup Command [ Arg … ] [ & ]`, Command：启动对象命令,可以跟该命令需要的各种参数。**

&emsp;nohup 命令运行由 Command 参数和任何相关的 Arg 参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示“and”的符号）到命令的尾部。带   的命令行，即使 terminal 关闭，或者电脑死机程序依然运行（前提是你把程序递交到服务器上)。  
**2、实现屏幕输出记录到日志文件**

```bash
nohup yourcommand 2>&1 &
```

如果不指定重定向，则日志默认输出到当前目录下 nohup.out 文件中。  
操作系统中有三个常用的流：

- 0：stdin 标准输入, 1：代表 stdout 标准输出, 2：代表 stderr 标准错误。

<div color="red">一般当我们用 > console.txt，实际是 1>console.txt 的省略用法；&lt; console.txt ，实际是 0 &lt; console.txt 的省略用法。</div>

- 2>&1 作用：

<div color="red">把标准错误（2）重定向到标准输出中（1），而标准输出又导入文件 output 里面，所以结果是标准错误和标准输出都导入文件 output 里面了。 至于为什么需要将标准错误重定向到标准输出的原因，那就归结为标准错误没有缓冲区，而 stdout 有。</div>

最后谈一下/dev/null 文件的作用，这是一个无底洞，任何东西都可以定向到这里，但是却无法打开。 所以一般很大的 stdou 和 stderr 当你不关心的时候可以利用 stdout 和 stderr 定向到这里>./command.sh >/dev/null 2>&1，代表不输出日志。

**3、如果希望将日志输出到别的文件中，可以增加一个文件路径参数。如下：**

```bash
nohup yourcommand > myout.log 2>&1 &
```

其中 myout.log 是保存输出的文件名称。  
**4、实时监测日志输出内容命令**  
&emsp;tail 命令是 nohup 命令的好搭档。配合-f 参数，可以实时监视向日志文件增加的信息。tail -f 等同于–follow=descriptor，根据文件描述符进行追踪，当文件改名或被删除，追踪停止。tail -F 等同于–follow=name --retry，根据文件名进行追踪，并保持重试，即该文件被删除或改名后，如果再次创建相同的文件名，会继续追踪。  
&emsp;tailf 等同于 tail -f -n 10，与 tail -f 不同的是，如果文件不增长，它不会去访问磁盘文件，所以 tailf 特别适合那些便携机上跟踪日志文件，因为它减少了磁盘访问，可以省电。

**5、标准输出，日志文件覆盖**

```bash
command > output.txt
command 1> output.txt
```

以上两句等价。将命令的 stdout 重定向至文件，stdout 将不会出现在终端。如果文件已经存在，将会覆盖。

**6、标准输出，日志文件追加**

```bash
command >> output.txt
command 1>> output.txt
```

以上两句等价。将命令的 stdout 重定向至文件，stdout 将不会出现在终端。如果文件已经存在，新数据将会添加至文件末尾。

**7、标准错误输出，日志文件覆盖**

```bash
command 2> output.txt
```

将命令的 stderr 重定向至文件，stderr 将不会出现在终端。如果文件已经存在，将会覆盖。

**8、标准错误输出，日志文件追加**

```bash
command 2>> output.txt
```

将命令的 stderr 重定向至文件，stderr 将不会出现在终端。如果文件已经存在，新数据将会添加至文件末尾。

**9、标准输出+标准错误输出，日志文件覆盖**

```bash
command &> output.txt
command >output.txt 2>&1
```

以上两句等价。将命令的 stdout 与 stderr 都重定向至文件，此时终端将没有任何输出。如果文件已经存在，将会覆盖。

**10、标准输出+标准错误输出，日志文件追加**

```bash
command &>> output.txt
command >>output.txt 2>&1
```

将命令的 stdout 与 stderr 都重定向至文件，此时终端将没有任何输出。如果文件已经存在，新数据将会添加至文件末尾。

## 二、实例展示

```bash
#代表不输出,/dev/null像是个黑洞，吸纳所有
nohup sh test.sh > /dev/null &

#标准输出,以下两句等价
nohup sh test.sh > /home/dir1/dir2/my1.log &
nohup sh test.sh 1> /home/dir1/dir2/my1.log &

#标准错误输出，这个在当前目录下会产生nohup.out（标准输出），然后在/home/dir1/dir2下产生my1.log（标准错误输出）
nohup sh test.sh 2> /home/dir1/dir2/my1.log &

# 标准输出+标准错误输出，将标准错误 2 重定向到标准输出 &1 ，标准输出 &1 再被重定向输入到 my1.log 文件中
nohup sh test.sh > /home/dir1/dir2/my1.log 2>&1 &
nohup sh test.sh &> /home/dir1/dir2/my1.log &
```

## 三、Tomcat 清除 catalina.out 日志

**一、重定向方法清空文件：**

- 进入 tomcat 的 logs 文件夹下:
- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：catalina.out
- 再次查看日志文件大小：du -h catalina.out

**二、使用 true 命令重定向清空文件：**

- 进入 tomcat 的 logs 文件夹下:
- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：true>catalina.out
- 再次查看日志文件大小：du -h catalina.out

**三、使用 cat/cp/dd 命令及/dev/null 设备来清空文件**

进入 tomcat 的 logs 文件夹下: 1.使用 cat /dev/null 命令清空文件：

- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：cat /dev/null>catalina.out
- 再次查看日志文件大小：du -h catalina.out

  2.使用 cp /dev/null 命令清空文件：

- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：cp /dev/null catalina.out
- 再次查看日志文件大小：du -h catalina.out

  3.使用 dd if=/dev/null of=catalina.out 命令清空文件：

- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：dd if=/dev/null of=catalina.out
- 再次查看日志文件大小：du -h catalina.out

**四、使用 echo 命令清空文件：**

进入 tomcat 的 logs 文件夹下:

- echo -n "">catalina.out ——>加上“-n”参数，默认情况下会“\n",
- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：echo -n "参数">catalina.out
- 再次查看日志文件大小：du -h catalina.out

**五、使用 truecate 命令清空文件：**

```bash
# -s参数是设置文件的大小，清空文件的话，就设定为0
truncate -s 0 catalina.out
```

进入 tomcat 的 logs 文件夹下:
- 查看日志文件大小：du -h catalina.out
- 重定向清空文件：truncate -s 0 catalina.out
- 再次查看日志文件大小：du -h catalina.out
