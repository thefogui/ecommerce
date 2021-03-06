import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100vw;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    :root {
        --primary: #36393f;

        --boxborder: #dfe1e5;

        --cornflower-blue: #6078EA;
    }
`;