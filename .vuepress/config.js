module.exports = {
    title: "Baofeng's BB",
    description: 'San Baofeng\'s BB，茫茫网海中能遇到你是我的缘分，停下你的匆匆的步伐，且听我来 BB 几句吧。',
    extend: '@vuepress/theme-default',
    base: '/',
    evergreen: true,
    head: [
        ['link', { rel: 'icon', href: '/logo-40x40.png' }]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        navbar: true,
        search: false,
        lastUpdated: 'Last Updated',
        logo: '/logo-40x40.png',
        lang: 'zh-CN',
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-80885450-8'
            }
        ],
        ['vuepress-plugin-new']
    ],
}
