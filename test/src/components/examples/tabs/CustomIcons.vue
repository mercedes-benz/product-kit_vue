<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-sheet elevation="6">
    <v-tabs
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="i in 30"
        :key="i"
        :href="'#tab-' + i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>