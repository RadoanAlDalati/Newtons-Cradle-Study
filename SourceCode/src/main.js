import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
// هنا سنستورد المكونات لاحقاً
// import { createCradle } from './components/Cradle.js';
// import { updatePhysics } from './physics/Engine.js';

// إعداد المشهد الأساسي
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// إضافة إضاءة بسيطة
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040)); // إضاءة محيطة

camera.position.z = 10;

// حلقة التحريك (Animation Loop)
function animate() {
  requestAnimationFrame(animate);

  // هنا سيتم تحديث الفيزياء ورسم المشهد
  // updatePhysics();

  renderer.render(scene, camera);
}

// التعامل مع تغيير حجم النافذة
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
