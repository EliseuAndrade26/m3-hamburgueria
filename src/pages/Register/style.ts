import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    justify-content: space-evenly;
  }
`;
