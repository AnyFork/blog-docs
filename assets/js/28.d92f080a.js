(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{669:function(e,s,a){"use strict";a.r(s);var r=a(3),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v(" Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 操作系统的机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。简化配置,镜像安装，容器的创建非常的方便，同时可以弹性扩容。")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[e._v("温馨提示")]),a("p",[e._v("Docker 要求 CentOS7 系统的内核版本在 3.10 以上，否则无法安装 Docker。小伙伴们可以通过"),a("code",[e._v("uname -a")]),e._v("查看自己 centos 内核版本，如果低于 3.10，需要重新安装 centos 镜像。以下是 docker 相关网址："),a("br"),e._v("docker 官网："),a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.docker.com/"),a("OutboundLink")],1),a("br"),e._v("docker 文档官网："),a("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/"),a("OutboundLink")],1),a("br"),e._v("安装文档："),a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/install/centos/"),a("OutboundLink")],1)])]),a("h2",{attrs:{id:"一、docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-安装"}},[e._v("#")]),e._v(" 一、docker 安装")]),e._v(" "),a("h3",{attrs:{id:"_1、卸载旧的docker引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、卸载旧的docker引擎"}},[e._v("#")]),e._v(" 1、卸载旧的Docker引擎")]),e._v(" "),a("p",[e._v("如果 centos 上以前安装过旧版的 docker,需要按照以下步骤先删除旧的版本，再进行安装:"),a("br"),e._v("\n① 先删除依赖包")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yum remove docker-ce docker-cd-cli containerd.io\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" docker-client docker-client-latest docker-common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\ndocker-latest docker-latest-logrotate docker-logrotate docker-engine\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("② 删除资源。")]),e._v(" "),a("p",[e._v("主机上的映像、容器、卷或自定义配置文件不会自动删除，必须手动删除任何已编辑的配置文件。Docker 默认工作路径/var/lib/docker")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /var/lib/docker\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /var/lib/containerd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2、使用存储库安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用存储库安装docker"}},[e._v("#")]),e._v(" 2、使用存储库安装docker")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[e._v("使用 Docker 的存储库并安装，便于安装和升级任务；下载 RPM 包并手动安装并管理，完全手动升级；")])]),a("p",[e._v("① 安装必要的系统工具")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" yum-utils\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("② 设置软件源信息")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置阿里云镜像，安装docker速度快")]),e._v("\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("③ 更新并安装 docker-ce(ce 社区版，ee 企业版)")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新索引")]),e._v("\nyum makecache fast\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("④ 如需指定 docker 引擎的版本，通过以下命令获取可用版本")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yum list docker-ce --showduplicates "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sort")]),e._v(" -r\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("⑤ 安装指定版本的 docker")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-ce-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("版本号"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker-ce-cli-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("版本号"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" containerd.io\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("⑥ 启动 docker")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("⑦ 开机自启动")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("⑧hello-world 测试")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 运行容器")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run hello-world\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看镜像")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" images\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h2",{attrs:{id:"二、docker-常见使用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-常见使用命令"}},[e._v("#")]),e._v(" 二、docker 常见使用命令")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[e._v("docker 官网命令参考文档："),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/reference/builder/"),a("OutboundLink")],1)])]),a("p",[e._v("1、启动docker引擎：systemctl start docker")]),e._v(" "),a("p",[e._v("2、docker设置开机自启动：systemctl enable docker")]),e._v(" "),a("p",[e._v("3、docker版本信息查询：docker version")]),e._v(" "),a("p",[e._v("4、docker所有的容器实例：docker ps -a")]),e._v(" "),a("p",[e._v("5、docker正在运行的容器实例：docker ps")]),e._v(" "),a("p",[e._v("6、docker停止运行的容器实例：docker stop 容器ID/容器名称")]),e._v(" "),a("p",[e._v("7、docker删除停止的容器实例：docker rm 容器ID/容器名称")]),e._v(" "),a("p",[e._v("8、docker强制删除运行的容器实例：docker rm -f 容器ID/容器名称")]),e._v(" "),a("p",[e._v("9、docker删除停止的容器实例镜像：docker rmi 镜像ID/镜像名称")]),e._v(" "),a("p",[e._v("10、docker强制删除镜像：docker rmi -f 镜像ID/镜像名称")]),e._v(" "),a("p",[e._v("11、docker删除所用容器: docker rm -f "),a("code",[e._v("docker ps -a -q")])]),e._v(" "),a("p",[e._v("12、docker删除所有镜像：docker rmi -f "),a("code",[e._v("docker images -q")])]),e._v(" "),a("Reward")],1)}),[],!1,null,null,null);s.default=t.exports}}]);