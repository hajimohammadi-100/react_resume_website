import style from "../../assets/styles/style.module.css";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { skills } from "../../constants/skillsData";
import { styleBoxs } from "../../constants/styleBoxs";


const SkillBoxs = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <>
            {
                skills.map((skill, index) => (
                    <Box
                        key={index}
                        className={`skill box ${style.flex_center}`}
                        sx={styleBoxs(theme, language)}>
                        <Box
                            component={'div'}
                            className={`pie ${style.flex_center}`}
                            dataSkillNumber={skill.skillNum}
                            sx={styleBoxs(theme, language)}>
                            <Typography
                                className="skillTitle"
                                sx={{
                                    color: theme.palette.titleColor,
                                    fontWeight: !isDarkMode && "bold"
                                }}>
                                {skill.skill}
                            </Typography>
                            <Box
                                component={'div'}
                                className="pieBackground"
                                sx={{
                                    background: theme.palette.boxBackground
                                }}></Box>
                            <Typography
                                className="skillNumber"
                                sx={{
                                    color: theme.palette.titleColor,
                                    fontWeight: !isDarkMode && "bold"
                                }}>
                                0
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </>
    )
}

export default SkillBoxs;