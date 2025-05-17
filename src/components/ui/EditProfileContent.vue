<template>
  <!-- Perfil -->
  <v-col cols="12" md="8">
    <v-card class="pa-6 rounded-xl elevation-3 bg-primary">
      <div class="text-center mb-6">
        <v-avatar size="200" class="elevation-2">
          <v-img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt="Avatar"
          />
        </v-avatar>
        <h2 class="text-h5 font-weight-bold mt-4">Editar Perfil</h2>
      </div>

      <v-form class="d-flex flex-column gap-4">
        <v-text-field
          variant="outlined"
          label="Nome"
          prepend-inner-icon="mdi-account"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="E-mail"
          prepend-inner-icon="mdi-email"
          type="email"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Telefone"
          prepend-inner-icon="mdi-phone"
          type="tel"
          density="comfortable"
          clearable
        />
        <v-btn
          color="deep-purple-accent-4"
          class="mt-4"
          size="large"
          rounded="xl"
          block
          @click="emit('close-edit')"
        >
          Salvar Alterações
        </v-btn>
      </v-form>
    </v-card>


  </v-col>

  <!-- Características -->
  <v-col cols="12" md="4" >
    <v-card class="pa-6 rounded-xl elevation-3 bg-primary">
      <h2 class="text-h6 font-weight-bold mb-4 text-center">
        Editar Características
      </h2>

      <v-form class="d-flex flex-column gap-4">
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
        <v-text-field
          variant="outlined"
          label="Altura"
          prepend-inner-icon="mdi-ruler"
          density="comfortable"
          clearable
        />
       <v-text-field
              variant="outlined"
              label="Altura"
              prepend-inner-icon="mdi-ruler"
              density="comfortable"
              clearable
            />
            <v-text-field
              variant="outlined"
              label="Peso"
              prepend-inner-icon="mdi-weight"
              density="comfortable"
              clearable
            />
            <v-text-field
              variant="outlined"
              label="Hobbies"
              prepend-inner-icon="mdi-star"
              density="comfortable"
              clearable
            />


        <v-btn
          color="deep-purple-accent-4"
          class="mt-4"
          size="large"
          rounded="xl"
          block
          @click="emit('close-edit')"
        >
          Salvar Alterações
        </v-btn>
      </v-form>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
const emit = defineEmits(["close-edit"]);
</script>

<style scoped></style>
