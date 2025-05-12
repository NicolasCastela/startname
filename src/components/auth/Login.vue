<template>
  <div class="h-screen w-100 d-flex flex-row">
    <v-card class="w-25 ">
      <v-card-title>Bem vindo!</v-card-title>
      <v-card-text>
        <v-form   ref="form">
          <v-text-field
            variant="solo-filled"
            v-model="name"
            :rules="nameRules"
            label="Usuario"
            placeholder="Digite seu usuario"
            required
          ></v-text-field>

          <v-text-field
            variant="solo-filled"
            v-model="name"
            :rules="nameRules"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            required
          ></v-text-field>

          <v-sheet class="d-flex justify-space-between">
            <a class="cursor-pointer">Esqueci a senha</a>
            <a class="cursor-pointer">Cadastrar</a>
          </v-sheet>

        </v-form>
      </v-card-text>
      <v-card-actions>
          <v-btn  variant="flat" to="/" color="success" block @click="validate">
              Entrar
            </v-btn> </v-card-actions>
    </v-card>
    <v-img
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    ></v-img>
  </div>
</template>

<script setup lang="ts">
const name = ref();
</script>
