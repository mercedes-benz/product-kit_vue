<!-- SPDX-License-Identifier: MIT -->

<template>
    <div>
        <v-subheader> Font-Family </v-subheader>
        <v-container>
            <!--<v-subheader>
                {{ t.name }}
            </v-subheader>-->
            <span class="text-h1">MB Corpo A Title Cond Web</span>
            <br />
            <br />
            <span class="text-h5">MB Corpo S Text Web</span>
            <br />
            <br />
            <code style="font-size: 64px">
                Source Code Pro
            </code> 
        </v-container>
        <v-subheader> Font-Size </v-subheader>
        <v-container class="mb-12" v-for="t in text" :key="t.name">
            <!--<v-subheader>
                {{ t.name }}
            </v-subheader>-->
            <span :class="'text-' + t.name">{{ t.title }}</span>
            <br />
            <span :class="'text-' + t.name">
                The quick brown fox jumps over the lazy dog
            </span> 
        </v-container>
        <v-subheader> Font-Weights </v-subheader>
        <v-container v-for="w in weights" :key="w">
            <!--<v-subheader>
                {{ w }}
            </v-subheader>-->
            <span :class="'font-weight-' + w">
                {{ w }}
            </span>
            <br />
            <span :class="'font-weight-' + w">
                The quick brown fox jumps over the lazy dog
            </span> 
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Font",

    data: () => ({
        text: [
            {
                name: "h1",
                title: "Heading 1",
            },
            {
                name: "h2",
                title: "Heading 2",
            },
            {
                name: "h3",
                title: "Heading 3",
            },
            {
                name: "h4",
                title: "Heading 4",
            },
            {
                name: "h5",
                title: "Heading 5",
            },
            {
                name: "h6",
                title: "Heading 6",
            },
            {
                name: "subtitle-1",
                title: "Subtitle 1",
            },
            {
                name: "subtitle-1-strong",
                title: "Subtitle 1 Strong",
            },
            {
                name: "subtitle-2",
                title: "Subtitle 2",
            },
            {
                name: "subtitle-2-strong",
                title: "Subtitle 2 Strong",
            },
            {
                name: "body-1",
                title: "Body 1",
            },
            {
                name: "body-1-strong",
                title: "Body 1 Strong",
            },
            {
                name: "body-2",
                title: "Body 2",
            },
            {
                name: "body-2-strong",
                title: "Body 2 Strong",
            },
            {
                name: "button",
                title: "Button",
            },
            {
                name: "caption",
                title: "Caption",
            },
            {
                name: "caption-strong",
                title: "Caption Strong",
            },
            {
                name: "overline",
                title: "Overline",
            },
        ],
        weights: ["light", "regular", "bold", "black"],
    }),

    computed: {},
};
</script>

<style scoped>

</style>