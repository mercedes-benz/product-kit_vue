<template>
    <footer>
        <div
            class="d-flex align-center"
            style="height: 100%; border-top: 1px solid var(--v-outline-base)"
        >
            <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">
                <p class="text-subtitle-2 my-0">
                    &copy; 2022 Mercedes-Benz Tech Innovation | All rights
                    reserved
                </p>
            </v-toolbar-title>

            <slot> </slot>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MbtiFooter",

    components: {},

    props: {},

    data: () => ({}),

    computed: {},

    methods: {},

    mounted() {},
};
</script>

<style>
footer {
    position: absolute;
    height: 100px;
    bottom: 0px;
    width: 100%;
}
.v-application--wrap:after {
    content: "";
    display: block;
    height: 100px; /* Set same as footer's height */
}
</style>