---
title: GitHub Actions自动部署GitHub Pages并同步Gitee Pages
date: 2022-07-20 14:07:35
description: GitHub Actions自动部署GitHub Pages并同步Gitee Pages
lang: zh-CN
tag:
  - Github Pages
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201555438.jpg
sticky: 2
---

&emsp;GitHub Pages 和 Giee Pages 一般多用于托管个人的静态网站，现在很多人也用来它来搭建私人博客，也算是省去了购买服务器、域名以及网站备案等等一系列复杂的操作。GitHub 可以通过 Action 工作流实现自动部署，部署网站非常方便，但是 GitHub 毕竟是国外仓库，有时候会出现访问速度慢，加载不了图片等问题。因此，许多人便想到 Gitee Pages 来部署站点，虽然访问速度快, 但弊端也很明显，免费版的 Gitee Pgaes 不支持自动部署方案，手动部署又比较麻烦(Gitee Pages Pro 虽然也实现了自动化部署解决方案，但需要收费)。 下面就介绍一种有效的解决方案：利用 GitHub Actions 实现 Gitee Pages 自动部署，同时推送代码至 Giee,并实现 Gitee Pages 自动部署。

<!-- more -->

## 准备工作

- **创建公开仓库**：

  分别在 Github 和 Gitee 各创建一个公开的仓库，仓库名称任意取，仓库必须公开。

- **SSH 秘钥创建**：

  通过 SSH 方式推送和拉取代码，避免登录账号密码。秘钥创创建流程如下：

  1、在命令行终端或`Git Bash`使用命令 ssh-keygen -t rsa -C "youremail@example.com"生成 SSH Key，注意替换为自己的邮箱，连续三次回车。生成的 id_rsa 是私钥，id_rsa.pub 是公钥。(⚠️ 注意此处不要设置密码)，秘钥生成在`C:\Users\Administrator\.ssh`目录下面。如果出现`'ssh-keygen' 不是内部或外部命令，也不是可运行的程序 或批处理文件。`问题时。需要进入到 git 安装目录下面的`/usr/bin`目录执行命令。

  2、在 GitHub 的个人设置页面「Settings -> SSH and GPG keys」​ 配置 SSH 公钥（即：id_rsa.pub），命名随意，如下图：
  ![GitHub 的个人设置页面](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201634013.png)

  3、在 Gitee 的个人设置页面「安全设置 -> SSH 公钥」​ 配置 SSH 公钥（即：id_rsa.pub），命名随意，如下图：![ Gitee 的个人设置页面](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201636995.png)

  4、在 GitHub 项目的「​Settings -> Secrets」路径下配置好命名为 GITEE_RSA_PRIVATE_KEY 密钥和 GITEE_PASSWORD 密钥。GITEE_RSA_PRIVATE_KEY 存放 id_rsa 私钥，GITEE_PASSWORD 账号登录的密码。如下图：![setting](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201641069.png)

  5、在站点根目录下创建如下目录`.github/workflows/xxx.yml`，文件名任意起，GitHub 的 Actions 会处理.github 下的工作流文件夹 workflows 的工作流程。

## 工作流程脚本编写

比如在目录`.github/workflows/deploy.yml`中编写如下代码:

```yaml
name: Build and Deploy to github & gitee
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 构建Node环境
      - name: Build Node.js Env
        uses: actions/setup-node@v1
        with:
          node-version: '14'
      # 检出main分支代码
      - name: Checkout Code
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false
      # 安装依赖
      - name: Install dependencies
        run: npm install
      # 项目打包
      - name: Build Project
        run: npm run build
      # github 部署分支gh-pages 到github pages
      - name: Deploy dist on gh-pages
        uses: JamesIves/github-pages-deploy-action@4.2.0
        with:
          BRANCH: gh-pages
          FOLDER: dist
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}

      # 同步github代码到gitee
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
        with:
          # 注意替换为你的 GitHub 源仓库地址
          source-repo: git@github.com:AnyFork/blog-docs.git
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: git@gitee.com:AnyFork/blog-docs.git

      # 自动部署gitee gh-pages分支
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: 874957743@qq.com
          # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: AnyFork/blog-docs
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: gh-pages
```

每次提交代码后，自动触发 Aciton 执行工作任务。当然你如果不想在 Githup 上部署代码，可以去掉前面几步，直接通过 Action 同步 github 代码到 gitee，实现 Gitee Pages 自动部署。

## 提交代码

- **配置站点**：代码提交方式`SSH`,具体配置方式有一下 2 种：
  - 1、将 GitHub 仓库通过 SSH 方式 Clone 到本地。
  - 2、将本地远程仓库设置为 GitHub 仓库 SSH 地址,例如：`git remote set-url origin git@github.com:xxx/blog-docs.git`
- **推送代码**：每次文档编写完毕，可以通过`vscode，git-bash或者命令行窗口`推送代码，触发 Aciton，实现 GitHub 和 Gitee 自动部署 Pages,

## 相关 Aciton 地址

**actions/setup-node@v1**：<https://github.com/actions/setup-node/>

**actions/checkout@v2.3.1**：<https://github.com/actions/checkout/>

**JamesIves/github-pages-deploy-action@4.2.0**：<https://github.com/JamesIves/github-pages-deploy-action/>

**wearerequired/git-mirror-action@master**：<https://github.com/wearerequired/git-mirror-action/>

**yanglbme/gitee-pages-action@main**：<https://github.com/yanglbme/gitee-pages-action/>

至此，通过 GitHub Actions 实现自动部署 GitHub Pages 和 Gitee Pages 流程就完了，小伙伴赶紧试试吧。
