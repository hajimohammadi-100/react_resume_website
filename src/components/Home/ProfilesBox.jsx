import { Box } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { styleBoxs } from "../../constants/styleBoxs";
import CustomBox from "../../common/CustomBox";
import { profiles } from "../../constants/profiles";

const ProfilesBox = () => {
    const theme = useTheme();
    const { isDarkMode, language } = useContext(themeContext);

    return (
        <CustomBox
            path={"/contact"}
            enSubTitle={"STAY WITH ME"}
            enTitle={"Profiles"}
            peSubTitle={"همراه من باش"}
            peTitle={"پروفایل ها"}>
            <Box
                component={'div'}
                className={`BoxIcons ${style.flex_center}`}>
                <Box
                    component={'div'}
                    className={`backgroundIcons ${style.flex_around}`}
                    sx={styleBoxs(theme, language)}>
                    {
                        profiles.map((item, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                className={style.flex_center}
                                sx={{display: index === 2 && "none"}}
                                style={styleBoxs(theme, language)}>
                                {isDarkMode ? item.lightIcon : item.darkIcno}
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </CustomBox>
    )
}

export default ProfilesBox; 