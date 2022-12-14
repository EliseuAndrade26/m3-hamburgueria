import styled from "styled-components";

export const StyledAside = styled.aside`
  margin-top: 15px;
  @media (min-width: 1024px) {
    margin-top: 30px;
    width: 27%;
  }
`;

export const StyledDivTitle = styled.div`
  display: flex;
  border-radius: 5px 5px 0px 0px;
  height: 50px;
  background-color: var(--color__primary);
`;

export const StyledH3Cart = styled.h3`
  align-self: center;
  padding-left: 20px;
  color: var(--color__grey__0);
`;

export const StyledDivEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 5px;
`;

export const StyledP = styled.p`
  color: var(--color__grey__100);
`;

export const StyledSpanEmpty = styled.span`
  color: var(--color__grey__50);
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    max-height: 440px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 15px;
  box-shadow: 0px -3px 0px 0px var(--color__grey__20);
`;

export const StyledDivPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledH3Price = styled.h3`
  color: var(--color__grey__100);
`;

export const StyledSpanPrice = styled.span`
  color: var(--color__grey__50);
`;
