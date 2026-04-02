"use client";

import { useCallback, useState } from "react";
import CathedralIntroOverlay from "@/components/intro/cathedral-intro-overlay";

export default function IntroShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, setOpened] = useState(false);

  const handleOpened = useCallback(() => {
    setOpened(true);
  }, []);

  return (
    <>
      {!opened ? <CathedralIntroOverlay onOpened={handleOpened} /> : null}
      {children}
    </>
  );
}
