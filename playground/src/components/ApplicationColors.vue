<script setup>
import { colorsForTesting } from '../utils/colors';

const colors = [];
colorsForTesting.forEach((color) => {
  colors.push(`bg-${color}`);
});
</script>

<template>
  <h2 class="text-h2 mb-12">Base Colors</h2>
  <div class="mb-xl">
    <v-row
      v-for="color in colors"
      :key="color"
    >
      <v-col :class="color"> {{ color }} </v-col>
      <v-col :class="`${color}-contrast`"> {{ color }}-contrast </v-col>
    </v-row>
  </div>
</template>
