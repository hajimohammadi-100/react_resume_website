import { img6 } from "../../assets/images/";
import CustomBox from "../../common/CustomBox";

const ProjectsBox = () => {

    return (
        <CustomBox
            path={"/projects"}
            peTitle={"نمونه کارها"}
            peSubTitle={"پروژه های من"}
            enTitle={"My Projects"}
            enSubTitle={"SHOWCASE"}>
            <img className="Box_img" src={img6} alt="works" />
        </CustomBox>
    )
}

export default ProjectsBox; 