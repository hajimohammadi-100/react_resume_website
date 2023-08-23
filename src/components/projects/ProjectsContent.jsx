import "../../assets/styles/projects.css";
import { Box } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import Project from "./Project";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";


const ProjectsContent = () => {
    const { language } = useContext(themeContext);

    return (
        <>
            <Helmet><title>{language === "Pe" ? "پروژه های من | mhhmohammadi.ir" : "My Projects | mhhmohammadi.ir"}</title></Helmet>
            
            <Box component={'div'}
                className={`projects ${style.flex_between} ${style.flex_flow}`}>

                <Project />

            </Box>
        </>
    )
}

export default ProjectsContent;