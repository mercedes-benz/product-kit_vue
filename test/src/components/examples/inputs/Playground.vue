<!-- SPDX-License-Identifier: MIT -->

<template>
  <div>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-slider v-model="errorCount" label="Max error count" min="0" max="4"></v-slider>
      </v-col>
      <v-switch v-model="success" class="ma-2" label="Success"></v-switch>
      <v-switch v-model="error" class="ma-2" label="Error"></v-switch>
      <v-switch v-model="hideDetails" class="ma-2" label="Hide details"></v-switch>
      <v-switch v-model="persistentHint" class="ma-2" label="Persistent hint"></v-switch>
      <v-col cols="12">
        <v-row justify="space-around">
          <v-btn color="success" @click="success = true; error = false;">Success</v-btn>
          <v-btn color="error" @click="success = false; error = true;">Error</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-input
      :messages="['Messages']"
      :success="success"
      :success-messages="successMsg"
      :error="error"
      :error-messages="errorMsg"
      :hide-details="hideDetails"
      :error-count="errorCount"
      hint="I am hint"
      :persistent-hint="persistentHint"
      append-icon="mdi-close"
      prepend-icon="mdi-phone"
      @click:append="appendIconCallback"
      @click:prepend="prependIconCallback"
    >
      Default Slot
    </v-input>
  </div>
</template>

<style scoped>
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
  }
</style>

<script>
  export default {
    data () {
      return {
        text: '',
        success: false,
        error: false,
        hideDetails: false,
        errorCount: 1,
        persistentHint: true,
      }
    },
    computed: {
      successMsg () {
        return this.success ? ['Done'] : []
      },
      errorMsg () {
        return this.error ? ['Error', 'Another one', 'One more', 'All the errors'] : []
      },
    },
    methods: {
      appendIconCallback () {
        alert('click:append')
      },
      prependIconCallback () {
        alert('click:prepend')
      },
    },
  }
</script>