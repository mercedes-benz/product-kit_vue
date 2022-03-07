<!-- SPDX-License-Identifier: MIT --->
<!-- © Daimler TSS GmbH --->
![Product Kit Vue Logo](https://github.com/Daimler/product-kit_vue/raw/main/docs/images/productkit_vue_github_logo.png)
[![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)](LICENSE)
![vue](https://img.shields.io/badge/vue-2.6.11-brightgreen.svg)
![vuetify](https://img.shields.io/badge/vuetify-2.6.0-brightgreen.svg)

Product Kit for Vue provides components for Daimler TSS web frontends based on the material design framework Vuetify.

Feel free to open an [issue](https://github.com/mercedes-benz/product-kit_vue/issues) or provide a pull request with the desired modifications.

## Examples

⚠️ //TODO// Add examples as pictures.

## Installation

*Note that you must have node (with npm) and vue.js installed.*

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
import colors from '@daimler/productkit-vue/src/theme/colors.js';
```

Add the imported preset in the existing `export` statement as
```javascript
export default new Vuetify({
    preset: colors
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
          @import "@daimler/productkit-vue/src/theme/overrides.scss";
        `,
      },
      sass: { // 9.0.0
        additionalData: `
          @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens
          @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark
          @import "@daimler/productkit-vue/src/theme/variables.scss"
          @import "@daimler/productkit-vue/src/theme/overrides.scss"
        `,
      },
    },
  },
```

Your Material components should now be styled accordingly to the styleguide of Daimler TSS!

## Usage

⚠️ //TODO// Add source code of usage examples and descriptions.

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
