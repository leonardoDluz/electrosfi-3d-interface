import getGeometrys from "./geometrys";
import InteractiveGeometry from "./interactive-geometry";
import * as THREE from "three";

export default class GeometryFactory {
  createGeometry(geometryName, x, y, z, color, canvas) {
    const scene = new THREE.Scene();
    const sceneBackground = (scene.background = new THREE.Color(0xffffff));

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.offsetWidth / canvas.offsetHeight
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    canvas.appendChild(renderer.domElement);

    const interactiveGeometry = new InteractiveGeometry(
      canvas,
      scene,
      sceneBackground,
      camera,
      renderer,
      getGeometrys(geometryName, x, y, z, color),
      x, y, z, geometryName, color
    );
    return interactiveGeometry;
  }
}
