<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" persistent>
      <template v-slot:activator="{ on }">
        <v-btn
          color="green"
          
          v-on="on"
        >
          Open Persistent
        </v-btn>
      </template>
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          flat
          color="error"
          @click="sheet = !sheet"
        >close</v-btn>
        <div class="py-3">This is a bottom sheet using the persistent prop</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
    }),
  }
</script>