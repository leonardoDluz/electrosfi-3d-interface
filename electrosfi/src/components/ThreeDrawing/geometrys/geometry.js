//import * as THREE from "three";
export default class Geometry {
  constructor(geometry, material, mesh, shape) {
    this.geometry = geometry;
    this.material = material;
    this.mesh = mesh;
    this.shape = shape;
    this.id = mesh.uuid;
    // this.edges = new THREE.EdgesGeometry(geometry);
    // this.lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    // this.wireframe = new THREE.LineSegments(this.edges, this.lineMaterial);
    // this.geometry.add(this.wireframe);
  }

  setDims(x, y, z) {
    this.mesh.scale.x = x;
    this.mesh.scale.y = y;
    this.mesh.scale.z = z;
  }

  setPositions(x, y, z) {
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
  }

  setColor(color) {
    this.mesh.material.color.set(color);
  }
}