<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-slider
      v-model="length"
      color="red darken-4"
      min="1"
      max="7"
      label="Custom length"
    ></v-slider>
    <v-rating
      v-model="rating"
      :length="length"
      color="red lighten-3"
      background-color="grey lighten-1"
    ></v-rating>
    <div>
      <span class="caption text-uppercase">model:</span>
      <span class="font-weight-bold">
        {{ rating }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      length: 5,
      rating: 2,
    }),
  }
</script>