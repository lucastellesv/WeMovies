import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #2F2E41;
        --white: #fff;
        --blue: #009EDD;
        --grey: #999999
    }
    * {
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background: #2F2E41;
        -webkit-font-smoothing: antialized;
    }

    body, input, button {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700
    }
`;
