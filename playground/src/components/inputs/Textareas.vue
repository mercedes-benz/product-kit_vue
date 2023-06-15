<script setup>
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
</script>

<template>
  <h3>Textareas</h3>
  <v-row>
    <v-col v-for="variant in variants">
      <v-textarea
        :label="variant"
        color="primary"
        :variant="variant"
        :items="items"
      ></v-textarea>
    </v-col>
  </v-row>
</template>
