<!-- SPDX-License-Identifier: MIT -->

<template>
    <ExampleWrapper>
        <v-subheader>Flat</v-subheader>
        <Flat />
        <v-subheader>Raised</v-subheader>
        <Raised />
        <v-subheader>Depressed</v-subheader>
        <Depressed />
        <v-subheader>Icon</v-subheader>
        <Icon />
        <v-subheader>Floating</v-subheader>
        <Floating />
        <v-subheader>Sizing</v-subheader>
        <Sizing />
        <v-subheader>Outlined</v-subheader>
        <Outlined />
        <v-subheader>Rounded</v-subheader>
        <Rounded />
        <v-subheader>Tile</v-subheader>
        <Tile />
        <v-subheader>Block</v-subheader>
        <Block />
        <v-subheader>Loaders</v-subheader>
        <Loaders />
    </ExampleWrapper>
</template>

<script>
import ExampleWrapper from "./ExampleWrapper";
import Flat from "./buttons/Flat";
import Raised from "./buttons/Raised";
import Depressed from "./buttons/Depressed";
import Icon from "./buttons/Icon";
import Floating from "./buttons/Floating";
import Sizing from "./buttons/Sizing";
import Outlined from "./buttons/Outlined";
import Rounded from "./buttons/Rounded";
import Tile from "./buttons/Tile";
import Block from "./buttons/Block";
import Loaders from "./buttons/Loaders";
import TreeviewVue from "./Treeview.vue";

export default {
    name: "Buttons",

    components: {
        ExampleWrapper,
        Flat,
        Raised,
        Depressed,
        Icon,
        Floating,
        Sizing,
        Outlined,
        Rounded,
        Tile,
        Block,
        Loaders,
    },

    data: () => ({
        
    }),

    methods: {

    },
};
</script>
<style>
</style>