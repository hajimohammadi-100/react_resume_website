import { Box, Typography } from "@mui/material";
import style from "../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
import BoxButtonIcon from "./BoxButtonIcon";
import { styleBoxs } from "../constants/styleBoxs";
import { OpenDark, OpenLight } from "../assets/icons";

const CustomBoxProject = ({ children, peTitle, peSubTitle, enTitle, enSubTitle, path, boxClass, isShared,SharedPath }) => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`box ${boxClass ? boxClass : "Box_project_default"} ${style.flex_center}`} sx={styleBoxs(theme, language)}>
            <Link className="redirector" to={path}></Link>
            <a href={SharedPath} target="_blank" className="SharedProject">
                {
                    isShared ? isDarkMode ? <OpenDark /> : <OpenLight /> : null
                }
            </a>
            {children}
            <Box
                component={'div'}
                className={`Box_project_info ${style.flex_between}`}>
                <Box>
                    <Typography className="Box_project_subTitle"
                        sx={{
                            color: theme.palette.textColor
                        }}>
                        {
                            language === "Pe" ? peSubTitle : enSubTitle
                        }
                    </Typography>
                    <Typography className="Box_project_title"
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

export default CustomBoxProject;