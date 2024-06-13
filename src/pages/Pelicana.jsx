import React, { Fragment, useEffect, useState } from 'react';
import pelicanaData from '../data/chickenlist-main/pelicana/pelicana_2024-05-27.json';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(pelicanaData);
    }, []);

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
                                <div className='menu__list'>
                                    <li className='tit'>메뉴 : <span>{item.Menu}</span></li>
                                    <li className='pic'>가격 : {item.Price}</li>
                                </div>

                            </ul>

                        </Fragment>
                    ))}
                </div>
            </div>
        </Main>
    )
}

export default Atteck