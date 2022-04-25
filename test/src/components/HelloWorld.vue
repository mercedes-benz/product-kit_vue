<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-container>
        <v-row class="text-center" style="height: 90vh" align="center">
            <v-col>
                <v-row>
                    <v-col cols="12">
                        <v-img
                            :src="require('../assets/logo.svg')"
                            class="my-3"
                            contain
                            height="200"
                        />
                    </v-col>

                    <v-col class="mb-4">
                        <h1 class="display-2 mb-3">
                            Welcome to the Vuetify Playground
                        </h1>

                        <p class="subheading">
                            This app contains content from the open-source Vuetify Playground project <br> from GitHub User "Joouis" under the MIT license
                            <br />Collaborate via
                            <a
                                href="https://github.com/Joouis/vuetify-playground"
                                target="_blank"
                                >GitHub</a
                            >
                        </p>
                    </v-col>

                    <v-col class="mb-5" cols="12">
                        <h2 class="headline mb-3">
                            MIT License
                        </h2>

                        <v-row justify="center" class="text-caption">
                            Copyright (c) 2019 John Chou
                            <br />
                            Permission is hereby granted, free of charge, to any
                            person obtaining a copy of this software and
                            associated documentation files (the "Software"), to
                            deal in the Software without restriction, including
                            without limitation the rights to use, copy, modify,
                            merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to
                            whom the Software is furnished to do so, subject to
                            the following conditions: 
                            <br />
                            The above copyright notice
                            and this permission notice shall be included in all
                            copies or substantial portions of the Software.
                            <br />
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
                            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                            LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND
                            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                            COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
                            OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
                            IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                            DEALINGS IN THE SOFTWARE.
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HelloWorld",

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
