<!-- SPDX-License-Identifier: MIT -->

<template>
    <div>
        <div class="text-center">
            <v-btn
                id="1"
                class="ma-2"
                tile
                color="indigo"
                >Tile Button</v-btn
            >
            <v-btn class="ma-2" tile outlined color="secondary">
                <v-icon left>mdi-pencil</v-icon> Edit
            </v-btn>
            <v-btn class="ma-2" tile large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tile",

    data: () => ({
        
    }),

    methods: {
        
    },
};
</script>
