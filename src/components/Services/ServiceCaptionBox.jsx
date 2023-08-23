import style from "../../assets/styles/style.module.css";
import { Box, Typography } from '@mui/material';
import { servicesIcons } from "../../constants/servicesIcons";
import { useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { useTheme } from '@emotion/react';
import { styleBoxs } from "../../constants/styleBoxs";


const ServiceCaptionBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`ServiceCaption box ${style.flex_center}`}
            sx={styleBoxs(theme, language)}>
            {
                servicesIcons.map((item, index) => (
                    <Box
                        key={index}
                        component={'div'}
                        className={`serviceItem`}
                        sx={{ justifyContent: language === "Pe" ? "right" : "left" }}>
                        <Box key={index}>
                            {isDarkMode ? item.lightIcon : item.darkIcno}
                        </Box>
                        <Typography
                            sx={{
                                color: theme.palette.titleColor,
                                mr: language === "Pe" && "8px",
                                ml: language !== "Pe" && "8px",
                            }}>
                            {
                                language === "Pe" ? item.peTitle : item.enTitle
                            }
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default ServiceCaptionBox;