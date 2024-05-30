<template>
  <div>
    Divididas em:
    <v-row class="mt-2">
      <v-col cols="6">
        <v-sheet rounded class="pa-4 custom-border">
          Step 1 - Coluna 1
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class="pa-4 custom-border">
          Step 1 - Coluna 1
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class="pa-4 custom-border">
          Step 3 - Coluna 1
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class="pa-4 custom-border">
          Step 3 - Coluna 2
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-border {
  border-left: 6px solid #e66900;
  background-color: #fafafa;
}
</style>
