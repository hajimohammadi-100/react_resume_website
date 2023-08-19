import style from "../../assets/styles/style.module.css";
import { styleBoxs } from "../../constants/styleBoxs";
import { Box, Chip, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from '../../context/themeContext';
import { Icon1, Icon2 } from "../../assets/icons"
import { useTheme } from "@emotion/react";

const ProjectInfo = ({ project }) => {
    const { isDarkMode, language } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            className={`projectInfo box ${style.flex_around} ${style.flex_flow}`} sx={{ direction: language === "Pe" && "rtl" }}>
            {isDarkMode ? <Icon2 className="projectInfoIcno"/> : <Icon1 className="projectInfoIcno"/>}
            <Box component={'div'} className="projectInfoDes" sx={styleBoxs(theme, language)}>
                <Typography
                    className="projectInfoTitles"
                    sx={{
                        color: theme.palette.titleColor,
                        fontWeight: !isDarkMode && "bold"
                    }}>
                    {
                        language === "Pe" ? "درباره پروژه" : "About the Project"
                    }
                </Typography>
                <Typography
                    className="projectInfoDesText"
                    sx={{ color: theme.palette.textColor }}>
                    {
                        language === "Pe" ? project.peDescription : project.enDescription
                    }
                </Typography>
            </Box>
            <Box
                component={'div'}
                className={`projectInfoBox box ${language === "Pe" ? style.flex_right : style.flex_left}`}
                sx={styleBoxs(theme, language)}>
                <Box component={'div'} className="projectInfoBoxItem">
                    <Typography
                        className="projectInfoTitles"
                        sx={{
                            color: theme.palette.titleColor,
                            fontWeight: !isDarkMode && "bold"
                        }}>
                        {language === "Pe" ? "خدمات" : "Services"}
                    </Typography>
                    <Typography
                        className="projectInfoBoxText"
                        sx={{
                            color: theme.palette.textColor
                        }}>
                        {language === "Pe" ? project.peRole : project.enRole}
                    </Typography>
                </Box>
                <Box component={'div'} className="projectInfoBoxItem">
                    <Typography
                        className="projectInfoTitles"
                        sx={{
                            color: theme.palette.titleColor,
                            fontWeight: !isDarkMode && "bold"
                        }}>
                        {language === "Pe" ? "تاریخ" : "Date"}
                    </Typography>
                    <Typography
                        className="projectInfoBoxText"
                        sx={{
                            color: theme.palette.textColor
                        }}>
                        {language === "Pe" ? project.peDate : project.enDate}
                    </Typography>
                </Box>
                <Box component={'div'} className="projectInfoBoxItem">
                    <Typography
                        className="projectInfoTitles"
                        sx={{
                            color: theme.palette.titleColor,
                            fontWeight: !isDarkMode && "bold"
                        }}>
                        {language === "Pe" ? "موارد استفاده شده" : "Used items"}
                    </Typography>
                    <Box
                        className="projectInfoBoxText"
                        sx={{
                            color: theme.palette.textColor
                        }}>
                        {
                            project.items.map((item, index) => (
                                <Chip
                                    key={index}
                                    label={item}
                                    sx={{
                                        backgroundColor: theme.palette.button,
                                        padding: "19px 5px",
                                        color: "white",
                                        mr: language !== "1px",
                                        ml: language === "1px",
                                        letterSpacing: "0.6px",
                                        mb: "8px"
                                    }} />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectInfo;