<template>
  <v-row no-gutters class="h-screen">
    <v-col
      cols="12"
      md="12"
      class="pa-6 d-flex flex-column align-center justify-center"
    >
      <v-card class="w-25" variant="tonal" rounded="xl" elevation="3">
        <v-card-title class="text-h5 text-center py-6 font-weight-bold">
          Cadastre-se
        </v-card-title>

        <v-card-text class="d-flex justify-center">
          <v-btn-toggle
            v-model="tipoCadastro"
            mandatory
            class="mb-6"
            selected-class="bg-deep-purple text-white font-weight-bold"
            density="comfortable"
            divided
            rounded="xl"
          >
            <v-btn value="cliente">Sou Cliente</v-btn>
            <v-btn value="acompanhante">Sou Acompanhante</v-btn>
          </v-btn-toggle>
        </v-card-text>
        <v-form
          v-if="tipoCadastro === 'cliente'"
          v-model="formValid"
          class="px-6 pb-6"
        >
          <v-text-field
            v-model="form.C_usuario"
            variant="solo"
            label="Usuário"
            required
            density="compact"
          />
          <v-text-field
            v-model="form.C_email"
            variant="solo"
            label="E-mail"
            type="email"
            required
            density="compact"
          />
          <v-text-field
            v-model="form.C_password"
            variant="solo"
            label="Senha"
            required
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
            density="compact"
          />
          <v-text-field
            v-model="form.C_confirmPassword"
            variant="solo"
            label="Confirme sua senha"
            required
            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
            density="compact"
          />
          <v-checkbox
            color="blue"
            class="text-caption"
            label="Termos"
            density="compact"
          ></v-checkbox>
          <v-btn
            type="submit"
            color="deep-purple"
            block
            size="large"
            rounded="xl"
            to="/profile"
          >
            Registrar
          </v-btn>
        </v-form>

        <v-form
          v-if="tipoCadastro === 'acompanhante'"
          v-model="formValid"
          class="px-6 pb-6"
        >
          <v-text-field
            v-model="form.AC_usuario"
            variant="solo"
            label="Usuário"
            required
            density="compact"
          />
          <v-text-field
            v-model="form.AC_email"
            variant="solo"
            label="E-mail"
            type="email"
            required
            density="compact"
          />
          <v-text-field
            v-model="form.AC_password"
            variant="solo"
            label="Senha"
            required
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
            density="compact"
          />
          <v-text-field
            v-model="form.AC_confirmPassword"
            variant="solo"
            label="Confirme sua senha"
            required
            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
            density="compact"
          />
          <v-checkbox
            class="text-caption"
            color="blue"
            label="Termos"
            density="compact"
          ></v-checkbox>
          <v-btn
            type="submit"
            color="deep-purple"
            block
            size="large"
            rounded="xl"
            to="/profile"
          >
            Registrar
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const formValid = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const form = ref({
  nome: "",
  genero: "",
  atendeComo: [],
  publico: [],
  idade: null,
  descricao: "",
  cidade: "",
  fotos: [],
});

const tipoCadastro = ref("cliente");
watch(tipoCadastro, () => {
  showPassword.value = false;
  showConfirmPassword.value = false;
});
</script>

<style scoped>
.v-card-title {
  text-align: center;
}

.v-btn-toggle .v-btn {
  text-transform: none;
}
</style>
