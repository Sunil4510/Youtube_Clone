import React from 'react'
import '../App.css'
const Sidebarow = ({selected,Icon,title}) => {
    return (
        <div className={`sidebarow ${selected && "selected"} flex items-center px-6 py-3 sm:px-3 sm:py-2 group hover:bg-gray-300 cursor-pointer`}>
            <Icon className="sidebarow_icons text-gray-600 group-hover:text-red-600"/>
            <h2 className="flex-1 ml-6 text-base font-medium sm:text-2xs sm:ml-3 group-hover:font-bold">{title}</h2>
        </div>
    )
}

export default Sidebarow
