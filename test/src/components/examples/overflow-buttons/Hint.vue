<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      menu-props="top"
      label="Overflow Btn w/ hint"
      hint="Select font"
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