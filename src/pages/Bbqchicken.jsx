import React, { Fragment, useEffect, useState } from 'react';
import BBQchickendata from '../data/chickenlist-main/bbqchicken/bbqchicken_2024-05-27.json';
import Main from '../components/section/Main';
import defaultImage from '../assets/img/defaultck.jpg';

const Bbqchicken = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(BBQchickendata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/BBQ%EC%B9%98%ED%82%A8?c=14.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    BBQ치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <li className='menu__img'><img src={item.MenuImage || defaultImage} alt={item.Menu} /></li>
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

export default Bbqchicken