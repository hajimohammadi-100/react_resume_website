import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from '../../context/themeContext';

const ProjectBanner = ({project}) => {
    const { isDarkMode, language } = useContext(themeContext);
    
    return (
        <Box
            component={'div'}
            className="Banner"
            sx={{
                "& ::after": {
                    opacity: isDarkMode ? "0.2" : "0.5"
                }
            }}>
            <Box component={'div'} className="BannerContent">
                <img src={project.images[0]} alt="banner_img_website"
                    style={{
                        opacity: isDarkMode ? "0.2" : "0.19"
                    }} />
                <Box component={'div'} className="BannerTitle">
                    <Typography>{language === "Pe" ? project.peTitle : project.enTitle}</Typography>
                    <Typography>{language === "Pe" ? project.peRole : project.enRole}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectBanner;