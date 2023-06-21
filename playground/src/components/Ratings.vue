<script>
export default {
  data: () => ({ rating: 3 }),
};
</script>

<template>
  <h2 class="text-h2 mb-12">Ratings</h2>
  <div class="d-flex flex-column align-center justify-center mb-l">
    <v-rating
      v-model="rating"
      class="ma-2"
      density="default"
      color="primary"
    ></v-rating>

    <v-rating
      v-model="rating"
      class="ma-2 text-neutral"
      density="comfortable"
    ></v-rating>

    <v-rating
      v-model="rating"
      class="ma-2 bg-red pa-s"
      density="compact"
    ></v-rating>
  </div>
</template>
