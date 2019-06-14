module.exports = {
    title: "San Baofeng's",
    description: 'San Baofeng\'s Blog',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'assets/images'
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        navbar: true,
        search: false,
        lastUpdated: 'Last Updated',
    }
}
