export class Engine {
  constructor() {
    this.isRunning = false;

    this.lastTime = 0;

    this.updateCallback = null;
  }

  start(updateCallback) {
    this.isRunning = true;

    this.updateCallback = updateCallback;

    this.animate();
  }

  animate = (currentTime = 0) => {
    if (!this.isRunning) return;

    const deltaTime = (currentTime - this.lastTime) / 1000 || 0.016;

    this.lastTime = currentTime;

    if (this.updateCallback) {
      this.updateCallback(deltaTime);
    }

    requestAnimationFrame(this.animate);
  };

  stop() {
    this.isRunning = false;
  }
}
