<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first"
            label="First Name"
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="last"
            label="Last Name"
            solo-inverted
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      first: 'John',
      last: 'Doe',
    }),
  }
</script>