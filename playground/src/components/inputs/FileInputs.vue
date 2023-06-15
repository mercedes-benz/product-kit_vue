<script setup>
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
const items = ['Foo', 'Bar'];
</script>

<template>
  <h3>File Inputs</h3>
  <v-row>
    <v-col v-for="variant in variants">
      <v-file-input
        :label="variant"
        color="primary"
        :variant="variant"
        :items="items"
      ></v-file-input>
    </v-col>
  </v-row>
</template>
