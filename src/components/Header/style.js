import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledH1 = styled.h1`
  color: var(--color__grey__100);
  align-self: center;
`;

export const StyledSpan = styled.span`
  color: var(--color__secondary);
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--color__grey__20);
  border-radius: 6px;
  margin-top: 10px;
  padding: 10px;
  :focus-within {
    border: 2px solid var(--color__grey__50);
  }
  @media (min-width: 1024px) {
    width: 27%;
  }
`;
