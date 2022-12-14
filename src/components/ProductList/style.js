import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  overflow-x: scroll;
  margin-top: 20px;
  padding: 10px;
  gap: 10px;
  @media (min-width: 1024px) {
    justify-content: space-between;
    overflow-x: none;
    flex-wrap: wrap;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  margin-top: 20px;
  gap: 5px;
`;

export const StyledP = styled.p`
  color: var(--color__grey__100);
`;

export const StyledSpan = styled.span`
  color: var(--color__grey__50);
`;
