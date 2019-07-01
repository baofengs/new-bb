<template>
    <header class="navbar">
        <router-link :to="$localePath" class="home-link">
            <h1
                class="site-name"
                v-if="$siteTitle"
            >{{ $siteTitle }}</h1>
        </router-link>
        <!-- <div class="links">
            <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
        </div> -->
    </header>
</template>

<script>
import AlgoliaSearchBox from "@theme/components/AlgoliaSearchBox.vue";

export default {
    components: { AlgoliaSearchBox },

    data() {
        return {
            linksWrapMaxWidth: null
        };
    },

    mounted() {
        const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
        const NAVBAR_VERTICAL_PADDING =
            parseInt(css(this.$el, "paddingLeft")) +
            parseInt(css(this.$el, "paddingRight"));
        const handleLinksWrapWidth = () => {
            if (
                document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT
            ) {
                this.linksWrapMaxWidth = null;
            } else {
                this.linksWrapMaxWidth =
                    this.$el.offsetWidth -
                    NAVBAR_VERTICAL_PADDING -
                    ((this.$refs.siteName && this.$refs.siteName.offsetWidth) ||
                        0);
            }
        };
        handleLinksWrapWidth();
        window.addEventListener("resize", handleLinksWrapWidth, false);
    },

    computed: {
        algolia() {
            return (
                this.$themeLocaleConfig.algolia ||
                this.$site.themeConfig.algolia ||
                {}
            );
        },

        isAlgoliaSearch() {
            return (
                this.algolia && this.algolia.apiKey && this.algolia.indexName
            );
        }
    }
};

function css(el, property) {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const win = el.ownerDocument.defaultView;
    // null means not to return pseudo styles
    return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
@import '../styles/config.styl';
@import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');

.navbar {
    position: relative;
    height: auto;
    max-width: $contentWidth;
    margin: auto;
    padding: 2rem 2.5rem;
    border-bottom: 2px solid $textColor;

    a {
        display: inline-block;
        color: $textColor;
        &:hover {
            text-decoration: none;
        }
    }

    .site-name {
        font-family: 'Nothing You Could Do', cursive;
        font-size: 3rem;
        font-weight: 600;
        line-height: 1.5;
        color: $textColor;
        margin: 0;
    }
}

@media (max-width: $MQNarrow) {
    .navbar {
        padding: 2rem;
    }
}
</style>
