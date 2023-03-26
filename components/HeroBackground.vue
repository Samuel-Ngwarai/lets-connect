<template>
  <div class="h-screen bg-homebackground">
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <BaseLoadingAnimation></BaseLoadingAnimation>
    </div>
    <canvas id="background-canvas" class="bg-homebackground"></canvas>
  </div>
</template>

<script setup lang="ts">
const { x: mouseX, y: mouseY } = useMouse();
const loading = ref(true);

onMounted(() => {
  const canvas = document.getElementById("background-canvas") as HTMLCanvasElement;
  if (!canvas) {
    // skip loading animamtion if canvas not found
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let windowWidth = canvas.width;
  let windowHeight = canvas.height;
  let centerx = window.innerWidth / 2;
  let centery = window.innerHeight / 2;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    centerx = window.innerWidth / 2;
    centery = window.innerHeight / 2;

    windowWidth = canvas.width;
    windowHeight = canvas.height;
  });

  class Point {
    constructor(
      private x: number,
      private y: number,
      private pos: number,
      private xRadius: number,
      private yRadius: number,
      private clockwise = true
    ) {}
    draw = () => {
      if (!ctx) return;

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
      this.update();
    };
    update = () => {
      let offset = 15;

      if (!this.clockwise) {
        offset = -10;
      }
      this.pos = (this.pos + offset) % 62800;

      this.y = this.yRadius * Math.sin(0.0001 * this.pos + offset) + centery;
      this.x = this.xRadius * Math.cos(0.0001 * this.pos + offset) + centerx;
    };
  }

  const largerPlatform: Point[] = [];
  const smallerPlatform: Point[] = [];
  for (let i = 0; i < 62000; i++) {
    if (i % 2000 !== 0) continue;
    let largeCircleX = windowWidth / 3.5;
    let largeCircleY = windowHeight / 15;
    let x = largeCircleX * Math.cos(0.0001 * i) + centerx;
    let y = largeCircleY * Math.sin(0.0001 * i) + centery;
    largerPlatform.push(new Point(x, y, i, largeCircleX, largeCircleY));

    x = largeCircleX / 2 * Math.cos(1 * i) + centerx;
    y = largeCircleY / 2 * Math.sin(1 * i) + centery;
    smallerPlatform.push(new Point(x, y, i, largeCircleX / 2, largeCircleY / 2, false));
  }

  function animate() {
    if (!ctx) return;

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    largerPlatform.forEach((line) => {
      line.draw();
      ctx.stroke();
    });

    smallerPlatform.forEach((line) => {
      line.draw();
      ctx.stroke();
    });
  }

  setTimeout(function(){
    animate();
    loading.value = false;
  }, 1200);
});
</script>
