<template>
  <div>
    Divididas em:
    <v-row class="mt-2 installments">
      <v-col v-for="(item, index) in installmentsArray" :key="index" cols="6">
        <v-sheet
          @click="onInstallmentClick(index)"
          rounded
          class="pa-4 custom-border"
          :class="
            clickedInstallmentIndex == index ? 'custom-border-clicked ' : ''
          "
        >
          <span class="text-grey font-weight-bold">
            {{ item.numberOfInstallments }} x de R$
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
  border-left: 6px solid #e66900;
  background-color: #fafafa;
}
.custom-border-clicked {
  border-left: 6px solid #e66900;
  background-color: #ffd899;
}
.installments {
  cursor: pointer;
}
</style>
