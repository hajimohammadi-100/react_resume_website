import style from "../../assets/styles/style.module.css";
import { Box } from "@mui/material";
import CustomBoxProject from "../../common/CustomBoxProject";
import { projectsData } from "../../constants/projectsData";

const Project = () => {
    return (
        <>
            {
                projectsData.map((project, index) => (
                    <CustomBoxProject 
                        key={index}
                        path={`/projects/project/${project.Id}`}
                        enTitle={project.enTitle}
                        enSubTitle={project.enRole}
                        peTitle={project.peTitle}
                        peSubTitle={project.peRole}
                        boxClass={project.boxClass}>
                        <Box component={'div'} className={`projectImg ${!project.boxClass && "imgSmall"} ${style.flex_around}`}>
                            <img src={project.images[0]} alt={project.enTitle} />
                        </Box>
                    </CustomBoxProject>
                ))
            }
        </>
    )
}

export default Project;