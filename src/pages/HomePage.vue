<template>
  <v-container>
    <div>
      <v-row class="mt-2">
        <v-col cols="6">
          <v-sheet
            @click="onConsignedCreditClick"
            rounded
            class="pa-4 custom-border"
          >
            Credito Consignado
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    onConsignedCreditClick() {
      this.$router.push('/credito-consignado');
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
</style>
