<!-- SPDX-License-Identifier: MIT -->

<template>
    <ExampleWrapper>
        <v-row>
            <v-col cols="6">
                <v-subheader>Button</v-subheader>
                <v-row justify="space-between">
                    <v-col cols="auto">
                        <v-btn color="primary" tile> Button </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="primary" text> Button </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="primary" outlined> Button </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="space-between">
                    <v-col cols="auto">
                        <v-btn color="secondary" raised>
                            <v-icon left> mdi-home</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="secondary" text>
                            <v-icon left> mdi-heart</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="secondary" outlined>
                            <v-icon left> mdi-plus</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                </v-row>
                <v-subheader>Top App Bar</v-subheader>
                <Dense />
                <!--<v-subheader>Navigation Drawer</v-subheader>
                <ColoredDrawer />-->
            </v-col>
            <v-col cols="6">
                <v-subheader>Card</v-subheader>
                <OutlinedCards />
                <!--<v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                >
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ms-4">4.5 (413)</div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            $ • Italian, Cafe
                        </div>

                        <div>
                            Small plates, salads & sandwiches - an intimate
                            setting with 12 indoor seats plus patio seating.
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"
                            column
                        >
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="reserve"
                        >
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>-->
            </v-col>
        </v-row>
    </ExampleWrapper>
</template>

<script>
import ExampleWrapper from "./ExampleWrapper";
import Dense from "./app-bars/Dense";
import ColoredDrawer from "./navigation-drawers/ColoredDrawer";
import OutlinedCards from "./cards/OutlinedCards";

export default {
    components: {
        ExampleWrapper,
        ColoredDrawer,
        OutlinedCards,
        Dense,
    },

    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        },
    },
};
</script>

<style>
</style>