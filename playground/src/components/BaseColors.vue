<script setup>
const colorNames = ['neutral', 'blue', 'red', 'green', 'yellow', 'blackcurrant', 'lividbrown', 'nandor'];
const postfixes = [
  'lighten-5',
  'lighten-4',
  'lighten-3',
  'lighten-2',
  'lighten-1',
  '',
  'darken-1',
  'darken-2',
  'darken-3',
  'darken-4',
];

const colors = [];
colorNames.forEach((color) => {
  postfixes.forEach((postfix) => {
    postfix !== '' ? colors.push(`bg-${color}-${postfix}`) : colors.push(`bg-${color}`);
  });
});
</script>

<template>
  <h2 class="text-h2 mb-12">Base Colors</h2>
  <div class="mb-xl">
    <v-container>
      <v-row
        v-for="color in colors"
        :key="color"
      >
        <v-col :class="color">
          {{ color }}
        </v-col>
        <v-col :class="`${color}-contrast`"> {{ color }}-contrast </v-col>
      </v-row>
    </v-container>
  </div>
</template>
