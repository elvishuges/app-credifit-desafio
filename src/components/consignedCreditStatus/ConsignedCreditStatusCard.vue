<template>
  <v-card color="#fafafa" class="mx-auto custom-border" elevation="0">
    <v-card-title class="justify-space-between align-center">
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <div class="font-weight-medium text-body-2">{{ title }}</div>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-row class="justify-space-between ml-1 mr-1">
          <v-col cols="auto">
            <v-sheet
              rounded
              class="pa-2 mt-4 mb-8 red--text text-body-1 font-weight-medium"
              color="#faf7e2"
            >
              Reprovado por score
            </v-sheet>
          </v-col>
          <v-col cols="auto"> <div class="pa-2 mt-4 mb-8">icon</div> </v-col>
        </v-row>
        <v-card-text>
          <div class="third-step-container">
            <v-row>
              <v-col cols="6" class="pb-0">
                <v-card elevation="0">
                  <v-card-text class="ma-0 pa-0">
                    <div class="black--text ms-0 text-subtitle-2">
                      Valor a Creditar
                    </div>
                    <v-row align="center" class="mx-0 my-2">
                      <div class="grey--text ms-0">$ 1.0000</div>
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
                      <div class="grey--text ms-0">$ 1.0000</div>
                    </v-row>
                  </v-card-text>
                </v-card></v-col
              >
              <v-col cols="6" class="pt-0">
                <v-card elevation="0">
                  <v-card-text class="ma-0 pa-0">
                    <div class="black--text ms-0 text-subtitle-2">
                      Parcelamento
                    </div>
                    <v-row align="center" class="mx-0 my-2">
                      <div class="grey--text ms-0">$ 1.0000</div>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    show: true,
  }),
};
</script>

<style scoped>
.custom-border {
  border: 2px solid #e66900; /* Define a cor e a espessura da borda */
  border-radius: 8px; /* Ajusta o arredondamento dos cantos, se necessário */
}
</style>
