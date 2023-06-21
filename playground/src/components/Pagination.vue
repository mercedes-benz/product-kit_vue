<script setup>
import { ref } from 'vue';
const page = ref(1);
const variants = ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'];
</script>

<template>
  <h2 class="text-h2 mb-12">Pagination</h2>
  <div class="text-center mb-l">
    <h3>Variants</h3>
    <div
      v-for="variant in variants"
      class="mb-m"
    >
      <v-pagination
        v-model="page"
        :length="4"
        rounded="circle"
        active-color="primary"
        :variant="variant"
      >
      </v-pagination
      ><span>{{ variant }}</span>
    </div>
    <h3>Default</h3>

    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
      active-color="primary"
    ></v-pagination
    ><span>flat</span>
  </div>
</template>
