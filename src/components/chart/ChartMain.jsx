import React from 'react'
import Chart from './Chart'
import Chart2 from './Chart2'

const ChartMain = () => {
    return (
        <div className="container__logo">
            <div className='chart__main'>
                <div className="chart__title">
                    <h1>치킨 브랜드 <em>통계</em> 자료</h1>
                </div>
                <div className="chart__view">
                    <Chart />
                    <Chart2 />
                </div>

            </div>
        </div>
    )
}

export default ChartMain
