import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 85vw;
  height: 100%;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    width: 30%;
    height: auto;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  align-self: center;
  object-fit: contain;
  @media (min-width: 1024px) {
    width: 150px;
  }
`;

export const StyledH3 = styled.h3`
  color: var(--color__grey__100);
`;

export const StyledSpan = styled.span`
  color: var(--color__grey__50);
`;

export const StyledSpanPrice = styled.span`
  color: var(--color__primary);
`;
