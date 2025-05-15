<template>
  <v-navigation-drawer
    :rail="!appStore.stateDrawer"
    rail-width="60"
    permanent
    rounded="lg"
    elevation="4"
    class="custom-drawer "
    :scrim="false"
  >
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>

<style scoped>
.custom-drawer {
  margin-top: 20px;
  margin-left: 12px;
  height: 90vh!important;
}
</style>
