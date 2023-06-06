<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const dialog = ref(false);
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
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
        <section class="my-8">
          <h2 class="text-h2 mb-12">Typography</h2>
          <div
            v-for="i in 6"
            :key="i"
            class="mb-6"
          >
            <div :class="`text-h${i}`">Heading {{ i }}</div>
          </div>
          <div
            v-for="i in 2"
            :key="i"
            class="mb-6"
          >
            <div :class="`text-subtitle-${i}`">Subtitle {{ i }}</div>
            <div :class="`text-subtitle-${i}-strong`">Subtitle {{ i }} Strong</div>
          </div>
          <div
            v-for="i in 2"
            :key="i"
            class="mb-6"
          >
            <div :class="`text-body-${i}`">Body {{ i }}</div>
            <div :class="`text-body-${i}-strong`">Body {{ i }} Strong</div>
          </div>
          <div class="text-button mb-6">Button</div>
          <div class="text-caption mb-6">Caption</div>
          <div class="text-overline mb-6">Overline</div>
          <v-divider></v-divider>
        </section>

        <section class="my-8">
          <h2 class="text-h2 mb-12">Buttons</h2>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              color="primary"
              >Primary</v-btn
            >
            <v-btn
              class="mx-2"
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              color="error"
              >Error</v-btn
            >
          </div>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              variant="outlined"
              color="primary"
              >Primary</v-btn
            >
            <!-- <v-btn class="mx-2" variant="outlined" color="primary-variant">Primary</v-btn> -->
            <v-btn
              class="mx-2"
              variant="outlined"
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="outlined"
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="outlined"
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="outlined"
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              variant="outlined"
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              variant="outlined"
              color="error"
              >Error</v-btn
            >
          </div>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              variant="tonal"
              color="primary"
              >Primary</v-btn
            >
            <!-- <v-btn class="mx-2" variant="tonal" color="primary-variant">Primary</v-btn> -->
            <v-btn
              class="mx-2"
              variant="tonal"
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="tonal"
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="tonal"
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="tonal"
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              variant="tonal"
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              variant="tonal"
              color="error"
              >Error</v-btn
            >
          </div>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              variant="text"
              color="primary"
              >Primary</v-btn
            >
            <!-- <v-btn class="mx-2" variant="text" color="primary-variant">Primary</v-btn> -->
            <v-btn
              class="mx-2"
              variant="text"
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="text"
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="text"
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="text"
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              variant="text"
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              variant="text"
              color="error"
              >Error</v-btn
            >
          </div>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              variant="plain"
              color="primary"
              >Primary</v-btn
            >
            <!-- <v-btn class="mx-2" variant="plain" color="primary-variant">Primary</v-btn> -->
            <v-btn
              class="mx-2"
              variant="plain"
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="plain"
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="plain"
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              variant="plain"
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              variant="plain"
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              variant="plain"
              color="error"
              >Error</v-btn
            >
          </div>
          <div class="d-flex mb-4">
            <v-btn
              class="mx-2"
              disabled
              color="primary"
              >Primary</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="secondary"
              >Secondary</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="tertiary"
              >Tertiary</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="quaternary"
              >Quaternary</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="warning"
              >Warning</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="info"
              >Info</v-btn
            >
            <v-btn
              class="mx-2"
              disabled
              color="error"
              >Error</v-btn
            >
          </div>
          <v-divider></v-divider>
        </section>

        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              Open Dialog
            </v-btn>
          </template>

          <v-card>
            <v-card-text>
              <div class="text-h1">Hello</div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                block
                @click="dialog = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
