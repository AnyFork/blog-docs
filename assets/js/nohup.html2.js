const t=JSON.parse('{"key":"v-3ffabb67","path":"/posts/linux/nohup.html","title":"nohup\u540E\u53F0\u8FD0\u884C\u5E76\u8F93\u51FA\u65E5\u5FD7\u5230\u6307\u5B9A\u6587\u4EF6","lang":"zh-CN","frontmatter":{"title":"nohup\u540E\u53F0\u8FD0\u884C\u5E76\u8F93\u51FA\u65E5\u5FD7\u5230\u6307\u5B9A\u6587\u4EF6","date":"2022-04-07T17:08:16.000Z","tag":["linux"],"category":["linux"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201006898.jpg","summary":"\u2003nohup \u662F\u4E0D\u6302\u65AD\u7684\u610F\u601D( no hang up)\u3002\u5982\u679C\u4F60\u6B63\u5728\u8FD0\u884C\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u800C\u4E14\u4F60\u89C9\u5F97\u5728\u9000\u51FA\u5E10\u6237\u65F6\u8BE5\u8FDB\u7A0B\u8FD8\u4E0D\u4F1A\u7ED3\u675F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528 nohup \u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u5FFD\u7565\u6240\u6709\u6302\uFF08SIGHUP\uFF09\u4FE1\u53F7\uFF0C\u53EF\u4EE5\u5728\u4F60\u9000\u51FA\u5E10\u6237/\u5173\u95ED\u7EC8\u7AEF\u4E4B\u540E\u7EE7\u7EED\u8FD0\u884C\u76F8\u5E94\u7684\u8FDB\u7A0B\u3002\u2003 \u662F\u6307\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4F46\u5F53\u7528\u6237\u63A8\u51FA(\u6302\u8D77)\u7684\u65F6\u5019\uFF0C\u547D\u4EE4\u81EA\u52A8\u4E5F\u8DDF\u7740\u9000\u51FA. nohup \u4E0E \u2003 \u7ED3\u5408\u8D77\u6765\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u6302\u65AD\u7684\u540E\u53F0\u8FD0\u884C\u3002\\n","head":[["meta",{"property":"og:url","content":"https://anyfork.github.io/blog-docs/posts/linux/nohup.html"}],["meta",{"property":"og:site_name","content":"\u6280\u672F\u7ECF\u9A8C\u603B\u7ED3"}],["meta",{"property":"og:title","content":"nohup\u540E\u53F0\u8FD0\u884C\u5E76\u8F93\u51FA\u65E5\u5FD7\u5230\u6307\u5B9A\u6587\u4EF6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-19T05:33:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u5C0F\u7D2B\u5FF5\u6C81"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2022-04-07T17:08:16.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-19T05:33:10.000Z"}]]},"excerpt":"<p>\u2003nohup \u662F\u4E0D\u6302\u65AD\u7684\u610F\u601D( no hang up)\u3002\u5982\u679C\u4F60\u6B63\u5728\u8FD0\u884C\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u800C\u4E14\u4F60\u89C9\u5F97\u5728\u9000\u51FA\u5E10\u6237\u65F6\u8BE5\u8FDB\u7A0B\u8FD8\u4E0D\u4F1A\u7ED3\u675F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528 nohup \u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u5FFD\u7565\u6240\u6709\u6302\uFF08SIGHUP\uFF09\u4FE1\u53F7\uFF0C\u53EF\u4EE5\u5728\u4F60\u9000\u51FA\u5E10\u6237/\u5173\u95ED\u7EC8\u7AEF\u4E4B\u540E\u7EE7\u7EED\u8FD0\u884C\u76F8\u5E94\u7684\u8FDB\u7A0B\u3002\u2003 \u662F\u6307\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4F46\u5F53\u7528\u6237\u63A8\u51FA(\u6302\u8D77)\u7684\u65F6\u5019\uFF0C\u547D\u4EE4\u81EA\u52A8\u4E5F\u8DDF\u7740\u9000\u51FA. nohup \u4E0E \u2003 \u7ED3\u5408\u8D77\u6765\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u6302\u65AD\u7684\u540E\u53F0\u8FD0\u884C\u3002</p>\\n","headers":[{"level":2,"title":"\u4E00\u3001nohup \u547D\u4EE4","slug":"\u4E00\u3001nohup-\u547D\u4EE4","children":[]},{"level":2,"title":"\u4E8C\u3001\u5B9E\u4F8B\u5C55\u793A","slug":"\u4E8C\u3001\u5B9E\u4F8B\u5C55\u793A","children":[]},{"level":2,"title":"\u4E09\u3001Tomcat \u6E05\u9664 catalina.out \u65E5\u5FD7","slug":"\u4E09\u3001tomcat-\u6E05\u9664-catalina-out-\u65E5\u5FD7","children":[]}],"git":{"updatedTime":1663565590000,"contributors":[{"name":"anyfork","email":"874957743@qq.com","commits":1}]},"filePathRelative":"posts/linux/nohup.md","readingTime":{"minutes":6.02,"words":1807},"copyright":"\u8457\u4F5C\u6743\u5F52\u5C0F\u7D2B\u5FF5\u6C81\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://anyfork.github.io/blog-docs/blog-docs/posts/linux/nohup.html"}');export{t as data};
