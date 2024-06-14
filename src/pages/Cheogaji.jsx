import React, { Fragment, useEffect, useState } from 'react';
import Cheogajidata from '../data/chickenlist-main/cheogajipChicken/cheogajipChicken_2024-05-27.json';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Cheogajidata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EC%B2%98%EA%B0%93%EC%A7%91%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8?c=14.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    처갓집 치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img} alt={item.menu} /></li>
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
