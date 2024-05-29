<template>
  <div id="color-container">
    <label for="color">Escolha a cor da geometria:</label>
    <input name="color" id="color" type="color" v-model="color" @change="emitData">
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColorInput',
  emits: ['emitColor'],
  data() {
    return {
      color: '#42BDA8'
    }
  },
  methods: {
    emitData() {
      this.$emit('emitColor', this.color)
    }
  }
})

</script>

<style>
#color-container {
  display: flex;
  flex-direction: column;
}

#color {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 7.5rem;
  height: 7.5rem;
  appearance: none;
  border:  none;
  background-color: transparent;
}
/* 
#color:: */


  
</style>