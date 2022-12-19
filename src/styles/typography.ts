import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`

.heading1{
  font-size: 26px;
  font-weight: 700;
}

.heading2{
  font-size: 22px;
  font-weight: 700;
}

.heading3{
  font-size: 18px;
  font-weight: 700;
}

.headline{
  font-size: 16px;
  font-weight: 400;
}


.body{
  font-size: 14px;
  font-weight: 400;
}


.Body600{
  font-size: 14px;
  font-weight: 600;
}


.caption{
  font-size: 12px;
  font-weight: 700;
  color: var(--color__grey__50);
}
`;
