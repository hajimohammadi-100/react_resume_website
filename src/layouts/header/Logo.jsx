import { LogoLight, LogoDark } from "../../assets/icons";
import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";

const Logo = () => {
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={language === "Pe" ? "logoHeaderLtr" : "logoHeaderRtl"}>
            {
                isDarkMode ? <LogoDark/> : <LogoLight/>
            }
        </Box>
    )
}

export default Logo;