<template>
  <!-- Perfil Principal -->
  <v-row v-if="!editprofile">
    <v-col cols="12">
      <v-card
        class="pa-6 d-flex bg-primary flex-column flex-md-row align-center mb-8"
        rounded="xl"
        elevation="4"
      >
        <v-avatar size="240" class="me-6">
          <v-img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt="Avatar"
          />
        </v-avatar>

        <div class="flex-grow-1">
          <div class="d-flex justify-space-between align-center">
            <h2 class="text-h4 font-weight-bold mb-2 purple--text">
              Nícolas Brizol Castela
            </h2>
            <v-btn  @click="editprofile = true" color="white" variant="outlined" rounded="xl" class="ma-0">
              <v-icon class="mr-2" left>mdi-account</v-icon>
              Editar Perfil
            </v-btn>
          </div>

          <p class="text-body-1 mb-4" style="max-width: 600px">
            Text da descrição do perfil. Lorem ipsum dolor sit amet, consectetur
          </p>

          <v-row dense class="mb-4" style="max-width: 650px">
            <v-col
              cols="auto"
              class="d-flex align-center gap-2 purple--text text-subtitle-2 font-weight-medium"
            >
              <v-icon color="purple" size="20">mdi-map-marker</v-icon> Vitoria,
              ES
            </v-col>
            <v-col
              cols="auto"
              class="d-flex align-center gap-2 purple--text text-subtitle-2 font-weight-medium"
            >
              <v-icon color="purple" size="20">mdi-cake-variant</v-icon> 21 anos
            </v-col>
            <v-col
              cols="auto"
              class="d-flex align-center gap-2 purple--text text-subtitle-2 font-weight-medium"
            >
              <v-icon color="purple" size="20">mdi-account-group</v-icon>
              Solteiro
            </v-col>
          </v-row>

          <!-- Badges de Verificação -->
          <v-row dense class="mb-4" style="max-width: 650px">
            <v-col
              cols="auto"
              class="d-flex align-center gap-1 text-body-2 grey--text"
            >
              <v-icon color="success" size="18">mdi-check-circle</v-icon> E-mail
              verificado
            </v-col>
            <v-col
              cols="auto"
              class="d-flex align-center gap-1 text-body-2 grey--text"
            >
              <v-icon color="primary" size="18"
                >mdi-file-document-outline</v-icon
              >
              Documento verificado
            </v-col>
            <v-col
              cols="auto"
              class="d-flex align-center gap-1 text-body-2 grey--text"
            >
              <v-icon color="primary" size="18">mdi-phone</v-icon> Telefone
              verificado
            </v-col>
          </v-row>

          <!-- Redes sociais -->

          <!-- Interesses -->
          <div class="mb-2 font-weight-bold purple--text">Interesses:</div>
          <v-chip-group multiple column class="mb-4" style="max-width: 650px">
            <v-chip
              color="purple lighten-4"
              text-color="purple"
              class="ma-1"
              pill
              >Viagens</v-chip
            >
            <v-chip
              color="purple lighten-4"
              text-color="purple"
              class="ma-1"
              pill
              >Música</v-chip
            >
            <v-chip
              color="purple lighten-4"
              text-color="purple"
              class="ma-1"
              pill
              >Filmes</v-chip
            >
            <v-chip
              color="purple lighten-4"
              text-color="purple"
              class="ma-1"
              pill
              >Leitura</v-chip
            >
            <v-chip
              color="purple lighten-4"
              text-color="purple"
              class="ma-1"
              pill
              >Esportes</v-chip
            >
          </v-chip-group>
        </div>
      </v-card>
    </v-col>

    <!-- Avaliações -->
    <v-col cols="6">
      <v-card class="pa-6 mb-6 bg-primary" rounded="xl" elevation="3">
        <h3 class="text-h6 font-weight-bold mb-4 purple--text">Avaliações</h3>

        <v-row justify="space-around" class="text-center">
          <v-col cols="3">
            <v-avatar size="40" class="mx-auto mb-1" color="purple lighten-4">
              <span class="purple--text text-h5">😊</span>
            </v-avatar>
            <div class="text-h6 font-weight-bold purple--text">12</div>
            <div class="text-caption grey--text">útil</div>
          </v-col>
          <v-col cols="3">
            <v-avatar size="40" class="mx-auto mb-1" color="purple lighten-4">
              <span class="purple--text text-h5">😐</span>
            </v-avatar>
            <div class="text-h6 font-weight-bold purple--text">3</div>
            <div class="text-caption grey--text">inútil</div>
          </v-col>
          <v-col cols="3">
            <v-avatar size="40" class="mx-auto mb-1" color="purple lighten-4">
              <span class="purple--text text-h5">👍</span>
            </v-avatar>
            <div class="text-h6 font-weight-bold purple--text">25</div>
            <div class="text-caption grey--text">positivo</div>
          </v-col>
          <v-col cols="3">
            <v-avatar size="40" class="mx-auto mb-1" color="purple lighten-4">
              <span class="purple--text text-h5">👎</span>
            </v-avatar>
            <div class="text-h6 font-weight-bold purple--text">2</div>
            <div class="text-caption grey--text">negativo</div>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <p class="text-body-2 grey--text text-center">
          Nenhuma avaliação detalhada por enquanto.
        </p>
      </v-card>
    </v-col>

    <v-col cols="6">
      <!-- Perguntas e Respostas -->
      <v-card class="pa-6 mb-6 bg-primary" rounded="xl" elevation="3">
        <h3 class="text-h6 font-weight-bold mb-4 purple--text">
          Perguntas e Respostas
        </h3>
        <v-list class="bg-primary" two-line>
          <v-list-item>
            <v-list-item-title class="font-weight-bold"
              >Qual seu hobbie favorito?</v-list-item-title
            >
            <v-list-item-subtitle
              >Gosto muito de tocar violão e sair para
              trilhas.</v-list-item-subtitle
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                >Já viajou para fora do Brasil?</v-list-item-title
              >
              <v-list-item-subtitle
                >Sim, já visitei Europa e América do
                Norte.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider class="my-4"></v-divider>

        <v-textarea
          label="Faça uma pergunta"
          placeholder="Digite sua pergunta aqui..."
          rows="3"
          outlined
          clearable
        ></v-textarea>

        <v-btn color="purple" class="mt-3" rounded="xl" @click="askQuestion"
          >Enviar pergunta</v-btn
        >
      </v-card>
    </v-col>
  </v-row>
  <v-row v-if="editprofile">
    <EditProfileContent  @close-edit="editprofile = false"/>
  </v-row>
</template>

<script setup lang="ts">
const editprofile = ref(false);

const askQuestion = () => {
  alert("Pergunta enviada!");
};
</script>

<style scoped></style>
