<template>
    <footer>
        <div class="container d-flex align-center" style="height: 100%; border-top: 1px solid var(--v-outline-base)">
            <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">
                <p class="text-subtitle-2 my-0">
                    &copy; 2022 Mercedes-Benz Tech Innovation | All rights reserved
                </p>
            </v-toolbar-title>

            <slot>
                
            </slot>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'MbtiFooter',

    components: {},

    props: {},

    data: () => ({}),

    computed: {},

    methods: {},

    mounted() {},
};
</script>

<style scoped>
footer {
    position: absolute;
    height: 100px;
    bottom: -100px;
    width: 100%;
}
</style>