<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="d-flex flex-column" justify="center" align="center">
    <v-container>
      <v-progress-linear
        :active="active"
        :background-opacity="opacity"
        :bottom="bottom"
        :buffer-value="buffer"
        :height="height"
        :indeterminate="indeterminate"
        :query="query"
        :rounded="rounded"
        :stream="stream"
        :striped="striped"
        :top="top"
        :value="value"
        color="light-blue"
      ></v-progress-linear>
    </v-container>

    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="buffer"
          class="mx-4"
          label="Buffer"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="height"
          class="mx-4"
          label="Height - px"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="opacity"
          class="mx-4"
          label="Opacity"
          max="1"
          min="0"
          step=".01"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="value"
          class="mx-4"
          label="Value - %"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="active" label="Toggle active" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="bottom" label="Toggle bottom" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="indeterminate" label="Toggle indeterminate" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="query" label="Toggle query" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="rounded" label="Toggle rounded" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="stream" label="Toggle stream" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="striped" label="Toggle striped" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="top" label="Toggle top" class="mx-4"></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      absolute: false,
      active: true,
      opacity: 0.3,
      bottom: false,
      buffer: 100,
      fixed: false,
      height: 4,
      indeterminate: false,
      query: false,
      rounded: false,
      stream: false,
      striped: false,
      top: false,
      value: 100,
    }),
  }
</script>