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
    text: '前端资料库',
    icon: 'reco-document',
    items: [
      {
        text: 'Vue专题',
        link: '/vue/'
      },
      {
        text: 'Nuxt专题',
        link: '/nuxt/'
      },
      {
        text: 'Node专题',
        link: '/node/'
      }
    ]
  },
  {
    text: '运维文档',
    icon: 'reco-blog',
    items: [
      {
        text: 'Nginx专题',
        link: '/devOps/nginx/'
      },
      {
        text: 'Docker专题',
        link: '/devOps/docker/'
      },
      {
        text: 'Redis专题',
        link: '/devOps/redis/'
      },
      {
        text: 'Gitlab专题',
        link: '/devOps/gitlab/'
      },
      {
        text: 'linux专题',
        link: '/linux/'
      },
      {
        text: 'MySql专题',
        link: '/mysql/'
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
        text: '其他专题',
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
