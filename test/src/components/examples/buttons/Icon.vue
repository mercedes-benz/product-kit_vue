<template>
      <v-container fluid class="pa-0 text-center">
        <v-row justify="center">

          <v-col cols="auto">
            <v-btn text icon color="blue" class="mx-3">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text icon color="indigo" class="mx-3">
              <v-icon>mdi-cached</v-icon>
              
            </v-btn><v-btn text icon color="indigo" class="mx-3">
              <v-icon>mdi-cached</v-icon>
              
            </v-btn><v-btn text icon color="blue-grey" class="mx-3">
              <v-icon>mdi-thumb-up</v-icon>
              
            </v-btn><v-btn text icon color="pink" class="mx-3">
              <v-icon>mdi-thumb-down</v-icon>
              
            </v-btn><v-btn text icon color="purple" class="mx-3">
              <v-icon>mdi-earth</v-icon>
              
            </v-btn><v-btn text icon color="red" class="mx-3">
              <v-icon>mdi-download</v-icon>
              
            </v-btn><v-btn text icon color="green" class="mx-3">
              <v-icon>mdi-home</v-icon>
              
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-12 text-center">

          <v-col cols="auto">
            <v-btn icon disabled class="mx-3">
              <v-icon>mdi-heart</v-icon>
            </v-btn> <v-btn icon disabled class="mx-3">
              <v-icon>mdi-star</v-icon>
            </v-btn><v-btn icon disabled class="mx-3">
              <v-icon>mdi-cached</v-icon>
            </v-btn><v-btn icon disabled class="mx-3">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn><v-btn icon disabled class="mx-3">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn><v-btn icon disabled class="mx-3">
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </v-col>

        </v-row>
      </v-container>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>