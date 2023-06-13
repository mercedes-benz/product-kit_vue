<script setup>
import { useDisplay, useTheme } from 'vuetify';
import Typography from './components/Typography.vue';
import Buttons from './components/Buttons.vue';
import Dialog from './components/Dialog.vue';
import Chips from './components/Chips.vue';
import Spacing from './components/Spacing.vue';

const theme = useTheme();
console.log(theme);
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  console.log(theme.global.name.value);
};

const components = [Typography, Buttons, Dialog, Chips, Spacing];

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
          class="my-8"
        >
          <component :is="item"></component>
          <v-divider></v-divider>
        </section>
        <div class="primary d-xxl-none">hello</div>
        <h1 class="text-h1">hello</h1>
      </v-container>
    </v-main>
  </v-app>
</template>
