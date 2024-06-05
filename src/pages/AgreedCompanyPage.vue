<template>
  <div>
    <v-container style="height: 70vh">
      <h3>Funcionários Cadastrados:</h3>
      <v-row class="mt-2">
        <v-col v-if="agreedCompanyEmployees.length === 0" cols="12">
          <v-sheet rounded class="pa-4 custom-border">
            <p class="font-weight-black pb-0 mb-0">
              Nenhum funcionário cadastrado
            </p>
          </v-sheet>
        </v-col>
        <v-col
          v-for="employee in agreedCompanyEmployees"
          :key="employee.id"
          cols="4"
        >
          <v-sheet rounded class="pa-4 custom-border">
            <p class="font-weight-black pb-0 mb-0">{{ employee.fullName }}</p>
            <div class="ms-0 text-subtitle-2">
              <p class="font-weight-black pb-0 mb-0">CPF: {{ employee.cpf }}</p>
            </div>

            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-btn
        style="margin-bottom: 10px"
        color="primary"
        dark
        absolute
        bottom
        right
        x-large
        @click="onCreateEmployeeClick"
      >
        Cadastrar Funcionário
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import agreedCompanyService from '@/service/credifit/company.service';

export default {
  data() {
    return {
      agreedCompanyEmployees: [],
      agreedCompanyId: null,
    };
  },
  created() {
    this.agreedCompanyId = this.$route.params.id;
  },
  mounted() {
    this.loadAgreedCompanyEmployees();
  },
  methods: {
    onCreateEmployeeClick() {
      const companyId = this.agreedCompanyId;
      const path = `/admin/agreed-company/${companyId}/employee-form`;
      this.$router.push({ path: path });
    },

    async loadAgreedCompanyEmployees() {
      try {
        const resp = await agreedCompanyService.getAgreedCompanyEmployees(
          this.agreedCompanyId
        );
        this.agreedCompanyEmployees = resp.data || [];
      } catch (error) {
        console.log('error', error);
      }
    },
  },
};
</script>

<style scoped>
.custom-border {
  border-left: 6px solid #00b8e6f1;
  background-color: #fafafa;
  cursor: pointer;
}

.action-btn {
  padding: 20px;
}
</style>
