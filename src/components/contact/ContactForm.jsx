import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { send } from "@emailjs/browser";

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
            toast.info("درحال ارسال فرم", { className: "poap", theme: isDarkMode ? "dark" : "light" });
            send("service_y0rs9mc", "template_re647fo", {
                name: "",
                fullname: value.fullname,
                subject: value.subject,
                email: value.email,
                message: value.message,
            }, "F3stt3i8SxZ-F7Pnj").then(() => {
                toast.success("ممنون از این که من رو انتخاب کردید", {
                    className: "poap",
                    theme: isDarkMode ? "dark" : "light"
                });
                navigate("/");
                resetForm({ values: '' });
            }).catch(() => {
                toast.error("مشکلی پیش آمده لطفا از راه های ارتباطی دیگر استفاده کنید", {
                    className: "poap",
                    theme: isDarkMode ? "dark" : "light"
                });
            })
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
                        color: `${theme.palette.titleColor} !important`,
                        fontWeight: !isDarkMode && "bold !important"
                    },
                    "&:hover": {
                        backgroundColor: "transparent !important",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: `${theme.palette.textColor} !important`,
                        letterSpacing: "0.4px !important",
                        ml: language !== "Pe" && "-8px !important",
                        left: language !== "Pe" && "0px !important",
                        right: language === "Pe" && "17px !important"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                        opacity: "0.5 !important"
                    },
                    ".css-1s8o99q::after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor} !important`,
                        opacity: "0.5 !important"
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right !important" : "left !important",
                        mt: "4px",
                        mx: 0
                    },
                    ".css-1s8o99q::after,.css-1s8o99q::after,.css-12o6raa::after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                    },
                    ".css-12o6raa,.css-1s8o99q": {
                        backgroundColor: "transparent !important"
                    },
                    ".css-idicrh.Mui-focused,.css-setk48.Mui-focused":{
                        transform: language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
                    },
                    ".css-setk48,.css-idicrh":{
                        transform: language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
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
                        color: `${theme.palette.titleColor} !important`,
                        fontWeight: !isDarkMode && "bold !important"
                    },
                    "&:hover": {
                        backgroundColor: "transparent !important",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: `${theme.palette.textColor} !important`,
                        letterSpacing: "0.4px !important",
                        ml: language !== "Pe" && "-8px !important",
                        left: language !== "Pe" && "0px !important",
                        right: language === "Pe" && "17px !important"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                        opacity: "0.5"
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor} !important`,
                        opacity: "0.5 !important"
                    },
                    ".css-1s8o99q::after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right !important" : "left !important",
                        mt: "4px !important",
                        mx: 0
                    },
                    ".css-1s8o99q::after,.css-1s8o99q::after,.css-12o6raa::after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                    },
                    ".css-12o6raa,.css-1s8o99q": {
                        backgroundColor: "transparent !important"
                    },
                    ".css-idicrh.Mui-focused,.css-setk48.Mui-focused":{
                        transform: language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
                    },
                    ".css-setk48,.css-idicrh":{
                        transform:language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
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
                    mb: "10px !important",
                    ".MuiInputBase-input": {
                        color: `${theme.palette.titleColor} !important`,
                        fontWeight: !isDarkMode && "bold !important"
                    },
                    "&:hover": {
                        backgroundColor: "transparent !important",
                    },
                    ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                        color: `${theme.palette.textColor} !important`,
                        letterSpacing: "0.4px !important",
                        ml: language !== "Pe" && "-8px !important",
                        left: language !== "Pe" && "0px !important",
                        right: language === "Pe" && "17px !important"
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                        transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                        fontSize: language === "Pe" && "11px !important",
                        color: `${theme.palette.titleColor} !important`
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:after,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                        opacity: "0.5 !important"
                    },
                    ".css-13swrpw-MuiInputBase-root-MuiFilledInput-root:before,.css-1yjxizd-MuiInputBase-root-MuiFilledInput-root:before": {
                        borderBottom: `1px solid ${theme.palette.textColor} !important`,
                        opacity: "0.5 !important"
                    },
                    ".css-1s8o99q::after,.css-1s8o99q::after,.css-12o6raa::after": {
                        borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                    },
                    ".MuiFormHelperText-root": {
                        textAlign: language === "Pe" ? "right !important" : "left !important",
                        mt: "4px",
                        mx: 0
                    },
                    ".css-12o6raa,.css-1s8o99q": {
                        backgroundColor: "transparent !important"
                    },
                    ".css-idicrh.Mui-focused,.css-setk48.Mui-focused":{
                        transform: language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
                    },
                    ".css-setk48,.css-idicrh":{
                        transform:language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
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
                        mb: "10px !important",
                        ".MuiInputBase-input": {
                            color: `${theme.palette.titleColor} !important`,
                            fontWeight: !isDarkMode && "bold !important"
                        },
                        "&:hover": {
                            backgroundColor: "transparent !important",
                        },
                        ".MuiFormLabel-root,.css-1qjkqnl-MuiFormLabel-root-MuiInputLabel-root.Mui-error,.css-b3t34p-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                            color: `${theme.palette.textColor} !important`,
                            letterSpacing: "0.4px !important",
                            ml: language !== "Pe" && "-8px !important",
                            left: language !== "Pe" && "0px !important",
                            right: language === "Pe" && "17px !important"
                        },
                        ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                            color: `${theme.palette.titleColor} !important`
                        },
                        ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                            color: `${theme.palette.titleColor} !important`
                        },
                        ".css-1jru9n7-MuiFormLabel-root-MuiInputLabel-root": {
                            transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                            fontSize: language === "Pe" && "11px !important",
                            color: `${theme.palette.titleColor} !important`
                        },
                        ".css-1wm2oz1-MuiFormLabel-root-MuiInputLabel-root": {
                            transform: language === "Pe" && "translate(12px, 1px) scale(1) !important",
                            fontSize: language === "Pe" && "11px !important",
                            color: `${theme.palette.titleColor} !important`
                        },
                        ".css-1obnjvm-MuiInputBase-root-MuiFilledInput-root:after,.css-11is38i-MuiInputBase-root-MuiFilledInput-root:after": {
                            borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                            opacity: "0.5 !important"
                        },
                        ".css-1obnjvm-MuiInputBase-root-MuiFilledInput-root:before,.css-11is38i-MuiInputBase-root-MuiFilledInput-root:before": {
                            borderBottom: `1px solid ${theme.palette.textColor} !important`,
                            opacity: "0.5 !important"
                        },
                        ".css-1s8o99q::after,.css-nm7oh2::after,.css-13f4097::after": {
                            borderBottom: `1px solid ${theme.palette.titleColor} !important`,
                        },
                        ".MuiFormHelperText-root": {
                            textAlign: language === "Pe" ? "right !important" : "left !important",
                            mt: "4px !important",
                            mx: 0
                        },
                        ".css-13f4097,.css-nm7oh2": {
                            backgroundColor: "transparent !important"
                        },
                        ".css-idicrh.Mui-focused,.css-setk48.Mui-focused":{
                            transform: language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
                        },
                        ".css-setk48,.css-idicrh":{
                            transform:language === "Pe" && "translate(225px, 4px) scale(0.75) !important"
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
                    backgroundColor: `${theme.palette.button} !important`,
                    color: "white",
                    "&:hover": {
                        backgroundColor: `${theme.palette.button} !important`,
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