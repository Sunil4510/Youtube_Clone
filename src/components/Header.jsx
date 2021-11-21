import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import YoutubeIcon from '@material-ui/icons/YouTube';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import '../App.css'
const Header = () => {
//     const [promt, setpromt] = useState(true);
//     const handleTooltipClose = ()=>{
//        setpromt(true);
//     }
//    const handleTooltipOpen = ()=>{
//         setpromt(false);
//     }
    return (
        //BEM classname
        <div className="header flex items-center justify-between p-2 sticky z-100 bg-white w-auto shadow-md top-0 sm:p-0 sm:h-10">
           <div className="header_left flex items-center justify-evenly">
                <MenuIcon className="header_menu ml-3 sm:ml-0 cursor-pointer"/>
                <Tooltip title={<h1>Youtube Home</h1>} >
                    <YoutubeIcon className="header_youtube ml-3 sm:ml-0 cursor-pointer"/>
                </Tooltip>  
                    
                <Tooltip title="Youtube Home" >
                    <p className="font-bold select-none text-white text-3xl bg-gray-400 h-12 shadow-md w-40 sm:w-10 sm:h-3 sm:text-2xs rounded text-center cursor-pointer">
                    <span className="text-white mt-4">YouTube</span></p>
                </Tooltip>  

           </div>

            <div className="header_middle flex items-center border-2 border-black rounded-3xl shadow-md ml-2 mr-2 sm:h-4 sm:ml-1">
                <input type="text" title="Search" placeholder="Search" className="header_input flex-1 border-none outline-none font-medium text-xl sm:text-2xs ml-6 mr-3 sm:ml-3 sm:mr-0"/>
                        <Tooltip title="Search" 
                        // promt={promt}
                        // disableFocusListener 
                        // disableTouchListener
                        // disableHoverListener 
                        >
                        <IconButton>
                            <SearchIcon className="header_search cursor-pointer text-gray-600 rounded-full hover:text-gray-400"/>
                        </IconButton>
                        </Tooltip>

            </div>

           <div className="header_right flex items-center mr-4 ml-2 space-x-6 sm:space-x-1">
               <Tooltip title="Create Video" >
                    <VideoCallIcon className="cursor-pointer"/>
                </Tooltip>    
                
                <Tooltip title="Youtube Apps" >
                    <AppsIcon className="cursor-pointer"/>
                </Tooltip>

                <Tooltip title="Notifications" >
                    <NotificationsIcon className="cursor-pointer"/>
                </Tooltip>    
                <Avatar className="header_avatar cursor-pointer"/>
           </div>  
        </div>
    )
}

export default Header
