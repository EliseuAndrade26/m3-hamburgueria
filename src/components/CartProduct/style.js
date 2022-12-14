import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  margin: 15px 0;
  gap: 5px;
`;

export const StyledImg = styled.img`
  object-fit: contain;
  border-radius: 8px;
  width: 80px;
  background-color: var(--color__grey__20);
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  width: 100%;
`;

export const StyledH3 = styled.h3`
  margin-bottom: 5px;
  color: var(--color__grey__100);
  max-width: 145px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 425px) {
    max-width: 170px;
  }
`;

export const StyledSpan = styled.span`
  color: var(--color__grey__50);
`;

export const StyledDivText = styled.div`
  height: 100%;
`;
