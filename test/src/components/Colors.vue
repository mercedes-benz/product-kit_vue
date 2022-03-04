<template>
    <div>
        <v-subheader>
            Applications and Brand Colors
        </v-subheader>
        <v-row justify="center">
            <v-col cols="auto">
                <v-btn class="my-4" color="primary" @click="getColor()">
                    Compute Contrast
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" v-if="contrastComputed">
            <v-col cols="auto">
                Violations:
                <v-chip
                    class="mx-1"
                    color="primary"
                >
                    Normal Text: {{ violationsNormal }}
                </v-chip>
                <v-chip
                    class="mx-1"
                    color="primary"
                >
                    Large Text: {{ violationsLarge }}
                </v-chip>
            </v-col>
        </v-row>
        <v-container v-for="color in temp" :key="color.name">
            <v-subheader>
                {{ color.name }}
            </v-subheader>
            <v-row justify="center">
                <v-col
                    v-for="shade in color.shades"
                    :key="shade.name"
                    class="pa-0 ma-0 text-center"
                    cols="1.2"
                >
                    <v-sheet
                        :id="
                            shade.name.split(' ')[0] +
                            '-' +
                            shade.name.split(' ')[1]
                        "
                        class="pa-1 pt-3"
                        :color="shade.name"
                        style="height: 120px"
                    >
                        <div>
                            {{ shade.name }}
                            <br />
                            <div v-if="shade.contrast != 'tba'">
                                {{ shade.contrast }}
                            </div>
                        </div>
                    </v-sheet>
                    <div v-if="shade.contrast != 'tba'">
                        <v-chip
                            v-if="shade.contrast >= 4.5"
                            class="mt-1 mx-1"
                            color="green lighten-4"
                        >
                            Normal
                            <v-icon right> mdi-check </v-icon>
                        </v-chip>
                        <v-chip
                            v-else
                            class="mt-1 mx-1"
                            color="red"
                            text-color="white"
                        >
                            Normal
                            <v-icon right> mdi-close </v-icon>
                        </v-chip>

                        <v-chip
                            v-if="shade.contrast >= 3.0"
                            class="mt-1 mx-1"
                            color="green lighten-4"
                        >
                            Large
                            <v-icon right> mdi-check </v-icon>
                        </v-chip>
                        <v-chip
                            v-else
                            class="mt-1 mx-1"
                            color="red"
                            text-color="white"
                        >
                            Large
                            <v-icon right> mdi-close </v-icon>
                        </v-chip>
                    </div>
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
            "base",
            "darken-1",
            "darken-2",
            "darken-3",
            "darken-4",
        ],
        temp: {},
        contrastComputed: false,
        violationsNormal: 0,
        violationsLarge: 0
    }),

    computed: {},

    methods: {
        colorsArray() {
            var result = [];
            result.push({
                name: "application",
                shades: [
                    {
                        name: "primary",
                        contrast: "tba",
                    },
                    {
                        name: "secondary",
                        contrast: "tba",
                    },
                    {
                        name: "tertiary",
                        contrast: "tba",
                    },
                    {
                        name: "quaternary",
                        contrast: "tba",
                    },
                    {
                        name: "background",
                        contrast: "tba",
                    },
                    {
                        name: "surface",
                        contrast: "tba",
                    },
                    {
                        name: "error",
                        contrast: "tba",
                    },
                    {
                        name: "outline",
                        contrast: "tba",
                    },
                ],
            });
            this.colorNames.forEach((color) => {
                var temp = { name: color };
                var temp2 = [];
                this.shades.forEach((shade) => {
                    temp2.push({
                        name: color + " " + shade,
                        contrast: "tba",
                    });
                });
                temp["shades"] = temp2;
                result.push(temp);
            });
            this.temp = result;
        },

        getColor() {
            this.violationsNormal = 0;
            this.violationsLarge = 0;
            this.temp.forEach((colors) => {
                colors.shades.forEach((shade) => {
                    var iden =
                        shade.name.split(" ")[0] +
                        "-" +
                        shade.name.split(" ")[1];
                    var element = document.getElementById(iden);
                    var fg = this.rgbForm(getComputedStyle(element).color);
                    var bg = this.rgbForm(
                        getComputedStyle(element).backgroundColor
                    );
                    //console.log(fg);
                    //console.log(bg);
                    var cr = this.contrastRatio(fg, bg)
                    console.log(cr);
                    console.log(this.colorsArray[1]);
                    if(cr < 4.5) {
                        this.violationsNormal++;
                        if(cr < 3.0) {
                            this.violationsLarge++;
                        }
                    }
                    this.contrastComputed = true;
                    shade.contrast = cr;
                    //alert(elem.style.backgroundColor);
                });
            });
        },

        rgbForm(rgb) {
            return rgb.split("(")[1].split(")")[0].split(", ");
        },

        contrastRatio(colorFg, colorBg) {
            return this.computeContrast(colorFg, colorBg).toFixed(2);
        },

        hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? [
                      parseInt(result[1], 16),
                      parseInt(result[2], 16),
                      parseInt(result[3], 16),
                  ]
                : null;
        },

        luminance(r, g, b) {
            var a = [r, g, b].map(function (v) {
                v /= 255;
                return v <= 0.03928
                    ? v / 12.92
                    : Math.pow((v + 0.055) / 1.055, 2.4);
            });
            return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        },

        computeContrast(rgb1, rgb2) {
            var lum1 = this.luminance(rgb1[0], rgb1[1], rgb1[2]);
            var lum2 = this.luminance(rgb2[0], rgb2[1], rgb2[2]);
            var brightest = Math.max(lum1, lum2);
            var darkest = Math.min(lum1, lum2);
            return (brightest + 0.05) / (darkest + 0.05);
        },
    },

    created() {
        this.colorsArray();
    },
};
</script>

<style scoped>
.colorSquare {
    height: 90px;
}
</style>