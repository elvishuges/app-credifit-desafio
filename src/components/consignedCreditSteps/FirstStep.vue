<template>
  <div class="first-step-container">
    <v-slider
      :max="1000"
      :min="0"
      :step="100"
      thumb-label
      height="10"
      track-color="cyan darken-2"
      hide-details
    ></v-slider>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.first-step-container {
  padding: 10px;
}
</style>
