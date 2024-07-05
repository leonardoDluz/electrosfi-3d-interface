<template>
  <div 
    ref="threeDrawing"
    @click="addGeometry"
  />
</template>

<script>

import * as THREE from 'three'
import { mapActions, mapGetters } from 'vuex';
import BoxGeometry from './geometrys/box-geometry';
import SphereGeometry from './geometrys/sphere-geometry';
import TriangleGeometry from './geometrys/triangle-geometry';
import md5 from 'js-md5';
import formatColor from '@/common/formatColor';

export default {
  name: 'ThreeDrawing',
  mounted() {
    this.init();
    this.loadGeometrys();
  },
  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.onWindowResize);
  // },
  watch: {
    // selectedToken: function() {
    //   if (this.mode == "transform") {
    //     this.updateTransformer();
    //   }
    // },
    // viewMode: function() {
    //   this.updateTransformer();
    // },
    // mode: function() {
    //   this.updateTransformer();
    // },
    GeometryList: {
      handler() {
        this.clearScene();
        this.loadGeometrys();
        // this.updateState();
      },
      deep: true
    }
  },
  methods: {
    init() {   
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xededed)
      this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setSize(900, 900);
      this.$refs.threeDrawing.appendChild(this.renderer.domElement);    
      this.camera.position.z = 10; 
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 20);
      this.directionalLight.position.set(0, 0, 1); 
      this.camera.add(this.directionalLight);
      this.scene.add(this.camera); 
      this.animate(); 
    },
    clearScene() {
      this.scene.children = [];
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
        const color = formatColor(geometry.fill);
        console.log(color);

        if (geometry.shape == "block") {         
          geo = new BoxGeometry(
            color, 
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

        if (geometry.shape == "sphere") {
          geo = new SphereGeometry(
            color, 
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
            color,
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
    addGeometry(/*event*/) {
        if (this.mode != "create") return false;
        let token = md5.hex(Date.now().toString());

        this.setCurrentGeometryAction({
            name: this.shape + " " + (this.GeometryList.length + 1),
            token: token,
            x: 0, 
            y: 0,
            z: 0, 
            fill: this.color,
            shape: this.shape,
            epsilon: 12,
            class: "geometry",
            width: 1,
            height: 1,
            depth: 1,
            materialId: 0,
            radius: 1,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            geometricFill: {
                properties: {
                    name: `Default ${this.shape + " " + (this.GeometryList.length + 1)}`,
                    width: 1,
                    height: 1,
                    depth: 1,
                    image: ''
                },
                elements: []
            },
            geometricFillPattern: []
        });

        // this.setDrawingStatusAction(true);
        this.GeometryListAppendAction(this.currentGeometry);
    },
    ...mapActions("simulator", [
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
      "setCurrentGeometrySizeDepth",
      "setCurrentGeometryRadius",
      // "SourcesListAppend",
      "setCurrentGeometryPosX",
      "setCurrentGeometryPosY",
      // "FluxListAppend",
      "setCurrentGeometryRotation"
    ]),
  },
  computed: {
    ...mapGetters("simulator", [
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