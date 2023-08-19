import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";

const ContactButton = () => {
    const { language } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            className={`contactButton ${style.flex_center}`}
            sx={{ backgroundColor: theme.palette.button }}>
            <Link to={"/contact"}
                style={{
                    color: "white"
                }}>
                {
                    language === "Pe" ? "ارتباط بامن" : "Let's Talk"
                }
            </Link>
        </Box>
    )
}

export default ContactButton;