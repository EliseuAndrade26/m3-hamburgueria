import { StyledDiv, StyledHeader } from "./style";
import { ButtonGreyMedium, ButtonPrimaryMedium } from "../../styles/buttons";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledInput } from "../../styles/input";
import magnifier from "../../imgs/magnifier.png";
import cart from "../../imgs/cart.png";
import logoutIMG from "../../imgs/logout.png";
import { CartContext } from "../../contexts/CartContext";

export function HeaderLogo() {
  const {
    setInputFilter,
    searchBar,
    setSearchBar,
    filterMenu,
    filterMenuMobile,
    logout,
  } = useContext(ProductsContext);
  const { setShowModal, currentSale } = useContext(CartContext);

  return (
    <StyledHeader>
      {!searchBar ? (
        <>
          <h1 className="heading1">
            Burger <span className="heading3">Kenzie</span>
          </h1>
          <div>
            <div>
              <StyledInput
                placeholder="Digitar Pesquisa..."
                onChange={(event) => setInputFilter(event.target.value)}
              />
              <ButtonPrimaryMedium onClick={filterMenu}>
                <img src={magnifier} alt="" />
              </ButtonPrimaryMedium>
            </div>
            <fieldset>
              <ButtonGreyMedium onClick={() => setSearchBar(true)}>
                <img src={magnifier} alt="" />
              </ButtonGreyMedium>
              <ButtonGreyMedium onClick={() => setShowModal(true)}>
                <img src={cart} alt="" />
                {currentSale.length && (
                  <div>
                    <span>{currentSale.length}</span>
                  </div>
                )}
              </ButtonGreyMedium>
              <ButtonGreyMedium onClick={logout}>
                <img src={logoutIMG} alt="" />
              </ButtonGreyMedium>
            </fieldset>
          </div>
        </>
      ) : (
        <>
          <StyledDiv>
            <StyledInput
              placeholder="Digitar Pesquisa..."
              onChange={(event) => setInputFilter(event.target.value)}
            />
            <ButtonPrimaryMedium onClick={filterMenuMobile}>
              <img src={magnifier} alt="" />
            </ButtonPrimaryMedium>
          </StyledDiv>
        </>
      )}
    </StyledHeader>
  );
}
