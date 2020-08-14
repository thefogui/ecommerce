import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

//components
import Logo from '../Logo'
import Search from './../Search'


const headerStyle = {
    width: '100vw'
}

const Header = (props) => {
    return ( 
        <header style={ headerStyle }>
            <Container>
                <Link to='/' className="logo-section">
                    <Logo />
                </Link>

                <Search />

                <nav>
                    {
                        props.isAuthenticated ?
                            <Link to='/'>Logout</Link>
                        :
                            <Link to='/login'>Login</Link>
                    }
                    
                    <Link to='/register'>Register</Link>
                    <Link to='/cart'>Cart</Link>
                </nav>
            </Container>
        </header>
    )
}


export default Header