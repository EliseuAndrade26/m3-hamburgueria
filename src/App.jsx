import { useState } from "react";
import { CartSection } from "./components/CartSection";
import { HeaderLogo } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Container, ContainerMain } from "./styles/container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [inputfilter, setInputFilter] = useState("");

  function filterMenu() {
    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLowerCase().includes(inputfilter.toLowerCase())
      )
    );
    setShowSearch(true);
  }

  function integer(price) {
    if (Number.isInteger(price)) {
      return `${price},00`;
    } else {
      return price.toString().replace(".", ",");
    }
  }

  function altCart(product, price, id) {
    if (currentSale.find((elem) => elem.id === id)) {
      toast.error("Item já adicionado ao carrinho!");
    } else {
      setCurrentSale([...currentSale, product]);
      setCartTotal(cartTotal + price);
    }
  }

  return (
    <>
      <Container>
        <HeaderLogo
          products={products}
          setFilteredProducts={setFilteredProducts}
          setInputFilter={setInputFilter}
          filterMenu={filterMenu}
        />

        <ContainerMain>
          <ProductList
            products={products}
            setProducts={setProducts}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            altCart={altCart}
            integer={integer}
            showSearch={showSearch}
            inputfilter={inputfilter}
          />
          <CartSection
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            integer={integer}
          />
        </ContainerMain>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
