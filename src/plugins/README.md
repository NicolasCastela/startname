# Plugins

Plugins are a way to extend the functionality of your Vue application. Use this folder for registering plugins that you want to use globally.

<v-row class="d-flex align-center justify-center" style="height: 400px" v-if="!approvedShowItems">
      <v-btn
        color="deep-purple-darken-3"
        size="x-large"
        rounded="xl"
        elevation="4"
        class="text-white"
        @click="approvedShowItems = true"
      >
        Mostrar itens
      </v-btn>
    </v-row>