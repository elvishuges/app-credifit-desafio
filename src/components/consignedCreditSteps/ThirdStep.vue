<template>
  <div class="third-step-container">
    <v-row>
      <v-col cols="6" class="pb-0">
        <v-card elevation="0">
          <v-card-text class="ma-0 pa-0">
            <div class="black--text ms-0 text-subtitle-2">Valor a Creditar</div>
            <v-row align="center" class="mx-0 my-2">
              <div class="grey--text ms-0">
                {{ formatCurrency(consignedCreditValue) }}
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" class="pb-0">
        <v-card elevation="0">
          <v-card-text class="ma-0 pa-0">
            <div class="black--text ms-0 text-subtitle-2">
              Valor a Financiar
            </div>
            <v-row align="center" class="mx-0 my-2">
              <div class="grey--text ms-0">
                {{ formatCurrency(consignedCreditValue) }}
              </div>
            </v-row>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="6" class="pt-0">
        <v-card elevation="0">
          <v-card-text class="ma-0 pa-0">
            <div class="black--text ms-0 text-subtitle-2">Parcelamento</div>
            <v-row align="center" class="mx-0 my-2">
              <div class="grey--text ms-0">
                {{ formatInstallment(installment) }}
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    consignedCreditValue: {
      type: Number,
      required: true,
    },

    installment: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    formatCurrency(value) {
      if (!value) return '';
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
    formatInstallment(installment) {
      if (!installment.numberOfInstallments) return '';
      if (!installment.installmentValue) return '';
      const numberOfInstallments = installment.numberOfInstallments;
      const installmentValue = installment?.installmentValue?.toLocaleString(
        'pt-BR',
        { style: 'currency', currency: 'BRL' }
      );
      return `${numberOfInstallments} x ${installmentValue}`;
    },
  },
};
</script>

<style></style>
