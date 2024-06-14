import React, { Fragment, useEffect, useState } from 'react';
import hoolaladata from '../data/chickenlist-main/hoolalaChicken/hoolalaChicken_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(hoolaladata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%ED%9B%8C%EB%9E%84%EB%9D%BC%EC%B9%98%ED%82%A8?c=13.00,0,0,0,dh');
    };
    
    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    훌랄라 치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img || defaultImage} alt={item.Menu} /></li>
                                    <li className='tit'>메뉴 : <span>{item.Menu}</span></li>
                                    <li className='sub'>부가설명 : {item.Sub || '맛있는 치킨 & 치밥'}</li>
                                    <li className='pic'>가격 : {item.Price || '문의해주세요'}원</li>
                                </div>

                            </ul>
                        </Fragment>
                    ))}
                    <button 
                        className="order-button1"
                        onClick={handleOrderClick}
                    >
                        주문하기
                    </button>
                </div>
            </div>
        </Main>
    )
}

export default Atteck
