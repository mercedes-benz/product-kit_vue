<template>
  <div class="text-center">
    <v-progress-circular
      :value="100"
      color="primary"
    ></v-progress-circular>

    <v-progress-circular
      :value="80"
      color="secondary"
    ></v-progress-circular>

    <v-progress-circular
      :value="60"
      color="tertiary"
    ></v-progress-circular>

    <v-progress-circular
      :value="40"
      color="quaternary"
    ></v-progress-circular>

    <v-progress-circular
      :value="20"
      color="neutral"
    ></v-progress-circular>
  </div>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>