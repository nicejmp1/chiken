import React from 'react'
import Main from '../components/section/Main'
import Banner from '../components/home/Banner'
import Video from '../components/video/Video'
import Logo from '../components/home/Logo'
import ChartMain from '../components/chart/ChartMain'

const Home = () => {
    return (
        <Main
            tittle="치킨"
            description="치킨">
            <Banner />
            <Video />
            <Logo />
            <ChartMain />
        </Main>
    )
}

export default Home