import * as THREE from "three";

export default class InteractiveGeometry {
  cameraSpeed = 0.1;
  isDragging = false;
  previousMousePosition = {
    x: 0,
    y: 0,
  };

  constructor(
    canvasContainer,
    scene,
    sceneBackground,
    perspectiveCamera,
    webGLRenderer,
    geometry,
    x, y, z, geometryName, color
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.geometryName = geometryName;
    this.color = color;

    this.canvasContainer = canvasContainer;

    this.scene = scene;
    scene.background = sceneBackground;

    this.camera = perspectiveCamera;

    this.renderer = webGLRenderer;
    this.renderer.setSize(
      canvasContainer.offsetWidth,
      canvasContainer.offsetHeight
    );
    canvasContainer.appendChild(this.renderer.domElement);

    this.geometry = geometry.mesh;

    this.scene.add(this.geometry);

    this.geometry.position.set(0, 0, 0);

    this.camera.position.z = this.setCameraPosition(this.x, this.y, this.z);
    this.createAxesHelper();

    this.animate = this.animate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  getCreationData() {
    return {
      geometryName: this.geometryName,
      x: this.x,
      y: this.y,
      z: this.z,
      color: this.color
    }
  }
  
  setCameraPosition(x, y, z) {
    const biggerNumber = Math.max(x, y, z);
    if (biggerNumber >= 5) {
      return biggerNumber + 1;
    } 
    return 5;
  }

  createAxesHelper() {
    const axes = new THREE.AxesHelper(10);
    this.geometry.add(axes);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  onKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        this.camera.position.y -= this.cameraSpeed;
        break;
      case "ArrowDown":
        this.camera.position.y += this.cameraSpeed;
        break;
      case "ArrowLeft":
        this.camera.position.x += this.cameraSpeed;
        break;
      case "ArrowRight":
        this.camera.position.x -= this.cameraSpeed;
        break;
    }
  }

  onMouseDown(event) {
    this.isDragging = true;
    this.previousMousePosition.x = event.clientX;
    this.previousMousePosition.y = event.clientY;
  }

  onMouseMove(event) {
    event.preventDefault();
    if (this.isDragging) {
      let deltaMove = {
        x: event.clientX - this.previousMousePosition.x,
        y: event.clientY - this.previousMousePosition.y,
      };

      this.geometry.rotation.y += deltaMove.x * 0.01;
      this.geometry.rotation.x += deltaMove.y * 0.01;

      this.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    }
  }

  onMouseUp() {
    this.isDragging = false;
  }

  handleZoom(event) {
    const delta = event.deltaY * 0.009;
    const cubeSize =
      this.geometry.geometry.parameters.width * this.geometry.scale.x;
    const zoomFactor = 0.1;
    this.camera.position.z += delta * cubeSize * zoomFactor;
  }

  changeSize(scale) {
    this.geometry.scale.set(scale, scale, scale);
  }

  keyDown(event) {
    const keyCode = event.keyCode;
    let scaleStep = 0.1;
    scaleStep /= window.devicePixelRatio;

    if (keyCode === 187 || keyCode === 107) {
      this.changeSize(this.geometry.scale.x + scaleStep);
    } else if (keyCode === 189 || keyCode === 109) {
      if (this.geometry.scale.x - scaleStep > 0) {
        this.changeSize(this.geometry.scale.x - scaleStep);
      }
    }
  }

  onMouseWheel(event) {
    let delta = event.deltaY > 0 ? 1 : -1;
    let distance = this.camera.position.distanceTo(this.geometry.position);
    let zoomSpeed = distance * 0.9;
    distance -= delta * this.cameraSpeed * zoomSpeed;
    distance = Math.max(distance, this.size);
    let direction = this.camera.position
      .clone()
      .sub(this.geometry.position)
      .normalize();
    this.camera.position
      .copy(this.geometry.position)
      .add(direction.multiplyScalar(distance));
    this.camera.lookAt(this.geometry.position);
  }
}
