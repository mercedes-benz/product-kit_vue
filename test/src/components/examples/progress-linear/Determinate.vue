<!-- SPDX-License-Identifier: MIT -->

<template>
    <div>
        <v-progress-linear
            v-model="valueDeterminate"
            color="primary"
        ></v-progress-linear>
        <br />
        <v-progress-linear
            v-model="valueDeterminate"
            color="secondary"
        ></v-progress-linear>
        <br />
        <v-progress-linear
            v-model="valueDeterminate"
            color="indigo darken-2"
        ></v-progress-linear>
        <br />
        <v-progress-linear
            v-model="valueDeterminate"
            color="amber"
        ></v-progress-linear>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valueDeterminate: 50,
        };
    },
};
</script>