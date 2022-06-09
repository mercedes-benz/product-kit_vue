<template>
    <nav>
        <div class="d-flex align-center pt-0" style="height: 100%">
            <!-- <slot>
            </slot> -->
            <!-- <div
                v-for="(item, index) in items"
                :key="index"
                :class="activeItem == index ? 'active' : 'notActive'"
            >
                <v-btn
                    text
                    :ripple="false"
                    :class="activeItem == index ? 'textColor' : 'textColorGray'"
                    v-if="'left' in item && item.left"
                    @click="clicked(item, index)"
                >
                    <v-icon
                        v-if="'icon' in item && item.icon"
                        left
                        :dark="'dark' in item && item.dark"
                    >
                        {{ item.iconName }}
                    </v-icon>
                    {{ item.title }}
                </v-btn>
                <v-btn
                    text
                    :ripple="false"
                    :class="activeItem == index ? 'textColor' : 'textColorGray'"
                    v-else-if="'right' in item && item.right"
                    @click="clicked(item, index)"
                >
                    {{ item.title }}
                    <v-icon
                        v-if="'icon' in item && item.icon"
                        right
                        :dark="'dark' in item && item.dark"
                    >
                        {{ item.iconName }}
                    </v-icon>
                </v-btn>
                <v-btn
                    v-else
                    text
                    :class="activeItem == index ? 'textColor' : 'textColorGray'"
                    :ripple="false"
                    @click="clicked(item, index)"
                >
                    {{ item.title }}
                </v-btn>
            </div> -->
            <v-tabs
                background-color="transparent"
                class="no-hover"
                optional
                center-active
                show-arrows
            >
                <slot />
            </v-tabs>
        </div>
    </nav>
</template>

<script>
export default {
    name: "MbtiNav",

    components: {},

    props: {},

    data: () => ({}),

    computed: {},

    methods: {
        clicked(index) {
            this.activeItem = index;
        },
    },

    mounted() {
        console.log(this.$router.currentRoute.path);
    },
};
</script>

<style>
/* nav {
    border-top: 1px solid var(--v-outline-base);
} */
.v-tabs-slider-wrapper {
    top: 0 !important;
}
.v-tab:before {
    display: none;
}
.v-tab:hover {
    color: var(--v-primary-base) !important;
}
.textColor {
    color: var(--v-background-contrast-base);
}
.textColor::before {
    display: none;
}
.textColorGray {
    color: var(--v-background-contrast-base);
    opacity: 0.62;
}
.textColorGray:hover {
    color: var(--v-background-contrast-base);
    opacity: 1;
}
.textColorGray::before {
    display: none;
}
</style>