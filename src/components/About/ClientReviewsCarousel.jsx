import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Avatar, Box, Typography } from '@mui/material';
import { styleBoxs2 } from "../../constants/styleBoxs";
import style from "../../assets/styles/style.module.css";
import Slider from "react-slick";
import { carouselSetting } from "../../constants/carouselSetting";
import { comments } from "../../constants/clientReviewsData";
import { rateComment } from "../../constants/rateComment";

const ClientReviewsCarousel = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);
    return (
        <Slider {...carouselSetting}>
            {
                comments.map((com, index) => (
                    <Box
                        key={index}
                        component={'div'}
                        className='clientReviewsConmment'
                        sx={styleBoxs2(theme, language)}
                        style={{
                            direction: language === "Pe" ? "rtl" : "ltr"
                        }}>
                        <Box
                            component={'div'}
                            className={`clientReviewsConmmentHeader ${language === "Pe" ? style.flex_right : style.flex_left}`}>
                            <Avatar
                                className='avatarImageComment'
                                src={com.avatarImg}
                                alt="clientImg"
                                sx={{
                                    ml: language === "Pe" && "8px",
                                    mr: language !== "Pe" && "8px",
                                    background: isDarkMode ?
                                        "linear-gradient(135deg, #181818 0%, #101010 100%) padding-box, linear-gradient(90deg, #3c58e3 -15%, #a5b9fa 58%, #5ab5e2 97%) border-box" :
                                        "linear-gradient(135deg, #FFF 0%, #CACACA 100%) padding-box, linear-gradient(90deg, #3c58e3 -15%, #a5b9fa 58%, #5ab5e2 97%) border-box"
                                }}>{com.nameAbbreviation}</Avatar>
                            <Box
                                component={'div'}
                                className='clientReviewsConmmentClientInfo'>
                                <Typography sx={{
                                    color: theme.palette.titleColor
                                }}>
                                    {
                                        language === "Pe" ? com.peClientName : com.enClientName
                                    }
                                </Typography>
                                <Box
                                    component={'div'}
                                    className={`clientReviewsConmmentClientRate ${style.flex_between}`}>
                                    {
                                        rateComment(com.rate, isDarkMode)
                                    }
                                </Box>
                            </Box>
                        </Box>
                        <Typography
                            className='clientReviewsConmmentText'
                            sx={{
                                color: theme.palette.textColor
                            }}>
                            {
                                language === "Pe" ? com.peComment : com.enComment
                            }
                        </Typography>
                    </Box>
                ))
            }
        </Slider>
    )
}

export default ClientReviewsCarousel;