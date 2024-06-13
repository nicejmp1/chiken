import React from 'react'
import Chart from './Chart'

const ChartMain = () => {
    return (
        <div className="container__logo">
            <div className='chart__main'>
                <div className="chart__title">
                    <h1>치킨 프렌차이드 <em>지역별</em> 선호도</h1>
                </div>
                <Chart />
            </div>
        </div>
    )
}

export default ChartMain
