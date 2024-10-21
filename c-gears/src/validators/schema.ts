import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email!!")
    .required("Email address is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Must contain at least 8 digits")
    .matches(/[A-Z]/, "Must contain 1 capital letter")
    .matches(/([a-z])/, "Must contain 1 lowercase letter")
    .matches(/(\d)/, "Must contain at least 1 number")
    .matches(/(\W)|_/, "Must contain at least 1 special character"),
});
