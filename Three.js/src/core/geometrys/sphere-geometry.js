import * as THREE from "three";

export default class SphereGeometry {
  constructor(color) {
    this.geometry = new THREE.SphereGeometry();
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}
