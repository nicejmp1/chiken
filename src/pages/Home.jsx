import React from 'react'
import Main from '../components/section/Main'
import Banner from '../components/home/Banner'
import Logo from '../components/section/Logo'
import Video from '../components/video/Video'
import ChartMain from '../components/chart/ChartMain'
import Bottom from '../components/home/Bottom'

const Home = () => {
    return (
        <Main
            tittle="치킨"
            description="치킨">
            <Banner />
            <Video />
            <Logo />
            <ChartMain />
            <Bottom />
        </Main>
    )
}

export default Home