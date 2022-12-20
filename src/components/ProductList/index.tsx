/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { Product } from "../Product";
import { StyledMain } from "./style";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";
import { ModalCart } from "../ModalCart";
import { toast } from "react-toastify";
import { iProductsItem } from "../../contexts/types";

export function ProductList() {
  const { filteredProducts } = useContext(ProductsContext);
  const { showModal, currentSale, setCurrentSale, cartTotal, setCartTotal } =
    useContext(CartContext);

  function altCart(product: iProductsItem, price: number, id: number) {
    if (currentSale.find((elem) => elem.id === id)) {
      toast.error("Item já adicionado ao carrinho!");
    } else {
      setCurrentSale([...currentSale, product]);
      setCartTotal(cartTotal + price);
    }
  }

  return (
    <>
      <StyledMain>
        <ul>
          {filteredProducts.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              img={item.img}
              id={item.id}
              item={item}
              altCart={altCart}
            />
          ))}
        </ul>
      </StyledMain>
      {showModal && <ModalCart />}
    </>
  );
}
