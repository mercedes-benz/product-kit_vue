<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-container>
    <v-row>
      <v-slider
        v-model="value"
        vertical
        label="Regular"
      ></v-slider>
      <v-range-slider
        v-model="value2"
        vertical
        label="Range"
      ></v-range-slider>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        value: 10,
        value2: [20, 40],
      }
    },
  }
</script>