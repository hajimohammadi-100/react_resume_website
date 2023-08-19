import style from "../../assets/styles/style.module.css";
import { Box } from '@mui/material';
import ServiceCaptionBox from "./ServiceCaptionBox";
import ServiceDescriptionBox from "./ServiceDescriptionBox";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";


const ServicesContent = () => {
    const { language } = useContext(themeContext);

    return (
        <>
            <Helmet><title>{language === "Pe" ? "خدمات من | mhhmohammadi.ir" : "My Services | mhhmohammadi.ir"}</title></Helmet>
            
            <Box
                component={'div'}
                className={`services ${style.flex_between} ${style.flex_flow}`}>

                <ServiceCaptionBox />

                <ServiceDescriptionBox />
            </Box>
        </>
    )
}

export default ServicesContent;