<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-container fluid>
    <v-row>
      <v-col
        sm="6"
        cols="12"
      >
        <v-text-field
          v-model="label"
          label="Label"
        ></v-text-field>
        <v-text-field
          v-model="hint"
          label="Hint"
        ></v-text-field>
        <v-text-field
          v-model="placeholder"
          label="Placeholder"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="rowHeight"
          :disabled="!autoGrow"
          class="mx-4"
          label="Row height - px"
          max="500"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
        ></v-text-field>
        <v-text-field
          v-model="rows"
          class="mx-4"
          label="Rows"
          max="50"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
        ></v-text-field>
      </v-col>

      <v-col cols="12"></v-col>

      <v-col cols="12" md="6">
        <v-switch
          v-model="autoGrow"
          class="ma-1"
          label="Auto-grow"
        ></v-switch>
        <v-switch
          v-model="clearable"
          class="ma-1"
          label="Clearable"
        ></v-switch>

        <v-switch
          v-model="filled"
          class="ma-1"
          label="Filled"
        ></v-switch>
        <v-switch
          v-model="flat"
          class="ma-1"
          label="Flat (requires Solo)"
          :disabled="!solo"
        ></v-switch>
        <v-switch
          v-model="loading"
          class="ma-1"
          label="Loading"
        ></v-switch>
        <v-switch
          v-model="outlined"
          class="ma-1"
          label="Outlined"
        ></v-switch>
        <v-switch
          v-model="persistentHint"
          class="ma-1"
          label="Persistent Hint"
        ></v-switch>
        <v-switch
          v-model="rounded"
          class="ma-1"
          label="Rounded (requires Filled or Outlined)"
        ></v-switch>
        <v-switch
          v-model="shaped"
          class="ma-1"
          label="Shaped (requires Filled or Outlined)"
        ></v-switch>
        <v-switch
          v-model="singleLine"
          class="ma-1"
          label="Single-line"
        ></v-switch>
        <v-switch
          v-model="solo"
          class="ma-1"
          label="Solo"
        ></v-switch>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          elevation="12"
          class="pa-12"
        >
          <v-textarea
            v-model="model"
            :auto-grow="autoGrow"
            :clearable="clearable"
            :counter="counter ? counter : false"
            :filled="filled"
            :flat="flat"
            :hint="hint"
            :label="label"
            :loading="loading"
            :no-resize="noResize"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :placeholder="placeholder"
            :rounded="rounded"
            :row-height="rowHeight"
            :rows="rows"
            :shaped="shaped"
            :single-line="singleLine"
            :solo="solo"
          ></v-textarea>
          <div class="mt-12 text-center">
            Value: {{ model }}
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      autoGrow: false,
      autofocus: true,
      clearable: false,
      counter: 0,
      filled: false,
      flat: false,
      hint: '',
      label: '',
      loading: false,
      model: 'I\'m a textarea.',
      noResize: false,
      outlined: false,
      persistentHint: false,
      placeholder: '',
      rounded: false,
      rowHeight: 24,
      rows: 1,
      shaped: false,
      singleLine: false,
      solo: false,
    }),
  }
</script>