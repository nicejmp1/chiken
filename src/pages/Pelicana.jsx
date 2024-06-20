import React, { Fragment, useEffect, useState } from 'react';
import pelicanaData from '../data/chickenlist-main/pelicana/pelicana_2024-05-27.json';
import Main from '../components/section/Main';
import defaultImage from '../assets/img/defaultck.jpg';

const Pelicana = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(pelicanaData);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%ED%8E%98%EB%A6%AC%EC%B9%B4%EB%82%98?c=13.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    페리카나
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
                                    <li className='sub'><span>{item.Sub || "맛있는 치킨!!"}</span></li>
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

export default Pelicana