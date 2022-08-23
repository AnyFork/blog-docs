<template><div><p> 经常采用 markdown 编写文档的小伙伴深有体会，如何将图片资源进行存储，并在 markdown 文档中使用呢？采用第三方的图片资源，有的资源有防盗链限制，有的资源可能会过期，那么，今天就给小伙伴介绍一个免费的，快速高效的，属于自己的图床仓库。</p>
<!-- more -->
<h2 id="什么是图床" tabindex="-1"><a class="header-anchor" href="#什么是图床" aria-hidden="true">#</a> 什么是图床</h2>
<p> 图床其实是互联网中存储图片的空间，举个栗子：假设你在微博分享一张图片，你的粉丝可以通过互联网看到你分享的图片，那么他是去访问你的手机的相册吗？其实不是的，你分享图片，也就是把图片上传到微博的服务器，微博将为你生成一个独一无二的访问链接，这个链接指向的空间其实就是图床。</p>
<h2 id="为什么需要图床" tabindex="-1"><a class="header-anchor" href="#为什么需要图床" aria-hidden="true">#</a> 为什么需要图床</h2>
<p> 会去接触图床的人通常都是一些热爱在网上分享博客或者喜欢采用 markdown 编写文档的人，使用图床的人通常采用 Markdown 的方式去编辑文字。我们都知道现在通常流行两种方式编辑文字：富文本编辑，Word 就是其中非常具有代表性的，文字的各种格式都是通过交互按钮设置的，这时候需要频繁的鼠标配合操作。这种方式操作渐变，但是对于大量编辑工作的文字工作者，双手离开键盘使用鼠标其实是一种负担。
Markdown 编辑，是一种通过 Markdown 标记语言去规定格式的纯文本编辑方式。这种方式使得文字工作者专注于文字，而非格式，双手可以彻底的解放鼠标，大大提高了效率。还有一个优点就是，Markdown 比富文本编辑方式更加具有通用性，word 的文字整篇复制到有道云笔记格式会出现差异，这也是富文本编辑的巨大缺陷。</p>
<h2 id="怎样获得图床" tabindex="-1"><a class="header-anchor" href="#怎样获得图床" aria-hidden="true">#</a> 怎样获得图床</h2>
<p>目前有许多获得图床的途径非常多，通常分为收费的和免费的。收费图床：优点在于地址保持、独立域名、可能速度更快吧。免费图床：推荐刚接触的同学可以使用有道云笔记和微博，因为这两个软件大家都比较熟悉，操作也简单。 常用的图床有：微博，有道云笔记，github 图床,腾讯云 cos,七牛图床，阿里云 OSS，SM.MS 图床。今日主要给小伙伴们介绍一款免费的 github 图床的创建方式。图床的大致使用流程如下：
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021701018.png" alt=""></p>
<h2 id="图床仓库创建" tabindex="-1"><a class="header-anchor" href="#图床仓库创建" aria-hidden="true">#</a> 图床仓库创建</h2>
<p>1、创建一个存放图片的公开的 githubc 仓库
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021717135.png" alt="">
2、创建 Token，【进入 github】-【点击头像】-【settings】-【developer settings】-【Personal access tokens】，个人访问令牌创建成功，请复制你的 token，它只显示一次，请妥善保管。操作如下图：
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021717283.png" alt=""></p>
<h2 id="picgo-工具下载安装" tabindex="-1"><a class="header-anchor" href="#picgo-工具下载安装" aria-hidden="true">#</a> PicGO 工具下载安装</h2>
<p>PicGO 是一款采用 electron+Vue 开发上传图片的桌面端工具。首先需要本地下载安装客户端，官网开源地址：<a href="https://github.com/Molunerfinn/PicGo/releases" target="_blank" rel="noopener noreferrer">https://github.com/Molunerfinn/PicGo/releases<ExternalLinkIcon/></a>; 安装完打开客户端进行如下配置：
有很多图床，我们选择 github 图床，配置相关的仓库信息和 token 信息。</p>
<h2 id="picgo-配置-github-图床" tabindex="-1"><a class="header-anchor" href="#picgo-配置-github-图床" aria-hidden="true">#</a> PicGO 配置 github 图床</h2>
<p>1、填写图床仓库名称，分支，图片存放目录，个人令牌 Token,配置如下：
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021709999.png" alt=""><br>
这里的自定义域名的格式：<code v-pre>https://cdn.jsdelivr.net/gh/用户名/仓库名</code>，这是个免费的 CDN 加速，可以加快图片的访问速度，也可以不加。
2、通过 PicGO 上传区上传图片
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021726001.png" alt=""><br>
3、在相册中查看图片，点击对应的图片复制不同格式连接，直接使用。
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021726886.png" alt=""><br>
4、查看 github 图床仓库图片存储情况
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021730066.png" alt=""><br>
至此 github 图床创建完成了，小伙伴们可以开心的玩耍了 😀。</p>
<h2 id="客来图床" tabindex="-1"><a class="header-anchor" href="#客来图床" aria-hidden="true">#</a> 客来图床</h2>
<p>另外给小伙伴们介绍一款 web 浏览器网站工具，也可以上传图片到我们的 github 图床仓库，这种方式可以避免特殊情况下安装桌面端程序也可以上传图片。官网地址：<a href="https://img.itclan.cn/#/upload" target="_blank" rel="noopener noreferrer">https://img.itclan.cn/#/upload<ExternalLinkIcon/></a>。使用和 PicGo 很相似，输入个人令牌，会自动调用 github Api 获取个人信息，然后选择图床仓库，配置图床文件路径，如下图：<br>
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021749103.png" alt=""><br>
然后点击上传图片，上传后可以筛选不同目录下的图片，也可以预览 PicGo 上传的图片，同时可以获取 github 外网链接和 CND 加速链接，markdown 格式的链接直接使用，如下图：
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203021750165.png" alt=""></p>
<h2 id="github-图床原理" tabindex="-1"><a class="header-anchor" href="#github-图床原理" aria-hidden="true">#</a> github 图床原理</h2>
<p>通过 github Api 和个人授权 Token,通过第三方工具将本地图片上传到个人 github 仓库进行图片存储，然后生成一个通过 CND 加速的链接，提供用户访问。 <strong>注意：</strong> github 个人授权令牌 Token 一旦创建再无法获取，一定牢记住，如果遗失，只能重新生成一个。</p>
</div></template>
