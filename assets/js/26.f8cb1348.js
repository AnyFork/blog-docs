(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{495:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v(" nohup 是不挂断的意思( no hang up)。如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用 nohup 命令。该命令忽略所有挂（SIGHUP）信号，可以在你退出帐户/关闭终端之后继续运行相应的进程。&是指在后台运行，但当用户推出(挂起)的时候，命令自动也跟着退出. nohup 与&结合起来，可以实现不挂断的后台运行。")]),s._v(" "),t("Boxx"),s._v(" "),t("h2",{attrs:{id:"一、nohup-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、nohup-命令"}},[s._v("#")]),s._v(" 一、nohup 命令")]),s._v(" "),t("p",[t("strong",[s._v("1、nohup 命令格式："),t("code",[s._v("nohup Command [ Arg … ] [ & ]")]),s._v(", Command：启动对象命令,可以跟该命令需要的各种参数。")])]),s._v(" "),t("p",[s._v(" nohup 命令运行由 Command 参数和任何相关的 Arg 参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示“and”的符号）到命令的尾部。带   的命令行，即使 terminal 关闭，或者电脑死机程序依然运行（前提是你把程序递交到服务器上)。"),t("br"),s._v(" "),t("strong",[s._v("2、实现屏幕输出记录到日志文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" yourcommand "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果不指定重定向，则日志默认输出到当前目录下 nohup.out 文件中。"),t("br"),s._v("\n操作系统中有三个常用的流：")]),s._v(" "),t("ul",[t("li",[s._v("0：stdin 标准输入, 1：代表 stdout 标准输出, 2：代表 stderr 标准错误。")])]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v("一般当我们用 > console.txt，实际是 1>console.txt 的省略用法；< console.txt ，实际是 0 < console.txt 的省略用法。")])],1),s._v(" "),t("ul",[t("li",[s._v("2>&1 作用：")])]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v("把标准错误（2）重定向到标准输出中（1），而标准输出又导入文件 output 里面，所以结果是标准错误和标准输出都导入文件 output 里面了。 至于为什么需要将标准错误重定向到标准输出的原因，那就归结为标准错误没有缓冲区，而 stdout 有。")])],1),s._v(" "),t("p",[s._v("最后谈一下/dev/null 文件的作用，这是一个无底洞，任何东西都可以定向到这里，但是却无法打开。 所以一般很大的 stdou 和 stderr 当你不关心的时候可以利用 stdout 和 stderr 定向到这里>./command.sh >/dev/null 2>&1，代表不输出日志。")]),s._v(" "),t("p",[t("strong",[s._v("3、如果希望将日志输出到别的文件中，可以增加一个文件路径参数。如下：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" yourcommand "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myout.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中 myout.log 是保存输出的文件名称。"),t("br"),s._v(" "),t("strong",[s._v("4、实时监测日志输出内容命令")]),t("br"),s._v("\n tail 命令是 nohup 命令的好搭档。配合-f 参数，可以实时监视向日志文件增加的信息。tail -f 等同于–follow=descriptor，根据文件描述符进行追踪，当文件改名或被删除，追踪停止。tail -F 等同于–follow=name --retry，根据文件名进行追踪，并保持重试，即该文件被删除或改名后，如果再次创建相同的文件名，会继续追踪。"),t("br"),s._v("\n tailf 等同于 tail -f -n 10，与 tail -f 不同的是，如果文件不增长，它不会去访问磁盘文件，所以 tailf 特别适合那些便携机上跟踪日志文件，因为它减少了磁盘访问，可以省电。")]),s._v(" "),t("p",[t("strong",[s._v("5、标准输出，日志文件覆盖")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" output.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("以上两句等价。将命令的 stdout 重定向至文件，stdout 将不会出现在终端。如果文件已经存在，将会覆盖。")]),s._v(" "),t("p",[t("strong",[s._v("6、标准输出，日志文件追加")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" output.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">>")]),s._v(" output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("以上两句等价。将命令的 stdout 重定向至文件，stdout 将不会出现在终端。如果文件已经存在，新数据将会添加至文件末尾。")]),s._v(" "),t("p",[t("strong",[s._v("7、标准错误输出，日志文件覆盖")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将命令的 stderr 重定向至文件，stderr 将不会出现在终端。如果文件已经存在，将会覆盖。")]),s._v(" "),t("p",[t("strong",[s._v("8、标准错误输出，日志文件追加")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">>")]),s._v(" output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将命令的 stderr 重定向至文件，stderr 将不会出现在终端。如果文件已经存在，新数据将会添加至文件末尾。")]),s._v(" "),t("p",[t("strong",[s._v("9、标准输出+标准错误输出，日志文件覆盖")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" output.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("output.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("以上两句等价。将命令的 stdout 与 stderr 都重定向至文件，此时终端将没有任何输出。如果文件已经存在，将会覆盖。")]),s._v(" "),t("p",[t("strong",[s._v("10、标准输出+标准错误输出，日志文件追加")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>>")]),s._v(" output.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("output.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("将命令的 stdout 与 stderr 都重定向至文件，此时终端将没有任何输出。如果文件已经存在，新数据将会添加至文件末尾。")]),s._v(" "),t("h2",{attrs:{id:"二、实例展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、实例展示"}},[s._v("#")]),s._v(" 二、实例展示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#代表不输出,/dev/null像是个黑洞，吸纳所有")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标准输出,以下两句等价")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/dir1/dir2/my1.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" /home/dir1/dir2/my1.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标准错误输出，这个在当前目录下会产生nohup.out（标准输出），然后在/home/dir1/dir2下产生my1.log（标准错误输出）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /home/dir1/dir2/my1.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准输出+标准错误输出，将标准错误 2 重定向到标准输出 &1 ，标准输出 &1 再被重定向输入到 my1.log 文件中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/dir1/dir2/my1.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /home/dir1/dir2/my1.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("Reward")],1)}),[],!1,null,null,null);t.default=r.exports}}]);