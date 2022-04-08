import React from 'react'
import Slider from '../components/Slider/Slider'
import ScrollableTabsButtonAuto from './HomePage/ScrollableTabsButtonAuto'
import Vd from './HomePage/Video'
import Post from './HomePage/Post'
import Post2 from './HomePage/Post2'
const Home = (props) => {
    return (
        <div>
            <Slider/>
            <ScrollableTabsButtonAuto/>
            <Vd/>
            <Post/>
            <Post2 />
        </div>
    )
}

export default Home
