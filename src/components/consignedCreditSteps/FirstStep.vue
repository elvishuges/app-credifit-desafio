<template>
  <div class="first-step-container">
    <v-slider
      v-model="sliderValue"
      :max="maxValue"
      :min="minValue"
      :step="stepValue"
      thumb-label
      height="10"
      track-color="cyan darken-2"
      hide-details
      @change="emitSliderValue"
    ></v-slider>
  </div>
</template>

<script>
export default {
  props: {
    maxValue: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      required: true,
    },
    stepValue: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
    emitSliderValue() {
      this.$emit('sliderValueChanged', this.sliderValue);
    },
  },
};
</script>

<style scoped>
.first-step-container {
  padding: 10px;
}
</style>
