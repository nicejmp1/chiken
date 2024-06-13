import React from 'react'
import { brandlogo } from "../../data/brand"
import Main from '../section/Main'
const Logo = () => {
    return (
        <Main>
            <div className="container__logo">
                <h1 className='logo__title'>당신의 <em>최애</em> 치킨은?</h1>
                <div className='logo__style'>
                    {brandlogo.map((logo, key) => (
                        <div className="flip-card" key={key}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={logo.img} alt={logo.title} className="logo-img" />
                                    <span>{logo.title}</span>
                                </div>
                                <div className="flip-card-back">
                                    <span>{logo.title}</span>
                                    <a href={logo.src} ><p>메뉴 보러가기</p></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Main>
    )
}
export default Logo;