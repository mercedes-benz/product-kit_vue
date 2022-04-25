// SPDX-License-Identifier: MIT

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
          @use "../../core/exports/web/styles/mbti/scss/variables" as tokens;
          @use "../../core/exports/web/styles/mbti/scss/variables-dark" as tokensDark;
          @import "../src/theme/variables.scss";
        `,
      },
      sass: { // 9.0.0
        additionalData: `
          @use "../../core/exports/web/styles/mbti/scss/variables" as tokens
          @use "../../core/exports/web/styles/mbti/scss/variables-dark" as tokensDark
          @import "../src/theme/variables.scss"
        `,
      },
    },
  },
}
