const nav = [
  { text: 'Guide', link: '/guide' },
  { text: 'Configs', link: '/configs' },
  { text: 'Changelog', link: 'https://github.com/...' }
]

const sidebar = [
  {
    text: '导航',
    items: [
      { text: 'QuickStart', link: '/guide/QuickStart' },
      { text: 'Design', link: '/guide/Designed' },
      { text: 'Other', link: '/guide/Other' }
    ]
  },
  {
    text: '通用',
    items: [{ text: 'Button 按钮', link: '/components/button/' }]
  },
  {
    text: '导航',
    items: []
  },
  {
    text: '反馈',
    items: []
  },
  {
    text: '数据录入',
    items: []
  },
  {
    text: '数据展示',
    items: []
  },
  {
    text: '布局',
    items: []
  }
]

export default {
  title: 'VitePress2',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/logo.svg',
    nav: nav,
    sidebar: sidebar
  },
  markdown: {
    // lineNumber: true,
    config: md => {
      // use more markdown-it plugins!
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
