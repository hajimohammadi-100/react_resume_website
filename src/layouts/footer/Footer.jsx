import "../../assets/styles/footer.css";
import { LogoLight, LogoDark } from "../../assets/icons";
import style from "../../assets/styles/style.module.css";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import { useTheme } from "@emotion/react";
import FooterTabs from "./FooterTabs";
import { Link } from "react-router-dom";

const Footer = () => {
    const { language, isDarkMode } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'footer'}
            className={`footer ${style.flex_center} ${style.pageDimensions}`}>
            <Box
                component={'div'}
                className="footerLogo">
                <Link to={"/"}>
                    {
                        isDarkMode ? <LogoDark /> : <LogoLight />
                    }
                </Link>
            </Box>
            <FooterTabs />
            <Typography
                className="footerCopyRight"
                sx={{
                    color: theme.palette.tabColor
                }}>
                {
                    language === "Pe" ?
                        "© .تمام حقوق مادی و معنوی این سایت متعلق به محمد حسین حاجی محمدی می باشد" :
                        "© All rights reserved by mohammad hosein haji mohammadi."
                }
            </Typography>
        </Box>
    )
}

export default Footer;