import style from "../../assets/styles/style.module.css";
import SkillBoxs from "./SkillBoxs";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { skillsAnimation } from "../../constants/skillsAnimation";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";


const SkillsContent = () => {
    const { language } = useContext(themeContext);

    useEffect(() => {
        skillsAnimation();
    }, [])

    return (
        <>
            <Helmet><title>{language === "Pe" ? "مهارت های من | mhhmohammadi.ir" : "My Skills | mhhmohammadi.ir"}</title></Helmet>
            
            <Box
                component={'div'}
                className={`skills ${style.flex_between} ${style.flex_flow}`}>

                <SkillBoxs />

            </Box>
        </>
    )
}

export default SkillsContent;