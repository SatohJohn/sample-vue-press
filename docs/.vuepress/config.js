module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/',
    locales: {
      '/': {
        lang: 'ja-JP',
      }
    },
    home: true,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'google', link: 'https://google.com' },
      ]
    }
  }
