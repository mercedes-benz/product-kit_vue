<!-- SPDX-License-Identifier: MIT -->

<template>
  <div class="grey lighten-5 pa-4">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
        sm="4"
      >
        <v-card>
          <v-subheader :inset="inset">Subheader</v-subheader>

          <v-list>
            <template v-for="(item, index) in items">
              <v-list-item
                v-if="item.action"
                :key="item.title"
              >
                <v-list-item-action>
                  <v-icon>{{ 'mdi-' + item.action }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider
                v-else-if="item.divider"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="mt-12"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <template>
          <v-checkbox
            v-model="inset"
            hide-details
            label="Inset"
            light
          ></v-checkbox>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      inset: false,
      items: [
        {
          action: 'inbox',
          title: 'inbox',
        },
        {
          divider: true,
        },
        {
          action: 'send',
          title: 'send',
        },
        {
          divider: true,
        },
        {
          action: 'delete',
          title: 'trash',
        },
      ],
    }),
  }
</script>