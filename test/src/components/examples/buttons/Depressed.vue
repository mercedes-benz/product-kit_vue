<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="secondary">Secondary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="tertiary">Tertiary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="quaternary">Quaternary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>