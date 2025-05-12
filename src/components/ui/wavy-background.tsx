"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  const animationId = useRef<number | null>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = useCallback((n: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + hRef.current * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [waveWidth, speed, waveColors, noise, getSpeed]);

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationId.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");
    if (!ctxRef.current) return;

    wRef.current = canvas.width = window.innerWidth;
    hRef.current = canvas.height = window.innerHeight;
    ctxRef.current.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    const handleResize = () => {
      if (!ctxRef.current) return;
      wRef.current = canvas.width = window.innerWidth;
      hRef.current = canvas.height = window.innerHeight;
      ctxRef.current.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId.current !== null) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [blur, backgroundFill, waveOpacity, waveWidth, colors, speed, render]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};