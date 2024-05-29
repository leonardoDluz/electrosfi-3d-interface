import CylinderGeometry from "./cylinder-geometry";
import ConeGeometry from "./cone-geometry";
import CubeGeometry from "./cube-geometry";
import LozangleGeometry from "./lozangle-geometry";
import PyramidGeometry from "./pyramid-geometry";
import RingGeometry from "./ring-geometry";
import SphereGeometry from "./sphere-geometry";
import TrapezeGeometry from "./trapeze-geometry";
import TriangleGeometry from "./triangle-geometry";

const geometrys = {
  cone: ConeGeometry,
  cube: CubeGeometry,
  lozangle: LozangleGeometry,
  pyramid: PyramidGeometry,
  ring: RingGeometry,
  sphere: SphereGeometry,
  trapeze: TrapezeGeometry,
  triangle: TriangleGeometry,
  cylinder: CylinderGeometry,
};

export default function getGeometrys(geometryName, x, y, z, color) {
  return new geometrys[geometryName](color, x, y, z);
}
