<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-banner single-line @click:icon="alert">
    <v-icon
      slot="icon"
      color="warning"
      size="36"
    >
      mdi-wifi-strength-alert-outline
    </v-icon>
    Unable to verify your Internet connection

    <template v-slot:actions>
      <v-btn color="primary" v-text="'Settings'" />
    </template>
  </v-banner>
</template>

<script>
  export default {
    methods: {
      alert () {
        alert('Hello, World!')
      },
    },
  }
</script>