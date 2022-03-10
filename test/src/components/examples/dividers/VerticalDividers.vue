<template>
  <v-toolbar
    color="primary"
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text class="primary-contrast--text">
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text class="primary-contrast--text">
        Blog
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text class="primary-contrast--text">
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon class="primary-contrast--text"></v-app-bar-nav-icon>
  </v-toolbar>
</template>