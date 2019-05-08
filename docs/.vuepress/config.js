module.exports = {
  title: "_theFeng",
  description: "fxw同学的个人博客",
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: 'auto',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文章',
        items: [{
            text: '软技能',
            link: '/softskill/'
          },
          {
            text: 'webgl',
            link: '/webgl/'
          }
        ]
      },
      {
        text: '掘金',
        link: ''
      },
      {
        text: 'GitHub',
        link: 'https://github.com/fxwing'
      },
      {
        text: '知乎',
        link: ''
      },
    ],
    sidebar: {
      '/webgl/': [
        '',
        '1-什么是webgl',
        '2-初识webgl和着色器',
        '3-坐标系与鼠标交互'
      ],
      // '/': [
      //   '',
      //   '侧标导航1',
      //   '侧标导航1'
      // ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    }

  }
}