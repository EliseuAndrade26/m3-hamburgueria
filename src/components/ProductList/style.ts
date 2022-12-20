import styled from "styled-components";

export const StyledMain = styled.main`
  ul {
    display: flex;
    overflow-x: scroll;
    margin-top: 20px;
    padding: 10px;
    gap: 10px;

    @media (min-width: 1024px) {
      gap: 30px;
      overflow-x: none;
      flex-wrap: wrap;
      ::-webkit-scrollbar {
        width: 0px;
      }
    }

    @media (min-width: 1440px) {
      gap: 47px;
    }
  }

  section {
    display: flex;
    margin-top: 20px;
    gap: 5px;
  }

  > p {
    color: var(--color__grey__100);
  }

  span {
    color: var(--color__grey__50);
  }
`;
