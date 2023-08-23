import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box, Typography } from '@mui/material';
import style from "../../assets/styles/style.module.css";
import ClientReviewsCarousel from "./ClientReviewsCarousel";

const ClientReviews = () => {
    const theme = useTheme();
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`clientReviews box ${style.pageDimensionsSmall}`}
            sx={{
                color: theme.palette.titleColor
            }}>
            <Typography className='clientReviewsTitle'>
                {
                    language === "Pe" ? "نظرات مشتریان" : "CLIENT REVIEWS"
                }
            </Typography>
            
            <ClientReviewsCarousel/>

        </Box>
    )
}

export default ClientReviews;