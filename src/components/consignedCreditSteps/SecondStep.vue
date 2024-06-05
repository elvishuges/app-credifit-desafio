<template>
  <div>
    Divididas em:
    <v-row class="mt-2 installments">
      <v-col v-for="(item, index) in installmentsArray" :key="index" cols="6">
        <v-sheet
          @click="onInstallmentClick(index)"
          rounded
          class="pa-4 custom-border"
          :class="[{ highlight: clickedInstallmentIndex == index }]"
        >
          <span class="text-grey font-weight-bold">
            {{ item.numberOfInstallments }} X de R$
          </span>
          <span class="text-blue font-weight-bold">
            {{ item.installmentValue }}
          </span>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    installmentsArray: {
      type: Array,
      default: () => [],
      required: true,
    },
    clickedInstallmentIndex: {
      type: Number,
      default: -1,
      required: true,
    },
  },
  methods: {
    onInstallmentClick(installmentIndex) {
      this.$emit('onInstallmentClick', installmentIndex);
    },
  },
};
</script>

<style scoped>
.custom-border {
  /* Estilos personalizados aqui */
  border-left: 6px solid #e66900;
}
.highlight {
  border-left: 6px solid #e66900;
}
.installments {
  cursor: pointer;
}
</style>
