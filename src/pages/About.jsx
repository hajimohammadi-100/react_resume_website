import "slick-carousel/slick/slick.css";
import "../assets/styles/about.css";
import PageTitle from '../common/PageTitle';
import AboutContent from "../components/About/AboutContent";
import SuggestionBoxs from "../common/SuggestionBoxs";

const About = () => {
    return (
        <>
            <PageTitle peTitle={"درباره من"} enTitle={"ABOUT ME"} peSubTitle={"درباره‌من"} enSubTitle={"ABOUT"} />

            <AboutContent/>

            <SuggestionBoxs/>
        </>
    )
}

export default About;