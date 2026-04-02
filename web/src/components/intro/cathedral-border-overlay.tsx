"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  visible: boolean;
};

export default function CathedralBorderOverlay({ visible }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          {/* Glow only: no black fills, so content stays visible */}
          <div className="absolute left-0 top-0 h-56 w-56 bg-[radial-gradient(circle_at_30%_30%,rgba(139,0,0,0.16),transparent_70%)]" />
          <div className="absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle_at_70%_30%,rgba(139,0,0,0.16),transparent_70%)]" />
          <div className="absolute left-0 bottom-0 h-56 w-56 bg-[radial-gradient(circle_at_30%_70%,rgba(139,0,0,0.12),transparent_70%)]" />
          <div className="absolute right-0 bottom-0 h-56 w-56 bg-[radial-gradient(circle_at_70%_70%,rgba(139,0,0,0.12),transparent_70%)]" />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="borderGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="2.2"
                  floodColor="#8B0000"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>

            <rect
              x="20"
              y="20"
              width="960"
              height="960"
              rx="20"
              stroke="rgba(248,245,240,0.12)"
              strokeWidth="2"
            />
            <rect
              x="46"
              y="46"
              width="908"
              height="908"
              rx="16"
              stroke="rgba(139,0,0,0.2)"
              strokeWidth="1.5"
              filter="url(#borderGlow)"
            />

            {/* Corner ornaments */}
            <path
              d="M80 160 Q120 110 160 80"
              stroke="rgba(248,245,240,0.07)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M920 160 Q880 110 840 80"
              stroke="rgba(248,245,240,0.07)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80 840 Q120 890 160 920"
              stroke="rgba(248,245,240,0.06)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M920 840 Q880 890 840 920"
              stroke="rgba(248,245,240,0.06)"
              strokeWidth="2"
              fill="none"
            />

            <path
              d="M500 46 V95"
              stroke="rgba(139,0,0,0.32)"
              strokeWidth="3"
              filter="url(#borderGlow)"
            />
            <path
              d="M500 905 V954"
              stroke="rgba(139,0,0,0.18)"
              strokeWidth="2"
            />

            {/* Midpoint diamonds */}
            <path
              d="M500 115 l8 8 -8 8 -8 -8 Z"
              stroke="rgba(248,245,240,0.12)"
              fill="rgba(139,0,0,0.08)"
            />
            <path
              d="M500 885 l8 8 -8 8 -8 -8 Z"
              stroke="rgba(248,245,240,0.1)"
              fill="rgba(139,0,0,0.06)"
            />
          </svg>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
