import style from "../../assets/styles/style.module.css";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { styleBoxs } from "../../constants/styleBoxs"
import { profiles } from "../../constants/profiles";
import { ContactInfoBoxData } from "../../constants/ContactInfoBoxData";

const ContactInfo = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`contactInfo box ${style.flex_flow} ${language === "Pe" ? style.flex_right : style.flex_left}`}
            sx={{ direction: language === "Pe" ? "rtl" : "ltr" }}>
            <Typography
                className="contactInfoTitle"
                sx={{ color: theme.palette.titleColor, fontWeight: !isDarkMode && "bold" }}>
                {
                    language === "Pe" ? " راه های ارتباطی" : "CONTACT INFO"
                }
            </Typography>
            {
                ContactInfoBoxData.map((data, index) => (
                    <Box
                        key={index}
                        component={'div'}
                        className={`contactInfoItem ${language === "Pe" ? style.flex_right : style.flex_left}`}>
                        <Box
                            component={'div'}
                            className={`contactInfoIcon ${style.flex_center}`}
                            sx={styleBoxs(theme, language)}>
                            {isDarkMode ? data.lightIcon : data.darkIcon}
                        </Box>
                        <Box
                            component={'div'}
                            className="contactInfoText">
                            <Typography
                                sx={{ color: theme.palette.textColor }}>
                                {
                                    language === "Pe" ? data.peTitle : data.enTitle
                                }
                            </Typography>
                            <Typography
                                sx={{ color: theme.palette.titleColor }}>
                                {
                                    language === "Pe" ? data.peDiscription : data.enDiscription
                                }
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
            <Typography
                className="contactInfoTitle"
                sx={{ color: theme.palette.titleColor, fontWeight: !isDarkMode && "bold" }}>
                {
                    language === "Pe" ? "حساب های کاربری" : "SOCIAL INFO"
                }
            </Typography>
            <Box
                component={'div'}
                className={`contactIcons ${style.flex_around}`}>
                {
                    profiles.map((item, index) => (
                        <a
                            href={item.path}
                            target="_blank"
                            key={index}
                            role="noopener"
                            className={style.flex_center}
                            style={styleBoxs(theme, language)}
                            sx={{
                                mr: language !== "Pe" && "8px",
                                ml: language === "Pe" && "8px",
                            }}>
                            {isDarkMode ? item.lightIcon : item.darkIcno}
                        </a>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ContactInfo;