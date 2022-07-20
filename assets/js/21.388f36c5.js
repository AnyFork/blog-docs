(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{490:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v(" 日常工作中，nginx 使用非常频繁。今日抽空，顺便整理一下 linux 环境下 nginx 常用的 3 种安装方式(yum,源码编译，docker)，以备日后使用，减少不必要的错误。docker 方式比较简单，但一定要注意文件目录挂载配置，配置不正确，即使容器启动起来，nginx 也无法运行。")]),s._v(" "),n("h2",{attrs:{id:"一-yum-安装-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-yum-安装-nginx"}},[s._v("#")]),s._v(" 一 yum 安装 nginx")]),s._v(" "),n("p",[s._v("yum 安装 nginx 操作简单，无需编译源码，还会生成 nginx 服务。具体步骤如下：")]),s._v(" "),n("h3",{attrs:{id:"_1-更新-yum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新-yum"}},[s._v("#")]),s._v(" 1 更新 yum")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum update -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-安装-nginx-源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-nginx-源"}},[s._v("#")]),s._v(" 2 安装 nginx 源")]),s._v(" "),n("p",[s._v("可以通过："),n("a",{attrs:{href:"http://nginx.org/packages/centos/7/x86_64/RPMS/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nginx.org/packages/centos/7/x86_64/RPMS/"),n("OutboundLink")],1),s._v(",查找自己想安装的版本。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装nginx源")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.20.2-1.el7.ngx.x86_64.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看nginx信息")]),s._v("\nyum info nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_3-安装-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-nginx"}},[s._v("#")]),s._v(" 3 安装 nginx")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-开放-80-端口或者关闭防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-开放-80-端口或者关闭防火墙"}},[s._v("#")]),s._v(" 4 开放 80 端口或者关闭防火墙")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发80端口")]),s._v("\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp --permanent\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载")]),s._v("\nfirewall-cmd --reload\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或直接关闭防火墙")]),s._v("\nsystemctl stop firewalld\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_5-启动-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-nginx"}},[s._v("#")]),s._v(" 5 启动 nginx")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nginx")]),s._v("\nsystemctl start nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_6-开机自启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-开机自启动"}},[s._v("#")]),s._v(" 6 开机自启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_7-查看-nginx-版本和编译参数信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看-nginx-版本和编译参数信息"}},[s._v("#")]),s._v(" 7 查看 nginx 版本和编译参数信息")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx版本信息")]),s._v("\nnginx -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx编译参数信息,包括安装位置以及各种配置文件信息。")]),s._v("\nnginx -V\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("nginx 相关配置信息：")]),s._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AnyFork/blog-images/markdown/202203181052935.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("yum 方式安装的默认地址和配置的默认地址")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum方式安装后默认配置文件的路径")]),s._v("\n/etc/nginx/nginx.conf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx网站默认存放目录")]),s._v("\n/usr/share/nginx/html\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网站默认主页路径")]),s._v("\n/usr/share/nginx/html/index.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"二-源码编译安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-源码编译安装"}},[s._v("#")]),s._v(" 二 源码编译安装")]),s._v(" "),n("h3",{attrs:{id:"_1、下载-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载-nginx"}},[s._v("#")]),s._v(" 1、下载 Nginx")]),s._v(" "),n("p",[s._v(" Nginx 官网地址："),n("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/download.html"),n("OutboundLink")],1),s._v("，选择对应的 linux 版本，通过"),n("code",[s._v("wget")]),s._v("进行下载。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.20.1.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("注意")]),s._v("：如果"),n("code",[s._v("wget")]),s._v("没有安装，请执行"),n("code",[s._v("yum -y install wget")]),s._v(" 进行安装。")]),s._v(" "),n("h3",{attrs:{id:"_2、解压"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、解压"}},[s._v("#")]),s._v(" 2、解压")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("tar")]),s._v("命令进行解压")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zvxf nginx-1.20.1.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.12.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_3、译环境安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、译环境安装"}},[s._v("#")]),s._v(" 3、译环境安装")]),s._v(" "),n("p",[n("strong",[s._v("gcc 安装")]),s._v("：安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gcc 安装")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("PCRE pcre-devel 安装")]),s._v("：PCRE(Perl Compatible Regular Expressions) 是一个 Perl 库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库，nginx 也需要此库。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y pcre pcre-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("zlib 安装")]),s._v("：zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y zlib zlib-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("OpenSSL 安装")]),s._v("：OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。\nnginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），所以需要在 Centos 安装 OpenSSL 库。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y openssl openssl-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4、预编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、预编译"}},[s._v("#")]),s._v(" 4、预编译")]),s._v(" "),n("p",[s._v("进入解压后的目录 nginx-1.20.1 进行预编译。注意：--prefix 是指定安装目录，默认"),n("code",[s._v("/usr/local/nginx")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nginx --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_5、编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、编译"}},[s._v("#")]),s._v(" 5、编译")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("make")]),s._v("命令进行源码编译；如果"),n("code",[s._v("make")]),s._v("命令不存在，通过"),n("code",[s._v("yum -y install make autoconf")]),s._v("安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_6、安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、安装"}},[s._v("#")]),s._v(" 6、安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装完成后进入"),n("code",[s._v("/opt/nginx/sbin")]),s._v("目录，然后启动"),n("code",[s._v("./nginx")]),s._v(" 这条命令成功没有输出。通过一下命令查看"),n("code",[s._v("nginx")]),s._v("是否启动成功：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果出现"),n("code",[s._v("nginx")]),s._v("进程，则表示启动成功\n"),n("img",{attrs:{src:"/blog-docs/images/markdown/nginx.png",alt:"nginx"}})]),s._v(" "),n("p",[s._v("打开浏览器，输入"),n("code",[s._v("nginx")]),s._v("地址，默认监听 80 端口，如下图：\n"),n("img",{attrs:{src:"/blog-docs/images/markdown/nginxweb.png",alt:"nginxWeb"}})]),s._v(" "),n("p",[s._v("如果出现访问不了，尝试关闭防火墙"),n("code",[s._v("systemctl stop firewalld.service")]),s._v("或者永久关闭防火墙"),n("code",[s._v("systemctl disable firewalld.service")])]),s._v(" "),n("h3",{attrs:{id:"_7、创建-linux-全局软连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、创建-linux-全局软连接"}},[s._v("#")]),s._v(" 7、创建 linux 全局软连接")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("通过软链接的方式设置 nginx 为全局变量，就可以实现全局任何地方通过 nginx 相关命令操作 nginx 不用到 nginx 安装目录或者 nginx 全路径进行命令执行，使操作变得更加简单。")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/nginx/sbin/nginx  /usr/bin/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("上面的：/opt/nginx/sbin/nginx 为我们的 nginx 安装目录，若你的安装目录和我的不一样，自行修改为你的安装目录便可，建立软链接后，我们便可以在任意目录执行 nginx 命令了")])]),s._v(" "),n("h3",{attrs:{id:"_8、nginx-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、nginx-命令"}},[s._v("#")]),s._v(" 8、nginx 命令")]),s._v(" "),n("p",[s._v("首先需要进入 nginx 安装目录："),n("code",[s._v("cd /opt/nginx/sbin/")])]),s._v(" "),n("p",[n("strong",[s._v("启动命令")]),s._v("："),n("code",[s._v("./nginx")])]),s._v(" "),n("p",[n("strong",[s._v("退出命令")]),s._v(": "),n("code",[s._v("./nginx -s quit")]),s._v("，此方式停止步骤是待 nginx 进程处理任务完毕进行停止。")]),s._v(" "),n("p",[n("strong",[s._v("停止命令")]),s._v("："),n("code",[s._v("./nginx -s stop")]),s._v("，此方式相当于先查出 nginx 进程 id 再使用 kill 命令强制杀掉进程。")]),s._v(" "),n("p",[n("strong",[s._v("单纯重启命令")]),s._v("：先停止再启动(推荐)，对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./nginx -s quit\n./nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("重新加载配置文件")]),s._v("：当 nginx 的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用 ./nginx -s reload 不用先停止 nginx 再启动 nginx, 即可将配置信息在 nginx 中生效，如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("指定配置文件启动")]),s._v(": /opt/nginx/sbin/nginx -c /opt/nginx/conf/nginx.conf")]),s._v(" "),n("p",[n("strong",[s._v("指定配置文件重启")]),s._v(": /opt/nginx/sbin/nginx -s reload -c /opt/nginx/conf/nginx.conf")]),s._v(" "),n("p",[n("strong",[s._v("测试 nginx 配置文件是否正确")]),s._v("：/nginx -t -c /opt/nginx/conf/nginx.conf")]),s._v(" "),n("p",[n("strong",[s._v("开启自启动")])]),s._v(" "),n("p",[s._v("1、在/etc/rc.d/rc.local 中添加 nginx 启动命令行：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/rc.d/rc.local\n/opt/nginx/sbin/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2、授权："),n("code",[s._v("chmod +x /etc/rc.d/rc.local")])]),s._v(" "),n("p",[s._v("3、重启："),n("code",[s._v("reboot")]),s._v(",通过命令"),n("code",[s._v("ps -ef | grep nginx")]),s._v("查看 nginx 是否开机自启动成功")]),s._v(" "),n("p",[n("strong",[s._v("上面这种是最简单的 nginx 开机自启动的，推荐大家使用")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"三-docker-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-docker-安装"}},[s._v("#")]),s._v(" 三 Docker 安装")]),s._v(" "),n("h3",{attrs:{id:"_1、拉取-nginx-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、拉取-nginx-镜像"}},[s._v("#")]),s._v(" 1、拉取 nginx 镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2、启动-nginx-容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动-nginx-容器"}},[s._v("#")]),s._v(" 2、启动 nginx 容器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name nginx -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -d nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("至此一个简单的 nginx 容器就启动成功了，下面配置挂载目录。")]),s._v(" "),n("h3",{attrs:{id:"_3、创建挂载目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建挂载目录"}},[s._v("#")]),s._v(" 3、创建挂载目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/nginx\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/nginx/html\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/nginx/conf.d\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/nginx/logs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_4、复制容器中挂载文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、复制容器中挂载文件"}},[s._v("#")]),s._v(" 4、复制容器中挂载文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 67e:/etc/nginx/nginx.conf /opt/nginx/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 67e:/etc/nginx/conf.d /opt/nginx/conf.d/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 67e:/usr/share/nginx/html/ /opt/nginx/html/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 67e:/var/log/nginx/ /opt/nginx/logs/\n注：docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 67e 中的 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"67e"')]),s._v(" 为容器ID前缀，只要唯一就好了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_5、删除旧的-nginx-容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、删除旧的-nginx-容器"}},[s._v("#")]),s._v(" 5、删除旧的 nginx 容器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 67e\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 67e\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者强制删除容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 67e\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_6、创建-nginx-挂载目录容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、创建-nginx-挂载目录容器"}},[s._v("#")]),s._v(" 6、创建 nginx 挂载目录容器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name nginx -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 -v /opt/nginx/nginx.conf:/etc/nginx/nginx.conf "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/html:/usr/share/nginx/html -v /opt/nginx/logs:/var/log/nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/conf.d:/etc/nginx/conf.d --privileged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("--privileged=true")]),s._v(": 使用该参数，container 内的 root 拥有真正的 root 权限。否则，container 内的 root 只是外部的一个普通用户权限。privileged 启动的容器，可以看到很多 host 上的设备，并且可以执行 mount。甚至允许你在 docker 容器中启动 docker 容器"),n("br"),s._v(" "),n("code",[s._v("--restart=always")]),s._v(": 当 Docker 重启时，容器自动启动。"),n("br"),s._v("\n修改运行中的容器自启动："),n("code",[s._v("docker container update --restart=always 容器名字")]),n("br"),s._v("\n构建容器自启动：启动命令额外加上"),n("code",[s._v("--restart=always")])]),s._v(" "),n("h3",{attrs:{id:"_7、查看-nginx-容器运行情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、查看-nginx-容器运行情况"}},[s._v("#")]),s._v(" 7、查看 nginx 容器运行情况")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令查看当前运行的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过浏览器访问80端口，查看是否显示正常页面")]),s._v("\nhttp:ip/\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果浏览器访问不了，应该是防火墙的原因。可以通过命令"),n("code",[s._v("systemctl stop firewalld")]),s._v("关闭防火墙或者开通对应的端口"),n("code",[s._v("80")]),s._v("和"),n("code",[s._v("443")]),s._v("，端口开通命令参考："),n("RouterLink",{attrs:{to:"/others/linux/basecommand.html#_6-centos-端口开通"}},[s._v("linux 常用指令")])],1),s._v(" "),n("h2",{attrs:{id:"四-nginx-安装第三方模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-nginx-安装第三方模块"}},[s._v("#")]),s._v(" 四 nginx 安装第三方模块")]),s._v(" "),n("p",[s._v(" nginx 文件非常小但是性能非常的高效,这方面完胜 apache,nginx 文件小的一个原因之一是 nginx 自带的功能相对较少,好在 nginx 允许第三方模块,第三方模块使得 nginx 越发的强大. 在安装模块方面,nginx 显得没有 apache 安装模块方便，当然也没有 php 安装扩展方便.在原生的 nginx,他不可以动态加载模块,所以当你安装第三方模块的时候需要覆盖 nginx 文件.接下来看看如何安装 nginx 第三模块吧。")]),s._v(" "),n("p",[s._v("nginx 第三方模块安装方法："),n("code",[s._v("./configure --prefix=/你的安装目录 --add-module=/第三方模块路径")]),s._v("。下面以"),n("code",[s._v("nginx-upsync-module")]),s._v("第三方模块为例子。")]),s._v(" "),n("ul",[n("li",[s._v("如果第一次安装 nginx 并安装第三方模块：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入源码文件目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.19\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进行预编译")]),s._v("\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nginx --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module    --with-pcre --add-module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/nginx-upsync-module-master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("如果已经安装 nginx 并安装第三方模块：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果没有已安装好的nginx源码目录，需要从nginx官网下载相同版本的源码，在源码基础上重新安装nginx,进入源码文件目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.19\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进行预编译")]),s._v("\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nginx  --with-http_ssl_module    --with-http_ssl_module   --with-http_flv_module  --with-http_stub_status_module  --with-http_gzip_static_module   --with-http_realip_module    --with-pcre --add-module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/nginx-upsync-module-master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将编译好的文件覆盖原来的nginx文件，在nginx源码目录下的objs文件在")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" objs/nginx /opt/nginx/sbin/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("总结,安装 nginx 安装第三方模块实际上是使用--add-module 重新安装一次 nginx，不要 make install 而是直接把编译目录下 objs/nginx 文件直接覆盖老的 nginx 文件。如果你需要安装多个 nginx 第三方模块,你只需要多指定几个相应的--add-module 即可。注意：重新编译的时候，记得一定要把以前编译过的模块一同加到 configure 参数里面。")]),s._v(" "),n("p",[s._v("nginx 提供了非常多的第三方模块："),n("a",{attrs:{href:"https://www.nginx.com/resources/wiki/modules/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.nginx.com/resources/wiki/modules/"),n("OutboundLink")],1)]),s._v(" "),n("Reward")],1)}),[],!1,null,null,null);n.default=e.exports}}]);