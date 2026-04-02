"use client";

import { useId, useMemo } from "react";

type Particle = {
  leftPct: number;
  topPct: number;
  sizePx: number;
  durationS: number;
  delayS: number;
  opacity: number;
};

type Props = {
  visible: boolean;
  count?: number;
};

function hashStringToU32(input: string) {
  // FNV-1a 32-bit
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seedU32: number) {
  // xorshift32
  let x = seedU32 || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    // Normalize to [0, 1)
    return (x >>> 0) / 4294967296;
  };
}

function rand(rng: () => number, min: number, max: number) {
  return rng() * (max - min) + min;
}

export default function DustParticles({ visible, count = 26 }: Props) {
  const seedId = useId();

  const particles = useMemo<Particle[]>(() => {
    if (!visible) return [];
    const rng = makeRng(hashStringToU32(`${seedId}:${count}`));
    return Array.from({ length: count }).map(() => ({
      leftPct: rand(rng, 0, 100),
      topPct: rand(rng, 0, 100),
      sizePx: rand(rng, 1, 2.6),
      durationS: rand(rng, 7, 13),
      delayS: rand(rng, 0, 6),
      opacity: rand(rng, 0.06, 0.14),
    }));
  }, [visible, count, seedId]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-70 motion-reduce:hidden"
      aria-hidden="true"
    >
      {particles.map((p, idx) => (
        <span
          key={`${idx}-${p.leftPct.toFixed(3)}-${p.topPct.toFixed(3)}`}
          className="absolute rounded-full bg-[color:rgba(248,245,240,0.85)] blur-[0.2px] dust-float"
          style={{
            left: `${p.leftPct}%`,
            top: `${p.topPct}%`,
            width: `${p.sizePx}px`,
            height: `${p.sizePx}px`,
            opacity: p.opacity,
            animationDuration: `${p.durationS}s`,
            animationDelay: `${p.delayS}s`,
          }}
        />
      ))}
    </div>
  );
}
