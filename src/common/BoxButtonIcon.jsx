import { Icon3, Icon4 } from "../assets/icons";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { Box } from "@mui/material";

const BoxButtonIcon = () => {
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box>
            {isDarkMode ? <Icon3 style={{rotate: language === "Pe" && "180deg"}}/> : <Icon4 style={{rotate: language === "Pe" && "180deg"}}/>}
        </Box>
    )
}

export default BoxButtonIcon;