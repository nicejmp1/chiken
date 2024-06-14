import React, { Fragment, useEffect, useState } from 'react';
import Atteckdata from '../data/chickenlist-main/atteckChicken/atteckChicken_2024-05-27.json';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Atteckdata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EC%88%9C%EC%82%B4%EB%A7%8C%EA%B3%B5%EA%B2%A9?c=14.00,0,0,0,dh', '_blank');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    순살만공격
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <li className='menu__img'>
                                    <img src={item.img} alt={item.Menu} />
                                </li>
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

export default Atteck;
