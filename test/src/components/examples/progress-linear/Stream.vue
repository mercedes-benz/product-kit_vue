<!-- SPDX-License-Identifier: MIT -->

<template>
  <div>
    <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear>
    <br>
    <v-progress-linear
      color="teal"
      buffer-value="0"
      value="20"
      stream
    ></v-progress-linear>
    <br>
    <v-progress-linear
      buffer-value="50"
      stream
      color="cyan"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      buffer-value="60"
      value="40"
      stream
      color="orange"
    ></v-progress-linear>
  </div>
</template>