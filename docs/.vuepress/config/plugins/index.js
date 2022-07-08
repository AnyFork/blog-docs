const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const { cardList, cardImgList } = require('./container')
module.exports = [
  cardList,
  cardImgList,
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }
  ],
  //kanbanniang
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['haru1', 'whiteCat', 'miku', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'],
      clean: false,
      messages: {
        welcome: '欢迎来到我的博客',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你不喜欢我了吗？痴痴地望着你。'
      },
      messageStyle: { right: '68px', bottom: '290px' },
      width: 250,
      height: 320
    }
  ],
  //公告弹框插件
  [
    '@vuepress-reco/vuepress-plugin-bulletin-popover',
    {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎来到我的博客🎉🎉🎉',
          style: 'text-align: center;font-size: 15px;font-weight: bold;'
        },
        {
          type: 'text',
          content: '博客汇集了个人总结的资料文档，会进行不定期更新!',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        },
        {
          type: 'text',
          content: '博客中可能存在一些不足的问题，欢迎小伙伴们给我留言.',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        },
        {
          type: 'text',
          content: '邮箱：874957743@qq.com',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        }
      ],
      footer: null
    }
  ],
  //音乐播放器插件
  [
    //github地址：https://github.com/vuepress-reco/vuepress-plugin-bgm-player
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        //本地音乐4首
        {
          name: '卡农',
          artist: '卡农钢琴版',
          url: '/blog-docs/music/canon/canon.mp3',
          cover: '/blog-docs/music/canon/canon.jpg'
        },
        {
          name: '风居住的街道',
          artist: '风居住的街道 钢琴版 - 钢琴曲',
          url: '/blog-docs/music/wind/wind.mp3',
          cover: '/blog-docs/music/wind/wind.jpg'
        },
        {
          name: '夜的钢琴曲',
          artist: '夜的钢琴曲五 - 石进',
          url: '/blog-docs/music/night/night.mp3',
          cover: '/blog-docs/music/night/night.jpg'
        }
      ],
      //自动缩放
      autoShrink: true,
      //自动播放
      autoplay: true,
      //float样式
      floatStyle: { bottom: '80px', 'z-index': '999999' }
    }
  ],
  //鼠标点击插件
  [
    //github地址：https://github.com/moefyit/vuepress-plugin-cursor-effects
    'vuepress-plugin-cursor-effects',
    {
      // size of the particle, default: 2
      size: 4,
      // shape of the particle, default: 'star'
      shape: 'star',
      // z-index property of the canvas, default: 999999999
      zIndex: 999999999
    }
  ],
  // 只要把这个放进 config的plugins中就可以了 有木有很简单
  [
    'ribbon-animation',
    {
      size: 120, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: -1, //  层级
      opt: {
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
        ribbonCount: 2,
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
    }
  ],
  //樱花插件，github地址：https://github.com/JabinPeng/vuepress-plugin-sakura
  [
    'sakura',
    {
      // 默认数量
      num: 40,
      //是否显示
      show: true,
      // 层级
      zIndex: 100,
      img: {
        // false 默认图 true 换图 需要填写httpUrl地址
        replace: true,
        // 绝对路径
        httpUrl: '/blog-docs/snowflake/blue.png'
      }
    }
  ],
  //趣味动态标题插件
  [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/failure.ico',
      hideText: '(●—●)喔哟，崩溃啦！',
      recoverTime: 2000
    }
  ],
  //动态名言插件
  ['vuepress-plugin-boxx'],
  //代码复制插件
  [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!'
      }
    }
  ],
  [
    '@vuepress/last-updated',
    {
      //上次更新"时间格式
      transformer: (timestamp, lang) => {
        dayjs.extend(utc)
        dayjs.extend(timezone)
        return dayjs.tz(timestamp, 'Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
      }
    }
  ],
  //gitalk评论插件，github地址：https://github.com/gitalk/gitalk/blob/master/readme-cn.md
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: '85f8ec984fa87a6ce536',
        clientSecret: '1df94a9d2362071c398e34f30bcecea987fa3aa4',
        repo: 'blog-docs',
        owner: 'AnyFork',
        admin: ['AnyFork'],
        distractionFreeMode: false,
        id: '<%- window.location.pathname %>',
        title: '<%- document.title %>'
      }
    }
  ],
  //支持中文目录连接转拼音名
  [
    'permalink-pinyin',
    {
      // Converted into lowercase, default: true
      lowercase: true,
      // Separator of the slug, default: '-'
      separator: '-'
    }
  ],
  //代码展示扩展优化
  ['@vuepress-reco/extract-code']
]
