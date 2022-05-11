// SPDX-License-Identifier: MIT

import * as tokens from "../../../core/exports/web/styles/mbti/js/variables";
import * as tokensDark from "../../../core/exports/web/styles/mbti/js/variables-dark";

require('./overrides.scss')

var colorObject = {}
var application = {}
application["light"] = {}
application["dark"] = {}

const colorNames = ["neutral", "goldentanoi", "deepblue", "deluge", "xanadu", "lividbrown", "red", "green"]
const applicationColors = ["primary", "primary-variant", "secondary", "tertiary", "quaternary", "background", "surface", "outline", "error", "success"]

const shades = [
    { shade: "50", vueShade: "lighten5" },
    { shade: "100", vueShade: "lighten4" },
    { shade: "200", vueShade: "lighten3" },
    { shade: "300", vueShade: "lighten2" },
    { shade: "400", vueShade: "lighten1" },
    { shade: "500", vueShade: "base" },
    { shade: "600", vueShade: "darken1" },
    { shade: "700", vueShade: "darken2" },
    { shade: "800", vueShade: "darken3" },
    { shade: "900", vueShade: "darken4" },
]


colorNames.forEach(color => {
    var colorPiece = {}
    colorPiece[color] = {}
    shades.forEach(shade => {
        var name = "colorBrand" + color.charAt(0).toUpperCase() + color.slice(1) + shade.shade
        var temp = tokens[name]
        colorPiece[color][shade.vueShade] = temp
    });
    Object.assign(colorObject, colorPiece)
});

colorNames.forEach(color => {
    var colorPiece = {}
    colorPiece[color + "-contrast"] = {}
    shades.forEach(shade => {
        var name = "colorBrand" + color.charAt(0).toUpperCase() + color.slice(1) + "Contrast" + shade.shade
        var temp = tokens[name]
        colorPiece[color + "-contrast"][shade.vueShade] = temp
    });
    Object.assign(colorObject, colorPiece)
});

colorNames.forEach(color => {
    shades.forEach(shade => {
        var name = "colorBrand" + color.charAt(0).toUpperCase() + color.slice(1) + shade.shade
        var name2 = color + "-" + shade.shade
        var temp = tokens[name]
        var variable = {}
        variable[name2] = temp
        Object.assign(colorObject, variable)
    });
});

colorNames.forEach(color => {
    shades.forEach(shade => {
        var name = "colorBrand" + color.charAt(0).toUpperCase() + color.slice(1) + "Contrast" + shade.shade
        var name2 = color + "-contrast-" + shade.shade
        var temp = tokens[name]
        var variable = {}
        variable[name2] = temp
        Object.assign(colorObject, variable)
    });
});

applicationColors.forEach(color => {
    var name = "colorApplication" + (color === "primary-variant" ? "PrimaryVariant" : color.charAt(0).toUpperCase() + color.slice(1))
    var nameContrast = "colorApplicationContrast" + (color === "primary-variant" ? "PrimaryVariant" : color.charAt(0).toUpperCase() + color.slice(1))
    application["light"][color] = tokens[name]
    application["light"][color + "-contrast"] = tokens[nameContrast]
    application["dark"][color] = tokensDark[name]
    application["dark"][color + "-contrast"] = tokensDark[nameContrast]
});

const colors = {
    theme: {
        themes: {
            light: {
                
            },
            dark: {

            }
        },
        options: {
            customProperties: true
        },
    },
}

Object.assign(colors.theme.themes, application)
console.log(colors)
Object.assign(colors.theme.themes.light, colorObject)
Object.assign(colors.theme.themes.dark, colorObject)

export default colors