"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CSSProperties, useEffect, useId, useMemo, useRef, useState } from "react";
import CathedralPanelArt from "./cathedral-panel-art";

type Props = {
  onOpened?: () => void;
};

const OPEN_DURATION_S = 1.2;
const FADE_OUT_S = 0.32;
const CINEMATIC_EASE: [number, number, number, number] = [0.7, 0, 0.15, 1];
const WINDOW_VIEWBOX = "0 0 420 660";
const WINDOW_OUTER_PATH =
  "M82 626 L82 212 Q82 150 122 111 Q160 74 210 24 Q260 74 298 111 Q338 150 338 212 L338 626 Z";
const WINDOW_INNER_PATH =
  "M102 608 L102 226 Q102 173 135 141 Q170 107 210 58 Q250 107 285 141 Q318 173 318 226 L318 608 Z";
const WINDOW_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${WINDOW_VIEWBOX}' preserveAspectRatio='none'><path fill='white' d='${WINDOW_OUTER_PATH}'/></svg>`,
)}")`;
const WINDOW_MASK_STYLE: CSSProperties = {
  WebkitMaskImage: WINDOW_MASK,
  maskImage: WINDOW_MASK,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function IntroWindowFrame() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      viewBox={WINDOW_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="introOuterFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(159,26,26,0.78)" />
          <stop offset="100%" stopColor="rgba(60,0,0,0.22)" />
        </linearGradient>
        <linearGradient id="introInnerFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(248,245,240,0.78)" />
          <stop offset="100%" stopColor="rgba(248,245,240,0.26)" />
        </linearGradient>
        <linearGradient id="introRightLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.22)" />
        </linearGradient>
        <filter id="introOuterGlow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#8B0000" floodOpacity="0.34" />
        </filter>
      </defs>

      <path
        d={WINDOW_OUTER_PATH}
        stroke="url(#introOuterFrame)"
        strokeWidth="14"
        strokeLinejoin="round"
        filter="url(#introOuterGlow)"
      />
      <path
        d={WINDOW_OUTER_PATH}
        stroke="rgba(9,9,9,0.92)"
        strokeWidth="9.5"
        strokeLinejoin="round"
      />
      <path
        d={WINDOW_INNER_PATH}
        stroke="url(#introInnerFrame)"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M286 112 Q320 146 320 226 V608"
        stroke="url(#introRightLight)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M103 608 V226 Q103 173 136 141 Q170 107 210 58"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IntroWindowLeafArt({
  mirrored = false,
  tone = "paper",
  className,
}: {
  mirrored?: boolean;
  tone?: "paper" | "red";
  className?: string;
}) {
  const primary = tone === "red" ? "rgba(159,26,26,0.64)" : "rgba(248,245,240,0.52)";
  const secondary = tone === "red" ? "rgba(109,0,0,0.28)" : "rgba(248,245,240,0.18)";

  return (
    <svg
      className={[
        "absolute inset-0 h-full w-full",
        mirrored ? "scale-x-[-1]" : "",
        className ?? "",
      ].join(" ")}
      viewBox="0 0 210 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 610 V224 Q24 178 52 149 Q79 123 104 93 Q129 123 156 149 Q184 178 184 224 V610"
        stroke={primary}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M58 610 V246 Q58 208 79 186 Q93 171 104 154 Q115 171 129 186 Q150 208 150 246 V610"
        stroke={secondary}
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M104 154 V610" stroke={primary} strokeWidth="1.55" strokeLinecap="round" opacity="0.72" />
      <path d="M150 246 V610" stroke={secondary} strokeWidth="1.25" strokeLinecap="round" opacity="0.64" />
    </svg>
  );
}

export default function CathedralIntroOverlay({ onOpened }: Props) {
  const reduceMotion = useReducedMotion();
  const labelId = useId();
  const descId = useId();

  const [phase, setPhase] = useState<"closed" | "opening" | "fading">("closed");
  const [isDesktop, setIsDesktop] = useState(false);
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
    const media = window.matchMedia("(min-width: 768px)");
    const syncViewport = () => setIsDesktop(media.matches);

    syncViewport();
    media.addEventListener("change", syncViewport);

    return () => media.removeEventListener("change", syncViewport);
  }, []);

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
          "fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-black text-[var(--paper)] md:overflow-hidden",
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
              ? { opacity: 0.76, scale: isDesktop ? 1.04 : 1 }
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
          className="relative z-10 grid min-h-[100svh] w-full place-items-center px-[2.5vw] py-0 md:flex md:h-full md:items-center md:justify-center md:px-6 md:py-0"
          initial={false}
          animate={phase === "opening" ? { scale: isDesktop ? 1.03 : 1 } : { scale: 1 }}
          transition={transition}
        >
          <div className="mx-auto w-[97vw] max-w-none md:w-full md:max-w-[560px]">
            <div className="relative mx-auto aspect-[0.88/1] max-h-[calc(100svh-1rem)] w-full max-w-none [perspective:1800px] md:aspect-[0.72/1] md:max-h-[86svh] md:max-w-[470px]">
              <motion.div
                className="absolute -inset-8 intro-window-halo md:-inset-10"
                style={WINDOW_MASK_STYLE}
                aria-hidden="true"
                initial={false}
                animate={
                  phase === "opening"
                    ? { opacity: 1, scale: isDesktop ? 1.18 : 1 }
                    : { opacity: 0.18, scale: isDesktop ? 0.94 : 1 }
                }
                transition={transition}
              />

              <div className="absolute inset-0 pointer-events-none" style={WINDOW_MASK_STYLE}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.1),rgba(4,4,4,0.26))]" />
                <div className="absolute inset-0 intro-gothic-window-glass" />
                <motion.div
                  className="absolute inset-0 intro-window-light"
                  aria-hidden="true"
                  initial={false}
                  animate={
                    phase === "opening"
                      ? { opacity: 0.58, scale: isDesktop ? 1.04 : 1 }
                      : { opacity: 0.04, scale: isDesktop ? 0.9 : 1 }
                  }
                  transition={transition}
                />
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03)_24%,transparent_44%),radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.06),transparent_34%)]"
                  aria-hidden="true"
                  initial={false}
                  animate={phase === "opening" ? { opacity: 0.48 } : { opacity: 0.16 }}
                  transition={transition}
                />
                <div className="absolute inset-x-[16%] top-[18%] bottom-[23%] bg-[radial-gradient(circle_at_50%_34%,rgba(7,7,7,0.66),rgba(7,7,7,0.24)_34%,transparent_64%)]" />

                <div className="absolute inset-0 grid grid-cols-2">
                  <motion.div
                    className="relative h-full origin-right"
                    initial={false}
                    animate={
                      phase === "opening"
                        ? {
                            x: reduceMotion ? "-96%" : "-84%",
                            rotateY: reduceMotion ? 0 : -34,
                            scale: reduceMotion || !isDesktop ? 1 : 0.99,
                          }
                        : {
                            x: 0,
                            rotateY: 0,
                            scale: 1,
                          }
                    }
                    transition={transition}
                    style={{ transformPerspective: 1800 }}
                  >
                    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,rgba(10,9,9,0.95),rgba(5,5,5,0.9))] shadow-[inset_-1px_0_0_rgba(248,245,240,0.08),0_20px_40px_rgba(0,0,0,0.32)]">
                      <div className="absolute inset-0 intro-gothic-window-pane" aria-hidden="true" />
                      <div
                        className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[rgba(159,26,26,0.14)] via-[rgba(255,255,255,0.02)] to-transparent"
                        aria-hidden="true"
                      />
                      <IntroWindowLeafArt />
                      <IntroWindowLeafArt tone="red" className="hidden md:block" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative h-full origin-left"
                    initial={false}
                    animate={
                      phase === "opening"
                        ? {
                            x: reduceMotion ? "96%" : "84%",
                            rotateY: reduceMotion ? 0 : 34,
                            scale: reduceMotion || !isDesktop ? 1 : 0.99,
                          }
                        : {
                            x: 0,
                            rotateY: 0,
                            scale: 1,
                          }
                    }
                    transition={transition}
                    style={{ transformPerspective: 1800 }}
                  >
                    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,rgba(10,9,9,0.95),rgba(5,5,5,0.9))] shadow-[inset_1px_0_0_rgba(248,245,240,0.08),0_20px_40px_rgba(0,0,0,0.32)]">
                      <div className="absolute inset-0 intro-gothic-window-pane" aria-hidden="true" />
                      <div
                        className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[rgba(159,26,26,0.14)] via-[rgba(255,255,255,0.02)] to-transparent"
                        aria-hidden="true"
                      />
                      <IntroWindowLeafArt mirrored />
                      <IntroWindowLeafArt mirrored tone="red" className="hidden md:block" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 top-[17%] z-10 h-[74%] w-[1.5px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(248,245,240,0.34),rgba(248,245,240,0.18),rgba(248,245,240,0.28))]"
                  aria-hidden="true"
                  initial={false}
                  animate={phase === "opening" ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-[49%] z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 border border-[#8B0000]/46 bg-black/40 shadow-[0_0_24px_rgba(139,0,0,0.24)]"
                  aria-hidden="true"
                  initial={false}
                  animate={
                    phase === "opening"
                      ? { opacity: 0, scale: isDesktop ? 0.88 : 1 }
                      : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: reduceMotion ? 0.01 : 0.42, ease: "easeInOut" }}
                >
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[color:rgba(248,245,240,0.22)]" />
                </motion.div>
              </div>

              <motion.div
                className="pointer-events-none absolute inset-x-[12%] bottom-[6%] top-[12%] z-30 flex translate-y-[7%] items-center justify-center text-center md:inset-0 md:translate-y-0 md:px-8 md:py-6"
                initial={false}
                animate={
                  phase === "opening"
                    ? { opacity: 0, scale: isDesktop ? 0.96 : 1, y: isDesktop ? 10 : 6 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={contentTransition}
              >
                <div className="pointer-events-auto flex h-full w-full flex-col items-center justify-between gap-4 overflow-hidden text-center md:max-w-[340px] md:justify-center md:gap-0 md:px-0 md:pt-[6.2rem]">
                  <div className="flex w-full flex-col items-center gap-3">
                    <p className="font-[family-name:var(--font-caps)] text-[8px] tracking-[0.36em] text-[#8B0000] md:text-[10px] md:tracking-[0.42em]">
                      SACRED INK ATELIER
                    </p>
                    <h1
                      id={labelId}
                      className="max-w-[8.6ch] text-balance font-[family-name:var(--font-display)] text-[clamp(1.75rem,7.4vw,2.45rem)] leading-[1.04] tracking-tight text-[color:rgba(248,245,240,0.98)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)] md:mt-5 md:max-w-[12ch] md:text-[50px] md:leading-[0.95]"
                    >
                      Welcome to YourMuse Tattoo
                    </h1>
                    <p
                      id={descId}
                      className="mx-auto max-w-[14rem] text-balance font-[family-name:var(--font-accent)] text-[13px] italic leading-[1.8] text-[color:rgba(248,245,240,0.88)] md:mt-6 md:max-w-[280px] md:text-[15px] md:leading-7"
                    >
                      Where the body becomes the canvas
                    </p>
                  </div>

                  <div className="flex w-full flex-col items-center gap-3 pb-[2%]">
                    <button
                      type="button"
                      onClick={handleEnter}
                      className="group relative z-10 inline-flex min-h-[52px] w-full max-w-[15.5rem] touch-manipulation items-center justify-center border border-[color:rgba(248,245,240,0.36)] bg-black/48 px-7 py-4 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.42em] text-[var(--paper)] transition-all duration-300 active:scale-[0.98] active:border-[#8B0000]/88 active:shadow-[0_0_34px_rgba(139,0,0,0.34)] hover:border-[#8B0000]/82 hover:text-[var(--paper)] hover:shadow-[0_0_34px_rgba(139,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]/70 md:min-h-[46px] md:w-auto md:max-w-none md:px-10 md:py-3 md:tracking-[0.45em]"
                    >
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 cathedral-button-glow" />
                      <span className="relative">Enter</span>
                    </button>

                    <p className="max-w-[13.5rem] text-[9px] leading-[1.7] tracking-[0.22em] text-[color:rgba(248,245,240,0.32)] md:mt-10 md:max-w-[18rem] md:text-[11px] md:leading-5 md:tracking-[0.34em]">
                      Click Enter to open the window
                    </p>
                  </div>
                </div>
              </motion.div>

              <IntroWindowFrame />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
