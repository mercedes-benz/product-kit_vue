<template>
  <h2 class="text-h2 mb-12">Grid</h2>
  <v-container class="bg-grey">
    <v-row>
      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        xxl="1"
      >
        <v-sheet class="ma-2 pa-2 bg-primary">1</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
