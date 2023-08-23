import style from "../../assets/styles/style.module.css";
import { Box } from "@mui/material";

const ProjectImages = ({ project }) => {    
    return (
        <Box
            component={'div'}
            className={`projectImages ${style.flex_flow} ${style.flex_between}`}>
            {
                project.images.map((img, index) => (
                    <Box
                        key={index}
                        component={'div'}
                        className="projectImage box">
                        <img src={img} alt="image" />
                    </Box>
                ))
            }
        </Box>
    )
}

export default ProjectImages;