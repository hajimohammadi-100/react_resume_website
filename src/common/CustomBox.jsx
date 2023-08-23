import { Box, Typography } from "@mui/material";
import style from "../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
import BoxButtonIcon from "./BoxButtonIcon";
import { styleBoxs } from "../constants/styleBoxs";

const CustomBox = ({ children, peTitle, peSubTitle, enTitle, enSubTitle, path, boxClass }) => {
    const theme = useTheme();
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`box ${boxClass ? boxClass : "Box_default"} ${style.flex_center}`} sx={styleBoxs(theme, language)}>
            <Link to={path}></Link>
            {children}
            <Box
                component={'div'}
                className={`Box_info ${style.flex_between}`}>
                <Box>
                    <Typography className="Box_subTitle"
                        sx={{
                            color: theme.palette.textColor
                        }}>
                        {
                            language === "Pe" ? peSubTitle : enSubTitle
                        }
                    </Typography>
                    <Typography className="Box_title"
                        sx={{
                            color: theme.palette.titleColor,
                        }}>
                        {
                            language === "Pe" ? peTitle : enTitle
                        }
                    </Typography>
                </Box>
                <BoxButtonIcon />
            </Box>
        </Box>
    )
}

export default CustomBox;