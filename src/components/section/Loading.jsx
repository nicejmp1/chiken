import React from 'react';
import { BeatLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto',
    marginTop: '300px',
    textAlign: 'center',
    color: '#fe4901',
    size: '20',
};

const Loading = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <BeatLoader
                color="#fe4901"
                cssOverride={override}
                margin={4}
                size={10}
                speedMultiplier={1}
            />
            <div style={{
                padding: '20px',
                color: '#fe4901',
                fontWeight: '700',
            }}>
                <h1>메뉴를 불러오고 있습니다!!</h1>
                <h2>잠시만 기다려 주세요!!</h2>
            </div>
        </div>
    );
}

export default Loading;
