import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import style from "../../assets/styles/style.module.css";
import Logo from "./Logo.jsx";
import HeaderContent from "./HeaderContent.jsx";
import '../../assets/styles/header.css';

const Header = () => {
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'header'}
            className={`header ${style.flex_between}`}
            sx={{
                direction:language === "Pe" ? "rtl" : "ltr"
            }}>
            
            <Logo />
            
            <HeaderContent />
        </Box>
    )
}

export default Header;