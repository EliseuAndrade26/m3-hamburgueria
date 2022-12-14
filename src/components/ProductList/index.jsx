/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { api } from "../../services/api";
import { Product } from "../Product";
import {
  StyledMain,
  StyledUl,
  StyledSection,
  StyledP,
  StyledSpan,
} from "./style";

export function ProductList({
  setProducts,
  filteredProducts,
  setFilteredProducts,
  altCart,
  integer,
  showSearch,
  inputfilter,
}) {
  useEffect(() => {
    async function getMenu() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMenu();
  }, []);

  return (
    <StyledMain>
      {showSearch && (
        <StyledSection>
          <StyledP className="heading2">Resultados para:</StyledP>
          <StyledSpan className="heading2">{inputfilter}</StyledSpan>
        </StyledSection>
      )}

      <StyledUl>
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            img={item.img}
            item={item}
            altCart={altCart}
            integer={integer}
          />
        ))}
      </StyledUl>
    </StyledMain>
  );
}
