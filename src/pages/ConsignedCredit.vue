<template>
  <v-card elevation="0" max-width="450" class="mx-auto">
    <div class="pt-5">
      <v-row align="center">
        <v-col cols="auto">
          <v-icon class="ma-0">mdi-chevron-up</v-icon>
        </v-col>
        <v-col>
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
          <div class="mb-4 cyan--text text--darken-4">Crédito Consignado</div>
        </v-col>
      </v-row>
    </div>
    <v-card class="mx-auto" max-width="480">
      <v-list-item three-line>
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
          <v-row align="center" justify="center">
            <v-sheet
              width="130"
              rounded="xl"
              class="pa-4 mt-8 mb-8"
              color="red lighten-4"
            >
              VAlor
            </v-sheet>
          </v-row>

          <div class="step-container">
            <first-step v-if="false" />
            <second-step v-if="false" />
            <third-step v-if="true" />
          </div>
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
import FirstStep from './../components/consignedCreditSteps/FirstStep.vue';
import SecondStep from './../components/consignedCreditSteps/SecondStep.vue';
import ThirdStep from './../components/consignedCreditSteps/ThirdStep.vue';

export default {
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
  },
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
<style>
.v-breadcrumbs {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px !important;
}
</style>
