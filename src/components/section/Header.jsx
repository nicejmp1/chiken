import React from 'react'

import Logo from '../header/Logo'
import Menu from '../header/Menu'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
        </header>
    )
}

export default Header
