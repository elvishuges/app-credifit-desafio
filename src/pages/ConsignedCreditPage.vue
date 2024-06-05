<template>
  <div>
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
            <v-row align="center" justify="center">
              <v-sheet
                width="130"
                rounded="xl"
                class="pa-2 mt-10 mb-4"
                color="blue lighten-1"
                elevation="0"
                style="font-weight: bold; text-align: center"
              >
                <span v-text="formatCurrency(consignedCreditValue)"></span>
              </v-sheet>
            </v-row>

            <div class="step-container">
              <first-step
                :minValue="MIN_VALUE_CREDIT"
                :maxValue="MAX_VALUE_CREDIT"
                :stepValue="STEP_VALUE_CREDIT"
                @sliderValueChanged="onSliderValueChange"
                v-if="currentStep == 1"
              />
              <second-step
                :installmentsArray="installmentsArray"
                @onInstallmentClick="onInstallmentClick"
                :clickedInstallmentIndex.sync="clickedInstallmentIndex"
                v-if="currentStep == 2"
              />
              <third-step v-if="currentStep == 3" />
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="pa-2 justify-end">
          <v-btn
            @click="onBackBtnClick"
            outlined
            rounded
            large
            text
            color="cyan darken-2"
          >
            Voltar
          </v-btn>
          <v-btn
            :dark="disabledNextBtn ? false : true"
            color="cyan darken-2"
            large
            rounded
            @click="onNextBtnClick"
            :disabled="disabledNextBtn"
          >
            {{ nextBtnText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
    <v-snackbar v-model="showSnackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text @click="showSnackbar = false" v-bind="attrs">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import consignedCreditService from '@/service/credifit/consignedCredit.service';

import FirstStep from '../components/consignedCreditSteps/FirstStep.vue';
import SecondStep from '../components/consignedCreditSteps/SecondStep.vue';
import ThirdStep from '../components/consignedCreditSteps/ThirdStep.vue';
import items from '@/consts/breadcrumbs';

export default {
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
  },
  data() {
    return {
      MIN_VALUE_CREDIT: 0,
      MAX_VALUE_CREDIT: 100000,
      STEP_VALUE_CREDIT: 100,
      employeeId: null,

      currentStep: 1,
      consignedCreditValue: 0,

      installmentsArray: [],
      clickedInstallmentIndex: -1,

      userStepMessage:
        'Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação! Digite quanto você precisa',
      items: items,
      snackbarText: '',
      showSnackbar: false,
    };
  },
  mounted() {
    const employeeId = this.$route.params.id;
    this.employeeId = employeeId;
  },
  computed: {
    nextBtnText() {
      switch (this.currentStep) {
        case 1:
          return 'Simular Empréstimo';
        case 2:
          return 'Seguir';
        default:
          return '';
      }
    },
    disabledNextBtn() {
      switch (this.currentStep) {
        case 1:
          return this.consignedCreditValue <= 0;
        case 2:
          return false;
        default:
          return false;
      }
    },
  },
  methods: {
    onSliderValueChange(value) {
      this.consignedCreditValue = value;
    },
    onBackBtnClick() {
      if (this.currentStep == 1) {
        this.$router.push('/');
        return;
      }
      this.currentStep--;
    },
    async onNextBtnClick() {
      if (this.currentStep == 1) {
        await this.loadInfosSecondStep();
        this.currentStep++;
      }
      if (this.currentStep == 2) {
        console.log('2');
      }
    },
    async loadInfosSecondStep() {
      const simulatioObject = await this.getConsignedCreditSimulateObject();
      this.installmentsArray = simulatioObject.installments;
    },
    async getConsignedCreditSimulateObject() {
      try {
        const resp = await consignedCreditService.simulateConsignedCredit(
          this.employeeId,
          this.consignedCreditValue
        );
        return resp?.data || [];
      } catch (error) {
        console.log('Error', error.response.data.message);
        this.snackbarText = error.response.data.message;
        this.showSnackbar = true;
      }
    },
    validateStep() {
      if (this.currentStep == 1) {
        return this;
      }
    },
    onInstallmentClick(installmentIndex) {
      this.clickedInstallmentIndex = installmentIndex;
    },

    formatCurrency(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
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
