<template>
  <div ref="threeDrawing"/>
</template>

<script>

import * as THREE from 'three'
import { mapActions, mapGetters } from 'vuex';
// import { BoxGeometry } from './geometrys/';
import BoxGeometry from './geometrys/box-geometry';
import SphereGeometry from './geometrys/sphere-geometry';
import TriangleGeometry from './geometrys/triangle-geometry';

export default {
  name: 'ThreeDrawing',
  mounted() {
    this.init();
    this.animate();
  },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.onWindowResize);
  // },
  methods: {
    init() {   
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xededed)
      this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(900, 900);
      this.$refs.threeDrawing.appendChild(this.renderer.domElement);    
      this.camera.position.z = 5;   
      
      this.loadGeometrys();
      
    },
    reset() {
      if (this.$refs.threeDrawing && this.$refs.threeDrawing.firstChild) {
        this.$refs.threeDrawing.removeChild(this.$refs.threeDrawing.firstChild);
        this.init();
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    loadGeometrys() {
      this.GeometryList.map(geometry => {
        let geo;

        if (geometry.shape == "block") {         
          geo = new BoxGeometry(
            geometry.color, 
            { 
              width: geometry.width, 
              height: geometry.height, 
              depth: geometry.depth, 
            },
            {
              x: geometry.x,
              y: geometry.y,
              z: geometry.z
            }
          );
        }

        if (geometry.shape == "circle") {
          geo = new SphereGeometry(
            geometry.color, 
            geometry.radius,
            {
              x: geometry.x,
              y: geometry.y,
              z: geometry.z
            }
          );
        }

        if (geometry.shape == "triangle") {
          geo = new TriangleGeometry(
            geometry.color,
            { 
              width: geometry.width, 
              height: geometry.height, 
              depth: geometry.depth, 
            },
            {
              x: geometry.x,
              y: geometry.y,
              z: geometry.z
            }
          );

        }

        this.scene.add(geo.mesh);
      });
    },
    ...mapActions("simulator3d", [
      "GeometryListAppendAction",
      "setGeometryList",
      "updateState",
      "setDrawingStatusAction",
      "setState",
      "setSelectedTokenAction",
      "setCurrentGeometryAction",
      "ZOOM",
      "keyPressAction",
      "keySolveAction",
      "GeometryListRemove",
      "setCurrentGeometryData",
      "setCurrentGeometrySizeWidth",
      "setCurrentGeometrySizeHeight",
      "setCurrentGeometryRadius",
      // "SourcesListAppend",
      "setCurrentGeometryPosX",
      "setCurrentGeometryPosY",
      // "FluxListAppend",
      "setCurrentGeometryRotation"
    ]),
  },
  computed: {
    ...mapGetters("simulator3d", [
      "getCurrentScale",
      "GeometryList",
      "drawing",
      "currentGeometry",
      "mode",
      "zoomAction",
      "currentScale",
      "shape",
      "color",
      "gridVisible",
      "geometryData",
      "selectedToken",
      // "SourcesList",
      "viewMode",
      "cell",
      "dimensions",
      "scene_simulation",
      "view_simulation",
      // "FluxList",
      "showMiniCanvas"
    ]),
  }
}


</script>