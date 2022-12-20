import { StyledLi } from "./style";
import { ButtonPrimaryMedium } from "../../styles/buttons";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { iProductsItem } from "../../contexts/types";

export interface iProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  altCart: (product: iProductsItem, price: number, id: number) => void;
  item: iProductsItem;
}

export function Product({
  name,
  category,
  price,
  img,
  id,
  item,
  altCart,
}: iProductProps) {
  const { integer } = useContext(ProductsContext);

  return (
    <StyledLi>
      <img src={img} alt={name} />
      <h3 className="heading3">{name}</h3>
      <span className="caption">{category}</span>
      <p className="Body600">R$ {integer(price)}</p>
      <ButtonPrimaryMedium onClick={() => altCart(item, price, id)}>
        Adicionar
      </ButtonPrimaryMedium>
    </StyledLi>
  );
}
