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
        text: '运维资料库',
        link: '/devOps/'
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
        text: '资源网',
        link: '/others/2022/'
      },
      {
        text: 'LeetCode',
        link: 'https://leetcode-cn.com/'
      },
      {
        text: 'github博客',
        link: 'https://anyfork.github.io/blog-docs/'
      },
      {
        text: 'gitee博客',
        link: 'https://anyfork.gitee.io/blog-docs/'
      }
    ]
  },
  {
    text: '时间轴',
    link: '/timeline/',
    icon: 'reco-date'
  }
]
