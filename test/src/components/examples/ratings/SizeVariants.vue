<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-rating
      v-model="rating"
      background-color="purple lighten-3"
      color="purple"
      small
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="pink lighten-3"
      color="pink"
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      medium
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="green lighten-3"
      color="green"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="red lighten-3"
      color="red"
      x-large
    ></v-rating>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rating: 4,
    }),
  }
</script>