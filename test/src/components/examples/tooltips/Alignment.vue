<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="text-center">
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn color="primary"  v-on="on">Left</v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn color="primary"  v-on="on">Top</v-btn>
      </template>
      <span>Top tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="primary"  v-on="on">Bottom</v-btn>
      </template>
      <span>Bottom tooltip</span>
    </v-tooltip>

    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn color="primary"  v-on="on">Right</v-btn>
      </template>
      <span>Right tooltip</span>
    </v-tooltip>
  </div>
</template>