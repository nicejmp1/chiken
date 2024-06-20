import React, { Fragment, useEffect, useState } from 'react';
import norangtongdak from '../data/chickenlist-main/norangtongdak/norangtongdak_2024-05-17.json';
import Main from '../components/section/Main';
import defaultImage from '../assets/img/defaultck.jpg';

const Norangtongdak = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(norangtongdak);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%85%B8%EB%9E%91%ED%86%B5%EB%8B%AD?c=13.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    노랑통닭
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <li className='menu__img'>
                                    <img src={item.img || defaultImage} alt={item.Menu} />
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

export default Norangtongdak