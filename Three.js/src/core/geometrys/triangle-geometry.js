import * as THREE from "three";

export default class TriangleGeometry {
  constructor(color, x, y, z) {
    const shape = new THREE.Shape();
    shape.moveTo(0, y / 2);
    shape.lineTo(x / 2, -y / 2);
    shape.lineTo(-x / 2, -y / 2);
    shape.lineTo(0, y / 2);

    const extrudeSettings = {
      steps: 2,
      depth: z,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelSegments: 0,
    };

    this.geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    this.material = new THREE.MeshBasicMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}
