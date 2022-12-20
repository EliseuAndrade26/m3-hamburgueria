import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
      object-fit: contain;
      border-radius: 6px;
      background-color: var(--color__grey__20);
    }
  }

  div {
    display: flex;
    gap: 10px;

    div {
      background-color: var(--color__grey__0);
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      fieldset {
        display: flex;
        justify-content: space-between;
        border: none;

        button {
          color: var(--color__secondary);
        }
      }
    }
  }
`;
