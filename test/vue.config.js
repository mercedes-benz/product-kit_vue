module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: { // 9.0.0
        additionalData: `
          @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens;
          @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark;
        `,
      },
      sass: { // 9.0.0
        additionalData: `
          @use "@daimler/productkit-core/exports/web/styles/scss/variables" as tokens
          @use "@daimler/productkit-core/exports/web/styles/scss/variables-dark" as tokensDark
        `,
      },
    },
  },
  /*css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss"`
      }
    }
  }*/
}
