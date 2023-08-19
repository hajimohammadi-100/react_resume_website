import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import { useTheme } from "@emotion/react";

const HamburgerMenu = () => {
    const { language, activeMenu, setActiveMenu, setMenuStatus } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            onClick={() => {
                setActiveMenu(prev => !prev);
                activeMenu ? setMenuStatus("menuMobilClose") : setMenuStatus("menuMobilOpen")
            }}
            className={`hamburger hamburger--spin-r ${activeMenu && "is-active"} ${language === "Pe" ? "hamburgerRtl" : "hamburgerLtr"}`}>
            <Box
                component={'span'}
                className="hamburger-box">
                <Box
                    component={'span'}
                    className="hamburger-inner"
                    sx={{
                        backgroundColor: theme.palette.titleColor,
                        direction: language === "Pe" ? "ltr" : "rtl",
                        "&::after": {
                            backgroundColor: theme.palette.titleColor,
                            width: "22px"
                        },
                        "&::before": {
                            backgroundColor: theme.palette.titleColor,
                            width: "30px"
                        }
                    }}>
                </Box>
            </Box>
        </Box>
    )
}

export default HamburgerMenu;