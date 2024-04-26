import { Avatar, Box, Typography } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { avatar1 } from "../../assets/images/";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { styleBoxs } from "../../constants/styleBoxs";

const AvatarInfoBox = () => {
    const theme = useTheme();
    const { language } = useContext(themeContext);
    
    return (
        <Box
            component={'div'}
            className={`Box_Big box avatarInfo ${style.flex_center}`}
            sx={styleBoxs(theme, language)}>
            <Box
                component={'div'}
                className="avatarInfoImage"
                sx={{
                    mr: language !== "Pe" && "15px",
                    ml: language === "Pe" && "15px"
                }}>
                <Avatar
                    variant="square"
                    src={avatar1}
                    alt="Picture"
                    sx={{
                        width: 1,
                        height: 1,
                        borderBottomRightRadius: "18px"
                    }}>MH
                </Avatar>
            </Box>
            <Box
                component={'div'}
                className="avatarInfoText">
                <Typography
                    className="avatarInfoTextSubtitle"
                    sx={{
                        color: theme.palette.textColor
                    }}>
                    {
                        language === "Pe" ? "برنامه نویس فرانت اند" : "A FRONTEND DEVELOPER"
                    }
                </Typography>
                <Typography
                    className="avatarInfoTextTitle"
                    sx={{
                        color: theme.palette.titleColor,
                    }}>
                    {
                        language === "Pe" ? "محمد حسین حاجی محمدی" : "Mohammad Hosein Haji Mohammadi"
                    }
                </Typography>
                <Typography
                    className="avatarInfoTextCaption"
                    sx={{
                        color: theme.palette.textColor
                    }}>
                    {
                        language === "Pe" ?
                            "محمد حسین حاجی محمدی هستم برنامه نویس فرانت اند و طراح وبسایت" :
                            "I front-end programmer and website designer"
                    }
                </Typography>
            </Box>
        </Box>
    )
}

export default AvatarInfoBox; 