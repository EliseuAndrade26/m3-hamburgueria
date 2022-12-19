import { StyledMain } from "./style";
import { RegisterForm } from "../../components/RegisterForm";
import { BurguerInfo } from "../../components/BurguerInfo";

export function Register() {
  return (
    <StyledMain>
      <RegisterForm />
      <BurguerInfo />
    </StyledMain>
  );
}
