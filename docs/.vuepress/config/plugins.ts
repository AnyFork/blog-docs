import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { bgmMusicPlayer } from '@anyfork/vuepress-plugin-bgm-player-next'
import { cursorEffects } from '@anyfork/vuepress-plugin-cursor-effects-next'
import { dynamicTitle } from '@anyfork/vuepress-plugin-dynamic-title-next'
import { kanBanNiang } from '@anyfork/vuepress-plugin-kan-ban-niang-next'
import { ribbon } from '@anyfork/vuepress-plugin-ribbon-next'
import { sakura } from '@anyfork/vuepress-plugin-sakura-next'

import { path } from '@vuepress/utils'

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
        locales: {
            '/': {
                copy: '复制成功!',
                hint: 'copy!'
            }
        }
    }),
    //复制加版权插件，https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html
    copyrightPlugin({
        hostname: 'https://anyfork.github.io/blog-docs/',
        author: "小紫念沁",
        global: true
    }),
    //音乐播放器插件。
    bgmMusicPlayer({
        audios: [
            {
                name: '卡农',
                artist: '卡农钢琴版',
                url: '/music/canon/canon.mp3',
                cover: '/music/canon/canon.jpg'
            },
            {
                name: '风居住的街道',
                artist: '风居住的街道 钢琴版 - 钢琴曲',
                url: '/music/wind/wind.mp3',
                cover: '/music/wind/wind.jpg'
            },
            {
                name: '夜的钢琴曲',
                artist: '夜的钢琴曲五 - 石进',
                url: '/music/night/night.mp3',
                cover: '/music/night/night.jpg'
            }
        ],
        autoShrink: true,
        floatStyle: { bottom: '100px', 'z-index': '999999' },
    }),
    //鼠标点击特效插件
    cursorEffects({
        size: 4,
        shape: 'star'
    }),
    //动态title特效插件
    dynamicTitle(),
    //看板娘
    kanBanNiang(),
    //彩带
    ribbon({
        size: 120, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        option: {
            // 色带HSL饱和度
            colorSaturation: '80%',
            // 色带HSL亮度量
            colorBrightness: '60%',
            // 带状颜色不透明度
            colorAlpha: 0.65,
            // 在HSL颜色空间中循环显示颜色的速度有多快
            colorCycleSpeed: 6,
            // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
            verticalPosition: 'max',
            // 到达屏幕另一侧的速度有多快
            horizontalSpeed: 200,
            // 在任何给定时间，屏幕上会保留多少条带
            ribbonCount: 3,
            // 添加笔划以及色带填充颜色
            strokeSize: 0,
            // 通过页面滚动上的因子垂直移动色带
            parallaxAmount: -0.5,
            // 随着时间的推移，为每个功能区添加动画效果
            animateSections: true
        },
        //  点击彩带  true显示  false为不显示
        ribbonShow: false,
        // 滑动彩带
        ribbonAnimationShow: true
    }),
    //樱花特效
    sakura({
        Sakura_zindex: 1,
        sakura_img: '/blog-docs/images/blue.png'
    })
]