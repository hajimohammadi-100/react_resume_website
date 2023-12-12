import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box, Link, Typography } from '@mui/material';
import { styleBoxs } from "../../constants/styleBoxs";
import style from "../../assets/styles/style.module.css";
import { Icon2, Icon1 } from "../../assets/icons";
import ResumePdf from "../../assets/pdf/index.pdf"

const AboutTextBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`aboutText box ${language === "Pe" ? style.flex_right : style.flex_left}`}
            sx={styleBoxs(theme, language)}>
            {isDarkMode ? <Icon2 style={{ left: language === "Pe" && "10%", right: language !== "Pe" && "10%" }} /> : <Icon1 style={{ left: language === "Pe" && "10%", right: language !== "Pe" && "10%", }} />}
            <Typography className='aboutTextTitle' sx={{ color: theme.palette.titleColor }}>
                {
                    language === "Pe" ? "حاجی محمدی" : "Haji Mohammadi"
                }
            </Typography>
            <Typography className='aboutTextCaption' sx={{ color: theme.palette.textColor }}>
                {
                    language === "Pe" ?
                        "محمدحسین حاجی محمدی هستم و سابقه برنامه نویسی فرانت اند و طراحی وبسایت رو به صورت حرفه‌ای دارم. من همچنین تجربه طراحی وب سایت های واکنش گرا و سازگار با موبایل دارم و می توانم با طراح های رابط کاربری ارتباط بهتری بر قرار کنم علاوه بر این، من علاقه به حل مسئله ، کار تیمی و یادگیری تکنولوژ های جدید رو دارم. هدف من در زمینه برنامه نویسی وبسایت ارائه راهکارهای نوآورانه برای بهبود عملکرد وب سایت ها می باشد" :
                        "I am Mohammad Hossain Hajimohammadi and I have professional experience in front-end programming. I also have experience designing responsive and mobile friendly websites and can communicate better with UI designers. In addition, I am interested in problem solving, teamwork and learning new technologies. My goal in the field of website programming is to provide innovative solutions to improve the performance of websites"
                }
            </Typography>
            <Box
                component={'div'}
                className={`downloadButton ${style.flex_center}`}
                style={styleBoxs(theme, language)}
                sx={{
                    left: language === "Pe" && "10px",
                    right: language !== "Pe" && "10px",
                }}>
                <Link href={ResumePdf} sx={{ color: theme.palette.titleColor }}>
                    {
                        language === "Pe" ? "دانلود رزومه" : "DOWNLOAD CV"
                    }
                </Link>
            </Box>
        </Box>
    )
}

export default AboutTextBox;