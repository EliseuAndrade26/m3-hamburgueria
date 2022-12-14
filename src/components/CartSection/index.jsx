import {
  StyledAside,
  StyledDivTitle,
  StyledH3Cart,
  StyledDivEmpty,
  StyledP,
  StyledSpanEmpty,
  StyledUl,
  StyledSection,
  StyledDivPrice,
  StyledH3Price,
  StyledSpanPrice,
} from "./style";
import { CartProduct } from "../CartProduct";
import { ButtonGreyLarge } from "../../styles/buttons";

export function CartSection({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  integer,
}) {
  function resetStatesCart() {
    setCurrentSale([]);
    setCartTotal(0);
  }

  function RemoveProduct(id, price) {
    setCurrentSale(currentSale.filter((elem, index) => index !== id));
    setCartTotal(cartTotal - price);
  }

  return (
    <StyledAside>
      <StyledDivTitle>
        <StyledH3Cart className="heading3">Carrinho de compras</StyledH3Cart>
      </StyledDivTitle>
      <StyledUl>
        {currentSale.length > 0 ? (
          currentSale.map((item, index) => (
            <CartProduct
              key={index}
              name={item.name}
              category={item.category}
              img={item.img}
              price={item.price}
              index={index}
              RemoveProduct={RemoveProduct}
            />
          ))
        ) : (
          <StyledDivEmpty>
            <StyledP className="heading3">Sua sacola está vazia</StyledP>
            <StyledSpanEmpty className="body">Adicione itens</StyledSpanEmpty>
          </StyledDivEmpty>
        )}
      </StyledUl>
      {currentSale.length > 0 && (
        <StyledSection>
          <StyledDivPrice>
            <StyledH3Price>Total</StyledH3Price>
            <StyledSpanPrice>
              R$ {integer(cartTotal.toFixed(2))}
            </StyledSpanPrice>
          </StyledDivPrice>
          <ButtonGreyLarge onClick={resetStatesCart}>
            Remover todos
          </ButtonGreyLarge>
        </StyledSection>
      )}
    </StyledAside>
  );
}
