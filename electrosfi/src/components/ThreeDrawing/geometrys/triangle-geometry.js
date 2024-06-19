import * as THREE from "three";
import Geometry from "./geometry";

export default class TriangleGeometry extends Geometry{
  constructor(color, dimensions, positions) {
    const shape = "triangle"
    const { x, y, z } = dimensions;

    const shapeGeometry = new THREE.Shape();
    shapeGeometry.moveTo(0, y / 2);
    shapeGeometry.lineTo(x / 2, -y / 2);
    shapeGeometry.lineTo(-x / 2, -y / 2);
    shapeGeometry.lineTo(0, y / 2);

    const extrudeSettings = {
      steps: 2,
      depth: z,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelSegments: 0,
    };

    const geometry = new THREE.ExtrudeGeometry(shapeGeometry, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const mesh = new THREE.Mesh(geometry, material);
    
    super(geometry, material, mesh, shape);
    this.setPositions(positions.x, positions.y, positions.z);
  }
}
