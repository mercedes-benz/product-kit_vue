import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import colors from 'vuetify/lib/util/colors';

const variables = require('../styles/overrides.scss')
console.log(variables)

/*const colors = {
    blue: {
        base: variables.blue,
        darken1: variables.blueD1
    }
}*/

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
                //tertiary: color-application-tertiary,
            }
        },
    },
}

//Object.assign(preset.theme.themes.light, colors)
//Object.assign(preset.theme.themes.dark, colors)

Vue.use(Vuetify);

export default new Vuetify({
    preset
});
