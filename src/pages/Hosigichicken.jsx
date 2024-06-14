import React, { Fragment, useEffect, useState } from 'react';
import Hosigichickendata from '../data/chickenlist-main/Hosigichicken/Hosigichicken_2024-05-17.json';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Hosigichickendata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%ED%98%B8%EC%8B%9D%EC%9D%B4%EB%91%90%EB%A7%88%EB%A6%AC%EC%B9%98%ED%82%A8');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    호식이두마리
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
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