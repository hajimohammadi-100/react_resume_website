import { Box } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext.js";
import { useTheme } from "@emotion/react";
import { footerTabs } from "../../constants/footerTabs";
import "../../assets/styles/footer.css";

const FooterTabs = () => {
    const { language } = useContext(themeContext);
    const theme = useTheme();

    return (
        <Box
            component={'div'}
            sx={{
                direction:language === "Pe" && "rtl"
            }}
            className={`footerTabs ${style.flex_around}`}>
            {
                footerTabs.map((item, index) => (
                    <Link key={index} to={item.path}
                        style={{
                            color: theme.palette.tabColor,
                        }}>
                        {
                            language === "Pe" ? item.peTitle : item.enTitle
                        }
                    </Link>
                ))
            }
        </Box>
    )
}

export default FooterTabs;