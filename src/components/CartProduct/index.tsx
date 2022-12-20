import { useContext, useState } from "react";
import { StyledLi } from "./style";
import trash from "../../imgs/trash.png";
import { CartContext } from "../../contexts/CartContext";

interface iCartProductProps {
  img: string;
  name: string;
  id: number;
  price: number;
  RemoveProduct: (id: number, price: number, counter?: number) => void;
}

export function CartProduct({
  img,
  name,
  id,
  price,
  RemoveProduct,
}: iCartProductProps) {
  const [counter, setCounter] = useState(1);

  const { cartTotal, setCartTotal } = useContext(CartContext);

  function addCounter(price: number) {
    setCartTotal(cartTotal + price);
    setCounter(counter + 1);
  }

  function subCounter() {
    if (counter - 1 === 0) {
      RemoveProduct(id, price);
    } else {
      setCartTotal(cartTotal - price);
      setCounter(counter - 1);
    }
  }

  return (
    <StyledLi>
      <div>
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div>
          <h3 className="heading3">{name}</h3>
          <fieldset>
            <button onClick={subCounter}>-</button>
            <span>{counter}</span>
            <button onClick={() => addCounter(price)}>+</button>
          </fieldset>
        </div>
      </div>
      <button onClick={() => RemoveProduct(id, price, counter)}>
        <img src={trash} alt="" />
      </button>
    </StyledLi>
  );
}
