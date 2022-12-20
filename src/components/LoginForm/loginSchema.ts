import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Insira seu e-mail!")
    .email("Insira um e-mail na formatação correta!"),
  password: yup.string().required("Insira a sua senha!"),
});
