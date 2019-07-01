<template>
    <div class="home">
        <div class="home-body">
            <section class="link" v-for="year in Object.keys(pages)" :key="year">
                <div class="link-year">{{year}}</div>
                <div class="link-body" v-for="page in pages[year]">
                    <div class="link-body-createtime">{{page.date}}</div>
                    <div class="link-body-title">
                        <router-link class="nav-link" :to="page.path">{{ page.title }}</router-link>
                    </div>
                </div>
            </section>
        </div>
        <div class="aboutme" v-if="data.about"><a :href="data.about">About Me</a></div>
        <div class="footer" v-if="data.footer && !data.about">{{ data.footer }}</div>
    </div>
</template>

<script>
export default {
    computed: {
        data() {
            return this.$page.frontmatter;
        },
        pages () {
            const pages = this.$site.pages.filter(page => page.path !== '/').map(page => {
                if (!page.frontmatter.date) {
                    page.frontmatter.date = new Date('1970');
                }
                return page;
            }).sort((a, b) => {
                return (+new Date(b.frontmatter.date)) - (+new Date(a.frontmatter.date))
            });
            return this.groupPagesByYear(pages);
        }
    },
    methods: {
        groupPagesByYear (pages) {
            return pages.reduce((formatedPages, page) => {
                const date = page.frontmatter.date;
                let [week, month, day, year] = new Date(date).toString().split(' ');
                const yearStr = year + ' ';
                const tmpPage = {
                    title: page.title,
                    path: page.path,
                    date: this.formatDate({month, day})
                }
                if (formatedPages[yearStr]) {
                    formatedPages[yearStr].push(tmpPage);
                } else {
                    formatedPages[yearStr] = [tmpPage];
                }
                return formatedPages;
            }, {});
        },
        formatDate ({month, day}) {
            return `${month} ${day}`;
        }
    }
};
</script>

<style lang="stylus">
@import '../styles/config.styl';

.home {
    margin: auto;
    max-width $contentWidth
    padding: 0 2.5rem;
    box-sizing: border-box;

    &-body {
        $aboutmeHeight: 20px;
        $footerHeight: 90px;
        margin-top: 0 !important;
        min-height: 361px;
    }

    .link{
        &-year {
            font-size: 2rem;
            font-weight: bold;
            margin: 1em 0;
            user-select: none;
            font-family: Georgia, serif;
        }
        &-body {
            display: flex;
            align-items: flex-start;
            margin: 12px 0;
            font-size: 1.4rem;
            line-height: 2rem;
            &-createtime {
                user-select: none;
                flex-basis: 70px;
                min-width: 70px;
                font-family: Georgia, serif;
            }
            &-title {
                .nav-link {
                    color: $darkColor;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .footer {
        padding: 2.5rem;
        border-top: 1px solid $borderColor;
        text-align: center;
        color: lighten($textColor, 25%);
    }
    .aboutme {
        margin-top: 30px;
        text-align: right;
        a {
            color: $darkColor;
        }
    }
}

@media (max-width: $MQMobile) {
    .home {
        padding: 2rem;
    }
}

@media (max-width: $MQMobileNarrow) {
    .home {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        .aboutme {
            text-align: left;
        }
    }
}
</style>
