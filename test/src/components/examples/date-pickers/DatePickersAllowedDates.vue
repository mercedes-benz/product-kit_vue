<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-4"
      min="2016-06-15"
      max="2018-03-20"
    ></v-date-picker>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      date: '2018-03-02',
    }),

    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    },
  }
</script>