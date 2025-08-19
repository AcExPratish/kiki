import React from "react";
import type { TStar } from "../types";

const Stars: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf: number | null = null;

    const STAR_DENSITY = 0.0002;
    let stars: TStar[] = [];

    const newStar = (): TStar => {
      const z = Math.random() * 1 + 0.2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        speed: (0.4 + Math.random() * 0.8) * (1.4 - z),
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor(width * height * STAR_DENSITY);
      stars = new Array(count).fill(0).map(() => newStar());
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.8)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.y += s.speed;
        s.x += Math.sin((s.y + i) * 0.002) * 0.2;

        if (s.y > height + 5) {
          stars[i] = { ...newStar(), y: -5 };
          continue;
        }

        // Slightly smaller stars
        const size = Math.max(1, Math.round((1.6 - s.z) * 1.5));

        // Reduced brightness (opacity range 0.2–0.6 instead of 0.6–1.0)
        const alpha = 0.2 + (1.2 - s.z) * 0.4;

        // Use soft grayish-white instead of pure white
        ctx.fillStyle = `rgba(200,200,200,${alpha.toFixed(3)})`;
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), size, size);
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    raf = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      if (raf !== null) window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ zIndex: 0 }}
    />
  );
};

export default Stars;
