import "../assets/styles/contact.css";
import PageTitle from '../common/PageTitle';
import ContactContent from "../components/contact/ContactContent";

const Contact = () => {
    return (
        <>
            <PageTitle peTitle={"ارتباط بامن"} enTitle={"CONTACT ME"} peSubTitle={"تماس بامن"} enSubTitle={"CONTACT"} />

            <ContactContent />
        </>
    )
}

export default Contact;