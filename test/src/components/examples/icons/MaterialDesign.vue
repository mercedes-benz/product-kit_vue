<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-container fluid>
    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon>mdi-home</v-icon>
        <v-icon>mdi-calendar</v-icon>
        <v-icon>mdi-information</v-icon>
      </span>

      <span class="group pa-2 primary">
        <v-icon class="primary-contrast--text" >mdi-folder-outline</v-icon>
        <v-icon class="primary-contrast--text">mdi-widgets</v-icon>
        <v-icon class="primary-contrast--text">mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon medium>mdi-home</v-icon>
        <v-icon medium>mdi-calendar</v-icon>
        <v-icon medium>mdi-information</v-icon>
      </span>

      <span class="group pa-2 secondary">
        <v-icon medium class="secondary-contrast--text">mdi-folder-outline</v-icon>
        <v-icon medium class="secondary-contrast--text">mdi-widgets</v-icon>
        <v-icon medium class="secondary-contrast--text">mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon large>mdi-home</v-icon>
        <v-icon large>mdi-calendar</v-icon>
        <v-icon large>mdi-information</v-icon>
      </span>

      <span class="group pa-2 tertiary">
        <v-icon large class="tertiary-contrast--text">mdi-folder-outline</v-icon>
        <v-icon large class="tertiary-contrast--text">mdi-widgets</v-icon>
        <v-icon large class="tertiary-contrast--text">mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around">
      <span class="group pa-2">
        <v-icon x-large>mdi-home</v-icon>
        <v-icon x-large>mdi-calendar</v-icon>
        <v-icon x-large>mdi-information</v-icon>
      </span>

      <span class="group pa-2 quaternary">
        <v-icon x-large class="quaternary-contrast--text">mdi-folder-outline</v-icon>
        <v-icon x-large class="quaternary-contrast--text">mdi-widgets</v-icon>
        <v-icon x-large class="quaternary-contrast--text">mdi-gavel</v-icon>
      </span>
    </v-row>
  </v-container>
</template>

<style scoped>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>