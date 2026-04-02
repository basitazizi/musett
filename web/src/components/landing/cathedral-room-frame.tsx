function SharedDefs() {
  return (
    <defs>
      <linearGradient id="stoneStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.62)" />
        <stop offset="38%" stopColor="rgba(248,245,240,0.28)" />
        <stop offset="100%" stopColor="rgba(139,0,0,0.24)" />
      </linearGradient>
      <linearGradient id="windowStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.42)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0.14)" />
      </linearGradient>
      <linearGradient id="wallShade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="wallShadeRight" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="bloodStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(139,0,0,0.68)" />
        <stop offset="100%" stopColor="rgba(40,0,0,0.08)" />
      </linearGradient>
      <filter id="softWhite" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="#f8f5f0" floodOpacity="0.18" />
      </filter>
      <filter id="bloodBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.2" />
      </filter>
    </defs>
  );
}

function DesktopFrame() {
  return (
    <svg
      className="absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 1600 1800"
      preserveAspectRatio="none"
    >
      <SharedDefs />

      <path d="M0 0 H1600 V1800 H0 Z" fill="none" />

      <rect x="4" y="4" width="1592" height="1792" rx="14" stroke="rgba(248,245,240,0.2)" strokeWidth="2" />
      <rect x="22" y="22" width="1556" height="1756" rx="12" stroke="rgba(139,0,0,0.28)" strokeWidth="1.5" />

      <path d="M8 0 V1800" stroke="url(#stoneStroke)" strokeWidth="2.6" />
      <path d="M1592 0 V1800" stroke="url(#stoneStroke)" strokeWidth="2.6" />
      <path d="M36 0 V1800" stroke="rgba(248,245,240,0.14)" strokeWidth="1.3" />
      <path d="M1564 0 V1800" stroke="rgba(248,245,240,0.14)" strokeWidth="1.3" />

      <path d="M0 122 H1600" stroke="rgba(248,245,240,0.1)" strokeWidth="1.4" />
      <path d="M0 816 H1600" stroke="rgba(248,245,240,0.06)" strokeWidth="1.1" />

      <path d="M0 32 Q800 -164 1600 32" stroke="rgba(248,245,240,0.3)" strokeWidth="2.2" fill="none" filter="url(#softWhite)" />
      <path d="M216 28 Q800 -102 1384 28" stroke="rgba(248,245,240,0.18)" strokeWidth="1.7" fill="none" />
      <path d="M800 0 V182" stroke="rgba(248,245,240,0.24)" strokeWidth="1.8" />
      <path d="M800 38 L540 270" stroke="rgba(248,245,240,0.16)" strokeWidth="1.5" />
      <path d="M800 38 L1060 270" stroke="rgba(248,245,240,0.16)" strokeWidth="1.5" />
      <path d="M800 38 L246 426" stroke="rgba(248,245,240,0.11)" strokeWidth="1.15" />
      <path d="M800 38 L1354 426" stroke="rgba(248,245,240,0.11)" strokeWidth="1.15" />
      <path d="M800 194 l11 11 -11 11 -11 -11 Z" stroke="rgba(248,245,240,0.18)" fill="rgba(139,0,0,0.08)" />

      <path d="M10 116 Q86 40 162 116 V1800 H10 Z" fill="url(#wallShade)" stroke="url(#windowStroke)" strokeWidth="1.8" />
      <path d="M1590 116 Q1514 40 1438 116 V1800 H1590 Z" fill="url(#wallShadeRight)" stroke="url(#windowStroke)" strokeWidth="1.8" />
      <path d="M48 172 Q105 102 162 172 V1800" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" fill="none" />
      <path d="M1590 172 Q1533 102 1476 172 V1800" stroke="rgba(248,245,240,0.18)" strokeWidth="1.2" fill="none" />
      <circle cx="88" cy="156" r="30" stroke="rgba(248,245,240,0.18)" strokeWidth="1.15" fill="none" />
      <circle cx="1512" cy="156" r="30" stroke="rgba(248,245,240,0.18)" strokeWidth="1.15" fill="none" />
      <path d="M88 126 V186 M58 156 H118" stroke="rgba(248,245,240,0.12)" strokeWidth="1" />
      <path d="M1512 126 V186 M1482 156 H1542" stroke="rgba(248,245,240,0.12)" strokeWidth="1" />

      <path d="M286 116 Q378 12 470 116 V1080 H286 Z" stroke="rgba(248,245,240,0.18)" strokeWidth="1.55" fill="none" />
      <path d="M1130 116 Q1222 12 1314 116 V1080 H1130 Z" stroke="rgba(248,245,240,0.18)" strokeWidth="1.55" fill="none" />
      <path d="M338 176 Q404 102 470 176 V1080" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />
      <path d="M1130 176 Q1196 102 1262 176 V1080" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />

      <path d="M206 1668 H1394" stroke="rgba(248,245,240,0.08)" strokeWidth="1.1" />
      <path d="M304 1606 H1296" stroke="rgba(248,245,240,0.06)" strokeWidth="1" />
      <path d="M592 320 V1800" stroke="rgba(248,245,240,0.06)" strokeWidth="0.85" />
      <path d="M1008 320 V1800" stroke="rgba(248,245,240,0.06)" strokeWidth="0.85" />

      <path d="M20 18 C28 46 34 76 30 112" stroke="url(#bloodStroke)" strokeWidth="1.6" fill="none" filter="url(#bloodBlur)" />
      <path d="M1580 18 C1572 46 1566 76 1570 116" stroke="url(#bloodStroke)" strokeWidth="1.6" fill="none" filter="url(#bloodBlur)" />
      <path d="M800 126 C802 150 804 176 800 202 C796 230 794 246 796 274" stroke="url(#bloodStroke)" strokeWidth="1.3" fill="none" opacity="0.72" />
    </svg>
  );
}

function MobileFrame() {
  return (
    <svg
      className="absolute inset-0 h-full w-full md:hidden"
      viewBox="0 0 1080 2200"
      preserveAspectRatio="none"
    >
      <SharedDefs />

      <rect x="4" y="4" width="1072" height="2192" rx="14" stroke="rgba(248,245,240,0.22)" strokeWidth="2" />
      <rect x="20" y="20" width="1040" height="2160" rx="10" stroke="rgba(139,0,0,0.3)" strokeWidth="1.5" />

      <path d="M8 0 V2200" stroke="url(#stoneStroke)" strokeWidth="2.5" />
      <path d="M1072 0 V2200" stroke="url(#stoneStroke)" strokeWidth="2.5" />
      <path d="M28 0 V2200" stroke="rgba(248,245,240,0.16)" strokeWidth="1.2" />
      <path d="M1052 0 V2200" stroke="rgba(248,245,240,0.16)" strokeWidth="1.2" />

      <path d="M0 124 H1080" stroke="rgba(248,245,240,0.12)" strokeWidth="1.4" />
      <path d="M0 850 H1080" stroke="rgba(248,245,240,0.07)" strokeWidth="1.1" />

      <path d="M0 34 Q540 -130 1080 34" stroke="rgba(248,245,240,0.32)" strokeWidth="2.2" fill="none" filter="url(#softWhite)" />
      <path d="M164 30 Q540 -76 916 30" stroke="rgba(248,245,240,0.2)" strokeWidth="1.7" fill="none" />
      <path d="M540 0 V206" stroke="rgba(248,245,240,0.26)" strokeWidth="1.8" />
      <path d="M540 48 L344 286" stroke="rgba(248,245,240,0.17)" strokeWidth="1.4" />
      <path d="M540 48 L736 286" stroke="rgba(248,245,240,0.17)" strokeWidth="1.4" />
      <path d="M540 48 L84 486" stroke="rgba(248,245,240,0.11)" strokeWidth="1.15" />
      <path d="M540 48 L996 486" stroke="rgba(248,245,240,0.11)" strokeWidth="1.15" />
      <path d="M540 222 l11 11 -11 11 -11 -11 Z" stroke="rgba(248,245,240,0.18)" fill="rgba(139,0,0,0.08)" />

      <path d="M10 112 Q72 48 134 112 V2200 H10 Z" fill="url(#wallShade)" stroke="url(#windowStroke)" strokeWidth="1.8" />
      <path d="M1070 112 Q1008 48 946 112 V2200 H1070 Z" fill="url(#wallShadeRight)" stroke="url(#windowStroke)" strokeWidth="1.8" />
      <path d="M40 174 Q87 112 134 174 V2200" stroke="rgba(248,245,240,0.2)" strokeWidth="1.15" fill="none" />
      <path d="M1070 174 Q1023 112 976 174 V2200" stroke="rgba(248,245,240,0.2)" strokeWidth="1.15" fill="none" />
      <circle cx="74" cy="156" r="28" stroke="rgba(248,245,240,0.18)" strokeWidth="1.1" fill="none" />
      <circle cx="1006" cy="156" r="28" stroke="rgba(248,245,240,0.18)" strokeWidth="1.1" fill="none" />
      <path d="M74 128 V184 M46 156 H102" stroke="rgba(248,245,240,0.12)" strokeWidth="1" />
      <path d="M1006 128 V184 M978 156 H1034" stroke="rgba(248,245,240,0.12)" strokeWidth="1" />

      <path d="M232 118 Q310 26 388 118 V1250 H232 Z" stroke="rgba(248,245,240,0.18)" strokeWidth="1.5" fill="none" />
      <path d="M692 118 Q770 26 848 118 V1250 H692 Z" stroke="rgba(248,245,240,0.18)" strokeWidth="1.5" fill="none" />
      <path d="M276 182 Q332 114 388 182 V1250" stroke="rgba(248,245,240,0.12)" strokeWidth="1.05" fill="none" />
      <path d="M692 182 Q748 114 804 182 V1250" stroke="rgba(248,245,240,0.12)" strokeWidth="1.05" fill="none" />

      <path d="M146 1920 H934" stroke="rgba(248,245,240,0.08)" strokeWidth="1.1" />
      <path d="M214 1856 H866" stroke="rgba(248,245,240,0.06)" strokeWidth="1" />
      <path d="M414 324 V2200" stroke="rgba(248,245,240,0.06)" strokeWidth="0.85" />
      <path d="M666 324 V2200" stroke="rgba(248,245,240,0.06)" strokeWidth="0.85" />

      <path d="M18 18 C24 42 29 70 26 104" stroke="url(#bloodStroke)" strokeWidth="1.6" fill="none" filter="url(#bloodBlur)" />
      <path d="M1062 18 C1056 42 1051 70 1054 108" stroke="url(#bloodStroke)" strokeWidth="1.6" fill="none" filter="url(#bloodBlur)" />
      <path d="M540 124 C542 150 544 176 540 204 C536 232 534 250 536 286" stroke="url(#bloodStroke)" strokeWidth="1.25" fill="none" opacity="0.74" />
    </svg>
  );
}

export default function CathedralRoomFrame() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-14 overflow-hidden sm:top-16" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(920px_620px_at_50%_10%,rgba(139,0,0,0.14),transparent_54%),linear-gradient(180deg,rgba(5,5,5,0.12),rgba(3,3,3,0.56)_34%,rgba(2,2,2,0.94))]" />
      <div className="absolute right-0 top-[6%] h-[34%] w-[34%] bg-[linear-gradient(115deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06)_34%,transparent_62%)] blur-xl opacity-80 md:h-[40%] md:w-[30%]" />
      <div className="absolute right-[4%] top-[10%] h-[26%] w-[24%] bg-[linear-gradient(116deg,rgba(255,255,255,0.22),transparent_60%)] blur-2xl opacity-72 md:h-[30%] md:w-[22%]" />

      <DesktopFrame />
      <MobileFrame />
    </div>
  );
}

