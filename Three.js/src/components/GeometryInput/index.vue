<template>
  <div id="geometrys-containter">
    <label for="geometrys">Deseja trocar a geometria?</label>
    <select id="geometrys" @change="emitData($event)">
      <option 
        v-for="geometry in geometrys" 
        :key="geometry.id" 
        :value="geometry.value" 
      >{{ geometry.name }}</option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GeometryInput',
  emits: ['emitGeometryName'],
  data() {
    return {
      geometrys: [
        { id: 1, name: 'Cubo',      value: 'cube' },
        { id: 2, name: 'Triângulo', value: 'triangle' },
        { id: 3, name: 'Esfera',    value: 'sphere' },
        { id: 4, name: 'Cone',      value: 'cone' },
        { id: 5, name: 'Losango',  value: 'lozangle' },
        { id: 6, name: 'Trapézio',  value: 'trapeze' },
        { id: 7, name: 'Pirâmide',  value: 'pyramid' },
        { id: 8, name: 'Anel',      value: 'ring' },
        { id: 9, name: 'Cilindro',  value: 'cylinder' },
      ]
    }
  },
  methods: {
    emitData(event) {
      const selectedGeometryName = event.target.value;
      this.$emit('emitGeometryName', selectedGeometryName)
    }
  }
})

</script>

<style>
#geometrys-container {
  display: flex;
  flex-direction: column;
}

#geometrys {
  background-color: white;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 10rem;
  border-radius: 5px;
}

</style>