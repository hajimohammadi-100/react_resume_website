import style from "../../assets/styles/style.module.css";
import { Box, Typography } from '@mui/material';
import { servicesIcons } from "../../constants/servicesIcons";
import { useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { useTheme } from '@emotion/react';
import { styleBoxs } from "../../constants/styleBoxs";


const ServiceDescriptionBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`ServiceDescription box ${style.flex_center} ${style.flex_flow}`}
            sx={styleBoxs(theme, language)}>
            <Box
                component={'div'}
                className={`ServiceDescriptionItems ${style.flex_between} ${style.flex_flow}`}
                sx={{ direction: language === "Pe" ? "rtl" : "ltr" }}>
                {
                    servicesIcons.map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            className={`serviceDescriptionItem ${index === 1 && "serviceMargin"} ${index === 0 && "serviceMargin"}`}
                            sx={styleBoxs(theme, language)}
                            style={{ direction: language === "Pe" ? "rtl" : "ltr" }}>
                            <Box
                                component={'div'}
                                className={`serviceDescriptionItemTitle ${style.flex_between}`}>
                                <Typography
                                    sx={{
                                        color: theme.palette.textColor,
                                    }}>
                                    {
                                        language === "Pe" ? item.peTitle : item.enTitle
                                    }
                                </Typography>
                                <Box key={index}>
                                    {isDarkMode ? item.lightIcon : item.darkIcno}
                                </Box>
                            </Box>
                            <Typography
                                className='serviceDescriptionItemText'
                                sx={{
                                    color: theme.palette.textColor,
                                    direction: language === "Pe" ? "rtl" : "ltr"
                                }}>
                                {
                                    language === "Pe" ? item.peDescription : item.enDescription
                                }
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ServiceDescriptionBox;