import styled from 'styled-components'

export const Container = styled.div `
    grid-area: HS;

    display: flex;

    background-color: #eceff1;
    border: 1px solid var(--boxborder);

    .logo-section {
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 0px 20px;

        a {
            padding: 0px 20px;
        }
    }
`;