import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../context/themeContext.js";
import { useTheme } from "@emotion/react";
import style from "../assets/styles/style.module.css";
import "../assets/styles/pageTitle.css";


const PageTitle = ({ peTitle, enTitle, peSubTitle, enSubTitle }) => {
    const { language, isDarkMode } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            className={`pageTitle box ${style.flex_center} ${style.pageDimensions}`}>
            <Typography className="pageTitleText" sx={{
                color: theme.palette.titleColor
            }}>
                {
                    language === "Pe" ? peTitle : enTitle
                }
            </Typography>
            <Box component={'span'} className="progressbar"></Box>
            <Typography className={`pageSubTitleText ${language === "Pe" && "letterSpacingRtl"}`} sx={{
                lineHeight: 1,
                textShadow: isDarkMode ? "0px 0px 15px rgba(0, 0, 0, 0.5)" : "0px 0px 1px rgba(0, 0, 0, 0.15)"
            }}>
                {
                    language === "Pe" ? peSubTitle : enSubTitle
                }
            </Typography>
        </Box>
    )
}

export default PageTitle;