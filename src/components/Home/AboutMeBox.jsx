import { img7 } from "../../assets/images/";
import CustomBox from "../../common/CustomBox";

const AboutMeBox = () => {
    return (
        <CustomBox
            path={"/about"}
            peTitle={"درباره من"}
            peSubTitle={"من کی هستم"}
            enTitle={"Credentials"}
            enSubTitle={"ABOUT ME"}>
            <img className="Box_img" src={img7} alt="Signature" />
        </CustomBox>
    )
}

export default AboutMeBox; 