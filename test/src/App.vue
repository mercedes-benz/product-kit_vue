<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-app>
        <v-container style="min-height: 100%; position: relative">
            <mbti-header title="Vuetify Playground">
                <template v-slot:logo>
                    <v-img
                        :src="require('@/assets/mbti.svg')"
                        class="mr-5"
                        max-height="60"
                        max-width="60"
                        contain
                    ></v-img>
                </template>
                <template v-slot:actions>
                    <v-autocomplete
                        v-model="selectedComponent"
                        :items="components"
                        dense
                        outlined
                        class="mx-2"
                        style="width: 0px"
                        label="Search components"
                        @change="route()"
                        hide-details
                    ></v-autocomplete>
                    <v-switch
                        v-model="darkSwitch"
                        label="Darkmode"
                        color="primary"
                        @change="toggleDarkMode"
                    ></v-switch>
                </template>
            </mbti-header>
            <mbti-nav>
                <mbti-nav-item
                    icon="mdi-home"
                    title="Home"
                    :to="getRoutePath('/')"
                />
                <mbti-nav-item
                    icon="mdi-palette"
                    title="Colors"
                    :to="getRoutePath('colors')"
                />
                <mbti-nav-item
                    icon="mdi-format-size"
                    title="Font"
                    :to="getRoutePath('font')"
                />
                <mbti-nav-item
                    icon="mdi-grid"
                    title="Layout"
                    :to="getRoutePath('layout')"
                />
                <mbti-nav-item
                    icon="mdi-resize"
                    title="Size"
                    :to="getRoutePath('size')"
                />
                <mbti-nav-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :title="item.title"
                    :to="getRoutePath(item.title)"
                />
            </mbti-nav>

            <v-main>
                <router-view />
            </v-main>

            <mbti-footer>
                <v-spacer></v-spacer>
                <v-btn text> Imprint </v-btn>
                <v-btn text> Privacy Policy </v-btn>
            </mbti-footer>
        </v-container>
    </v-app>
</template>

<script>
import { COMPONENTS_MANIFEST } from "./components/ComponentsList";
import MbtiHeader from "../../src/patterns/MbtiHeader.vue";
import MbtiNav from "../../src/patterns/MbtiNav.vue";
import MbtiNavItem from "../../src/patterns/MbtiNavItem.vue";
import MbtiFooter from "../../src/patterns/MbtiFooter.vue";
import MbtiHeadline from "../../src/patterns/MbtiHeadline.vue";

export default {
    name: "App",

    components: {
        MbtiHeader,
        MbtiNav,
        MbtiNavItem,
        MbtiFooter,
        MbtiHeadline,
    },

    data: () => ({
        darkSwitch: false,
        menuItems: COMPONENTS_MANIFEST,
        selectedComponent: null,
        drawer: false,
    }),

    methods: {
        getRoutePath: (title) => {
            return title.toLowerCase().split(" ").join("-");
        },

        toggleDarkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },

        route() {
            this.$router.push(this.getRoutePath(this.selectedComponent));
        },
        openModal() {},
    },

    computed: {
        components() {
            var list = [];
            this.menuItems.forEach((element) => {
                if ("items" in element) {
                    Array.prototype.push.apply(
                        list,
                        element["items"].map((a) => a.title)
                    );
                } else {
                    list.push(element.title);
                }
            });
            return list;
        },
    },
};
</script>

<style>
@font-face {
    font-family: "MB Corpo S Text Web";
    src: local("MB Corpo S Text Web"),
        url("./fonts/MBCorpoSWeb.woff2") format("woff2");
}

@font-face {
    font-family: "MB Corpo A Title Cond Web";
    src: local("MB Corpo A Title Cond Web"),
        url("./fonts/MBCorpoAWeb.woff2") format("woff2");
}
</style>
