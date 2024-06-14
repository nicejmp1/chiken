import React from 'react'
import Main from '../components/section/Main'
import Banner from '../components/home/Banner'
import Logo from '../components/section/Logo'
import Video from '../components/video/Video'
import ChartMain from '../components/chart/ChartMain'
import Bottom from '../components/home/Bottom'
import Desc from '../components/home/Desc'

const Home = () => {
    return (
        <Main
            tittle="치킨"
            description="치킨">
            <Banner />
            <Video />
            <Desc />
            <Logo />
            <ChartMain />
            <Bottom />
        </Main>
    )
}

export default Home