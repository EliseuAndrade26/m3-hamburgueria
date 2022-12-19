import { HeaderLogo } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { CartProvider } from "../../contexts/CartContext";

export function Home() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <HeaderLogo />
          <ProductList />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}
