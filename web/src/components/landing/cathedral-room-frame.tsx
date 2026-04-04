function SharedDefs() {
  return (
    <defs>
      <linearGradient id="stoneStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.84)" />
        <stop offset="52%" stopColor="rgba(248,245,240,0.46)" />
        <stop offset="100%" stopColor="rgba(159,26,26,0.24)" />
      </linearGradient>
      <linearGradient id="windowStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.72)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0.24)" />
      </linearGradient>
      <linearGradient id="wallShade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.12)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="wallShadeRight" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.12)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="bloodStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(159,26,26,0.74)" />
        <stop offset="100%" stopColor="rgba(40,0,0,0.1)" />
      </linearGradient>
      <filter id="softWhite" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="4.2" floodColor="#f8f5f0" floodOpacity="0.28" />
      </filter>
      <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#f8f5f0" floodOpacity="0.24" />
      </filter>
      <filter id="bloodBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" />
      </filter>
      <filter id="junctionGlow" x="-200%" y="-200%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
    </defs>
  );
}

function DesktopFrame() {
  return (
    <svg
      className="absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 1600 2100"
      preserveAspectRatio="none"
    >
      <SharedDefs />

      <rect x="5" y="5" width="1590" height="2090" rx="14" stroke="rgba(248,245,240,0.28)" strokeWidth="2.4" />
      <rect x="24" y="24" width="1552" height="2052" rx="12" stroke="rgba(159,26,26,0.36)" strokeWidth="1.8" />

      <path d="M10 0 V2100" stroke="url(#stoneStroke)" strokeWidth="3.2" filter="url(#lineGlow)" />
      <path d="M1590 0 V2100" stroke="url(#stoneStroke)" strokeWidth="3.2" filter="url(#lineGlow)" />
      <path d="M40 0 V2100" stroke="rgba(248,245,240,0.2)" strokeWidth="1.7" />
      <path d="M1560 0 V2100" stroke="rgba(248,245,240,0.2)" strokeWidth="1.7" />

      <path d="M0 136 H1600" stroke="rgba(248,245,240,0.16)" strokeWidth="1.7" />
      <path d="M0 918 H1600" stroke="rgba(248,245,240,0.1)" strokeWidth="1.4" />
      <path d="M0 1478 H1600" stroke="rgba(248,245,240,0.08)" strokeWidth="1.2" />

      <path
        d="M0 44 Q800 -190 1600 44"
        stroke="rgba(248,245,240,0.52)"
        strokeWidth="2.9"
        fill="none"
        filter="url(#softWhite)"
      />
      <path
        d="M198 36 Q800 -116 1402 36"
        stroke="rgba(248,245,240,0.32)"
        strokeWidth="2.2"
        fill="none"
      />
      <path d="M800 0 V216" stroke="rgba(248,245,240,0.34)" strokeWidth="2.2" filter="url(#lineGlow)" />
      <path d="M800 44 L530 302" stroke="rgba(248,245,240,0.26)" strokeWidth="1.8" />
      <path d="M800 44 L1070 302" stroke="rgba(248,245,240,0.26)" strokeWidth="1.8" />
      <path d="M800 44 L224 488" stroke="rgba(248,245,240,0.18)" strokeWidth="1.45" />
      <path d="M800 44 L1376 488" stroke="rgba(248,245,240,0.18)" strokeWidth="1.45" />
      <path d="M800 230 l12 12 -12 12 -12 -12 Z" stroke="rgba(248,245,240,0.26)" fill="rgba(159,26,26,0.12)" />
      <circle cx="800" cy="216" r="24" fill="rgba(248,245,240,0.08)" filter="url(#junctionGlow)" />

      <path
        d="M12 126 Q90 42 168 126 V2100 H12 Z"
        fill="url(#wallShade)"
        stroke="url(#windowStroke)"
        strokeWidth="2.2"
        filter="url(#lineGlow)"
      />
      <path
        d="M1588 126 Q1510 42 1432 126 V2100 H1588 Z"
        fill="url(#wallShadeRight)"
        stroke="url(#windowStroke)"
        strokeWidth="2.2"
        filter="url(#lineGlow)"
      />
      <path d="M52 186 Q110 108 168 186 V2100" stroke="rgba(248,245,240,0.26)" strokeWidth="1.6" fill="none" />
      <path d="M1548 186 Q1490 108 1432 186 V2100" stroke="rgba(248,245,240,0.26)" strokeWidth="1.6" fill="none" />
      <circle cx="90" cy="168" r="32" stroke="rgba(248,245,240,0.28)" strokeWidth="1.5" fill="none" />
      <circle cx="1510" cy="168" r="32" stroke="rgba(248,245,240,0.28)" strokeWidth="1.5" fill="none" />
      <path d="M90 136 V200 M58 168 H122 M68 146 L112 190 M68 190 L112 146" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" />
      <path d="M1510 136 V200 M1478 168 H1542 M1488 146 L1532 190 M1488 190 L1532 146" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" />

      <path d="M272 146 Q376 26 480 146 V1320 H272 Z" stroke="rgba(248,245,240,0.28)" strokeWidth="2" fill="none" filter="url(#lineGlow)" />
      <path d="M1120 146 Q1224 26 1328 146 V1320 H1120 Z" stroke="rgba(248,245,240,0.28)" strokeWidth="2" fill="none" filter="url(#lineGlow)" />
      <path d="M328 214 Q404 126 480 214 V1320" stroke="rgba(248,245,240,0.18)" strokeWidth="1.45" fill="none" />
      <path d="M1120 214 Q1196 126 1272 214 V1320" stroke="rgba(248,245,240,0.18)" strokeWidth="1.45" fill="none" />
      <path d="M480 228 V1320 M1272 228 V1320" stroke="rgba(248,245,240,0.12)" strokeWidth="1.2" />
      <path d="M350 386 H430 M1180 386 H1260" stroke="rgba(248,245,240,0.14)" strokeWidth="1.1" />

      <path d="M220 1752 H1380" stroke="rgba(248,245,240,0.12)" strokeWidth="1.25" />
      <path d="M312 1688 H1288" stroke="rgba(248,245,240,0.1)" strokeWidth="1.1" />
      <path d="M592 344 V2100" stroke="rgba(248,245,240,0.1)" strokeWidth="1.05" />
      <path d="M1008 344 V2100" stroke="rgba(248,245,240,0.1)" strokeWidth="1.05" />
      <path d="M800 216 V2100" stroke="rgba(248,245,240,0.07)" strokeWidth="0.95" />

      <circle cx="480" cy="214" r="16" fill="rgba(248,245,240,0.08)" filter="url(#junctionGlow)" />
      <circle cx="1120" cy="214" r="16" fill="rgba(248,245,240,0.08)" filter="url(#junctionGlow)" />
      <circle cx="800" cy="1478" r="24" fill="rgba(159,26,26,0.1)" filter="url(#junctionGlow)" />

      <path d="M22 18 C30 48 36 82 32 122" stroke="url(#bloodStroke)" strokeWidth="1.8" fill="none" filter="url(#bloodBlur)" />
      <path d="M1578 18 C1570 48 1564 82 1568 124" stroke="url(#bloodStroke)" strokeWidth="1.8" fill="none" filter="url(#bloodBlur)" />
      <path d="M800 136 C803 164 806 194 801 228 C796 268 794 288 797 320" stroke="url(#bloodStroke)" strokeWidth="1.45" fill="none" opacity="0.72" />
    </svg>
  );
}

function MobileFrame() {
  return (
    <svg
      className="absolute inset-0 h-full w-full md:hidden"
      viewBox="0 0 1080 2500"
      preserveAspectRatio="none"
    >
      <SharedDefs />

      <rect x="5" y="5" width="1070" height="2490" rx="14" stroke="rgba(248,245,240,0.28)" strokeWidth="2.4" />
      <rect x="22" y="22" width="1036" height="2456" rx="10" stroke="rgba(159,26,26,0.36)" strokeWidth="1.8" />

      <path d="M8 0 V2500" stroke="url(#stoneStroke)" strokeWidth="3.1" filter="url(#lineGlow)" />
      <path d="M1072 0 V2500" stroke="url(#stoneStroke)" strokeWidth="3.1" filter="url(#lineGlow)" />
      <path d="M30 0 V2500" stroke="rgba(248,245,240,0.22)" strokeWidth="1.8" />
      <path d="M1050 0 V2500" stroke="rgba(248,245,240,0.22)" strokeWidth="1.8" />

      <path d="M0 144 H1080" stroke="rgba(248,245,240,0.18)" strokeWidth="1.8" />
      <path d="M0 936 H1080" stroke="rgba(248,245,240,0.12)" strokeWidth="1.5" />
      <path d="M0 1662 H1080" stroke="rgba(248,245,240,0.1)" strokeWidth="1.3" />

      <path
        d="M0 44 Q540 -176 1080 44"
        stroke="rgba(248,245,240,0.56)"
        strokeWidth="3.1"
        fill="none"
        filter="url(#softWhite)"
      />
      <path
        d="M146 38 Q540 -106 934 38"
        stroke="rgba(248,245,240,0.34)"
        strokeWidth="2.4"
        fill="none"
      />
      <path d="M540 0 V246" stroke="rgba(248,245,240,0.4)" strokeWidth="2.4" filter="url(#lineGlow)" />
      <path d="M540 56 L330 338" stroke="rgba(248,245,240,0.28)" strokeWidth="1.9" />
      <path d="M540 56 L750 338" stroke="rgba(248,245,240,0.28)" strokeWidth="1.9" />
      <path d="M540 56 L84 544" stroke="rgba(248,245,240,0.2)" strokeWidth="1.55" />
      <path d="M540 56 L996 544" stroke="rgba(248,245,240,0.2)" strokeWidth="1.55" />
      <path d="M540 260 l12 12 -12 12 -12 -12 Z" stroke="rgba(248,245,240,0.28)" fill="rgba(159,26,26,0.14)" />
      <circle cx="540" cy="242" r="28" fill="rgba(248,245,240,0.1)" filter="url(#junctionGlow)" />

      <path
        d="M12 132 Q78 56 144 132 V2500 H12 Z"
        fill="url(#wallShade)"
        stroke="url(#windowStroke)"
        strokeWidth="2.4"
        filter="url(#lineGlow)"
      />
      <path
        d="M1068 132 Q1002 56 936 132 V2500 H1068 Z"
        fill="url(#wallShadeRight)"
        stroke="url(#windowStroke)"
        strokeWidth="2.4"
        filter="url(#lineGlow)"
      />
      <path d="M42 198 Q93 122 144 198 V2500" stroke="rgba(248,245,240,0.28)" strokeWidth="1.7" fill="none" />
      <path d="M1038 198 Q987 122 936 198 V2500" stroke="rgba(248,245,240,0.28)" strokeWidth="1.7" fill="none" />
      <circle cx="78" cy="176" r="29" stroke="rgba(248,245,240,0.28)" strokeWidth="1.4" fill="none" />
      <circle cx="1002" cy="176" r="29" stroke="rgba(248,245,240,0.28)" strokeWidth="1.4" fill="none" />
      <path d="M78 147 V205 M49 176 H107 M58 156 L98 196 M58 196 L98 156" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" />
      <path d="M1002 147 V205 M973 176 H1031 M982 156 L1022 196 M982 196 L1022 156" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" />

      <path d="M212 158 Q310 38 408 158 V1380 H212 Z" stroke="rgba(248,245,240,0.3)" strokeWidth="2.2" fill="none" filter="url(#lineGlow)" />
      <path d="M672 158 Q770 38 868 158 V1380 H672 Z" stroke="rgba(248,245,240,0.3)" strokeWidth="2.2" fill="none" filter="url(#lineGlow)" />
      <path d="M266 228 Q337 136 408 228 V1380" stroke="rgba(248,245,240,0.2)" strokeWidth="1.55" fill="none" />
      <path d="M672 228 Q743 136 814 228 V1380" stroke="rgba(248,245,240,0.2)" strokeWidth="1.55" fill="none" />
      <path d="M408 240 V1380 M814 240 V1380" stroke="rgba(248,245,240,0.12)" strokeWidth="1.2" />
      <path d="M286 422 H362 M718 422 H794" stroke="rgba(248,245,240,0.16)" strokeWidth="1.2" />

      <path d="M136 2196 H944" stroke="rgba(248,245,240,0.12)" strokeWidth="1.25" />
      <path d="M212 2128 H868" stroke="rgba(248,245,240,0.1)" strokeWidth="1.1" />
      <path d="M414 354 V2500" stroke="rgba(248,245,240,0.11)" strokeWidth="1.1" />
      <path d="M666 354 V2500" stroke="rgba(248,245,240,0.11)" strokeWidth="1.1" />
      <path d="M540 242 V2500" stroke="rgba(248,245,240,0.08)" strokeWidth="0.98" />

      <circle cx="408" cy="228" r="18" fill="rgba(248,245,240,0.1)" filter="url(#junctionGlow)" />
      <circle cx="672" cy="228" r="18" fill="rgba(248,245,240,0.1)" filter="url(#junctionGlow)" />
      <circle cx="540" cy="1662" r="24" fill="rgba(159,26,26,0.12)" filter="url(#junctionGlow)" />

      <path d="M18 18 C24 48 28 82 25 122" stroke="url(#bloodStroke)" strokeWidth="1.9" fill="none" filter="url(#bloodBlur)" />
      <path d="M1062 18 C1056 48 1052 82 1055 122" stroke="url(#bloodStroke)" strokeWidth="1.9" fill="none" filter="url(#bloodBlur)" />
      <path d="M540 140 C543 170 546 204 540 238 C534 278 532 298 535 338" stroke="url(#bloodStroke)" strokeWidth="1.5" fill="none" opacity="0.74" />
    </svg>
  );
}

export default function CathedralRoomFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.26),rgba(4,4,4,0.72)_28%,rgba(2,2,2,0.96))]" />
      <div className="ambient-red-drift absolute inset-[-8%] opacity-44" />
      <div className="absolute inset-0 bg-[radial-gradient(980px_720px_at_50%_9%,rgba(139,0,0,0.16),transparent_54%),radial-gradient(680px_560px_at_50%_14%,rgba(248,245,240,0.06),transparent_48%)]" />
      <div className="absolute inset-x-[18%] top-[6%] h-[22%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_68%)] blur-3xl opacity-54" />
      <div className="absolute right-[-4%] top-[9%] h-[34%] w-[36%] bg-[linear-gradient(118deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05)_34%,transparent_64%)] blur-2xl opacity-72 md:w-[28%]" />
      <div className="absolute left-[-6%] top-[18%] h-[20%] w-[28%] bg-[radial-gradient(circle,rgba(159,26,26,0.18),transparent_70%)] blur-3xl opacity-56" />

      <DesktopFrame />
      <MobileFrame />
    </div>
  );
}
