import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iChildren, iProductsItem } from "./types";

interface iProductsContextProps {
  products: iProductsItem[];
  setProducts: React.Dispatch<React.SetStateAction<iProductsItem[]>>;
  filteredProducts: iProductsItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProductsItem[]>>;
  inputfilter: string;
  setInputFilter: React.Dispatch<React.SetStateAction<string>>;
  integer: (price: number) => string;
  filterMenu: () => void;
  filterMenuMobile: () => void;
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const ProductsContext = createContext({} as iProductsContextProps);

const token = localStorage.getItem("HamKenzie:token");

export function ProductsProvider({ children }: iChildren) {
  const navigate = useNavigate();

  const [products, setProducts] = useState<iProductsItem[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<iProductsItem[]>(products);
  const [inputfilter, setInputFilter] = useState("");
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMenu();
  }, []);

  function integer(price: number) {
    if (Number.isInteger(price)) {
      return `${price},00`;
    } else {
      return price.toString().replace(".", ",");
    }
  }

  function filterMenu() {
    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLowerCase().includes(inputfilter.toLowerCase())
      )
    );
  }

  function filterMenuMobile() {
    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLowerCase().includes(inputfilter.toLowerCase())
      )
    );
    setSearchBar(false);
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        inputfilter,
        setInputFilter,
        integer,
        filterMenu,
        filterMenuMobile,
        searchBar,
        setSearchBar,
        logout,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
