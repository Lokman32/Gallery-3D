import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 15, 90);

const axeHelp = new THREE.AxesHelper(50);
// scene.add(axeHelp);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
  side: THREE.DoubleSide,
});

const r = 30;

const cercle = new THREE.RingGeometry(r);
const help = new THREE.Mesh(cercle, material);
// scene.add(help);
help.rotation.x = Math.PI * 0.5;

const ide = new THREE.PlaneGeometry(r * 0.795, r * 0.795, r, 1);
const angles = [
  { angl: 22.5, img: "imgs/img1.avif" },
  { angl: 67.5, img: "imgs/img2.avif" },
  { angl: 112.5, img: "imgs/img3.avif" },
  { angl: 157.5, img: "imgs/img4.avif" },
  { angl: 202.5, img: "imgs/img5.avif" },
  { angl: 247.5, img: "imgs/img6.avif" },
  { angl: 292.5, img: "imgs/img7.avif" },
  { angl: 337.5, img: "imgs/img8.avif" },
];
const group = new THREE.Group();
const textureLoader = new THREE.TextureLoader();

angles.forEach((ele) => {
  const texture = textureLoader.load(ele.img);
  const imgmatrl = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const pln1 = new THREE.Mesh(ide, imgmatrl);
  const x1 = r * Math.sin((Math.PI * ele.angl) / 180);
  const y1 = 0;
  const z1 = r * Math.cos((Math.PI * ele.angl) / 180);
  pln1.position.set(x1, y1, z1);
  pln1.lookAt(0, 0, 0);
  group.add(pln1);

  const vertices = pln1.geometry.attributes.position;

  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i);
    const z = -Math.sqrt(Math.max(0, r * r - x * x));
    vertices.setZ(i, z);
  }
  vertices.needsUpdate = true;
  pln1.geometry.computeBoundingBox();
  pln1.geometry.center();
});

scene.add(group);
group.position.y = 0;
group.scale.set(1.3,0.8,1.3)
group.rotation.x = -Math.PI * .15

const controls = new OrbitControls(camera, renderer.domElement); //DRAG CONTROLLER
controls.autoRotate = true;
controls.enableZoom = false
// console.log(controls);


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let rotationSpeed = 0.005;
let rotationOffset = 0;

window.addEventListener("wheel", (event) => {
  rotationOffset += event.deltaY * rotationSpeed;

  group.rotation.y = rotationOffset;
});

const renderLoop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
