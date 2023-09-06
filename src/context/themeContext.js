import { createContext } from "react";

export const themeContext = createContext({
    isDarkMode: true,
    setIsDarkMode: () => { },
    language: "Pe",
    setLanguage: () => { },
    activeMenu: false,
    setActiveMenu: () => { },
    matches: () => { },
    setAccordion: () => { },
    accordion: false,
    menuStatus: "defult",
    setMenuStatus: () => { },
});