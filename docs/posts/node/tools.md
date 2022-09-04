---
title: NodeJs 常用的工具和方法
date: 2022-04-19 16:31:16
tag:
  - Node
category:
  - Node
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207200955471.jpg
---

&emsp;收集一些NodeJs中经常使用到的一些工具类或者方法，方便以后使用时避坑。

<!-- more -->

## 一、JS、NodeJs 斜杠"/"或反斜杠"\"替换或转换

&emsp;JS、NodeJs 环境下我们可以通过`replace`对字符串进行替换或转换，但有个缺点只能替换或转换第一个目标字符，JS 可以通过`replaceAll`进行全部替换，NodeJs 环境下没有`replaceAll`方法。因此最有效的方法就是通过正则表达式进行替换或转换。

1、斜杠转反斜杠、斜杠替换

```bash
#---------- 斜杠转反斜杠 Slash to backslash --------
let slash = 'C:/Users/JasonSong/成长的小猪/NodeJs';

#方法1：
let result = slash.replace(/\//g, '\\');
console.log('[Option 1] slash: ', result);

#方法2：
result = String.raw`${slash}`.split('/').join('\\');
console.log('[Option 2] slash: ', result);
```

2、反斜杠转斜杠、反斜杠替换

```bash
#---------- 反斜杠转斜杠 Backslash to slash --------
let backslash = 'C:\\Users\\JasonSong\\成长的小猪\\NodeJs';

#方法1：
result = backslash.replace(/\\/g,"/");
console.log('[Option 1] backslash: ', result);

#方法2：
result = String.raw`${backslash}`.split('\\').join('/');
console.log('[Option 2] backslash: ', result);
```
