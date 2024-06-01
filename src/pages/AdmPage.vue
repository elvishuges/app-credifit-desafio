<template>
  <div>
    <v-container style="height: 70vh">
      <h3>Empresas Conveniadas:</h3>
      <v-row class="mt-2">
        <v-col v-for="company in agreedCompanies" :key="company.id" cols="4">
          <v-sheet
            @click="onAgreeCompanyClick"
            rounded
            class="pa-4 custom-border"
          >
            <p class="font-weight-black pb-0 mb-0">{{ company.name }}</p>
            <div class="ms-0 text-subtitle-2">Representante</div>
            <div class="ms-0 text-subtitle-2">
              nome: {{ company.representative.fullName }},cnpj:
              {{ company.representative.cnpj }}
            </div>
            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
      <!-- <v-row class="mt-2">
        <v-col cols="6">
          <v-sheet
            @click="onCreateCompanyClick"
            rounded
            class="pa-4 custom-border-create-company"
          >
            <div>Cadastrar Nova Empresa parceira</div>
          </v-sheet>
        </v-col>
      </v-row> -->
      <!-- Botão para adicionar nova empresa -->
    </v-container>
  </div>
</template>

<script>
import agreedCompanyService from '@/service/credifit/company.service';

export default {
  data() {
    return {
      agreedCompanies: [],
    };
  },
  methods: {
    onCreateCompanyClick() {
      this.$router.push({ path: '/create-company' });
    },
    onAgreeCompanyClick() {
      this.$router.push({ path: '/admin/add-company-employees' });
    },
    async loadAgreedCompanies() {
      try {
        const resp = await agreedCompanyService.getAllAgreedCompanies();
        this.agreedCompanies = resp.data || [];
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  mounted() {
    this.loadAgreedCompanies();
  },
};
</script>

<style scoped>
.custom-border {
  border-left: 6px solid #00b8e6f1;
  background-color: #fafafa;
}
.custom-border-create-company {
  cursor: pointer;
  background-color: #fafafa;
  border-left: 6px solid #e98364f1;
}
.action-btn {
  padding: 20px;
}
</style>
