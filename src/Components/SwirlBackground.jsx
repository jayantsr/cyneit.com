// SwirlBackground.jsx
import React, { useEffect } from "react";
import { createNoise3D } from "simplex-noise"; // Update the import to use the createNoise3D function
import "./base.css"; // Include your styles

const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 220;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
const backgroundColor = "hsla(260,40%,5%,1)";

function SwirlBackground() {
  let canvas = {
    a: null,
    b: null,
  };
  let ctx = {
    a: null,
    b: null,
  };
  let center = [];
  let tick;
  let simplex;
  let particleProps;

  useEffect(() => {
    setup();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function setup() {
    createCanvas();
    resize();
    initParticles();
    draw();
  }

  function createCanvas() {
    const container = document.querySelector(".canvas-container");
    canvas.a = document.createElement("canvas");
    canvas.b = document.createElement("canvas");

    canvas.b.style.position = "absolute";
    canvas.b.style.top = "0";
    canvas.b.style.left = "0";
    canvas.b.style.width = "100%";
    canvas.b.style.height = "100%";

    container.appendChild(canvas.b);
    ctx.a = canvas.a.getContext("2d");
    ctx.b = canvas.b.getContext("2d");
    center = [];
  }

  function resize() {
    const { innerWidth, innerHeight } = window;

    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;

    ctx.a.drawImage(canvas.b, 0, 0);

    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);

    center[0] = 0.5 * canvas.a.width;
    center[1] = 0.5 * canvas.a.height;
  }

  function initParticles() {
    tick = 0;
    simplex = createNoise3D(); // Create a 3D noise function
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }

  function initParticle(i) {
    const x = Math.random() * canvas.a.width;
    const y = center[1] + Math.random() * rangeY - rangeY / 2;
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + Math.random() * rangeTTL;
    const speed = baseSpeed + Math.random() * rangeSpeed;
    const radius = baseRadius + Math.random() * rangeRadius;
    const hue = baseHue + Math.random() * rangeHue;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  }

  function drawParticles() {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i);
    }
  }

  function updateParticle(i) {
    const n =
      simplex(
        particleProps[i] * xOff,
        particleProps[i + 1] * yOff,
        tick * zOff
      ) *
      noiseSteps *
      Math.PI *
      2; // TAU is roughly 2 * PI
    const vx = (Math.cos(n) + particleProps[i + 2]) * 0.5; // Updated for lerp
    const vy = (Math.sin(n) + particleProps[i + 3]) * 0.5;
    const life = particleProps[i + 4] + 1;
    const ttl = particleProps[i + 5];
    const speed = particleProps[i + 6];
    const x2 = particleProps[i] + vx * speed;
    const y2 = particleProps[i + 1] + vy * speed;
    const radius = particleProps[i + 7];
    const hue = particleProps[i + 8];

    drawParticle(
      particleProps[i],
      particleProps[i + 1],
      x2,
      y2,
      life,
      ttl,
      radius,
      hue
    );

    particleProps[i] = x2;
    particleProps[i + 1] = y2;
    particleProps[i + 2] = vx;
    particleProps[i + 3] = vy;
    particleProps[i + 4] = life;

    (checkBounds(x2, y2) || life > ttl) && initParticle(i);
  }

  function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
    ctx.a.save();
    ctx.a.lineCap = "round";
    ctx.a.lineWidth = radius;
    ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.a.beginPath();
    ctx.a.moveTo(x, y);
    ctx.a.lineTo(x2, y2);
    ctx.a.stroke();
    ctx.a.closePath();
    ctx.a.restore();
  }

  function checkBounds(x, y) {
    return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0;
  }

  function renderGlow() {
    ctx.b.save();
    ctx.b.filter = "blur(8px) brightness(200%)";
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();

    ctx.b.save();
    ctx.b.filter = "blur(4px) brightness(200%)";
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
  }

  function renderToScreen() {
    ctx.b.save();
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
  }

  function draw() {
    tick++;

    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

    drawParticles();
    renderGlow();
    renderToScreen();

    window.requestAnimationFrame(draw);
  }

  function fadeInOut(life, ttl) {
    return life < ttl / 2 ? life / (ttl / 2) : 1 - (life - ttl / 2) / (ttl / 2);
  }

  return (
    <div
      className="canvas-container"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {/* Canvas will be appended here */}
    </div>
  );
}

export default SwirlBackground;
