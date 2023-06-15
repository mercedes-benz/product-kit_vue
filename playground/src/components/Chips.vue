<script setup>
import { colorsForTesting } from '../utils/colors';

const chips = [];
colorsForTesting.forEach((color) => {
  chips.push({
    content: color.charAt(0).toUpperCase() + color.slice(1),
    color,
  });
});
</script>

<template>
  <h2 class="text-h2 mb-12">Chips</h2>
  <div>
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      class="ma-2"
      variant="elevated"
      :color="chip.color"
      >{{ chip.content }}</v-chip
    >
  </div>
  <div>
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      class="ma-2"
      variant="outlined"
      :color="chip.color"
      >{{ chip.content }}</v-chip
    >
  </div>
  <div>
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      class="ma-2"
      variant="text"
      :color="chip.color"
      >{{ chip.content }}</v-chip
    >
  </div>
  <div>
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      class="ma-2"
      variant="plain"
      :color="chip.color"
      >{{ chip.content }}</v-chip
    >
  </div>
  <div class="my-m">
    <v-chip-group filter>
      <v-chip selected-class="text-primary">Chip 1</v-chip>
      <v-chip>Chip 2</v-chip>
      <v-chip>Chip 3</v-chip>
    </v-chip-group>
  </div>
</template>
