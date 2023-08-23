import "../../assets/styles/about.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Avatar, Box } from '@mui/material';
import { styleBoxs } from "../../constants/styleBoxs";
import { profiles } from "../../constants/profiles";
import { avatar1 } from "../../assets/images/"
import style from "../../assets/styles/style.module.css";
import { Link } from 'react-router-dom';

const AboutInfoBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`aboutInfo box ${style.flex_center}`}
            sx={styleBoxs(theme, language)}>
            <Avatar className='aboutInfoImg' src={avatar1} alt="avatarimage">MH</Avatar>
            <Box
                component={'div'}
                className={`socialMedias ${style.flex_around}`}>
                {
                    profiles.map((item, index) => (
                        <a
                            href={item.path}
                            target="_blank"
                            key={index}
                            role="noopener"
                            className={style.flex_center}
                            style={styleBoxs(theme, language)}>
                            {isDarkMode ? item.lightIcon : item.darkIcno}
                        </a>
                    ))
                }
            </Box>
            <Link to={"/contact"}
                className={`aboutButton ${style.flex_center}`}
                style={{
                    color: "white",
                    backgroundColor: theme.palette.button
                }}>
                {
                    language === "Pe" ? "ارتباط بامن" : "CONTACT ME"
                }
            </Link>
        </Box>
    )
}

export default AboutInfoBox;