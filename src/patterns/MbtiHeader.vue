<template>
    <header>
        <div class="pa-3 d-flex align-center" style="height: 100%">
            <slot name="logo"> </slot>
            <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">
                <p class="text-h4 py-0 my-0">{{ title }}</p>
                <p class="text-subtitle-2 my-0">
                    Mercedes-Benz Tech Innovation
                </p>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <slot name="actions"> </slot>
        </div>
    </header>
</template>

<script>
export default {
    name: "MbtiHeader",

    components: {},

    props: {
        logoUrl: String,
        title: String,
    },

    data: () => ({}),

    computed: {},

    methods: {},

    mounted() {},
};
</script>

<style scoped>
</style>