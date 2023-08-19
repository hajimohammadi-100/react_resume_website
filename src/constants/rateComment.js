import { Box } from "@mui/material";
import { Icon23, Icon24 } from "../assets/icons";

export const rateComment = (rateNum,isDarkMode) => {
    let rate = [];
    for (let i = 1; i <= rateNum; i++) {
        rate.push(<Box key={i}>{isDarkMode ? <Icon23/> : <Icon24/>}</Box>);
    }
    return rate;
}