<template>
  <v-app-bar  density="compact" :elevation="1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon size="small" @click="toggleLocalDrawer">
      </v-app-bar-nav-icon>
      <!-- <v-img
      src="@/assets/TempImg.png"
      height="40"
      width="40"
      class="ml-4"/> -->
    </template>
    <template v-slot:append>


       <v-avatar class="mr-1"
              size="30px"
            >
              <v-img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>

            </v-avatar>
    </template>

    <v-app-bar-title>Logo aqui</v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();

const toggleLocalDrawer = () => {
  appStore.toggleDrawer();
};
</script>
