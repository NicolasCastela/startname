<template>
  <v-navigation-drawer
    :rail="!appStore.stateDrawer"
    rail-width="80"
    permanent
    rounded="lg"
    elevation="4"
    class="custom-drawer "
    :scrim="false"
  >
    <v-list color="transparent">
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
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
