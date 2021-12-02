import React from 'react'
import './Sidebar.css'
import HomeIcon from "@material-ui/icons/Home"
import Sidebarow from './Sidebarow'
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions" 
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"


const Sidebar = () => {

    return (

        <>
        <div className="sidebar">
            <Sidebarow selected Icon={HomeIcon} title="Home"/>
            <Sidebarow Icon={WhatshotIcon} title="Trending"/>
            <Sidebarow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr className="h-px border-0 bg-gray-200 mt-3 mb-3"/>
            
            <Sidebarow Icon={VideoLibraryIcon} title="Library"/>
            <Sidebarow Icon={HistoryIcon} title="History"/>
            <Sidebarow Icon={OndemandVideoIcon} title="Your Videos"/>
            <Sidebarow Icon={WatchLaterIcon} title="Watch Later"/>
            <Sidebarow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <Sidebarow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
            <hr className="h-px border-0 bg-gray-200 mt-3 mb-3"/>
        </div>
        
    </>
    )
}

export default Sidebar
