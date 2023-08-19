import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { fromValues } from "../../constants/fromValues";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { language, isDarkMode } = useContext(themeContext);

    const contactValidation = Yup.object().shape({
        fullname: Yup.string().required(language === "Pe" ? "نام و نام خانوادگی الزامی می باشد" : "full name is required"),
        email: Yup.string().email(language === "Pe" ? "آدرس ایمیل معتبر نمی باشد" : "email address is not valid").required(language === "Pe" ? "ایمیل الزامی می باشد" : "Email is required"),
        subject: Yup.string().required(language === "Pe" ? "نوشتن عنوان الزامی می باشد" : "title is required"),
        message: Yup.string().required(language === "Pe" ? "نوشتن پیام الزامی می باشد" : "message is required")
    });

    const contactInputName = {
        fullname: "",
        email: "",
        subject: "",
        message: ""
    }

    const formik = useFormik({
        initialValues: contactInputName,
        onSubmit: (value, { resetForm }) => {
            fromValues.push(value);
            navigate("/");
            resetForm({ values: '' });
        },
        validationSchema: contactValidation
    })

    return (
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                size='small'
                label={language === "Pe" ? "نام و نام خانوادگی *" : "Full Name *"}
                name="fullname"
                variant='filled'
                className="textFild"
                sx={{
                    mb: "10px",
                    ".MuiInputBase-input": {
                        color: theme.palette.titleColor,
                        fontWeight: !isDarkMode && "bold"
                    },
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: theme.palette.textColor,
                        letterSpacing: "0.4px",
                        ml: language !== "Pe" && "-8px",
                        left: language !== "Pe" && "0px",
                        right: language === "Pe" && "17px"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor}`,
                        opacity: "0.5"
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor}`,
                        opacity: "0.5"
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right" : "left",
                        mt: "4px",
                        mx: 0
                    }
                }}
                helperText={formik.touched.fullname ? formik.errors.fullname : null}
                error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                value={formik.values?.fullname}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                size='small'
                label={language === "Pe" ? "ایمیل *" : "Email *"}
                name="email"
                variant='filled'
                sx={{
                    mb: "10px",
                    ".MuiInputBase-input": {
                        color: theme.palette.titleColor,
                        fontWeight: !isDarkMode && "bold"
                    },
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: theme.palette.textColor,
                        letterSpacing: "0.4px",
                        ml: language !== "Pe" && "-8px",
                        left: language !== "Pe" && "0px",
                        right: language === "Pe" && "17px"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor}`,
                        opacity: "0.5"
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor}`,
                        opacity: "0.5"
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right" : "left",
                        mt: "4px",
                        mx: 0
                    }
                }}
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values?.email}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                size='small'
                label={language === "Pe" ? "عنوان *" : "Your Subject *"}
                name="subject"
                variant='filled'
                sx={{
                    mb: "10px",
                    ".MuiInputBase-input": {
                        color: theme.palette.titleColor,
                        fontWeight: !isDarkMode && "bold"
                    },
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: theme.palette.textColor,
                        letterSpacing: "0.4px",
                        ml: language !== "Pe" && "-8px",
                        left: language !== "Pe" && "0px",
                        right: language === "Pe" && "17px"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.titleColor
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                        fontSize: language === "Pe" && "11px",
                        color: theme.palette.titleColor
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor}`,
                        opacity: "0.5"
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor}`,
                        opacity: "0.5"
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right" : "left",
                        mt: "4px",
                        mx: 0
                    }
                }}
                helperText={formik.touched.subject ? formik.errors.subject : null}
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                multiline
                rows={6}
                size='small'
                label={language === "Pe" ? "پیام *" : "Message *"}
                name="message"
                variant='filled'
                sx={
                    {
                        mb: "10px",
                        ".MuiInputBase-input": {
                            color: theme.palette.titleColor,
                            fontWeight: !isDarkMode && "bold"
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                            color: theme.palette.textColor,
                            letterSpacing: "0.4px",
                            ml: language !== "Pe" && "-8px",
                            left: language !== "Pe" && "0px",
                            right: language === "Pe" && "17px"
                        },
                        ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.titleColor
                        },
                        ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.titleColor
                        },
                        ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                            transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                            fontSize: language === "Pe" && "11px",
                            color: theme.palette.titleColor
                        },
                        ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                            transform: language === "Pe" && "translate(12px, 1px) scale(1)",
                            fontSize: language === "Pe" && "11px",
                            color: theme.palette.titleColor
                        },
                        ".css-1obnjvm-MuiInputBase-root-MuiFilledInput-root:after,.css-11is38i-MuiInputBase-root-MuiFilledInput-root:after": {
                            borderBottom: `1px solid ${theme.palette.titleColor}`,
                            opacity: "0.5"
                        },
                        ".css-1obnjvm-MuiInputBase-root-MuiFilledInput-root:before,.css-11is38i-MuiInputBase-root-MuiFilledInput-root:before": {
                            borderBottom: `1px solid ${theme.palette.textColor}`,
                            opacity: "0.5"
                        },
                        ".MuiFormHelperText-root": {
                            textAlign: language === "Pe" ? "right" : "left",
                            mt: "4px",
                            mx: 0
                        }
                    }
                }
                helperText={formik.touched.message ? formik.errors.message : null}
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
            />
            <Button
                onClick={formik.handleSubmit}
                type='submit'
                variant='contained'
                fullWidth
                size='large'
                sx={{
                    my: 2,
                    backgroundColor: theme.palette.button,
                    color: "white",
                    "&:hover": {
                        backgroundColor: theme.palette.button,
                    }
                }}>
                {
                    language === "Pe" ? "ارسال پیام" : "Send Message"
                }
            </Button>
        </form>
    )
}

export default ContactForm;