import { useParams } from "react-router-dom";
import { getProject } from "../../constants/projectsData";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";
import ProjectBanner from "./ProjectBanner";
import ProjectInfo from "./ProjectInfo";
import ProjectImages from "./ProjectImages";
import NextProjectBtn from "./NextProjectBtn";


const ProjectContent = () => {
    const param = useParams();
    const project = getProject(parseInt(param.Id));
    const { language } = useContext(themeContext);

    return (
        <>
            <Helmet>
                <title>{language === "Pe" ? `پروژه ${project.peTitle} | mhhmohammadi.ir` : `project ${project.enTitle} | mhhmohammadi.ir`}</title>
            </Helmet>

            <ProjectBanner project={project} />

            <ProjectInfo project={project} />

            <ProjectImages project={project} />

            <NextProjectBtn project={project} />
        </>
    )
}

export default ProjectContent;