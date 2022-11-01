<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
const { x: mouseX, y: mouseY } = useMouse();
let canvas;
let ctx;

onMounted(() => {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let centerx = window.innerWidth / 2;
  let centery = window.innerHeight / 2;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    centerx = window.innerWidth / 2;
    centery = window.innerHeight / 2;
  });

  class Point {
    constructor(
      private x,
      private y,
      private pos,
      private xRadius,
      private yRadius,
      private clockwise = true
    ) {}
    draw = () => {
      ctx.strokeStyle = "hsla(180, 8%, 68%, 0.303)";
      ctx.fillStyle = this.clockwise
        ? "hsla(358, 72%, 58%, 0.717)"
        : "hsla(191, 39%, 75%, 0.743)";

      const drawLine = (width = 0, color) => {
        ctx.beginPath();
        ctx.moveTo(this.x - width / 2, this.y + width / 2);
        ctx.lineTo(this.x - width / 2 + 300, this.y - width / 2 - 1000);
        ctx.lineTo(this.x + width / 2 + 300, this.y - width / 2 - 1000);
        ctx.lineTo(this.x + width / 2, this.y - width / 2);
        ctx.closePath();
        if (ctx.isPointInPath(mouseX.value, mouseY.value) && color) {
          ctx.strokeStyle = color;
        }
      };

      const centerFocus = this.clockwise
        ? "hsla(191, 39%, 75%, 0.743)"
        : "hsla(358, 72%, 58%, 0.717)";

      drawLine(250, centerFocus);

      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.moveTo(this.x, this.y);
      const offset = this.clockwise ? 400 : -400;
      ctx.lineTo(this.x + offset, this.y - 2000);
      ctx.stroke();
      ctx.closePath();
      this.update();
    };
    update = () => {
      let offset = 10;

      if (!this.clockwise) {
        offset = -10;
      }
      this.pos = (this.pos + offset) % 62000;

      this.y = this.yRadius * Math.sin(0.0001 * this.pos + offset) + centery;
      this.x = this.xRadius * Math.cos(0.0001 * this.pos + offset) + centerx;
    };
  }

  const largerPlatform = [];
  const smallerPlatform = [];
  for (let i = 0; i < 62000; i++) {
    if (i % 2000 !== 0) continue;
    let x = 800 * Math.cos(0.0001 * i) + 400;
    let y = 100 * Math.sin(0.0001 * i) + 500;
    largerPlatform.push(new Point(x, y, i, 500, 100));

    x = 400 * Math.cos(1 * i) + 400;
    y = 50 * Math.sin(1 * i) + 500;
    smallerPlatform.push(new Point(x, y, i, 250, 50, false));
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    largerPlatform.forEach((line) => {
      line.draw();
    });

    smallerPlatform.forEach((line) => {
      line.draw();
    });
  }
  animate();
});
</script>

<style>
canvas {
  background: linear-gradient(45deg, #1f262f 0% 45%, #2E3956);
}
</style>
