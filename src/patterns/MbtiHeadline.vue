<template>
    <div>
        <p class="text-overline">{{ overline }}</p>
        <h1 class="text-h1" style="font-family: 'CorpoA'">{{ titleRow1 }}</h1>
        <h1 class="text-h1">{{ titleRow2 }}</h1>
        <hr style="background-color: var(--v-primary-base); width: 200px; height: 5px">
    </div>
</template>

<script>
export default {
    name: "MbtiHeadline",

    components: {},

    props: {
        overline: String,
        titleRow1: String,
        titleRow2: String,
    },

    data: () => ({}),

    computed: {},

    methods: {},

    mounted() {},
};
</script>

<style scoped>
</style>