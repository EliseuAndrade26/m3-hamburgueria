import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 6px;
  width: 85vw;
  height: 100%;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  :focus-within {
    box-shadow: none;
    border: 1px solid var(--color__primary);
  }

  img {
    width: 200px;
    align-self: center;
    object-fit: contain;
    @media (min-width: 1024px) {
      width: 150px;
    }
  }

  h3 {
    color: var(--color__grey__100);
  }

  span {
    color: var(--color__grey__50);
  }

  p {
    color: var(--color__primary);
  }

  @media (min-width: 1024px) {
    width: 22%;
    height: auto;
  }
`;
