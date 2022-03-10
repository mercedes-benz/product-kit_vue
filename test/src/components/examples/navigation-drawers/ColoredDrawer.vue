<template>
    <v-card class="mx-auto" height="400" width="256">
        <v-navigation-drawer class="primary" permanent>
            <v-list-item >
                <v-list-item-content>
                    <v-list-item-title class="text-h6 primary-contrast--text">
                        Headline 6
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-subtitle-1 primary-contrast--text">
                        Subtitle 1
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link class="primary-contrast--text">
                    <v-list-item-icon >
                        <v-icon class="primary-contrast--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block color="secondary">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard" },
                { title: "Account", icon: "mdi-account-box" },
                { title: "Admin", icon: "mdi-gavel" },
            ],
        };
    },
};
</script>