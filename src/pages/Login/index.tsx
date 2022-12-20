import { BurguerInfo } from "../../components/BurguerInfo";
import { LoginForm } from "../../components/LoginForm";
import { StyledMain } from "./style";

export function Login() {
  return (
    <>
      <StyledMain>
        <BurguerInfo />
        <LoginForm />
      </StyledMain>
    </>
  );
}
