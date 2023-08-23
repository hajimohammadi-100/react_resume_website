import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box, Typography } from '@mui/material';
import QuestionsAccordion from "./QuestionsAccordion";
import QuestionLampIcon from "./QuestionLampIcon";
import style from "../../assets/styles/style.module.css";

const Questions = () => {
    const theme = useTheme();
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`questions box ${style.pageDimensionsSmall} ${style.flex_between}`}
            sx={{
                color: theme.palette.titleColor,
                direction: language === "Pe" ? "rtl" : "ltr"
            }}>
            <Box
                component={'div'}
                className='questionsContent'>
                <Typography className='questionsContentTitle'>
                    {
                        language === "Pe" ? "سوال های متعدد شما ؟" : "Have any questions?"
                    }
                </Typography>

                <QuestionsAccordion />

            </Box>

            <QuestionLampIcon />
        
        </Box>
    )
}

export default Questions;
