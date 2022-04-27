<template>
    <v-tab
        v-if="to"
        :ripple="false"
        :to="to"
        exact-active-class="active"
    >
        <v-icon
            v-if="icon"
            left
            :dark="dark"
        >
            {{ icon }}
        </v-icon>
        {{ title }}
    </v-tab>
    <v-tab
        v-else-if="external"
        :ripple="false"
        :href="external"
        target="_blank"
        exact-active-class="active"
    >
        <v-icon
            v-if="icon"
            left
            :dark="dark"
        >
            {{ icon }}
        </v-icon>
        {{ title }}
    </v-tab>
</template>

<script>
export default {
    name: "MbtiNavItem",

    components: {},

    props: {
        icon: {
            type: String,
            required: false,
            default: false
        },
        dark: {
            type: Boolean,
            required: false,
            default: false
        },
        title: {
            type: String,
            required: true,
            default: "Hello World"
        },
        onclick: {
            type: Function,
            required: false,
            default: null
        },
        to: {
            type: [String, Function],
            required: false,
            default: null
        },
        external: {
            type: [String, Function],
            required: false,
            default: null
        }
    },

    data: () => ({
        isActive: false,
    }),

    computed: {},

    methods: {
        clicked() {
            this.isActive;
        },
    },

    mounted() {},
};
</script>

<style scoped>
.active {
    color: var(--v-background-contrast-base) !important
}

</style>