import { Box, Typography } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import CountUp from "react-countup";
import { styleBoxs } from "../../constants/styleBoxs";
import { counterInfo } from "../../constants/counterInfo";

const CounterBox = () => {
    const theme = useTheme();
    const { language } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`Box_Big Counter box ${style.flex_around}`} sx={styleBoxs(theme, language)}>
            {
                counterInfo.map((item, index) => (
                    <Box
                        key={index}
                        component={'div'}
                        className="CounterBox"
                        sx={styleBoxs(theme, language)}>
                        <Typography
                            className="CounterBoxNum"
                            sx={{ color: theme.palette.titleColor }}>
                            +
                            <CountUp start={0} end={item.number} duration={item.duration} />
                        </Typography>
                        <Typography
                            className="CounterBoxTitle"
                            sx={{ color: theme.palette.textColor }}>
                            {
                                language === "Pe" ? (item.peTitle) : (item.enTitle)
                            }
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default CounterBox; 