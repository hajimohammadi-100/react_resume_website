import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Icon5, Icon10 } from "../../assets/icons";
import CustomBox from "../../common/CustomBox";

const SkillsBox = () => {
    const { isDarkMode } = useContext(themeContext);

    return (
        <CustomBox
            path={"/skills"}
            peTitle={"مهارت ها"}
            peSubTitle={"قدرت های من"}
            enTitle={"My Skills"}
            enSubTitle={"SKILLS"}>
            {isDarkMode ? <Icon5 className="Box_img skills_img" /> : <Icon10 className="Box_img skills_img"/>}
        </CustomBox>
    )
}

export default SkillsBox; 