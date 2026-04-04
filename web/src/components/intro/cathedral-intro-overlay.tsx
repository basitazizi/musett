"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useMemo, useRef, useState } from "react";
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
  const contentTransition = useMemo(
    () => ({
      duration: reduceMotion ? 0.01 : 0.34,
      ease: [0.32, 0.94, 0.6, 1] as [number, number, number, number],
    }),
    [reduceMotion],
  );

  const handleEnter = () => {
    if (phase !== "closed") return;
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
          animate={
            phase === "opening"
              ? { opacity: 0.76, scale: 1.04 }
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: reduceMotion ? 0.01 : 0.85,
            ease: "easeInOut",
          }}
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(139,0,0,0.18),transparent)]" />
          <div className="absolute left-[max(20px,7vw)] top-1/2 hidden h-[76vh] w-[220px] -translate-y-1/2 opacity-22 lg:block">
            <div className="absolute inset-0 cathedral-glass opacity-35" />
            <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-60" />
            <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-30" tone="red" />
          </div>
          <div className="absolute right-[max(20px,7vw)] top-1/2 hidden h-[76vh] w-[220px] -translate-y-1/2 opacity-22 lg:block">
            <div className="absolute inset-0 cathedral-glass opacity-35" />
            <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-60 scale-x-[-1]" />
            <CathedralPanelArt
              className="absolute inset-0 h-full w-full opacity-30 scale-x-[-1]"
              tone="red"
            />
          </div>
        </div>

        <motion.div
          className="relative z-10 flex h-full items-center justify-center px-6"
          initial={false}
          animate={phase === "opening" ? { scale: 1.03 } : { scale: 1 }}
          transition={transition}
        >
          <div className="w-full max-w-[560px]">
            <div className="relative mx-auto aspect-[1/1.03] w-full max-w-[540px] [perspective:1600px]">
              <motion.div
                className="absolute -inset-12 intro-window-halo"
                aria-hidden="true"
                initial={false}
                animate={
                  phase === "opening"
                    ? { opacity: 1, scale: 1.2 }
                    : { opacity: 0.16, scale: 0.92 }
                }
                transition={transition}
              />

              <div className="absolute inset-0 rounded-[34px] border border-[color:rgba(248,245,240,0.12)] bg-[linear-gradient(180deg,rgba(10,10,10,0.95),rgba(5,5,5,0.84))] shadow-[0_32px_90px_rgba(0,0,0,0.62),inset_0_0_0_1px_rgba(248,245,240,0.04)]" />

              <div className="absolute inset-[14px]">
                <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-[color:rgba(248,245,240,0.08)] bg-black/60">
                  <motion.div
                    className="absolute inset-0 intro-window-light"
                    aria-hidden="true"
                    initial={false}
                    animate={
                      phase === "opening"
                        ? { opacity: 1, scale: 1.08 }
                        : { opacity: 0.08, scale: 0.84 }
                    }
                    transition={transition}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"
                    aria-hidden="true"
                    initial={false}
                    animate={phase === "opening" ? { opacity: 0.8 } : { opacity: 0.18 }}
                    transition={transition}
                  />
                </div>

                <div className="absolute inset-0 grid grid-cols-2">
                  <motion.div
                    className="relative h-full origin-right pr-px"
                    initial={false}
                    animate={
                      phase === "opening"
                        ? {
                            x: reduceMotion ? "-100%" : "-86%",
                            rotateY: reduceMotion ? 0 : -32,
                            scale: reduceMotion ? 1 : 0.985,
                          }
                        : {
                            x: 0,
                            rotateY: 0,
                            scale: 1,
                          }
                    }
                    transition={transition}
                    style={{ transformPerspective: 1600 }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-l-[24px] border-r border-[color:rgba(248,245,240,0.12)] bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(5,5,5,0.92))] shadow-[inset_-1px_0_0_rgba(248,245,240,0.08),0_18px_48px_rgba(0,0,0,0.35)]">
                      <div className="absolute inset-0 cathedral-glass" aria-hidden="true" />
                      <div
                        className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/35 via-black/12 to-transparent"
                        aria-hidden="true"
                      />
                      <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-88" />
                      <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-40" tone="red" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative h-full origin-left pl-px"
                    initial={false}
                    animate={
                      phase === "opening"
                        ? {
                            x: reduceMotion ? "100%" : "86%",
                            rotateY: reduceMotion ? 0 : 32,
                            scale: reduceMotion ? 1 : 0.985,
                          }
                        : {
                            x: 0,
                            rotateY: 0,
                            scale: 1,
                          }
                    }
                    transition={transition}
                    style={{ transformPerspective: 1600 }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-r-[24px] border-l border-[color:rgba(248,245,240,0.12)] bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(5,5,5,0.92))] shadow-[inset_1px_0_0_rgba(248,245,240,0.08),0_18px_48px_rgba(0,0,0,0.35)]">
                      <div className="absolute inset-0 cathedral-glass" aria-hidden="true" />
                      <div
                        className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/35 via-black/12 to-transparent"
                        aria-hidden="true"
                      />
                      <CathedralPanelArt className="absolute inset-0 h-full w-full opacity-88 scale-x-[-1]" />
                      <CathedralPanelArt
                        className="absolute inset-0 h-full w-full opacity-40 scale-x-[-1]"
                        tone="red"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 top-0 z-20 h-full w-px -translate-x-1/2 bg-[color:rgba(248,245,240,0.2)]"
                  aria-hidden="true"
                  initial={false}
                  animate={phase === "opening" ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 z-20 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B0000]/40 bg-black/45 shadow-[0_0_26px_rgba(139,0,0,0.22)]"
                  aria-hidden="true"
                  initial={false}
                  animate={
                    phase === "opening"
                      ? { opacity: 0, scale: 0.88 }
                      : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: reduceMotion ? 0.01 : 0.42, ease: "easeInOut" }}
                >
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[color:rgba(248,245,240,0.22)]" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 z-30 flex items-center justify-center px-6 text-center"
                  initial={false}
                  animate={
                    phase === "opening"
                      ? { opacity: 0, scale: 0.96, y: 10 }
                      : { opacity: 1, scale: 1, y: 0 }
                  }
                  transition={contentTransition}
                >
                  <div className="max-w-[380px]">
                    <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.55em] text-[#8B0000]">
                      SACRED INK ATELIER
                    </p>
                    <h1
                      id={labelId}
                      className="mt-4 font-[family-name:var(--font-display)] text-[38px] leading-[0.98] tracking-tight text-[color:rgba(248,245,240,0.98)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)] sm:text-[56px]"
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
                        className="group relative inline-flex items-center justify-center border border-[color:rgba(248,245,240,0.22)] bg-black/45 px-9 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[var(--paper)] transition-all duration-300 hover:border-[#8B0000]/75 hover:text-[var(--paper)] hover:shadow-[0_0_30px_rgba(139,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]/70"
                      >
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
                        <span className="relative">Enter</span>
                      </button>
                    </div>

                    <p className="mt-8 text-[11px] tracking-[0.4em] text-[color:rgba(248,245,240,0.35)]">
                      Click Enter to open the window
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
