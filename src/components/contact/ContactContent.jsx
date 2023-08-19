import style from "../../assets/styles/style.module.css";
import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import ContactBox from "./ContactBox";
import ContactInfo from "./ContactInfo";
import { Helmet } from "react-helmet-async";


const ContactContent = () => {
    const { language } = useContext(themeContext);

    return (
        <>
            <Helmet>
                <title>{language === "Pe" ? "ارتباط با من | mhhmohammadi.ir" : "Contact Me | mhhmohammadi.ir"}</title>
            </Helmet>

            <Box component={'div'} className={`contactContent ${style.flex_flow} ${style.flex_between}`} sx={{ direction: language === "Pe" ? "ltr" : "rtl" }}>

                <ContactBox />

                <ContactInfo />

            </Box>
        </>
    )
}

export default ContactContent;