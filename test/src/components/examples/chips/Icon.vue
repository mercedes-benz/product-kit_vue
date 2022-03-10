<template>
  <div class="text-center">
    <v-chip
      class="ma-2"
      color="primary"
    >
      <v-avatar left>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      Ranee
    </v-chip>

    <v-chip
      class="ma-2"
      color="secondary"
    >
      Premium
      <v-icon right>mdi-star</v-icon>
    </v-chip>

    <v-chip
      class="ma-2"
      color="tertiary"
    >
      1 Year
      <v-icon right>mdi-cake-variant</v-icon>
    </v-chip>

    <v-chip
      class="ma-2"
      color="quaternary"
    >
      <v-avatar
        left
        class="neutral"
      >
        1
      </v-avatar>
      Years
    </v-chip>

    <v-chip
      class="ma-2"
      close
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>

    <v-chip
      class="ma-2"
      close
      close-icon="mdi-delete"
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>
  </div>
</template>

<script>
  export default {
    methods: {
      close () {
        alert('Chip close clicked')
      },
    },
  }
</script>