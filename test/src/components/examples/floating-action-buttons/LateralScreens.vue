<template>
  <v-card id="lateral">
    <v-toolbar
      tabs
      flat
      color="primary"
    >
      <v-app-bar-nav-icon class="primary-contrast--text"></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="primary-contrast--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="primary-contrast--text">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          align-with-title
          background-color="transparent"
        >
          <v-tab href="#one" class="primary-contrast--text">Item One</v-tab>
          <v-tab href="#two" class="primary-contrast--text">Item Two</v-tab>
          <v-tab href="#three" class="primary-contrast--text">Item Three</v-tab>
          <v-tabs-slider color="secondary"></v-tabs-slider>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-card-text>
      <v-tabs-items v-model="tabs">
        <v-tab-item
          v-for="content in ['one', 'two', 'three']"
          :key="content"
          :value="content"
        >
          <v-card
            height="200px"
            flat
          >
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
    <v-fab-transition>
      <v-btn
        :key="activeFab.icon"
        :color="activeFab.color"
        fab
        large
        bottom
        left
        class="v-btn--example"
      >
        <v-icon>{{ activeFab.icon }}</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<style scoped>
  /* This is for documentation purposes and will not be needed in your application */
  #lateral .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>

<script>
  export default {
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { color: 'secondary', icon: 'mdi-share-variant' }
          case 'two': return { color: 'primary', icon: 'mdi-pencil' }
          case 'three': return { color: 'quaternary', icon: 'mdi-chevron-up' }
          default: return {}
        }
      },
    },
  }
</script>