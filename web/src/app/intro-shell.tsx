"use client";

import { useCallback, useState } from "react";
import { markIntroDismissed, readIntroDismissed } from "./intro-session";
import CathedralIntroOverlay from "@/components/intro/cathedral-intro-overlay";

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
      {children}
    </>
  );
}
