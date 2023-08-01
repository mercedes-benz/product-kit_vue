<script setup>
import { colorsForTesting } from '../utils/colors';

const colors = [];
colorsForTesting.forEach((color) => {
  colors.push(`bg-${color}`);
});
</script>

<template>
  <v-container>
    <h2 class="text-h2 mb-12">Application Colors</h2>
    <div class="mb-xl">
      <v-row
        v-for="color in colors"
        :key="color"
      >
        <v-col :class="color"> {{ color }} </v-col>
        <v-col :class="`${color}-contrast`"> {{ color }}-contrast </v-col>
        <v-col :class="`${color}-darken-1`"> {{ color }}-darken-1 </v-col>
        <v-col :class="`${color}-lighten-1`"> {{ color }}-lighten-1 </v-col>
        <v-col :class="`${color}-darken-2`"> {{ color }}-darken-2 </v-col>
        <v-col :class="`${color}-lighten-2`"> {{ color }}-lighten-1 </v-col>
      </v-row>
    </div>
  </v-container>
</template>
