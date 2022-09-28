/// first we grab the window dimensions
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// create webGL renderer set size with dimentsion and set background color
// append domElement to document body
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.append(renderer.domElement);

// define our scene, everything rendered is attached to this.
const scene = new THREE.Scene();

// where we view or scene from.
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
// z appears to be depth we zoom out the camera with this line
camera.position.z = 50;

// everything to render must be added to scene.
scene.add(camera);

/* create objects to render in out scene in three steps
    1. define geometry 
    2. define material
    3. create renderable object by meshing geometry and material
*/
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);

const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });

const cube = new THREE.Mesh(boxGeometry, basicMaterial);

// rotate and move
cube.rotation.set(0.4, 0.2, 0);
cube.position.x = -25; // x is left to right
// add to scene
scene.add(cube);
/// another example
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);

scene.add(torus);
torus.rotation.set(0.5, 0, 0);
// torus.position.y = 15;
// torus.position.x = -25;

////
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const loader = new THREE.TextureLoader();
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

/// adding lights to the scene
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);

///////////

// helper var
let t = 0;
// render function - creates infinite loop looking for next frame by passing it's self to a callback function
function render() {
  requestAnimationFrame(render);
  // animate by affecting object position values inside of the render loop
  cube.rotation.y += 0.01;
  //   torus.rotation.x += 0.01;
  dodecahedron.rotation.z += 0.01;

  cube.position.y += 0.5 * Math.sin(t * 2);
  dodecahedron.position.y = -7 * Math.sin(t * 2);

  t += 0.01;
  torus.scale.y = Math.abs(Math.sin(t));

  renderer.render(scene, camera);
}
render();
