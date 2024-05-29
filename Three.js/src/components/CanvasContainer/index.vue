<template>
  <div 
    id="canvas-container" 
    @wheel="onMouseWheel"
    @keydown="keyDown"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    ref="canvasRef"
  ></div>
</template>

<script>

import { defineComponent } from 'vue';
import GeometryFactory from '@/core/geometry-factory.js';


export default defineComponent({
  name: 'CanvasContainer',
  props: {
    geometryName: { 
      type: String,
      default: 'cube',
      required: true
    }, 
    x: { 
      type: Number,
      default: 1,
      required: true 
    }, 
    y: { 
      type: Number,
      default: 1,
      required: true 
    }, 
    z: { 
      type: Number,
      default: 1 ,
      required: true    
    }, 
    color: { 
      type: String,
      default: '#42BDA8',
      required: true     
    }
  },
  watch: {
    geometryName() {
      this.restartComponent();
    },
    color() {
      this.restartComponent();
    },
    x() {
      this.restartComponent();
    },
    y() {
      this.restartComponent();
    },
    z() {
      this.restartComponent();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const geometryFactory = new GeometryFactory();
      this.interactiveGeometry = geometryFactory.createGeometry(
        this.geometryName, this.x, this.y, this.z, this.color, this.$refs.canvasRef
      );

      this.interactiveGeometry.animate();
    },
    restartComponent() {
      if (this.$refs.canvasRef && this.$refs.canvasRef.firstChild) {
        this.$refs.canvasRef.removeChild(this.$refs.canvasRef.firstChild);
        this.init();
      }
    },
    onMouseWheel(event) {
      this.interactiveGeometry.onMouseWheel(event);
    },
    onMouseDown(event) {
      this.interactiveGeometry.onMouseDown(event);
    },
    keyDown(event) {
      this.interactiveGeometry.keyDown(event);
    },
    onMouseMove(event) {
      this.interactiveGeometry.onMouseMove(event);
    },
    onMouseUp(event) {
      this.interactiveGeometry.onMouseUp(event);
    }
  }
})

</script>