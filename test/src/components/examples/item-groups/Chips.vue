<!-- SPDX-License-Identifier: MIT -->

<template>
  <v-card>
    <v-toolbar
      flat
      color="primary"
    >
      <v-toolbar-title>Submit a post</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field filled label="Title" value="My new post"></v-text-field>

      <v-textarea
        filled
        label="Text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
      ></v-textarea>

      <v-divider class="my-2"></v-divider>

      <v-item-group multiple>
        <v-subheader>Tags</v-subheader>
        <v-item
          v-for="n in 8"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-chip
            active-class="primary--text"
            :input-value="active"
            @click="toggle"
          >
            Tag {{ n }}
          </v-chip>
        </v-item>
      </v-item-group>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="secondary"
        depressed
      >
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>
