<script setup>
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
const items = ['Foo', 'Bar'];
</script>

<template>
  <h3>Select Fields</h3>
  <v-row>
    <v-col v-for="variant in variants">
      <v-select
        :label="variant"
        color="primary"
        :variant="variant"
        :items="items"
      ></v-select>
    </v-col>
  </v-row>
</template>
