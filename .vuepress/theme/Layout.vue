<template>
    <div class="theme-container no-sidebar">
        <Navbar />
        <component :is="layout" :sidebar-items="sidebarItems" />
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
        },
        layout() {
            return this.$page.path === '/' ? Home : Page;
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
