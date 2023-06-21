<script>
export default {
  data: () => ({
    snackbar: false,
    text: `Hello, I'm a snackbar`,
    snackbarVertical: false,
  }),
};
</script>

<template>
  <h2 class="text-h2 mb-12">Snackbars</h2>
  <div class="text-center ma-2">
    <v-btn
      color="secondary"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="error"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <div class="text-center mb-l">
    <v-btn
      color="indigo"
      @click="snackbarVertical = true"
    >
      Open Vertical Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbarVertical"
      vertical
      color="red"
    >
      <div class="text-subtitle-1 pb-2">This is a snackbar message</div>

      <p>This is a longer paragraph explaining something</p>

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbarVertical = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
