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
        link: '/java/'
      }
    ]
  },
  {
    text: 'Vue文档库',
    icon: 'reco-document',
    items: [
      {
        text: 'Vue资料库',
        link: '/vue/'
      }
    ]
  },
  {
    text: '运维文档库',
    icon: 'reco-blog',
    items: [
      {
        text: 'Nginx文档',
        link: '/devOps/nginx/'
      },
      {
        text: 'Docker文档',
        link: '/devOps/docker/'
      }
    ]
  },
  {
    text: '其他',
    icon: 'reco-suggestion',
    items: [
      {
        text: '朋友圈',
        link: '/others/firends'
      },
      {
        text: '关于我',
        link: '/others/about'
      },
      {
        text: '网络资源',
        link: '/others/2022/'
      },
      {
        text: 'wordPress',
        link: '/others/wordpress/'
      },
      {
        text: '其他杂谈',
        link: '/others/other/'
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
