<script setup>
import { ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import Typography from './components/Typography.vue';
import Buttons from './components/Buttons.vue';
import Dialogs from './components/Dialogs.vue';
import Chips from './components/Chips.vue';
import Spacing from './components/Spacing.vue';
import FormsAndInputs from './components/FormsAndInputs.vue';
import Cards from './components/Cards.vue';
import ExpansionPanels from './components/ExpansionPanels.vue';
import Alerts from './components/Alerts.vue';
import BaseColors from './components/BaseColors.vue';
import Ratings from './components/Ratings.vue';
import Snackbars from './components/Snackbars.vue';
import Tables from './components/Tables.vue';
import Grid from './components/Grid.vue';
import Pagination from './components/Pagination.vue';

const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const components = [
  {
    component: Typography,
    name: 'Typography',
  },
  {
    component: Buttons,
    name: 'Buttons',
  },
  {
    component: Dialogs,
    name: 'Dialogs',
  },
  {
    component: Chips,
    name: 'Chips',
  },
  {
    component: Spacing,
    name: 'Spacing',
  },
  {
    component: FormsAndInputs,
    name: 'Forms and Inputs',
  },
  {
    component: Cards,
    name: 'Cards',
  },
  {
    component: ExpansionPanels,
    name: 'Expansion Panels',
  },
  {
    component: Alerts,
    name: 'Alerts',
  },
  {
    component: BaseColors,
    name: 'Base Colors',
  },
  {
    component: Ratings,
    name: 'Ratings',
  },
  {
    component: Snackbars,
    name: 'Snackbars',
  },
  {
    component: Tables,
    name: 'Tables',
  },
  {
    component: Grid,
    name: 'Grid',
  },
  {
    component: Pagination,
    name: 'Pagination',
  },
];

components.sort((a, b) => {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();
  return textA < textB ? -1 : textA > b ? 1 : 0;
});
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

    <v-navigation-drawer>
      <v-list>
        <v-list-item
          density="compact"
          v-for="item in components"
          :title="item.name"
          :href="`/#${item.component.__hmrId}`"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <section
          v-for="item in components"
          class="my-xxl"
          :id="item.component.__hmrId"
        >
          <component :is="item.component"></component>
          <v-divider></v-divider>
        </section>
      </v-container>
    </v-main>
    <v-container class="bg-primary">hello</v-container>
    <v-container class="text-primary">hello</v-container>
    <v-container class="bg-black text-primary">hello</v-container>
  </v-app>
</template>

<style>
html {
  scroll-behavior: smooth;
}
/* id anker offset */
[id]::before {
  content: '';
  display: block;
  height: 100px;
  margin-top: -100px;
  visibility: hidden;
}
</style>
