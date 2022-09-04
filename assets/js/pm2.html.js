import{_ as c,o as d,c as o,a as n,X as e,ar as r,v as s,b as l,a2 as i}from"./anyfork.js";const m={},p=n("p",null,"\u2003pm2 \u662F\u4E00\u4E2A\u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177,\u53EF\u4EE5\u7528\u5B83\u6765\u7BA1\u7406\u4F60\u7684 node \u8FDB\u7A0B\uFF0C\u5E76\u67E5\u770B node \u8FDB\u7A0B\u7684\u72B6\u6001\uFF0C\u5F53\u7136\u4E5F\u652F\u6301\u6027\u80FD\u76D1\u63A7\uFF0C\u8FDB\u7A0B\u5B88\u62A4\uFF0C\u8D1F\u8F7D\u5747\u8861\u7B49\u529F\u80FD\u3002",-1),v=n("h2",{id:"\u4E00\u3001pm2-\u5B98\u7F51\u4FE1\u606F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E00\u3001pm2-\u5B98\u7F51\u4FE1\u606F","aria-hidden":"true"},"#"),s(" \u4E00\u3001pm2 \u5B98\u7F51\u4FE1\u606F")],-1),u=s("1\u3001pm2 \u5B98\u7F51\u5730\u5740\uFF1A"),b={href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"},_=s("https://pm2.keymetrics.io/"),k=n("br",null,null,-1),h=s(" 2\u3001pm2 \u5B98\u65B9\u6587\u6863\uFF1A"),g={href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"},f=s("https://pm2.keymetrics.io/docs/usage/quick-start/"),x=n("br",null,null,-1),y=s(" 3\u3001pm2 github \u5730\u5740\uFF1A"),N={href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"},E=s("https://github.com/Unitech/pm2"),j=n("h2",{id:"\u4E8C\u3001pm2-\u5B89\u88C5\u6B65\u9AA4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E8C\u3001pm2-\u5B89\u88C5\u6B65\u9AA4","aria-hidden":"true"},"#"),s(" \u4E8C\u3001pm2 \u5B89\u88C5\u6B65\u9AA4")],-1),q=s("1\u3001pm2 \u5B89\u88C5\u9700\u8981\u4F9D\u8D56"),w=n("code",null,"Node",-1),D=s("\u73AF\u5883\uFF0C\u5E76\u4E14"),Y=n("code",null,"Node",-1),X=s("\u7248\u672C\u9700\u8981\u9AD8\u4E8E 12\uFF0C\u5982\u679C\u4E3A\u5B89\u88C5"),H=n("code",null,"Node",-1),M=s(",\u8BF7\u53C2\u8003\uFF1A"),V={href:"/node/",target:"_blank",rel:"noopener noreferrer"},O=s("Node \u73AF\u5883\u5B89\u88C5\u65B9\u5F0F"),R=n("br",null,null,-1),I=s(" 2\u3001pm2 \u5B89\u88C5\u547D\u4EE4"),L=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5168\u5C40\u5B89\u88C5pm2</span>
$ <span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5F00\u59CB\u542F\u52A8\u4E00\u4E2A\u5E94\u7528</p><p>\u914D\u7F6E pm2 \u5E94\u7528\u5B9E\u4F8B\u914D\u7F6E\u6587\u4EF6<code>ecosystem.config.js</code>,\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#pm2\u5B9E\u4F8B\u914D\u7F6E\uFF1Aecosystem.config.js</span>
module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  apps: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">#\u5B9E\u4F8B\u540D\u79F0</span>
      name: <span class="token string">&#39;NuxtRmbRate&#39;</span>,
      <span class="token comment">#\u90E8\u7F72\u6A21\u5F0F\uFF0C\u5355\u673A\uFF1A&#39;fork&#39;,\u96C6\u7FA4\uFF1A&#39;cluster&#39;</span>
      exec_mode: <span class="token string">&#39;fork&#39;</span>,
      <span class="token comment">#\u5B9E\u4F8B\u6570\u76EE</span>
      instances: <span class="token string">&#39;1&#39;</span>,
      <span class="token comment">#\u9700\u8981\u6267\u884C\u7684\u811A\u672C\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u666E\u901A\u7684nuxt\u9879\u76EE(\u6CA1\u6709server)\uFF0C\u4E00\u822C\u91C7\u7528nuxt start\u547D\u4EE4\uFF0C\u7528pm2\u6267\u884C\u65F6\u9700\u8981\u4FEE\u6539\u6210./node-modules/nuxt/dist/bin/nuxt.js,\u5426\u5219\u62A5\u9519</span>
      script: <span class="token string">&#39;server/index.js&#39;</span>,
      <span class="token comment">#\u5E94\u7528\u7A0B\u5E8F\u6240\u5728\u7684\u76EE\u5F55</span>
      cwd: <span class="token string">&#39;&#39;</span>,
      <span class="token comment"># \u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570\uFF0C\u4F8B\u5982nuxt start\u547D\u4EE4\uFF0C\u53C2\u6570\u4E3Astart</span>
      args: <span class="token string">&#39;&#39;</span>,
      <span class="token comment"># \u5B8C\u6574\u65E5\u5FD7\u8DEF\u5F84</span>
      output: <span class="token string">&#39;log/output.log&#39;</span>,
      <span class="token comment"># \u9519\u8BEF\u65E5\u5FD7\u8DEF\u5F84</span>
      error: <span class="token string">&#39;log/error.log&#39;</span>,
      <span class="token comment"># \u8BBF\u95EE\u65E5\u5FD7\u8DEF\u5F84</span>
      log: <span class="token string">&#39;log/access.log&#39;</span>,
      <span class="token comment"># \u65E5\u5FD7\u683C\u5F0F</span>
      log_type: <span class="token string">&#39;json&#39;</span>,
      <span class="token comment"># \u5408\u5E76\u65E5\u5FD7</span>
      merge_logs: true,
      <span class="token comment"># \u65E5\u5FD7\u65E5\u671F\u683C\u5F0F</span>
      log_date_format: <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span>,
       <span class="token comment"># \u6700\u5C0F\u8FD0\u884C\u65F6\u95F4\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F60s\u5373\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u5728* 60s\u5185\u9000\u51FA\uFF0Cpm2\u4F1A\u8BA4\u4E3A\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\uFF0C\u6B64\u65F6\u89E6\u53D1\u91CD\u542F* max_restarts\u8BBE\u7F6E\u6570\u91CF\uFF0C\u5E94\u7528\u8FD0\u884C\u5C11\u4E8E\u65F6\u95F4\u88AB\u8BA4\u4E3A\u662F\u5F02\u5E38\u542F\u52A8</span>
      min_uptime: <span class="token string">&#39;60s&#39;</span>,
      <span class="token comment"># \u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\u91CD\u542F\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA415\u6B21\uFF08\u4ECE0\u5F00\u59CB\u8BA1\u6570\uFF09,\u6700\u5927\u5F02\u5E38\u91CD\u542F\u6B21\u6570\uFF0C\u5373\u5C0F\u4E8Emin_uptime\u8FD0\u884C\u65F6\u95F4\u91CD\u542F\u6B21\u6570\uFF1B</span>
      max_restarts: <span class="token number">10</span>,
      <span class="token comment"># \u542F\u7528/\u7981\u7528\u5E94\u7528\u7A0B\u5E8F\u5D29\u6E83\u6216\u9000\u51FA\u65F6\u81EA\u52A8\u91CD\u542F\uFF0C\u9ED8\u8BA4\u4E3Atrue, \u53D1\u751F\u5F02\u5E38\u7684\u60C5\u51B5\u4E0B\u81EA\u52A8\u91CD\u542F</span>
      autorestart: true,
      <span class="token comment"># \u5F02\u5E38\u91CD\u542F\u60C5\u51B5\u4E0B\uFF0C\u5EF6\u65F6\u91CD\u542F\u65F6\u95F4</span>
      restart_delay: <span class="token number">30</span>,
      <span class="token comment">#\u751F\u4EA7\u73AF\u5883\u914D\u7F6E</span>
      env_prod: <span class="token punctuation">{</span>
        <span class="token comment"># \u73AF\u5883\u53C2\u6570\uFF0C\u5F53\u524D\u6307\u5B9A\u4E3A\u751F\u4EA7\u73AF\u5883</span>
        NODE_ENV: <span class="token string">&#39;production&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u914D\u7F6E\u9879\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>name \u5E94\u7528\u8FDB\u7A0B\u540D\u79F0\uFF1B

script \u542F\u52A8\u811A\u672C\u8DEF\u5F84\uFF1B

cwd \u5E94\u7528\u542F\u52A8\u7684\u8DEF\u5F84\uFF0C\u5173\u4E8E script \u4E0E cwd \u7684\u533A\u522B\u4E3E\u4F8B\u8BF4\u660E\uFF1A\u5728/home/polo/\u76EE\u5F55\u4E0B\u8FD0\u884C/data/release/node/index.js\uFF0C\u6B64\u5904 script \u4E3A/data/release/node/index.js\uFF0Ccwd \u4E3A/home/polo/\uFF1B

args \u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570\uFF1B

interpreter \u6307\u5B9A\u7684\u811A\u672C\u89E3\u91CA\u5668\uFF1B

interpreter_args \u4F20\u9012\u7ED9\u89E3\u91CA\u5668\u7684\u53C2\u6570\uFF1B

instances \u5E94\u7528\u542F\u52A8\u5B9E\u4F8B\u4E2A\u6570\uFF0C\u4EC5\u5728 cluster \u6A21\u5F0F\u6709\u6548\uFF0C\u9ED8\u8BA4\u4E3A fork\uFF1B

exec_mode \u5E94\u7528\u542F\u52A8\u6A21\u5F0F\uFF0C\u652F\u6301 fork \u548C cluster \u6A21\u5F0F\uFF1B

<span class="token function">watch</span> \u76D1\u542C\u91CD\u542F\uFF0C\u542F\u7528\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u5939\u6216\u5B50\u6587\u4EF6\u5939\u4E0B\u53D8\u5316\u5E94\u7528\u81EA\u52A8\u91CD\u542F\uFF1B

ignore_watch \u5FFD\u7565\u76D1\u542C\u7684\u6587\u4EF6\u5939\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1B

max_memory_restart \u6700\u5927\u5185\u5B58\u9650\u5236\u6570\uFF0C\u8D85\u51FA\u81EA\u52A8\u91CD\u542F\uFF1B

<span class="token function">env</span> \u73AF\u5883\u53D8\u91CF\uFF0Cobject \u7C7B\u578B\uFF0C\u5982<span class="token punctuation">{</span><span class="token string">&quot;NODE_ENV&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;production&quot;</span>, <span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;42&quot;</span><span class="token punctuation">}</span>\uFF1B

log_date_format \u6307\u5B9A\u65E5\u5FD7\u65E5\u671F\u683C\u5F0F\uFF0C\u5982 YYYY-MM-DD HH:mm:ss\uFF1B

error_file \u8BB0\u5F55\u6807\u51C6\u9519\u8BEF\u6D41\uFF0C<span class="token environment constant">$HOME</span>/.pm2/logs/XXXerr.log<span class="token punctuation">)</span>\uFF0C\u4EE3\u7801\u9519\u8BEF\u53EF\u5728\u6B64\u6587\u4EF6\u67E5\u627E\uFF1B

out_file \u8BB0\u5F55\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C<span class="token environment constant">$HOME</span>/.pm2/logs/XXXout.log<span class="token punctuation">)</span>\uFF0C\u5982\u5E94\u7528\u6253\u5370\u5927\u91CF\u7684\u6807\u51C6\u8F93\u51FA\uFF0C\u4F1A\u5BFC\u81F4 pm2 \u65E5\u5FD7\u8FC7\u5927\uFF1B

min_uptime \u5E94\u7528\u8FD0\u884C\u5C11\u4E8E\u65F6\u95F4\u88AB\u8BA4\u4E3A\u662F\u5F02\u5E38\u542F\u52A8\uFF1B

max_restarts \u6700\u5927\u5F02\u5E38\u91CD\u542F\u6B21\u6570\uFF0C\u5373\u5C0F\u4E8E min_uptime \u8FD0\u884C\u65F6\u95F4\u91CD\u542F\u6B21\u6570\uFF1B

autorestart \u9ED8\u8BA4\u4E3A true, \u53D1\u751F\u5F02\u5E38\u7684\u60C5\u51B5\u4E0B\u81EA\u52A8\u91CD\u542F\uFF1B

cron_restart <span class="token function">crontab</span> \u65F6\u95F4\u683C\u5F0F\u91CD\u542F\u5E94\u7528\uFF0C\u76EE\u524D\u53EA\u652F\u6301 cluster \u6A21\u5F0F\uFF1B

force \u9ED8\u8BA4 false\uFF0C\u5982\u679C true\uFF0C\u53EF\u4EE5\u91CD\u590D\u542F\u52A8\u4E00\u4E2A\u811A\u672C\u3002pm2 \u4E0D\u5EFA\u8BAE\u8FD9\u4E48\u505A\uFF1B

restart_delay \u5F02\u5E38\u91CD\u542F\u60C5\u51B5\u4E0B\uFF0C\u5EF6\u65F6\u91CD\u542F\u65F6\u95F4\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),B=n("strong",null,"\u6CE8\u610F\uFF1A",-1),$=s(" \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u65F6\u9700\u8981\u4EE5"),C=n("code",null,"env_",-1),T=s("\u5F00\u5934\uFF0C\u8BE6\u7EC6\u53C2\u8003\uFF1A"),U=s("https:#pm2.keymetrics.io/docs/usage/environment/"),A=s("\u3002\u4F8B\u5982\u8BBE\u7F6E\u4E86\u73AF\u5883\u53D8\u91CF"),K=n("code",null,"env_production",-1),P=s("\uFF0C\u91C7\u7528 pm2 \u542F\u52A8\u65F6\u5982\u4E0B\uFF1A"),S=n("code",null,"pm2 start ecosystem.config.js --env production",-1),W=l(`<p>\u542F\u52A8\u9879\u76EE\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start ecosystem.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E09\u3001pm2-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001pm2-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u4E09\u3001pm2 \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6240\u6709\u8FDB\u7A0B\u72B6\u6001</span>
pm2 list
<span class="token comment"># \u76D1\u89C6\u6240\u6709\u8FDB\u7A0B</span>
pm2 monit
<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDB\u7A0B\u65E5\u5FD7</span>
pm2 logs
<span class="token comment"># \u663E\u793Aid=0\u7684\u8FDB\u7A0B\u65E5\u5FD7</span>
pm2 logs <span class="token number">0</span>
<span class="token comment"># \u505C\u6B62\u6240\u6709\u8FDB\u7A0B</span>
pm2 stop all
<span class="token comment"># \u91CD\u542F\u6240\u6709\u8FDB\u7A0B</span>
pm2 restart all
<span class="token comment"># 0\u79D2\u505C\u673A\u91CD\u8F7D\u8FDB\u7A0B (\u7528\u4E8E NETWORKED \u8FDB\u7A0B)</span>
pm2 reload all
<span class="token comment"># \u505C\u6B62\u6307\u5B9A\u7684\u8FDB\u7A0B</span>
pm2 stop <span class="token number">0</span>
<span class="token comment"># \u91CD\u542F\u6307\u5B9A\u7684\u8FDB\u7A0B</span>
pm2 restart <span class="token number">0</span>
<span class="token comment"># \u4EA7\u751F init \u811A\u672C \u4FDD\u6301\u8FDB\u7A0B\u6D3B\u7740</span>
pm2 startup
<span class="token comment"># \u8FD0\u884C\u5065\u58EE\u7684 computer API endpoint ([http://localhost:9615](http://localhost:9615/))</span>
pm2 web
<span class="token comment"># \u6740\u6B7B\u6307\u5B9A\u7684\u8FDB\u7A0B</span>
pm2 delete <span class="token number">0</span>
<span class="token comment"># \u6740\u6B7B\u5168\u90E8\u8FDB\u7A0B</span>
pm2 delete all
<span class="token comment"># \u67E5\u770B\u8FDB\u7A0B\u8BE6\u7EC6\u4FE1\u606F</span>
pm2 describe <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function z(F,G){const a=i("ExternalLinkIcon"),t=i("RouterLink");return d(),o("div",null,[p,v,n("p",null,[u,n("a",b,[_,e(a)]),k,h,n("a",g,[f,e(a)]),x,y,n("a",N,[E,e(a)])]),j,n("p",null,[q,w,D,Y,X,H,M,n("a",V,[O,e(a)]),R,I]),L,n("p",null,[B,$,C,T,e(t,{to:"/posts/node/https:#pm2.keymetrics.io/docs/usage/environment/"},{default:r(()=>[U]),_:1}),A,K,P,S]),W])}var Q=c(m,[["render",z],["__file","pm2.html.vue"]]);export{Q as default};
