const t=JSON.parse('{"key":"v-2e2615a9","path":"/posts/devops/nginx/kill.html","title":"Nginx\u8FDB\u7A0B\u6740\u4E0D\u5B8C\u89E3\u51B3\u65B9\u6CD5","lang":"zh-CN","frontmatter":{"title":"Nginx\u8FDB\u7A0B\u6740\u4E0D\u5B8C\u89E3\u51B3\u65B9\u6CD5","date":"2022-07-23T18:51:45.000Z","tag":["nginx"],"category":["nginx","\u8FD0\u7EF4"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207232148622.jpg","summary":"\u2003\u65E5\u5E38\u5DE5\u4F5C\u4E2D\uFF0C\u5F53\u6211\u4EEC\u9700\u8981kill\u6389Nginx\u8FDB\u7A0B\u65F6\uFF0C\u901A\u8FC7\u67E5\u770BNginx\u7AEF\u53E3\u7ED1\u5B9A\u7684\u8FDB\u7A0B\uFF0C\u7136\u540E\u53BB\u6740\u6B7B\u76F8\u5E94\u8FDB\u7A0B\uFF0C\u53D1\u73B0\u4F1A\u6709\u65B0\u7684\u8FDB\u7A0B\u7ED1\u5B9A\uFF0C\u4F7F\u7528kill -9\u6740\u5B8C\u4E86\u5C31\u6709\u65B0\u7684\u8FDB\u7A0B\u51FA\u73B0\uFF0C\u539F\u56E0\u662F\uFF1A nginx\u7684\u8FDB\u7A0B\u5206\u4E3AMaster\u8FDB\u7A0B\u548CWorker\u8FDB\u7A0B\uFF0CWorker\u8FDB\u7A0B\u662FMaster\u6D3E\u751F\u51FA\u6765\u7684\u5B50\u8FDB\u7A0B\uFF0C\u5176\u6570\u91CF\u59CB\u7EC8\u7EF4\u6301\u5728\u4E00\u4E2A\u6570\u91CF\u4E0A\uFF0C\u5F53\u7F3A\u5C11\u4E00\u4E2AWorker\u8FDB\u7A0B\u662F\uFF0CMaster\u5C31\u4F1A\u6D3E\u751F\u4E00\u4E2A\u65B0\u7684\u5B50\u8FDB\u7A0B\u3002\u6240\u4EE5\u4F60\u6740worker\u8FDB\u7A0B\u662F\u6740\u4E0D\u5B8C\u7684\u3002\\n","head":[["meta",{"property":"og:url","content":"https://anyfork.github.io/blog-docs/posts/devops/nginx/kill.html"}],["meta",{"property":"og:site_name","content":"\u5C0F\u7D2B\u5FF5\u6C81"}],["meta",{"property":"og:title","content":"Nginx\u8FDB\u7A0B\u6740\u4E0D\u5B8C\u89E3\u51B3\u65B9\u6CD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-04T09:32:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u5C0F\u7D2B\u5FF5\u6C81"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2022-07-23T18:51:45.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-04T09:32:34.000Z"}]]},"excerpt":"<p>\u2003\u65E5\u5E38\u5DE5\u4F5C\u4E2D\uFF0C\u5F53\u6211\u4EEC\u9700\u8981kill\u6389Nginx\u8FDB\u7A0B\u65F6\uFF0C\u901A\u8FC7\u67E5\u770BNginx\u7AEF\u53E3\u7ED1\u5B9A\u7684\u8FDB\u7A0B\uFF0C\u7136\u540E\u53BB\u6740\u6B7B\u76F8\u5E94\u8FDB\u7A0B\uFF0C\u53D1\u73B0\u4F1A\u6709\u65B0\u7684\u8FDB\u7A0B\u7ED1\u5B9A\uFF0C\u4F7F\u7528kill -9\u6740\u5B8C\u4E86\u5C31\u6709\u65B0\u7684\u8FDB\u7A0B\u51FA\u73B0\uFF0C\u539F\u56E0\u662F\uFF1A nginx\u7684\u8FDB\u7A0B\u5206\u4E3AMaster\u8FDB\u7A0B\u548CWorker\u8FDB\u7A0B\uFF0CWorker\u8FDB\u7A0B\u662FMaster\u6D3E\u751F\u51FA\u6765\u7684\u5B50\u8FDB\u7A0B\uFF0C\u5176\u6570\u91CF\u59CB\u7EC8\u7EF4\u6301\u5728\u4E00\u4E2A\u6570\u91CF\u4E0A\uFF0C\u5F53\u7F3A\u5C11\u4E00\u4E2AWorker\u8FDB\u7A0B\u662F\uFF0CMaster\u5C31\u4F1A\u6D3E\u751F\u4E00\u4E2A\u65B0\u7684\u5B50\u8FDB\u7A0B\u3002\u6240\u4EE5\u4F60\u6740worker\u8FDB\u7A0B\u662F\u6740\u4E0D\u5B8C\u7684\u3002</p>\\n","headers":[{"level":2,"title":"\u65B9\u5F0F\u4E00\uFF1A","slug":"\u65B9\u5F0F\u4E00","children":[]},{"level":2,"title":"\u65B9\u5F0F\u4E8C\uFF1A","slug":"\u65B9\u5F0F\u4E8C","children":[]}],"git":{"updatedTime":1662283954000,"contributors":[{"name":"anyfork","email":"874957743@qq.com","commits":1}]},"filePathRelative":"posts/devops/nginx/kill.md","readingTime":{"minutes":0.84,"words":252},"copyright":"\u8457\u4F5C\u6743\u5F52\u5C0F\u7D2B\u5FF5\u6C81\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://anyfork.github.io/blog-docs/blog-docs/posts/devops/nginx/kill.html"}');export{t as data};
