<template>
  <v-card outlined>
    <v-divider />
    <v-card-text>
      <v-form ref="form" v-model="formaValid" lazy-validation>
        <v-container class="mt-0">
          <v-row>
            <v-col cols="12" class="mt-0 pa-0"> <h3>Empresa:</h3> </v-col>
            <v-col cols="12" class="pa-0 pt-2 pb-0 mb-0">
              <v-text-field
                v-model="form.companyName"
                :rules="nameRules"
                label="Nome da Empresa"
                required
                outlined
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0"> <h3>Representante:</h3> </v-col>

            <v-col cols="6" class="pt-2 pa-0">
              <v-text-field
                v-model="form.fullName"
                :rules="nameRules"
                label="Nome Completo"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pt-2 pa-0 pl-2">
              <v-text-field
                v-model="form.companyName"
                :rules="nameRules"
                label="Razão Social"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="mt-0 pa-0">
              <v-text-field
                v-model="form.cpf"
                :rules="nameRules"
                label="CPF"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="mt-0 pa-0 pl-2">
              <v-text-field
                v-model="form.cnpj"
                :rules="nameRules"
                label="CNPJ"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="Email"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-0">
              <v-text-field
                v-model="form.password"
                ref="password"
                type="password"
                :rules="passwordRules"
                label="Senha de Acesso"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            large
            :rounded="false"
            dark
            color="secondary"
            @click="submitForm"
            >Cadastrar</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card-text>
    <v-snackbar v-model="showSnackbar">
      {{ textSnackbar }}
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="showSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import agreedCompanyService from '@/service/credifit/company.service';
export default {
  data() {
    return {
      showSnackbar: false,
      textSnackbar: '',
      form: {
        fullName: '',
        companyName: '',
        cpf: '',
        cnpj: '',
        email: '',
        password: '',
      },
      formaValid: true,
      nameRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => (v && v.length < 200) || 'Nome deve ter menos de 20 caracteres',
      ],
      emailRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => (v && v.length <= 30) || 'Email deve ter menos de 30 caracteres',
      ],
      passwordRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => (v && v.length < 20) || 'Senha deve ter menos de 20 caracteres',
      ],
    };
  },

  methods: {
    login() {
      this.$router.push('/login');
    },
    async submitForm() {
      if (this.$refs.form.validate()) {
        const payload = {
          name: this.form.companyName,
          representative: {
            fullName: this.form.fullName,
            companyName: this.form.companyName,
            cpf: this.form.cpf,
            cnpj: this.form.cnpj,
            email: this.form.email,
            password: this.form.password,
          },
        };
        try {
          await agreedCompanyService.createAgreedCompany(payload);
          this.textSnackbar = 'Empresa adicionada com sucesso!';
          this.showSnackbar = true;
          this.resetForm();
        } catch (error) {
          console.log('Error', error.response.data.message);
          this.textSnackbar = error.response.data.message;
          this.showSnackbar = true;
        }
      }
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
