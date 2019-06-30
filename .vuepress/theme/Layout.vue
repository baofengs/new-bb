<template>
    <div class="theme-container no-sidebar">
        <Navbar />
        <div class="custom-layout" v-if="$page.frontmatter.layout">
            <component :is="$page.frontmatter.layout" />
        </div>
        <Home v-else-if="$page.frontmatter.home" />
        <Page v-else :sidebar-items="sidebarItems">
            <slot name="page-top" slot="top" />
            <slot name="page-bottom" slot="bottom" />
        </Page>
    </div>
</template>

<script>
import Vue from "vue";
import nprogress from "nprogress";
import Home from "./Home.vue";
import Navbar from "./Navbar.vue";
import Page from "./Page.vue";
import { resolveSidebarItems } from "./util";

export default {
    components: { Home, Page, Navbar },

    computed: {
        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$route,
                this.$site,
                this.$localePath
            );
        }
    },

    mounted() {
        // configure progress bar
        nprogress.configure({ showSpinner: false });

        this.$router.beforeEach((to, from, next) => {
            if (to.path !== from.path && !Vue.component(to.name)) {
                nprogress.start();
            }
            next();
        });

        this.$router.afterEach(() => {
            nprogress.done();
        });
    }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
