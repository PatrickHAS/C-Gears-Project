import * as yup from "yup";

export const PassResetSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is requerid")
    .max(75, "Email must be at most 75 characters"),
  emailConfirm: yup
    .string()
    .required("Confirm your email")
    .max(75, "Email must be at most 75 characters")
    .oneOf([yup.ref("email")], "Must be the same as the email"),
});

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

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(15, "Name must be at most 15 characters"),
  surname: yup
    .string()
    .required("Surname is requerid")
    .max(15, "Surname must be at most 15 characters"),
  username: yup
    .string()
    .required("Username is requerid")
    .max(15, "Username must be at most 15 characters"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is requerid")
    .max(75, "Email must be at most 75 characters"),
  emailConfirm: yup
    .string()
    .required("Confirm your email")
    .max(75, "Email must be at most 75 characters")
    .oneOf([yup.ref("email")], "Must be the same as the email"),
  cellphone: yup
    .string()
    .required("A contact number is required.")
    .max(25, "Cellphone must be at most 25 characters"),
  birthday: yup.string().required("Date of birth required"),
  password: yup
    .string()
    .required("Password is required!")
    .matches(/[A-Z]/, "At least 1 capital letter")
    .matches(/([a-z])/, "At least 1 lowercase letter")
    .matches(/(\d)/, "At least 1 number")
    .matches(/(\W)|_/, "At least 1 special character")
    .min(8, "At least 8 digits"),
  passwordConfirm: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Must be the same as the password"),
  address: yup.object().shape({
    street: yup
      .string()
      .required("Street name is required")
      .max(75, "Street must be at most 75 characters"),
    number: yup
      .string()
      .required("House number is mandatory")
      .max(10, "Number must be at most 10 characters"),
    apt_unit: yup
      .string()
      .notRequired()
      .max(10, "Apt_unit must be at most 10 characters"),
    neighborhoods: yup
      .string()
      .notRequired()
      .max(50, "Neighborhoods must be at most 50 characters"),
    city: yup
      .string()
      .required("City name is required")
      .max(75, "City must be at most 75 characters"),
    state: yup
      .string()
      .required("State name is required")
      .max(75, "State must be at most 75 characters"),
    zipcode: yup
      .string()
      .required("Zipcode is required")
      .max(10, "Zipcode must be at most 10 characters"),
  }),
});
