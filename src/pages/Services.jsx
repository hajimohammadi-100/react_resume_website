import "../assets/styles/services.css";
import PageTitle from '../common/PageTitle';
import SuggestionBoxs from "../common/SuggestionBoxs";
import ServicesContent from '../components/Services/ServicesContent';

const Services = () => {
    return (
        <>
            <PageTitle peTitle={"سرویس ها"} enTitle={"MY SERVICE "} peSubTitle={"خدمات‌من"} enSubTitle={"SERVICES"} />

            <ServicesContent/>

            <SuggestionBoxs/>
        </>
    )
}

export default Services;