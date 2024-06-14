import React, { Fragment, useEffect, useState } from 'react';
import nenechickendata from '../data/chickenlist-main/nenechicken/nenechicken_2024-05-27.json';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(nenechickendata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%84%A4%EB%84%A4%EC%B9%98%ED%82%A8?c=13.00,0,0,0,dh');
    };


    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    네네치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <li className='menu__img'><img src={item.MenuImage} alt={item.Menu} /></li>
                                <div className='menu__list'>
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