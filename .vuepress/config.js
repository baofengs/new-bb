module.exports = {
    title: "Baofeng's BB",
    description: 'San Baofeng\'s BB，茫茫网海中能遇到你是我的缘分，停下你的匆匆的步伐，且听我来 BB 几句吧。',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo-40x40.png' }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'assets/images'
            }
        }
    },
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        navbar: true,
        search: false,
        lastUpdated: 'Last Updated',
        logo: '/logo-40x40.png',
        lang: 'zh-CN',
    }
}
