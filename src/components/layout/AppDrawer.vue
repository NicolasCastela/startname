<template>
  <v-navigation-drawer
    :rail="!appStore.stateDrawer"
    rail-width="58"
    permanent
    rounded="xl"
    elevation="4"
    class="custom-drawer"
    :scrim="false"
  >
    <v-list density="compact" nav class="py-4">
      <v-list-item
        v-for="item in drawerItems"
        :key="item.value"
        :to="item.to"
        router
        class="modern-list-item"
        rounded="xl"
        active-class="modern-active"
      >
        <template #prepend>
          <v-icon class="" color="white" size="24">{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title
          v-if="appStore.stateDrawer"
          class="font-weight-medium text-white"
        >
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
      <v-divider class="my-5" />
      <v-list-item
        v-for="item in drawerItemsLastout"
        :key="item.value"
        :to="item.to"
        router
        class="modern-list-item"
        rounded="xl"
        active-class="modern-active"
      >
        <template #prepend>
          <v-icon class="" color="white" size="24">{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title
          v-if="appStore.stateDrawer"
          class="font-weight-medium text-white"
        >
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <template #append> </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();

const drawerItems = [
  { title: "Inicial", value: "home", icon: "mdi-home", to: "/" },
  {
    title: "Perfil",
    value: "profile",
    icon: "mdi-account-circle-outline",
    to: "/profile",
  },
  { title: "Mensagens", value: "settings", icon: "mdi-message" },
  { title: "Carteira", value: "profile", icon: "mdi-wallet" },
  { title: "Planos", value: "plans", icon: "mdi-clipboard-list" },
  { title: "Avaliações", value: "reviews", icon: "mdi-star-outline" },
  { title: "Favoritos", value: "favorites", icon: "mdi-heart-outline" },
];

const drawerItemsLastout = [
  {
    title: "Configurações",
    value: "settings",
    icon: "mdi-cog-outline",
    to: "/settings",
  },
  { title: "Ajuda", value: "help", icon: "mdi-help-circle-outline" },
  { title: "Sair", value: "logout", icon: "mdi-logout-variant" },
];
</script>

<style scoped>
.custom-drawer {
  margin-top: 20px;
  margin-left: 12px;
  height: 90vh !important;
  background: #1e1e2f;
  border-radius: 16px;
}

.modern-list-item {
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.modern-list-item:hover {
  background-color: #6a1b9a33;
}

.modern-active {
  background-color: #6a1b9a !important;
  color: #ffffff !important;
}

.modern-active .v-icon {
  color: white !important;
}

.logout-btn {
  color: white;
  font-weight: 600;
}
</style>
