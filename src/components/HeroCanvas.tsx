"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context: CanvasRenderingContext2D = ctx;

    let W = 0;
    let H = 0;
    let animationId = 0;

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      life = 1;
      decay = 0;
      size = 1;
      color = "#06B6D4";

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = H + 10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = -(Math.random() * 1.2 + 0.4);
        this.life = 1;
        this.decay = Math.random() * 0.004 + 0.002;
        this.size = Math.random() * 2.5 + 0.5;
        const r = Math.random();
        this.color = r < 0.45 ? "#06B6D4" : r < 0.75 ? "#818CF8" : "#A78BFA";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -10) this.reset();
      }

      draw() {
        context.save();
        context.globalAlpha = this.life * 0.6;
        context.fillStyle = this.color;
        context.shadowBlur = 8;
        context.shadowColor = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      W = canvas.width = parent.offsetWidth;
      H = canvas.height = parent.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      const p = new Particle();
      p.y = Math.random() * H;
      particles.push(p);
    }

    function loop() {
      context.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
