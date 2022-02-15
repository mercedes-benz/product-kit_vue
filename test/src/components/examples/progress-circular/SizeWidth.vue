<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="secondary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :size="70"
      :width="7"
      color="tertiary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="quaternary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      color="error"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>