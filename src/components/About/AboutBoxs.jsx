import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box } from '@mui/material';
import style from "../../assets/styles/style.module.css";
import AboutInfoBox from "./AboutInfoBox";
import AboutTextBox from "./AboutTextBox";

const AboutBoxs = () => {
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`about ${style.pageDimensionsSmall}`}
            sx={{
                direction: language === "Pe" ? "rtl" : "ltr"
            }}>
            <Box
                component={'div'}
                className={`${style.flex_between} ${style.flex_flow}`}>

                <AboutInfoBox />

                <AboutTextBox />
            </Box>
        </Box>
    )
}

export default AboutBoxs;