import React, { Fragment, useEffect, useState } from 'react';
import ttobongdata from '../data/chickenlist-main/ttobongeeChicken/ttobongeeChicken_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Ttobongee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(ttobongdata);
    }, []);

    const handleOrderClick = () => {
        window.open('https://map.naver.com/p/search/%EB%98%90%EB%B4%89%EC%9D%B4%ED%86%B5%EB%8B%AD?c=13.00,0,0,0,dh');
    };

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    또봉이치킨
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

export default Ttobongee
