---
title: Node多种安装方式
date: 2022-04-07 11:56:16
tag:
  - Node
category:
  - Node
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202204071154296.jpg
sticky: 5
---

&emsp;Node.js 发布于 2009 年 5 月，由 Ryan Dahl 开发，是一个基于 Chrome V8 引擎的 JavaScript 运行环境，使用了一个事件驱动、非阻塞式 I/O 模型，让 JavaScript 运行在服务端的开发平台，JavaScript 成为与 PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。Node.js 对一些特殊用例进行优化，提供替代的 API，使得 V8 在非浏览器环境下运行得更好，V8 引擎执行 Javascript 的速度非常快，性能非常好，基于 Chrome JavaScript 运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。

<!-- more -->

## 一、Node.js 官网地址

1、Node.js 国内三方中文网站：<http://nodejs.cn/>  
2、Node.js 官方中文网站：<https://nodejs.org/zh-cn/>  
3、Node.js 官方英文网站：<https://nodejs.org/en/>

## 二、安装包安装 Node.js

1、进入 Node 官网下载地址：<https://nodejs.org/zh-cn/download/>，下载 Linux 二进制文件(x64)编译包，复制下载链接:`https://nodejs.org/dist/v16.14.2/node-v16.14.2-linux-x64.tar.xz`
2、进入 Node 预设的安装目录：

```bash
cd /usr/local/node
```

3、下载安装包，如果没有 wget 命令，使用：`yum install -y wget`

```bash
wget https://nodejs.org/dist/v16.14.2/node-v16.14.2-linux-x64.tar.xz
```

4、解压安装包

```bash
tar -zxvf node-v16.14.2-linux-x64.tar.xz
```

5、重命名

```bash
mv  node-v16.14.2-linux-x64 node
```

6、配置软链接
为了使 nodejs 能够全局使用，我们需要配置一下软链接（类似于快捷方式，如果安装的路径在/usr/local/bin/下不需要这一步操作），当然也是软连接到用户目录下/usr/local/bin/

```bash
ln -s /usr/local/node/bin/node /usr/local/bin/node
ln -s /usr/local/node/bin/npm /usr/local/bin/npm
```

7、配置 node 文件安装路径

```bash
cd /usr/local/node/
mkdir node_global
mkdir node_cache
npm config set prefix "/usr/local/node/node_global"
npm config set cache "/usr/local/node/node_cache"
```

8、配置淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org
```

9、版本验证

```bash
node -v
npm -v
```

10、查看 npm 内部的配置参数

```bash
npm config ls -l
```

## 三、Nvm 安装 Node

&emsp;nvm 是 node 的包管理工具。由于在打开不同的项目时，不同的项目在安装依赖时可能会和 node 版本有关，所以这就需要我们在不同的项目下使用不同的 node 版本。
nvm 就是一个比较好用 node 管理工具，方便快速安装和切换 node 版本。nvm 官网地址：<https://github.com/nvm-sh/nvm>

1、前往[nvm 官网](https://github.com/nvm-sh/nvm),获取 nvm 最新版本，例如：`https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh`  
2、下载安装包

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

3、环境变量参数配置
将第二步安装结束后的一段代码复制出来，粘贴在文件`bash_profile`最后。复制代码如下：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

编辑`bash_profile`文件

```bash
vi ~/.bash_profile
#重新加载配置文件，使配置参数生效
source ~/.bash_profile
```

4、关闭当前 shell 窗口，重新打开，查看 nvm 版本

```bash
nvm -v
```

至此 nvm 安装成功

5、nvm 常用命令

```bash
#安装最新稳定版 node
nvm install stable
#安装指定版本
nvm install <version>
#删除已安装的指定版本
nvm uninstall <version>
#切换使用指定的版本node
nvm use <version>
#列出所有安装的版本
nvm ls
#列出所有远程服务器的版本
nvm ls-remote
#显示当前的版本
nvm current
#给不同的版本号添加别名
nvm alias <name> <version>
#删除已定义的别名
nvm unalias <name>
#在当前版本 node 环境下，重新全局安装指定版本号的 npm 包
nvm reinstall-packages <version>
#设置默认版本
nvm alias default [node版本号]
#打开node.js版本控制
nvm on
#关闭node.js版本控制
nvm off
#清空nvm缓存目录
nvm cache clear
```

6、卸载 nvm

```bash
#1检查环境变量
echo $PATH
#2根据$PATH删除 nvm 相关环境路径
#3删除 nvm 相关目录
rm -rf $NVM_DIR ~/.npm ~/.bower && unset NVM_DIR
#4从 shell 配置 (例如：.bash_profile) 中删除以下 nvm 相关环境变量
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
#5重启shell,关闭当前shell窗口，打开新的shell窗口
```

## 四、Npm 相关操作命令及其注意事项

**1、查看 npm 存储库上软件包的最新可用版本**

```bash
#查看最新版本
npm view jquery version
#查看所有版本
npm view jquery versions
```

**2、查看本地已安装包版本及其依赖信息**

```bash
#查看已安装包版本及其依赖信息
npm list
#查看已安装的特定包版本及其依赖信息
npm list dayjs
```

**3、安装指定版本**

```bash
#1在package.json里修改好指定版本号，然后输入:
npm update jquery
#2更新至指定版本，但是不会写到package.json文件里
npm update jquery@3.3.1
#3更新至指定版本，并写到package.json文件里
npm update jquery@3.3.1 --save
或
npm update jquery@3.3.1 -S
```

**4、npm 包 ^,@和~的区别**
:::warning
~会匹配最近的小版本依赖包，比如~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0,如：~1.1.2，表示>=1.1.2 <1.2.0。  
^会匹配最新的大版本依赖包，比如^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0，但是不包括 2.0.0，如：^1.1.2 ，表示>=1.1.2 <2.0.0。
:::
&emsp;那么该如何选择呢？当然你可以指定特定的版本号，直接写 1.2.3，前面什么前缀都没有，这样固然没问题，但是如果依赖包发布新版本修复了一些小 bug，那么需要手动修改 package.json 文件；~和^则可以解决这个问题。但是需要注意^版本更新可能比较大，会造成项目代码错误，比如这篇文章（http://blog.csdn.net/u014291497/article/details/54427103）的问题就是因为package.json使用^1.5.7造成的，1.6版本的包与现有代码不兼容。所以建议使用~来标记版本号，这样可以保证项目不会出现大的问题，也能保证包中的小bug可以得到修复。

**5、npm i 与 npm install 之间的细小区别**

- 1、用 npm i 安装的模块无法用 npm uninstall 卸载，需要用 npm uninstall i 命令

- 2、npm i 会帮助检测与当前 node 版本最匹配的 npm 包 版本号，并匹配出来相互依赖的 npm 包应该提升的版本号

- 3、部分 npm 包在当前 node 版本下无法使用，必须使用建议版本

- 4、安装报错时 intall 肯定会出现 npm-debug.log 文件，npm i 不一定

**6、--save 和 --save-dev 的作用和区别**

- 1、使用命令 --save 或者说不写命令 --save,都会把信息记录到 dependencies 中,dependencies 中记录的都是项目在运行时需要的文件。
- 2、使用命令 --save-dev 则会把信息记录到 devDependencies 中， devDependencies 中记录的是项目在开发过程中需要使用的一些文件，在项目最终运行时是不需要的。
- 3、--save 简写：`-S`,--save-dev 简写：`-D`
- 4、为例避免混淆，生产环境用`-S`，开发环境用：`-D`
