<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>