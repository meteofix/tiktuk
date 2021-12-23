import { createContext } from "react";

export const MediaContext = createContext({
  isDesktopOrTablet: false,
  isMobile: false,
});
