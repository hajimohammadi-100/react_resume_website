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
                        "من محمدحسین حاجی محمدی هستم و سه سال سابقه برنامه نویسی فرانت اند رو به صورت جدی دارم. من همچنین تجربه زیادی در طراحی وب سایت های واکنش گرا و سازگار با موبایل دارم. علاوه بر این، من دارای مهارت های حل مسئله ، کار تیمی و مدیریت زمان هستم. هدف من در زمینه طراحی و توسعه وبسایت و ارائه راهکارهای نوآورانه برای بهبود عملکرد وب سایت ها و اراعه بهترین نتیجه و کیفیت به مشتریانم امید وارم در کنار هم به بهترین دست آورد ها برسیم ممنون که رزومه من رو انتخاب کردید." :
                        "I am Mohammad Hossein Haji Mohammadi and I have three years of serious experience in front-end programming. I also have extensive experience in designing responsive and mobile-friendly websites. Additionally, I possess problem-solving skills, teamwork abilities, and time management skills. My goal is to design and develop websites and provide innovative solutions to improve website performance. I hope that together we can achieve the best results and quality for our clients. Thank you for considering my resume."
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