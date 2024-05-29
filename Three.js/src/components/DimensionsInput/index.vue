<template>
  <div class="dimensions-container">
    <label for="x">X</label>
    <input type="number" id="x" v-model="x" class="dimension-input">

    <label for="y">Y</label>
    <input type="number" id="y" v-model="y" class="dimension-input">

    <label for="z">Z</label>
    <input type="number" id="z" v-model="z" class="dimension-input">
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DimensionsInput',
  emits: ['emitDimensions'],
  data() {
    return {
      x: '1',
      y: '1',
      z: '1'
    }
  },
  watch: {
    x(x) {
      this.validateData(x);
    },
    y(y) {
      this.validateData(y);
    },
    z(z) {
      this.validateData(z);
    }
  },
  methods: {
    emitData() {
      this.$emit('emitDimensions', { 
        x: parseFloat(this.x), 
        y: parseFloat(this.y), 
        z: parseFloat(this.z) 
      })
    },
    validateData(value) {
      if (!isNaN(parseFloat(value)) && this.dimensionIsGreaterThanZero(value)) {
        this.emitData();
      }
    },
    dimensionIsGreaterThanZero(dimension) {
      if(dimension > 0) {
        return true;
      }
      return false;
    }
  }
})

</script>

<style>

.dimensions-container {
  display:  flex;
  flex-direction: column; 
}

.dimension-input {
  margin: 0.3rem 0 1rem 0;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 5px;
  width: 10rem;
}

</style>