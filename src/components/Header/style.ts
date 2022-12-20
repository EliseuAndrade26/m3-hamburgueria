import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }

  h1 {
    color: var(--color__grey__100);
    align-self: center;
  }

  span {
    color: var(--color__secondary);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: none;
      border: 2px solid var(--color__grey__20);
      border-radius: 6px;
      padding: 10px;
      margin-right: 5px;

      :focus-within {
        border: 2px solid var(--color__grey__50);
      }

      input {
        :focus {
          outline: 0;
        }
      }

      @media (min-width: 1024px) {
        display: flex;
      }
    }

    fieldset {
      display: flex;
      gap: 5px;
      border: none;

      button {
        display: flex;
        align-items: center;
        width: 40px;

        > div {
          position: absolute;
          z-index: 1;
          top: 10px;
          right: 50px;
          display: inline;
          border: none;
          background-color: var(--color__primary);
          width: 20px;
          height: 20px;

          @media (min-width: 1024px) {
            top: 22px;
            right: 150px;
          }

          > span {
            position: absolute;
            top: 0;
            left: 5px;
            color: var(--color__grey__0);
          }
        }
      }

      button:first-of-type {
        @media (min-width: 1024px) {
          display: none;
        }
      }
    }
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  border: 2px solid var(--color__grey__20);
  border-radius: 6px;
  padding: 10px;

  input {
    width: 100%;
    margin-right: 5px;
  }
`;
