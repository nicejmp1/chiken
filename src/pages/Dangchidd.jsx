import React, { Fragment, useEffect, useState } from 'react';
import dangchiddata from '../data/chickenlist-main/dangchiddaengChicken/dangchiddaengChicken_2024-05-13.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dangchiddata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%8B%B9%EC%8B%A0%EC%9D%80%EC%B9%98%ED%82%A8%EC%9D%B4%EB%95%A1%EA%B8%B4%EB%8B%A4?c=15.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    당신은 치킨이 땡긴다
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img || defaultImage} alt={item.Menu} /></li>
                                    <li className='tit'><span>{item.Menu}</span></li>
                                    <li className='sub'><span>{item.Sub}</span></li>
                                    <li className='pic'><span>{item.Price}</span></li>
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
