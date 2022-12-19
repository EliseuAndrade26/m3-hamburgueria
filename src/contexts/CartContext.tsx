import { createContext, useState } from "react";
import { iChildren, iProductsItem } from "./types";

interface iCartContextProps {
  currentSale: iProductsItem[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProductsItem[]>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iCartContextProps);

export function CartProvider({ children }: iChildren) {
  const [currentSale, setCurrentSale] = useState([] as iProductsItem[]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        cartTotal,
        setCartTotal,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
