<template>
    <div>
        <p class="text-overline primary--text">{{ overline }}</p>
        <div v-if="size === 'h1'">
            <h1 :class="`text-${size}`">{{ titleRow1 }}</h1>
            <h1 v-if="titleRow2" :class="`text-${size}`">{{ titleRow2 }}</h1>
        </div>
        <div v-if="size === 'h2'">
            <h2 :class="`text-${size}`">{{ titleRow1 }}</h2>
            <h2 v-if="titleRow2" :class="`text-${size}`">{{ titleRow2 }}</h2>
        </div>
        <div v-if="size === 'h3'">
            <h3 :class="`text-${size}`">{{ titleRow1 }}</h3>
            <h3 v-if="titleRow2" :class="`text-${size}`">{{ titleRow2 }}</h3>
        </div>
        <div v-if="size === 'h4'">
            <h4 :class="`text-${size}`">{{ titleRow1 }}</h4>
            <h4 v-if="titleRow2" :class="`text-${size}`">{{ titleRow2 }}</h4>
        </div>
        <hr
            v-if="divider"
            :style="`
                background-color: var(--v-primary-base);
                border: 0px;
                width: ${hrWidth};
                height: ${hrHeight};
            `"
        />
    </div>
</template>

<script>
export default {
    name: "MbtiHeadline",

    components: {},

    props: {
        overline: String,
        size: {
            type: String,
            default: "h1",
            validator: function (value) {
                return ["h1", "h2", "h3", "h4"].includes(value);
            },
        },
        divider: {
            type: Boolean,
            required: false,
            default: false,
        },
        titleRow1: {
            type: String,
            required: true,
        },
        titleRow2: {
            type: String,
            required: false,
        },
    },

    data: () => ({}),

    computed: {
        hrHeight() {
            if (this.$vuetify.breakpoint.mdAndDown) {
                return "3px";
            }
            return "4px";
        },
        hrWidth() {
            switch (this.size) {
                case "h1":
                    return this.$vuetify.breakpoint.mdAndDown
                        ? "76px"
                        : "114px";
                case "h2":
                    return this.$vuetify.breakpoint.mdAndDown
                        ? "63px"
                        : "101px";
                case "h3":
                    return this.$vuetify.breakpoint.mdAndDown ? "50px" : "76px";
                case "h4":
                    return this.$vuetify.breakpoint.mdAndDown ? "41px" : "54px";
            }
            return "76px";
        },
    },

    methods: {},

    mounted() {},
};
</script>

<style scoped>
</style>