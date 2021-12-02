import React from 'react'
import Sidebar from '../components/Sidebar'
import {useSelector} from 'react-redux'
const Search = () => {
    const searchdata = useSelector((state)=>state.giveThedata);
    return (
        <div className="app_page flex">
            <Sidebar/>
            <div>
                <h1>You searched for: "{searchdata}"</h1>
            </div>
         </div>
    )
}

export default Search
