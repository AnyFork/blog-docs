export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"author\":\"小紫念沁\",\"authorAvatar\":\"/images/logo.png\",\"socialLinks\":[{\"icon\":\"GithubOutlined\",\"link\":\"https://anyFork.github.io/blog-docs/\"},{\"icon\":\"GoogleCircleFilled\",\"link\":\"https://anyFork.gitee.io/blog-docs/\"}],\"friendLink\":[{\"title\":\"vuepress 2.x\",\"link\":\"https://v2.vuepress.vuejs.org/zh/\"},{\"title\":\"vuepress 1.x社区\",\"link\":\"https://vuepress-community.netlify.app/zh/\"},{\"title\":\"vuepress-theme-reco 2.x\",\"link\":\"http://v2.vuepress-reco.recoluan.com/\"},{\"title\":\"TypeScript中文文档\",\"link\":\"https://ts.yayujs.com/\"}],\"colorMode\":\"auto\",\"sidebarDepth\":3,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"HomeOutlined\"},{\"text\":\"分类\",\"link\":\"/category\",\"icon\":\"AppstoreOutlined\"},{\"text\":\"标签\",\"link\":\"/tags\",\"icon\":\"TagsOutlined\"},{\"text\":\"Java文档\",\"children\":[{\"text\":\"Java设计模式\",\"link\":\"/design-pattern/\",\"activeMatch\":\"/design-pattern/\"},{\"text\":\"Active on /foo/\",\"link\":\"/not-foo/\",\"activeMatch\":\"^/foo/\"}]}],\"sidebar\":{\"/design-patterns/\":[{\"text\":\"VuePress Reference\",\"collapsible\":true,\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]},{\"text\":\"Bundlers Reference\",\"collapsible\":true,\"children\":[\"/reference/bundler/vite.md\",\"/reference/bundler/webpack.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
