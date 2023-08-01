<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const defaults = ['3xs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '3xl'];
const directions = ['t', 'b', 'l', 'r', 'x', 'y', 'a'];
const playgroundText = 'Use the controls above to try out the different spacing helpers.';

const marginDirection = ref(directions[directions.length - 1]);
const marginSize = ref(defaults[4]);
const marginSizes = ref(defaults);
const paddingDirection = ref(directions[directions.length - 1]);
const paddingSize = ref(defaults[4]);
const paddingSizes = ref(defaults);

const computedPadding = computed(() => {
  return `p${paddingDirection.value}-${paddingSize.value}`;
});

const computedMargin = computed(() => {
  return `m${marginDirection.value}-${marginSize.value}`;
});
</script>

<template>
  <v-container class="mb-8">
    <h2 class="text-h2 mb-12">Spacing</h2>
    <v-row>
      <v-col
        class="d-flex align-center"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="paddingDirection"
          :items="directions"
          class="pe-2"
          label="Padding"
        >
          <template v-slot:prepend>
            <strong class="text-light-green-lighten-3 py-1">p</strong>
          </template>

          <template v-slot:append-outer>
            <div class="py-1">-</div>
          </template>
        </v-select>

        <v-select
          v-model="paddingSize"
          :items="paddingSizes"
          label="Size"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="marginDirection"
          :items="directions"
          class="pe-2"
          label="Margin"
        >
          <template v-slot:prepend>
            <strong class="text-orange-lighten-3 py-1">m</strong>
          </template>

          <template v-slot:append-outer>
            <div class="py-1">-</div>
          </template>
        </v-select>

        <v-select
          v-model="marginSize"
          :items="marginSizes"
          label="Size"
        ></v-select>
      </v-col>

      <v-col
        class="bg-orange-lighten-3 pa-0"
        cols="12"
      >
        <v-sheet
          :class="computedMargin"
          elevation="4"
          rounded
        >
          <div
            :class="computedPadding"
            class="bg-light-green-lighten-3"
          >
            <div
              class="bg-white text-center py-6"
              v-text="playgroundText"
            ></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
