<template>
  <v-container fluid>
    <!-- Filter #Todo - Separar em componente -->
    <v-row>
      <v-col cols="12" md="3">
        <v-combobox
          variant="solo"
          rounded="xl"
          label="Selecione a cidade"
          :items="['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']"
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="3">
        <v-combobox
          variant="solo"
          rounded="xl"
          label="Selecione o que procura"
          :items="['Restaurantes', 'Hotéis', 'Lojas']"
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="3">
        <v-combobox
          variant="solo"
          rounded="xl"
          label="Selecione a distância"
          :items="['5km', '10km', '20km']"
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="3">
        <v-combobox
          variant="solo"
          rounded="xl"
          label="Selecione o valor"
          :items="['1,00', '2,00', '200']"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row
      class="d-flex align-center"
      style="height: 500px"
      v-if="!approvedShowItems"
    >
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          color="purple"
          variant="flat"
          size="x-large"
          density="compact"
          rounded="xl"
          @click="approvedShowItems = !approvedShowItems"
        >
          Mostrar itens
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="approvedShowItems" class="d-flex justify-center mt-1">
      <v-col cols="3" lg="2" md="4" sm="6" v-for="item in 18" :key="item">
        <v-card max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-icon
              @click="curtidoTeste = !curtidoTeste"
              v-model="curtidoTeste"
              :color="curtidoTeste ? 'red' : 'grey'"
              class=""
              size="24"
            >
              {{ curtidoTeste ? "mdi-heart" : "mdi-heart-outline" }}
            </v-icon>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const show = ref(false);
const curtidoTeste = ref(false);
const approvedShowItems = ref(false);
</script>

<style scoped></style>
