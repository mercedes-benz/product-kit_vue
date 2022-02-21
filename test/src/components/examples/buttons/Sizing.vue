<template>
  <v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-small color="secondary">Extra small Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="primary">Small Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="warning">Normal Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="error" large>Large Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="success">Extra large Button</v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn color="secondary" fab x-small>
              <v-icon>mdi-television</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn color="primary" fab small>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn color="warning" fab>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn color="error" fab large>
              <v-icon>mdi-alarm</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn color="success" fab x-large>
              <v-icon>mdi-domain</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
div.row > div {
  flex: 1;
}
</style>