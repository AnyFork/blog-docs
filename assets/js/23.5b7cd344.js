(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{492:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v(" Nginx 日志对于统计、系统服务排错很有用。Nginx 日志主要分为两种：access_log(访问日志)和 error_log(错误日志)。通过访问日志我们可以得到用户的 IP 地址、浏览器的信息，请求的处理时间等信息。错误日志记录了访问出错的信息，可以帮助我们定位错误的原因。本文将详细描述一下如何配置 Nginx 日志。")]),s._v(" "),a("Boxx"),s._v(" "),a("h2",{attrs:{id:"设置-access-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-access-log"}},[s._v("#")]),s._v(" 设置 access_log")]),s._v(" "),a("p",[s._v(" 访问日志主要记录客户端的请求。客户端向 Nginx 服务器发起的每一次请求都记录在这里。客户端 IP，浏览器信息，referer，请求处理时间，请求 URL 等都可以在访问日志中得到。当然具体要记录哪些信息，你可以通过 log_format 指令定义。")]),s._v(" "),a("p",[s._v("语法如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置访问日志")]),s._v("\naccess_log path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("buffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gzip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flush"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("if"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭访问日志")]),s._v("\naccess_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("path 指定日志的存放位置。")]),s._v(" "),a("li",[s._v("format 指定日志的格式。默认使用预定义的 combined。")]),s._v(" "),a("li",[s._v("buffer 用来指定日志写入时的缓存大小。默认是 64k。")]),s._v(" "),a("li",[s._v("gzip 日志写入前先进行压缩。压缩率可以指定，从 1 到 9 数值越大压缩比越高，同时压缩的速度也越慢。默认是 1。")]),s._v(" "),a("li",[s._v("flush 设置缓存的有效时间。如果超过 flush 指定的时间，缓存中的内容将被清空。")]),s._v(" "),a("li",[s._v("if 条件判断。如果指定的条件计算为 0 或空字符串，那么该请求不会写入日志。")])]),s._v(" "),a("p",[s._v("另外，还有一个特殊的值 off。如果指定了该值，当前作用域下的所有的请求日志都被关闭。"),a("br"),s._v("\n作用域：可以应用 access_log 指令的作用域分别有 http，server，location，limit_except。也就是说，在这几个作用域外使用该指令，Nginx 会报错。"),a("br"),s._v("\n基本用法：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#该例子指定日志的写入路径为/var/logs/nginx-access.log，日志格式使用默认的combined。")]),s._v("\naccess_log /var/logs/nginx-access.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#该例子指定日志的写入路径为/var/logs/nginx-access.log，日志格式使用默认的combined，指定日志的缓存大小为32k，日志写入前启用gzip进行压缩，压缩比使用默认值1，缓存数据有效时间为1分钟。")]),s._v("\naccess_log /var/logs/nginx-access.log "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("buffer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("32k "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flush")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"使用-log-format-自定义日志格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-log-format-自定义日志格式"}},[s._v("#")]),s._v(" 使用 log_format 自定义日志格式")]),s._v(" "),a("p",[s._v("Nginx 预定义了名为 combined 日志格式，如果没有明确指定日志格式默认使用该格式：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_format combined "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] '")]),s._v("'"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('"')]),s._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果不想使用 Nginx 预定义的格式，可以通过 log_format 指令来自定义："),a("code",[s._v("log_format name [escape=default|json] string ...;")])]),s._v(" "),a("ul",[a("li",[s._v("name 格式名称。在 access_log 指令中引用。")]),s._v(" "),a("li",[s._v("escape 设置变量中的字符编码方式是 json 还是 default，默认是 default。")]),s._v(" "),a("li",[s._v("string 要定义的日志格式内容。该参数可以有多个。参数中可以使用 Nginx 变量。")])]),s._v(" "),a("p",[s._v("下面演示一下自定义日志格式的使用:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log /var/logs/nginx-access.log main\nlog_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"设置-error-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-error-log"}},[s._v("#")]),s._v(" 设置 error_log")]),s._v(" "),a("p",[s._v("错误日志在 Nginx 中是通过 error_log 指令实现的。该指令记录服务器和请求处理过程中的错误信息。配置错误日志文件的路径和日志级别：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("error_log "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault:\nerror_log logs/error.log error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第一个参数指定日志的写入位置。")]),s._v(" "),a("p",[s._v("第二个参数指定日志的级别。level 可以是 debug, info, notice, warn, error, crit, alert,emerg 中的任意值。可以看到其取值范围是按紧急程度从低到高排列的。只有日志的错误级别等于或高于 level 指定的值才会写入错误日志中。默认值是 error。")]),s._v(" "),a("p",[s._v("基本用法："),a("code",[s._v("error_log /var/logs/nginx/nginx-error.log")]),s._v("。它可以配置在：main， http, mail, stream, server, location 作用域。例子中指定了错误日志的路径为：/var/logs/nginx/nginx-error.log，日志级别使用默认的 error")]),s._v(" "),a("h2",{attrs:{id:"open-log-file-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-log-file-cache"}},[s._v("#")]),s._v(" open_log_file_cache")]),s._v(" "),a("p",[s._v("每一条日志记录的写入都是先打开文件再写入记录，然后关闭日志文件。如果你的日志文件路径中使用了变量，如 access_log /var/logs/$host/nginx-access.log，为提高性能，可以使用 open_log_file_cache 指令设置日志文件描述符的缓存。\n语法："),a("code",[s._v("open_log_file_cache max=N [inactive=time] [min_uses=N] [valid=time];")])]),s._v(" "),a("ul",[a("li",[s._v("max 设置缓存中最多容纳的文件描述符数量，如果被占满，采用 LRU 算法将描述符关闭。")]),s._v(" "),a("li",[s._v("inactive 设置缓存存活时间，默认是 10s。")]),s._v(" "),a("li",[s._v("min_uses 在 inactive 时间段内，日志文件最少使用几次，该日志文件描述符记入缓存，默认是 1 次。")]),s._v(" "),a("li",[s._v("valid：设置多久对日志文件名进行检查，看是否发生变化，默认是 60s。")]),s._v(" "),a("li",[s._v("off：不使用缓存。默认为 off。")])]),s._v(" "),a("p",[s._v("基本用法："),a("code",[s._v("open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;")]),s._v("。它可以配置在 http、server、location 作用域中。例子中，设置缓存最多缓存 1000 个日志文件描述符，20s 内如果缓存中的日志文件描述符至少被被访问 2 次，才不会被缓存关闭。每隔 1 分钟检查缓存中的文件描述符的文件名是否还存在。")]),s._v(" "),a("Reward")],1)}),[],!1,null,null,null);a.default=n.exports}}]);