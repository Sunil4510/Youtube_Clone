import React from 'react'
import './Rvideo.css'
import Videos from './Videos'

const Rvideo = () => {
    const look= "transition duration-100 transform hover:scale-125 cursor-pointer border-2 mx-4 sm:mx-2 px-4 sm:px-4 h-8 sm:h-4 text-center sm:text-2xs border-white text-white bg-gray-400 font-bold rounded-lg hover:bg-gray-600 hover:border-black"

    return (
        <>
        
        <div className="rvideo bg-gray-100 h-screen overflow-x-scroll">
            <div className="rvideo_scroll flex overflow-x-scroll py-3 sm:py-2 px-2 sticky top-0 bg-gray-100 z-100 shadow-lg w-screen">
                <h1 className={look}>Reactjs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Sports</h1>
                <h1 className={look}>News</h1>
                <h1 className={look}>Movies</h1>
                <h1 className={look}>Cricket</h1>
                <h1 className={look}>Football</h1>
                <h1 className={look}>Politics</h1>
                <h1 className={look}>Mongodb</h1>
                <h1 className={look}>Trending</h1>
                <h1 className={look}>Gaming</h1>
                <h1 className={look}>Dynamo</h1>
                <h1 className={look}>Firebase</h1>
                <h1 className={look}>AWS</h1>
                <h1 className={look}>Google</h1>
                <h1 className={look}>facebook</h1>
                <h1 className={look}>Tesla</h1>
                <h1 className={look}>Universe</h1>
                <h1 className={look}>SpaceX</h1>
                <h1 className={look}>NASA</h1>
                <h1 className={look}>Amazon</h1>
                <h1 className={look}>Metaverse</h1>
                <h1 className={look}>Chrome</h1>
                <h1 className={look}>Youtube</h1>
                <h1 className={look}>VScode</h1>
    </div>
            <Videos/>
        </div>
        
        </>

    )
}

export default Rvideo
