---
title: Centos7安装Docker步骤
date: 2022-02-19 15:53:03
lang: zh-CN
tag:
  - docker
category:
  - docker
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209041529112.jpg
---

&emsp;Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 操作系统的机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。简化配置,镜像安装，容器的创建非常的方便，同时可以弹性扩容。

<!-- more -->

:::warning 温馨提示
Docker 要求 CentOS7 系统的内核版本在 3.10 以上，否则无法安装 Docker。小伙伴们可以通过`uname -a`查看自己 centos 内核版本，如果低于 3.10，需要重新安装 centos 镜像。以下是 docker 相关网址：<br/>docker 官网：<https://www.docker.com/><br/>docker 文档官网：<https://docs.docker.com/><br/>安装文档：<https://docs.docker.com/engine/install/centos/>
:::

## 一、docker 安装

### 1、卸载旧的Docker引擎

如果 centos 上以前安装过旧版的 docker,需要按照以下步骤先删除旧的版本，再进行安装:<br/>
① 先删除依赖包

```bash
yum remove docker-ce docker-cd-cli containerd.io
sudo yum remove docker docker-client docker-client-latest docker-common\
docker-latest docker-latest-logrotate docker-logrotate docker-engine
```

② 删除资源。

主机上的映像、容器、卷或自定义配置文件不会自动删除，必须手动删除任何已编辑的配置文件。Docker 默认工作路径/var/lib/docker

```bash
rm -rf /var/lib/docker

rm -rf /var/lib/containerd
```

### 2、使用存储库安装docker

:::tip
使用 Docker 的存储库并安装，便于安装和升级任务；下载 RPM 包并手动安装并管理，完全手动升级；
:::
① 安装必要的系统工具

```bash
yum -y install yum-utils
```

② 设置软件源信息

```bash
# 设置阿里云镜像，安装docker速度快
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

③ 更新并安装 docker-ce(ce 社区版，ee 企业版)

```bash
# 更新索引
yum makecache fast
```

④ 如需指定 docker 引擎的版本，通过以下命令获取可用版本

```bash
yum list docker-ce --showduplicates | sort -r
```

⑤ 安装指定版本的 docker

```bash
yum install docker-ce-<版本号> docker-ce-cli-<版本号> containerd.io
```

⑥ 启动 docker

```bash
systemctl start docker
```

⑦ 开机自启动

```bash
systemctl enable docker
```

⑧hello-world 测试

```bash
# 运行容器
docker run hello-world
# 查看镜像
docker images

```

## 二、docker 常见使用命令

:::tip
docker 官网命令参考文档：<https://docs.docker.com/engine/reference/builder/>
:::

1、启动docker引擎：systemctl start docker

2、docker设置开机自启动：systemctl enable docker

3、docker版本信息查询：docker version

4、docker所有的容器实例：docker ps -a

5、docker正在运行的容器实例：docker ps

6、docker停止运行的容器实例：docker stop 容器ID/容器名称

7、docker删除停止的容器实例：docker rm 容器ID/容器名称

8、docker强制删除运行的容器实例：docker rm -f 容器ID/容器名称

9、docker删除停止的容器实例镜像：docker rmi 镜像ID/镜像名称

10、docker强制删除镜像：docker rmi -f 镜像ID/镜像名称

11、docker删除所用容器: docker rm -f `docker ps -a -q`

12、docker删除所有镜像：docker rmi -f `docker images -q`

