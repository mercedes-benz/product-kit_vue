// SPDX-License-Identifier: MIT

import * as tokens from "@daimler/productkit-core/exports/web/styles/js/variables";
import * as tokensDark from "@daimler/productkit-core/exports/web/styles/js/variables-dark";

require('./overrides.scss')

const colorObject = {
    deepblue: {
        base: tokens.colorBrandDeepblue500,
        lighten1: tokens.colorBrandDeepblue400,
        lighten2: tokens.colorBrandDeepblue300,
        lighten3: tokens.colorBrandDeepblue200,
        lighten4: tokens.colorBrandDeepblue100,
        lighten5: tokens.colorBrandDeepblue50,
        darken1: tokens.colorBrandDeepblue600,
        darken2: tokens.colorBrandDeepblue700,
        darken3: tokens.colorBrandDeepblue800,
        darken4: tokens.colorBrandDeepblue900,
    },
    grayblue: {
        base: tokens.colorBrandGrayblue500,
        lighten1: tokens.colorBrandGrayblue400,
        lighten2: tokens.colorBrandGrayblue300,
        lighten3: tokens.colorBrandGrayblue200,
        lighten4: tokens.colorBrandGrayblue100,
        lighten5: tokens.colorBrandGrayblue50,
        darken1: tokens.colorBrandGrayblue600,
        darken2: tokens.colorBrandGrayblue700,
        darken3: tokens.colorBrandGrayblue800,
        darken4: tokens.colorBrandGrayblue900,
    },
    neutral: {
        base: tokens.colorBrandNeutral500,
        lighten1: tokens.colorBrandNeutral400,
        lighten2: tokens.colorBrandNeutral300,
        lighten3: tokens.colorBrandNeutral200,
        lighten4: tokens.colorBrandNeutral100,
        lighten5: tokens.colorBrandNeutral50,
        darken1: tokens.colorBrandNeutral600,
        darken2: tokens.colorBrandNeutral700,
        darken3: tokens.colorBrandNeutral800,
        darken4: tokens.colorBrandNeutral900,
    },
}

const colorNames = ["neutral", "blue", "deepblue", "grayblue", "pink", "purple", "red", "green"]
const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]

colorNames.forEach(color => {
    shades.forEach(shade => {
        var name = "colorBrand" + color.charAt(0).toUpperCase() + color.slice(1) + shade
        var name2 = color + "-" + shade
        var temp = tokens[name]
        var variable = {}
        variable[name2] = temp
        Object.assign(colorObject, variable)
    });
});

console.log(colorObject)

const colors = {
    theme: {
        themes: {
            light: {
                primary: tokens.colorApplicationPrimary,
                "primary-contrast": tokens.colorApplicationContrastPrimary,
                secondary: tokens.colorApplicationSecondary,
                "secondary-contrast": tokens.colorApplicationContrastSecondary,
                tertiary: tokens.colorApplicationTertiary,
                "tertiary-contrast": tokens.colorApplicationContrastTertiary,
                quaternary: tokens.colorApplicationQuaternary,
                "quaternary-contrast": tokens.colorApplicationContrastQuaternary,
                error: tokens.colorApplicationError,
                "error-contrast": tokens.colorApplicationContrastError,
                background: tokens.colorApplicationBackground,
                "background-contrast": tokens.colorApplicationContrastBackground,
                surface: tokens.colorApplicationSurface,
                "surface-contrast": tokens.colorApplicationContrastSurface,
                outline: tokens.colorApplicationOutline,
                "outline-contrast": tokens.colorApplicationContrastOutline,
            },
            dark: {
                primary: tokensDark.colorApplicationPrimary,
                "primary-contrast": tokensDark.colorApplicationContrastPrimary,
                secondary: tokensDark.colorApplicationSecondary,
                "secondary-contrast": tokensDark.colorApplicationContrastSecondary,
                tertiary: tokensDark.colorApplicationTertiary,
                "tertiary-contrast": tokensDark.colorApplicationContrastTertiary,
                quaternary: tokensDark.colorApplicationQuaternary,
                "quaternary-contrast": tokensDark.colorApplicationContrastQuaternary,
                error: tokensDark.colorApplicationError,
                "error-contrast": tokensDark.colorApplicationContrastError,
                background: tokensDark.colorApplicationBackground,
                "background-contrast": tokensDark.colorApplicationContrastBackground,
                surface: tokensDark.colorApplicationSurface,
                "surface-contrast": tokensDark.colorApplicationContrastSurface,
                outline: tokensDark.colorApplicationOutline,
                "outline-contrast": tokensDark.colorApplicationContrastOutline,
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