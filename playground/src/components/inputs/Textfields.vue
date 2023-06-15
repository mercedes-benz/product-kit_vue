<script setup>
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
</script>

<template>
  <h3>Textfields</h3>
  <v-row>
    <v-col v-for="variant in variants">
      <v-text-field
        :label="variant"
        color="primary"
        :variant="variant"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
