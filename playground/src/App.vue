<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import Typography from './components/Typography.vue';
import Buttons from './components/Buttons.vue';
import Dialog from './components/Dialog.vue';

const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const components = [Typography, Buttons, Dialog];
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex">
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
      </v-container>
    </v-main>
  </v-app>
</template>
