---
title: Nginx location匹配规则
date: 2022-03-14 11:29:50
tags:
  - nginx
categories:
  - 运维
omment: true
subSidebar: true
sidebar: true
publish: false
---

<!-- more -->

:::tip
nginx的location指令的作用是根据用户请求的URI来执行不同的应用，URI就是根据用户请求到的网址URL进行匹配，匹配成功了进行相关的操作。一个location可以用prefix string(前缀字符串)定义，也可以通过regular expression（正则表达式来定义）。通俗的说也就是：我们可以通过使用不同的前缀，表达不同的含义，对于不同的前缀可以分为两大类：普通location和正则location
:::

## location
&emsp;对于不同的前缀可以分为两大类：普通location和正则location。符号：”~”表示uri包含正则，并且区分大小写。符号：“~*”表示uri包含正则，但不区分大小写。Nginx服务器会首先会检查多个location中是否有普通的uri匹配，如果有多个匹配，会先记住匹配度最高的那个。然后再检查正则匹配，这里切记正则匹配是有顺序的，从上到下依次匹配，一旦匹配成功，则结束检查，并就会使用这个location块处理此请求。如果正则匹配全部失败，就会使用刚才记录普通uri匹配度最高的那个location块处理此请求。当普通匹配的最长前缀匹配有符号“^~”的时候，就不会在匹配正则。直接使用当前匹配的这个location块处理此请求。使用符号“=”修饰符可以定义一个精确匹配的URI和位置，如果找到了一个精确的匹配，则搜索终止，例如，如果一个”/”请求频繁发生，定义“location =/”将加快这些请求的处理，一旦精确匹配只有就结束，这样的location显然不能包含嵌套location。

这里我们说一下location / {} 和location =/ {}的区别：

“location / {}”是普通的最大前缀匹配，任何的uri肯定是以“/”开头，所以location / {} 可以说是默认匹配，当其他都不匹配了，则匹配默认匹配。  
根据上述官网内容进行总结
a. ”=”用于普通uri前，要求精确匹配，如果匹配成功，则停止搜索并用当前location处理此请求

b. ”~” 表示uri包含正则，并且区分大小写

c. “~*”表示uri包含正则，但不区分大小写

d. ”^~”表示在普通uri前要求Nginx服务器找到普通uri匹配度最高的那个location后，立即处理此请求，并不再进行正则匹配。

e. ”^~”和“=”都可以阻止继续匹配正则location两者的区别：“^~”依然遵守最大前缀原则，然后“=”是需要严格匹配。

注意：如果是普通uri 匹配，这个时候是没有顺序的，但是正则匹配则是有顺序的，是从上到下依次匹配，一旦有匹配成功，则停止后面的匹配。

## location匹配规则顺序图
![](https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203141144181.png)

文章参考来源：<https://www.cnblogs.com/zhaof/p/5945576.html>


<Reward/>
