<!-- SPDX-License-Identifier: MIT -->

<template>
  <div>
    <v-app-bar
      color="primary"
      dense
    >
      <v-app-bar-nav-icon color="primary-contrast"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="primary-contrast">
        <v-icon >mdi-heart</v-icon>
      </v-btn>

      <v-btn icon color="primary-contrast">
        <v-icon >mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" color="primary-contrast">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>