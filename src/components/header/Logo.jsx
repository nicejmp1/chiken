import React from 'react';
import logo from '../../assets/img/logo3.png'
const Logo = () => {
    return (
        <div className='header__logo'>
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
    )
}

export default Logo
