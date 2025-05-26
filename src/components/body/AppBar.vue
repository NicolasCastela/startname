<template>
  <v-app-bar class="bg-primary" density="compact" floating :elevation="0">
    <template v-slot:prepend>
      <v-app-bar-nav-icon size="small" @click="toggleLocalDrawer">
      </v-app-bar-nav-icon>
    </template>
    <template v-slot:append>
      <template v-if="logged == false">
        <v-btn
          @click="dialog = true"
          color="orange"
          variant="flat"
          size="small"
          class="mr-4"
        >
          Entrar
        </v-btn>
        <v-btn
          color="purple"
          to="/register"
          variant="flat"
          size="small"
          class="mr-4"
        >
          Registrar
        </v-btn>
      </template>
      <template v-else>
        <v-avatar class="mr-1" size="30px">
          <v-img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-avatar>
      </template>
    </template>

    <v-app-bar-title>Logo aquisad</v-app-bar-title>
  </v-app-bar>
  <v-dialog hide-footer max-width="500" v-model="dialog">
    <template v-slot:default="{ isActive }">
      <v-card class="bg-primary">
        <v-toolbar variant="flat" class="bg-primary">
          <v-toolbar-title>Entrar</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
        </v-toolbar>
        <v-form class="pa-4">
          <v-text-field
            label="Usuário"
            persistent-placeholder
            variant="outlined"
            density="compact"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            density="compact"
            label="Senha"
            persistent-placeholder
            :append-inner-icon="
              showpass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            @click:append-inner="showpass = !showpass"
            :type="showpass ? 'text' : 'password'"
          ></v-text-field>
        </v-form>
        <v-card-actions>
          <span class="text-caption cursor-pointer ml-4">Esqueci a senha</span>
          <v-spacer></v-spacer>
          <v-btn
            variant="flat"
            text="Entrar"
            color="success"
            class="mr-2"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const logged = ref(false);
const dialog = ref(false);
const showpass = ref(false);
const toggleLocalDrawer = () => {
  appStore.toggleDrawer();
};
</script>

<style scoped>
.asdperson {
  background: #1e1e2f;
}
</style>
