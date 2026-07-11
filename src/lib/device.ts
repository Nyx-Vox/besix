export function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;

  const navigatorWithHints = navigator as Navigator & {
    userAgentData?: { mobile?: boolean };
  };

  if (navigatorWithHints.userAgentData?.mobile) return true;

  const userAgent = navigator.userAgent || "";
  const mobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent);
  const iPadDesktopMode = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return mobileUserAgent || iPadDesktopMode;
}
