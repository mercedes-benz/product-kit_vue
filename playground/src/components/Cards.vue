<template>
  <div class="mb-8">
    <h2 class="text-h2 mb-12">Cards</h2>
    <v-row class="my-s">
      <v-col>
        <v-card
          title="Card title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <v-card-actions>
            <v-btn
              variant="elevated"
              color="primary"
              >Click me</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          variant="outlined"
          title="Card title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <v-card-actions>
            <v-btn
              variant="elevated"
              color="primary"
              >Click me</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          variant="tonal"
          title="Card title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <v-card-actions>
            <v-btn
              variant="elevated"
              color="primary"
              >Click me</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          loading
          color="secondary"
          variant="tonal"
          title="Card title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        >
          <v-card-actions>
            <v-btn
              variant="elevated"
              color="primary"
              >Click me</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
