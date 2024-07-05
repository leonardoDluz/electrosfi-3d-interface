import * as THREE from "three";

export default class CubeGeometry {

  constructor(color, x, y, z) {
    this.geometry = new THREE.BoxGeometry(
      x,
      y,
      z
    );
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}
