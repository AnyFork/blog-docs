# BLOG-DOCS
> 1、项目采用vuePress进行构建，markdown进行资料文档编写，vuePress对markdown文档进行编译，最终项目以html静态文件形式进行部署。
2、博客主要用于总结工作中使用的技术资料文档，以备后续温顾和复习使用，资料正在收集中。
3、项目采用本地主题方式进行开发，主题在vuepress-theme-reco基础上进行各种修改和调整，调整部分存在的bug和版本适配。


* 仓库地址：https://github.com/AnyFork/blog-docs.git
* vuePress官网地址：https://v2.vuepress.vuejs.org/zh/
* Github访问地址：https://anyfork.github.io/blog-docs/
* Gitee访问地址：https://anyfork.gitee.io/blog-docs/
## 项目启动
```bash
#拉取代码
git clone -b main https://github.com/AnyFork/blog-docs.git

# 安装依赖包
npm install

# 运行dev
npm run dev

# 打包
npm run build
```
## 项目部署
> 通过github actions进行持续集成部署，静态页面部署在github pages

* 第一步：项目根目录创建文件夹".github/workflows/deploy.yml",配置如下：
```bash
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "14"
      - name: Checkout
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false     
      - name: Install
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.2.0
        with:
          BRANCH: gh-pages
          FOLDER: dist
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```
本地代码通过push提交远程github上的main分支，触发jobs,分为3个steps,拉取代码，安装依赖和打包，配置代理。打包后的dist文件在gh-pages分支上。
* 第二步：配置github pages. 具体步骤如下：

![avatar](./docs/.vuepress/public/setting.png)

* 第三步：Gitee站点目前通过关联Github项目gh-pages分支，手动同步代码，实现同步部署。
