import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is requerid"),
  username: yup.string().required("Username is requerid"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is requerid"),
  emailConfirm: yup
    .string()
    .required("Confirm your email")
    .oneOf([yup.ref("email")], "Must be the same as the email"),
  cellphone: yup
    .string()
    .required("A contact number is required.")
    .test("isValidPhone", "Enter a valid phone number", (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    }),
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
    street: yup.string().required("Street name is required"),
    number: yup.string().required("House number is mandatory"),
    apt_unit: yup.string().notRequired(),
    neighborhoods: yup.string().notRequired(),
    city: yup.string().required("City name is required"),
    state: yup.string().required("State name is required"),
    zipcode: yup.string().required("Zipcode is required"),
  }),
});
