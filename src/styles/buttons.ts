import styled from "styled-components";

export const ButtonPrimaryLarge = styled.button`
  height: 60px;
  color: var(--color__grey__0);
  background-color: var(--color__primary);
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  :hover {
    background-color: var(--color__primary__50);
  }
`;

export const ButtonGreyLarge = styled.button`
  height: 60px;
  color: var(--color__grey__100);
  background-color: var(--color__grey__0);
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  :hover {
    color: var(--color__grey__0);
    background-color: var(--color__primary);
  }
`;

export const ButtonPrimaryMedium = styled.button`
  height: 40px;
  color: var(--color__grey__0);
  background-color: var(--color__primary);
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  :hover {
    background-color: var(--color__primary__50);
  }
`;

export const ButtonGreyMedium = styled.button`
  width: 100%;
  height: 40px;
  color: var(--color__grey__100);
  background-color: var(--color__grey__0);
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  :hover {
    color: var(--color__grey__0);
    background-color: var(--color__primary);
  }
`;

export const StyledButtonCart = styled.button`
  border: none;
  color: var(--color__grey__50);
  :hover {
    text-decoration: underline;
    color: var(--color__grey__100);
  }
`;
