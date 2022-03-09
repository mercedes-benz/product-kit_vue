const variables = require('./colors.scss')
const overrides = require('./overrides.scss')

const colorObject = {
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
        Object.assign(colorObject, variable)
    });
});

const colors = {
    theme: {
        themes: {
            light: {
                primary: variables.primaryL,
                "primary-contrast": variables.primaryContrastL,
                secondary: variables.secondaryL,
                "secondary-contrast": variables.secondaryContrastL,
                tertiary: variables.tertiaryL,
                "tertiary-contrast": variables.tertiaryContrastL,
                quaternary: variables.quaternaryL,
                "quaternary-contrast": variables.quaternaryContrastL,
                error: variables.errorL,
                "error-contrast": variables.errorContrastL,
                background: variables.backgroundL,
                "background-contrast": variables.backgroundContrastL,
                surface: variables.surfaceL,
                "surface-contrast": variables.surfaceContrastL,
                outline: variables.outlineL,
                "outline-contrast": variables.outlineContrastL,
            },
            dark: {
                primary: variables.primaryD,
                "primary-contrast": variables.primaryContrastD,
                secondary: variables.secondaryD,
                "secondary-contrast": variables.secondaryContrastD,
                tertiary: variables.tertiaryD,
                "tertiary-contrast": variables.tertiaryContrastD,
                quaternary: variables.quaternaryD,
                "quaternary-contrast": variables.quaternaryContrastD,
                error: variables.errorD,
                "error-contrast": variables.errorContrastD,
                background: variables.backgroundD,
                "background-contrast": variables.backgroundContrastD,
                surface: variables.surfaceD,
                "surface-contrast": variables.surfaceContrastD,
                outline: variables.outlineD,
                "outline-contrast": variables.outlineContrastD,
            }
        },
        options: {
            customProperties: true
        },
    },
}

Object.assign(colors.theme.themes.light, colorObject)
Object.assign(colors.theme.themes.dark, colorObject)

export default colors