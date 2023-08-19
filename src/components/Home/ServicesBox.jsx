import { Box } from "@mui/material";
import style from "../../assets/styles/style.module.css";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import CustomBox from "../../common/CustomBox";
import { servicesIcons } from "../../constants/servicesIcons";

const ServicesBox = () => {
    const { isDarkMode } = useContext(themeContext);

    return (
        <CustomBox
        path={"/services"}
        enTitle={"Services Offering"}
        enSubTitle={"SPECIALIZATION"}
        peTitle={"سرویس ها"}
        peSubTitle={"خدمات من"}
        boxClass={"Box_Big"}>
            <Box component={'div'} className={`BoxIcons ${style.flex_around}`}>
                {
                    servicesIcons.map((item,index) => (
                        <Box key={index}>
                            {isDarkMode ? item.lightIcon : item.darkIcno}
                        </Box>
                    ))
                }
            </Box>
        </CustomBox>
    )
}

export default ServicesBox; 