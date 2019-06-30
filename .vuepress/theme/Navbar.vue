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
            <SearchBox v-else-if="$site.themeConfig.search !== false" />
        </div> -->
    </header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "./SearchBox.vue";

export default {
    components: { SearchBox, AlgoliaSearchBox },
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
</script>

<style lang="stylus">
@import './styles/config.styl';
@import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');

.navbar {
    padding: 0.7rem 0;
    line-height: $navbarHeight - 1.4rem;
    position: relative;
    > *:first-child { margin-top: 0 !important; }
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
</style>
