<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-toolbar
    color="secondary"
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-divider
      class="mx-4"
      inset
      vertical
    ></v-divider>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text class="secondary-contrast--text">
        News
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text class="secondary-contrast--text">
        Blog
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text class="secondary-contrast--text">
        Music
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon class="secondary-contrast--text"></v-app-bar-nav-icon>
  </v-toolbar>
</template>