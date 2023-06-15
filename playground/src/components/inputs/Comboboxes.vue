<script setup>
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
const items = ['Foo', 'Bar'];
</script>

<template>
  <h3>Combobox</h3>
  <v-row>
    <v-col v-for="variant in variants">
      <v-combobox
        :label="variant"
        color="primary"
        :variant="variant"
        :items="items"
      ></v-combobox>
    </v-col>
  </v-row>
</template>
