<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-container>
        <v-row align="center" no-gutters>
            <v-col cols="auto">
                <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>
            <v-col cols="auto" class="ml-s">
                <mbti-headline
                    overline="This is an overline"
                    size="h1"
                    divider
                    titleRow1="Welcome to the"
                    titleRow2="Vuetify Playground"
                />
            </v-col>
            <p class="subheading">
                This app contains content from the open-source Vuetify
                Playground project from GitHub User "Joouis" under the MIT license
                <br />Collaborate via
                <a
                    href="https://github.com/Joouis/vuetify-playground"
                    target="_blank"
                    >GitHub</a
                >
            </p>
        </v-row>
        <h2 class="text-h4 mt-s">MIT License</h2>
        Copyright (c) 2019 John Chou
        <br />
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
        <br />
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
        <br />
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </v-container>
</template>

<script>
import MbtiHeadline from "../../../src/patterns/MbtiHeadline.vue";
export default {
    name: "HelloWorld",

    components: {
        MbtiHeadline,
    },

    data: () => ({
        ecosystem: [
            {
                text: "vuetify-loader",
                href: "https://github.com/vuetifyjs/vuetify-loader",
            },
            {
                text: "github",
                href: "https://github.com/vuetifyjs/vuetify",
            },
            {
                text: "awesome-vuetify",
                href: "https://github.com/vuetifyjs/awesome-vuetify",
            },
        ],
        importantLinks: [
            {
                text: "Documentation",
                href: "https://vuetifyjs.com",
            },
            {
                text: "Chat",
                href: "https://community.vuetifyjs.com",
            },
            {
                text: "Made with Vuetify",
                href: "https://madewithvuejs.com/vuetify",
            },
            {
                text: "Twitter",
                href: "https://twitter.com/vuetifyjs",
            },
            {
                text: "Articles",
                href: "https://medium.com/vuetify",
            },
        ],
        whatsNext: [
            {
                text: "Explore components",
                href: "https://vuetifyjs.com/components/api-explorer",
            },
            {
                text: "Select a layout",
                href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
            },
            {
                text: "Frequently Asked Questions",
                href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
            },
        ],
    }),
};
</script>
