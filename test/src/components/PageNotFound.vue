<!-- SPDX-License-Identifier: MIT -->

<template>
    <v-container>
        <v-row align="center" no-gutters justify="center">
            <v-col cols="auto">
                <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>
            <v-col cols="auto" class="ml-s">

            </v-col>
        </v-row>
        <v-row align="center" no-gutters justify="center">
            <v-col cols="auto">
                <p class="subheading font-weight-regular">
                    If you think this should be implemented feel free to contribute on
                    <a
                        href="https://github.com/Joouis/vuetify-playground"
                        target="_blank"
                        >GitHub</a
                    >
                </p>
            </v-col>
        </v-row>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {},
};
</script>