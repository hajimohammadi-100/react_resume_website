export const styleBoxs = (theme,language) => {
    return {
        background: theme.palette.boxBackground,
        border: `1px solid ${theme.palette.boderColor}`,
        boxShadow: theme.palette.boxShadow,
        direction: language === "Pe" ? "rtl" : "ltr"
    }
}

export const styleBoxs2 = (theme,language) => {
    return {
        background: theme.palette.boxBackground,
        border: `1px solid ${theme.palette.boderColor}`,
        direction: language === "Pe" ? "rtl" : "ltr"
    }
}