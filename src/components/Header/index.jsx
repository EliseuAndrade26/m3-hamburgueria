import { StyledHeader, StyledH1, StyledSpan, StyledDiv } from "./style";
import { Input } from "../../styles/input";
import { ButtonPrimaryMedium } from "../../styles/buttons";

export function HeaderLogo({ setInputFilter, filterMenu }) {
  return (
    <StyledHeader>
      <StyledH1 className="heading1">
        Burger <StyledSpan className="heading4">Kenzie</StyledSpan>
      </StyledH1>
      <StyledDiv>
        <Input
          placeholder="Digitar Pesquisa..."
          onChange={(event) => setInputFilter(event.target.value)}
        />
        <ButtonPrimaryMedium onClick={filterMenu}>
          Pesquisar
        </ButtonPrimaryMedium>
      </StyledDiv>
    </StyledHeader>
  );
}
