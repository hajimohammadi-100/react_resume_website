import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import style from "../../assets/styles/style.module.css";
import HeaderTabs from "./HeaderTabs";
import MobileMenu from "./MobileMenu.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import ToggleButton from "./ToggleButton.jsx";
import ContactButton from "./ContactButton.jsx";
// import {
//     HeaderTabs,
//     MobileMenu,
//     HamburgerMenu,
//     ToggleButton,
//     ContactButton
// }from ".";

const HeaderContent = () => {
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`${language === "Pe" ? "headerContentRtl" : "headerContentLtr"} ${style.flex_between}`}
            sx={{ width: "100%" }}>

            <HeaderTabs />

            <ContactButton />
            
            <ToggleButton />

            <HamburgerMenu />
            
            <MobileMenu />
        </Box>
    )
}

export default HeaderContent;