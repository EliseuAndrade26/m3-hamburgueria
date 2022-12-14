import { StyledButtonCart } from "../../styles/buttons";
import {
  StyledLi,
  StyledImg,
  StyledDiv,
  StyledH3,
  StyledSpan,
  StyledDivText,
} from "./style";

export function CartProduct({
  name,
  category,
  img,
  price,
  index,
  RemoveProduct,
}) {
  return (
    <StyledLi>
      <StyledImg src={img} alt={name} />
      <StyledDiv>
        <StyledDivText>
          <StyledH3>{name}</StyledH3>
          <StyledSpan>{category}</StyledSpan>
        </StyledDivText>
        <StyledButtonCart onClick={() => RemoveProduct(index, price)}>
          Remover
        </StyledButtonCart>
      </StyledDiv>
    </StyledLi>
  );
}
