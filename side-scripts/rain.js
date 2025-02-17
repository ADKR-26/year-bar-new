const canvas = document.getElementById("stormCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Raindrop {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = -10;
    this.speed = Math.random() * 5 + 7;
    this.length = Math.random() * 20 + 10;
    this.thickness = Math.random() * 1.5 + 0.5;
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(174, 194, 224, 0.5)";
    ctx.lineWidth = this.thickness;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 1, this.y + this.length);
    ctx.stroke();
  }
}

class Lightning {
  constructor(x) {
    this.startX = x;
    this.segments = [];
    this.createTime = Date.now();
    this.generatePath();
  }

  generatePath() {
    let x = this.startX;
    let y = 0;

    while (y < canvas.height) {
      const newX = x + (Math.random() - 0.5) * 100;
      const newY = y + Math.random() * 50;
      this.segments.push({
        x1: x,
        y1: y,
        x2: newX,
        y2: newY,
      });
      x = newX;
      y = newY;
    }
  }

  draw() {
    const age = Date.now() - this.createTime;
    if (age < 100) {
      const opacity = 1 - age / 100;

      // Main strike
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 2;
      this.segments.forEach((segment) => {
        ctx.beginPath();
        ctx.moveTo(segment.x1, segment.y1);
        ctx.lineTo(segment.x2, segment.y2);
        ctx.stroke();
      });

      // Glow effect
      ctx.strokeStyle = `rgba(155, 155, 255, ${opacity * 0.5})`;
      ctx.lineWidth = 6;
      this.segments.forEach((segment) => {
        ctx.beginPath();
        ctx.moveTo(segment.x1, segment.y1);
        ctx.lineTo(segment.x2, segment.y2);
        ctx.stroke();
      });
    }
  }
}

// Create raindrops
const raindrops = [];
const raindropCount = 200;
for (let i = 0; i < raindropCount; i++) {
  raindrops.push(new Raindrop());
}

// Store lightning strikes
const lightnings = [];

// Animation function
function animate() {
  // Create semi-transparent background for trail effect
  ctx.fillStyle = "rgba(10, 10, 21, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw raindrops
  raindrops.forEach((drop) => {
    drop.update();
    drop.draw();
  });

  // Draw active lightning strikes
  lightnings.forEach((lightning, index) => {
    lightning.draw();
    if (Date.now() - lightning.createTime > 100) {
      lightnings.splice(index, 1);
    }
  });

  // Random lightning
  if (Math.random() < 0.001) {
    createLightning();
  }

  requestAnimationFrame(animate);
}

function createLightning() {
  const x = Math.random() * canvas.width;
  lightnings.push(new Lightning(x));
}

// Click handler
canvas.addEventListener("click", (e) => {
  lightnings.push(new Lightning(e.clientX));
});

// Touch handler for mobile
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  lightnings.push(new Lightning(e.touches[0].clientX));
});

// Window resize handler
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
// animate();
function isWinter() {
  const month = new Date().getMonth() + 1; // getMonth() returns 0-11
  return month >= 5 && month <= 9; // September, October, November
}

export function showRain() {
  if (!isWinter()) {
    // document.querySelector("body").style.marginTop = "12%";
    document.querySelector("canvas").style.display = "none";
} else {
    animate();
    document.querySelector(".content").className = "main-content";
    document.querySelector("body").style.marginTop = "-100px";
  }
}

// export { animate };
