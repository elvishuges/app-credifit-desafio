<template>
  <v-card elevation="0" max-width="450" class="mx-auto">
    <div>
      <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      <div>Credito</div>
    </div>
    <v-card class="mx-auto" max-width="480">
      <v-list-item>
        <v-list-item-content>
          <h4 class="mb-4 cyan--text text--darken-4">Simular Emprestimo</h4>
          <v-sheet rounded="xl" class="pa-4" color="red lighten-4">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-avatar color="red">
                  <span class="white--text text-h7">CJ</span>
                </v-avatar>
              </div>
              <div class="text-left">
                {{ userStepMessage }}
              </div>
            </div>
          </v-sheet>
          <v-row class="mt-2 ml-0 mr-0">
            <v-col cols="12">
              <consigned-credit-status-card title="SOLICITAÇÃO DE EMPRÉSTIMO" />
            </v-col>
            <v-col cols="12">
              <consigned-credit-status-card title="EMPRÉSTIMO CORRENTE" />
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="pa-2 justify-end">
        <v-btn outlined rounded large text color="cyan darken-2">
          Voltar
        </v-btn>
        <v-btn dark color="cyan darken-2" large rounded>
          Simular Emprestimo
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
import ConsignedCreditStatusCard from '@/components/consignedCreditStatus/ConsignedCreditStatusCard.vue';
export default {
  components: { ConsignedCreditStatusCard },
  data() {
    return {
      userStepMessage:
        'Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação! Digite quanto você precisa',
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    };
  },
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>

<style scoped>
.step-container {
  margin-block: 10px;
}
</style>
