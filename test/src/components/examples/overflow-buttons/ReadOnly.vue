<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="Overflow Btn w/ readonly"
      readonly
      target="#dropdown-example-1"
    ></v-overflow-btn>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
    }),
  }
</script>