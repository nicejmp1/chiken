import React from 'react'
import { Link } from 'react-router-dom'
import { headerMenus } from '../../data/header'

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                <li><a href="/">회사소개</a></li>
                <li><Link to={"atteck"}>메뉴</Link >
                    <div className='submenu'>
                        <ul>
                            {headerMenus.map((menu, key) => (
                                <li key={key}>
                                    <Link to={menu.src}>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
                <li><a href="/">브랜드</a></li>
                <li><a href="/">공지사항</a></li>

            </ul>
        </nav>


    )
}

export default Menu
