<!-- SPDX-License-Identifier: MIT -->

<template>
    <div>
        <v-subheader>Columns</v-subheader>
        <v-container>
            <v-subheader>
                Number of columns per row, gutter size and margin changes
                depending on viewport width.
            </v-subheader>
            <v-row class="mx-3 my-3 mt-0 pt-0" justify="start">
                <v-col cols="12" md="auto">
                    <v-switch
                        inset
                        v-model="toggleD"
                        label="Dense"
                        color="primary"
                        hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" md="auto">
                    <v-switch
                        inset
                        v-model="toggleNG"
                        label="No-Gutters"
                        color="primary"
                        hide-details
                    ></v-switch>
                </v-col>
            </v-row>
            <div class="containerBGMargin">
                <v-row
                    class="containerBG"
                    :dense="toggleD"
                    :no-gutters="toggleNG"
                >
                    <v-col cols="3" sm="2" md="1" lg="1" xl="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1" id="colTest">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2" md="1">
                        <v-sheet color="secondary" height="200px"> </v-sheet>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Layout",

    data: () => ({
        toggleD: false,
        toggleNG: false,
        //getPadding: "",
    }),

    methods: {},

    watch: {
        toggleD: function () {
            if (this.toggleD) {
                this.toggleNG = false;
            }
            //this.getPadding = getComputedStyle(document.getElementById("colTest")).padding
        },
        toggleNG: function () {
            if (this.toggleNG) {
                this.toggleD = false;
            }
            //this.getPadding = getComputedStyle(document.getElementById("colTest")).padding
        },
    },
};
</script>

<style scoped>
</style>