import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box } from '@mui/material';
import { LampDark, LampLight } from "../../assets/icons"
// import { LampDark, LampLight } from "../../assets/images/"

const QuestionLampIcon = () => {
    const { language, isDarkMode, matches } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className='questionsImage'
            sx={{
                textAlign: language === "Pe" ? "left" : "right"
            }}>
            {
                isDarkMode ? 
                <LampDark style={{ transform: matches ? language === "Pe" ? "rotate(30deg)" : "rotate(-30deg)" : "rotate(0deg)" }}/> : 
                <LampLight style={{ transform: matches ? language === "Pe" ? "rotate(30deg)" : "rotate(-30deg)" : "rotate(0deg)" }}/>
            }
        </Box>
    )
}

export default QuestionLampIcon;