import React from 'react'

import { Container } from './styles'

//components

const Search = () => {
    return (
        <Container>
            <input type="text" name="search" placeholder="Search..." />
            <div class="icons-container">
                <div class="icon-search"></div>
                <div class="icon-close">
                    <div class="x-up"></div>
                    <div class="x-down"></div>
                </div>
            </div>
        </Container>
    )
}

export default Search