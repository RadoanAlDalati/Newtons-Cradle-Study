import * as THREE from "three";

export class SceneManager {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );

    this.camera.position.set(0, 5, 12);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(10, 20, 15);

    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    // Resize
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
