import {
  StyledLi,
  StyledSpan,
  StyledH3,
  StyledImg,
  StyledSpanPrice,
} from "./style";
import { ButtonPrimaryMedium } from "../../styles/buttons";

export function Product({
  id,
  name,
  category,
  price,
  img,
  item,
  altCart,
  integer,
}) {
  return (
    <StyledLi>
      <StyledImg src={img} alt={name} />
      <StyledH3 className="heading3">{name}</StyledH3>
      <StyledSpan className="body">{category}</StyledSpan>
      <StyledSpanPrice className="Body600">R$ {integer(price)}</StyledSpanPrice>
      <ButtonPrimaryMedium onClick={() => altCart(item, price, id)}>
        Adicionar
      </ButtonPrimaryMedium>
    </StyledLi>
  );
}
