import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--color__grey__0);
  margin-top: 10px;
  padding: 10px;
  gap: 15px;

  > h2 {
    align-self: center;
    color: var(--color__grey__100);
    margin-bottom: 15px;
  }

  > span {
    color: var(--color__grey__50);
    align-self: center;
  }

  > p {
    color: var(--negative);
  }

  @media (min-width: 768px) {
    width: 375px;
    align-self: center;
    margin: 0;
    padding: 10px;
  }
`;
