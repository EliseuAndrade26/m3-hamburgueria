import { HeaderLogo } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { CartProvider } from "../../contexts/CartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("HamKenzie:token");
    if (!token) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
