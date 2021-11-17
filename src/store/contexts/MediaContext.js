import {createContext} from "react";
import {useMediaQuery} from "react-responsive";

export const MediaContext = createContext({
    isDesktopOrTablet: false,
    isMobile: false
})

