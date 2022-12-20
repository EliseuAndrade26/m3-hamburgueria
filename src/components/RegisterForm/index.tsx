import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iCreateUserProps } from "../../contexts/types";

import { Link } from "react-router-dom";
import { InputForm } from "../InputForm";
import { StyledForm } from "../../styles/form";
import { ButtonPrimaryLarge } from "../../styles/buttons";
import { StyledDiv, StyledP } from "./style";

export function RegisterForm() {
  const { createUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateUserProps>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iCreateUserProps> = async (data) => {
    createUser(data);
  };

  if (loading) {
    return null;
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledDiv>
        <h2 className="heading3">Cadastro</h2>
        <Link to={"/login"} className="body">
          Retornar para o login
        </Link>
      </StyledDiv>
      <InputForm
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
      />
      {errors.name?.message && (
        <StyledP className="caption">{errors.name.message}</StyledP>
      )}
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
      <InputForm
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        register={register("confirmation")}
      />
      {errors.confirmation?.message && (
        <StyledP className="caption" aria-label="error">
          {errors.confirmation.message}
        </StyledP>
      )}
      <ButtonPrimaryLarge type="submit">Cadastrar</ButtonPrimaryLarge>
    </StyledForm>
  );
}
