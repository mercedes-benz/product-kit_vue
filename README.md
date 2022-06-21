<!-- SPDX-License-Identifier: MIT --->

![Product Kit Vue Logo](./docs/images/productkit_vue_github_logo.png)

[![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)](LICENSE)
![vue](https://img.shields.io/badge/vue-2.6.11-49B684.svg)
![vuetify](https://img.shields.io/badge/vuetify-2.6.6.svg) 

Product Kit Vue provides a theme for Mercedes-Benz Tech Innovation web frontends based on the material design framework Vuetify.

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
import colors from "@daimler/productkit-vue/src/theme/mbti/colors.js";
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
        @use "@daimler/productkit-core/dist/web/styles/mbti/scss/variables" as tokens;
        @use "@daimler/productkit-core/dist/web/styles/mbti/scss/variables-dark" as tokensDark;
        @use "sass:meta";
        @import "@daimler/productkit-vue/src/theme/variables.scss";
      `,
    },
    sass: { // 9.0.0
      additionalData: `
        @use "@daimler/productkit-core/dist/web/styles/mbti/scss/variables" as tokens
        @use "@daimler/productkit-core/dist/web/styles/mbti/scss/variables-dark" as tokensDark
        @use "sass:meta"
        @import "@daimler/productkit-vue/src/theme/variables.scss"
      `,
    },
  },
},
```

Your Vuetify components should now be styled accordingly to the styleguide of Mercedes-Benz Tech Innovation!

## Usage

### Colors

Product Kit Vue comes with all custom Mercedes-Benz Tech Innovation colors like `primary` (corporate blue) or `secondary` (corporate pink) and their shades (`lighten-1` to `lighten 5` and `darken-1` to `darken-4`). It furthermore supports the standard Vuetify color palette, including colors like `green` or `blue-grey`.

You can use the custom Mercedes-Benz Tech Innovation colors in different ways:

- In the `color` attribute of supporting elements like `v-btn` or `v-sheet`
- Adding `class="primary"` to an element will change the background color of it. Adding for example `class="primary darken-3"` will apply a darker blue
- Font color is set automatically based on the background-color. If you want to use a specific font color you can do so by applying for example the `primary--text` class (for company-blue) or `primary-contrast--text` class (for the specified contrast color for company-blue). Combined with the `text-lighten-1` class the text will appear slightly lighter.
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

> For further information on colors visit the [Vuetify Colors Documentation](https://vuetifyjs.com/en/styles/colors/). All custom colors of Mercedes-Benz Tech Innovation are mentioned in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core). Note: Contrast colors are used as text colors. If text is displayed on the background color `primary` the text color should be `contrast-primary`.

### Spacing

The standard way of applying spacing in Vuetify is adding for example `class="pa-4"` for padding or `class="ma-4"` for margin. With Product Kit Vue, you are now also able to use custom and responsive spacings for `padding` and `margin` by applying t-shirt sizes (`3xs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`) instead of absolute numbers. The spacing will now be responsive regarding the width of the screen:

```html
<v-btn class="ma-xl"> Button </v-btn>

<v-sheet class="pt-m" height="300px"></v-sheet>
```

> For further information on Vuetify spacings visit the [Vuetify Spacing Documentation](https://vuetifyjs.com/en/styles/spacing/). Information on responsive spacings with t-shirt sizes can be found in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core)

### Container

When building applications with Vuetify and Product Kit Vue, you should use `v-container` as a wrapper container after `v-app`, as it includes max-widths that limits the content-width on large screens.

```html
<v-app>
  <v-container>
    <v-main>
      <router-view />
      <!--for example-->
    </v-main>
  </v-container>
</v-app>
```

When you don't wish to use responsive margins, you can add `class="fluid"` to the `v-container` tag. Your main-content will now always stretch to the defined value in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core). This could come in handy for layouts like dashboards where the content-width should not be limited on large screens.

```html
<v-app>
  <v-container class="fluid"> ... </v-container>
</v-app>
```

### Typography

In order to use the proprietary Mercedes-Benz font, you have to download the web font and include it in your project.

1. In your `src` directory, create a new folder. You could name it `fonts` for example.
2. Copy the `woff2` version of both the **MB Corpo S Text Web** and **MB Corpo A Title Cond Web** font into the newly created `fonts` directory.
3. Now you have to register both fonts as a css `font-face` in a root stylesheet, for example in the `<style>` tag of `App.vue` like this

```css
<style>
@font-face {
    font-family: "MB Corpo S Text Web";
    src: local("MB Corpo S Text Web"),
        url("./fonts/<NAME_OF_THE_FILE>.woff2") format("woff2");
}

@font-face {
    font-family: "MB Corpo A Title Cond Web";
    src: local("MB Corpo A Title Cond Web"),
        url("./fonts/<NAME_OF_THE_FILE>.woff2") format("woff2");
}
</style>
```

Be sure to not change the values for `font-family` and `src: local()`. Replace `<NAME_OF_THE_FILE>` with the filename.

You can now use typography as you are used to from Vuetify. Custom Mercedes-Benz Tech Innovation font and responsive tokens are applied automatically. For accessibility reasons it is recommended to always use the referring `html` tag to display a typography-class:

```html
<h1 class="text-h1">I'm a h1</h1>

<h5 class="text-h1">
  I also look like h1 although I'm a h5 so this should be avoided
</h5>

<span class="text-overline">I'm an overline</span>
```

> Information on the custom Mercedes-Benz Tech Innovation typography can be found in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core)

### Darkmode

In Vuetify, you can toggle dark mode globally by accessing the `$vuetify` object like following:

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

The Mercedes-Benz Tech Innovation application colors like `primary` are also automatically changed when switching to dark mode (see examples).

### Elevation

In darkmode, you can use the `elevation` attribute in supported elements like `v-card` to also change the surface color of the element automatically: Higher elevation, lighter surface, as described in the [Material Design documentation](https://material.io/design/color/dark-theme.html#properties).

## Contributing

We welcome any contributions.
If you want to contribute to this project, please read the [contributing guide](CONTRIBUTING.md).

## Code of Conduct

Please read our [Code of Conduct](https://github.com/mercedes-benz/foss/blob/master/CODE_OF_CONDUCT.md) as it is our base for interaction.

## License

This project is licensed under the [MIT LICENSE](LICENSE).

## Provider Information

Please visit <https://www.mercedes-benz-techinnovation.com/en/imprint/> for information on the provider.

Notice: Before you use the program in productive use, please take all necessary precautions,
e.g. testing and verifying the program with regard to your specific use.
The program was tested solely for our own use cases, which might differ from yours.
