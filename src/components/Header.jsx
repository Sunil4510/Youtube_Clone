import React, { createContext,useState,useReducer,useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import YoutubeIcon from '@material-ui/icons/YouTube';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Typography } from '@material-ui/core';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import '../App.css'
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { giving } from '../actions';
//import { reducer } from './reducer';

//export const InputInfo = createContext(); 

const Header = () => {
     const dispatch = useDispatch();
    const [inputsearch, setinputsearch] = useState("");
    
    //  const initialState ={
    //     info:inputsearch,
    // };
    // const [state, dispatch] = useReducer(reducer, initialState);
   
    // const SearchInfo = () =>{
    //     return dispatch({
    //         type:'input',
    //         payload:inputsearch,
    //     })
    // }
    // useEffect(()=>{
    //     dispatch({type:'inputs',
    //      payload:inputsearch,
    //     })
    // },[state]);
   // <InputInfo.Provider value={{...state,SearchInfo}}>
       // </InputInfo.Provider>

   
    return (
        //BEM classname
        <>
       
        <div className="header pb-3 border-gray-200 flex items-center justify-between p-2 sticky z-100 bg-white w-auto shadow-lg top-0 sm:p-0 sm:h-10">   
        <div className="header_left flex items-center justify-evenly">
                <MenuIcon className="header_menu ml-3 sm:ml-0 cursor-pointer"/>
                <Link to="/">
                <Tooltip title={<Typography>Youtube Home</Typography>} >
                    <YoutubeIcon className="header_youtube ml-3 sm:ml-0 cursor-pointer"/>
                </Tooltip>  
                </Link>

                <Link to="/">
                <Tooltip title={<Typography>Youtube Home</Typography>}>
                    <p className="font-bold select-none text-white text-3xl bg-gray-400 h-12 shadow-md w-40 sm:w-10 sm:h-3 sm:text-2xs rounded text-center cursor-pointer">
                    <span className="text-white mt-4">YouTube</span></p>
                </Tooltip> 
                </Link>
 
           </div>

            <div className="header_middle flex items-center border-2 border-black rounded-3xl shadow-md ml-2 mr-2 sm:h-4 sm:ml-1">
                <input type="text" title="Search" placeholder="Search" value={inputsearch} onChange={(e)=>setinputsearch(e.target.value)} className="header_input flex-1 border-none outline-none font-medium text-xl sm:text-2xs ml-6 mr-3 sm:ml-3 sm:mr-0"/>
                <Tooltip title="Search" 
                        // promt={promt}
                        // disableFocusListener 
                        // disableTouchListener
                        // disableHoverListener 
                        >
                        <IconButton>
                        <Link to={`/search/${inputsearch}`}>        
                            <SearchIcon className="header_search cursor-pointer text-gray-600 rounded-full hover:text-gray-400" onClick={()=>dispatch(giving(inputsearch))}/>
                        </Link>
                        </IconButton>
                        </Tooltip>
            </div>

           <div className="header_right flex items-center mr-4 ml-2 space-x-6 sm:space-x-1">
               <Tooltip title={<Typography>Create Video</Typography>} >
                    <VideoCallIcon className="cursor-pointer"/>
                </Tooltip>    
                
                <Tooltip title={<Typography>Youtube Apps</Typography>}>
                    <AppsIcon className="cursor-pointer"/>
                </Tooltip>

                <Tooltip title={<Typography>Notifications</Typography>}>
                    <NotificationsIcon className="cursor-pointer"/>
                </Tooltip>    
                <Avatar className="header_avatar cursor-pointer"/>
           </div>  
        </div>
        </>
    )
}

export default Header


//     const [promt, setpromt] = useState(true);
//     const handleTooltipClose = ()=>{
//        setpromt(true);
//     }
//    const handleTooltipOpen = ()=>{
//         setpromt(false);
//     }