<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-rating
      v-model="rating"
      background-color="purple lighten-3"
      color="purple"
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
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="green lighten-3"
      color="green"
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="red lighten-3"
      color="red"
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="indigo lighten-3"
      color="indigo"
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