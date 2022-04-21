<template>
    <div :class="isActive ? 'active' : ''">
        <v-btn text v-if="left" @click="onclick">
            <v-icon v-if="icon" left :dark="dark"> {{ iconName }} </v-icon>
            {{ title }}
        </v-btn>
        <v-btn text v-else @click="onclick">
            {{ title }}
            <v-icon v-if="icon" right :dark="dark"> {{ iconName }} </v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "MbtiNavItem",

    components: {},

    props: {
        icon: Boolean,
        left: Boolean,
        right: Boolean,
        dark: Boolean,
        iconName: String,
        title: String,
        onclick: Function,
    },

    data: () => ({
        isActive: false
    }),

    computed: {},

    methods: {
        clicked() {
            this.isActive
        }
    },

    mounted() {},
};
</script>

<style scoped>
.active {
    border-top: 2px solid var(--v-primary-base);
}
</style>