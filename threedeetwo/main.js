const WIDTH = window.innerWidth;
const HEIGHT = 250;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
document.body.append(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  WIDTH / -10,
  WIDTH / 10,
  HEIGHT / 10,
  HEIGHT / -10,
  1,
  1000
);
camera.position.z = 50;
scene.add(camera);

const ballGeometry = new THREE.SphereGeometry(20, 20, 20);
const loader = new THREE.TextureLoader();

const material = new THREE.MeshBasicMaterial({
  map: loader.load("https://i.imgur.com/BxhOysv.jpg"),
});
const ballarr = [];
// const ball = new THREE.Mesh(ballGeometry, material);
const ball2 = new THREE.Mesh(ballGeometry, material);
const ball3 = new THREE.Mesh(ballGeometry, material);
// ballarr.push(ball);
ballarr.push(ball2);
ballarr.push(ball3);

// scene.add(ball);
scene.add(ball2);
scene.add(ball3);

ball2.position.x = 70;
ball3.position.x = -70;

// const coneGeo = new THREE.ConeGeometry(8, 18, 16);
// const coneMaterial = new THREE.MeshBasicMaterial({
//   map: loader.load("https://i.imgur.com/iUJ1hzD.jpg"),
// });

// const cone = new THREE.Mesh(coneGeo, coneMaterial);

// scene.add(cone);
// cone.position.x = 120;

let t = 1;
function render() {
  requestAnimationFrame(render);
  ballarr.forEach((b) => {
    b.rotation.x += 0.01;
    b.rotation.y += 0.01;
    b.rotation.z += 0.02;
  });
  //   cone.rotation.x += 0.02;
  //   cone.rotation.y += 0.02;

  renderer.render(scene, camera);
}
render();
