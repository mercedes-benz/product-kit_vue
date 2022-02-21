<template>
    <div>
        <div class="text-center">
            <v-btn
                id="1"
                class="ma-2"
                tile
                color="indigo"
                @click="sourceSheet = !sourceSheet"
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
                    
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!--<v-bottom-sheet v-model="sourceSheet" inset>
            <v-sheet>
                <v-row justify="center">
                    <v-col cols="12" class="text-center">
                        <v-btn text color="red" @click="sheet = !sheet">
                            close
                        </v-btn>
                    </v-col>
                    <v-col
                        cols="auto"
                        class="mb-5 mt-0"
                        style="
                            background-color: lightgrey;
                            border: 1px solid black;
                        "
                    >
                        <pre><code style="background-color: transparent">{{sourceCode}}</code></pre>
                    </v-col>
                </v-row></v-sheet
            >
        </v-bottom-sheet>-->
    </div>
</template>

<script>
export default {
    name: "Tile",

    data: () => ({
        sourceSheet: false,
        sourceCode: '<v-btn \n\ttile \n\tcolor="indigo"\n></v-btn>',
    }),

    methods: {
        copy() {
            navigator.clipboard.writeText(this.sourceCode);
        },
    }
};
</script>
