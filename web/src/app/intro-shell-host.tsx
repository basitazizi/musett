"use client";

import dynamic from "next/dynamic";

const IntroShell = dynamic(() => import("./intro-shell"), {
  ssr: false,
});

export default IntroShell;

