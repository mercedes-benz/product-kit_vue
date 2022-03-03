const variables = require('./overrides.scss')
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
    },
    neutral: {
        base: variables['neutral-500'],
        lighten5: variables['neutral-50'],
        lighten4: variables['neutral-100'],
        lighten3: variables['neutral-200'],
        lighten2: variables['neutral-300'],
        lighten1: variables['neutral-400'],
        darken1: variables['neutral-600'],
        darken2: variables['neutral-700'],
        darken3: variables['neutral-800'],
        darken4: variables['neutral-900']
    },
}

const colorNames = ["neutral", "blue", "deepblue", "grayblue", "pink", "purple", "red", "green"]
const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]

colorNames.forEach(color => {
    shades.forEach(shade => {
        var name = color + "-" + shade
        var temp = variables[name]
        var variable = {}
        variable[name] = temp
        Object.assign(colors, variable)
    });
});
console.log(colors)

const preset = {
    theme: {
        themes: {
            light: {
                primary: variables.primaryL,
                secondary: variables.secondaryL,
                tertiary: variables.tertiaryL,
                quaternary: variables.quaternaryL,
                error: variables.errorL,
                background: variables.backgroundL,
                surface: variables.surfaceL,
                outline: variables.outlineL,
                //anchor: '#8c9eff',
            },
            dark: {
                primary: variables.primaryD,
                secondary: variables.secondaryD,
                tertiary: variables.tertiaryD,
                quaternary: variables.quaternaryD,
                error: variables.errorD,
                background: variables.backgroundD,
                surface: variables.surfaceD,
                outline: variables.outlineD,
            }
        },
        options: {
            customProperties: true
        },
    },
}

Object.assign(preset.theme.themes.light, colors)
Object.assign(preset.theme.themes.dark, colors)

export default preset