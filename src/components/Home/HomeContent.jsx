import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Helmet } from "react-helmet-async";
import {
    AvatarInfoBox,
    AboutMeBox,
    ProjectsBox,
    SkillsBox,
    ServicesBox,
    ProfilesBox,
    CounterBox,
    ContactBox
} from "./";
const HomeContent = () => {
    const { language, matches } = useContext(themeContext);

    return (
        <>
            <Helmet>
                <title>{language === "Pe" ? "صفحه اصلی | mhhmohammadi.ir" : "Home Page | mhhmohammadi.ir"}</title>
            </Helmet>

            <Box component={'div'} className="homeContent" sx={{direction: language === "Pe" ? "rtl" : "ltr"}}>

                <AvatarInfoBox />

                <AboutMeBox />

                <ProjectsBox />

                <SkillsBox />

                {
                    matches ?
                        (
                            <>
                                <ProfilesBox />
                                <ServicesBox />
                            </>
                        )
                        :
                        (
                            <>
                                <ServicesBox />
                                <ProfilesBox />
                            </>
                        )

                }

                <CounterBox />

                <ContactBox />
            </Box>
        </>
    )
}

export default HomeContent;