<template>
    <div>
        <v-container v-for="color in colorsArray" :key="color.name">
            <v-subheader>
                {{ color.name }}
            </v-subheader>
            <v-row justify="center">
                <v-col
                    v-for="shade in color.shades"
                    :key="shade"
                    class="pa-0 ma-0"
                    cols="1.2"
                >
                    <v-sheet class="pa-1 text-center" :color="shade" style="height: 120px">
                            <v-col>{{ shade }}</v-col>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Colors",

    data: () => ({
        colorNames: [
            "neutral",
            "blue",
            "deepblue",
            "grayblue",
            "pink",
            "purple",
            "red",
            "green",
        ],
        shades: [
            "lighten-5",
            "lighten-4",
            "lighten-3",
            "lighten-2",
            "lighten-1",
            "",
            "darken-1",
            "darken-2",
            "darken-3",
            "darken-4",
        ],
    }),

    computed: {
        colorsArray() {
            var result = [];
            result.push({
                name: "application",
                shades: [
                    "primary",
                    "secondary",
                    "tertiary",
                    "quaternary",
                    "background",
                    "surface",
                    "error",
                    "outline",
                ],
            });
            this.colorNames.forEach((color) => {
                var temp = { name: color };
                var temp2 = [];
                this.shades.forEach((shade) => {
                    temp2.push(color + " " + shade);
                });
                temp["shades"] = temp2;
                result.push(temp);
            });
            return result;
        },
    },
};
</script>

<style scoped>
.colorSquare {
    height: 90px;
}
</style>