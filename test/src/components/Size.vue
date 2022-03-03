<template>
    <div>
        <v-subheader>Standard Vuetify Spacings (not responsive)</v-subheader>
        <v-row justify="center">
            <v-col cols="auto">
                <v-btn class="my-4" color="primary" @click="getAbs()">
                    Absolute value
                </v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row no-gutters>
                <v-col v-for="size in standardSizes" :key="size.name" cols="4">
                    <v-container class="containerBG pa-0">
                        <v-sheet
                            :id="size.name"
                            :class="size.name"
                            class="pa-3"
                            color="secondary"
                            height="200px"
                        >
                            {{ size.name }}<br><span v-if="size.pixels != ''">({{ size.pixels }})</span>
                        </v-sheet>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <v-subheader>Custom T-Shirt Spacings A (responsive)</v-subheader>
        <v-row justify="center">
            <v-col cols="auto">
                <v-btn class="my-4" color="primary" @click="getAbsTShirt()">
                    Absolute value
                </v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row no-gutters justify="center">
                <v-col v-for="size in tShirtSizes" :key="size.name" cols="auto">
                    <v-container class="containerBG pa-0">
                        <v-sheet
                            :id="size.name"
                            :class="size.name"
                            class="pa-3"
                            style="min-width: 100px"
                            color="secondary"
                            height="200px"
                        >
                            {{ size.name }}<br><span v-if="size.pixels != ''">({{ size.pixels }})</span>
                        </v-sheet>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <v-subheader>Custom T-Shirt Spacings X (responsive)</v-subheader>
        <v-row justify="center">
            <v-col cols="auto">
                <v-btn class="my-4" color="primary" @click="getAbsTShirtX()">
                    Absolute value
                </v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row no-gutters justify="center">
                <v-col v-for="size in tShirtSizesX" :key="size.name" cols="auto">
                    <v-container class="containerBG pa-0">
                        <v-sheet
                            :id="size.name"
                            :class="size.name"
                            class="pa-3"
                            style="min-width: 100px"
                            color="secondary"
                            height="200px"
                        >
                            {{ size.name }}<br><span v-if="size.pixels != ''">({{ size.pixels }})</span>
                        </v-sheet>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <v-subheader>Custom T-Shirt Spacings Y (responsive)</v-subheader>
        <v-row justify="center">
            <v-col cols="auto">
                <v-btn class="my-4" color="primary" @click="getAbsTShirtY()">
                    Absolute value
                </v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row no-gutters justify="center">
                <v-col v-for="size in tShirtSizesY" :key="size.name" cols="auto">
                    <v-container class="containerBG pa-0">
                        <v-sheet
                            :id="size.name"
                            :class="size.name"
                            class="pa-3"
                            style="min-width: 100px"
                            color="secondary"
                            height="200px"
                        >
                            {{ size.name }}<br><span v-if="size.pixels != ''">({{ size.pixels }})</span>
                        </v-sheet>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Size",

    data: () => ({
        standardSizes: [
            { name: "ma-1", pixels: "" },
            { name: "mt-2", pixels: "" },
            { name: "mx-4", pixels: "" },
            { name: "my-8", pixels: "" },
            { name: "mb-10", pixels: "" },
            { name: "mr-16", pixels: "" },
        ],
        tShirtSizes: [
            { name: "ma-3xs", pixels: "" },
            { name: "ma-xxs", pixels: "" },
            { name: "ma-xs", pixels: "" },
            { name: "ma-s", pixels: "" },
            { name: "ma-m", pixels: "" },
            { name: "ma-l", pixels: "" },
            { name: "ma-xl", pixels: "" },
            { name: "ma-xxl", pixels: "" },
            { name: "ma-3xl", pixels: "" },
        ],
        tShirtSizesX: [
            { name: "mx-3xs", pixels: "" },
            { name: "mx-xxs", pixels: "" },
            { name: "mx-xs", pixels: "" },
            { name: "mx-s", pixels: "" },
            { name: "mx-m", pixels: "" },
            { name: "mx-l", pixels: "" },
            { name: "mx-xl", pixels: "" },
            { name: "mx-xxl", pixels: "" },
            { name: "mx-3xl", pixels: "" },
        ],
        tShirtSizesY: [
            { name: "my-3xs", pixels: "" },
            { name: "my-xxs", pixels: "" },
            { name: "my-xs", pixels: "" },
            { name: "my-s", pixels: "" },
            { name: "my-m", pixels: "" },
            { name: "my-l", pixels: "" },
            { name: "my-xl", pixels: "" },
            { name: "my-xxl", pixels: "" },
            { name: "my-3xl", pixels: "" },
        ],
    }),

    computed: {},

    methods: {
        getAbs() {
            this.standardSizes.forEach(element => {
                element.pixels = this.absolute(element.name)
            });
        },
        getAbsTShirt() {
            this.tShirtSizes.forEach(element => {
                element.pixels = this.absolute(element.name)
            });
        },
        getAbsTShirtX() {
            this.tShirtSizesX.forEach(element => {
                element.pixels = this.absolute(element.name)
            });
        },
        getAbsTShirtY() {
            this.tShirtSizesY.forEach(element => {
                element.pixels = this.absolute(element.name)
            });
        },
        absolute(iden) {
            switch (iden[1]) {
                case "l":
                case "x":
                case "a":
                    return getComputedStyle(document.getElementById(iden)).marginLeft;
                    break;
                case "t":
                case "y":
                    return getComputedStyle(document.getElementById(iden)).marginTop;
                    break;
                case "b":
                    return getComputedStyle(document.getElementById(iden)).marginBottom;
                    break;
                case "r":
                    return getComputedStyle(document.getElementById(iden)).marginRight;
                    break;
                default:
                    return "?"
                    break;
            }
        },
    },

    watch: {},
};
</script>

<style>
.containerBG {
    background-color: antiquewhite;
    border: 1px solid black;
}
.containerBGMargin {
    background-color: cornsilk;
    border: 1px solid black;
}
</style>