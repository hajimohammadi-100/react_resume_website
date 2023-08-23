import style from "../../assets/styles/style.module.css";
import { Link } from "react-router-dom";
import { projectsData } from "../../constants/projectsData";
import { styleBoxs } from "../../constants/styleBoxs";
import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from '../../context/themeContext';
import { useTheme } from "@emotion/react";

const NextProjectBtn = ({ project }) => {
    const { language } = useContext(themeContext);
    const theme = useTheme();
    const projectPage = projectsData.length - 1;
    
    return (
        <Box
            component={'div'}
            className="nextProjectButton box"
            sx={styleBoxs(theme, language)}>
            <Link
            className={style.flex_center}
                style={{ color: theme.palette.titleColor }}
                to={`/projects/project/${project.Id === projectsData.length ? project.Id - projectPage : project.Id + 1}`}>
                {
                    language === "Pe" ? "پروژه بعدی" : "Next Project"
                }
            </Link>
        </Box>
    )
}

export default NextProjectBtn;