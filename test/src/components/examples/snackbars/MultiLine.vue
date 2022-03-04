<template>
  <div class="text-center">
    <v-btn
      
      color="red darken-2"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
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
      multiLine: true,
      snackbar: false,
      text: 'I\'m a multi-line snackbar.',
    }),
  }
</script>