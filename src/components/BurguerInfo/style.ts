import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 20px;

  h1 {
    color: var(--color__grey__100);
    Span {
      color: var(--color__secondary);
    }
  }

  div {
    display: flex;
    gap: 10px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid var(--color__grey__20);
    border-radius: 6px;
    figure {
      padding: 10px;
      background-color: var(--color__primary__10);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      img {
        object-fit: contain;
      }
    }
    p {
      color: var(--color__grey__50);
      span {
        color: var(--color__grey__100);
      }
    }

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }
`;
