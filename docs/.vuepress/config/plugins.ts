import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
const { path } = require('@vuepress/utils')

export const plugins = [
    // 注册全局插件
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, '../theme/components/global'),
    }),
    //docsearch插件,https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html
    docsearchPlugin({
        apiKey: 'e3224f6a8f05632af9c14c9767650b54',
        indexName: 'anyfork',
        appId: '09V7PWK61N',
        placeholder: '搜索文档',
        locales: {
            '/': {
                placeholder: '搜索文档',
                translations: {
                    button: {
                        buttonText: '搜索文档',
                    },
                },
            }
        }
    }),
    //pwa插件,https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html#web-app-manifests
    pwaPlugin(),
    //pwa-popup弹框,https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa-popup.html
    pwaPopupPlugin({
        locales: {
            '/': {
                message: '发现新内容可用',
                buttonText: '点我刷新',
            }
        },
    }),
    //预计阅读时间与字数统计插件，https://vuepress-theme-hope.github.io/v2/reading-time/zh/
    readingTimePlugin({}),
    // seo插件，https://vuepress-theme-hope.github.io/v2/seo/
    seoPlugin({
        hostname: 'https://anyfork.github.io/blog-docs/',
        author: {
            name: '小紫念沁',
            url: 'https://anyfork.github.io/blog-docs/'
        }
    }),
    // siteMap站点地图插件，https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html
    sitemapPlugin({
        hostname: 'https://anyfork.github.io/blog-docs/',
        extraUrls: ['https://anyfork.gitee.io/blog-docs/']
    }),
    //代码复制插件，https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCodePlugin({
        selector: '.theme-default-content div[class*="language-"] pre',
        locales:{
            '/':{
                copy:'copy',
                hint:'复制成功!'
            }
        }
    })
]