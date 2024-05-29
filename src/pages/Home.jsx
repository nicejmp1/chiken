import React from 'react'
import Main from '../components/section/Main'
import Banner from '../components/home/Banner'
import Video from '../components/video/Video'
import Brand from '../components/home/Brand'

const Home = () => {
    return (
        <Main
            tittle="치킨"
            description="치킨">
            <Banner />
            <Video />
            <Brand />
        </Main>
    )
}

export default Home
