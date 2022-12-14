import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15px;

  @media (min-width: 1440px) {
    margin: 0 115px;
  }
`;

export const ContainerMain = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
