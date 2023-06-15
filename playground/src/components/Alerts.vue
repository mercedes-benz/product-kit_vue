<template>
  <div class="mb-8">
    <h2 class="text-h2 mb-12">Alerts</h2>
    <v-row>
      <v-col>
        <v-alert
          icon="$vuetify"
          title="Alert title"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        ></v-alert>
      </v-col>
      <v-col>
        <v-alert
          icon="$vuetify"
          title="Alert title"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          variant="outlined"
          color="error"
        ></v-alert>
      </v-col>
      <v-col>
        <v-alert
          icon="$vuetify"
          title="Alert title"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          color="success"
          variant="tonal"
        ></v-alert>
      </v-col>
    </v-row>
  </div>
</template>
