"use client";

import { useCallback, useState } from "react";
import { markIntroDismissed, readIntroDismissed } from "./intro-session";
import CathedralBorderOverlay from "@/components/intro/cathedral-border-overlay";
import CathedralIntroOverlay from "@/components/intro/cathedral-intro-overlay";
import DustParticles from "@/components/visual/dust-particles";

export default function IntroShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, setOpened] = useState(() => readIntroDismissed());

  const handleOpened = useCallback(() => {
    setOpened(true);
    markIntroDismissed();
  }, []);

  return (
    <>
      {!opened ? <CathedralIntroOverlay onOpened={handleOpened} /> : null}
      <CathedralBorderOverlay visible={opened} />
      <DustParticles visible={opened} />
      {children}
    </>
  );
}
