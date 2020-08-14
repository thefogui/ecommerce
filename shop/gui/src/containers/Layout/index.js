import React from 'react'

import Grid from './styles'

//components
import Header from '../../components/Header'


const Layout = (props) => {
    return (
        <Grid>
            <Header props={ props } />
        </Grid>
    )
}

export default Layout