import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import { themeContext } from "../../context/themeContext.js";
import { useTheme } from "@emotion/react";
import Dropdown from "./Dropdown.jsx";
import style from "../../assets/styles/style.module.css";

const HeaderTabs = () => {
    const { language, isDarkMode } = useContext(themeContext);
    const theme = useTheme();
    const location = useLocation();
    const activeTabHome = useRef();
    const activeTabAbout = useRef();
    const activeTabWorks = useRef();

    useEffect(() => {
        const checkActiveTab = (name, path) => {
            if (location.pathname === path) {
                if (isDarkMode) {
                    name.current.classList = "activeTabDark";
                } else {
                    name.current.classList = "activeTabLight";
                }
            } else {
                name.current.classList = "defaultTab";
            }
        }

        checkActiveTab(activeTabHome, "/");
        checkActiveTab(activeTabAbout, "/about");
        checkActiveTab(activeTabWorks, "/projects");
    }, [location.pathname, isDarkMode])

    return (
        <Box
            component={'div'}
            className={`${language === "Pe" ? "headerContentTabsRtl" : "headerContentTabsLtr"} ${style.flex_between}`}>
            <Box
                component={'div'}
                className={language === "Pe" ? "tabHomeLtr" : "tebHomeRtl"}>
                <Link
                    to={"/"}
                    ref={activeTabHome}
                    style={{ color: theme.palette.tabColor }}>
                    {
                        language === "Pe" ? "صفحه اصلی" : "Home"
                    }
                </Link>
            </Box>

            <Box
                component={'div'}
                className={language === "Pe" ? "tabAboutLtr" : "tebAboutRtl"}>
                <Link
                    to={"/about"}
                    ref={activeTabAbout}
                    style={{
                        color: theme.palette.tabColor,
                    }}>
                    {
                        language === "Pe" ? "درباره من" : "About"
                    }
                </Link>
            </Box>

            <Box
                component={'div'}
                className={language === "Pe" ? "tabWorksLtr" : "tebWorksRtl"}>
                <Link
                    to={"/projects"}
                    ref={activeTabWorks}
                    style={{
                        color: theme.palette.tabColor
                    }}>
                    {
                        language === "Pe" ? "نمونه کارها" : "Works"
                    }
                </Link>
            </Box>

            <Dropdown color={theme.palette.tabColor} bgColor={theme.palette.boxBackground}/>
        </Box>
    )
}

export default HeaderTabs;