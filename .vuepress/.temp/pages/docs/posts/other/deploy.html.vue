<template><div><p> GitHub Pages 和 Giee Pages 一般多用于托管个人的静态网站，现在很多人也用来它来搭建私人博客，也算是省去了购买服务器、域名以及网站备案等等一系列复杂的操作。GitHub 可以通过 Action 工作流实现自动部署，部署网站非常方便，但是 GitHub 毕竟是国外仓库，有时候会出现访问速度慢，加载不了图片等问题。因此，许多人便想到 Gitee Pages 来部署站点，虽然访问速度快, 但弊端也很明显，免费版的 Gitee Pgaes 不支持自动部署方案，手动部署又比较麻烦(Gitee Pages Pro 虽然也实现了自动化部署解决方案，但需要收费)。 下面就介绍一种有效的解决方案：利用 GitHub Actions 实现 Gitee Pages 自动部署，同时推送代码至 Giee,并实现 Gitee Pages 自动部署。</p>
<!-- more -->
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>
<ul>
<li><strong>创建公开仓库</strong>：分别在 Github 和 Gitee 各创建一个公开的仓库，仓库名称任意取，仓库必须公开。</li>
<li><strong>SSH 秘钥创建</strong>：通过 SSH 方式推送和拉取代码，避免登录账号密码。秘钥创创建流程如下：
<ul>
<li>1、在命令行终端或<code v-pre>Git Bash</code>使用命令 ssh-keygen -t rsa -C &quot;youremail@example.com&quot;生成 SSH Key，注意替换为自己的邮箱，连续三次回车。生成的 id_rsa 是私钥，id_rsa.pub 是公钥。(⚠️ 注意此处不要设置密码)，秘钥生成在<code v-pre>C:\Users\Administrator\.ssh</code>目录下面。如果出现<code v-pre>'ssh-keygen' 不是内部或外部命令，也不是可运行的程序 或批处理文件。</code>问题时。需要进入到 git 安装目录下面的<code v-pre>/usr/bin</code>目录执行命令。</li>
<li>2、在 GitHub 的个人设置页面「Settings -&gt; SSH and GPG keys」​ 配置 SSH 公钥（即：id_rsa.pub），命名随意，如下图：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207201634013.png" alt=""></li>
<li>3、在 Gitee 的个人设置页面「安全设置 -&gt; SSH 公钥」​ 配置 SSH 公钥（即：id_rsa.pub），命名随意，如下图：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207201636995.png" alt=""></li>
<li>4、在 GitHub 项目的「​Settings -&gt; Secrets」路径下配置好命名为 GITEE_RSA_PRIVATE_KEY 密钥和 GITEE_PASSWORD 密钥。GITEE_RSA_PRIVATE_KEY 存放 id_rsa 私钥，GITEE_PASSWORD 账号登录的密码。如下图：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207201641069.png" alt=""></li>
<li>5、在站点根目录下创建如下目录<code v-pre>.github/workflows/xxx.yml</code>，文件名任意起，GitHub 的 Actions 会处理.github 下的工作流文件夹 workflows 的工作流程。</li>
</ul>
</li>
</ul>
<h2 id="工作流程脚本编写" tabindex="-1"><a class="header-anchor" href="#工作流程脚本编写" aria-hidden="true">#</a> 工作流程脚本编写</h2>
<p>比如在目录<code v-pre>.github/workflows/deploy.yml</code>中编写如下代码:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy to github &amp; gitee
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 构建Node环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Node.js Env
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'14'</span>
      <span class="token comment"># 检出main分支代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout Code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2.3.1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token comment"># 安装依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install
      <span class="token comment"># 项目打包</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Project
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build
      <span class="token comment"># github 部署分支gh-pages 到github pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy dist on gh<span class="token punctuation">-</span>pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@4.2.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> dist
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token comment"># 同步github代码到gitee</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Sync to Gitee
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> wearerequired/git<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY</span>
          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_RSA_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 GitHub 源仓库地址</span>
          <span class="token key atrule">source-repo</span><span class="token punctuation">:</span> git@github.com<span class="token punctuation">:</span>AnyFork/blog<span class="token punctuation">-</span>docs.git
          <span class="token comment"># 注意替换为你的 Gitee 目标仓库地址</span>
          <span class="token key atrule">destination-repo</span><span class="token punctuation">:</span> git@gitee.com<span class="token punctuation">:</span>AnyFork/blog<span class="token punctuation">-</span>docs.git

      <span class="token comment"># 自动部署gitee gh-pages分支</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Gitee Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> yanglbme/gitee<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>action@main
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 Gitee 用户名</span>
          <span class="token key atrule">gitee-username</span><span class="token punctuation">:</span> 874957743@qq.com
          <span class="token comment"># 注意在 Settings->Secrets 配置 GITEE_PASSWORD</span>
          <span class="token key atrule">gitee-password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错</span>
          <span class="token key atrule">gitee-repo</span><span class="token punctuation">:</span> AnyFork/blog<span class="token punctuation">-</span>docs
          <span class="token comment"># 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次提交代码后，自动触发 Aciton 执行工作任务。当然你如果不想在 Githup 上部署代码，可以去掉前面几步，直接通过 Action 同步 github 代码到 gitee，实现 Gitee Pages 自动部署。</p>
<h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h2>
<ul>
<li><strong>配置站点</strong>：代码提交方式<code v-pre>SSH</code>,具体配置方式有一下 2 种：
<ul>
<li>1、将 GitHub 仓库通过 SSH 方式 Clone 到本地。</li>
<li>2、将本地远程仓库设置为 GitHub 仓库 SSH 地址,例如：<code v-pre>git remote set-url origin git@github.com:xxx/blog-docs.git</code></li>
</ul>
</li>
<li><strong>推送代码</strong>：每次文档编写完毕，可以通过<code v-pre>vscode，git-bash或者命令行窗口</code>推送代码，触发 Aciton，实现 GitHub 和 Gitee 自动部署 Pages,</li>
</ul>
<h2 id="相关-aciton-地址" tabindex="-1"><a class="header-anchor" href="#相关-aciton-地址" aria-hidden="true">#</a> 相关 Aciton 地址</h2>
<p><strong>actions/setup-node@v1</strong>：<a href="https://github.com/actions/setup-node/" target="_blank" rel="noopener noreferrer">https://github.com/actions/setup-node/<ExternalLinkIcon/></a></p>
<p><strong>actions/checkout@v2.3.1</strong>：<a href="https://github.com/actions/checkout/" target="_blank" rel="noopener noreferrer">https://github.com/actions/checkout/<ExternalLinkIcon/></a></p>
<p><strong>JamesIves/github-pages-deploy-action@4.2.0</strong>：<a href="https://github.com/JamesIves/github-pages-deploy-action/" target="_blank" rel="noopener noreferrer">https://github.com/JamesIves/github-pages-deploy-action/<ExternalLinkIcon/></a></p>
<p><strong>wearerequired/git-mirror-action@master</strong>：<a href="https://github.com/wearerequired/git-mirror-action/" target="_blank" rel="noopener noreferrer">https://github.com/wearerequired/git-mirror-action/<ExternalLinkIcon/></a></p>
<p><strong>yanglbme/gitee-pages-action@main</strong>：<a href="https://github.com/yanglbme/gitee-pages-action/" target="_blank" rel="noopener noreferrer">https://github.com/yanglbme/gitee-pages-action/<ExternalLinkIcon/></a></p>
<p>至此，通过 GitHub Actions 实现自动部署 GitHub Pages 和 Gitee Pages 流程就完了，小伙伴赶紧试试吧。</p>
</div></template>
