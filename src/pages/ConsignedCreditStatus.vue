<template>
  <v-card elevation="0" max-width="450" class="mx-auto">
    <div class="pt-5">
      <v-row align="center">
        <v-col cols="auto">
          <v-icon class="ma-0">mdi-chevron-left</v-icon>
        </v-col>
        <v-col>
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
          <div class="mb-4 cyan--text text--darken-4">Crédito Consignado</div>
        </v-col>
      </v-row>
    </div>
    <v-card class="mx-auto" max-width="480">
      <v-list-item>
        <v-list-item-content>
          <h4 class="mb-4 cyan--text text--darken-4">Simular Emprestimo</h4>
          <v-sheet rounded="xl" class="pa-3" color="red lighten-4">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="pt-2 mr-3">
                <v-avatar color="red" size="35">
                  <span class="caption white--text">cj</span>
                </v-avatar>
              </div>
              <div class="text-left body-2">
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
import items from '@/consts/breadcrumbs';
import ConsignedCreditStatusCard from '@/components/consignedCreditStatus/ConsignedCreditStatusCard.vue';
export default {
  components: { ConsignedCreditStatusCard },
  data() {
    return {
      userStepMessage:
        'Você solicitou seu emprestimo! Agora aguarde as etapas de análise serem concluidas!',
      items: items,
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
