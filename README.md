<!-- SPDX-License-Identifier: MIT --->
<!-- © Daimler TSS GmbH --->

![Product Kit Vue Logo](./docs/images/productkit_vue_github_logo.png)

[![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)](LICENSE)
![vue](https://img.shields.io/badge/vue-2.6.11-brightgreen.svg)
![vuetify](https://img.shields.io/badge/vuetify-2.6.0-brightgreen.svg)

Product Kit for Vue provides components for Daimler TSS web frontends based on the material design framework Vuetify.

Feel free to open an [issue](https://github.com/mercedes-benz/product-kit_vue/issues) or provide a pull request with the desired modifications.

## Examples

<figure>
<img src="./docs/images/example_pk_vue_light.png" alt="Examples of UI Components light" style="width:100vw">
<figcaption align = "center"><b>Fig. 1 - Product Kit Vue Light Theme</b></figcaption>
</figure>
<figure>
<img src="./docs/images/example_pk_vue_dark.png" alt="Examples of UI Components dark" style="width:100vw">
<figcaption align = "center"><b>Fig. 2 - Product Kit Vue Dark Theme</b></figcaption>
</figure>

## Installation

_Note that you must have node (with npm) and vue.js installed._

Create a new vue.js project using vue CLI and add Vuetify

```console
vue create my-app
cd my-app
vue add vuetify
```

Install the npm package from the root directory through:

```console
npm install @daimler/productkit-vue
```

Include the following line in the `src/plugins/vuetify.js` file:

```javascript
import colors from "@daimler/productkit-vue/src/theme/colors.js";
```

Add the imported preset in the existing `export` statement as

```javascript
export default new Vuetify({
  preset: colors,
});
```

Lastly, copy and paste the following block in the `module.exports` object in `vue.config.js`:

```javascript
css: {
  loaderOptions: {
    scss: { // 9.0.0
      additionalData: `
        @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens;
        @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark;
        @import "@daimler/productkit-vue/src/theme/variables.scss";
      `,
    },
    sass: { // 9.0.0
      additionalData: `
        @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens
        @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark
        @import "@daimler/productkit-vue/src/theme/variables.scss"
      `,
    },
  },
},
```

Your Vuetify components should now be styled accordingly to the styleguide of Daimler TSS!

## Usage

### Colors

Product Kit Vue comes with all custom Daimler TSS colors like `primary` (corporate blue) or `secondary` (corporate pink) and their shades (`lighten-1` to `lighten 5` and `darken-1` to `darken-4`). It furthermore supports the standard Vuetify color palette, including colors like `green` or `blue-grey`.

You can use the custom Daimler TSS colors in different ways:

- In the `color` attribute of supporting elements like `v-btn` or `v-sheet`
- Adding `class="primary"` to an element will change the background color of it. Adding for example `class="primary darken-3"` will apply a darker blue
- Font color is set automatically based on the background-color. If you want to use a specific font color you can do so by applying for example the `primary--text` class. Combined with the `text-lighten-1` class the text will appear slightly lighter
- In CSS you can use `var(--v-primary-base)` or `var(--v-primary-lighten1)`

```html
<v-btn color="primary" raised large> Button </v-btn>

<v-btn color="secondary lighten-2" tile> Button </v-btn>

<v-sheet
  color="secondary"
  style="border: 1px solid var(--v-secondary-darken4)"
  height="200px"
></v-sheet>

<span class="primary--text">Hello World!</span>
```

> For further information on colors visit the [Vuetify Colors Documentation](https://vuetifyjs.com/en/styles/colors/). All custom colors of Daimler TSS are mentioned in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core). Note: Contrast colors are used as text colors. If text is displayed on the background color `primary` the text color should be `contrast-primary`.

### Spacing

The standard way of applying spacing in Vuetify is adding for example `class="pa-4"` for padding or `class="ma-4"` for margin. With Product Kit Vue, you are now also able to use custom and responsive spacings for `padding` and `margin` by applying t-shirt sizes (`3xs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`) instead of absolute numbers. The spacing will now be responsive regarding the width of the screen:

```html
<v-btn class="ma-xl"> Button </v-btn>

<v-sheet class="pt-m" height="300px"></v-sheet>
```

> For further information on Vuetify spacings visit the [Vuetify Spacing Documentation](https://vuetifyjs.com/en/styles/spacing/). Information on responsive spacings with t-shirt sizes can be found in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core)

### Container

When building applications with Vuetify and Product Kit Vue, you should use `v-main` as a wrapper container after `v-app`, as it includes responsive margins and max-widths.

```html
<v-app>
  <v-main>
    <router-view /> <!--for example-->
  </v-main>
</v-app>
```

When you don't wish to use responsive margins and max-widths, you can add `class="fluid"` to the `v-main` tag. Your main-content will now always stretch 95% of the available space, regardless of the screen size. This could come in handy for layouts like dashboards.

```html
<v-app>
  <v-main class="fluid"> ... </v-main>
</v-app>
```

### Typography

You can use typography as you are used to from Vuetify. Custom Daimler TSS responsive tokens are applied automatically. For accessibility reasons it is recommended to always use the referring `html` tag to display a typography-class:

```html
<h1 class="text-h1">I'm a h1</h1>

<h5 class="text-h1">
  I also look like h1 although I'm a h5 so this should be avoided
</h5>

<span class="text-overline">I'm an overline</span>
```

> Information on the custom Daimler TSS typography can be found in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core)

### Darkmode

In Vuetify, you can toggle dark mode by accessing the `$vuetify` object like following:

```javascript
toggleDarkMode() {
  this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
},
```

This will change the theme from light to dark and vice versa on every call. For example, one could change the theme with a `v-switch` like this:

```html
<v-switch
  v-model="darkSwitch"
  label="Darkmode"
  color="primary"
  @change="toggleDarkMode"
  hide-details
></v-switch>
```

The Daimler TSS application colors like `primary` are also automatically changed when switching to dark mode (see examples).

### Elevation

In darkmode, you can use the `elevation` attribute in supported elements like `v-card` to also change the surface color of the element: Higher elevation, lighter surface, as described in the [Material Design documentation](https://material.io/design/color/dark-theme.html#properties).

## Contributing

We welcome any contributions.
If you want to contribute to this project, please read the [contributing guide](CONTRIBUTING.md).

## Code of Conduct

Please read our [Code of Conduct](https://github.com/Daimler/daimler-foss/blob/master/CODE_OF_CONDUCT.md) as it is our base for interaction.

## License

This project is licensed under the [MIT LICENSE](LICENSE).

## Provider Information

Please visit <https://www.daimler-tss.com/en/imprint/> for information on the provider.

Notice: Before you use the program in productive use, please take all necessary precautions,
e.g. testing and verifying the program with regard to your specific use.
The program was tested solely for our own use cases, which might differ from yours.
