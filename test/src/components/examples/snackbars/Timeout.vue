<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-btn
      
      color="secondary"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
    }),
  }
</script>