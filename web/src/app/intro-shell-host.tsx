"use client";

import dynamic from "next/dynamic";

const IntroShell = dynamic(() => import("./intro-shell"), {
  ssr: false,
  loading: () => null,
});

export default IntroShell;
