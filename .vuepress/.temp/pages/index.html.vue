<template><div><h1 id="blog-docs" tabindex="-1"><a class="header-anchor" href="#blog-docs" aria-hidden="true">#</a> BLOG-DOCS</h1>
<blockquote>
<p>博客项目采用 vuePress2.X 版本进行构建，以本地主题继承 vuepress2.X 默认主题方式进行开发。集成了部分插件，丰富首页功能。围绕 markdown 语法进行文档编写，记录日常工作中的文档资料，最终项目以 html 静态文件形式进行部署。</p>
</blockquote>
<ul>
<li>仓库地址：https://github.com/AnyFork/blog-docs.git</li>
<li>vuePress 官网地址：https://v2.vuepress.vuejs.org/zh/</li>
<li>Github 访问地址：https://anyfork.github.io/blog-docs/</li>
<li>Gitee 访问地址：https://anyfork.gitee.io/blog-docs/</li>
</ul>
<h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动" aria-hidden="true">#</a> 项目启动</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#拉取代码</span>
<span class="token function">git</span> clone -b main https://github.com/AnyFork/blog-docs.git

<span class="token comment"># 安装依赖包</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># 运行dev</span>
<span class="token function">npm</span> run dev

<span class="token comment"># 打包</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h2>
<blockquote>
<p>通过 github actions 进行持续集成部署，静态页面部署在 github pages, 并主动推动至 Gitee 进行自动部署。</p>
</blockquote>
<ul>
<li>第一步：项目根目录创建文件夹&quot;.github/workflows/deploy.yml&quot;,配置如下：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>name: Build and Deploy to github <span class="token operator">&amp;</span> gitee
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      <span class="token comment"># 构建Node环境</span>
      - name: Build Node.js Env
        uses: actions/setup-node@v1
        with:
          node-version: <span class="token string">'16'</span>
      <span class="token comment"># 检出main分支代码</span>
      - name: Checkout Code
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: <span class="token boolean">false</span>
      <span class="token comment"># 安装依赖</span>
      - name: Install dependencies
        run: <span class="token function">npm</span> <span class="token function">install</span>
      <span class="token comment"># 项目打包</span>
      - name: Build Project
        run: <span class="token function">npm</span> run build
      <span class="token comment"># github 部署分支gh-pages 到github pages</span>
      - name: Deploy dist on gh-pages
        uses: JamesIves/github-pages-deploy-action@4.2.0
        with:
          BRANCH: gh-pages
          FOLDER: dist
          ACCESS_TOKEN: <span class="token variable">${{ secrets.ACCESS_TOKEN }</span><span class="token punctuation">}</span>

      <span class="token comment"># 同步github代码到gitee</span>
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          <span class="token comment"># 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY</span>
          SSH_PRIVATE_KEY: <span class="token variable">${{ secrets.GITEE_RSA_PRIVATE_KEY }</span><span class="token punctuation">}</span>
        with:
          <span class="token comment"># 注意替换为你的 GitHub 源仓库地址</span>
          source-repo: git@github.com:AnyFork/blog-docs.git
          <span class="token comment"># 注意替换为你的 Gitee 目标仓库地址</span>
          destination-repo: git@gitee.com:AnyFork/blog-docs.git

      <span class="token comment"># 自动部署gitee gh-pages分支</span>
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          <span class="token comment"># 注意替换为你的 Gitee 用户名</span>
          gitee-username: <span class="token number">874957743</span>@qq.com
          <span class="token comment"># 注意在 Settings->Secrets 配置 GITEE_PASSWORD</span>
          gitee-password: <span class="token variable">${{ secrets.GITEE_PASSWORD }</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错</span>
          gitee-repo: AnyFork/blog-docs
          <span class="token comment"># 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）</span>
          branch: gh-pages

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地代码通过 push 提交远程 github 上的 main 分支，触发 jobs,分为 3 个 steps,拉取代码，安装依赖和打包，配置代理。打包后的 dist 文件在 gh-pages 分支上。然后自动推送至 Gitee，实现 Gitee 自动同步部署更新。</p>
<ul>
<li>第二步：配置 github pages. 具体步骤如下：</li>
</ul>
<p><img src="@source/docs/.vuepress/public/setting.png" alt="avatar"></p>
<ul>
<li>第三步：每次提交代码至github均会触发Action，工作流执行完毕时，会实现GitHub和Gitee自动同步部署更新。</li>
</ul>
</div></template>
