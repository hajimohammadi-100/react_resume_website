import { Avatar, Box, Typography } from "@mui/material";
import { avatar4, avatar8 } from "../../assets/images"
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext"

const MyAvatar = () => {
    const { language } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box component={'div'} className="avatar">
            <Avatar
                src={avatar8}
                variant="square"
                alt="avatar_image_mhhmohammadi"
                className={`avatarImage showBoxStatic`}
                sx={{
                    "&::before": {
                        background: theme.palette.linear01
                    }
                }}>MH</Avatar>
            <Box
                component={'div'}
                className="showBoxStatic2">
                <Typography
                    className="avatarText">
                    {
                        language === "Pe" ? "حاجی محمدی" : "Haji Mohammadi"
                    }
                </Typography>
            </Box>
        </Box>
    )
}

export default MyAvatar;