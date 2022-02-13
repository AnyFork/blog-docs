const yaml = require('js-yaml')
const CARD_LIST = 'cardList'
const CARD_IMG_LIST = 'cardImgList'

module.exports = [
  [
    'container',
    {
      // 卡片列表
      type: CARD_LIST,
      render: (tokens, idx) => {
        // tokens 是整个md文件的虚拟dom结构数组
        // idx 是tokens中':::' 所在的索引，而且是当前指定type的':::'，分别有开始和结束两次的idx
        // if (tokens[idx].nesting === 1) { // 开头的 ':::' 标记
        // } else { // 结束的 ':::' 标记
        // }
        // 注意：修改这里面的代码后需要在md文件保存一下才会重新执行渲染
        return renderCardList(tokens, idx, CARD_LIST)
      }
    }
  ],
  [
    'container',
    {
      // 图文卡片列表
      type: CARD_IMG_LIST,
      render: (tokens, idx) => {
        return renderCardList(tokens, idx, CARD_IMG_LIST)
      }
    }
  ],
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
      theme: ['whiteCat', 'miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'],
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
          content: '博客汇集了个人总结的资料文档，会不定期进行更新!',
          style: 'text-align: left;text-indent: 10px;font-size: 13px;'
        },
        {
          type: 'text',
          content: '博客中可能存在一些问题，欢迎小伙伴们给我留言.',
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
          name: 'Victory(胜利)',
          artist: 'Two Steps From Hell',
          url: '/music/victory/victory.mp3',
          cover: '/music/victory/victory.jpg'
        },
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
        ribbonCount: 4,
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
        httpUrl: '/snowflake/blue.png'
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
  ]
]

// 渲染md容器的卡片列表
function renderCardList(tokens, idx, type) {
  const END_TYPE = `container_${type}_close`,
    _tokens$idx = tokens[idx],
    nesting = _tokens$idx.nesting,
    info = _tokens$idx.info
  if (nesting === 1) {
    // 渲染开头的 ':::' 标记
    let yamlStr = ''

    for (let i = idx; i < tokens.length; i++) {
      let _tokens$i = tokens[i],
        type = _tokens$i.type,
        content = _tokens$i.content,
        _info = _tokens$i.info
      if (type === END_TYPE) break // 遇到结束的 ':::' 时
      if (!content) continue
      if (type === 'fence' && _info === 'yaml') {
        // 是代码块类型，并且是yaml代码
        yamlStr = content
      }
    }

    if (yamlStr) {
      // 正确解析出yaml字符串后
      const dataObj = yaml.load(yamlStr) // 将yaml字符串解析成js对象
      let dataList = []

      if (dataObj) {
        // 正确解析出数据对象
        dataList = Array.isArray(dataObj) ? dataObj : dataObj.list
      }

      if (dataList && dataList.length) {
        // 有列表数据

        // 每行显示几个
        let row = Number(info.split(' ').pop())
        if (!row || row > 4 || row < 1) {
          row = 3 // 默认 3
        }

        let listDOM = ''
        if (type === CARD_LIST) {
          // 普通卡片列表
          listDOM = getCardListDOM(dataList, row)
        } else if (type === CARD_IMG_LIST) {
          // 卡片图片列表
          listDOM = getCardImgListDOM(dataList, row)
        }

        return `<div class="${type}Container"><div class="card-list">${listDOM}</div>`
      }
    }
  } else {
    // 渲染':::' 结尾
    return '</div>'
  }
}

// 将数据解析成DOM结构 - 普通卡片列表
function getCardListDOM(dataList, row) {
  let listDOM = ''
  dataList.forEach((item) => {
    listDOM += `
      <${item.link ? 'a href="' + item.link + '" target="_blank"' : 'span'} class="card-item ${row ? 'row-' + row : ''}"
        style="${item.bgColor ? 'background-color:' + item.bgColor + ';' : ''}${item.textColor ? 'color:' + item.textColor + ';' : ''}"
      >
        ${item.avatar ? '<img src="' + item.avatar + '" class="no-zoom">' : ''}
        <div>
          <p class="name">${item.name}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </${item.link ? 'a' : 'span'}>
    `
  })
  return listDOM
}

// 将数据解析成DOM结构 - 图文卡片列表
function getCardImgListDOM(dataList, row) {
  let listDOM = ''
  dataList.forEach((item) => {
    listDOM += `
      <div class="card-item ${row ? 'row-' + row : ''}" >
        <div class="box-img">
          <a href="${item.link}" target="_blank">
            <img src="${item.img}" class="no-zoom">
          </a>
        </div>
        <div class="box-info">
          <a href="${item.link}" target="_blank">
            <p class="name">${item.name}</p>
            ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
          </a>
        </div>
        
        ${
          item.avatar || item.author
            ? `<div class="box-footer">
              <a href="${item.link}" target="_blank">
                ${item.avatar ? `<img src="${item.avatar}" class="no-zoom">` : ''}
                ${item.author ? `<span>${item.author}</span>` : ''}
              </a>
            </div>`
            : ''
        }
      </div>
    `
  })
  return listDOM
}
