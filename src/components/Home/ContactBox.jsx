import { Box, Typography } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
import { Icon2, Icon1 } from "../../assets/icons";
import { styleBoxs } from "../../constants/styleBoxs";
import BoxButtonIcon from "../../common/BoxButtonIcon";

const ContactBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`Box_Big BoxContact box ${style.flex_center}`} sx={styleBoxs(theme, language)}>
            <Link to={"/contact"}></Link>
            <Box
                component={'div'}
                className="ContactIcon"
                sx={{
                    left: language !== "Pe" && "8%",
                    right: language === "Pe" && "8%",
                }}>
                {isDarkMode ? <Icon2 /> : <Icon1 />}
            </Box>
            <Box
                component={'div'}
                className={`Box_info ContactBoxContent ${style.flex_between}`}>
                <Typography
                    className="ContactBoxContentTitle"
                    sx={{
                        color: theme.palette.titleColor
                    }}>
                    {
                        language === "Pe" ?
                            (<>بزن بریم<br /> با هم <span>کار کنیم</span></>) :
                            (<>Let's <br />work <span>together.</span></>)
                    }
                </Typography>
                <BoxButtonIcon />
            </Box>
        </Box>
    )
}

export default ContactBox;