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
                        <h2 class="display-1 font-weight-bold mb-3">
                            Couldn't find this component
                        </h2>

                        <p class="subheading font-weight-regular">
                            If you think this should be implemented
                            <br />feel free to contribute on
                            <a
                                href="https://github.com/Joouis/vuetify-playground"
                                target="_blank"
                                >GitHub</a
                            >
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>