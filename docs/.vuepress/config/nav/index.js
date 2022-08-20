//导航栏
module.exports = [
  {
    text: '首页',
    link: '/',
    icon: 'reco-home'
  },
  {
    text: '其他',
    icon: 'reco-suggestion',
    items: [
      {
        text: '朋友圈子',
        link: '/others/firends'
      },
      {
        text: '工具资源网',
        link: '/others/20220623'
      },
      {
        text: '烟花特效',
        link: 'https://anyfork.gitee.io/fireworks-effect/'
      }
    ]
  },
  {
    text: '时间轴',
    link: '/timeline/',
    icon: 'reco-date'
  }
]
