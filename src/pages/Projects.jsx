import "../assets/styles/projects.css";
import PageTitle from '../common/PageTitle';
import SuggestionBoxs from "../common/SuggestionBoxs";
import ProjectsContent from "../components/projects/ProjectsContent";

const Projects = () => {
    return (
        <>
            <PageTitle peTitle={"پروژه های من"} enTitle={"MY PROJECTS"} peSubTitle={"نمونه کارها"} enSubTitle={"PROJECTS"} />

            <ProjectsContent />

            <SuggestionBoxs />
        </>
    )
}

export default Projects;