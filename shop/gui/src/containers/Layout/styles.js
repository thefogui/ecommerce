import styled from 'styled-components'

//HS - Header Section
//AS - Aside Section
//MS - Main Section


const Grid = styled.div`
    width: 100vw;
    display: grid;

    grid-template-columns: 70px auto 50px;
    grid-template-rows: 100px auto;

    grid-template-areas:
        'HS HS HS'
        'AS MS MS'
        'AS MS MS'
    ;

    height: 100vh;
`;


export default Grid;