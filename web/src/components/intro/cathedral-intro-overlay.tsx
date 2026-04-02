"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { markIntroDismissed } from "@/app/intro-session";
import CathedralPanelArt from "./cathedral-panel-art";

type Props = {
  onOpened?: () => void;
};

const OPEN_DURATION_S = 1.2;
const FADE_OUT_S = 0.32;
const CINEMATIC_EASE: [number, number, number, number] = [0.7, 0, 0.15, 1];

export default function CathedralIntroOverlay({ onOpened }: Props) {
  const reduceMotion = useReducedMotion();
  const labelId = useId();
  const descId = useId();

  const [phase, setPhase] = useState<"closed" | "opening" | "fading">("closed");
  const openedOnceRef = useRef(false);

  const transition = useMemo(
    () => ({
      duration: reduceMotion ? 0.01 : OPEN_DURATION_S,
      ease: CINEMATIC_EASE,
    }),
    [reduceMotion],
  );

  const handleEnter = () => {
    if (phase !== "closed") return;
    // Persist immediately so dev remounts cannot bring the intro back mid-transition.
    markIntroDismissed();
    setPhase("opening");
  };

  // Synchronize: doors open -> overlay fades -> parent unmounts this component.
  useEffect(() => {
    if (phase !== "opening") return;
    const ms = reduceMotion ? 10 : Math.round(OPEN_DURATION_S * 1000);
    const t = window.setTimeout(() => setPhase("fading"), ms);
    return () => window.clearTimeout(t);
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (phase !== "fading") return;
    if (reduceMotion && !openedOnceRef.current) {
      openedOnceRef.current = true;
      onOpened?.();
    }
  }, [phase, reduceMotion, onOpened]);

  const handleRootAnimationComplete = () => {
    if (phase !== "fading" || openedOnceRef.current) return;
    openedOnceRef.current = true;
    onOpened?.();
  };

  return (
    <>
      <motion.div
        className={[
          "fixed inset-0 z-50 overflow-hidden bg-black text-[var(--paper)]",
          phase === "fading" ? "pointer-events-none" : "",
        ].join(" ")}
        aria-labelledby={labelId}
        aria-describedby={descId}
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "fading" ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0.01 : FADE_OUT_S, ease: "easeInOut" }}
        onAnimationComplete={handleRootAnimationComplete}
      >
          <motion.div
            className="absolute inset-0 bg-black cathedral-vignette"
            aria-hidden="true"
            initial={false}
            animate={phase === "opening" ? { opacity: 0 } : { opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.85,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={phase === "opening" ? "open" : "closed"}
          >
            {/* Left door panel (anchored to left edge) */}
            <motion.div
              className="absolute left-0 top-0 h-full w-[52vw] max-w-[640px] border-r border-[#8B0000]/35 bg-black"
              variants={{
                closed: { x: 0 },
                open: { x: "-110%" },
              }}
              transition={transition}
            >
              <div className="absolute inset-0 cathedral-glass" aria-hidden="true" />
              <div
                className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/35 to-transparent"
                aria-hidden="true"
              />
              <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-95" />
              <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-55" tone="red" />
            </motion.div>

            {/* Right door panel (anchored to right edge) */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[52vw] max-w-[640px] border-l border-[#8B0000]/35 bg-black"
              variants={{
                closed: { x: 0 },
                open: { x: "110%" },
              }}
              transition={transition}
            >
              <div className="absolute inset-0 cathedral-glass" aria-hidden="true" />
              <div
                className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/35 to-transparent"
                aria-hidden="true"
              />
              <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-95 scale-x-[-1]" />
              <CathedralPanelArt
                className="absolute inset-0 h-full w-full opacity-55 scale-x-[-1]"
                tone="red"
              />
            </motion.div>

            {/* Center seam (makes it read like doors) */}
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#8B0000]/35"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B0000]/45 bg-black/40 shadow-[0_0_26px_rgba(139,0,0,0.25)]"
              variants={{
                closed: { opacity: 1, scale: 1 },
                open: { opacity: 0, scale: 0.92 },
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[color:rgba(248,245,240,0.22)]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10 flex h-full items-center justify-center px-6"
            initial={false}
            animate={
              phase === "opening"
                ? { opacity: 0, scale: 0.985 }
                : { opacity: 1, scale: 1 }
            }
            transition={transition}
          >
            <div className="w-full max-w-xl text-center">
              <div className="mx-auto w-full max-w-[520px] rounded-2xl border border-[color:rgba(248,245,240,0.14)] bg-black/55 px-6 py-8 backdrop-blur-[2px]">
                <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.55em] text-[#8B0000]">
                  SACRED INK ATELIER
                </p>
                <h1
                  id={labelId}
                  className="mt-4 font-[family-name:var(--font-display)] text-[42px] leading-[0.98] tracking-tight text-[color:rgba(248,245,240,0.98)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)] sm:text-6xl"
                >
                  Welcome to YourMuse Tattoo
                </h1>
                <p
                  id={descId}
                  className="mx-auto mt-4 max-w-md font-[family-name:var(--font-accent)] text-[16px] italic leading-7 text-[color:rgba(248,245,240,0.88)]"
                >
                  Where the body becomes the canvas
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={handleEnter}
                    className="group relative inline-flex items-center justify-center border border-[color:rgba(248,245,240,0.22)] bg-black/55 px-9 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[var(--paper)] transition-all duration-300 hover:border-[#8B0000]/75 hover:text-[var(--paper)] hover:shadow-[0_0_30px_rgba(139,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]/70"
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
                    <span className="relative">Enter</span>
                  </button>
                </div>

                <p className="mt-8 text-[11px] tracking-[0.4em] text-[color:rgba(248,245,240,0.35)]">
                  Click Enter to open the doors
                </p>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </>
  );
}
