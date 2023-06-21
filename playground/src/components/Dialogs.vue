<script setup>
import { ref } from 'vue';
const dialog = ref(false);
</script>

<script>
export default {
  data() {
    return {
      loaderDialog: false,
    };
  },

  watch: {
    loaderDialog(val) {
      if (!val) return;

      setTimeout(() => (this.loaderDialog = false), 4000);
    },
  },
};
</script>

<template>
  <div class="mb-8">
    <h2 class="text-h2 mb-12">Dialog</h2>
    <v-row>
      <v-col
        ><v-dialog
          v-model="dialog"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              Open Dialog
            </v-btn>
          </template>

          <v-card>
            <v-card-text>
              <div class="text-h1">Hello</div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                block
                @click="dialog = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog></v-col
      >
      <v-col>
        <v-btn
          :disabled="loaderDialog"
          :loading="loaderDialog"
          color="primary"
          @click="loaderDialog = true"
        >
          Start loading
        </v-btn>
        <v-dialog
          v-model="loaderDialog"
          :scrim="false"
          persistent
          width="auto"
        >
          <v-card color="black">
            <v-card-text>
              Please stand by
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
