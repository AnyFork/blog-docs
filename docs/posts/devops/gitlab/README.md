---
title: GitLab、GitLab、GitHub、Gitee对比
date: 2022-6-22 18:53:03
tag:
  - Gitlab
category:
  - 运维
image: https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202206221855008.png
---

&emsp;GitLab 是由 GitLabInc.开发，使用 MIT 许可证的基于网络的 Git 仓库管理工具，且具有 wiki 和 issue 跟踪功能。使用 Git 作为代码管理工具，并在此基础上搭建起来的 web 服务。
<!-- more -->

## 一、GitLab 简介

&emsp;GitLab 是一个用于仓库管理系统的开源项目，使用 Git 作为代码管理工具，并在此基础上搭建起来的 Web 服务。GitLab 由乌克兰程序员 DmitriyZaporozhets 和 ValerySizov 开发，它使用 Ruby 语言写成。后来，一些部分用 Go 语言重写。截止 2018 年 5 月，该公司约有 290 名团队成员，以及 2000 多名开源贡献者。GitLab 被 IBM，Sony，JülichResearchCenter，NASA，Alibaba，Invincea，O’ReillyMedia，Leibniz-Rechenzentrum(LRZ)，CERN，SpaceX 等组织使用。<br>
&emsp;Gitlab 从 2011 年 10 月 GitLab 进行第一次代码提交，到 2021 年 10 月正式陆纳斯达克上市，GitLab 的发展至今已有整整十年。而在过去的发展中，GitLab 在中国市场一直面临着一个问题。众所周知，中国是目前全球最大的软件开发市场之一，GitLab 也拥有着数百万中国用户和诸多知名的中国本土企业用户。然而，在以往，中国用户只能通过 GitLab 经销商和系统集成商网络获取 GitLab 平台的自助管理版本，且无法得到充分的本土技术支持。
所以，为了帮助中国用户更好地使用 GitLab 交付创新，合资公司极狐(GitLab)应运而生，该公司由 GitLab Inc.以技术授权的形式入股，与独家领投红杉宽带跨境数字产业基金，以及高成资本合作设立，由中国管理团队在国内独立运营。在授权方面，极狐(GitLab) 拥有 GitLab 独家且不可撤销的技术和品牌授权，全面服务于中国大陆、香港和澳门的企业和用户，并根据中国市场需求推出特定的软件功能和服务支持。2022 年，极狐(GitLab)正式宣布推出极狐 GitLab SaaS ，为中国用户提供从源代码托管到开发运维的全栈式一体化 DevOps SaaS 平台与企业级专家咨询服务。<br />
&emsp;在产品方面，GitLab 在全球范围内有三个版本：社区版（CE）、企业版（EE）、极狐版 (JH)，极狐 GitLab 是在中国大陆和港澳地区发行的企业级 GitLab 版本，拥有 GitLab 技术和品牌独家授权，基于 GitLab EE 和极狐(GitLab)持有独立知识产权的——JH 代码仓库构建，由极狐(GitLab)公司在国内独立运营。同时，极狐 GitLab 支持私有化部署（self-managed）版本和 SaaS 服务。极狐 GitLab 的企业级订阅许可证、源代码管理、支付系统等均在中国境内管理，受中国法律保护。

## 二、GitLab、GitLab、GitHub、Gitee

&emsp;极狐 GitLab、GitLab、GitHub、Gitee 都是市面上常见的与代码托管有关的平台，但是这四种产品还是有所差异的。

### 1、发展背景

这四个 Giter 的发展历史各不相同，GitHub 历史最长，在 2008 年上线；GitLab 其次，GitLab 在 2011 年上线 ；接下来是 Gitee，在 2013 年推出；最后是极狐 GitLab，成立于 2021 年 3 月 18 日。四种产品的发展简史如下图所示：
![](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202206222015231.png)

### 2、总结对比图

![](https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202206222015511.png)

## 三、GitLab 严重漏洞

&emsp;近日，微步在线旗下微步情报局利用免费社区蜜罐 HFish 捕获到 GitLab 未授权远程命令执行漏洞（CVE-2021-22205）在野利用，攻击成功后攻击者会植入挖矿木马进行挖矿。该漏洞无需进行身份验证即可进利用，危害极大。在 2021 年“双 11”前夜， HFish 蜜罐与 OneEDR 联合行动，捕获并处置了一起真实利用 GitLab 未授权远程命令执行漏洞（CVE-2021-22205）在野漏洞进行挖矿的攻击。根据部署在互联网的 GitLab 服务模拟蜜罐显示，该攻击发生在 11 月 10 日晚上 21 点，某国内 IP 经过简单扫描踩点后，发送可疑 HTTP POST 请求，经过分析确认该漏洞为利用 ExifTool 解析图片异常导致命令执行的 CVE-2021-22205，并提取行为特征推送给 OneEDR 客户。详细情况参考：<https://blog.csdn.net/HFish2021/article/details/122050063>。

&emsp;近期，我们公司的 gitlab 服务器也被注入挖矿程序，经过排查 GitLab 版本处理漏洞版本范围，因此不得不进行版本升级。目前影响的版本范围如下：
11.9 <= GitLab（CE/EE）< 13.8.8
13.9 <= GitLab（CE/EE）< 13.9.6
13.10 <= GitLab（CE/EE）< 13.10.3

## 四、GitLab 相关链接

GitLab 官网：<https://about.gitlab.com/>  
GitLab 清华镜像源：<https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/>
