<template>
  <v-card outlined elevation="0" style="height: 100%">
    <v-divider />
    <v-card-text>
      <v-form ref="form" v-model="formaValid" lazy-validation>
        <v-container class="mt-0">
          <v-row>
            <v-col cols="12" class="pa-0"> <h3>Representante:</h3> </v-col>

            <v-col cols="12" class="pt-2 pa-0">
              <v-text-field
                v-model="form.fullName"
                :rules="textRules"
                label="Nome Completo"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="mt-0 pa-0">
              <v-text-field
                v-model="form.cpf"
                :rules="cpfRules"
                label="CPF"
                required
                outlined
                v-mask="'###.###.###-##'"
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pa-0 pl-2">
              <v-text-field
                v-model="form.salary"
                label="Salário"
                required
                outlined
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pa-0 pl-2">
              <v-text-field
                v-model="form.score"
                label="Score"
                required
                outlined
                type="number"
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
            </v-col> </v-row
          ><v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              x-large
              :rounded="false"
              dark
              color="primary"
              @click="submitForm"
              >Cadastrar Funcionário</v-btn
            >
          </v-card-actions>
        </v-container>
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
import Vue from 'vue';
import VueMask from 'v-mask';

Vue.use(VueMask);
import agreedCompanyService from '@/service/credifit/company.service';
export default {
  data() {
    return {
      showSnackbar: false,
      textSnackbar: '',
      agreedCompanyId: '',
      form: {
        fullName: '',
        salary: 0,
        score: 0,
        cpf: '',
        email: '',
        password: '',
        agreedCompanyId: '',
      },
      formaValid: true,
      textRules: [
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
      cpfRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => (v && v.length === 14) || 'CPF inválido',
      ],
    };
  },
  mounted() {
    this.agreedCompanyId = this.$route.params.id;
  },

  methods: {
    login() {
      this.$router.push('/login');
    },
    async submitForm() {
      if (this.$refs.form.validate()) {
        const agreedCompanyId = this.agreedCompanyId;
        this.form.agreedCompanyId = agreedCompanyId;
        const payload = this.form;

        try {
          await agreedCompanyService.addEmployee(agreedCompanyId, payload);
          this.textSnackbar = 'Funcionário adicionado com sucesso!';
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
