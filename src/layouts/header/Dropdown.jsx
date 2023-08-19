import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LanguageRounded } from '@mui/icons-material';
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";

const Dropdown = ({ color, bgColor }) => {
    const { language, setLanguage } = useContext(themeContext);

    return (
        <Select
            value={language}
            onChange={(val) => setLanguage(val.target.value)}
            IconComponent={LanguageRounded}
            className={`tabSelect ${language === "Pe" && "tabSelectRtl"}`}
            sx={{
                backgroundColor: "transparent",
                border: 0,
                color: color,
                fontWeight: "500",
                ".MuiSelect-select": {
                    border: 0,
                    py: "8px",
                    px: 0,
                    width: 69,
                    borderColor: "transparent",
                },
                ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent"
                },
                ".MuiSelect-icon": {
                    color: color,
                },
                ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":{
                    background: bgColor
                }
            }}>
            <MenuItem value={"Pe"}>Persian</MenuItem>
            <MenuItem value={"En"}>English</MenuItem>
        </Select>
    );
}

export default Dropdown;