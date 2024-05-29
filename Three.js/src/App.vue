<template>
  <main>
    <div class="canvas-container">
      <CanvasContainer 
        class="canvas"
        :geometryName="geometryName"
        :x="x"
        :y="y"
        :z="z"
        :color="color"
      />
    </div>
    <div class="side-bar">
      <ColorInput @emitColor="updateColor"/>
      <DimensionsInput @emitDimensions="updateDimensions"/>
      <GeometryInput @emitGeometryName="updateGeometryName"/>
      <button 
        class="submit-button" 
        type="submit"
        @click="submitToApi"
      >Enviar</button>
    </div>
  </main>
</template>

<script>

import CanvasContainer from './components/CanvasContainer';
import ColorInput from './components/ColorInput';
import DimensionsInput from './components/DimensionsInput';
import GeometryInput from './components/GeometryInput';
import api from './api';

export default {
  name: 'App',
  data() {
    return {
      geometryName: 'cube',
      x: 1,
      y: 1,
      z: 1,
      color: '#42BDA8'
    }
  },
  methods: {
    async submitToApi() {
      try {
        const res = await api.get(`/${this.geometryName}`, {
          params: {
            x: this.x,
            y: this.y,
            z: this.z,
            mesh_size: 0.1
          }
        });
        console.log(res.data);
      } catch(e) {
        console.log(e);
      }
    },
    updateGeometryData(geometryData) {
      this.geometryData = geometryData;
    },
    updateColor(color) {
      this.color = color;
    },
    updateDimensions(dimensions) {
      let { x, y, z } = dimensions;
      this.x = x;
      this.y = y;
      this.z = z;
    },
    updateGeometryName(geometryName) {
      this.geometryName = geometryName;
    }
  },
  components: {
    CanvasContainer,
    ColorInput,
    DimensionsInput,
    GeometryInput
  }
}

</script>

<style>

* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.canvas-container {
  height: 100vh;
  width: 80vw;
  background-color: rgb(174, 174, 174);
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvas {
  background-color: #fff;
  height: 55rem;
  width: 55rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.side-bar {
  background-color: rgb(250, 250, 250);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 20vw;
  padding: 2.5rem;
  display:  flex;
  flex-direction: column;
  row-gap: 3rem;
  font-size: 20px;
}

.submit-button {
  border: none;
  width: 10rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  background-color: #42BDA8;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

</style>