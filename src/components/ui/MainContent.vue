<template>

  <v-container fluid>
    <!-- Filter #Todo - Separar em componente -->
    <v-row >
      <v-col cols="12" md="4">
        <v-select
          label="Selecione a cidade"
          :items="['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Selecione o que procura"
          :items="['Restaurantes', 'Hotéis', 'Lojas']"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Selecione a distância"
          :items="['5km', '10km', '20km']"
        ></v-select>
      </v-col>
    </v-row>

    <!-- Grid items  #Todo - Separar em componente -->
    <v-row  class=" d-flex justify-center">
      <v-col  cols="3" v-for="item in 8" :key="item">
      <v-card

    max-width="344"
  >
    <v-img
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Ver mais"
      ></v-btn>
      <v-btn
        color="success"
        text="Curtir"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
</script>

<style scoped></style>
