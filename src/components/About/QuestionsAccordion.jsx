import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import { questionsData } from "../../constants/questionsData";
import { accordionHandle } from "../../constants/accordionHandle";

const QuestionsAccordion = () => {

    const theme = useTheme();
    const { language, isDarkMode, accordion, setAccordion } = useContext(themeContext);
    return (
        <Box>
            {
                questionsData.map((question, index) => (
                    <Accordion
                        key={index}
                        expanded={accordion === `panel${index + 1}`}
                        onChange={accordionHandle(`panel${index + 1}`, setAccordion)}
                        sx={{
                            backgroundColor: "transparent",
                            color: theme.palette.titleColor,
                            borderBottom: `1px solid ${theme.palette.border}`,
                            position: "relative",
                            boxShadow: "none",
                        }}>
                        <AccordionSummary
                            sx={{
                                padding: language === "Pe" ? "0px 34px 0px 0px" : "0px 0px 0px 34px",
                                "& .MuiAccordionSummary-expandIconWrapper": {
                                    left: language !== "Pe" && "0",
                                    right: language === "Pe" && "0"
                                }
                            }}
                            expandIcon={<ExpandMoreRounded sx={{ color: theme.palette.titleColor }} />}
                            aria-controls={`panel${index + 1}bh-content`}
                            id={`panel${index + 1}bh-header`}>
                            <Typography className='questionTitle' sx={{ fontWeight: !isDarkMode && "900" }}>
                                {
                                    language === "Pe" ? question.peTitle : question.enTitle
                                }
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='questionCaption'>
                                {
                                    language === "Pe" ? question.peCaption : question.enCaption
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )
}

export default QuestionsAccordion;