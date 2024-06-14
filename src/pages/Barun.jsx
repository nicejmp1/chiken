import React, { Fragment, useEffect, useState } from 'react';
import BarunData from '../data/chickenlist-main/barunChicken/barunChicken_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';


const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(BarunData);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%B0%94%EB%A5%B8%EC%B9%98%ED%82%A8?c=14.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    바른 치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img || defaultImage} alt={item.Menu} /></li>
                                    <li className='tit'><span>{item.Menu}</span></li>
                                    <li className='sub'> <span>{item.Sub}</span></li>
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
