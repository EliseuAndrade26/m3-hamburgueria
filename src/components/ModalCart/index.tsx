import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ButtonGreyLarge } from "../../styles/buttons";
import { CartProduct } from "../CartProduct";
import { StyledDiv } from "./style";

export function ModalCart() {
  const { integer } = useContext(ProductsContext);

  const { setShowModal, currentSale, cartTotal, setCurrentSale, setCartTotal } =
    useContext(CartContext);

  function resetStatesCart() {
    setCurrentSale([]);
    setCartTotal(0);
  }

  function RemoveProduct(id: number, price: number, counter?: number) {
    setCurrentSale(currentSale.filter((elem) => elem.id !== id));
    if (counter) {
      setCartTotal(cartTotal - price * counter);
    } else {
      setCartTotal(cartTotal - price);
    }
  }

  return (
    <StyledDiv>
      {currentSale.length > 0 ? (
        <section>
          <div>
            <h3 className="heading3">Carrinho de compras</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
          <ul>
            {currentSale.map((item) => (
              <CartProduct
                key={item.id}
                img={item.img}
                name={item.name}
                id={item.id}
                price={item.price}
                RemoveProduct={RemoveProduct}
              />
            ))}
          </ul>
          <fieldset>
            <h4>Total</h4>
            <span>R$ {integer(cartTotal)}</span>
          </fieldset>
          <ButtonGreyLarge onClick={resetStatesCart}>
            Remover todos
          </ButtonGreyLarge>
        </section>
      ) : (
        <section>
          <div>
            <h3 className="heading3">Carrinho de compras</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
          <ul>
            <h3 className="heading3">Sua sacola está vazia</h3>
            <span className="body">Adicione itens</span>
          </ul>
        </section>
      )}
    </StyledDiv>
  );
}
