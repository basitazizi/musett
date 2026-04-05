function SharedDefs() {
  return (
    <defs>
      <linearGradient id="frameRedStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(120,16,16,0.34)" />
        <stop offset="48%" stopColor="rgba(96,8,8,0.16)" />
        <stop offset="100%" stopColor="rgba(32,0,0,0)" />
      </linearGradient>
      <linearGradient id="frameLightStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.22)" />
        <stop offset="48%" stopColor="rgba(248,245,240,0.12)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0.03)" />
      </linearGradient>
      <linearGradient id="frameSecondaryStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(248,245,240,0.12)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0.02)" />
      </linearGradient>
      <linearGradient id="frameWallLeft" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.06)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0)" />
      </linearGradient>
      <linearGradient id="frameWallRight" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="rgba(248,245,240,0.06)" />
        <stop offset="100%" stopColor="rgba(248,245,240,0)" />
      </linearGradient>
      <radialGradient id="frameRoomGlow" cx="50%" cy="18%" r="62%">
        <stop offset="0%" stopColor="rgba(255,247,236,0.06)" />
        <stop offset="38%" stopColor="rgba(139,0,0,0.06)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <filter id="frameSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="#f8f5f0" floodOpacity="0.08" />
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

      <rect x="0" y="0" width="1600" height="2100" fill="url(#frameRoomGlow)" />

      <path d="M800 0 V520" stroke="rgba(248,245,240,0.05)" strokeWidth="1.1" />
      <path d="M0 708 H1600" stroke="rgba(248,245,240,0.05)" strokeWidth="1.1" />
      <path d="M0 1238 H1600" stroke="rgba(248,245,240,0.04)" strokeWidth="1" />

      <path
        d="M800 26 Q650 118 540 222 Q432 326 346 468"
        fill="none"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.4"
      />
      <path
        d="M800 26 Q618 114 480 216 Q300 350 142 558"
        fill="none"
        stroke="rgba(248,245,240,0.05)"
        strokeWidth="1.1"
      />
      <path
        d="M800 26 Q950 118 1060 222 Q1168 326 1254 468"
        fill="none"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.4"
      />
      <path
        d="M800 26 Q982 114 1120 216 Q1300 350 1458 558"
        fill="none"
        stroke="rgba(248,245,240,0.05)"
        strokeWidth="1.1"
      />

      <circle cx="800" cy="304" r="86" stroke="rgba(248,245,240,0.08)" strokeWidth="1.2" fill="none" />
      <circle cx="800" cy="304" r="52" stroke="rgba(248,245,240,0.06)" strokeWidth="1.1" fill="none" />
      <circle cx="800" cy="304" r="22" stroke="rgba(248,245,240,0.07)" strokeWidth="1" fill="none" />
      <circle cx="800" cy="304" r="6" fill="rgba(248,245,240,0.08)" />
      <path d="M800 218 V390" stroke="rgba(248,245,240,0.06)" strokeWidth="1.1" />
      <path d="M714 304 H886" stroke="rgba(248,245,240,0.06)" strokeWidth="1.1" />

      <path
        d="M260 2100 V418 Q260 286 358 212 Q496 108 800 46 Q1104 108 1242 212 Q1340 286 1340 418 V2100"
        fill="none"
        stroke="url(#frameRedStroke)"
        strokeWidth="4.2"
      />
      <path
        d="M280 2100 V440 Q280 316 372 248 Q506 150 800 88 Q1094 150 1228 248 Q1320 316 1320 440 V2100"
        fill="none"
        stroke="url(#frameLightStroke)"
        strokeWidth="1.8"
        filter="url(#frameSoftGlow)"
      />
      <path
        d="M430 2100 V470 Q430 360 502 306 Q622 218 800 144 Q978 218 1098 306 Q1170 360 1170 470 V2100"
        fill="none"
        stroke="url(#frameSecondaryStroke)"
        strokeWidth="1.3"
      />
      <path
        d="M560 2100 V528 Q560 438 616 394 Q696 330 800 236 Q904 330 984 394 Q1040 438 1040 528 V2100"
        fill="none"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1"
      />

      <path
        d="M102 2100 V652 Q102 572 168 504 Q232 442 330 378"
        fill="url(#frameWallLeft)"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.4"
      />
      <path
        d="M1498 2100 V652 Q1498 572 1432 504 Q1368 442 1270 378"
        fill="url(#frameWallRight)"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.4"
      />
      <path d="M0 502 Q90 428 188 502 V1180" fill="none" stroke="rgba(248,245,240,0.08)" strokeWidth="1.1" />
      <path d="M1600 502 Q1510 428 1412 502 V1180" fill="none" stroke="rgba(248,245,240,0.08)" strokeWidth="1.1" />
      <path d="M0 580 Q70 520 144 580 V1180" fill="none" stroke="rgba(248,245,240,0.04)" strokeWidth="0.9" />
      <path d="M1600 580 Q1530 520 1456 580 V1180" fill="none" stroke="rgba(248,245,240,0.04)" strokeWidth="0.9" />

      <path d="M690 734 V1710" stroke="rgba(248,245,240,0.05)" strokeWidth="1" />
      <path d="M800 734 V1710" stroke="rgba(248,245,240,0.07)" strokeWidth="1.1" />
      <path d="M910 734 V1710" stroke="rgba(248,245,240,0.05)" strokeWidth="1" />
      <path d="M600 1710 H1000" stroke="rgba(248,245,240,0.05)" strokeWidth="1" />
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

      <rect x="0" y="0" width="1080" height="2500" fill="url(#frameRoomGlow)" />

      <path
        d="M160 2500 V658 Q160 520 262 436 Q396 326 540 190 Q684 326 818 436 Q920 520 920 658 V2500"
        fill="none"
        stroke="rgba(248,245,240,0.34)"
        strokeWidth="3.4"
        filter="url(#frameSoftGlow)"
      />
      <path
        d="M256 2500 V760 Q256 636 340 560 Q432 476 540 356 Q648 476 740 560 Q824 636 824 760 V2500"
        fill="none"
        stroke="rgba(248,245,240,0.18)"
        strokeWidth="2.15"
      />
      <path d="M540 146 V2500" stroke="rgba(248,245,240,0.12)" strokeWidth="1.6" />
      <path d="M332 1010 V1720" stroke="rgba(248,245,240,0.08)" strokeWidth="1.25" />
      <path d="M748 1010 V1720" stroke="rgba(248,245,240,0.08)" strokeWidth="1.25" />
      <path d="M0 1442 H1080" stroke="rgba(248,245,240,0.1)" strokeWidth="1.35" />
    </svg>
  );
}

export default function CathedralRoomFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#030303_0%,#090303_34%,#090202_62%,#020202_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_42%_at_50%_18%,rgba(139,0,0,0.08),transparent_66%)] md:bg-[radial-gradient(70%_42%_at_50%_18%,rgba(139,0,0,0.16),transparent_66%)]" />
      <div className="absolute left-1/2 top-[10%] h-[14rem] w-[88vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,247,236,0.05),rgba(255,247,236,0.01)_28%,rgba(139,0,0,0.04)_56%,transparent_74%)] blur-2xl md:top-[8%] md:h-[20rem] md:w-[min(62rem,88vw)] md:bg-[radial-gradient(circle,rgba(255,247,236,0.08),rgba(255,247,236,0.015)_28%,rgba(139,0,0,0.07)_56%,transparent_74%)] md:blur-3xl" />
      <div className="absolute inset-x-0 bottom-[16%] h-[14rem] bg-[radial-gradient(circle_at_50%_50%,rgba(97,8,8,0.08),transparent_62%)] blur-2xl md:bottom-[12%] md:h-[20rem] md:bg-[radial-gradient(circle_at_50%_50%,rgba(97,8,8,0.12),transparent_62%)] md:blur-3xl" />
      <div className="absolute bottom-[6%] left-[-10%] h-28 w-[40%] bg-[radial-gradient(circle,rgba(184,108,34,0.14),transparent_68%)] blur-3xl md:bottom-[5%] md:left-[-8%] md:h-36 md:w-[42%] md:bg-[radial-gradient(circle,rgba(184,108,34,0.18),transparent_68%)]" />
      <div className="absolute bottom-[6%] right-[-10%] h-28 w-[40%] bg-[radial-gradient(circle,rgba(184,108,34,0.14),transparent_68%)] blur-3xl md:bottom-[5%] md:right-[-8%] md:h-36 md:w-[42%] md:bg-[radial-gradient(circle,rgba(184,108,34,0.18),transparent_68%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.34)_44%,rgba(0,0,0,0.76)_100%)]" />

      <DesktopFrame />
      <MobileFrame />
    </div>
  );
}
