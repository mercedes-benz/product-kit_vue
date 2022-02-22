<template>
    <div>
        <div class="text-center">
            <v-btn
                id="1"
                class="ma-2"
                tile
                color="indigo"
                @click="showSource()"
                >Tile Button</v-btn
            >
            <v-btn class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon> Edit
            </v-btn>
            <v-btn class="ma-2" tile large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
            </v-btn>

            <!--<code v-text="'<v-btn>'"></code>-->
        </div>
        <v-dialog v-model="sourceSheet" max-width="300">
            <v-card>
                <v-card-title class="text-h5"> Source Code </v-card-title>

                <v-card-text class="pb-0">
                    <v-row justify="center">
                        <v-col cols="auto" class="my-3">
                            <pre><code style="background-color: transparent; font-size: 20px">{{sourceCode}}</code></pre>

                            <v-btn absolute right top icon>
                                <v-icon @click="copy()">
                                    mdi-content-copy
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="sourceSheet = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "Tile",

    data: () => ({
        sourceSheet: false,
        elements: {
            name: "v-btn",
            attributes: [
                {
                    attribute: "tile",
                    value: null,
                },
                {
                    attribute: "color",
                    value: "indigo",
                },
            ],
            childs: [],
        },
        sourceCode: "",
        //sourceCode: '<v-btn \n\ttile \n\tcolor="indigo"\n></v-btn>',
    }),

    methods: {
        showSource() {
            var sc = "<" + this.elements.name;
            if (this.elements.attributes.length != 0) {
                this.elements.attributes.forEach((element) => {
                    sc += "\n\t" + element.attribute;
                    sc +=
                        element.value != null ? "='" + element.value + "'" : "";
                });
                sc += "\n>";
            } else {
                sc += ">";
            }
            if (this.elements.childs.length != 0) {
                for (let index = 0; index < array.length; index++) {
                    var depth = index++;
                    const child = array[index];
                    var temp = "<" + child.name;
                    if (child.attributes.length != 0) {
                        child.attributes.forEach((element) => {
                            temp += "\n\t" + element.attribute;
                            temp +=
                                element.value != null
                                    ? "='" + element.value + "'"
                                    : "";
                        });
                        temp += "\n>";
                    } else {
                        temp += ">";
                    }
                    temp += "</" + child.name + ">"
                    sc += temp
                }
                sc += "";
                sc += "\n</" + this.elements.name + ">";
            } else {
                sc += "</" + this.elements.name + ">";
            }
            this.sourceCode = sc
            this.sourceSheet = !this.sourceSheet;
        },
        copy() {
            navigator.clipboard.writeText(this.sourceCode);
        },
    },
};
</script>
