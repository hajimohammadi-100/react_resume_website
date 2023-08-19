import { mobilMenuTabs } from "../../constants/mobilMenuTabs";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import { useTheme } from "@emotion/react";

const MobileMenu = () => {
    const { language, activeMenu, setActiveMenu, menuStatus, setMenuStatus } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            className="menuMobil"
            sx={{
                background: theme.palette.backgroundMenu,
                animationName: menuStatus,
                animationDuration: activeMenu ? "1s" : "1.5s"
            }}>
            {
                mobilMenuTabs.map((tab, index) => (
                    <Link
                        key={index}
                        onClick={() => {
                            setActiveMenu(false);
                            activeMenu && setMenuStatus("menuMobilClose");
                        }}
                        style={{
                            color: theme.palette.titleColor,
                            letterSpacing: language === "Pe" ? "2px" : "3px"
                        }}
                        to={tab.path}>
                        {
                            language === "Pe" ? tab.peText : tab.enText
                        }
                    </Link>
                ))
            }
        </Box>
    )
}

export default MobileMenu;