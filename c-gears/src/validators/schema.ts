import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um E-mail valido!")
    .required("E-mail obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "No mínimo 8 digitos")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial"),
});
