<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-app>
        <!--<v-app-bar clipped-left flat app>
            <v-img
                :src="require('./assets/logo.svg')"
                class="mx-2"
                max-height="40"
                max-width="40"
                contain
            ></v-img>
            <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">
                <span class="first-word font py-0">Vuetify</span>
                <span class="second-word font py-0"> Mercedes-Benz Tech Innovation</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-switch
                v-model="darkSwitch"
                label="Darkmode"
                color="primary"
                @change="toggleDarkMode"
                hide-details
            ></v-switch>
        </v-app-bar>
        <v-navigation-drawer clipped permanent app>
            <v-list dense nav>
                <v-subheader class="mt-0">Styles</v-subheader>
                <v-list-item :to="getRoutePath('colors')">
                    <v-list-item-icon><v-icon>mdi-palette</v-icon></v-list-item-icon>
                    <v-list-item-title>Colors</v-list-item-title>
                </v-list-item>
                <v-list-item :to="getRoutePath('font')">
                    <v-list-item-icon><v-icon>mdi-format-size</v-icon></v-list-item-icon>
                    <v-list-item-title>Font</v-list-item-title>
                </v-list-item>
                <v-list-item :to="getRoutePath('layout')">
                    <v-list-item-icon><v-icon>mdi-grid</v-icon></v-list-item-icon>
                    <v-list-item-title>Layout</v-list-item-title>
                </v-list-item>
                <v-list-item :to="getRoutePath('size')">
                    <v-list-item-icon><v-icon>mdi-resize</v-icon></v-list-item-icon>
                    <v-list-item-title>Size</v-list-item-title>
                </v-list-item>
                <v-subheader class="mt-0">UI Components</v-subheader>
                <v-autocomplete
                    v-model="selectedComponent"
                    :items="components"
                    dense
                    outlined
                    class="px-2 mb-2"
                    label="Search components"
                    @change="route()"
                    hide-details
                ></v-autocomplete>
                <template v-for="item in menuItems">
                    <template v-if="typeof item.items === 'object'">
                        <v-list-group :key="item.title" no-action sub-group>
                            <template v-slot:activator>
                                <v-list-item-title v-text="item.title" />
                            </template>
                            <v-list-item
                                v-for="subItem in item.items"
                                :key="subItem.title"
                                :to="getRoutePath(subItem.title)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="subItem.title" />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </template>
                    <template v-else>
                        <v-list-item
                            :key="item.title"
                            :to="getRoutePath(item.title)"
                        >
                            <v-list-item-icon :key="item.title" />
                            <v-list-item-title v-text="item.title" />
                        </v-list-item>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>-->
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
                <v-btn text>Start</v-btn>
                <v-btn text>Home</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on">
                            Services
                            <v-icon> mdi-chevron-down </v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>Test</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Item</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-switch
                    v-model="darkSwitch"
                    label="Darkmode"
                    color="primary"
                    @change="toggleDarkMode"
                ></v-switch>
            </template>
        </mbti-header>
        <mbti-nav :items="navItems">
            <!-- <mbti-nav-item icon left dark iconName="mdi-car" title="Modelle" :onclick="alerts"/>
            <mbti-nav-item title="Online kaufen" />
            <mbti-nav-item title="Kaufberatung" />
            <mbti-nav-item title="Service & Zubehör" />
            <mbti-nav-item title="Technologie" /> -->
            <v-tab>

            </v-tab>
            <v-tab>
                
            </v-tab>
        </mbti-nav>
        <v-main>
            <div class="container">
                <mbti-headline
                    overline="This is an overline"
                    size="h1"
                    divider
                    titleRow1="Welcome to"
                    titleRow2="Mercedes-Benz Tech Innovation"
                />
            </div>
            <router-view />
        </v-main>
        <mbti-footer>
            <v-spacer></v-spacer>
            <v-btn text class="primary-contrast--text"> Imprint </v-btn>
            <v-btn text> Privacy Policy </v-btn>
        </mbti-footer>
    </v-app>
</template>

<script>
import { COMPONENTS_MANIFEST } from "./components/ComponentsList";
import MbtiHeader from "../../src/patterns/MbtiHeader.vue";
import MbtiNav from "../../src/patterns/MbtiNav.vue";
import MbtiFooter from "../../src/patterns/MbtiFooter.vue";
import MbtiHeadline from "../../src/patterns/MbtiHeadline.vue";

export default {
    name: "App",

    components: {
        MbtiHeader,
        MbtiNav,
        MbtiFooter,
        MbtiHeadline,
    },

    data: () => ({
        darkSwitch: false,
        menuItems: COMPONENTS_MANIFEST,
        selectedComponent: null,
        navItems: [
            {
                title: "Modelle",
                icon: true,
                left: true,
                iconName: "mdi-car",
                onclick: function () {
                    this.$router.push("/button");
                },
            },
            {
                title: "Online kaufen",
            },
            {
                title: "Kaufberatung",
            },
            {
                title: "Service & Zubehör",
            },
            {
                title: "Technologie",
            },
        ],
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

<style lang="scss">
</style>
