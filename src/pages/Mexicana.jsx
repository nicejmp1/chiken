import React, { Fragment, useEffect, useState } from 'react';
import mexicanadata from '../data/chickenlist-main/mexicanaChicken/mexicanaChicken_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(mexicanadata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%A9%95%EC%8B%9C%EC%B9%B4%EB%82%98%EC%B9%98%ED%82%A8?c=13.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    멕시카나 치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img || defaultImage} alt={item.Menu} /></li>
                                    <li className='tit'><span>{item.Menu}</span></li>
                                    <li className='sub'><span>{item.Sub || "맛있는치킨!!"}</span></li>
                                    <li className='pic'><span>{item.Price || "문의해주세요"}원</span></li>
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
