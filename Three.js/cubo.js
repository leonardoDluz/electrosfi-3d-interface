import * as THREE from 'three';
//novas funções importadas
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

const canvasContainer = document.getElementById('canvas-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

var cameraSpeed = 0.1;
var size = 1;

const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
canvasContainer.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(size, size, size);
var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

cube.position.set(0, 0, 0);

var edges = new THREE.EdgesGeometry(geometry);
var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
var wireframe = new THREE.LineSegments(edges, lineMaterial);
cube.add(wireframe);

function createAxesHelper() {
    var axes = new THREE.AxesHelper(10);
    cube.add(axes);
}

createAxesHelper();

//novas alterações:
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.attach(cube);
transformControls.setMode("scale");
scene.add(transformControls);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 0, 1); 
camera.add(directionalLight);
scene.add(camera);
//terminam aqui

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onKeyDown(event) {
    switch (event.key) {
        case "ArrowUp":
            camera.position.y -= cameraSpeed;
            break;
        case "ArrowDown":
            camera.position.y += cameraSpeed;
            break;
        case "ArrowLeft":
            camera.position.x += cameraSpeed;
            break;
        case "ArrowRight":
            camera.position.x -= cameraSpeed;
            break;
    }
}

var cubeScale = 1;

function handleZoom(event) {
    const delta = event.deltaY * 0.009;
    const cubeSize = cube.geometry.parameters.width * cube.scale.x;
    const zoomFactor = 0.1;
    camera.position.z += delta * cubeSize * zoomFactor;
}

function changeCubeSize(scale) {
    cube.scale.set(scale, scale, scale);
    updateWireframe();
}

//novas alterações
function updateWireframe() {
    cube.remove(wireframe);
    var newEdges = new THREE.EdgesGeometry(cube.geometry);
    wireframe = new THREE.LineSegments(newEdges, lineMaterial);
    cube.add(wireframe);
}
//terminam aqui

/* velhas funções
var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};


function onMouseDown(event) {
    isDragging = true;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
}

function onMouseMove(event) {
    if (isDragging) {
        var deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        trapeze.rotation.y += deltaMove.x * 0.01;
        trapeze.rotation.x += deltaMove.y * 0.01;

        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }
}

function onMouseUp(event) {
    isDragging = false;
}
*/
document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    let scaleStep = 0.1;
    scaleStep /= window.devicePixelRatio;
    
    if (keyCode === 187 || keyCode === 107) { 
        changeCubeSize(cube.scale.x + scaleStep);
    } else if (keyCode === 189 || keyCode === 109) {  
        if (cube.scale.x - scaleStep > 0) { 
            changeCubeSize(cube.scale.x - scaleStep);
        } 
    }
});

//nova função de controle de câmera
const controls = new OrbitControls(camera, renderer.domElement);

document.addEventListener('wheel', handleZoom);
document.addEventListener('keydown', onKeyDown, false);
/*
renderer.domElement.addEventListener('mousedown', onMouseDown, false);
renderer.domElement.addEventListener('mousemove', onMouseMove, false);
renderer.domElement.addEventListener('mouseup', onMouseUp, false);
*/
animate();