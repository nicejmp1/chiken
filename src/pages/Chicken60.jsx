import React, { Fragment, useEffect, useState } from 'react';
import chicken60data from '../data/chickenlist-main/60chicken/60chicken_2024-05-27.json';
import Main from '../components/section/Main';

const Chicken60 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(chicken60data);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/60%EA%B3%84%EC%B9%98%ED%82%A8?c=14.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    60계치킨
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

export default Chicken60