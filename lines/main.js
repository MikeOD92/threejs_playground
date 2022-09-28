// import * as THREE from "three";
import { GLTFLoader } from "./GLTFLoader.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

///// Manjaro logo drawing lines //////////////
const material = new THREE.LineBasicMaterial({
  color: "rgb(0, 255, 255)",
});

const pointsLowLeft = [];

pointsLowLeft.push(new THREE.Vector2(0, -10));
pointsLowLeft.push(new THREE.Vector2(0, 10));
pointsLowLeft.push(new THREE.Vector2(10, 10));
pointsLowLeft.push(new THREE.Vector2(10, -10));
pointsLowLeft.push(new THREE.Vector2(0, -10));

const LLgeometry = new THREE.BufferGeometry().setFromPoints(pointsLowLeft);

const lowLeft = new THREE.Line(LLgeometry, material);

scene.add(lowLeft);

const pointsUpLeft = [];

pointsUpLeft.push(new THREE.Vector2(0, 12));
pointsUpLeft.push(new THREE.Vector2(0, 26));
pointsUpLeft.push(new THREE.Vector2(24, 26));
pointsUpLeft.push(new THREE.Vector2(24, 18));
pointsUpLeft.push(new THREE.Vector2(10, 18));
pointsUpLeft.push(new THREE.Vector2(10, 12));
pointsUpLeft.push(new THREE.Vector2(0, 12));

const ULgeometry = new THREE.BufferGeometry().setFromPoints(pointsUpLeft);

const upLeft = new THREE.Line(ULgeometry, material);

scene.add(upLeft);

const pointsCenter = [];

pointsCenter.push(new THREE.Vector2(12, -10));
pointsCenter.push(new THREE.Vector2(12, 16));
pointsCenter.push(new THREE.Vector2(24, 16));
pointsCenter.push(new THREE.Vector2(24, -10));
pointsCenter.push(new THREE.Vector2(12, -10));

const midGeo = new THREE.BufferGeometry().setFromPoints(pointsCenter);
const mid = new THREE.Line(midGeo, material);

scene.add(mid);

const pointsRight = [];

pointsRight.push(new THREE.Vector2(26, -10));
pointsRight.push(new THREE.Vector2(26, 26));
pointsRight.push(new THREE.Vector2(36, 26));
pointsRight.push(new THREE.Vector2(36, -10));
pointsRight.push(new THREE.Vector2(26, -10));

const rightGeo = new THREE.BufferGeometry().setFromPoints(pointsRight);
const right = new THREE.Line(rightGeo, material);

scene.add(right);
/// imported 3d Text

let modelLoader = new GLTFLoader();

let txt;

modelLoader.load("./manjrotxt2.glb", function (gltf) {
  txt = gltf.scene;
  txt.position.z = 90;
  txt.position.y = 0;
  txt.position.x = -4;
  scene.add(txt);
});

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 10);
scene.add(light);

// scene.background = new THREE.Color(0xffffff);
/////////////// render and animation
let t = 1;

const render = () => {
  requestAnimationFrame(render);
  //   right.rotate.y += 0.01;
  right.rotation.y += 0.01 * Math.sin(t * 2);
  mid.rotation.y += 0.01 * Math.sin(t * 2);
  lowLeft.rotation.y += 0.01 * Math.sin(t * 2);
  upLeft.rotation.y += 0.01 * Math.sin(t * 2);
  txt.rotation.y += 0.01 * Math.sin(t * 2);
  renderer.render(scene, camera);
};
render();
