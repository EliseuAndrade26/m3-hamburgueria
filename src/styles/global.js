import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color__primary: #27AE60;
    --color__primary__50: #93D7AF;
    --color__secondary: #EB5757;
    --color__grey__100: #333333;
    --color__grey__50: #828282;
    --color__grey__20: #E0E0E0;
    --color__grey__0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button{
    cursor: pointer;
    border: none;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
}

h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
    font-family: 'Inter', sans-serif;
}
`;
