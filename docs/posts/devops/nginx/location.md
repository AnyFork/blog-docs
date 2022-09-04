---
title: Nginx location匹配规则
date: 2022-03-14 11:29:50
tag:
  - nginx
category:
  - nginx
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201031629.jpg
---

&emsp;nginx 的 location 指令的作用是根据用户请求的 URI 来执行不同的应用，URI 就是根据用户请求到的网址 URL 进行匹配，匹配成功了进行相关的操作。一个 location 可以用 prefix string(前缀字符串)定义，也可以通过 regular expression（正则表达式来定义）。通俗的说也就是：我们可以通过使用不同的前缀，表达不同的含义，对于不同的前缀可以分为两大类：普通 location 和正则 location

<!-- more -->

## location

&emsp;对于不同的前缀可以分为两大类：普通 location 和正则 location。符号：”~”表示 uri 包含正则，并且区分大小写。符号：“~\*”表示 uri 包含正则，但不区分大小写。Nginx 服务器会首先会检查多个 location 中是否有普通的 uri 匹配，如果有多个匹配，会先记住匹配度最高的那个。然后再检查正则匹配，这里切记正则匹配是有顺序的，从上到下依次匹配，一旦匹配成功，则结束检查，并就会使用这个 location 块处理此请求。如果正则匹配全部失败，就会使用刚才记录普通 uri 匹配度最高的那个 location 块处理此请求。当普通匹配的最长前缀匹配有符号“^~”的时候，就不会在匹配正则。直接使用当前匹配的这个 location 块处理此请求。使用符号“=”修饰符可以定义一个精确匹配的 URI 和位置，如果找到了一个精确的匹配，则搜索终止，例如，如果一个”/”请求频繁发生，定义“location =/”将加快这些请求的处理，一旦精确匹配只有就结束，这样的 location 显然不能包含嵌套 location。

这里我们说一下 location / {} 和 location =/ {}的区别：

“location / {}”是普通的最大前缀匹配，任何的 uri 肯定是以“/”开头，所以 location / {} 可以说是默认匹配，当其他都不匹配了，则匹配默认匹配。  
根据上述官网内容进行总结
a. ”=”用于普通 uri 前，要求精确匹配，如果匹配成功，则停止搜索并用当前 location 处理此请求

b. ”~” 表示 uri 包含正则，并且区分大小写

c. “~\*”表示 uri 包含正则，但不区分大小写

d. ”^~”表示在普通 uri 前要求 Nginx 服务器找到普通 uri 匹配度最高的那个 location 后，立即处理此请求，并不再进行正则匹配。

e. ”^~”和“=”都可以阻止继续匹配正则 location 两者的区别：“^~”依然遵守最大前缀原则，然后“=”是需要严格匹配。

注意：如果是普通 uri 匹配，这个时候是没有顺序的，但是正则匹配则是有顺序的，是从上到下依次匹配，一旦有匹配成功，则停止后面的匹配。

## location 匹配规则顺序图

![](https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203141144181.png)

文章参考来源：<https://www.cnblogs.com/zhaof/p/5945576.html>