<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Chips"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            filled
            chips
            label="Chips"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            solo
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
    }),
  }
</script>