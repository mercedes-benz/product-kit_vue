import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import colors from 'vuetify/lib/util/colors';

const variables = require('../styles/overrides.scss')
console.log(variables)

const colors = {
    deepblue: {
        base: variables.db,
        lighten1: variables.dbL1,
        lighten2: variables.dbL2,
        lighten3: variables.dbL3,
        lighten4: variables.dbL4,
        lighten5: variables.dbL5,
        darken1: variables.dbD1,
        darken2: variables.dbD2,
        darken3: variables.dbD3,
        darken4: variables.dbD4
    },
    grayblue: {
        base: variables.gb,
        lighten1: variables.gbL1,
        lighten2: variables.gbL2,
        lighten3: variables.gbL3,
        lighten4: variables.gbL4,
        lighten5: variables.gbL5,
        darken1: variables.gbD1,
        darken2: variables.gbD2,
        darken3: variables.gbD3,
        darken4: variables.gbD4
    }
}

const preset = {
    theme: {
        themes: {
            light: {
                primary: variables.primaryL,
                secondary: variables.secondaryL,
                tertiary: variables.tertiaryL,
                quaternary: variables.quaternaryL,
                error: variables.errorL,
                //anchor: '#8c9eff',
            },
            dark: {
                primary: variables.primaryD,
                secondary: variables.secondaryD,
                tertiary: variables.tertiaryD,
                quaternary: variables.quaternaryD,
                error: variables.errorD,
            }
        },
    },
}

Object.assign(preset.theme.themes.light, colors)
Object.assign(preset.theme.themes.dark, colors)

Vue.use(Vuetify);

export default new Vuetify({
    preset
});
