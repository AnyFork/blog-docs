<template><div><p> Algolia 是一个数据库实时搜索服务，能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景。Algolia 的服务支持多种语言支持 Ruby、Rails、Python、PHP、JS、Java、Android、Objective-C 等多种语言，具备关键字输入智能容错功能，并提供有搜索排名配置，并具有实时快速的特点（Algolia 在全球 12 个数据中心均有部署）。Algolia 还为移动设备提供了离线搜索引擎，其 C++ SDK 可以嵌入到应用服务器端，这样即便没有网络连接应用也能提供搜索功能。</p>
<!-- more -->
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>1 Algolia 管理后台地址：<br>
<a href="https://www.algolia.com/apps/09V7PWK61N/explorer/browse/anyfork?searchMode=search" target="_blank" rel="noopener noreferrer">https://www.algolia.com/apps/09V7PWK61N/explorer/browse/anyfork?searchMode=search<ExternalLinkIcon/></a><br>
2 Algolia 爬虫后台地址：<br>
<a href="https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview" target="_blank" rel="noopener noreferrer">https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview<ExternalLinkIcon/></a><br>
3 Algolia GitHub 地址:<br>
<a href="https://github.com/algolia/docsearch" target="_blank" rel="noopener noreferrer">https://github.com/algolia/docsearch<ExternalLinkIcon/></a></p>
</div>
<h2 id="为什么在使用-algolia" tabindex="-1"><a class="header-anchor" href="#为什么在使用-algolia" aria-hidden="true">#</a> 为什么在使用 Algolia?</h2>
<ul>
<li>1、由于 VuePress 的内置搜索只会为页面的标题、h2 、 h3 以及 tags 构建搜索索引。如果你需要全文搜索，内置搜索无法实现，可则以使用 Algolia 搜索。</li>
<li>2、使用 Algolia 搜索最大的好处就是方便，它会自动爬取网站的页面内容并构建索引，你只用申请一个 Algolia 服务，在网站上添加一些代码，就像添加统计代码一样，然后就可以实现一个全文搜索功能，操作简单还方便，容错率很高。</li>
<li>3、使用范围广，目前很多应用的官方文档(例如：vue.js,vite,vuepress 等)均使用 Algolia 进行全文搜索，而且支持多种 Ruby、Rails、Python、PHP、JS、Java、Android、Objective-C 等多种语言，可以实现自动和手动爬取索引。展示效果如下:<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207210920996.png" alt=""></li>
</ul>
<h2 id="如何使用-algolia" tabindex="-1"><a class="header-anchor" href="#如何使用-algolia" aria-hidden="true">#</a> 如何使用 Algolia?</h2>
<ul>
<li>
<p>1、<strong>搜索服务申请</strong></p>
<ul>
<li>1、申请地址：<a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">https://docsearch.algolia.com/apply/<ExternalLinkIcon/></a></li>
<li>2、填写应用 Algolia 搜索服务的站点地址，能够对外访问。</li>
<li>3、填写个人邮箱，申请通过后会收到回复邮件，包含开通的应用信息以及进行后续其他操作的说明。</li>
<li>4、填写公开的仓库地址，此仓库存放站点源码。</li>
</ul>
<p>填完之后一周之内，收到回复邮件，按照邮件内容进行操作。记住一定要回复邮件，告诉自己就是网站的维护者，并且可以修改代码，否则超过时间不回复，申请的应用会被自动销毁。</p>
</li>
<li>
<p>2、<strong>代码配置</strong></p>
<ul>
<li>1、如果你用的是 VuePress 的默认主题，VuePress 直接提供了 themeConfig.algolia 选项来用 Algolia 搜索替换内置的搜索框，你只用如此简单的配置即可实现全文搜索。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">algolia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'&lt;API_KEY>'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'&lt;INDEX_NAME>'</span>
      <span class="token comment">// 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'&lt;APP_ID>'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、如果你用的不是 VuePress 的默认主题，就比如我用的是<code v-pre>vuepress-theme-reco 1.x</code>，它的搜索栏是自己实现的，所以添加上述的配置是不会有效果的(1.6.10 版本中自定义的<code v-pre>AlgoliaSearchBox.vue</code>组件存在很多 bug)，这个时候就需要遵照邮件中的方法，手动添加 CSS 和 JavaScript 文件。如果你直接引入 vuepress-theme-reco 1.x 包，使用按照下面步骤进行配置：</li>
</ul>
<p>1 我们需要先修改下 config.js:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'https://cdn.jsdelivr.net/npm/@docsearch/css@3'</span><span class="token punctuation">,</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'stylesheet'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'script'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">'javascript'</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text/javascript'</span><span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'https://cdn.jsdelivr.net/npm/@docsearch/js@3'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 然后修改.vuepress/enhanceApp.js 文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> router<span class="token punctuation">,</span> Vue<span class="token punctuation">,</span> isServer <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不加 setTimeout 会有报错，但不影响效果</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">docsearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'43GX903BPS'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'feff649032d8034cf2a636ef55d96054'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'ts-yayujs'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'.search-box'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>如果你是将 vuepress-theme-reco 1.x 主题进行本地化魔改，主题中<code v-pre>Alglia</code>配置不变，可以对自定义组件<code v-pre>AlgoliaSearchBox.vue</code>修改如下：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>algolia-search-input<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RecoIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress-reco/core/lib/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@theme/helpers/composable'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">initialize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">userOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> algoliaOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> userOptions
      <span class="token function">docsearch</span><span class="token punctuation">(</span>
        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> userOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#algolia-search-input'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">algoliaOptions</span><span class="token operator">:</span> algoliaOptions
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">initialize</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.search-box .DocSearch.DocSearch-Button</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #5b5b5b<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.9rem<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 0.5rem 0 0rem<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.2s ease<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search-box .DocSearch-Button-Container</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0.4rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search-box .DocSearch-Button .DocSearch-Search-Icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search-box .DocSearch-Button-Placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search-box .DocSearch-Button-Keys</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search-box .DocSearch-Button-Key</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意其中的 container，参考 <a href="https://github.com/algolia/docsearch" target="_blank" rel="noopener noreferrer">docsearch<ExternalLinkIcon/></a> 的官方仓库，这里提供的不是 input 输入框的选择器，而是一个挂载节点，比如 div 的选择器。如果样式自己不喜欢，可以通过修改<code v-pre>vuepress/styles/index.styl</code>覆盖目前的样式。最终效果如下：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211001028.png" alt=""></p>
<h2 id="数据爬取" tabindex="-1"><a class="header-anchor" href="#数据爬取" aria-hidden="true">#</a> 数据爬取</h2>
<ul>
<li>1、配置完毕后将网站进行重新部署，查看<code v-pre>Algolia</code>全局搜索是否有数据。</li>
<li>2、如果你搜任何数据，都显示搜索不到数据，那很可能是爬取的数据有问题，我们登陆 <a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">https://www.algolia.com/<ExternalLinkIcon/></a> 打开管理后台，点击左侧选项栏里的 Search，查看对应的 indexName 数据，如果 Browse 这里没有显示数据，那说明爬取的数据可能有问题，导致没有生成对应的 Records：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211111162.png" alt="">
如果没有数据，那我们就查下爬取的逻辑，打开爬虫后台：<a href="https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview" target="_blank" rel="noopener noreferrer">https://crawler.algolia.com/admin/crawlers/05c701e8-3f90-461a-8624-081309f68d92/overview<ExternalLinkIcon/></a>，点击对应 indexName 进入后台：
<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211115127.png" alt="">如果显示成功爬取，也有 Monitoring Success 的数据，但 Records 为 0，那大概是爬虫提取数据的逻辑有问题，点击左侧选项栏中的 Editor，查看具体的爬虫逻辑：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211119981.png" alt="">像 pathsToMatch 这里如果是'<a href="https://anyfork.github.io/blog-docs/docs/" target="_blank" rel="noopener noreferrer">https://anyfork.github.io/blog-docs/docs/<ExternalLinkIcon/></a>**'，但你的网址都是 <a href="https://anyfork.github.io/blog-docs/**" target="_blank" rel="noopener noreferrer">https://anyfork.github.io/blog-docs/**<ExternalLinkIcon/></a>开头的，那这里大概就是会提取错误，修改一下，然后点击右侧的数据进行测试：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211126112.png" alt="">如果能像这样提取到数据，就说明没有什么问题了，点击右上角的 Save，然后切换回 Overview，点击右上角的 Restart crawling，我们重新爬取一下数据：<img src="https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202207211128410.png" alt="">除了手动进行爬取之外，<code v-pre>Algolia</code>爬虫后台会定时爬取数据。至此， VuePress 博客优化之开启 Algolia 全文搜索就配置完了，小伙伴赶紧开始吧！</li>
</ul>
<p><strong>参考文章</strong>：<a href="https://blog.csdn.net/weixin_55475226/article/details/123363042" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_55475226/article/details/123363042<ExternalLinkIcon/></a></p>
</div></template>
