<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid class="pa-0">
        <v-row>
          <v-col cols="12">
            <p>Normal</p>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="blue">
              <v-icon>mdi-heart</v-icon>
              blue
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="grey">
              <v-icon>mdi-star</v-icon>
              grey
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="indigo">
              <v-icon>mdi-cached</v-icon>
              indigo
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="blue-grey">
              <v-icon>mdi-thumb-up</v-icon>
              blue-grey
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="pink">
              <v-icon>mdi-thumb-down</v-icon>
              pink
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="purple">
              <v-icon>mdi-earth</v-icon>
              purple
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="red">
              <v-icon>mdi-download</v-icon>
              red
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn text icon color="green">
              <v-icon>mdi-home</v-icon>
              green
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12">
            <p>Disabled</p>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="2">
            <v-btn icon disabled>
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>