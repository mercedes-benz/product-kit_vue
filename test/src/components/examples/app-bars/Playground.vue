<!-- SPDX-License-Identifier: MIT -->

<template>
  <div>
    <v-row

      justify="center"
    >
      <v-col
        cols="6"
        md="4"
      >
        <v-select
          v-model="color"
          label="Color"
          :items="colors"
        ></v-select>
      </v-col>
      <v-col cols="12"></v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="elevateOnScroll"
          label="Elevate-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="hideOnScroll"
          label="Hide-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="fadeOnScroll"
          label="Fade-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="fadeImgOnScroll"
          label="Fade-img-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="invertedScroll"
          label="Inverted scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="collapse"
          label="Collapse"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="collapseOnScroll"
          label="Collapse-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="shrinkOnScroll"
          label="Shrink-on-scroll"
        ></v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2"
      >
        <v-switch
          v-model="extended"
          label="Extended"
        ></v-switch>
      </v-col>
    </v-row>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        
        scroll-target="#playground-example"
        :color="color"
        :elevate-on-scroll="elevateOnScroll"
        :hide-on-scroll="hideOnScroll"
        :fade-on-scroll="fadeOnScroll"
        :fade-img-on-scroll="fadeImgOnScroll"
        :inverted-scroll="invertedScroll"
        :collapse="collapse"
        :collapse-on-scroll="collapseOnScroll"
        :shrink-on-scroll="shrinkOnScroll"
        :extended="extended"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px;">

        </v-container>
      </v-sheet>
    </v-card>
  </div>

</template>

<script>
  export default {
    data: () => ({
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: false,
      extended: false,
      color: 'accent',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
    }),
  }
</script>