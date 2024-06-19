import * as THREE from "three";
import Geometry from "./geometry";

export default class BoxGeometry extends Geometry{
  constructor(color, dimensions, positions) {
    const shape = "block"
    const { x, y, z } = dimensions;
    
    const geometry = new THREE.BoxGeometry(x, y, z,2,3,4);
    // const { x, y, z } = positions;
    const material = new THREE.MeshBasicMaterial({ color: color });
    const mesh = new THREE.Mesh(geometry, material);
    
    super(geometry, material, mesh, shape);
    this.setPositions(positions.x, positions.y, positions.z);
  }


}
