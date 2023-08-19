export const accordionHandle = (panel,setAccordion) => (event, isExpanded) => {
    setAccordion(isExpanded ? panel : false);
};