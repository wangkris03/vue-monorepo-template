module.exports = {
  title: 'doc',
  description: 'markdown',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'HTML', link: '/html/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          collapsible: true,
          items: [{ text: 'What is VitePress?', link: '/guide/' }],
        },
      ],
      '/html/': [
        {
          text: 'html',
          collapsible: true,
          items: [
            { text: 'What is html?', link: '/html/' },
            { text: 'What is html?', link: '/html/other' },
          ],
        },
      ],
    },
  },
};
