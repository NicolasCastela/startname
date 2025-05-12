<template>
  <v-navigation-drawer
    :rail="!drawer"
    theme="dark"
    floating
  >
    <v-list color="transparent">
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
      <!-- Seus itens aqui -->
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-btn
    class="ma-2"
    color="primary"
    @click="drawer = !drawer"
  >
    Toggle Drawer
  </v-btn>
</template>

<script setup lang="ts">
const drawer = ref(true)
</script>
