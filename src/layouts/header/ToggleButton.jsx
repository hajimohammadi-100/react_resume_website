import { Box } from "@mui/material";
import { useContext, useRef } from "react";
import { themeContext } from "../../context/themeContext.js";
import DarkModeToggle from "react-dark-mode-toggle";
import style from "../../assets/styles/style.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const ToggleButton = () => {
    const { isDarkMode, setIsDarkMode } = useContext(themeContext);
    const matches = useMediaQuery('(max-width:450px)');
    const ref = useRef();

    return (
        <Box
            component={'div'}
            ref={ref}
            className={`${isDarkMode ? "toggleButtonDark" : "toggleButtonLight"} ${style.flex_center}`}
            sx={{
                direction: "ltr"
            }}>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={matches ? 85 : 105}
            />
        </Box>
    )
}

export default ToggleButton;