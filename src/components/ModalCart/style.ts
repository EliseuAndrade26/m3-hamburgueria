import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    max-height: 361px;
    margin: 0 15px;
    padding-bottom: 15px;
    border-radius: 4px;
    background-color: var(--color__grey__0);

    > div {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-radius: 4px 4px 0 0;
      background-color: var(--color__primary);

      h3 {
        color: var(--color__grey__0);
      }

      button {
        color: var(--color__grey__0);
        background-color: var(--color__primary);
      }
    }

    ul {
      min-height: 100px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
    }

    h3 {
      color: var(--color__grey__100);
    }

    span {
      color: var(--color__grey__50);
    }

    > fieldset {
      display: flex;
      justify-content: space-between;
      border: none;
      padding: 10px;
    }

    > button {
      margin: 0 auto;
      align-self: center;
    }
  }
`;
