<!-- SPDX-License-Identifier: MIT -->

<template>
  <div>
    <v-text-field label="Main input" :rules="rules" hide-details></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>