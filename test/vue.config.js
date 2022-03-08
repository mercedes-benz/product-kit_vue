const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: { // 9.0.0
        additionalData: `
          @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens;
          @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark;
          @import "../src/theme/variables.scss";
        `,
      },
      sass: { // 9.0.0
        additionalData: `
          @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens
          @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark
          @import "../src/theme/variables.scss"
        `,
      },
    },
  },
}
