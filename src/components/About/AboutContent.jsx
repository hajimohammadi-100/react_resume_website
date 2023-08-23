import AboutBoxs from './AboutBoxs';
import ClientReviews from './ClientReviews';
import Questions from './Questions';
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";

const AboutContent = () => {
    const { language } = useContext(themeContext);

    return (
        <>
            <Helmet>
                <title>{language === "Pe" ? "درباره من | mhhmohammadi.ir" : "About Me | mhhmohammadi.ir"}</title>
            </Helmet>

            <AboutBoxs />

            <ClientReviews />

            <Questions />
        </>
    )
}

export default AboutContent;