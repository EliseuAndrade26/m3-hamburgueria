import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { InputForm } from "../InputForm";
import { StyledForm } from "../../styles/form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iLoginUserProps } from "../../contexts/types";
import { StyledSpan, StyledH2 } from "./style";
import { ButtonPrimaryLarge, ButtonGreyMedium } from "../../styles/buttons";
import { StyledP } from "../RegisterForm/style";

export function LoginForm() {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUserProps>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginUserProps> = async (data) => {
    await loginUser(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledH2 className="title">Login</StyledH2>
      <InputForm
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu e-mail"
        register={register("email")}
      />
      {errors.email?.message && (
        <StyledP className="caption" aria-label="error">
          {errors.email.message}
        </StyledP>
      )}
      <InputForm
        label="Senha"
        type="password"
        placeholder="Crie sua senha"
        register={register("password")}
      />
      {errors.password?.message && (
        <StyledP className="caption" aria-label="error">
          {errors.password.message}
        </StyledP>
      )}
      <ButtonPrimaryLarge type="submit">Entrar</ButtonPrimaryLarge>
      <StyledSpan className="caption">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </StyledSpan>
      <Link to={"/register"}>
        <ButtonGreyMedium>Cadastre-se</ButtonGreyMedium>
      </Link>
    </StyledForm>
  );
}
