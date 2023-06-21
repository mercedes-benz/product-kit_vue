<script setup>
import { ref } from 'vue';
const variants = ['plain', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'];
const items = ['Foo', 'Bar'];

const select = ref(['Vuetify', 'Programming']);
const chipItems = ['Programming', 'Design', 'Vue', 'Vuetify'];
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
  <v-row>
    <v-col>
      <v-combobox
        v-model="select"
        :items="chipItems"
        label="Combobox with clearable chips"
        multiple
        chips
        closable-chips
      ></v-combobox>
    </v-col>
  </v-row>
</template>
