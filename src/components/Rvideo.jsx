import React from 'react'
import './Rvideo.css'
import Videos from './Videos'

const Rvideo = () => {
    const look= "cursor-pointer border-2 mx-4 sm:mx-2 px-4 sm:px-4 h-8 sm:h-4 text-center sm:text-2xs border-white text-white bg-gray-400 font-bold rounded-lg hover:bg-gray-600 hover:border-black"
    return (
        <>
        <div className="rvideo bg-gray-100  h-screen  py-6 px-6 pb-0 sm:py-2 sm:px-2 overflow-x-scroll">
            <div className="rvideo_scroll flex py-2 px-2 overflow-x-scroll ">
                <h1 className={look}>Reactjs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
                <h1 className={look}>Nodejs</h1>
            </div>
            <Videos/>
        </div>
        
        </>

    )
}

export default Rvideo
