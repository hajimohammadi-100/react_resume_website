import '../assets/styles/notFound.css';
import style from '../assets/styles/style.module.css';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { themeContext } from '../context/themeContext';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <>
            <Box
                component={'div'}
                className={`notFound ${style.flex_center}`}>
                <Typography variant='h1' sx={{ color: theme.palette.titleColor }} className='notFoundTitle'>404</Typography>
                <Typography variant='h2' sx={{ color: theme.palette.titleColor }} className='notFoundSubTitle'>
                    {
                        language === "Pe" ? "...گشتم نبود نگرد" : "Page Not Found !"
                    }
                </Typography>
                <Typography variant='body1' sx={{ color: theme.palette.textColor }} className='notFoundCaption'>
                    {
                        language === "Pe" ?
                            "متأسفیم، صفحه ای که به دنبال آن بودید در اینجا یافت نشد." :
                            "The page you were looking for could not be found."
                    }
                </Typography>
                <Link
                    to={"/"}
                    className={`notFoundButton ${style.flex_center}`}
                    style={{
                        color: theme.palette.textColor,
                        border: `2px solid ${theme.palette.textColor}`,
                        fontWeight: !isDarkMode && "bold"
                    }}>
                    {
                        language === "Pe" ? "صفحه اصلی" : "Home page"
                    }
                </Link>
            </Box>
        </>
    )
}

export default NotFound;