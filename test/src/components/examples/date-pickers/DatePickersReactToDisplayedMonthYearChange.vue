<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-row>
    <v-col cols="12" sm="6" class="my-2 px-1">
      <v-date-picker
        ref="picker"
        v-model="date"
        :picker-date.sync="pickerDate"
        full-width
      ></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6" class="my-2 px-1">
      <div class="title">Month news ({{ pickerDate || 'change month...' }})</div>
      <div class="subheading">Change month to see other news</div>
      <ul class="ma-4">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      pickerDate: null,
      notes: [],
      allNotes: [
        'President met with prime minister',
        'New power plant opened',
        'Rocket launch announced',
        'Global warming discussion cancelled',
        'Company changed its location',
      ],
    }),
    watch: {
      pickerDate () {
        this.notes = [
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
        ].filter((value, index, self) => self.indexOf(value) === index)
      },
    },
  }
</script>