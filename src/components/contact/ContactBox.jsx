import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { styleBoxs } from "../../constants/styleBoxs"
import { Icon1, Icon2 } from "../../assets/icons"
import ContactForm from "./ContactForm";


const ContactBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box component={'div'} className="contactBox box" sx={styleBoxs(theme, language)}>
            <Typography
                className="contactBoxTitle"
                sx={{
                    color: theme.palette.titleColor
                }}>
                {
                    language === "Pe" ?
                        (<>بزن بریم با هم <span>کار کنیم</span></>) :
                        (<>Let's work <span>together.</span></>)
                }
            </Typography>
            <Box
                component={'div'}
                className="ContactFromIcon"
                sx={{
                    right: language !== "Pe" && "6%",
                    left: language === "Pe" && "6%",
                }}>
                {isDarkMode ? <Icon2 /> : <Icon1 />}
            </Box>

            <ContactForm />
        </Box>
    )
}

export default ContactBox;