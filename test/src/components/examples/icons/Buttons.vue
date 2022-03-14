<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <div>
      <v-btn class="ma-2" color="primary">Accept
        <v-icon right>mdi-checkbox-marked-circle</v-icon>
      </v-btn>

      <v-btn class="ma-2" color="error" >Decline
        <v-icon  right>mdi-cancel</v-icon>
      </v-btn>

      <v-btn class="ma-2" >
        <v-icon  left>mdi-minus-circle</v-icon>Cancel
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" color="secondary" >
        <v-icon  left>mdi-arrow-left</v-icon>Back
      </v-btn>

      <v-btn class="ma-2" color="tertiary" >
        <v-icon dark>mdi-wrench</v-icon>
      </v-btn>

      <v-btn class="ma-2" color="quaternary" >
        <v-icon dark>mdi-cloud-upload</v-icon>
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" text icon color="primary lighten-3">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn class="ma-2" text icon color="pink darken-1">
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>