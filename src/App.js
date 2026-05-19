import * as THREE from "three";

import { Engine } from "./core/Engine.js";

import { SceneManager } from "./rendering/SceneManager.js";

export class App {
  constructor() {
    this.engine = null;

    this.sceneManager = null;

    this.testBall = null;
  }

  async init() {
    console.log("🚀 بدء المشروع");

    // Engine
    this.engine = new Engine();

    // Scene Manager
    this.sceneManager = new SceneManager();

    this.sceneManager.init();

    // Test Sphere
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);

    const material = new THREE.MeshPhongMaterial({
      color: 0x00aaff,
    });

    this.testBall = new THREE.Mesh(geometry, material);

    this.sceneManager.scene.add(this.testBall);

    // Start Loop
    this.engine.start((deltaTime) => {
      this.update(deltaTime);
    });

    console.log("✅ المشروع يعمل");
  }

  update(deltaTime) {
    this.testBall.rotation.y += deltaTime * 0.8;

    this.testBall.position.y = Math.sin(Date.now() * 0.002) * 0.3;

    this.sceneManager.render();
  }
}
