import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        backgroundPage: "rgba(15, 15, 15, 1)",
        boxBackground: "linear-gradient(135deg, #181818 0%, #101010 100%)",
        titleColor: "#fff",
        boderColor: "rgba(255, 255, 255, 0.1)",
        textColor: "#828282",
        textColor2: "#AAAAAA",
        tabColor: "#828282",
        backgroundMenu: "linear-gradient(180deg, rgba(11,71,138,1) 0%, rgba(12,18,32,1) 72%, rgba(15,15,15,1) 100%)",
        border: "rgba(255, 255, 255, 0.1)",
        // static Colors
        linear01: "linear-gradient(90deg,#12C2E9 -15%,#C471ED 58%,#F64F59 97%)",
        linear02: "linear-gradient(90deg, #3c58e3 -15%, #a5b9fa 58%, #5ab5e2 97%)",
        linear03: "rgba(18, 194, 233, 1), rgba(30, 31, 31, 1), rgba(136, 136, 136, 1), rgba(30, 31, 31, 1)",
        button: "#323232",
        boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.25)",
    },
    typography: {
        fontFamily: "Roboto , Sahel"
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        backgroundPage: "rgba(239, 239, 239, 1)",
        boxBackground: "linear-gradient(135deg, #FFF 0%, #CACACA 100%)",
        titleColor: "#333",
        boderColor: "rgba(255, 255, 255, 0.10)",
        textColor: "#9F9F9F",
        textColor2: "#BCBCBC",
        tabColor: "rgb(107, 107, 107)",
        backgroundMenu: "linear-gradient(180deg, rgba(11,71,138,1) 0%, rgba(174,174,174,1) 72%, rgba(239,239,239,1) 100%)",
        border: "rgba(0, 0, 0, 0.2)",
        // static Colors
        linear01: "linear-gradient(90deg,#12C2E9 -15%,#C471ED 58%,#F64F59 97%)",
        linear02: "linear-gradient(90deg, #3c58e3 -15%, #a5b9fa 58%, #5ab5e2 97%)",
        linear03: "rgba(18, 194, 233, 1), rgba(30, 31, 31, 1), rgba(136, 136, 136, 1), rgba(30, 31, 31, 1)",
        button: "#323232",
        boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.25)",
    },
    typography: {
        fontFamily: "Roboto , Sahel"
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

