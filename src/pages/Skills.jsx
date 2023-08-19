import "../assets/styles/skills.css";
import PageTitle from '../common/PageTitle';
import SuggestionBoxs from "../common/SuggestionBoxs";
import SkillsContent from "../components/Skills/SkillsContent";
import { ProjectsBox } from "../components/Home";

const Skills = () => {
    return (
        <>
            <PageTitle peTitle={"مهارت ها"} enTitle={"MY SKILLS "} peSubTitle={"استعداد ها"} enSubTitle={"SKILLS"} />

            <SkillsContent/>

            <SuggestionBoxs box={<ProjectsBox />} />
        </>
    )
}

export default Skills;