<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-chip
      class="ma-2"
      label
    >
      Label
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon left>mdi-label</v-icon>
      Tags
    </v-chip>

    <v-chip
      class="ma-2"
      color="secondary"
      label
    >
      <v-icon left>mdi-account-circle-outline</v-icon>
      John Leider
    </v-chip>

    <v-chip
      class="ma-2"
      close
      color="quaternary"
      label
    >
      <v-icon left>mdi-twitter</v-icon>
      New Tweets
    </v-chip>
  </div>
</template>