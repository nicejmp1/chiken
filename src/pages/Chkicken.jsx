import React, { Fragment, useEffect, useState } from 'react';
import chkickendata from '../data/chickenlist-main/chkickenPluse/chkickenPluse_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Chkicken = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(chkickendata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EC%B9%98%ED%82%A8%ED%94%8C%EB%9F%AC%EC%8A%A4?c=15.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    치킨 플러스
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

export default Chkicken
