import { createGlobalStyle } from "styled-components";
import  background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
   
    *, ::after, ::before {
        box-sizing: inherit;
    }       

    body {
        background-image:url("${background}");
        background-position: center;
        background-size: cover;
        min-height: 100vh;
    }
`;