<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="pink lighten-4">pink l4</v-btn>
      </div>
      <div class="my-2">
        <v-btn small disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="deepblue darken-2">deepblue d2</v-btn>
      </div>
      <div class="my-2">
        <v-btn disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="grayblue lighten-1">grayblue l1</v-btn>
      </div>
      <div class="my-2">
        <v-btn large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>