import React from 'react'
import Sidebar from '../components/Sidebar'
import {useSelector} from 'react-redux'
const Search = () => {
    const searchdata = useSelector((state)=>state.giveThedata);
    return (
        <div className="app_page flex">
            <Sidebar/>
            <div>
                <h1 className="text-gray-600 font-semibold ml-5 font-mono">You searched for: "{searchdata}"</h1>
            </div>
         </div>
    )
}

export default Search
