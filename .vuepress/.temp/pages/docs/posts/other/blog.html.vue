<template><div><p> 经过一段时间的摸索，踩过了无数的坑，终于搭建好了一个属于自己的博客。在此记录一下踩坑过程，让以后的小伙伴们搭建自己博客的时候少走弯路。博客采用了<code v-pre>vuepress@2.x</code>版本进行构建，同时对默认主题进行了本地化继承修改，整个主题大的布局未改动，只是对首页和展示页面进行了布局调整，最终效果为当前博客显示效果。小伙伴们还等什么，赶快开始吧！👍</p>
<!-- more -->
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、博主以前也用<code v-pre>vuepress-theme-reco@1.x</code>主题搭建了一个博客，比较喜欢vuepress-theme-reco@1.x风格，由于<code v-pre>vuepress-theme-reco@1.x</code>采用的技术都相对目前比较落后，后来便用<code v-pre>vuepress 2.X</code>开发了现在的博客，整体页面风格和样式和原来的一模一样，但主题还是继承了<code v-pre>vuepress 2.X</code>默认主题，增加了博客,分类，标签功能和其他首页特效插件。</p>
<p>2、博客地址：<a href="https://anyfork.github.io/blog-docs/" target="_blank" rel="noopener noreferrer">https://anyfork.github.io/blog-docs/<ExternalLinkIcon/></a>或<a href="https://anyfork.gitee.io/blog-docs/" target="_blank" rel="noopener noreferrer">https://anyfork.gitee.io/blog-docs/<ExternalLinkIcon/></a></p>
</div>
<h2 id="一-初始化项目" tabindex="-1"><a class="header-anchor" href="#一-初始化项目" aria-hidden="true">#</a> 一 初始化项目</h2>
<h3 id="_1-环境依赖" tabindex="-1"><a class="header-anchor" href="#_1-环境依赖" aria-hidden="true">#</a> 1 环境依赖</h3>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v14+<ExternalLinkIcon/></a>，最低使用<code v-pre>Node 14+</code>版本，建议使用<code v-pre>Node 14.16.0</code>版本</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<ul>
<li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm<ExternalLinkIcon/></a> 时，你可能需要安装 vue 和 @vuepress/client 作为 peer-dependencies ，即 pnpm add -D vue @vuepress/client@next 。</li>
<li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn 2<ExternalLinkIcon/></a> 时，你需要在 <a href="https://yarnpkg.com/configuration/yarnrc#nodeLinker" target="_blank" rel="noopener noreferrer">.yarnrc.yml<ExternalLinkIcon/></a> 文件中设置 nodeLinker: 'node-modules'</li>
</ul>
</div>
<h3 id="_2-快速开始" tabindex="-1"><a class="header-anchor" href="#_2-快速开始" aria-hidden="true">#</a> 2 快速开始</h3>
<ul>
<li>创建项目目录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建项目目录</span>
<span class="token function">mkdir</span> blog-docs
<span class="token comment"># 进入项目目录</span>
<span class="token builtin class-name">cd</span> blog-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>初始化项目</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>依赖安装</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>在<code v-pre>package.json</code>增加中添加一些 scripts</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"dev"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress dev docs"</span>,
    <span class="token string">"build"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将默认的临时目录和缓存目录添加到<code v-pre>.gitignore</code>文件中</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'node_modules'</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">'.temp'</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">'.cache'</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">'.history'</span> <span class="token operator">>></span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建文档目录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-项目启动" tabindex="-1"><a class="header-anchor" href="#_3-项目启动" aria-hidden="true">#</a> 3 项目启动</h3>
<p>用 vscode 打开项目，新建终端，执行启动脚本命令</p>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<p>详细的创建过程请参考<a href="https://v2.vuepress.vuejs.org/zh/guide/getting-started.html" target="_blank" rel="noopener noreferrer">vuepress 官网快速上手<ExternalLinkIcon/></a>，至此项目搭建基础就调整完了，小伙伴们就可以开开心心的写<code v-pre>markdown</code>文件了。</p>
<h2 id="二-功能配置" tabindex="-1"><a class="header-anchor" href="#二-功能配置" aria-hidden="true">#</a> 二 功能配置</h2>
<p> 像回到顶部，分页，评论，时间线，多语言，左侧侧边栏，右侧侧边栏，文档摘要，自定义容器等功能官网已经写的很详细了，按照<a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>配置即可，如果看不懂，那就多看几遍，多试试就懂了。下面针对官网部分功能简单说一下相关配置。</p>
<h3 id="_1、评论" tabindex="-1"><a class="header-anchor" href="#_1、评论" aria-hidden="true">#</a> 1、<a href="https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html#%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">评论<ExternalLinkIcon/></a></h3>
<p> 主题内置评论插件<code v-pre>@vuepress-reco/vuepress-plugin-comments</code>，可以根据自己的喜好选择<a href="https://valine.js.org/" target="_blank" rel="noopener noreferrer">Valine<ExternalLinkIcon/></a>或者<a href="https://vssue.js.org/zh/options/" target="_blank" rel="noopener noreferrer">Vssue<ExternalLinkIcon/></a>；
如果你想默认不加载评论，而只在某些页面显示评论功能，可以在<code v-pre>valineConfig</code>或<code v-pre>vssueConfig</code>中设置<code v-pre>showComment: false</code>，并在需要展示评论的页面 设置<code v-pre>isShowComments: true</code>。
如果仅是某篇文章不想设置开启评论功能，可以在<code v-pre>front-matter</code>设置<code v-pre>isShowComments: false</code>。</p>
<p> 浏览量仅在使用<code v-pre>Valine</code>时显示,使用<code v-pre>Valine</code>评论需要在<code v-pre>Valine</code>官网申请<code v-pre>appId: 'GpWG2PgOaXLTcz******dvza-gzGzoHsz'和appKey: 'NgptF7WB***YNPobYYtla'</code>，并进行配置才能
使用，配置如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'reco'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">//valine配置，官网地址：https://valine.js.org/quickstart.html</span>
  <span class="token literal-property property">valineConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'GpWG2PgOaXLTcz******dvza-gzGzoHsz'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">'NgptF7WB***YNPobYYtla'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showComment</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'填写邮箱可以收到回复哦!'</span><span class="token punctuation">,</span>
    <span class="token comment">//邮件提醒</span>
    <span class="token literal-property property">notify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//验证码</span>
    <span class="token literal-property property">verify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">recordIP</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官方默认推荐的评论为<code v-pre>Valine</code>和<code v-pre>Vssue</code>，小编刚开始采用的是<code v-pre>Valine</code>,不仅可以查看浏览量，还能写评论，缺点是<code v-pre>Valine</code>是匿名评论的，评论后的内容通过<code v-pre>Valine</code>后台才能管理，不是太方便。所以最终选择了<code v-pre>gitalk</code>,通过 github 登录后发表评论，评论储存在仓库的 issue 区域，配置也比较简单，具体配置请看<a href="#gitalk">gitalk</a></p>
<h2 id="三-插件安装" tabindex="-1"><a class="header-anchor" href="#三-插件安装" aria-hidden="true">#</a> 三 插件安装</h2>
<p> vuepress 允许我们通过扩展插件的方式来拓展功能，通过插件可以丰富我们博客功能，使页面效果更加<code v-pre>炫酷</code>，<code v-pre>增强</code>网站的<code v-pre>逼格</code>，详细情况参考<a href="https://v2.vuepress.vuejs.org/zh/guide/plugin.html" target="_blank" rel="noopener noreferrer">vuepress@2.x 插件配置方式<ExternalLinkIcon/></a>和<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html" target="_blank" rel="noopener noreferrer">vuepress@2.x 内置插件<ExternalLinkIcon/></a>。<code v-pre>Vuepress 2.x</code>插件 API 变化比较大，使用方式也采用函数式调用，因此社区<code v-pre>Vuepress 1.x</code>插件不能使用。博主博客开发过程中针对<code v-pre>Vuepress 1.x</code>的部分插件进行了兼容<code v-pre>Vuepress 2.x</code>适配，以下是博客中用到的插件：</p>
<h3 id="_1-pwa-插件" tabindex="-1"><a class="header-anchor" href="#_1-pwa-插件" aria-hidden="true">#</a> 1 PWA 插件<Badge type="tip" text="官方插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html" target="_blank" rel="noopener noreferrer">pwa<ExternalLinkIcon/></a>插件为<code v-pre>vuepress 2.x</code>官方开发的插件，使你的 VuePress 站点成为一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">渐进式 Web 应用 (PWA)<ExternalLinkIcon/></a>，该插件使用<a href="https://developers.google.com/web/tools/workbox/modules/workbox-build?utm_source=devtools" target="_blank" rel="noopener noreferrer">workbox-build<ExternalLinkIcon/></a> 来生成 Service Worker 文件，并通过<a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker<ExternalLinkIcon/></a> 来注册 Service Worker</p>
<p>2、<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa-popup.html" target="_blank" rel="noopener noreferrer">pwa-popup<ExternalLinkIcon/></a> 插件为<code v-pre>vuepress 2.x</code>官方开发的插件，提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。
该插件必须和 pwa 插件 一起使用，并且 skipWaiting 配置项不能设置为 true 。当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。</p>
<p>3、<code v-pre>pwa</code>和<code v-pre>pwa-popup</code>为官方开发的插件，并未集成的默认主题中，因此需要自己安装依赖。</p>
</div>
<ul>
<li>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html" target="_blank" rel="noopener noreferrer">pwa<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
<ul>
<li>安装依赖</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> i -D @vuepress/plugin-pwa@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pwaPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa-popup.html" target="_blank" rel="noopener noreferrer">pwa-popup<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
<ul>
<li>安装依赖</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> i -D @vuepress/plugin-pwa-popup@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">pwaPopupPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'发现新内容可用'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'点我刷新'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>更多详细配置，请参考<code v-pre>pwa</code>官网配置：<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="_2-docsearch-插件" tabindex="-1"><a class="header-anchor" href="#_2-docsearch-插件" aria-hidden="true">#</a> 2 DocSearch 插件<Badge type="tip" text="官方插件" vertical="top" /></h3>
<p>::: info
1、将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。</p>
<p>2、当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。</p>
<p>3、<code v-pre>DocSearch</code>为官方开发的插件，并未集成的默认主题中，因此需要自己安装依赖。
:::</p>
<ul>
<li>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">DocSearch<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
</li>
<li>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> i -D @vuepress/plugin-docsearch@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>插件配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-docsearch'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//docsearch插件,https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'e3224f6a8f05632af9c14c97******b54'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'anyfork'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'09V****WK61N'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>更多详细配置，请参考<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">DocSearch<ExternalLinkIcon/></a>官网配置，<code v-pre>Algolia</code>配置请参考：<RouterLink to="/docs/posts/other/algoliaSearch.html">VuePress 博客优化之开启 Algolia 全文搜索</RouterLink></p>
</li>
</ul>
<h3 id="_3-readingtime-插件" tabindex="-1"><a class="header-anchor" href="#_3-readingtime-插件" aria-hidden="true">#</a> 3 ReadingTime 插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>ReadingTime插件</code>统计文章字数和预估阅读时间，详情参考：<a href="https://vuepress-theme-hope.github.io/v2/reading-time/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/reading-time/zh/<ExternalLinkIcon/></a></p>
</div>
<ul>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/reading-time/zh/" target="_blank" rel="noopener noreferrer">ReadingTime<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
</li>
<li>
<p>安装依赖</p>
</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-reading-time2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-reading-time2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-reading-time2@next@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
- 插件配置
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> readingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-reading-time2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/reading-time/zh/" target="_blank" rel="noopener noreferrer">readingTime<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_4-seo-插件" tabindex="-1"><a class="header-anchor" href="#_4-seo-插件" aria-hidden="true">#</a> 4 SEO 插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>SEO插件</code>本插件会通过向网站<code v-pre>&lt;head&gt;</code> 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性，详情参考：<a href="https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html<ExternalLinkIcon/></a></p>
</div>
<ul>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/seo/zh/" target="_blank" rel="noopener noreferrer">SEO<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
</li>
<li>
<p>安装依赖</p>
</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-seo2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-seo2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-seo2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> seoPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-seo2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// seo插件，https://vuepress-theme-hope.github.io/v2/seo/</span>
    <span class="token function">seoPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'https://anyfork.github.io/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小紫念沁'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://anyfork.github.io/blog-docs/'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/seo/zh/config.html" target="_blank" rel="noopener noreferrer">SEO<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_5-sitemap-插件" tabindex="-1"><a class="header-anchor" href="#_5-sitemap-插件" aria-hidden="true">#</a> 5 SiteMap 插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>siteMap插件</code>本插件会为你的网站自动生成 Sitemap。为了使插件正常工作，你需要将部署的域名传递给插件的 hostname 选项。插件会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言版本替代地址。，详情参考：<a href="https://vuepress-theme-hope.github.io/v2/sitemap/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/sitemap/zh/<ExternalLinkIcon/></a></p>
</div>
<ul>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/seo/zh/" target="_blank" rel="noopener noreferrer">SEO<ExternalLinkIcon/></a>插件依赖安装和插件配置：</p>
</li>
<li>
<p>安装依赖</p>
</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-sitemap2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-sitemap2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-sitemap2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
- 插件配置
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sitemapPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-sitemap2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// siteMap站点地图插件，https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html</span>
    <span class="token function">sitemapPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'https://anyfork.github.io/blog-docs/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extraUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'https://anyfork.gitee.io/blog-docs/'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html" target="_blank" rel="noopener noreferrer">siteMap<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_6-copyright-插件" tabindex="-1"><a class="header-anchor" href="#_6-copyright-插件" aria-hidden="true">#</a> 6 Copyright 插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>copyright插件</code>此插件可以在访问者从你的站点复制内容时，自动追加版权信息，也可以禁止站点的复制或者选择。详情参考：<a href="https://vuepress-theme-hope.github.io/v2/copyright/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/copyright/zh/<ExternalLinkIcon/></a></p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/copyright/zh/" target="_blank" rel="noopener noreferrer">copyright<ExternalLinkIcon/></a>插件依赖安装和插件配置：</li>
<li>安装依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-copyright2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-copyright2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-copyright2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> copyrightPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-copyright2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//复制加版权插件，https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html</span>
    <span class="token function">copyrightPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'https://anyfork.github.io/blog-docs/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'小紫念沁'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html" target="_blank" rel="noopener noreferrer">copyright<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_7-copycode-插件" tabindex="-1"><a class="header-anchor" href="#_7-copycode-插件" aria-hidden="true">#</a> 7 CopyCode 插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>copyCode插件</code>此插件会自动添加复制按钮到每个代码块的右下角。默认情况下，按钮仅在桌面模式显示，如果你需要在移动端展示这个按钮，请将 showInMobile 设置为 true。在用户点击复制按钮后，屏幕上会显示一个复制成功的提示。默认的提示时长为 2000ms，如果你需要更改这个时长，请设置 duration(单位 ms)，如果你不需要这个提示，请将 duration 设置为 0。详情参考：<a href="https://vuepress-theme-hope.github.io/v2/copy-code/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/copy-code/zh/<ExternalLinkIcon/></a></p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/copy-code/zh/" target="_blank" rel="noopener noreferrer">CopyCode<ExternalLinkIcon/></a>插件依赖安装和插件配置：</li>
<li>安装依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-copy-code2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-copy-code2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-copy-code2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-copy-code2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//代码复制插件，https://vuepress-theme-hope.github.io/v2/copy-code/zh/</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'.theme-default-content div[class*="language-"] pre'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">copy</span><span class="token operator">:</span> <span class="token string">'复制成功!'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">hint</span><span class="token operator">:</span> <span class="token string">'copy!'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/copy-code/zh/config.html" target="_blank" rel="noopener noreferrer">copyCode<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_8-giscus-评论插件" tabindex="-1"><a class="header-anchor" href="#_8-giscus-评论插件" aria-hidden="true">#</a> 8 Giscus 评论插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>Giscus插件</code>Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便。详情参考：<a href="https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html<ExternalLinkIcon/></a></p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html" target="_blank" rel="noopener noreferrer">Giscus<ExternalLinkIcon/></a>插件依赖安装和插件配置：</li>
<li>安装依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-comment2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-comment2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-comment2@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>
<p>准备工作</p>
<ul>
<li>1 你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点</li>
<li>2 你需要安装<a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App<ExternalLinkIcon/></a>，使其有权限访问对应仓库。</li>
<li>3 在完成以上步骤后，请前往<a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus<ExternalLinkIcon/></a> 页面 获得你的设置。
你只需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分，获取 data-repo, data-repo-id, data-category 和 data-category-id 这四个属性。</li>
</ul>
</li>
<li>
<p>插件配置</p>
<p>请将 <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> 和 <code v-pre>data-category-id</code> 作为插件选项传入 <code v-pre>repo</code>, <code v-pre>repoId</code>, <code v-pre>category categoryId</code></p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-comment2'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//giscus评论插件,https://vuepress-theme-hope.github.io/v2/comment/zh/config/giscus.html</span>
    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">'Giscus'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//仓库名称</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'AnyFork/blog-docs'</span><span class="token punctuation">,</span>
      <span class="token comment">//仓库id</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">'R_kgDOG0MPtA'</span><span class="token punctuation">,</span>
      <span class="token comment">//分类类型</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'Announcements'</span><span class="token punctuation">,</span>
      <span class="token comment">//分类id</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">'DIC_kwDOG0MPtM4CQ_kf'</span><span class="token punctuation">,</span>
      <span class="token comment">//页面 ↔️ discussion 映射关系</span>
      <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">'og:title'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/comment/zh/config/giscus.html" target="_blank" rel="noopener noreferrer">Giscus<ExternalLinkIcon/></a>官网配置。</li>
</ul>
<h3 id="_9-markdown-语法扩展插件" tabindex="-1"><a class="header-anchor" href="#_9-markdown-语法扩展插件" aria-hidden="true">#</a> 9 Markdown 语法扩展插件<Badge type="tip" text="Hope插件" vertical="top" /></h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1、<code v-pre>Hope插件</code>指<code v-pre>vuepress-theme-hope</code>主题作者开发的插件库。</p>
<p>2、<code v-pre>Hope插件</code>官网地址：<a href="https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html<ExternalLinkIcon/></a></p>
<p>3、<code v-pre>Markdown语法扩展插件</code>通过安装并启用此插件，你可以在 Markdown 中使用更多的语法。详情参考：<a href="https://vuepress-theme-hope.github.io/v2/md-enhance/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/md-enhance/zh/<ExternalLinkIcon/></a></p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/md-enhance/zh/" target="_blank" rel="noopener noreferrer">Markdown 语法扩展<ExternalLinkIcon/></a>插件依赖安装和插件配置：</li>
<li>安装依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
    <CodeGroupItem title="pnpm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>插件配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-md-enhance'</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//markdown 增强插件，https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 启用自定义容器</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在选项中 enableAll 设置为 true 来启用插件的所有功能,不建议开启全部扩展功能，可以根据实际情况进行开启</p>
<ul>
<li>更多详细配置，请参考<a href="https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/" target="_blank" rel="noopener noreferrer">Markdown 语法扩展<ExternalLinkIcon/></a>官网配置。</li>
</ul>
</div></template>
