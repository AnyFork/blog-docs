//导航栏
module.exports = [
  {
    text: '首页',
    link: '/',
    icon: 'reco-home'
  },
  {
    text: 'Java文档库',
    icon: 'reco-message',
    items: [
      {
        text: 'java资料库',
        link: '/docs/java/'
      }
    ]
  },
  {
    text: 'Vue文档库',
    icon: 'reco-document',
    items: [
      {
        text: 'Vue资料库',
        link: '/docs/vue/'
      }
    ]
  },
  {
    text: '运维文档库',
    icon: 'reco-blog',
    items: [
      {
        text: '运维资料库',
        link: '/docs/devOps/'
      }
    ]
  },
  {
    text: '其他',
    icon: 'reco-suggestion',
    items: [
      {
        text: '朋友圈',
        link: '/docs/other/firends'
      },
      {
        text: '关于我',
        link: '/docs/other/about'
      },
      {
        text: '杂聊',
        link: '/docs/other/2022/'
      },
      {
        text: 'LeetCode',
        link: 'https://leetcode-cn.com/'
      }
    ]
  },
  {
    text: '时间轴',
    link: '/timeline/',
    icon: 'reco-date'
  },
  {
    text: 'GitHub',
    link: 'https://github.com/recoluan',
    icon: 'reco-github'
  }
]
