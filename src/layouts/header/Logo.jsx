import { LogoLight, LogoDark } from "../../assets/icons";
import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import { Link } from "react-router-dom";

const Logo = () => {
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={language === "Pe" ? "logoHeaderLtr" : "logoHeaderRtl"}>
            <Link to={"/"}>
                {
                    isDarkMode ? <LogoDark /> : <LogoLight />
                }
            </Link>
        </Box>
    )
}

export default Logo;