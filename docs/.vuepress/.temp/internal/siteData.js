export const siteData = JSON.parse("{\"base\":\"/blog-docs/\",\"lang\":\"zh-CN\",\"title\":\"小紫念沁\",\"description\":\"资料文档汇集网站\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"type\":\"image/x-icon\",\"href\":\"/blog-docs/favicon.ico\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width,initial-scale=1,user-scalable=no\"}],[\"meta\",{\"name\":\"referrer\",\"content\":\"never\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/blog-docs/manifest.json\"}],[\"script\",{\"language\":\"javascript\",\"type\":\"text/javascript\",\"src\":\"/blog-docs/js/jquery.min.js\"}],[\"script\",{\"language\":\"javascript\",\"type\":\"text/javascript\",\"src\":\"/blog-docs/js/flux.min.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
