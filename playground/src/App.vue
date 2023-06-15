<script setup>
import { useDisplay, useTheme } from 'vuetify';
import Typography from './components/Typography.vue';
import Buttons from './components/Buttons.vue';
import Dialog from './components/Dialog.vue';
import Chips from './components/Chips.vue';
import Spacing from './components/Spacing.vue';
import FormsAndInputs from './components/FormsAndInputs.vue';
import Cards from './components/Cards.vue';
import ExpansionPanels from './components/ExpansionPanels.vue';
import Alerts from './components/Alerts.vue';

const theme = useTheme();
console.log(theme);
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  console.log(theme.global.name.value);
};

const components = [Typography, Buttons, Dialog, Chips, Spacing, FormsAndInputs, Cards, ExpansionPanels, Alerts];

console.log(useDisplay().thresholds.value);
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title class="text-button">Product Kit Vue 3</v-app-bar-title>
        <v-btn
          variant="outlined"
          color="primary ml-auto"
          @click="toggleTheme"
          >toggle theme</v-btn
        >
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <section
          v-for="(item, index) in components"
          class="my-xxl"
        >
          <component :is="item"></component>
          <v-divider></v-divider>
        </section>
      </v-container>
      <div class="bg-light-blue-darken-2">test</div>
    </v-main>
  </v-app>
</template>
