<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-app>
        <v-container style="min-height: 100%; position: relative">
            <v-autocomplete
                v-model="selectedComponent"
                :items="components"
                dense
                outlined
                class="mx-2 mt-5"
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

            <v-main>
                <router-view />
            </v-main>
        </v-container>
    </v-app>
</template>

<script>
import { COMPONENTS_MANIFEST } from "./components/ComponentsList";

export default {
    name: "App",

    components: {},

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
</style>
