export default function CathedralRoomFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(920px_620px_at_50%_12%,rgba(139,0,0,0.1),transparent_54%),linear-gradient(180deg,rgba(5,5,5,0.18),rgba(3,3,3,0.62)_34%,rgba(2,2,2,0.92))]" />
      <div className="absolute right-0 top-[7%] h-[42%] w-[30%] bg-[linear-gradient(115deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_34%,transparent_62%)] blur-xl opacity-75" />
      <div className="absolute right-[5%] top-[12%] h-[32%] w-[20%] bg-[linear-gradient(116deg,rgba(255,255,255,0.18),transparent_60%)] blur-2xl opacity-70" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1800"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="stoneStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(248,245,240,0.36)" />
            <stop offset="42%" stopColor="rgba(248,245,240,0.16)" />
            <stop offset="100%" stopColor="rgba(139,0,0,0.18)" />
          </linearGradient>
          <linearGradient id="windowStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(248,245,240,0.24)" />
            <stop offset="100%" stopColor="rgba(248,245,240,0.08)" />
          </linearGradient>
          <filter id="softWhite" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.8" floodColor="#f8f5f0" floodOpacity="0.14" />
          </filter>
        </defs>

        <rect x="2" y="2" width="1436" height="1796" rx="18" stroke="rgba(248,245,240,0.13)" strokeWidth="2" />
        <rect x="24" y="24" width="1392" height="1752" rx="16" stroke="rgba(139,0,0,0.2)" strokeWidth="1.5" />

        <path d="M28 130 H1412" stroke="rgba(248,245,240,0.08)" strokeWidth="1.4" />
        <path d="M96 320 H1344" stroke="rgba(248,245,240,0.06)" strokeWidth="1.2" />

        <path d="M126 120 V1710" stroke="url(#stoneStroke)" strokeWidth="2.4" />
        <path d="M1314 120 V1710" stroke="url(#stoneStroke)" strokeWidth="2.4" />
        <path d="M172 120 V1710" stroke="rgba(248,245,240,0.07)" strokeWidth="1.2" />
        <path d="M1268 120 V1710" stroke="rgba(248,245,240,0.07)" strokeWidth="1.2" />

        <path
          d="M146 126 Q720 -124 1294 126"
          stroke="rgba(248,245,240,0.18)"
          strokeWidth="1.9"
          fill="none"
          filter="url(#softWhite)"
        />
        <path d="M384 122 Q720 -52 1056 122" stroke="rgba(248,245,240,0.13)" strokeWidth="1.4" fill="none" />
        <path d="M720 14 V152" stroke="rgba(248,245,240,0.18)" strokeWidth="1.7" />
        <path d="M720 46 L504 232" stroke="rgba(248,245,240,0.095)" strokeWidth="1.4" />
        <path d="M720 46 L936 232" stroke="rgba(248,245,240,0.095)" strokeWidth="1.4" />
        <path d="M720 46 L286 332" stroke="rgba(248,245,240,0.075)" strokeWidth="1.1" />
        <path d="M720 46 L1154 332" stroke="rgba(248,245,240,0.075)" strokeWidth="1.1" />
        <path d="M720 160 l10 10 -10 10 -10 -10 Z" stroke="rgba(248,245,240,0.12)" fill="rgba(139,0,0,0.06)" />

        <path d="M190 138 Q254 62 318 138 V1750 H190 Z" stroke="url(#windowStroke)" strokeWidth="1.6" fill="none" />
        <path d="M1122 138 Q1186 62 1250 138 V1750 H1122 Z" stroke="url(#windowStroke)" strokeWidth="1.6" fill="none" />
        <path d="M224 182 Q271 122 318 182 V1750" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />
        <path d="M1122 182 Q1169 122 1216 182 V1750" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />
        <circle cx="254" cy="168" r="28" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />
        <circle cx="1186" cy="168" r="28" stroke="rgba(248,245,240,0.12)" strokeWidth="1.1" fill="none" />
        <path d="M254 140 V196 M226 168 H282" stroke="rgba(248,245,240,0.09)" strokeWidth="1" />
        <path d="M1186 140 V196 M1158 168 H1214" stroke="rgba(248,245,240,0.09)" strokeWidth="1" />

        <path d="M356 118 Q430 28 504 118 V940 H356 Z" stroke="rgba(248,245,240,0.12)" strokeWidth="1.4" fill="none" />
        <path d="M936 118 Q1010 28 1084 118 V940 H936 Z" stroke="rgba(248,245,240,0.12)" strokeWidth="1.4" fill="none" />
        <path d="M398 172 Q451 106 504 172 V940" stroke="rgba(248,245,240,0.08)" strokeWidth="1.05" fill="none" />
        <path d="M936 172 Q989 106 1042 172 V940" stroke="rgba(248,245,240,0.08)" strokeWidth="1.05" fill="none" />

        <path d="M250 1540 H1190" stroke="rgba(248,245,240,0.055)" strokeWidth="1.2" />
        <path d="M336 1480 H1104" stroke="rgba(248,245,240,0.042)" strokeWidth="1" />
        <path d="M524 320 V1760" stroke="rgba(248,245,240,0.04)" strokeWidth="0.8" />
        <path d="M916 320 V1760" stroke="rgba(248,245,240,0.04)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
