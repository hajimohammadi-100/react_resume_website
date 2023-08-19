import { Box } from '@mui/material';
import { ContactBox } from '../components/Home';
import { ProfilesBox } from '../components/Home';
import { SkillsBox } from '../components/Home';
import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const SuggestionBoxs = ({ box }) => {
    const { language, matches } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className="homeContent"
            sx={{
                direction: language === "Pe" ? "rtl" : "ltr"
            }}>
            <ProfilesBox />
            {
                matches ?
                    (
                        <>
                            {box ? box : <SkillsBox />}
                            <ContactBox />
                        </>
                    )
                    :
                    (
                        <>
                            <ContactBox />
                            {box ? box : <SkillsBox />}
                        </>
                    )

            }
        </Box>
    )
}
export default SuggestionBoxs;