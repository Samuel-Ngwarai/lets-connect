<template>
  <div id="about-section" class="bg-skyblue md:grid lg:grid-cols-2 pt-20 px-10">
    <div class="flex items-center justify-center">
      <div class="h-[400px] w-[400px]">
        <canvas id="about-section-canvas"></canvas>
      </div>
    </div>
    <div>
      <p class="text-6xl text-black">About Me<span class="text-red"></span></p>
      <div class="text-xl py-5">
        <p>
          I enjoy building and being part of impactful solutions. The mission I am currently
          contributing to is that of <BasicLink href="https://www.share-now.com/">ShareNow</BasicLink>,
          making our cities more liveable by making car-sharing a viable solution for more
          people and businesses. 
        </p>
        <br>
        <p>
          My previous experiences include being part of a fast-growing <BasicLink href="https://connect.finleap.com/">fintech startup</BasicLink>
          and a <BasicLink href="https://www.ibm.com/">large corporation</BasicLink>.
        </p>
        <br>
        <p>
          My story has but just begun, expect even more interesting chapters up ahead!
        </p>
      </div>
     
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const canvas = document.getElementById("about-section-canvas") as HTMLCanvasElement;
  if (!canvas) {    
    // skip loading animamtion if canvas not found
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  canvas.width = 400;
  canvas.height = 400;

  let centerX = 200
  let centerY = 200;

  console.log('got here');

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
        : "black";

      // Draw multiple points in a circle
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.moveTo(this.x, this.y);
      this.update();
    };

    // Move the points in a cicular motion
    update = () => {
      let offset = 20;

      if (!this.clockwise) {
        offset = -10;
      }
      
      this.pos = (this.pos + offset) % 62800;

      this.y = this.yRadius * Math.sin(0.0001 * this.pos + offset) + centerY;
      this.x = this.xRadius * Math.cos(0.0001 * this.pos + offset) + centerX;
    };
  }

  const largerCircle: Point[] = [];
  const smallerCircle: Point[] = [];

  // Skip every 2000 possible points in a circle made up of
  // 62000 points
  for (let i = 0; i < 62000; i++) {
    if (i % 2000 !== 0) continue;
    let largeCircleRadius = 190;
    let x = largeCircleRadius * Math.cos(0.0005 * i) + centerX;
    let y = largeCircleRadius * Math.sin(0.0005 * i) + centerY;
    largerCircle.push(new Point(x, y, i, largeCircleRadius, largeCircleRadius));

    x = largeCircleRadius / 2 * Math.cos(1 * i) + centerX;
    y = largeCircleRadius / 2 * Math.sin(1 * i) + centerY;
    smallerCircle.push(new Point(x, y, i, largeCircleRadius / 1.5, largeCircleRadius / 1.5, false));
  }

  function animate() {
    if (!ctx) return;

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear previous points on each frame
    largerCircle.forEach((line) => {
      line.draw();
      ctx.stroke();
    });

    smallerCircle.forEach((line) => {
      line.draw();
      ctx.stroke();
    });
  }

  setTimeout(function(){
    animate();
  }, 1200);
});
</script>