"use client";

export const INTRO_SESSION_KEY = "yourmuse:introDismissed:v1";

let introDismissedMemory = false;

export function readIntroDismissed() {
  if (introDismissedMemory) return true;

  if (typeof window === "undefined") return false;

  try {
    const dismissed = sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
    if (dismissed) introDismissedMemory = true;
    return dismissed;
  } catch {
    return introDismissedMemory;
  }
}

export function markIntroDismissed() {
  introDismissedMemory = true;

  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
  } catch {
    // Ignore storage failures; the in-memory flag still prevents remount flicker.
  }
}

