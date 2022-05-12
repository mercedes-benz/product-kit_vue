<!-- SPDX-License-Identifier: MIT -->

<template>
    <ExampleWrapper>
        <v-row>
            <v-col cols="6">
                <v-subheader>Breadcrumbs</v-subheader>
                <v-breadcrumbs :items="links"></v-breadcrumbs>
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
                        <v-btn color="primary" raised>
                            <v-icon left> mdi-home</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="primary" text>
                            <v-icon left> mdi-heart</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="primary" outlined>
                            <v-icon left> mdi-plus</v-icon>
                            Button
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col cols="4" class="text-left">
                        <v-btn icon color="primary">
                            <v-icon> mdi-home</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-btn color="primary" plain>
                            <v-icon left> mdi-heart</v-icon>
                            Plain Button
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-right">
                        <v-btn color="primary" plain> Plain Button </v-btn>
                    </v-col>
                </v-row>
                <v-subheader>Top App Bar</v-subheader>
                <Dense />
                <v-subheader>Controls</v-subheader>
                <v-checkbox label="This is a checkbox" hide-details />
                <v-checkbox
                    label="This is a checkbox"
                    hide-details
                    indeterminate
                />
                <v-checkbox
                    v-model="checked"
                    label="This is a checkbox"
                    hide-details
                />
                <v-radio-group v-model="radioGroup">
                    <v-radio
                        v-for="n in 3"
                        :key="n"
                        :label="`Radio ${n}`"
                        :value="n"
                    ></v-radio>
                </v-radio-group>
                <v-slider
                    hint="Im a hint"
                    max="50"
                    value="20"
                    min="0"
                    label="Slider"
                    thumb-label
                    hide-details
                ></v-slider>
                <v-switch
                    v-model="checked"
                    label="Switch"
                    hide-details
                ></v-switch>
                <v-otp-input style="max-width: 400px" length="6"></v-otp-input>
            </v-col>
            <v-col cols="6">
                <v-subheader>Alert</v-subheader>
                <v-alert color="primary"> This is an alert </v-alert>
                <v-alert outlined color="primary">
                    This is an outlined alert
                </v-alert>
                <v-alert text color="primary"> This is a text alert </v-alert>
                <v-subheader>Chips</v-subheader>
                <v-chip color="primary" class="mr-2">
                    <v-icon left> mdi-home </v-icon>
                    Normal Chip
                </v-chip>
                <v-chip outlined color="primary">
                    <v-icon left> mdi-home </v-icon>
                    Outlined Chip
                </v-chip>
                <v-subheader>Card</v-subheader>
                <OutlinedCards />
                <v-subheader>Icons</v-subheader>
                <v-icon color="primary" class="mr-2"> mdi-home </v-icon>
                <v-icon color="primary" disabled> mdi-home </v-icon>
                <!-- <v-subheader>Colored Navigation Drawers</v-subheader>
                <ColoredDrawer /> -->
                <v-subheader>Pagination</v-subheader>
                <v-pagination v-model="page" :length="6"></v-pagination>
                <!-- <v-subheader>Time Picker</v-subheader>
                <v-time-picker scrollable format="24hr"></v-time-picker> -->
            </v-col>
            <v-col cols="12">
                <v-subheader>Stepper</v-subheader>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                            Name of step 1
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">
                            Name of step 2
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">
                            Name of step 3
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                                color="grey lighten-1"
                                height="200px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 2">
                                Continue
                            </v-btn>

                            <v-btn text> Cancel </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-card
                                class="mb-12"
                                color="grey lighten-1"
                                height="200px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 3">
                                Continue
                            </v-btn>

                            <v-btn text> Cancel </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-card
                                class="mb-12"
                                color="grey lighten-1"
                                height="200px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 1">
                                Continue
                            </v-btn>

                            <v-btn text> Cancel </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
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
        e1: 1,
        page: 3,
        selection: 1,
        checked: true,
        radioGroup: 1,
        links: [
            {
                text: "Dashboard",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
            {
                text: "Link 1",
                disabled: false,
                href: "breadcrumbs_link_1",
            },
            {
                text: "Link 2",
                disabled: true,
                href: "breadcrumbs_link_2",
            },
        ],
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