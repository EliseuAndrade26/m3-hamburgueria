import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(2, "O nome precisa ter pelo 2 caracteres!")
    .max(150, "O nome pode ter no máximo 150 caracteres!"),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("E-mail inválido!"),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .matches(/(?=.*?[A-z])/, "É necessário pelo menos uma letra!")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial!"
    )
    .min(8, "É necessário uma senha de pelos 8 caracteres!"),
  confirmation: yup
    .string()
    .required("A confirmação da senha é obrigatória!")
    .oneOf([yup.ref("password"), null], "A senha tem que ser idêntica!"),
});
