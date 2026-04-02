import { CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  tone?: "paper" | "red";
};

export default function CathedralPanelArt({
  className,
  style,
  tone = "paper",
}: Props) {
  const stroke = tone === "red" ? "#8B0000" : "rgba(248,245,240,0.38)";
  const stroke2 = tone === "red" ? "rgba(139,0,0,0.55)" : "rgba(248,245,240,0.18)";

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 300 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="g" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.2"
            floodColor={tone === "red" ? "#8B0000" : "rgba(248,245,240,0.3)"}
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      {/* Outer door frame (fills the panel more; avoids "floating window" look) */}
      <path
        d="M12 988 V220 Q150 24 288 220 V988 Z"
        stroke={stroke}
        strokeWidth="1.35"
        opacity="0.82"
        filter="url(#g)"
      />
      <path
        d="M28 988 V252 Q150 70 272 252 V988"
        stroke={stroke2}
        strokeWidth="1"
        opacity="0.85"
      />

      {/* Rose window */}
      <circle cx="150" cy="242" r="60" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="150" cy="242" r="28" stroke={stroke2} strokeWidth="1" opacity="0.72" />
      <path
        d="M150 182 V302 M90 242 H210 M110 204 L190 284 M110 284 L190 204"
        stroke={stroke2}
        strokeWidth="1"
        opacity="0.62"
      />

      {/* Center mullion + subtle dashed guide */}
      <path d="M150 306 V952" stroke={stroke2} strokeWidth="1" opacity="0.42" />
      <path
        d="M150 306 V952"
        stroke={stroke2}
        strokeWidth="1"
        opacity="0.26"
        strokeDasharray="2 10"
      />

      <path
        d="M60 420 Q150 388 240 420 M60 540 Q150 508 240 540 M60 660 Q150 628 240 660 M60 780 Q150 748 240 780"
        stroke={stroke2}
        strokeWidth="1"
        opacity="0.28"
      />

      <path
        d="M44 920 H256"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.14"
      />
    </svg>
  );
}
