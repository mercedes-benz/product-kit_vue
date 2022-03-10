<template>
  <v-card>
    <v-tabs
      show-arrows
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="i in 30"
        :key="i"
        :href="'#tab-' + i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>